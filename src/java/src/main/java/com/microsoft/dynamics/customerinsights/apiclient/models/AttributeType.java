/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents a property type backed by an EDM type and a CLR type. Enables
 * conversion of values from strings, as
 * well as various other type-based operations.
 */
public class AttributeType {
    /**
     * Gets the CLR Type for this property type.
     */
    @JsonProperty(value = "clrType", access = JsonProperty.Access.WRITE_ONLY)
    private String clrType;

    /**
     * Possible values include: 'unclassified', 'string', 'int64', 'double',
     * 'dateTime', 'dateTimeOffset', 'decimal', 'boolean', 'guid', 'json'.
     */
    @JsonProperty(value = "cdsaType")
    private String cdsaType;

    /**
     * Gets the EDM type name for the property type, in the format
     * EdmTypeKind&gt;".
     */
    @JsonProperty(value = "edmTypeName", access = JsonProperty.Access.WRITE_ONLY)
    private String edmTypeName;

    /**
     * The isBoolean property.
     */
    @JsonProperty(value = "isBoolean", access = JsonProperty.Access.WRITE_ONLY)
    private Boolean isBoolean;

    /**
     * The isDateTime property.
     */
    @JsonProperty(value = "isDateTime", access = JsonProperty.Access.WRITE_ONLY)
    private Boolean isDateTime;

    /**
     * The isDecimal property.
     */
    @JsonProperty(value = "isDecimal", access = JsonProperty.Access.WRITE_ONLY)
    private Boolean isDecimal;

    /**
     * The isNumber property.
     */
    @JsonProperty(value = "isNumber", access = JsonProperty.Access.WRITE_ONLY)
    private Boolean isNumber;

    /**
     * Gets a value indicating whether this type valid and supported by the
     * runtime.
     */
    @JsonProperty(value = "isValidType", access = JsonProperty.Access.WRITE_ONLY)
    private Boolean isValidType;

    /**
     * Gets the name of the property type. Will default to the EdmTypeName but
     * may be overridden by a property
     * type.
     */
    @JsonProperty(value = "name", access = JsonProperty.Access.WRITE_ONLY)
    private String name;

    /**
     * The equalityComparer property.
     */
    @JsonProperty(value = "equalityComparer")
    private Object equalityComparer;

    /**
     * The comparer property.
     */
    @JsonProperty(value = "comparer")
    private Object comparer;

    /**
     * The oDataType property.
     */
    @JsonProperty(value = "oDataType")
    private IEdmType oDataType;

    /**
     * The isCollection property.
     */
    @JsonProperty(value = "isCollection", access = JsonProperty.Access.WRITE_ONLY)
    private Boolean isCollection;

    /**
     * Get gets the CLR Type for this property type.
     *
     * @return the clrType value
     */
    public String clrType() {
        return this.clrType;
    }

    /**
     * Get possible values include: 'unclassified', 'string', 'int64', 'double', 'dateTime', 'dateTimeOffset', 'decimal', 'boolean', 'guid', 'json'.
     *
     * @return the cdsaType value
     */
    public String cdsaType() {
        return this.cdsaType;
    }

    /**
     * Set possible values include: 'unclassified', 'string', 'int64', 'double', 'dateTime', 'dateTimeOffset', 'decimal', 'boolean', 'guid', 'json'.
     *
     * @param cdsaType the cdsaType value to set
     * @return the AttributeType object itself.
     */
    public AttributeType withCdsaType(String cdsaType) {
        this.cdsaType = cdsaType;
        return this;
    }

    /**
     * Get gets the EDM type name for the property type, in the format EdmTypeKind&gt;".
     *
     * @return the edmTypeName value
     */
    public String edmTypeName() {
        return this.edmTypeName;
    }

    /**
     * Get the isBoolean value.
     *
     * @return the isBoolean value
     */
    public Boolean isBoolean() {
        return this.isBoolean;
    }

    /**
     * Get the isDateTime value.
     *
     * @return the isDateTime value
     */
    public Boolean isDateTime() {
        return this.isDateTime;
    }

    /**
     * Get the isDecimal value.
     *
     * @return the isDecimal value
     */
    public Boolean isDecimal() {
        return this.isDecimal;
    }

    /**
     * Get the isNumber value.
     *
     * @return the isNumber value
     */
    public Boolean isNumber() {
        return this.isNumber;
    }

    /**
     * Get gets a value indicating whether this type valid and supported by the runtime.
     *
     * @return the isValidType value
     */
    public Boolean isValidType() {
        return this.isValidType;
    }

    /**
     * Get gets the name of the property type. Will default to the EdmTypeName but may be overridden by a property
     type.
     *
     * @return the name value
     */
    public String name() {
        return this.name;
    }

    /**
     * Get the equalityComparer value.
     *
     * @return the equalityComparer value
     */
    public Object equalityComparer() {
        return this.equalityComparer;
    }

    /**
     * Set the equalityComparer value.
     *
     * @param equalityComparer the equalityComparer value to set
     * @return the AttributeType object itself.
     */
    public AttributeType withEqualityComparer(Object equalityComparer) {
        this.equalityComparer = equalityComparer;
        return this;
    }

    /**
     * Get the comparer value.
     *
     * @return the comparer value
     */
    public Object comparer() {
        return this.comparer;
    }

    /**
     * Set the comparer value.
     *
     * @param comparer the comparer value to set
     * @return the AttributeType object itself.
     */
    public AttributeType withComparer(Object comparer) {
        this.comparer = comparer;
        return this;
    }

    /**
     * Get the oDataType value.
     *
     * @return the oDataType value
     */
    public IEdmType oDataType() {
        return this.oDataType;
    }

    /**
     * Set the oDataType value.
     *
     * @param oDataType the oDataType value to set
     * @return the AttributeType object itself.
     */
    public AttributeType withODataType(IEdmType oDataType) {
        this.oDataType = oDataType;
        return this;
    }

    /**
     * Get the isCollection value.
     *
     * @return the isCollection value
     */
    public Boolean isCollection() {
        return this.isCollection;
    }

}
