/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents a measure definition.
 */
public class MeasureDefinition {
    /**
     * Possible values include: 'entity', 'attribute'.
     */
    @JsonProperty(value = "kind")
    private String kind;

    /**
     * Gets a value indicating whether the current measure is a scalar measure
     * e doesn't have any dimensions.
     */
    @JsonProperty(value = "isScalar")
    private Boolean isScalar;

    /**
     * Gets list of linked entities associated with the measure.
     */
    @JsonProperty(value = "linkedEntities")
    private List<MeasureLinkedEntity> linkedEntities;

    /**
     * Gets list of variables (computed columns) for the measure.
     */
    @JsonProperty(value = "variables")
    private List<MeasureVariable> variables;

    /**
     * The filters property.
     */
    @JsonProperty(value = "filters")
    private MeasureExpression filters;

    /**
     * The filteringCriteria property.
     */
    @JsonProperty(value = "filteringCriteria")
    private SegmentMembershipCriteria filteringCriteria;

    /**
     * Gets list of dimensions with the measure.
     */
    @JsonProperty(value = "dimensions")
    private List<MeasureDimension> dimensions;

    /**
     * Gets list of aggregates of the measure.
     */
    @JsonProperty(value = "aggregates")
    private List<MeasureAggregate> aggregates;

    /**
     * Gets a value indicating whether the current measure is a profile
     * measure.
     */
    @JsonProperty(value = "isProfile")
    private Boolean isProfile;

    /**
     * Gets the user specified custom SQL query.
     */
    @JsonProperty(value = "measureQuerySql")
    private String measureQuerySql;

    /**
     * Possible values include: 'structured', 'manual'.
     */
    @JsonProperty(value = "type")
    private String type;

    /**
     * Gets the indicating whether the Business Measure is Scalar or not.
     */
    @JsonProperty(value = "isManualQueryScalar")
    private Boolean isManualQueryScalar;

    /**
     * Gets the list of measures that this measure depends on.
     */
    @JsonProperty(value = "dependencies")
    private List<EntityDependency> dependencies;

    /**
     * Get possible values include: 'entity', 'attribute'.
     *
     * @return the kind value
     */
    public String kind() {
        return this.kind;
    }

    /**
     * Set possible values include: 'entity', 'attribute'.
     *
     * @param kind the kind value to set
     * @return the MeasureDefinition object itself.
     */
    public MeasureDefinition withKind(String kind) {
        this.kind = kind;
        return this;
    }

    /**
     * Get gets a value indicating whether the current measure is a scalar measure e doesn't have any dimensions.
     *
     * @return the isScalar value
     */
    public Boolean isScalar() {
        return this.isScalar;
    }

    /**
     * Set gets a value indicating whether the current measure is a scalar measure e doesn't have any dimensions.
     *
     * @param isScalar the isScalar value to set
     * @return the MeasureDefinition object itself.
     */
    public MeasureDefinition withIsScalar(Boolean isScalar) {
        this.isScalar = isScalar;
        return this;
    }

    /**
     * Get gets list of linked entities associated with the measure.
     *
     * @return the linkedEntities value
     */
    public List<MeasureLinkedEntity> linkedEntities() {
        return this.linkedEntities;
    }

    /**
     * Set gets list of linked entities associated with the measure.
     *
     * @param linkedEntities the linkedEntities value to set
     * @return the MeasureDefinition object itself.
     */
    public MeasureDefinition withLinkedEntities(List<MeasureLinkedEntity> linkedEntities) {
        this.linkedEntities = linkedEntities;
        return this;
    }

    /**
     * Get gets list of variables (computed columns) for the measure.
     *
     * @return the variables value
     */
    public List<MeasureVariable> variables() {
        return this.variables;
    }

    /**
     * Set gets list of variables (computed columns) for the measure.
     *
     * @param variables the variables value to set
     * @return the MeasureDefinition object itself.
     */
    public MeasureDefinition withVariables(List<MeasureVariable> variables) {
        this.variables = variables;
        return this;
    }

    /**
     * Get the filters value.
     *
     * @return the filters value
     */
    public MeasureExpression filters() {
        return this.filters;
    }

