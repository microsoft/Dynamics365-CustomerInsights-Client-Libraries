/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents a base Segment Query.
 */
public class SegmentMembershipCriteria {
    /**
     * Possible values include: 'post', 'default', 'consent', 'engagement'.
     */
    @JsonProperty(value = "kind")
    private String kind;

    /**
     * Possible values include: 'and', 'or'.
     */
    @JsonProperty(value = "logicalOperator")
    private String logicalOperator;

    /**
     * Gets the Attribute of the entity used in segment criteria.
     */
    @JsonProperty(value = "attribute")
    private String attribute;

    /**
     * Possible values include: 'equals', 'notEquals', 'greaterThan',
     * 'greaterThanOrEqualTo', 'lessThan', 'lessThanOrEqualTo', 'any',
     * 'contains', 'startsWith', 'endsWith', 'isNull', 'isNotNull', 'all',
     * 'isIn', 'isWithinLast', 'isBetween', 'isNotBetween', 'yearToDate',
     * 'dayOf', 'monthOf', 'yearOf', 'dayOfWeek', 'timeAt', 'childOf',
     * 'parentOf'.
     */
    @JsonProperty(value = "comparisonOperator")
    private String comparisonOperator;

    /**
     * Gets the list of Child criteria of segment.
     */
    @JsonProperty(value = "childCriterias")
    private List<SegmentMembershipCriteria> childCriterias;

    /**
     * Gets the Value in criteria.
     */
    @JsonProperty(value = "value")
    private String value;

    /**
     * Gets a value indicating whether case is ignored for this criteria.
     */
    @JsonProperty(value = "ignoreCase")
    private Boolean ignoreCase;

    /**
     * Gets the list of values in criteria.
     */
    @JsonProperty(value = "listOfValues")
    private List<String> listOfValues;

    /**
     * flag set to true if entries are of time format.
     */
    @JsonProperty(value = "isTime")
    private Boolean isTime;

    /**
     * Get possible values include: 'post', 'default', 'consent', 'engagement'.
     *
     * @return the kind value
     */
    public String kind() {
        return this.kind;
    }

    /**
     * Set possible values include: 'post', 'default', 'consent', 'engagement'.
     *
     * @param kind the kind value to set
     * @return the SegmentMembershipCriteria object itself.
     */
    public SegmentMembershipCriteria withKind(String kind) {
        this.kind = kind;
        return this;
    }

    /**
     * Get possible values include: 'and', 'or'.
     *
     * @return the logicalOperator value
     */
    public String logicalOperator() {
        return this.logicalOperator;
    }

    /**
     * Set possible values include: 'and', 'or'.
     *
     * @param logicalOperator the logicalOperator value to set
     * @return the SegmentMembershipCriteria object itself.
     */
    public SegmentMembershipCriteria withLogicalOperator(String logicalOperator) {
        this.logicalOperator = logicalOperator;
        return this;
    }

    /**
     * Get gets the Attribute of the entity used in segment criteria.
     *
     * @return the attribute value
     */
    public String attribute() {
        return this.attribute;
    }

    /**
     * Set gets the Attribute of the entity used in segment criteria.
     *
     * @param attribute the attribute value to set
     * @return the SegmentMembershipCriteria object itself.
     */
    public SegmentMembershipCriteria withAttribute(String attribute) {
        this.attribute = attribute;
        return this;
    }

    /**
     * Get possible values include: 'equals', 'notEquals', 'greaterThan', 'greaterThanOrEqualTo', 'lessThan', 'lessThanOrEqualTo', 'any', 'contains', 'startsWith', 'endsWith', 'isNull', 'isNotNull', 'all', 'isIn', 'isWithinLast', 'isBetween', 'isNotBetween', 'yearToDate', 'dayOf', 'monthOf', 'yearOf', 'dayOfWeek', 'timeAt', 'childOf', 'parentOf'.
     *
     * @return the comparisonOperator value
     */
    public String comparisonOperator() {
        return this.comparisonOperator;
    }

    /**
     * Set possible values include: 'equals', 'notEquals', 'greaterThan', 'greaterThanOrEqualTo', 'lessThan', 'lessThanOrEqualTo', 'any', 'contains', 'startsWith', 'endsWith', 'isNull', 'isNotNull', 'all', 'isIn', 'isWithinLast', 'isBetween', 'isNotBetween', 'yearToDate', 'dayOf', 'monthOf', 'yearOf', 'dayOfWeek', 'timeAt', 'childOf', 'parentOf'.
     *
     * @param comparisonOperator the comparisonOperator value to set
     * @return the SegmentMembershipCriteria object itself.
     */
    public SegmentMembershipCriteria withComparisonOperator(String comparisonOperator) {
        this.comparisonOperator = comparisonOperator;
        return this;
    }

    /**
     * Get gets the list of Child criteria of segment.
     *
     * @return the childCriterias value
     */
    public List<SegmentMembershipCriteria> childCriterias() {
        return this.childCriterias;
    }

    /**
     * Set gets the list of Child criteria of segment.
     *
     * @param childCriterias the childCriterias value to set
     * @return the SegmentMembershipCriteria object itself.
     */
    public SegmentMembershipCriteria withChildCriterias(List<SegmentMembershipCriteria> childCriterias) {
        this.childCriterias = childCriterias;
        return this;
    }

    /**
     * Get gets the Value in criteria.
     *
     * @return the value value
     */
    public String value() {
        return this.value;
    }

    /**
     * Set gets the Value in criteria.
     *
     * @param value the value value to set
     * @return the SegmentMembershipCriteria object itself.
     */
    public SegmentMembershipCriteria withValue(String value) {
        this.value = value;
        return this;
    }

    /**
     * Get gets a value indicating whether case is ignored for this criteria.
     *
     * @return the ignoreCase value
     */
    public Boolean ignoreCase() {
        return this.ignoreCase;
    }

    /**
     * Set gets a value indicating whether case is ignored for this criteria.
     *
     * @param ignoreCase the ignoreCase value to set
     * @return the SegmentMembershipCriteria object itself.
     */
    public SegmentMembershipCriteria withIgnoreCase(Boolean ignoreCase) {
        this.ignoreCase = ignoreCase;
        return this;
    }

    /**
     * Get gets the list of values in criteria.
     *
     * @return the listOfValues value
     */
    public List<String> listOfValues() {
        return this.listOfValues;
    }

    /**
     * Set gets the list of values in criteria.
     *
     * @param listOfValues the listOfValues value to set
     * @return the SegmentMembershipCriteria object itself.
     */
    public SegmentMembershipCriteria withListOfValues(List<String> listOfValues) {
        this.listOfValues = listOfValues;
        return this;
    }

    /**
     * Get flag set to true if entries are of time format.
     *
     * @return the isTime value
     */
    public Boolean isTime() {
        return this.isTime;
    }

    /**
     * Set flag set to true if entries are of time format.
     *
     * @param isTime the isTime value to set
     * @return the SegmentMembershipCriteria object itself.
     */
    public SegmentMembershipCriteria withIsTime(Boolean isTime) {
        this.isTime = isTime;
        return this;
    }

}
