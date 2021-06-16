/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The information for bring your own Power BI.
 */
public class ByoPbiProvisioningInfo {
    /**
     * Storage account subscriptionId.
     */
    @JsonProperty(value = "storageSubscriptionId")
    private String storageSubscriptionId;

    /**
     * Storage account Resource Group.
     */
    @JsonProperty(value = "storageResourceGroup")
    private String storageResourceGroup;

    /**
     * Storage account Region.
     */
    @JsonProperty(value = "storageResourceRegion")
    private String storageResourceRegion;

    /**
     * Storage account tenant.
     */
    @JsonProperty(value = "storageResourceTenantId")
    private String storageResourceTenantId;

    /**
     * Pbi Capacity Id.
     */
    @JsonProperty(value = "capacityId")
    private String capacityId;

    /**
     * PBI delegation token captured from the user.
     */
    @JsonProperty(value = "delegationToken")
    private String delegationToken;

    /**
     * Get storage account subscriptionId.
     *
     * @return the storageSubscriptionId value
     */
    public String storageSubscriptionId() {
        return this.storageSubscriptionId;
    }

    /**
     * Set storage account subscriptionId.
     *
     * @param storageSubscriptionId the storageSubscriptionId value to set
     * @return the ByoPbiProvisioningInfo object itself.
     */
    public ByoPbiProvisioningInfo withStorageSubscriptionId(String storageSubscriptionId) {
        this.storageSubscriptionId = storageSubscriptionId;
        return this;
    }

    /**
     * Get storage account Resource Group.
     *
     * @return the storageResourceGroup value
     */
    public String storageResourceGroup() {
        return this.storageResourceGroup;
    }

    /**
     * Set storage account Resource Group.
     *
     * @param storageResourceGroup the storageResourceGroup value to set
     * @return the ByoPbiProvisioningInfo object itself.
     */
    public ByoPbiProvisioningInfo withStorageResourceGroup(String storageResourceGroup) {
        this.storageResourceGroup = storageResourceGroup;
        return this;
    }

    /**
     * Get storage account Region.
     *
     * @return the storageResourceRegion value
     */
    public String storageResourceRegion() {
        return this.storageResourceRegion;
    }

    /**
     * Set storage account Region.
     *
     * @param storageResourceRegion the storageResourceRegion value to set
     * @return the ByoPbiProvisioningInfo object itself.
     */
    public ByoPbiProvisioningInfo withStorageResourceRegion(String storageResourceRegion) {
        this.storageResourceRegion = storageResourceRegion;
        return this;
    }

    /**
     * Get storage account tenant.
     *
     * @return the storageResourceTenantId value
     */
    public String storageResourceTenantId() {
        return this.storageResourceTenantId;
    }

    /**
     * Set storage account tenant.
     *
     * @param storageResourceTenantId the storageResourceTenantId value to set
     * @return the ByoPbiProvisioningInfo object itself.
     */
    public ByoPbiProvisioningInfo withStorageResourceTenantId(String storageResourceTenantId) {
        this.storageResourceTenantId = storageResourceTenantId;
        return this;
    }

    /**
     * Get pbi Capacity Id.
     *
     * @return the capacityId value
     */
    public String capacityId() {
        return this.capacityId;
    }

    /**
     * Set pbi Capacity Id.
     *
     * @param capacityId the capacityId value to set
     * @return the ByoPbiProvisioningInfo object itself.
     */
    public ByoPbiProvisioningInfo withCapacityId(String capacityId) {
        this.capacityId = capacityId;
        return this;
    }

    /**
     * Get pBI delegation token captured from the user.
     *
     * @return the delegationToken value
     */
    public String delegationToken() {
        return this.delegationToken;
    }

    /**
     * Set pBI delegation token captured from the user.
     *
     * @param delegationToken the delegationToken value to set
     * @return the ByoPbiProvisioningInfo object itself.
     */
    public ByoPbiProvisioningInfo withDelegationToken(String delegationToken) {
        this.delegationToken = delegationToken;
        return this;
    }

}