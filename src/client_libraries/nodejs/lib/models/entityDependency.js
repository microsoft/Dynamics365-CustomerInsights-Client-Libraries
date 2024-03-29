/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents a reference to an entity
 *
 */
class EntityDependency {
  /**
   * Create a EntityDependency.
   * @property {string} [qualifiedEntityName] Gets the qualified entity name.
   * @property {string} [type] Possible values include: 'unspecified',
   * 'profile', 'conflationMap', 'activity', 'aggregateKpi', 'profileKpi',
   * 'unifiedActivity', 'segment', 'intelligence', 'genericPrediction',
   * 'enrichment', 'insights', 'derivedEntity', 'corrupt', 'selfConflation',
   * 'conflationManualReview', 'selfConflationManualReview',
   * 'semanticActivity', 'segmentMembership', 'hierarchy', 'dataLineage',
   * 'transform', 'semanticEntity'
   * @property {array} [attributeNames] Gets the list of attributes included in
   * the dependency.
   * @property {array} [relationshipNames] Gets the list of relationships
   * included in the dependency
   * @property {array} [activityDetails] Contains the Activity type and entity
   * name corresponding to that activity type.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EntityDependency
   *
   * @returns {object} metadata of EntityDependency
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EntityDependency',
      type: {
        name: 'Composite',
        className: 'EntityDependency',
        modelProperties: {
          qualifiedEntityName: {
            required: false,
            serializedName: 'qualifiedEntityName',
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
          attributeNames: {
            required: false,
            serializedName: 'attributeNames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          relationshipNames: {
            required: false,
            serializedName: 'relationshipNames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          activityDetails: {
            required: false,
            serializedName: 'activityDetails',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'InsightActivityDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'InsightActivityDetails'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = EntityDependency;
