// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Dynamics.CustomerInsights.Api.Models
{
    using Newtonsoft.Json;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;

    public partial class GraphJobOptions
    {
        /// <summary>
        /// Initializes a new instance of the GraphJobOptions class.
        /// </summary>
        public GraphJobOptions()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the GraphJobOptions class.
        /// </summary>
        /// <param name="additionalProperties">Unmatched properties from the
        /// message are deserialized this collection</param>
        public GraphJobOptions(IDictionary<string, object> additionalProperties = default(IDictionary<string, object>), bool? runDownstreamAfterMerge = default(bool?))
        {
            AdditionalProperties = additionalProperties;
            RunDownstreamAfterMerge = runDownstreamAfterMerge;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets unmatched properties from the message are deserialized
        /// this collection
        /// </summary>
        [JsonExtensionData]
        public IDictionary<string, object> AdditionalProperties { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "runDownstreamAfterMerge")]
        public bool? RunDownstreamAfterMerge { get; set; }

    }
}
