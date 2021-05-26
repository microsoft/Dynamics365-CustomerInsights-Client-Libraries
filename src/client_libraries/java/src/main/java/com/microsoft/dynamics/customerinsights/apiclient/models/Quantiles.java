/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Numerical quantiles.
 */
public class Quantiles {
    /**
     * Represents 1% quantile.
     */
    @JsonProperty(value = "p0D1")
    private Double p0D1;

    /**
     * Represents 1% quantile.
     */
    @JsonProperty(value = "p1")
    private Double p1;

    /**
     * Represents 5% quantile.
     */
    @JsonProperty(value = "p5")
    private Double p5;

    /**
     * Represents 25% quantile.
     */
    @JsonProperty(value = "p25")
    private Double p25;

    /**
     * Represents 50% quantile.
     */
    @JsonProperty(value = "p50")
    private Double p50;

    /**
     * Represents 75% quantile.
     */
    @JsonProperty(value = "p75")
    private Double p75;

    /**
     * Represents 95% quantile.
     */
    @JsonProperty(value = "p95")
    private Double p95;

    /**
     * Represents 99% quantile.
     */
    @JsonProperty(value = "p99")
    private Double p99;

    /**
     * Represents 9% quantile.
     */
    @JsonProperty(value = "p99D9")
    private Double p99D9;

    /**
     * Get represents 1% quantile.
     *
     * @return the p0D1 value
     */
    public Double p0D1() {
        return this.p0D1;
    }

    /**
     * Set represents 1% quantile.
     *
     * @param p0D1 the p0D1 value to set
     * @return the Quantiles object itself.
     */
    public Quantiles withP0D1(Double p0D1) {
        this.p0D1 = p0D1;
        return this;
    }

    /**
     * Get represents 1% quantile.
     *
     * @return the p1 value
     */
    public Double p1() {
        return this.p1;
    }

    /**
     * Set represents 1% quantile.
     *
     * @param p1 the p1 value to set
     * @return the Quantiles object itself.
     */
    public Quantiles withP1(Double p1) {
        this.p1 = p1;
        return this;
    }

    /**
     * Get represents 5% quantile.
     *
     * @return the p5 value
     */
    public Double p5() {
        return this.p5;
    }

    /**
     * Set represents 5% quantile.
     *
     * @param p5 the p5 value to set
     * @return the Quantiles object itself.
     */
    public Quantiles withP5(Double p5) {
        this.p5 = p5;
        return this;
    }

    /**
     * Get represents 25% quantile.
     *
     * @return the p25 value
     */
    public Double p25() {
        return this.p25;
    }

    /**
     * Set represents 25% quantile.
     *
     * @param p25 the p25 value to set
     * @return the Quantiles object itself.
     */
    public Quantiles withP25(Double p25) {
        this.p25 = p25;
        return this;
    }

    /**
     * Get represents 50% quantile.
     *
     * @return the p50 value
     */
    public Double p50() {
        return this.p50;
    }

    /**
     * Set represents 50% quantile.
     *
     * @param p50 the p50 value to set
     * @return the Quantiles object itself.
     */
    public Quantiles withP50(Double p50) {
        this.p50 = p50;
        return this;
    }

    /**
     * Get represents 75% quantile.
     *
     * @return the p75 value
     */
    public Double p75() {
        return this.p75;
    }

    /**
     * Set represents 75% quantile.
     *
     * @param p75 the p75 value to set
     * @return the Quantiles object itself.
     */
    public Quantiles withP75(Double p75) {
        this.p75 = p75;
        return this;
    }

    /**
     * Get represents 95% quantile.
     *
     * @return the p95 value
     */
    public Double p95() {
        return this.p95;
    }

    /**
     * Set represents 95% quantile.
     *
     * @param p95 the p95 value to set
     * @return the Quantiles object itself.
     */
    public Quantiles withP95(Double p95) {
        this.p95 = p95;
        return this;
    }

    /**
     * Get represents 99% quantile.
     *
     * @return the p99 value
     */
    public Double p99() {
        return this.p99;
    }

    /**
     * Set represents 99% quantile.
     *
     * @param p99 the p99 value to set
     * @return the Quantiles object itself.
     */
    public Quantiles withP99(Double p99) {
        this.p99 = p99;
        return this;
    }

    /**
     * Get represents 9% quantile.
     *
     * @return the p99D9 value
     */
    public Double p99D9() {
        return this.p99D9;
    }

    /**
     * Set represents 9% quantile.
     *
     * @param p99D9 the p99D9 value to set
     * @return the Quantiles object itself.
     */
    public Quantiles withP99D9(Double p99D9) {
        this.p99D9 = p99D9;
        return this;
    }

}
