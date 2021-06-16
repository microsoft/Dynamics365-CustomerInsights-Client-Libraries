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

    /// <summary>
    /// Represent a Segment Projection.
    /// </summary>
    public partial class SegmentationProjection
    {
        /// <summary>
        /// Initializes a new instance of the SegmentationProjection class.
        /// </summary>
        public SegmentationProjection()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the SegmentationProjection class.
        /// </summary>
        /// <param name="entityName">Gets the Entity Name of the
        /// projection.</param>
        /// <param name="attributeNames">Gets the Attribute Names being
        /// projected.</param>
        public SegmentationProjection(string entityName = default(string), IList<string> attributeNames = default(IList<string>))
        {
            EntityName = entityName;
            AttributeNames = attributeNames;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets the Entity Name of the projection.
        /// </summary>
        [JsonProperty(PropertyName = "entityName")]
        public string EntityName { get; set; }

        /// <summary>
        /// Gets the Attribute Names being projected.
        /// </summary>
        [JsonProperty(PropertyName = "attributeNames")]
        public IList<string> AttributeNames { get; set; }

    }
}