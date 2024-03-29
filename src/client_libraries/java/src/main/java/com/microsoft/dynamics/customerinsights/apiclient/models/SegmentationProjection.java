/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represent a Segment Projection.
 */
public class SegmentationProjection {
    /**
     * Gets the Entity Name of the projection.
     */
    @JsonProperty(value = "entityName")
    private String entityName;

    /**
     * Gets the Attribute Names being projected.
     */
    @JsonProperty(value = "attributeNames")
    private List<String> attributeNames;

    /**
     * Gets the relationship path to use for segment projection.
     */
    @JsonProperty(value = "path")
    private List<String> path;

    /**
     * Possible values include: 'pre', 'post'.
     */
    @JsonProperty(value = "projectionType")
    private String projectionType;

    /**
     * Get gets the Entity Name of the projection.
     *
     * @return the entityName value
     */
    public String entityName() {
        return this.entityName;
    }

    /**
     * Set gets the Entity Name of the projection.
     *
     * @param entityName the entityName value to set
     * @return the SegmentationProjection object itself.
     */
    public SegmentationProjection withEntityName(String entityName) {
        this.entityName = entityName;
        return this;
    }

    /**
     * Get gets the Attribute Names being projected.
     *
     * @return the attributeNames value
     */
    public List<String> attributeNames() {
        return this.attributeNames;
    }

    /**
     * Set gets the Attribute Names being projected.
     *
     * @param attributeNames the attributeNames value to set
     * @return the SegmentationProjection object itself.
     */
    public SegmentationProjection withAttributeNames(List<String> attributeNames) {
        this.attributeNames = attributeNames;
        return this;
    }

    /**
     * Get gets the relationship path to use for segment projection.
     *
     * @return the path value
     */
    public List<String> path() {
        return this.path;
    }

    /**
     * Set gets the relationship path to use for segment projection.
     *
     * @param path the path value to set
     * @return the SegmentationProjection object itself.
     */
    public SegmentationProjection withPath(List<String> path) {
        this.path = path;
        return this;
    }

    /**
     * Get possible values include: 'pre', 'post'.
     *
     * @return the projectionType value
     */
    public String projectionType() {
        return this.projectionType;
    }

    /**
     * Set possible values include: 'pre', 'post'.
     *
     * @param projectionType the projectionType value to set
     * @return the SegmentationProjection object itself.
     */
    public SegmentationProjection withProjectionType(String projectionType) {
        this.projectionType = projectionType;
        return this;
    }

}
