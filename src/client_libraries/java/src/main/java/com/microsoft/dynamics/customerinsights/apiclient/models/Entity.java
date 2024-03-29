/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The Entity model.
 */
public class Entity {
    /**
     * The name property.
     */
    @JsonProperty(value = "name")
    private String name;

    /**
     * The description property.
     */
    @JsonProperty(value = "description")
    private String description;

    /**
     * The isHidden property.
     */
    @JsonProperty(value = "isHidden")
    private Boolean isHidden;

    /**
     * The annotations property.
     */
    @JsonProperty(value = "annotations")
    private List<Annotation> annotations;

    /**
     * Get the name value.
     *
     * @return the name value
     */
    public String name() {
        return this.name;
    }

    /**
     * Set the name value.
     *
     * @param name the name value to set
     * @return the Entity object itself.
     */
    public Entity withName(String name) {
        this.name = name;
        return this;
    }

    /**
     * Get the description value.
     *
     * @return the description value
     */
    public String description() {
        return this.description;
    }

    /**
     * Set the description value.
     *
     * @param description the description value to set
     * @return the Entity object itself.
     */
    public Entity withDescription(String description) {
        this.description = description;
        return this;
    }

    /**
     * Get the isHidden value.
     *
     * @return the isHidden value
     */
    public Boolean isHidden() {
        return this.isHidden;
    }

    /**
     * Set the isHidden value.
     *
     * @param isHidden the isHidden value to set
     * @return the Entity object itself.
     */
    public Entity withIsHidden(Boolean isHidden) {
        this.isHidden = isHidden;
        return this;
    }

    /**
     * Get the annotations value.
     *
     * @return the annotations value
     */
    public List<Annotation> annotations() {
        return this.annotations;
    }

    /**
     * Set the annotations value.
     *
     * @param annotations the annotations value to set
     * @return the Entity object itself.
     */
    public Entity withAnnotations(List<Annotation> annotations) {
        this.annotations = annotations;
        return this;
    }

}
