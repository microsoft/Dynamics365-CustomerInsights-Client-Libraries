/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The QueryGroupEntity model.
 */
public class QueryGroupEntity {
    /**
     * The id property.
     */
    @JsonProperty(value = "id")
    private String id;

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
     * The parentId property.
     */
    @JsonProperty(value = "parentId")
    private String parentId;

    /**
     * The order property.
     */
    @JsonProperty(value = "order")
    private Integer order;

    /**
     * Get the id value.
     *
     * @return the id value
     */
    public String id() {
        return this.id;
    }

    /**
     * Set the id value.
     *
     * @param id the id value to set
     * @return the QueryGroupEntity object itself.
     */
    public QueryGroupEntity withId(String id) {
        this.id = id;
        return this;
    }

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
     * @return the QueryGroupEntity object itself.
     */
    public QueryGroupEntity withName(String name) {
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
     * @return the QueryGroupEntity object itself.
     */
    public QueryGroupEntity withDescription(String description) {
        this.description = description;
        return this;
    }

    /**
     * Get the parentId value.
     *
     * @return the parentId value
     */
    public String parentId() {
        return this.parentId;
    }

    /**
     * Set the parentId value.
     *
     * @param parentId the parentId value to set
     * @return the QueryGroupEntity object itself.
     */
    public QueryGroupEntity withParentId(String parentId) {
        this.parentId = parentId;
        return this;
    }

    /**
     * Get the order value.
     *
     * @return the order value
     */
    public Integer order() {
        return this.order;
    }

    /**
     * Set the order value.
     *
     * @param order the order value to set
     * @return the QueryGroupEntity object itself.
     */
    public QueryGroupEntity withOrder(Integer order) {
        this.order = order;
        return this;
    }

}
