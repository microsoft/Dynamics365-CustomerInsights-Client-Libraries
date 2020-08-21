/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The ODataTypeAnnotation model.
 */
public class ODataTypeAnnotation {
    /**
     * The typeName property.
     */
    @JsonProperty(value = "typeName")
    private String typeName;

    /**
     * Get the typeName value.
     *
     * @return the typeName value
     */
    public String typeName() {
        return this.typeName;
    }

    /**
     * Set the typeName value.
     *
     * @param typeName the typeName value to set
     * @return the ODataTypeAnnotation object itself.
     */
    public ODataTypeAnnotation withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }

}
