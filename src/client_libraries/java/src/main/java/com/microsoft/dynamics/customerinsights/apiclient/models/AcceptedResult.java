/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The AcceptedResult model.
 */
public class AcceptedResult {
    /**
     * The location property.
     */
    @JsonProperty(value = "location")
    private String location;

    /**
     * The value property.
     */
    @JsonProperty(value = "value")
    private Object value;

    /**
     * The formatters property.
     */
    @JsonProperty(value = "formatters")
    private List<Object> formatters;

    /**
     * The contentTypes property.
     */
    @JsonProperty(value = "contentTypes")
    private List<String> contentTypes;

    /**
     * The declaredType property.
     */
    @JsonProperty(value = "declaredType")
    private String declaredType;

    /**
     * The statusCode property.
     */
    @JsonProperty(value = "statusCode")
    private Integer statusCode;

    /**
     * Get the location value.
     *
     * @return the location value
     */
    public String location() {
        return this.location;
    }

    /**
     * Set the location value.
     *
     * @param location the location value to set
     * @return the AcceptedResult object itself.
     */
    public AcceptedResult withLocation(String location) {
        this.location = location;
        return this;
    }

    /**
     * Get the value value.
     *
     * @return the value value
     */
    public Object value() {
        return this.value;
    }

    /**
     * Set the value value.
     *
     * @param value the value value to set
     * @return the AcceptedResult object itself.
     */
    public AcceptedResult withValue(Object value) {
        this.value = value;
        return this;
    }

    /**
     * Get the formatters value.
     *
     * @return the formatters value
     */
    public List<Object> formatters() {
        return this.formatters;
    }

    /**
     * Set the formatters value.
     *
     * @param formatters the formatters value to set
     * @return the AcceptedResult object itself.
     */
    public AcceptedResult withFormatters(List<Object> formatters) {
        this.formatters = formatters;
        return this;
    }

    /**
     * Get the contentTypes value.
     *
     * @return the contentTypes value
     */
    public List<String> contentTypes() {
        return this.contentTypes;
    }

    /**
     * Set the contentTypes value.
     *
     * @param contentTypes the contentTypes value to set
     * @return the AcceptedResult object itself.
     */
    public AcceptedResult withContentTypes(List<String> contentTypes) {
        this.contentTypes = contentTypes;
        return this;
    }

    /**
     * Get the declaredType value.
     *
     * @return the declaredType value
     */
    public String declaredType() {
        return this.declaredType;
    }

    /**
     * Set the declaredType value.
     *
     * @param declaredType the declaredType value to set
     * @return the AcceptedResult object itself.
     */
    public AcceptedResult withDeclaredType(String declaredType) {
        this.declaredType = declaredType;
        return this;
    }

    /**
     * Get the statusCode value.
     *
     * @return the statusCode value
     */
    public Integer statusCode() {
        return this.statusCode;
    }

    /**
     * Set the statusCode value.
     *
     * @param statusCode the statusCode value to set
     * @return the AcceptedResult object itself.
     */
    public AcceptedResult withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }

}