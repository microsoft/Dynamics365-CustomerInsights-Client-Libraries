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
    /// Data source Information
    /// </summary>
    public partial class DataSourceInfo
    {
        /// <summary>
        /// Initializes a new instance of the DataSourceInfo class.
        /// </summary>
        public DataSourceInfo()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the DataSourceInfo class.
        /// </summary>
        public DataSourceInfo(DataSourceMetadata dataSourceMetadata = default(DataSourceMetadata), Model model = default(Model))
        {
            DataSourceMetadata = dataSourceMetadata;
            Model = model;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "dataSourceMetadata")]
        public DataSourceMetadata DataSourceMetadata { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "model")]
        public Model Model { get; set; }

    }
}
