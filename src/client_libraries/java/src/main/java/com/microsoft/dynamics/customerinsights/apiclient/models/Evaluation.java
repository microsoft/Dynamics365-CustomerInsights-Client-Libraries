/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import java.util.UUID;
import org.joda.time.DateTime;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents the measure evaluation details for a particular measure. It
 * includes various properties pertaining to an
 * evaluation including the measure name, orchestrationId, start time, state,
 * errors (if-any) etc. This latest evaluation
 * is stored in the measure metadata, while historical copies are written to
 * table storage.
 */
public class Evaluation {
    /**
     * The lastSuccessfulRunId property.
     */
    @JsonProperty(value = "lastSuccessfulRunId")
    private UUID lastSuccessfulRunId;

    /**
     * Possible values include: 'none', 'running', 'failed', 'completed'.
     */
    @JsonProperty(value = "state")
    private String state;

    /**
     * Evaluation completion time.
     */
    @JsonProperty(value = "endTime")
    private DateTime endTime;

    /**
     * Error Information (if any) that occured during the measure evaluation.
     */
    @JsonProperty(value = "error")
    private String error;

    /**
     * Get the lastSuccessfulRunId value.
     *
     * @return the lastSuccessfulRunId value
     */
    public UUID lastSuccessfulRunId() {
        return this.lastSuccessfulRunId;
    }

    /**
     * Set the lastSuccessfulRunId value.
     *
     * @param lastSuccessfulRunId the lastSuccessfulRunId value to set
     * @return the Evaluation object itself.
     */
    public Evaluation withLastSuccessfulRunId(UUID lastSuccessfulRunId) {
        this.lastSuccessfulRunId = lastSuccessfulRunId;
        return this;
    }

    /**
     * Get possible values include: 'none', 'running', 'failed', 'completed'.
     *
     * @return the state value
     */
    public String state() {
        return this.state;
    }

    /**
     * Set possible values include: 'none', 'running', 'failed', 'completed'.
     *
     * @param state the state value to set
     * @return the Evaluation object itself.
     */
    public Evaluation withState(String state) {
        this.state = state;
        return this;
    }

    /**
     * Get evaluation completion time.
     *
     * @return the endTime value
     */
    public DateTime endTime() {
        return this.endTime;
    }

    /**
     * Set evaluation completion time.
     *
     * @param endTime the endTime value to set
     * @return the Evaluation object itself.
     */
    public Evaluation withEndTime(DateTime endTime) {
        this.endTime = endTime;
        return this;
    }

    /**
     * Get error Information (if any) that occured during the measure evaluation.
     *
     * @return the error value
     */
    public String error() {
        return this.error;
    }

    /**
     * Set error Information (if any) that occured during the measure evaluation.
     *
     * @param error the error value to set
     * @return the Evaluation object itself.
     */
    public Evaluation withError(String error) {
        this.error = error;
        return this;
    }

}
