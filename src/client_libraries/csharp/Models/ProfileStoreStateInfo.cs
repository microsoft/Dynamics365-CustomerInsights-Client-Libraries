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
    /// Represents runtime profile store state
    /// </summary>
    public partial class ProfileStoreStateInfo
    {
        /// <summary>
        /// Initializes a new instance of the ProfileStoreStateInfo class.
        /// </summary>
        public ProfileStoreStateInfo()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the ProfileStoreStateInfo class.
        /// </summary>
        /// <param name="ingestionTime">Gets the latest date of
        /// ingestion.</param>
        /// <param name="instanceId">Customer Insights instance id associated
        /// with this object.</param>
        public ProfileStoreStateInfo(System.DateTime? ingestionTime = default(System.DateTime?), ProfileStoreCollectionInfo primaryInfo = default(ProfileStoreCollectionInfo), ProfileStoreCollectionInfo secondaryInfo = default(ProfileStoreCollectionInfo), System.Guid? instanceId = default(System.Guid?))
        {
            IngestionTime = ingestionTime;
            PrimaryInfo = primaryInfo;
            SecondaryInfo = secondaryInfo;
            InstanceId = instanceId;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets the latest date of ingestion.
        /// </summary>
        [JsonProperty(PropertyName = "ingestionTime")]
        public System.DateTime? IngestionTime { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "primaryInfo")]
        public ProfileStoreCollectionInfo PrimaryInfo { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "secondaryInfo")]
        public ProfileStoreCollectionInfo SecondaryInfo { get; set; }

        /// <summary>
        /// Gets or sets customer Insights instance id associated with this
        /// object.
        /// </summary>
        [JsonProperty(PropertyName = "instanceId")]
        public System.Guid? InstanceId { get; set; }

    }
}
