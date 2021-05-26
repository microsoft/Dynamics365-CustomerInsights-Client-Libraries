/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The information for datalake folder in CDS.
 */
public class DatalakeFolderDetail {
    /**
     * Gets the datalake folder Friendly Name.
     */
    @JsonProperty(value = "name")
    private String name;

    /**
     * Gets the Cds datalake folder unique Name.
     */
    @JsonProperty(value = "uniqueName")
    private String uniqueName;

    /**
     * Get gets the datalake folder Friendly Name.
     *
     * @return the name value
     */
    public String name() {
        return this.name;
    }

    /**
     * Set gets the datalake folder Friendly Name.
     *
     * @param name the name value to set
     * @return the DatalakeFolderDetail object itself.
     */
    public DatalakeFolderDetail withName(String name) {
        this.name = name;
        return this;
    }

    /**
     * Get gets the Cds datalake folder unique Name.
     *
     * @return the uniqueName value
     */
    public String uniqueName() {
        return this.uniqueName;
    }

    /**
     * Set gets the Cds datalake folder unique Name.
     *
     * @param uniqueName the uniqueName value to set
     * @return the DatalakeFolderDetail object itself.
     */
    public DatalakeFolderDetail withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }

}
