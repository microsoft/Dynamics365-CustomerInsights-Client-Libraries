/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import java.util.UUID;
import org.joda.time.DateTime;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The instance info.
 */
public class InstanceInfo {
    /**
     * Gets the unique ID for this instance.
     */
    @JsonProperty(value = "instanceId")
    private UUID instanceId;

    /**
     * Gets the instance name. (not persisted in store).
     */
    @JsonProperty(value = "name")
    private String name;

    /**
     * Possible values include: 'trial', 'sandbox', 'production', 'pitchDemo',
     * 'pov'.
     */
    @JsonProperty(value = "instanceType")
    private String instanceType;

    /**
     * Gets the time the instance is set to expire. (not persisted in store).
     */
    @JsonProperty(value = "expiryTimeUtc")
    private DateTime expiryTimeUtc;

    /**
     * Gets the total number of extensions allowed if this is trial instance
     * (not persisted in store).
     */
    @JsonProperty(value = "maxTrialExtensionsAllowed")
    private Integer maxTrialExtensionsAllowed;

    /**
     * Stores the details of trial extensions done if this is a trial instance
     * (not persisted in store).
     */
    @JsonProperty(value = "trialExtensionHistory")
    private String trialExtensionHistory;

    /**
     * Gets the unique identifier for the scale unit (not persisted in store).
     */
    @JsonProperty(value = "scaleUnitId")
    private String scaleUnitId;

    /**
     * Gets the Azure Region where the scale unit resides (not persisted in
     * store).
     */
    @JsonProperty(value = "azureRegion")
    private String azureRegion;

    /**
     * Gets the Insights App Type for g. Verity, Engagement Insight etc. (not
     * persisted in store).
     */
    @JsonProperty(value = "platformType")
    private String platformType;

    /**
     * Get gets the unique ID for this instance.
     *
     * @return the instanceId value
     */
    public UUID instanceId() {
        return this.instanceId;
    }

    /**
     * Set gets the unique ID for this instance.
     *
     * @param instanceId the instanceId value to set
     * @return the InstanceInfo object itself.
     */
    public InstanceInfo withInstanceId(UUID instanceId) {
        this.instanceId = instanceId;
        return this;
    }

    /**
     * Get gets the instance name. (not persisted in store).
     *
     * @return the name value
     */
    public String name() {
        return this.name;
    }

    /**
     * Set gets the instance name. (not persisted in store).
     *
     * @param name the name value to set
     * @return the InstanceInfo object itself.
     */
    public InstanceInfo withName(String name) {
        this.name = name;
        return this;
    }

    /**
     * Get possible values include: 'trial', 'sandbox', 'production', 'pitchDemo', 'pov'.
     *
     * @return the instanceType value
     */
    public String instanceType() {
        return this.instanceType;
    }

    /**
     * Set possible values include: 'trial', 'sandbox', 'production', 'pitchDemo', 'pov'.
     *
     * @param instanceType the instanceType value to set
     * @return the InstanceInfo object itself.
     */
    public InstanceInfo withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }

    /**
     * Get gets the time the instance is set to expire. (not persisted in store).
     *
     * @return the expiryTimeUtc value
     */
    public DateTime expiryTimeUtc() {
        return this.expiryTimeUtc;
    }

    /**
     * Set gets the time the instance is set to expire. (not persisted in store).
     *
     * @param expiryTimeUtc the expiryTimeUtc value to set
     * @return the InstanceInfo object itself.
     */
    public InstanceInfo withExpiryTimeUtc(DateTime expiryTimeUtc) {
        this.expiryTimeUtc = expiryTimeUtc;
        return this;
    }

    /**
     * Get gets the total number of extensions allowed if this is trial instance (not persisted in store).
     *
     * @return the maxTrialExtensionsAllowed value
     */
    public Integer maxTrialExtensionsAllowed() {
        return this.maxTrialExtensionsAllowed;
    }

    /**
     * Set gets the total number of extensions allowed if this is trial instance (not persisted in store).
     *
     * @param maxTrialExtensionsAllowed the maxTrialExtensionsAllowed value to set
     * @return the InstanceInfo object itself.
     */
    public InstanceInfo withMaxTrialExtensionsAllowed(Integer maxTrialExtensionsAllowed) {
        this.maxTrialExtensionsAllowed = maxTrialExtensionsAllowed;
        return this;
    }

    /**
     * Get stores the details of trial extensions done if this is a trial instance (not persisted in store).
     *
     * @return the trialExtensionHistory value
     */
    public String trialExtensionHistory() {
        return this.trialExtensionHistory;
    }

    /**
     * Set stores the details of trial extensions done if this is a trial instance (not persisted in store).
     *
     * @param trialExtensionHistory the trialExtensionHistory value to set
     * @return the InstanceInfo object itself.
     */
    public InstanceInfo withTrialExtensionHistory(String trialExtensionHistory) {
        this.trialExtensionHistory = trialExtensionHistory;
        return this;
    }

    /**
     * Get gets the unique identifier for the scale unit (not persisted in store).
     *
     * @return the scaleUnitId value
     */
    public String scaleUnitId() {
        return this.scaleUnitId;
    }

    /**
     * Set gets the unique identifier for the scale unit (not persisted in store).
     *
     * @param scaleUnitId the scaleUnitId value to set
     * @return the InstanceInfo object itself.
     */
    public InstanceInfo withScaleUnitId(String scaleUnitId) {
        this.scaleUnitId = scaleUnitId;
        return this;
    }

    /**
     * Get gets the Azure Region where the scale unit resides (not persisted in store).
     *
     * @return the azureRegion value
     */
    public String azureRegion() {
        return this.azureRegion;
    }

    /**
     * Set gets the Azure Region where the scale unit resides (not persisted in store).
     *
     * @param azureRegion the azureRegion value to set
     * @return the InstanceInfo object itself.
     */
    public InstanceInfo withAzureRegion(String azureRegion) {
        this.azureRegion = azureRegion;
        return this;
    }

    /**
     * Get gets the Insights App Type for g. Verity, Engagement Insight etc. (not persisted in store).
     *
     * @return the platformType value
     */
    public String platformType() {
        return this.platformType;
    }

    /**
     * Set gets the Insights App Type for g. Verity, Engagement Insight etc. (not persisted in store).
     *
     * @param platformType the platformType value to set
     * @return the InstanceInfo object itself.
     */
    public InstanceInfo withPlatformType(String platformType) {
        this.platformType = platformType;
        return this;
    }

}
