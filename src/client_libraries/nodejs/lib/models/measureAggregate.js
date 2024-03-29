/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents an aggregate
 *
 */
class MeasureAggregate {
  /**
   * Create a MeasureAggregate.
   * @property {string} [operation] Possible values include: 'sum', 'avg',
   * 'min', 'max', 'count', 'countDistinct', 'first', 'last', 'argMax',
   * 'argMin'
   * @property {string} [field] Gets the field on which the aggregate operation
   * is applied
   * @property {string} [alias] Gets the alias for the field
   * @property {string} [displayName] Gets the display name for the aggregate
   * @property {number} [order] Gets the order for the aggregate
   * @property {string} [operationScope] Possible values include: 'rollup'
   * @property {array} [aggregates] Gets list of aggregates of the measure.
   * @property {boolean} [isIncluded] Gets a value indicating whether to
   * display the field in results. Default value: false .
   */
  constructor() {
  }

  /**
   * Defines the metadata of MeasureAggregate
   *
   * @returns {object} metadata of MeasureAggregate
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MeasureAggregate',
      type: {
        name: 'Composite',
        className: 'MeasureAggregate',
        modelProperties: {
          operation: {
            required: false,
            serializedName: 'operation',
            type: {
              name: 'String'
            }
          },
          field: {
            required: false,
            serializedName: 'field',
            type: {
              name: 'String'
            }
          },
          alias: {
            required: false,
            serializedName: 'alias',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          order: {
            required: false,
            serializedName: 'order',
            type: {
              name: 'Number'
            }
          },
          operationScope: {
            required: false,
            serializedName: 'operationScope',
            type: {
              name: 'String'
            }
          },
          aggregates: {
            required: false,
            serializedName: 'aggregates',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MeasureAggregateElementType',
                  type: {
                    name: 'Composite',
                    className: 'MeasureAggregate'
                  }
              }
            }
          },
          isIncluded: {
            required: false,
            serializedName: 'isIncluded',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = MeasureAggregate;
