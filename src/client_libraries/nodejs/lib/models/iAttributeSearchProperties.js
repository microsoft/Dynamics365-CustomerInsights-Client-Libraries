/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents seachable attribute properties
 *
 */
class IAttributeSearchProperties {
  /**
   * Create a IAttributeSearchProperties.
   * @property {boolean} [isSearchable] Gets a value indicating whether the
   * attribute supports full text search.
   * @property {boolean} [isFilterable] Gets a value indicating whether the
   * attribute supports filtering.
   * @property {boolean} [isFacetable] Gets a value indicating whether the
   * attribute can be included as facet results.
   * @property {boolean} [isSortable] Gets a value indicating whether the
   * attribute can be included in orderby directives.
   * @property {string} [facetSpecification] Gets an optional specification for
   * search faceting used at query time (advanced).
   * this is the part behind the comma in the examples below.
   * bucket facet: "price,interval:10"
   * other type: "listPrice,values:10|25|100|500|1000|2500"
   * value facet: city,count:5
   */
  constructor() {
  }

  /**
   * Defines the metadata of IAttributeSearchProperties
   *
   * @returns {object} metadata of IAttributeSearchProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IAttributeSearchProperties',
      type: {
        name: 'Composite',
        className: 'IAttributeSearchProperties',
        modelProperties: {
          isSearchable: {
            required: false,
            serializedName: 'isSearchable',
            type: {
              name: 'Boolean'
            }
          },
          isFilterable: {
            required: false,
            serializedName: 'isFilterable',
            type: {
              name: 'Boolean'
            }
          },
          isFacetable: {
            required: false,
            serializedName: 'isFacetable',
            type: {
              name: 'Boolean'
            }
          },
          isSortable: {
            required: false,
            serializedName: 'isSortable',
            type: {
              name: 'Boolean'
            }
          },
          facetSpecification: {
            required: false,
            serializedName: 'facetSpecification',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IAttributeSearchProperties;
