/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Statistical moments.
 */
public class Moments {
    /**
     * Gets or sets the mean.
     */
    @JsonProperty(value = "mean")
    private Double mean;

    /**
     * Gets or sets the standard deviation.
     */
    @JsonProperty(value = "standardDeviation")
    private Double standardDeviation;

    /**
     * Gets or sets the variance.
     */
    @JsonProperty(value = "variance")
    private Double variance;

    /**
     * Gets or sets the skewness.
     */
    @JsonProperty(value = "skewness")
    private Double skewness;

    /**
     * Gets or sets the kurtosis.
     */
    @JsonProperty(value = "kurtosis")
    private Double kurtosis;

    /**
     * Get gets or sets the mean.
     *
     * @return the mean value
     */
    public Double mean() {
        return this.mean;
    }

    /**
     * Set gets or sets the mean.
     *
     * @param mean the mean value to set
     * @return the Moments object itself.
     */
    public Moments withMean(Double mean) {
        this.mean = mean;
        return this;
    }

    /**
     * Get gets or sets the standard deviation.
     *
     * @return the standardDeviation value
     */
    public Double standardDeviation() {
        return this.standardDeviation;
    }

    /**
     * Set gets or sets the standard deviation.
     *
     * @param standardDeviation the standardDeviation value to set
     * @return the Moments object itself.
     */
    public Moments withStandardDeviation(Double standardDeviation) {
        this.standardDeviation = standardDeviation;
        return this;
    }

    /**
     * Get gets or sets the variance.
     *
     * @return the variance value
     */
    public Double variance() {
        return this.variance;
    }

    /**
     * Set gets or sets the variance.
     *
     * @param variance the variance value to set
     * @return the Moments object itself.
     */
    public Moments withVariance(Double variance) {
        this.variance = variance;
        return this;
    }

    /**
     * Get gets or sets the skewness.
     *
     * @return the skewness value
     */
    public Double skewness() {
        return this.skewness;
    }

    /**
     * Set gets or sets the skewness.
     *
     * @param skewness the skewness value to set
     * @return the Moments object itself.
     */
    public Moments withSkewness(Double skewness) {
        this.skewness = skewness;
        return this;
    }

    /**
     * Get gets or sets the kurtosis.
     *
     * @return the kurtosis value
     */
    public Double kurtosis() {
        return this.kurtosis;
    }

    /**
     * Set gets or sets the kurtosis.
     *
     * @param kurtosis the kurtosis value to set
     * @return the Moments object itself.
     */
    public Moments withKurtosis(Double kurtosis) {
        this.kurtosis = kurtosis;
        return this;
    }

}
