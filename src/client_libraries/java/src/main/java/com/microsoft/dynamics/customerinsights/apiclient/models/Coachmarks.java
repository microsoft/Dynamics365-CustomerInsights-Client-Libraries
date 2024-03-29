/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Settings to track coachmarks that users have viewed.
 */
public class Coachmarks {
    /**
     * The history property.
     */
    @JsonProperty(value = "history")
    private History history;

    /**
     * Get the history value.
     *
     * @return the history value
     */
    public History history() {
        return this.history;
    }

    /**
     * Set the history value.
     *
     * @param history the history value to set
     * @return the Coachmarks object itself.
     */
    public Coachmarks withHistory(History history) {
        this.history = history;
        return this;
    }

}
