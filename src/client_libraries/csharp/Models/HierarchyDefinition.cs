// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Dynamics.CustomerInsights.Api.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    /// <summary>
    /// Represents a Hierarchy entity used to define a B2B segment/measure.
    /// </summary>
    public partial class HierarchyDefinition
    {
        /// <summary>
        /// Initializes a new instance of the HierarchyDefinition class.
        /// </summary>
        public HierarchyDefinition()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the HierarchyDefinition class.
        /// </summary>
        /// <param name="hierarchyEntityName">Gets the Hierarchy entity fully
        /// qualified name.</param>
        /// <param name="sourceAttributeName">Gets the Hierarchy entity Source
        /// attribute name.</param>
        /// <param name="destinationAttributeName">Gets the Hierarchy entity
        /// Destination attribute name.</param>
        public HierarchyDefinition(string hierarchyEntityName = default(string), string sourceAttributeName = default(string), string destinationAttributeName = default(string))
        {
            HierarchyEntityName = hierarchyEntityName;
            SourceAttributeName = sourceAttributeName;
            DestinationAttributeName = destinationAttributeName;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets the Hierarchy entity fully qualified name.
        /// </summary>
        [JsonProperty(PropertyName = "hierarchyEntityName")]
        public string HierarchyEntityName { get; set; }

        /// <summary>
        /// Gets the Hierarchy entity Source attribute name.
        /// </summary>
        [JsonProperty(PropertyName = "sourceAttributeName")]
        public string SourceAttributeName { get; set; }

        /// <summary>
        /// Gets the Hierarchy entity Destination attribute name.
        /// </summary>
        [JsonProperty(PropertyName = "destinationAttributeName")]
        public string DestinationAttributeName { get; set; }

    }
}