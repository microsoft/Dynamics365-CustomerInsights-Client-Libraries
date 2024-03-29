/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents a Incremental Refresh Property.
 */
public class IncrementalRefreshProperties {
    /**
     * Name of the entity.
     */
    @JsonProperty(value = "entityName")
    private String entityName;

    /**
     * Column to detect changes.
     */
    @JsonProperty(value = "detectChangesAttributeName")
    private String detectChangesAttributeName;

    /**
     * Column to get incremental data.
     */
    @JsonProperty(value = "filterByAttributeName")
    private String filterByAttributeName;

    /**
     * Granularity of the incremental refresh.
     */
    @JsonProperty(value = "incrementalGranularity")
    private String incrementalGranularity;

    /**
     * Incremental period.
     */
    @JsonProperty(value = "incrementalPeriods")
    private Integer incrementalPeriods;

    /**
     * Indicating whether to refresh completed periods or not.
     */
    @JsonProperty(value = "refreshCompletePeriods")
    private Boolean refreshCompletePeriods;

    /**
     * Off set period.
     */
    @JsonProperty(value = "incrementalPeriodsOffset")
    private Integer incrementalPeriodsOffset;

    /**
     * Primary key of the entity.
     */
    @JsonProperty(value = "primaryKeyAttributeName")
    private String primaryKeyAttributeName;

    /**
     * Rolling window granularity.
     */
    @JsonProperty(value = "rollingWindowGranularity")
    private String rollingWindowGranularity;

    /**
     * Rolling window period.
     */
    @JsonProperty(value = "rollingWindowPeriods")
    private Integer rollingWindowPeriods;

    /**
     * Get name of the entity.
     *
     * @return the entityName value
     */
    public String entityName() {
        return this.entityName;
    }

    /**
     * Set name of the entity.
     *
     * @param entityName the entityName value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withEntityName(String entityName) {
        this.entityName = entityName;
        return this;
    }

    /**
     * Get column to detect changes.
     *
     * @return the detectChangesAttributeName value
     */
    public String detectChangesAttributeName() {
        return this.detectChangesAttributeName;
    }

    /**
     * Set column to detect changes.
     *
     * @param detectChangesAttributeName the detectChangesAttributeName value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withDetectChangesAttributeName(String detectChangesAttributeName) {
        this.detectChangesAttributeName = detectChangesAttributeName;
        return this;
    }

    /**
     * Get column to get incremental data.
     *
     * @return the filterByAttributeName value
     */
    public String filterByAttributeName() {
        return this.filterByAttributeName;
    }

    /**
     * Set column to get incremental data.
     *
     * @param filterByAttributeName the filterByAttributeName value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withFilterByAttributeName(String filterByAttributeName) {
        this.filterByAttributeName = filterByAttributeName;
        return this;
    }

    /**
     * Get granularity of the incremental refresh.
     *
     * @return the incrementalGranularity value
     */
    public String incrementalGranularity() {
        return this.incrementalGranularity;
    }

    /**
     * Set granularity of the incremental refresh.
     *
     * @param incrementalGranularity the incrementalGranularity value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withIncrementalGranularity(String incrementalGranularity) {
        this.incrementalGranularity = incrementalGranularity;
        return this;
    }

    /**
     * Get incremental period.
     *
     * @return the incrementalPeriods value
     */
    public Integer incrementalPeriods() {
        return this.incrementalPeriods;
    }

    /**
     * Set incremental period.
     *
     * @param incrementalPeriods the incrementalPeriods value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withIncrementalPeriods(Integer incrementalPeriods) {
        this.incrementalPeriods = incrementalPeriods;
        return this;
    }

    /**
     * Get indicating whether to refresh completed periods or not.
     *
     * @return the refreshCompletePeriods value
     */
    public Boolean refreshCompletePeriods() {
        return this.refreshCompletePeriods;
    }

    /**
     * Set indicating whether to refresh completed periods or not.
     *
     * @param refreshCompletePeriods the refreshCompletePeriods value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withRefreshCompletePeriods(Boolean refreshCompletePeriods) {
        this.refreshCompletePeriods = refreshCompletePeriods;
        return this;
    }

    /**
     * Get off set period.
     *
     * @return the incrementalPeriodsOffset value
     */
    public Integer incrementalPeriodsOffset() {
        return this.incrementalPeriodsOffset;
    }

    /**
     * Set off set period.
     *
     * @param incrementalPeriodsOffset the incrementalPeriodsOffset value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withIncrementalPeriodsOffset(Integer incrementalPeriodsOffset) {
        this.incrementalPeriodsOffset = incrementalPeriodsOffset;
        return this;
    }

    /**
     * Get primary key of the entity.
     *
     * @return the primaryKeyAttributeName value
     */
    public String primaryKeyAttributeName() {
        return this.primaryKeyAttributeName;
    }

    /**
     * Set primary key of the entity.
     *
     * @param primaryKeyAttributeName the primaryKeyAttributeName value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withPrimaryKeyAttributeName(String primaryKeyAttributeName) {
        this.primaryKeyAttributeName = primaryKeyAttributeName;
        return this;
    }

    /**
     * Get rolling window granularity.
     *
     * @return the rollingWindowGranularity value
     */
    public String rollingWindowGranularity() {
        return this.rollingWindowGranularity;
    }

    /**
     * Set rolling window granularity.
     *
     * @param rollingWindowGranularity the rollingWindowGranularity value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withRollingWindowGranularity(String rollingWindowGranularity) {
        this.rollingWindowGranularity = rollingWindowGranularity;
        return this;
    }

    /**
     * Get rolling window period.
     *
     * @return the rollingWindowPeriods value
     */
    public Integer rollingWindowPeriods() {
        return this.rollingWindowPeriods;
    }

    /**
     * Set rolling window period.
     *
     * @param rollingWindowPeriods the rollingWindowPeriods value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withRollingWindowPeriods(Integer rollingWindowPeriods) {
        this.rollingWindowPeriods = rollingWindowPeriods;
        return this;
    }

}
