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

    public partial class Entity
    {
        /// <summary>
        /// Initializes a new instance of the Entity class.
        /// </summary>
        public Entity()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the Entity class.
        /// </summary>
        public Entity(string name = default(string), string description = default(string), bool? isHidden = default(bool?), IList<Annotation> annotations = default(IList<Annotation>))
        {
            Name = name;
            Description = description;
            IsHidden = isHidden;
            Annotations = annotations;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "isHidden")]
        public bool? IsHidden { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "annotations")]
        public IList<Annotation> Annotations { get; set; }

    }
}
