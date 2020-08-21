/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The DataInfo model.
 */
public class DataInfo {
    /**
     * Possible values include: 'resource', 'entity', 'custom'.
     */
    @JsonProperty(value = "kind")
    private String kind;

    /**
     * Possible values include: 'none', 'new', 'update'.
     */
    @JsonProperty(value = "changeType")
    private String changeType;

    /**
     * Gets the name of the data info.
     */
    @JsonProperty(value = "name")
    private String name;

    /**
     * Get possible values include: 'resource', 'entity', 'custom'.
     *
     * @return the kind value
     */
    public String kind() {
        return this.kind;
    }

    /**
     * Set possible values include: 'resource', 'entity', 'custom'.
     *
     * @param kind the kind value to set
     * @return the DataInfo object itself.
     */
    public DataInfo withKind(String kind) {
        this.kind = kind;
        return this;
    }

    /**
     * Get possible values include: 'none', 'new', 'update'.
     *
     * @return the changeType value
     */
    public String changeType() {
        return this.changeType;
    }

    /**
     * Set possible values include: 'none', 'new', 'update'.
     *
     * @param changeType the changeType value to set
     * @return the DataInfo object itself.
     */
    public DataInfo withChangeType(String changeType) {
        this.changeType = changeType;
        return this;
    }

    /**
     * Get gets the name of the data info.
     *
     * @return the name value
     */
    public String name() {
        return this.name;
    }

    /**
     * Set gets the name of the data info.
     *
     * @param name the name value to set
     * @return the DataInfo object itself.
     */
    public DataInfo withName(String name) {
        this.name = name;
        return this;
    }

}
