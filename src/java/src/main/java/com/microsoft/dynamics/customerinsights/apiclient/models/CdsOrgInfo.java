/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The information for CDS Organization in BAP.
 */
public class CdsOrgInfo {
    /**
     * Gets the Cds Organization Friendly Name.
     */
    @JsonProperty(value = "friendlyName")
    private String friendlyName;

    /**
     * Gets the Cds Organization Url.
     */
    @JsonProperty(value = "url")
    private String url;

    /**
     * Gets the Cds Organization State.
     */
    @JsonProperty(value = "state")
    private String state;

    /**
     * Get gets the Cds Organization Friendly Name.
     *
     * @return the friendlyName value
     */
    public String friendlyName() {
        return this.friendlyName;
    }

    /**
     * Set gets the Cds Organization Friendly Name.
     *
     * @param friendlyName the friendlyName value to set
     * @return the CdsOrgInfo object itself.
     */
    public CdsOrgInfo withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }

    /**
     * Get gets the Cds Organization Url.
     *
     * @return the url value
     */
    public String url() {
        return this.url;
    }

    /**
     * Set gets the Cds Organization Url.
     *
     * @param url the url value to set
     * @return the CdsOrgInfo object itself.
     */
    public CdsOrgInfo withUrl(String url) {
        this.url = url;
        return this;
    }

    /**
     * Get gets the Cds Organization State.
     *
     * @return the state value
     */
    public String state() {
        return this.state;
    }

    /**
     * Set gets the Cds Organization State.
     *
     * @param state the state value to set
     * @return the CdsOrgInfo object itself.
     */
    public CdsOrgInfo withState(String state) {
        this.state = state;
        return this;
    }

}
