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
    /// Represents a User
    /// </summary>
    public partial class UserInfo
    {
        /// <summary>
        /// Initializes a new instance of the UserInfo class.
        /// </summary>
        public UserInfo()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the UserInfo class.
        /// </summary>
        /// <param name="userId">Gets the unique ID for this user.</param>
        /// <param name="upn">Gets user identifier.</param>
        /// <param name="instancesIds">Gets list of Instances Id.</param>
        /// <param name="preferredLanguage">Gets user preferred
        /// language.</param>
        /// <param name="preferredRegionalFormat">Gets user preferred regional
        /// format.</param>
        /// <param name="defaultInstance">Gets user default instance
        /// id.</param>
        /// <param name="industryDemo">Gets the industry demo selected by user
        /// during trial</param>
        /// <param name="tenantId">Gets the tenant id of the user.</param>
        /// <param name="hasSeenWelcome">Gets a value indicating whether the
        /// user has seen the all apps (welcome) page.</param>
        /// <param name="createdUtc">Gets the created time of User settings
        /// created for EI Migration.</param>
        /// <param name="allowEmailContacts">Gets a value indicating whether
        /// the user Opt-In to be contacted through emails. This is for CPM
        /// integration from EI.</param>
        /// <param name="region">Gets the region that the user belongs
        /// to.</param>
        /// <param name="lastUsedExperience">Possible values include:
        /// 'audienceInsights', 'engagementInsights',
        /// 'audienceInsightsB2B'</param>
        /// <param name="instanceId">Customer Insights instance id associated
        /// with this object.</param>
        public UserInfo(System.Guid? userId = default(System.Guid?), string upn = default(string), IList<InstanceInfo> instancesIds = default(IList<InstanceInfo>), string preferredLanguage = default(string), string preferredRegionalFormat = default(string), System.Guid? defaultInstance = default(System.Guid?), UserNotificationsSettings userNotificationsSettings = default(UserNotificationsSettings), System.Guid? industryDemo = default(System.Guid?), System.Guid? tenantId = default(System.Guid?), bool? hasSeenWelcome = default(bool?), System.DateTime? createdUtc = default(System.DateTime?), bool? allowEmailContacts = default(bool?), PortalSettings portalSettings = default(PortalSettings), TermsOfUse termsOfUse = default(TermsOfUse), string region = default(string), string lastUsedExperience = default(string), System.Guid? instanceId = default(System.Guid?))
        {
            UserId = userId;
            Upn = upn;
            InstancesIds = instancesIds;
            PreferredLanguage = preferredLanguage;
            PreferredRegionalFormat = preferredRegionalFormat;
            DefaultInstance = defaultInstance;
            UserNotificationsSettings = userNotificationsSettings;
            IndustryDemo = industryDemo;
            TenantId = tenantId;
            HasSeenWelcome = hasSeenWelcome;
            CreatedUtc = createdUtc;
            AllowEmailContacts = allowEmailContacts;
            PortalSettings = portalSettings;
            TermsOfUse = termsOfUse;
            Region = region;
            LastUsedExperience = lastUsedExperience;
            InstanceId = instanceId;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets the unique ID for this user.
        /// </summary>
        [JsonProperty(PropertyName = "userId")]
        public System.Guid? UserId { get; set; }

        /// <summary>
        /// Gets user identifier.
        /// </summary>
        [JsonProperty(PropertyName = "upn")]
        public string Upn { get; set; }

        /// <summary>
        /// Gets list of Instances Id.
        /// </summary>
        [JsonProperty(PropertyName = "instancesIds")]
        public IList<InstanceInfo> InstancesIds { get; set; }

        /// <summary>
        /// Gets user preferred language.
        /// </summary>
        [JsonProperty(PropertyName = "preferredLanguage")]
        public string PreferredLanguage { get; set; }

        /// <summary>
        /// Gets user preferred regional format.
        /// </summary>
        [JsonProperty(PropertyName = "preferredRegionalFormat")]
        public string PreferredRegionalFormat { get; set; }

        /// <summary>
        /// Gets user default instance id.
        /// </summary>
        [JsonProperty(PropertyName = "defaultInstance")]
        public System.Guid? DefaultInstance { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "userNotificationsSettings")]
        public UserNotificationsSettings UserNotificationsSettings { get; set; }

        /// <summary>
        /// Gets the industry demo selected by user during trial
        /// </summary>
        [JsonProperty(PropertyName = "industryDemo")]
        public System.Guid? IndustryDemo { get; set; }

        /// <summary>
        /// Gets the tenant id of the user.
        /// </summary>
        [JsonProperty(PropertyName = "tenantId")]
        public System.Guid? TenantId { get; set; }

        /// <summary>
        /// Gets a value indicating whether the user has seen the all apps
        /// (welcome) page.
        /// </summary>
        [JsonProperty(PropertyName = "hasSeenWelcome")]
        public bool? HasSeenWelcome { get; set; }

        /// <summary>
        /// Gets the created time of User settings created for EI Migration.
        /// </summary>
        [JsonProperty(PropertyName = "createdUtc")]
        public System.DateTime? CreatedUtc { get; set; }

        /// <summary>
        /// Gets a value indicating whether the user Opt-In to be contacted
        /// through emails. This is for CPM integration from EI.
        /// </summary>
        [JsonProperty(PropertyName = "allowEmailContacts")]
        public bool? AllowEmailContacts { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "portalSettings")]
        public PortalSettings PortalSettings { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "termsOfUse")]
        public TermsOfUse TermsOfUse { get; set; }

        /// <summary>
        /// Gets the region that the user belongs to.
        /// </summary>
        [JsonProperty(PropertyName = "region")]
        public string Region { get; set; }

        /// <summary>
        /// Gets or sets possible values include: 'audienceInsights',
        /// 'engagementInsights', 'audienceInsightsB2B'
        /// </summary>
        [JsonProperty(PropertyName = "lastUsedExperience")]
        public string LastUsedExperience { get; set; }

        /// <summary>
        /// Gets or sets customer Insights instance id associated with this
        /// object.
        /// </summary>
        [JsonProperty(PropertyName = "instanceId")]
        public System.Guid? InstanceId { get; set; }

    }
}
