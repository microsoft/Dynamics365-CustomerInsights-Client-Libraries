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
    /// Defines headers for Get-data-source operation.
    /// </summary>
    public partial class GetDataSourceHeaders
    {
        /// <summary>
        /// Initializes a new instance of the GetDataSourceHeaders class.
        /// </summary>
        public GetDataSourceHeaders()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the GetDataSourceHeaders class.
        /// </summary>
        /// <param name="wWWAuthenticate">Bearer</param>
        public GetDataSourceHeaders(string wWWAuthenticate = default(string))
        {
            WWWAuthenticate = wWWAuthenticate;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets bearer
        /// </summary>
        [JsonProperty(PropertyName = "WWW-Authenticate")]
        public string WWWAuthenticate { get; set; }

    }
}
