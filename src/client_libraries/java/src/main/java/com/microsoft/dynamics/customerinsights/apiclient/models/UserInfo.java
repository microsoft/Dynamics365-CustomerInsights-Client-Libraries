/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import java.util.UUID;
import java.util.List;
import org.joda.time.DateTime;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents a User.
 */
public class UserInfo {
    /**
     * Gets the unique ID for this user.
     */
    @JsonProperty(value = "userId")
    private UUID userId;

    /**
     * Gets user identifier.
     */
    @JsonProperty(value = "upn")
    private String upn;

    /**
     * Gets list of Instances Id.
     */
    @JsonProperty(value = "instancesIds")
    private List<InstanceInfo> instancesIds;

    /**
     * Gets user preferred language.
     */
    @JsonProperty(value = "preferredLanguage")
    private String preferredLanguage;

    /**
     * Gets user preferred regional format.
     */
    @JsonProperty(value = "preferredRegionalFormat")
    private String preferredRegionalFormat;

    /**
     * Gets user default instance id.
     */
    @JsonProperty(value = "defaultInstance")
    private UUID defaultInstance;

    /**
     * Gets a value indicating whether the user is a global admin. (not
     * persisted in store).
     */
    @JsonProperty(value = "isGlobalAdmin")
    private Boolean isGlobalAdmin;

    /**
     * Gets list of Instance types which are eligible to provision by user.
     * (not persisted in store).
     */
    @JsonProperty(value = "eligibleInstanceTypesToProvision")
    private List<String> eligibleInstanceTypesToProvision;

    /**
     * The userNotificationsSettings property.
     */
    @JsonProperty(value = "userNotificationsSettings")
    private UserNotificationsSettings userNotificationsSettings;

    /**
     * Gets the industry demo selected by user during trial.
     */
    @JsonProperty(value = "industryDemo")
    private UUID industryDemo;

    /**
     * Gets the tenant id of the user.
     */
    @JsonProperty(value = "tenantId")
    private UUID tenantId;

    /**
     * Gets a value indicating whether the user has seen the all apps (welcome)
     * page.
     */
    @JsonProperty(value = "hasSeenWelcome")
    private Boolean hasSeenWelcome;

    /**
     * Gets the created time of User settings created for EI Migration.
     */
    @JsonProperty(value = "createdUtc")
    private DateTime createdUtc;

    /**
     * Gets a value indicating whether the user Opt-In to be contacted through
     * emails. This is for CPM integration from EI.
     */
    @JsonProperty(value = "allowEmailContacts")
    private Boolean allowEmailContacts;

    /**
     * The portalSettings property.
     */
    @JsonProperty(value = "portalSettings")
    private PortalSettings portalSettings;

    /**
     * The termsOfUse property.
     */
    @JsonProperty(value = "termsOfUse")
    private TermsOfUse termsOfUse;

    /**
     * Gets the region that the user belongs to.
     */
    @JsonProperty(value = "region")
    private String region;

    /**
     * Customer Insights instance id associated with this object.
     */
    @JsonProperty(value = "instanceId")
    private UUID instanceId;

    /**
     * Get gets the unique ID for this user.
     *
     * @return the userId value
     */
    public UUID userId() {
        return this.userId;
    }

    /**
     * Set gets the unique ID for this user.
     *
     * @param userId the userId value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withUserId(UUID userId) {
        this.userId = userId;
        return this;
    }

    /**
     * Get gets user identifier.
     *
     * @return the upn value
     */
    public String upn() {
        return this.upn;
    }

    /**
     * Set gets user identifier.
     *
     * @param upn the upn value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withUpn(String upn) {
        this.upn = upn;
        return this;
    }

    /**
     * Get gets list of Instances Id.
     *
     * @return the instancesIds value
     */
    public List<InstanceInfo> instancesIds() {
        return this.instancesIds;
    }

    /**
     * Set gets list of Instances Id.
     *
     * @param instancesIds the instancesIds value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withInstancesIds(List<InstanceInfo> instancesIds) {
        this.instancesIds = instancesIds;
        return this;
    }

    /**
     * Get gets user preferred language.
     *
     * @return the preferredLanguage value
     */
    public String preferredLanguage() {
        return this.preferredLanguage;
    }

    /**
     * Set gets user preferred language.
     *
     * @param preferredLanguage the preferredLanguage value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withPreferredLanguage(String preferredLanguage) {
        this.preferredLanguage = preferredLanguage;
        return this;
    }

    /**
     * Get gets user preferred regional format.
     *
     * @return the preferredRegionalFormat value
     */
    public String preferredRegionalFormat() {
        return this.preferredRegionalFormat;
    }

    /**
     * Set gets user preferred regional format.
     *
     * @param preferredRegionalFormat the preferredRegionalFormat value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withPreferredRegionalFormat(String preferredRegionalFormat) {
        this.preferredRegionalFormat = preferredRegionalFormat;
        return this;
    }

    /**
     * Get gets user default instance id.
     *
     * @return the defaultInstance value
     */
    public UUID defaultInstance() {
        return this.defaultInstance;
    }

    /**
     * Set gets user default instance id.
     *
     * @param defaultInstance the defaultInstance value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withDefaultInstance(UUID defaultInstance) {
        this.defaultInstance = defaultInstance;
        return this;
    }

    /**
     * Get gets a value indicating whether the user is a global admin. (not persisted in store).
     *
     * @return the isGlobalAdmin value
     */
    public Boolean isGlobalAdmin() {
        return this.isGlobalAdmin;
    }

