/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import java.util.Map;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Api Error response class (DTO).
 */
public class ApiErrorResult {
    /**
     * The exception property.
     */
    @JsonProperty(value = "exception")
    private Object exception;

    /**
     * The httpStatusCode property.
     */
    @JsonProperty(value = "httpStatusCode")
    private String httpStatusCode;

    /**
     * Possible values include: 'system', 'user', 'external'.
     */
    @JsonProperty(value = "exceptionCulprit")
    private String exceptionCulprit;

    /**
     * The errorCode property.
     */
    @JsonProperty(value = "errorCode")
    private String errorCode;

    /**
     * Possible values include: 'error', 'warning'.
     */
    @JsonProperty(value = "resultSeverity")
    private String resultSeverity;

    /**
     * Message providing more information about the event.
     */
    @JsonProperty(value = "message")
    private String message;

    /**
     * The params property.
     */
    @JsonProperty(value = "params")
    private Map<String, Object> params;

    /**
     * List of CiResult contining CI result error code and information (if
     * any).
     */
    @JsonProperty(value = "ciResults")
    private List<CIResult> ciResults;

    /**
     * Get the exception value.
     *
     * @return the exception value
     */
    public Object exception() {
        return this.exception;
    }

    /**
     * Set the exception value.
     *
     * @param exception the exception value to set
     * @return the ApiErrorResult object itself.
     */
    public ApiErrorResult withException(Object exception) {
        this.exception = exception;
        return this;
    }

    /**
     * Get the httpStatusCode value.
     *
     * @return the httpStatusCode value
     */
    public String httpStatusCode() {
        return this.httpStatusCode;
    }

    /**
     * Set the httpStatusCode value.
     *
     * @param httpStatusCode the httpStatusCode value to set
     * @return the ApiErrorResult object itself.
     */
    public ApiErrorResult withHttpStatusCode(String httpStatusCode) {
        this.httpStatusCode = httpStatusCode;
        return this;
    }

    /**
     * Get possible values include: 'system', 'user', 'external'.
     *
     * @return the exceptionCulprit value
     */
    public String exceptionCulprit() {
        return this.exceptionCulprit;
    }

    /**
     * Set possible values include: 'system', 'user', 'external'.
     *
     * @param exceptionCulprit the exceptionCulprit value to set
     * @return the ApiErrorResult object itself.
     */
    public ApiErrorResult withExceptionCulprit(String exceptionCulprit) {
        this.exceptionCulprit = exceptionCulprit;
        return this;
    }

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
     * @return the ApiErrorResult object itself.
     */
    public ApiErrorResult withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }

    /**
     * Get possible values include: 'error', 'warning'.
     *
     * @return the resultSeverity value
     */
    public String resultSeverity() {
        return this.resultSeverity;
    }

    /**
     * Set possible values include: 'error', 'warning'.
     *
     * @param resultSeverity the resultSeverity value to set
     * @return the ApiErrorResult object itself.
     */
    public ApiErrorResult withResultSeverity(String resultSeverity) {
        this.resultSeverity = resultSeverity;
        return this;
    }

    /**
     * Get message providing more information about the event.
     *
     * @return the message value
     */
    public String message() {
        return this.message;
    }

    /**
     * Set message providing more information about the event.
     *
     * @param message the message value to set
     * @return the ApiErrorResult object itself.
     */
    public ApiErrorResult withMessage(String message) {
        this.message = message;
        return this;
    }

    /**
     * Get the params value.
     *
     * @return the params value
     */
    public Map<String, Object> params() {
        return this.params;
    }

    /**
     * Set the params value.
     *
     * @param params the params value to set
     * @return the ApiErrorResult object itself.
     */
    public ApiErrorResult withParams(Map<String, Object> params) {
        this.params = params;
        return this;
    }

    /**
     * Get list of CiResult contining CI result error code and information (if any).
     *
     * @return the ciResults value
     */
    public List<CIResult> ciResults() {
        return this.ciResults;
    }

    /**
     * Set list of CiResult contining CI result error code and information (if any).
     *
     * @param ciResults the ciResults value to set
     * @return the ApiErrorResult object itself.
     */
    public ApiErrorResult withCiResults(List<CIResult> ciResults) {
        this.ciResults = ciResults;
        return this;
    }

}
