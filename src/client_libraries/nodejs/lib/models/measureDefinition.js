/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents a measure definition
 *
 */
class MeasureDefinition {
  /**
   * Create a MeasureDefinition.
   * @property {string} [kind] Possible values include: 'entity', 'attribute'
   * @property {boolean} [isScalar] Gets a value indicating whether the current
   * measure is a scalar measure e doesn't have any dimensions
   * @property {array} [linkedEntities] Gets list of linked entities associated
   * with the measure.
   * @property {array} [variables] Gets list of variables (computed columns)
   * for the measure.
   * @property {object} [filters]
   * @property {string} [filters.kind] Possible values include: 'constant',
   * 'property', 'memberAccess', 'functionCall', 'and', 'or', 'equals',
   * 'notEquals', 'greaterThan', 'greaterThanOrEqualTo', 'lessThan',
   * 'lessThanOrEqualTo', 'contains', 'startsWith', 'endsWith', 'isNull',
   * 'isNotNull', 'negate', 'add', 'subtract', 'multiply', 'divide', 'modulo',
   * 'exponent', 'today', 'now'
   * @property {object} [filteringCriteria]
   * @property {string} [filteringCriteria.kind] Possible values include:
   * 'post', 'default', 'consent', 'engagement'
   * @property {string} [filteringCriteria.logicalOperator] Possible values
   * include: 'and', 'or'
   * @property {string} [filteringCriteria.attribute] Gets the Attribute of the
   * entity used in segment criteria.
   * @property {string} [filteringCriteria.comparisonOperator] Possible values
   * include: 'equals', 'notEquals', 'greaterThan', 'greaterThanOrEqualTo',
   * 'lessThan', 'lessThanOrEqualTo', 'any', 'contains', 'startsWith',
   * 'endsWith', 'isNull', 'isNotNull', 'all', 'isIn', 'isWithinLast',
   * 'isBetween', 'isNotBetween', 'yearToDate', 'dayOf', 'monthOf', 'yearOf',
   * 'dayOfWeek', 'timeAt', 'childOf', 'parentOf'
   * @property {array} [filteringCriteria.childCriterias] Gets the list of
   * Child criteria of segment.
   * @property {string} [filteringCriteria.value] Gets the Value in criteria.
   * @property {boolean} [filteringCriteria.ignoreCase] Gets a value indicating
   * whether case is ignored for this criteria.
   * @property {array} [filteringCriteria.listOfValues] Gets the list of values
   * in criteria.
   * @property {boolean} [filteringCriteria.isTime] flag set to true if entries
   * are of time format
   * @property {array} [dimensions] Gets list of dimensions with the measure.
   * @property {array} [aggregates] Gets list of aggregates of the measure.
   * @property {boolean} [isProfile] Gets a value indicating whether the
   * current measure is a profile measure
   * @property {string} [measureQuerySql] Gets the user specified custom SQL
   * query.
   * @property {string} [type] Possible values include: 'structured', 'manual'
   * @property {boolean} [isManualQueryScalar] Gets the indicating whether the
   * Business Measure is Scalar or not.
   * @property {array} [dependencies] Gets the list of measures that this
   * measure depends on.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MeasureDefinition
   *
   * @returns {object} metadata of MeasureDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MeasureDefinition',
      type: {
        name: 'Composite',
        className: 'MeasureDefinition',
        modelProperties: {
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          isScalar: {
            required: false,
            serializedName: 'isScalar',
            type: {
              name: 'Boolean'
            }
          },
          linkedEntities: {
            required: false,
            serializedName: 'linkedEntities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MeasureLinkedEntityElementType',
                  type: {
                    name: 'Composite',
                    className: 'MeasureLinkedEntity'
                  }
              }
            }
          },
          variables: {
            required: false,
            serializedName: 'variables',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MeasureVariableElementType',
                  type: {
                    name: 'Composite',
                    className: 'MeasureVariable'
                  }
              }
            }
          },
          filters: {
            required: false,
            serializedName: 'filters',
            type: {
              name: 'Composite',
              className: 'MeasureExpression'
            }
          },
          filteringCriteria: {
            required: false,
            serializedName: 'filteringCriteria',
            type: {
              name: 'Composite',
              className: 'SegmentMembershipCriteria'
            }
          },
          dimensions: {
            required: false,
            serializedName: 'dimensions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MeasureDimensionElementType',
                  type: {
                    name: 'Composite',
                    className: 'MeasureDimension'
                  }
              }
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
          isProfile: {
            required: false,
            serializedName: 'isProfile',
            type: {
              name: 'Boolean'
            }
          },
          measureQuerySql: {
            required: false,
            serializedName: 'measureQuerySql',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          isManualQueryScalar: {
            required: false,
            serializedName: 'isManualQueryScalar',
            type: {
              name: 'Boolean'
            }
          },
          dependencies: {
            required: false,
            serializedName: 'dependencies',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EntityDependencyElementType',
                  type: {
                    name: 'Composite',
                    className: 'EntityDependency'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = MeasureDefinition;
