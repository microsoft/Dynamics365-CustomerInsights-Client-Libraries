/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * A value and the count of that value.
 */
public class ValueCount {
    /**
     * Gets or sets the value.
     */
    @JsonProperty(value = "value")
    private Object value;

    /**
     * Gets or sets the count of the value.
     */
    @JsonProperty(value = "count")
    private Long count;

    /**
     * Get gets or sets the value.
     *
     * @return the value value
     */
    public Object value() {
        return this.value;
    }

    /**
     * Set gets or sets the value.
     *
     * @param value the value value to set
     * @return the ValueCount object itself.
     */
    public ValueCount withValue(Object value) {
        this.value = value;
        return this;
    }

    /**
     * Get gets or sets the count of the value.
     *
     * @return the count value
     */
    public Long count() {
        return this.count;
    }

    /**
     * Set gets or sets the count of the value.
     *
     * @param count the count value to set
     * @return the ValueCount object itself.
     */
    public ValueCount withCount(Long count) {
        this.count = count;
        return this;
    }

}
