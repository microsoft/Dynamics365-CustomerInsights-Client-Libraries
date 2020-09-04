namespace csharp_server_to_server
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.Dynamics.CustomerInsights.Api;
    using Microsoft.Dynamics.CustomerInsights.Api.Models;
    using Newtonsoft.Json.Linq;

    public class SampleApiInteractions
    {
        private readonly CustomerInsights api;
        private const string CustomerIdPropertyName = "CustomerId";

        public SampleApiInteractions(CustomerInsights api)
        {
            this.api = api;
        }

        /// <summary>
        /// Facilitates some interactions with Customer Insights instances and Customer entities on that instance.
        /// 
        /// Notes: 
        ///     * These interactions require that you have the following entities on the choosen instance
        ///       - Customer (this sample app would not be useful without this; it is generally the only searchable entity on an instance)
        ///             ~ Expected to have "CustomerId" property (change `CustomerIdPropertyName` if your Customer entity has a different property to id it)
        ///       - Customer_Measure (these are "Customer Attribute" Measures added to your instance)
        ///       - UnifiedActivity (these are any activites added to your account)
        ///       
        ///       - If Customer_Measure or UnifiedActivity are missing on your account, please change the `relativePath` parameters on `GetEntitiesWithODataQueryParametersAsync`
        ///         calls in `SearchCustomerAndChooseCardsAsync` and `FilterCustomerAndChooseCardsAsync`. Remove the missing entities from the `$expand` query parameter.
        /// 
        ///     * If you are getting errors that a particular entity does not contain the expected property,
        ///       please go to the Customer Insights portal and visit Unify -> Merge tab and `edit` the property in question (triple dots on right side of property row).
        ///       Verify that the `Name` field is what you are passing in the interaction.
        ///     
        ///         - Another check to perform:
        ///             Navigate to https://home.ci.ai.dynamics.com/app/customers/search/config and ensure that the properties 
        ///             you are using are both added for `search` (allows interaction #1 to search the term against this property) 
        ///             and a filter is added (allows interaction #2 to filter Customer entities against this property).
        ///     
        ///     * If API requests are failing for an unknown reason, use the `WithHttpMessages` version of the call to inspect
        ///       the raw request and response being used.
        ///       e.g. `api.GetEntitiesWithODataQueryParametersAsync` can become `api.GetEntitiesWithODataQueryParametersWithHttpMessagesAsync`
        /// </summary>
        /// <returns>A task to await for interactions to complete.</returns>
        public async Task StartAsync()
        {
            Console.WriteLine("------------------------------------------------------------------------------------------------------------------------");
            Console.WriteLine("Welcome to Customer Insights dotnet sample!\n");
            Console.WriteLine("This application demonstrates what a server-to-server implementation would look like using the Microsoft.Dynamics.CustomerInsights.Api NuGet package.");
            Console.WriteLine("Instead of a web-server, this sample is a console app with some interactivity. The principles for implementation are the same.");
            Console.WriteLine("------------------------------------------------------------------------------------------------------------------------\n");

            var choosenInstance = await GetInstancesAndChooseForSearchAsync();
            if (choosenInstance == null)
            {
                Console.WriteLine("Error: instance is null");
                return;
            }

            var interaction = ChooseInteraction();
            while (interaction != "q")
            {
                var interactionChoice = int.Parse(interaction);
                switch (interactionChoice)
                {
                    case 1:
                        await SearchCustomerAndChooseCardsAsync(choosenInstance);
                        break;

                    case 2:
                        await FilterCustomerAndChooseCardsAsync(choosenInstance);
                        break;
                }

                interaction = ChooseInteraction();
            }
            
            Console.WriteLine("\nThank you for using the sample app!");
        }

        /// <summary>
        /// Allows user to choose an interaction to perform.
        /// </summary>
        /// <returns>An integer representing the interaction.</returns>
        private string ChooseInteraction()
        {
            Console.WriteLine("\nChoose an interaction to perform on instance:");
            Console.WriteLine("\t 1. Search a Customer entity.");
            Console.WriteLine("\t 2. Find a Customer entity by property.");
            Console.WriteLine("\t 'q' to quit.");
            Console.Write("\nEnter choice: ");
            var choice = Console.ReadLine();

            int interactionChoice = -1;
            while (choice != "q" && (!int.TryParse(choice, out interactionChoice) || interactionChoice < 1 || interactionChoice > 2))
            {
                Console.WriteLine("\nError: Please enter a choice.");
                Console.Write("Enter choice: ");
                choice = Console.ReadLine();
            }

            return interactionChoice.ToString();
        }

        /// <summary>
        /// Queries for instances with permissions granted to the app registration. Allows user to choose one to perform interactions on.
        /// </summary>
        /// <returns><see cref="InstanceInfo"/> for the choosen instance.</returns>
        private async Task<InstanceInfo> GetInstancesAndChooseForSearchAsync()
        {
            Console.WriteLine("Querying for instances/environments with permissions granted to app registration...\n");

            object allInstancesResult;
            try
            {
                allInstancesResult = await api.GetAllInstancesAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine($"Exception getting all instances: {e}");
                return null;
            }

            if (allInstancesResult is IEnumerable<InstanceInfo> instanceInfoResponse)
            {
                if (instanceInfoResponse == null)
                {
                    Console.WriteLine("Error: instanceInfoResponse is null.");
                    return null; ;
                }

                Console.WriteLine($"Found {instanceInfoResponse.Count()} instances. Pick an instance to proceed:\n");

                Console.WriteLine($"Index\tInstance Name\tInstance Id");
                int i = 0;
                foreach (var instanceInfo in instanceInfoResponse)
                {
                    Console.WriteLine($"[{i}]\t{instanceInfo?.Name ?? "null"}\t{instanceInfo?.InstanceId?.ToString() ?? "null"}");
                    i++;
                }

                Console.Write("\nEnter index of instance: ");
                int instanceIndex;
                while (!int.TryParse(Console.ReadLine(), out instanceIndex) || instanceIndex < 0 || instanceIndex >= instanceInfoResponse.Count())
                {
                    Console.WriteLine("\nError: Please enter a valid instance index.");
                    Console.Write("Enter index of instance: ");
                }

                var pickedInstance = instanceInfoResponse.ElementAt(instanceIndex);
                Console.WriteLine($"\nPicked [{instanceIndex}] - {pickedInstance?.Name ?? "null"} ({pickedInstance?.InstanceId?.ToString() ?? "null"})\n");

                return pickedInstance;
            }
            else if (allInstancesResult is ApiErrorResult allInstancesError)
            {
                HandleApiErrorResult("GetAllInstancesAsync", allInstancesError);
            }
            else
            {
                throw new Exception($"Unknown response type from `GetAllInstancesAsync`");
            }

            return null;
        }

        /// <summary>
        /// Prompts user for a search term, then searches Customer entities for that term (based on search configuration).
        /// Once the search completes, the Customer entities are enumerated and user may choose to
        /// display 1 or many in console. Once 'q' is input, user is returned to interaction chooser (if only 1 entity is returned, it will display automatically then return).
        /// </summary>
        /// <param name="instanceInfo">The instance to search under.</param>
        /// <returns>An awaitable Task for interactions.</returns>
        private async Task SearchCustomerAndChooseCardsAsync(InstanceInfo instanceInfo)
        {
            Console.WriteLine($"\nEnter a search term to find a Customer entity.\n");
            Console.Write("Search term: ");
            var searchTerm = Console.ReadLine();

            object oDataQueryResponse;
            try
            {
                oDataQueryResponse = await api.GetEntitiesWithODataPathAsync(
                    instanceInfo.InstanceId.ToString(),
                    $"Customer",
                    true,
                    expand: "UnifiedActivity,Customer_Measure",
                    search: $"\"{searchTerm}\"");
            }
            catch (Exception e)
            {
                Console.WriteLine($"Exception getting Customer entities for search term {searchTerm}: {e}");
                return;
            }
            
            this.HandleODataCustomerResponse(oDataQueryResponse);
        }

        /// <summary>
        /// Prompts user for a Customer property and property value, then filters Customer entities that match the filter..
        /// Once the filter completes, the Customer entities are enumerated and user may choose to
        /// display 1 or many in console. Once 'q' is input, user is returned to interaction chooser (if only 1 entity is returned, it will display automatically then return).
        /// <param name="instanceInfo">The instance to search under.</param>
        /// <returns>An awaitable Task for interactions.</returns>
        private async Task FilterCustomerAndChooseCardsAsync(InstanceInfo instanceInfo)
        {
            Console.WriteLine($"Enter a property to filter a Customer entity.\n");
            Console.Write("Property name (e.g. EMail): ");
            var propertyName = Console.ReadLine();

            Console.WriteLine($"Enter '{propertyName}' value to filter a Customer entity.\n");
            Console.Write($"Value of '{propertyName}': ");
            var propertyValue = Console.ReadLine();

            object oDataQueryResponse;
            try
            {
                oDataQueryResponse = await api.GetEntitiesWithODataPathAsync(
                    instanceInfo.InstanceId.ToString(),
                    $"Customer",
                    true,
                    expand: "UnifiedActivity,Customer_Measure",
                    filter: $"{propertyName} eq '{propertyValue}'");
            }
            catch (Exception e)
            {
                Console.WriteLine($"Exception getting Customer entities for filter term `{propertyName} eq '{propertyValue}'`: {e}");
                return;
            }

            this.HandleODataCustomerResponse(oDataQueryResponse);
        }

        /// <summary>
        /// A helper function to display an ODataEntityPayload for Customer entities.
        /// Also detects if an error is receieved and handles it.
        /// </summary>
        /// <param name="oDataQueryResponse">The response from a GetEntitiesWithODataQueryParametersAsync call to get Customer entities</param>
        private void HandleODataCustomerResponse(object oDataQueryResponse)
        {
            if (oDataQueryResponse is ODataEntityPayload oDataPayload)
            {
                if (oDataQueryResponse == null)
                {
                    Console.WriteLine("ODataEntity payload was null.");
                    return;
                }

                if (oDataPayload.Value.Count == 1)
                {
                    this.DisplayCustomer(oDataPayload.Value.First() as JObject);
                    return;
                }

                Console.WriteLine($"\nFound {oDataPayload.Value.Count()} Customer entities that match your query.\n");
                if (oDataPayload.Value.Count() == 0)
                {
                    return;
                }

                Console.WriteLine($"Index\tId");
                int i = 0;
                foreach (JObject entity in oDataPayload.Value)
                {
                    Console.WriteLine($"[{i}]\t{entity.SelectToken(CustomerIdPropertyName).Value<string>()}");
                    i++;
                }

                Console.Write("\nEnter index of entity (q to quit): ");
                while (true)
                {
                    var input = Console.ReadLine();
                    if (int.TryParse(input, out int entityIndex))
                    {
                        if (entityIndex < 0 || entityIndex >= oDataPayload.Value.Count())
                        {
                            Console.WriteLine("\nError: Please enter a valid entity index.");
                            Console.Write("Enter index of entity (q to go back to choices): ");
                        }
                        else
                        {
                            this.DisplayCustomer(oDataPayload.Value.ElementAt(entityIndex) as JObject);

                            Console.Write("\nEnter index of another entity to display (q to go back to choices): ");
                        }
                    }
                    else if (input.Trim() == "q")
                    {
                        return;
                    }
                    else
                    {
                        Console.WriteLine("\nError: Please enter a valid entity index.");
                        Console.Write("Enter index of entity (q to go back to choices): ");
                    }
                }
            }
            else if (oDataQueryResponse is ODataError error)
            {
                HandleODataError("GetEntitiesWithODataQueryParametersAsync", error);
            }
            else
            {
                throw new Exception($"Unknown response type from `GetEntitiesWithODataQueryParametersAsync`");
            }
        }

        /// <summary>
        /// A helper function to enumerate properties on a Customer JToken and display them to console.
        /// </summary>
        /// <param name="customer">The customer to display</param>
        private void DisplayCustomer(JToken customer)
        {
            DisplayEntity("Customer", customer);

            var measures = customer.SelectToken("Customer_Measure");
            if (measures != null)
            {
                this.DisplayEntity("Measures", measures);
            }

            var activities = customer.SelectToken("UnifiedActivity");
            if (activities != null)
            {
                Console.WriteLine("\tActivities");
                Console.WriteLine("\t---");
                foreach (var activity in activities.OrderBy(a => a.SelectToken("ActivityTime").Value<DateTime>()))
                {
                    Console.WriteLine($"\t{activity.SelectToken("ActivityTime")}\t{activity.SelectToken("ActivityName")}\t{activity.SelectToken("Title")}");
                }
                Console.WriteLine();
            }
        }

        /// <summary>
        /// Helper function with logic to enumerate the JToken and print to console.
        /// </summary>
        /// <param name="entityName">The name of the entity to print.</param>
        /// <param name="entity">The entity to enumerate.</param>
        private void DisplayEntity(string entityName, JToken entity)
        {
            Console.WriteLine($"\t{entityName} ({entity.SelectToken(CustomerIdPropertyName).Value<string>()})");
            Console.WriteLine("\t---");
            Console.WriteLine($"\tProperty\tValue");
            foreach (var property in (entity as JObject).Properties())
            {
                if (property.Name == "UnifiedActivity" || property.Name == "Customer_Measure")
                {
                    continue;
                }

                Console.WriteLine($"\t{property.Name}\t{property.Value.Value<string>()}");
            }
            Console.WriteLine();
        }

        /// <summary>
        /// Handles a <see cref="ApiErrorResult"/>
        /// </summary>
        /// <param name="operationName">Operation that returned the result.</param>
        /// <param name="errorResult">The error object.</param>
        private static void HandleApiErrorResult(string operationName, ApiErrorResult errorResult)
        {
            HandleError(operationName, errorResult?.ErrorCode, errorResult?.Message);
        }

        /// <summary>
        /// Handles a <see cref="ODataError"/>
        /// </summary>
        /// <param name="operationName">Operation that returned the result.</param>
        /// <param name="error">The error object.</param>
        private static void HandleODataError(string operationName, ODataError error)
        {
            HandleError(operationName, error?.ErrorCode, error?.Message);
        }

        /// <summary>
        /// Helper function to print error and throw exception.
        /// </summary>
        /// <param name="operationName">Operation that returned the result.</param>
        /// <param name="code">A code related to the error.</param>
        /// <param name="message">A message related to the error.</param>
        private static void HandleError(string operationName, string code, string message)
        {
            Console.WriteLine($"Got error from `{operationName}`: {code} - {message}");
            throw new Exception(message);
        }
    }
}