    /**
     * Set gets a value indicating whether the user is a global admin. (not persisted in store).
     *
     * @param isGlobalAdmin the isGlobalAdmin value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withIsGlobalAdmin(Boolean isGlobalAdmin) {
        this.isGlobalAdmin = isGlobalAdmin;
        return this;
    }

    /**
     * Get gets list of Instance types which are eligible to provision by user. (not persisted in store).
     *
     * @return the eligibleInstanceTypesToProvision value
     */
    public List<String> eligibleInstanceTypesToProvision() {
        return this.eligibleInstanceTypesToProvision;
    }

    /**
     * Set gets list of Instance types which are eligible to provision by user. (not persisted in store).
     *
     * @param eligibleInstanceTypesToProvision the eligibleInstanceTypesToProvision value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withEligibleInstanceTypesToProvision(List<String> eligibleInstanceTypesToProvision) {
        this.eligibleInstanceTypesToProvision = eligibleInstanceTypesToProvision;
        return this;
    }

    /**
     * Get the userNotificationsSettings value.
     *
     * @return the userNotificationsSettings value
     */
    public UserNotificationsSettings userNotificationsSettings() {
        return this.userNotificationsSettings;
    }

    /**
     * Set the userNotificationsSettings value.
     *
     * @param userNotificationsSettings the userNotificationsSettings value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withUserNotificationsSettings(UserNotificationsSettings userNotificationsSettings) {
        this.userNotificationsSettings = userNotificationsSettings;
        return this;
    }

    /**
     * Get gets the industry demo selected by user during trial.
     *
     * @return the industryDemo value
     */
    public UUID industryDemo() {
        return this.industryDemo;
    }

    /**
     * Set gets the industry demo selected by user during trial.
     *
     * @param industryDemo the industryDemo value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withIndustryDemo(UUID industryDemo) {
        this.industryDemo = industryDemo;
        return this;
    }

    /**
     * Get gets the tenant id of the user.
     *
     * @return the tenantId value
     */
    public UUID tenantId() {
        return this.tenantId;
    }

    /**
     * Set gets the tenant id of the user.
     *
     * @param tenantId the tenantId value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withTenantId(UUID tenantId) {
        this.tenantId = tenantId;
        return this;
    }

    /**
     * Get gets a value indicating whether the user has seen the all apps (welcome) page.
     *
     * @return the hasSeenWelcome value
     */
    public Boolean hasSeenWelcome() {
        return this.hasSeenWelcome;
    }

    /**
     * Set gets a value indicating whether the user has seen the all apps (welcome) page.
     *
     * @param hasSeenWelcome the hasSeenWelcome value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withHasSeenWelcome(Boolean hasSeenWelcome) {
        this.hasSeenWelcome = hasSeenWelcome;
        return this;
    }

    /**
     * Get gets the created time of User settings created for EI Migration.
     *
     * @return the createdUtc value
     */
    public DateTime createdUtc() {
        return this.createdUtc;
    }

    /**
     * Set gets the created time of User settings created for EI Migration.
     *
     * @param createdUtc the createdUtc value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withCreatedUtc(DateTime createdUtc) {
        this.createdUtc = createdUtc;
        return this;
    }

    /**
     * Get gets a value indicating whether the user Opt-In to be contacted through emails. This is for CPM integration from EI.
     *
     * @return the allowEmailContacts value
     */
    public Boolean allowEmailContacts() {
        return this.allowEmailContacts;
    }

    /**
     * Set gets a value indicating whether the user Opt-In to be contacted through emails. This is for CPM integration from EI.
     *
     * @param allowEmailContacts the allowEmailContacts value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withAllowEmailContacts(Boolean allowEmailContacts) {
        this.allowEmailContacts = allowEmailContacts;
        return this;
    }

    /**
     * Get the portalSettings value.
     *
     * @return the portalSettings value
     */
    public PortalSettings portalSettings() {
        return this.portalSettings;
    }

    /**
     * Set the portalSettings value.
     *
     * @param portalSettings the portalSettings value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withPortalSettings(PortalSettings portalSettings) {
        this.portalSettings = portalSettings;
        return this;
    }

    /**
     * Get the termsOfUse value.
     *
     * @return the termsOfUse value
     */
    public TermsOfUse termsOfUse() {
        return this.termsOfUse;
    }

    /**
     * Set the termsOfUse value.
     *
     * @param termsOfUse the termsOfUse value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withTermsOfUse(TermsOfUse termsOfUse) {
        this.termsOfUse = termsOfUse;
        return this;
    }

    /**
     * Get gets the region that the user belongs to.
     *
     * @return the region value
     */
    public String region() {
        return this.region;
    }

    /**
     * Set gets the region that the user belongs to.
     *
     * @param region the region value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withRegion(String region) {
        this.region = region;
        return this;
    }

    /**
     * Get customer Insights instance id associated with this object.
     *
     * @return the instanceId value
     */
    public UUID instanceId() {
        return this.instanceId;
    }

    /**
     * Set customer Insights instance id associated with this object.
     *
     * @param instanceId the instanceId value to set
     * @return the UserInfo object itself.
     */
    public UserInfo withInstanceId(UUID instanceId) {
        this.instanceId = instanceId;
        return this;
    }

}