    /**
     * Set the filters value.
     *
     * @param filters the filters value to set
     * @return the MeasureDefinition object itself.
     */
    public MeasureDefinition withFilters(MeasureExpression filters) {
        this.filters = filters;
        return this;
    }

    /**
     * Get the filteringCriteria value.
     *
     * @return the filteringCriteria value
     */
    public SegmentMembershipCriteria filteringCriteria() {
        return this.filteringCriteria;
    }

    /**
     * Set the filteringCriteria value.
     *
     * @param filteringCriteria the filteringCriteria value to set
     * @return the MeasureDefinition object itself.
     */
    public MeasureDefinition withFilteringCriteria(SegmentMembershipCriteria filteringCriteria) {
        this.filteringCriteria = filteringCriteria;
        return this;
    }

    /**
     * Get gets list of dimensions with the measure.
     *
     * @return the dimensions value
     */
    public List<MeasureDimension> dimensions() {
        return this.dimensions;
    }

    /**
     * Set gets list of dimensions with the measure.
     *
     * @param dimensions the dimensions value to set
     * @return the MeasureDefinition object itself.
     */
    public MeasureDefinition withDimensions(List<MeasureDimension> dimensions) {
        this.dimensions = dimensions;
        return this;
    }

    /**
     * Get gets list of aggregates of the measure.
     *
     * @return the aggregates value
     */
    public List<MeasureAggregate> aggregates() {
        return this.aggregates;
    }

    /**
     * Set gets list of aggregates of the measure.
     *
     * @param aggregates the aggregates value to set
     * @return the MeasureDefinition object itself.
     */
    public MeasureDefinition withAggregates(List<MeasureAggregate> aggregates) {
        this.aggregates = aggregates;
        return this;
    }

    /**
     * Get gets a value indicating whether the current measure is a profile measure.
     *
     * @return the isProfile value
     */
    public Boolean isProfile() {
        return this.isProfile;
    }

    /**
     * Set gets a value indicating whether the current measure is a profile measure.
     *
     * @param isProfile the isProfile value to set
     * @return the MeasureDefinition object itself.
     */
    public MeasureDefinition withIsProfile(Boolean isProfile) {
        this.isProfile = isProfile;
        return this;
    }

    /**
     * Get gets the user specified custom SQL query.
     *
     * @return the measureQuerySql value
     */
    public String measureQuerySql() {
        return this.measureQuerySql;
    }

    /**
     * Set gets the user specified custom SQL query.
     *
     * @param measureQuerySql the measureQuerySql value to set
     * @return the MeasureDefinition object itself.
     */
    public MeasureDefinition withMeasureQuerySql(String measureQuerySql) {
        this.measureQuerySql = measureQuerySql;
        return this;
    }

    /**
     * Get possible values include: 'structured', 'manual'.
     *
     * @return the type value
     */
    public String type() {
        return this.type;
    }

    /**
     * Set possible values include: 'structured', 'manual'.
     *
     * @param type the type value to set
     * @return the MeasureDefinition object itself.
     */
    public MeasureDefinition withType(String type) {
        this.type = type;
        return this;
    }

    /**
     * Get gets the indicating whether the Business Measure is Scalar or not.
     *
     * @return the isManualQueryScalar value
     */
    public Boolean isManualQueryScalar() {
        return this.isManualQueryScalar;
    }

    /**
     * Set gets the indicating whether the Business Measure is Scalar or not.
     *
     * @param isManualQueryScalar the isManualQueryScalar value to set
     * @return the MeasureDefinition object itself.
     */
    public MeasureDefinition withIsManualQueryScalar(Boolean isManualQueryScalar) {
        this.isManualQueryScalar = isManualQueryScalar;
        return this;
    }

    /**
     * Get gets the list of measures that this measure depends on.
     *
     * @return the dependencies value
     */
    public List<EntityDependency> dependencies() {
        return this.dependencies;
    }

    /**
     * Set gets the list of measures that this measure depends on.
     *
     * @param dependencies the dependencies value to set
     * @return the MeasureDefinition object itself.
     */
    public MeasureDefinition withDependencies(List<EntityDependency> dependencies) {
        this.dependencies = dependencies;
        return this;
    }

}
