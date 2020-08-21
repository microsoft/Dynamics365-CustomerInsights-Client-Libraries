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
    /// Represents the base linked entity.
    /// </summary>
    public partial class MeasureLinkedEntity
    {
        /// <summary>
        /// Initializes a new instance of the MeasureLinkedEntity class.
        /// </summary>
        public MeasureLinkedEntity()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the MeasureLinkedEntity class.
        /// </summary>
        /// <param name="kind">Possible values include: 'base', 'join'</param>
        /// <param name="entity">Gets the name of the entity.</param>
        /// <param name="alias">Gets the alias of the entity.</param>
        public MeasureLinkedEntity(string kind = default(string), string entity = default(string), string alias = default(string))
        {
            Kind = kind;
            Entity = entity;
            Alias = alias;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets possible values include: 'base', 'join'
        /// </summary>
        [JsonProperty(PropertyName = "kind")]
        public string Kind { get; set; }

        /// <summary>
        /// Gets the name of the entity.
        /// </summary>
        [JsonProperty(PropertyName = "entity")]
        public string Entity { get; private set; }

        /// <summary>
        /// Gets the alias of the entity.
        /// </summary>
        [JsonProperty(PropertyName = "alias")]
        public string Alias { get; private set; }

    }
}
