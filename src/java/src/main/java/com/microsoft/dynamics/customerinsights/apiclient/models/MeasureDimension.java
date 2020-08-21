/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents a dimension.
 */
public class MeasureDimension {
    /**
     * Gets the field on which group by will be applied.
     */
    @JsonProperty(value = "field")
    private String field;

    /**
     * Gets the alias for the field.
     */
    @JsonProperty(value = "alias")
    private String alias;

    /**
     * Gets the display name for the dimension.
     */
    @JsonProperty(value = "displayName")
    private String displayName;

    /**
     * Gets the order for the dimension.
     */
    @JsonProperty(value = "order")
    private Integer order;

    /**
     * Possible values include: 'none', 'day', 'month', 'year'.
     */
    @JsonProperty(value = "bucket")
    private String bucket;

    /**
     * Gets a value indicating whether the dimension is readonly or not.
     */
    @JsonProperty(value = "isReadOnly")
    private Boolean isReadOnly;

    /**
     * Get gets the field on which group by will be applied.
     *
     * @return the field value
     */
    public String field() {
        return this.field;
    }

    /**
     * Set gets the field on which group by will be applied.
     *
     * @param field the field value to set
     * @return the MeasureDimension object itself.
     */
    public MeasureDimension withField(String field) {
        this.field = field;
        return this;
    }

    /**
     * Get gets the alias for the field.
     *
     * @return the alias value
     */
    public String alias() {
        return this.alias;
    }

    /**
     * Set gets the alias for the field.
     *
     * @param alias the alias value to set
     * @return the MeasureDimension object itself.
     */
    public MeasureDimension withAlias(String alias) {
        this.alias = alias;
        return this;
    }

    /**
     * Get gets the display name for the dimension.
     *
     * @return the displayName value
     */
    public String displayName() {
        return this.displayName;
    }

    /**
     * Set gets the display name for the dimension.
     *
     * @param displayName the displayName value to set
     * @return the MeasureDimension object itself.
     */
    public MeasureDimension withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }

    /**
     * Get gets the order for the dimension.
     *
     * @return the order value
     */
    public Integer order() {
        return this.order;
    }

    /**
     * Set gets the order for the dimension.
     *
     * @param order the order value to set
     * @return the MeasureDimension object itself.
     */
    public MeasureDimension withOrder(Integer order) {
        this.order = order;
        return this;
    }

    /**
     * Get possible values include: 'none', 'day', 'month', 'year'.
     *
     * @return the bucket value
     */
    public String bucket() {
        return this.bucket;
    }

    /**
     * Set possible values include: 'none', 'day', 'month', 'year'.
     *
     * @param bucket the bucket value to set
     * @return the MeasureDimension object itself.
     */
    public MeasureDimension withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }

    /**
     * Get gets a value indicating whether the dimension is readonly or not.
     *
     * @return the isReadOnly value
     */
    public Boolean isReadOnly() {
        return this.isReadOnly;
    }

    /**
     * Set gets a value indicating whether the dimension is readonly or not.
     *
     * @param isReadOnly the isReadOnly value to set
     * @return the MeasureDimension object itself.
     */
    public MeasureDimension withIsReadOnly(Boolean isReadOnly) {
        this.isReadOnly = isReadOnly;
        return this;
    }

}
