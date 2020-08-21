// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Dynamics.CustomerInsights.Api.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    public partial class StringLengthCount
    {
        /// <summary>
        /// Initializes a new instance of the StringLengthCount class.
        /// </summary>
        public StringLengthCount()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the StringLengthCount class.
        /// </summary>
        /// <param name="length">Gets or sets the string length.</param>
        /// <param name="count">Gets or sets the count of string values with
        /// the Length.</param>
        public StringLengthCount(long? length = default(long?), long? count = default(long?))
        {
            Length = length;
            Count = count;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets the string length.
        /// </summary>
        [JsonProperty(PropertyName = "length")]
        public long? Length { get; set; }

        /// <summary>
        /// Gets or sets the count of string values with the Length.
        /// </summary>
        [JsonProperty(PropertyName = "count")]
        public long? Count { get; set; }

    }
}
