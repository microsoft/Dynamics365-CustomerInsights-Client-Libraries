/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents a variable condition.
 */
public class MeasureVariableCondition {
    /**
     * Possible values include: 'replaceNulls', 'replaceTargetValues'.
     */
    @JsonProperty(value = "kind")
    private String kind;

    /**
     * Get possible values include: 'replaceNulls', 'replaceTargetValues'.
     *
     * @return the kind value
     */
    public String kind() {
        return this.kind;
    }

    /**
     * Set possible values include: 'replaceNulls', 'replaceTargetValues'.
     *
     * @param kind the kind value to set
     * @return the MeasureVariableCondition object itself.
     */
    public MeasureVariableCondition withKind(String kind) {
        this.kind = kind;
        return this;
    }

}
