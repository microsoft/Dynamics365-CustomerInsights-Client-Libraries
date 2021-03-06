/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The InstanceCreationRequest model.
 */
public class InstanceCreationRequest {
    /**
     * The instanceMetadata property.
     */
    @JsonProperty(value = "instanceMetadata")
    private InstanceMetadata instanceMetadata;

    /**
     * The byosaResourceMetadata property.
     */
    @JsonProperty(value = "byosaResourceMetadata")
    private ResourceMetadata byosaResourceMetadata;

    /**
     * The cdsResourceMetadata property.
     */
    @JsonProperty(value = "cdsResourceMetadata")
    private ResourceMetadata cdsResourceMetadata;

    /**
     * Possible values include: 'skip', 'create', 'attach'.
     */
    @JsonProperty(value = "bapProvisioningType")
    private String bapProvisioningType;

    /**
     * Get the instanceMetadata value.
     *
     * @return the instanceMetadata value
     */
    public InstanceMetadata instanceMetadata() {
        return this.instanceMetadata;
    }

    /**
     * Set the instanceMetadata value.
     *
     * @param instanceMetadata the instanceMetadata value to set
     * @return the InstanceCreationRequest object itself.
     */
    public InstanceCreationRequest withInstanceMetadata(InstanceMetadata instanceMetadata) {
        this.instanceMetadata = instanceMetadata;
        return this;
    }

    /**
     * Get the byosaResourceMetadata value.
     *
     * @return the byosaResourceMetadata value
     */
    public ResourceMetadata byosaResourceMetadata() {
        return this.byosaResourceMetadata;
    }

    /**
     * Set the byosaResourceMetadata value.
     *
     * @param byosaResourceMetadata the byosaResourceMetadata value to set
     * @return the InstanceCreationRequest object itself.
     */
    public InstanceCreationRequest withByosaResourceMetadata(ResourceMetadata byosaResourceMetadata) {
        this.byosaResourceMetadata = byosaResourceMetadata;
        return this;
    }

    /**
     * Get the cdsResourceMetadata value.
     *
     * @return the cdsResourceMetadata value
     */
    public ResourceMetadata cdsResourceMetadata() {
        return this.cdsResourceMetadata;
    }

    /**
     * Set the cdsResourceMetadata value.
     *
     * @param cdsResourceMetadata the cdsResourceMetadata value to set
     * @return the InstanceCreationRequest object itself.
     */
    public InstanceCreationRequest withCdsResourceMetadata(ResourceMetadata cdsResourceMetadata) {
        this.cdsResourceMetadata = cdsResourceMetadata;
        return this;
    }

    /**
     * Get possible values include: 'skip', 'create', 'attach'.
     *
     * @return the bapProvisioningType value
     */
    public String bapProvisioningType() {
        return this.bapProvisioningType;
    }

    /**
     * Set possible values include: 'skip', 'create', 'attach'.
     *
     * @param bapProvisioningType the bapProvisioningType value to set
     * @return the InstanceCreationRequest object itself.
     */
    public InstanceCreationRequest withBapProvisioningType(String bapProvisioningType) {
        this.bapProvisioningType = bapProvisioningType;
        return this;
    }

}
