/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents the semantic info used in API requests (attribute level).
 */
public class AttributeSemanticInformation {
    /**
     * Name of the attribute.
     */
    @JsonProperty(value = "attributeName")
    private String attributeName;

    /**
     * Semantic label. Possible values include: 'CalendarDate',
     * 'CalendarDayOfMonth', 'CalendarDayOfWeek', 'CalendarDayOfYear',
     * 'CalendarHalfYear', 'CalendarMonthOfYear', 'CalendarMonth',
     * 'CalendarWeek', 'CalendarYear', 'CalendarFiscalDate',
     * 'CalendarFiscalDayOfMonth', 'CalendarFiscalDayOfWeek',
     * 'CalendarFiscalDayOfYear', 'CalendarFiscalHalfYear',
     * 'CalendarFiscalMonthOfYear', 'CalendarFiscalMonth',
     * 'CalendarFiscalQuarter', 'CalendarFiscalWeekOfMonth',
     * 'CalendarFiscalWeekOfYear', 'CalendarFiscalWeek', 'CalendarFiscalYear',
     * 'Account', 'Channel', 'Contact', 'Customer', 'Language', 'Organization',
     * 'OrganizationUnit', 'Person', 'Product', 'ProductGroup',
     * 'LocationAddress', 'LocationAddressStreet', 'LocationCity',
     * 'LocationContinent', 'LocationCountry', 'LocationCounty',
     * 'LocationLatitude', 'LocationLongitude', 'LocationPoint',
     * 'LocationPostalCode', 'LocationProvince', 'LocationRegion',
     * 'LocationState', 'LocationTimezone', 'MeasurementDateCreation',
     * 'MeasurementDateModify', 'MeasurementStatus', 'MeasurementVersion',
     * 'BarCode', 'Brand', 'IdentityGovernmentID', 'PersonFirstName',
     * 'PersonFullName', 'PersonLastName', 'PersonMiddleName',
     * 'IdentityServiceEmail', 'IdentityServiceFacebook',
     * 'IdentityServicePhone', 'IdentityServiceTwitter', 'Image', 'Place',
     * 'ReferenceDescription', 'ReferenceImageURL', 'ReferencePhonetic',
     * 'ReferenceURL'.
     */
    @JsonProperty(value = "label")
    private String label;

    /**
     * Get name of the attribute.
     *
     * @return the attributeName value
     */
    public String attributeName() {
        return this.attributeName;
    }

    /**
     * Set name of the attribute.
     *
     * @param attributeName the attributeName value to set
     * @return the AttributeSemanticInformation object itself.
     */
    public AttributeSemanticInformation withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }

    /**
     * Get semantic label. Possible values include: 'CalendarDate', 'CalendarDayOfMonth', 'CalendarDayOfWeek', 'CalendarDayOfYear', 'CalendarHalfYear', 'CalendarMonthOfYear', 'CalendarMonth', 'CalendarWeek', 'CalendarYear', 'CalendarFiscalDate', 'CalendarFiscalDayOfMonth', 'CalendarFiscalDayOfWeek', 'CalendarFiscalDayOfYear', 'CalendarFiscalHalfYear', 'CalendarFiscalMonthOfYear', 'CalendarFiscalMonth', 'CalendarFiscalQuarter', 'CalendarFiscalWeekOfMonth', 'CalendarFiscalWeekOfYear', 'CalendarFiscalWeek', 'CalendarFiscalYear', 'Account', 'Channel', 'Contact', 'Customer', 'Language', 'Organization', 'OrganizationUnit', 'Person', 'Product', 'ProductGroup', 'LocationAddress', 'LocationAddressStreet', 'LocationCity', 'LocationContinent', 'LocationCountry', 'LocationCounty', 'LocationLatitude', 'LocationLongitude', 'LocationPoint', 'LocationPostalCode', 'LocationProvince', 'LocationRegion', 'LocationState', 'LocationTimezone', 'MeasurementDateCreation', 'MeasurementDateModify', 'MeasurementStatus', 'MeasurementVersion', 'BarCode', 'Brand', 'IdentityGovernmentID', 'PersonFirstName', 'PersonFullName', 'PersonLastName', 'PersonMiddleName', 'IdentityServiceEmail', 'IdentityServiceFacebook', 'IdentityServicePhone', 'IdentityServiceTwitter', 'Image', 'Place', 'ReferenceDescription', 'ReferenceImageURL', 'ReferencePhonetic', 'ReferenceURL'.
     *
     * @return the label value
     */
    public String label() {
        return this.label;
    }

    /**
     * Set semantic label. Possible values include: 'CalendarDate', 'CalendarDayOfMonth', 'CalendarDayOfWeek', 'CalendarDayOfYear', 'CalendarHalfYear', 'CalendarMonthOfYear', 'CalendarMonth', 'CalendarWeek', 'CalendarYear', 'CalendarFiscalDate', 'CalendarFiscalDayOfMonth', 'CalendarFiscalDayOfWeek', 'CalendarFiscalDayOfYear', 'CalendarFiscalHalfYear', 'CalendarFiscalMonthOfYear', 'CalendarFiscalMonth', 'CalendarFiscalQuarter', 'CalendarFiscalWeekOfMonth', 'CalendarFiscalWeekOfYear', 'CalendarFiscalWeek', 'CalendarFiscalYear', 'Account', 'Channel', 'Contact', 'Customer', 'Language', 'Organization', 'OrganizationUnit', 'Person', 'Product', 'ProductGroup', 'LocationAddress', 'LocationAddressStreet', 'LocationCity', 'LocationContinent', 'LocationCountry', 'LocationCounty', 'LocationLatitude', 'LocationLongitude', 'LocationPoint', 'LocationPostalCode', 'LocationProvince', 'LocationRegion', 'LocationState', 'LocationTimezone', 'MeasurementDateCreation', 'MeasurementDateModify', 'MeasurementStatus', 'MeasurementVersion', 'BarCode', 'Brand', 'IdentityGovernmentID', 'PersonFirstName', 'PersonFullName', 'PersonLastName', 'PersonMiddleName', 'IdentityServiceEmail', 'IdentityServiceFacebook', 'IdentityServicePhone', 'IdentityServiceTwitter', 'Image', 'Place', 'ReferenceDescription', 'ReferenceImageURL', 'ReferencePhonetic', 'ReferenceURL'.
     *
     * @param label the label value to set
     * @return the AttributeSemanticInformation object itself.
     */
    public AttributeSemanticInformation withLabel(String label) {
        this.label = label;
        return this;
    }

}
