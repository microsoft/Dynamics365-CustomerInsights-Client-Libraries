/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents a Relationship
 *
 */
class RelationshipMetadata {
  /**
   * Create a RelationshipMetadata.
   * @property {string} [friendlyName] Gets the friendly name of the
   * relationship.
   * @property {string} [name] Gets the unique name for relationship
   * @property {string} [description] Gets the description for relationship
   * @property {string} [relationshipType] Possible values include:
   * 'singleKeyRelationshipOrigin', 'singleKeyRelationshipDestination',
   * 'dataSourceLineageOrigin', 'dataSourceLineageDestination'
   * @property {string} [fromAttributeName] Gets the name of the foreign key
   * reference attribute that this relationship originates from.
   * @property {string} [fromEntityName] Gets the name of the entity this
   * relationship originates from.
   * @property {string} [toAttributeName] Gets the name of the foreign key
   * attribute that this relationship points to.
   * @property {string} [toEntityName] Gets the name of the entity this
   * relationship points to.
   * @property {string} [cardinality] Possible values include: 'oneToMany',
   * 'oneToOne'
   * @property {number} [version] Version number of this object.
   * @property {string} [updatedBy] UPN of the user who last updated this
   * record.
   * @property {date} [updatedUtc] Time this object was last updated.
   * @property {string} [createdBy] Email address of the user who created this
   * record.
   * @property {date} [createdUtc] Time this object was initially created.
   * @property {uuid} [instanceId] Customer Insights instance id associated
   * with this object.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RelationshipMetadata
   *
   * @returns {object} metadata of RelationshipMetadata
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RelationshipMetadata',
      type: {
        name: 'Composite',
        className: 'RelationshipMetadata',
        modelProperties: {
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          relationshipType: {
            required: false,
            serializedName: 'relationshipType',
            type: {
              name: 'String'
            }
          },
          fromAttributeName: {
            required: false,
            serializedName: 'fromAttributeName',
            type: {
              name: 'String'
            }
          },
          fromEntityName: {
            required: false,
            serializedName: 'fromEntityName',
            type: {
              name: 'String'
            }
          },
          toAttributeName: {
            required: false,
            serializedName: 'toAttributeName',
            type: {
              name: 'String'
            }
          },
          toEntityName: {
            required: false,
            serializedName: 'toEntityName',
            type: {
              name: 'String'
            }
          },
          cardinality: {
            required: false,
            serializedName: 'cardinality',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'Number'
            }
          },
          updatedBy: {
            required: false,
            serializedName: 'updatedBy',
            type: {
              name: 'String'
            }
          },
          updatedUtc: {
            required: false,
            serializedName: 'updatedUtc',
            type: {
              name: 'DateTime'
            }
          },
          createdBy: {
            required: false,
            serializedName: 'createdBy',
            type: {
              name: 'String'
            }
          },
          createdUtc: {
            required: false,
            serializedName: 'createdUtc',
            type: {
              name: 'DateTime'
            }
          },
          instanceId: {
            required: false,
            serializedName: 'instanceId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RelationshipMetadata;
