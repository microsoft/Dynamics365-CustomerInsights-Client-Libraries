/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Represents a Relationship
 *
 * @extends models['RelationshipMetadata']
 */
class InstancesInstanceIdManageRelationshipsPostRequest1 extends models['RelationshipMetadata'] {
  /**
   * Create a InstancesInstanceIdManageRelationshipsPostRequest1.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of InstancesInstanceIdManageRelationshipsPostRequest1
   *
   * @returns {object} metadata of InstancesInstanceIdManageRelationshipsPostRequest1
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Instances-instanceId-ManageRelationshipsPostRequest-1',
      type: {
        name: 'Composite',
        className: 'InstancesInstanceIdManageRelationshipsPostRequest1',
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

module.exports = InstancesInstanceIdManageRelationshipsPostRequest1;
