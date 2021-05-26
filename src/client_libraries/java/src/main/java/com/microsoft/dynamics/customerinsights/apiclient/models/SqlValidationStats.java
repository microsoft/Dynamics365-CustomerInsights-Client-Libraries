/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import org.joda.time.DateTime;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents measure sql validation stats.
 */
public class SqlValidationStats {
    /**
     * Date of Validation evaluation.
     */
    @JsonProperty(value = "validationDate")
    private DateTime validationDate;

    /**
     * Gets the number of consecutive failures.
     */
    @JsonProperty(value = "error")
    private String error;

    /**
     * Get date of Validation evaluation.
     *
     * @return the validationDate value
     */
    public DateTime validationDate() {
        return this.validationDate;
    }

    /**
     * Set date of Validation evaluation.
     *
     * @param validationDate the validationDate value to set
     * @return the SqlValidationStats object itself.
     */
    public SqlValidationStats withValidationDate(DateTime validationDate) {
        this.validationDate = validationDate;
        return this;
    }

    /**
     * Get gets the number of consecutive failures.
     *
     * @return the error value
     */
    public String error() {
        return this.error;
    }

    /**
     * Set gets the number of consecutive failures.
     *
     * @param error the error value to set
     * @return the SqlValidationStats object itself.
     */
    public SqlValidationStats withError(String error) {
        this.error = error;
        return this;
    }

}
