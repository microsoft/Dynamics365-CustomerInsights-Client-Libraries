/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import org.joda.time.DateTime;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The EntityDataProfile model.
 */
public class EntityDataProfile {
    /**
     * The qualifiedEntityName property.
     */
    @JsonProperty(value = "qualifiedEntityName")
    private String qualifiedEntityName;

    /**
     * The rowCount property.
     */
    @JsonProperty(value = "rowCount")
    private Long rowCount;

    /**
     * The quarantineRowCount property.
     */
    @JsonProperty(value = "quarantineRowCount")
    private Long quarantineRowCount;

    /**
     * The profilingDate property.
     */
    @JsonProperty(value = "profilingDate")
    private DateTime profilingDate;

    /**
     * The profiledAttributes property.
     */
    @JsonProperty(value = "profiledAttributes")
    private String profiledAttributes;

    /**
     * Get the qualifiedEntityName value.
     *
     * @return the qualifiedEntityName value
     */
    public String qualifiedEntityName() {
        return this.qualifiedEntityName;
    }

    /**
     * Set the qualifiedEntityName value.
     *
     * @param qualifiedEntityName the qualifiedEntityName value to set
     * @return the EntityDataProfile object itself.
     */
    public EntityDataProfile withQualifiedEntityName(String qualifiedEntityName) {
        this.qualifiedEntityName = qualifiedEntityName;
        return this;
    }

    /**
     * Get the rowCount value.
     *
     * @return the rowCount value
     */
    public Long rowCount() {
        return this.rowCount;
    }

    /**
     * Set the rowCount value.
     *
     * @param rowCount the rowCount value to set
     * @return the EntityDataProfile object itself.
     */
    public EntityDataProfile withRowCount(Long rowCount) {
        this.rowCount = rowCount;
        return this;
    }

    /**
     * Get the quarantineRowCount value.
     *
     * @return the quarantineRowCount value
     */
    public Long quarantineRowCount() {
        return this.quarantineRowCount;
    }

    /**
     * Set the quarantineRowCount value.
     *
     * @param quarantineRowCount the quarantineRowCount value to set
     * @return the EntityDataProfile object itself.
     */
    public EntityDataProfile withQuarantineRowCount(Long quarantineRowCount) {
        this.quarantineRowCount = quarantineRowCount;
        return this;
    }

    /**
     * Get the profilingDate value.
     *
     * @return the profilingDate value
     */
    public DateTime profilingDate() {
        return this.profilingDate;
    }

    /**
     * Set the profilingDate value.
     *
     * @param profilingDate the profilingDate value to set
     * @return the EntityDataProfile object itself.
     */
    public EntityDataProfile withProfilingDate(DateTime profilingDate) {
        this.profilingDate = profilingDate;
        return this;
    }

    /**
     * Get the profiledAttributes value.
     *
     * @return the profiledAttributes value
     */
    public String profiledAttributes() {
        return this.profiledAttributes;
    }

    /**
     * Set the profiledAttributes value.
     *
     * @param profiledAttributes the profiledAttributes value to set
     * @return the EntityDataProfile object itself.
     */
    public EntityDataProfile withProfiledAttributes(String profiledAttributes) {
        this.profiledAttributes = profiledAttributes;
        return this;
    }

}
