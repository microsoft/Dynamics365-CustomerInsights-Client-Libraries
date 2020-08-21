/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The ODataError model.
 */
public class ODataError {
    /**
     * The errorCode property.
     */
    @JsonProperty(value = "errorCode")
    private String errorCode;

    /**
     * The message property.
     */
    @JsonProperty(value = "message")
    private String message;

    /**
     * The target property.
     */
    @JsonProperty(value = "target")
    private String target;

    /**
     * The details property.
     */
    @JsonProperty(value = "details")
    private List<ODataErrorDetail> details;

    /**
     * The innerError property.
     */
    @JsonProperty(value = "innerError")
    private ODataInnerError innerError;

    /**
     * The instanceAnnotations property.
     */
    @JsonProperty(value = "instanceAnnotations")
    private List<ODataInstanceAnnotation> instanceAnnotations;

    /**
     * The typeAnnotation property.
     */
    @JsonProperty(value = "typeAnnotation")
    private ODataTypeAnnotation typeAnnotation;

    /**
     * Get the errorCode value.
     *
     * @return the errorCode value
     */
    public String errorCode() {
        return this.errorCode;
    }

    /**
     * Set the errorCode value.
     *
     * @param errorCode the errorCode value to set
     * @return the ODataError object itself.
     */
    public ODataError withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }

    /**
     * Get the message value.
     *
     * @return the message value
     */
    public String message() {
        return this.message;
    }

    /**
     * Set the message value.
     *
     * @param message the message value to set
     * @return the ODataError object itself.
     */
    public ODataError withMessage(String message) {
        this.message = message;
        return this;
    }

    /**
     * Get the target value.
     *
     * @return the target value
     */
    public String target() {
        return this.target;
    }

    /**
     * Set the target value.
     *
     * @param target the target value to set
     * @return the ODataError object itself.
     */
    public ODataError withTarget(String target) {
        this.target = target;
        return this;
    }

    /**
     * Get the details value.
     *
     * @return the details value
     */
    public List<ODataErrorDetail> details() {
        return this.details;
    }

    /**
     * Set the details value.
     *
     * @param details the details value to set
     * @return the ODataError object itself.
     */
    public ODataError withDetails(List<ODataErrorDetail> details) {
        this.details = details;
        return this;
    }

    /**
     * Get the innerError value.
     *
     * @return the innerError value
     */
    public ODataInnerError innerError() {
        return this.innerError;
    }

    /**
     * Set the innerError value.
     *
     * @param innerError the innerError value to set
     * @return the ODataError object itself.
     */
    public ODataError withInnerError(ODataInnerError innerError) {
        this.innerError = innerError;
        return this;
    }

    /**
     * Get the instanceAnnotations value.
     *
     * @return the instanceAnnotations value
     */
    public List<ODataInstanceAnnotation> instanceAnnotations() {
        return this.instanceAnnotations;
    }

    /**
     * Set the instanceAnnotations value.
     *
     * @param instanceAnnotations the instanceAnnotations value to set
     * @return the ODataError object itself.
     */
    public ODataError withInstanceAnnotations(List<ODataInstanceAnnotation> instanceAnnotations) {
        this.instanceAnnotations = instanceAnnotations;
        return this;
    }

    /**
     * Get the typeAnnotation value.
     *
     * @return the typeAnnotation value
     */
    public ODataTypeAnnotation typeAnnotation() {
        return this.typeAnnotation;
    }

    /**
     * Set the typeAnnotation value.
     *
     * @param typeAnnotation the typeAnnotation value to set
     * @return the ODataError object itself.
     */
    public ODataError withTypeAnnotation(ODataTypeAnnotation typeAnnotation) {
        this.typeAnnotation = typeAnnotation;
        return this;
    }

}
