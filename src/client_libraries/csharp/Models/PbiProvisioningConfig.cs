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
    /// The information on how authentication needs to happen for embedded
    /// resources
    /// </summary>
    public partial class PbiProvisioningConfig
    {
        /// <summary>
        /// Initializes a new instance of the PbiProvisioningConfig class.
        /// </summary>
        public PbiProvisioningConfig()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the PbiProvisioningConfig class.
        /// </summary>
        /// <param name="useClientLoginForReports">Indicates whether we need to
        /// use client login for Pbi Embedded</param>
        /// <param name="useClientLoginForPQ">Indicates whether we need to use
        /// client login for PQ Embedded</param>
        /// <param name="capacityId">Power BI Capacity id</param>
        public PbiProvisioningConfig(bool? useClientLoginForReports = default(bool?), bool? useClientLoginForPQ = default(bool?), string capacityId = default(string))
        {
            UseClientLoginForReports = useClientLoginForReports;
            UseClientLoginForPQ = useClientLoginForPQ;
            CapacityId = capacityId;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets indicates whether we need to use client login for Pbi
        /// Embedded
        /// </summary>
        [JsonProperty(PropertyName = "useClientLoginForReports")]
        public bool? UseClientLoginForReports { get; set; }

        /// <summary>
        /// Gets or sets indicates whether we need to use client login for PQ
        /// Embedded
        /// </summary>
        [JsonProperty(PropertyName = "useClientLoginForPQ")]
        public bool? UseClientLoginForPQ { get; set; }

        /// <summary>
        /// Gets or sets power BI Capacity id
        /// </summary>
        [JsonProperty(PropertyName = "capacityId")]
        public string CapacityId { get; set; }

    }
}
