/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The instance creation request.
 *
 * @extends models['InstanceCreationRequest']
 */
class InstancesV2PostRequest extends models['InstanceCreationRequest'] {
  /**
   * Create a InstancesV2PostRequest.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of InstancesV2PostRequest
   *
   * @returns {object} metadata of InstancesV2PostRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InstancesV2PostRequest',
      type: {
        name: 'Composite',
        className: 'InstancesV2PostRequest',
        modelProperties: {
          instanceMetadata: {
            required: false,
            serializedName: 'instanceMetadata',
            type: {
              name: 'Composite',
              className: 'InstanceMetadata'
            }
          },
          byosaResourceMetadata: {
            required: false,
            serializedName: 'byosaResourceMetadata',
            type: {
              name: 'Composite',
              className: 'ResourceMetadata'
            }
          },
          cdsResourceMetadata: {
            required: false,
            serializedName: 'cdsResourceMetadata',
            type: {
              name: 'Composite',
              className: 'ResourceMetadata'
            }
          },
          byoPbiProvisioningInfo: {
            required: false,
            serializedName: 'byoPbiProvisioningInfo',
            type: {
              name: 'Composite',
              className: 'ByoPbiProvisioningInfo'
            }
          },
          isCdsMdlStorageEnabled: {
            required: false,
            serializedName: 'isCdsMdlStorageEnabled',
            type: {
              name: 'Boolean'
            }
          },
          isCiToByosaMigrationEnabled: {
            required: false,
            serializedName: 'isCiToByosaMigrationEnabled',
            type: {
              name: 'Boolean'
            }
          },
          bapProvisioningType: {
            required: false,
            serializedName: 'bapProvisioningType',
            type: {
              name: 'String'
            }
          },
          isPbiProvisioningRequired: {
            required: false,
            serializedName: 'isPbiProvisioningRequired',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = InstancesV2PostRequest;