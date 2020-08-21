/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents a DCI entity data partition
 *
 */
class PartitionMetadata {
  /**
   * Create a PartitionMetadata.
   * @property {string} [name] Gets the name of the data partition
   * @property {string} [location] Gets the uri location of the data
   * @property {object} [fileFormatSettings]
   * @property {boolean} [hasHeader]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PartitionMetadata
   *
   * @returns {object} metadata of PartitionMetadata
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PartitionMetadata',
      type: {
        name: 'Composite',
        className: 'PartitionMetadata',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          fileFormatSettings: {
            required: false,
            serializedName: 'fileFormatSettings',
            type: {
              name: 'Object'
            }
          },
          hasHeader: {
            required: false,
            readOnly: true,
            serializedName: 'hasHeader',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = PartitionMetadata;
