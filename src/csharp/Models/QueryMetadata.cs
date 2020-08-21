// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Dynamics.CustomerInsights.Api.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    public partial class QueryMetadata
    {
        /// <summary>
        /// Initializes a new instance of the QueryMetadata class.
        /// </summary>
        public QueryMetadata()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the QueryMetadata class.
        /// </summary>
        public QueryMetadata(string queryId = default(string), string queryName = default(string), string queryGroupId = default(string), string entityName = default(string), bool? loadEnabled = default(bool?))
        {
            QueryId = queryId;
            QueryName = queryName;
            QueryGroupId = queryGroupId;
            EntityName = entityName;
            LoadEnabled = loadEnabled;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "queryId")]
        public string QueryId { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "queryName")]
        public string QueryName { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "queryGroupId")]
        public string QueryGroupId { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "entityName")]
        public string EntityName { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "loadEnabled")]
        public bool? LoadEnabled { get; set; }

    }
}