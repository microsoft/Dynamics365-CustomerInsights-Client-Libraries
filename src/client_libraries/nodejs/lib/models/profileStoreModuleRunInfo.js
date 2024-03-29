/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ProfileStoreModuleRunInfo.
 */
class ProfileStoreModuleRunInfo {
  /**
   * Create a ProfileStoreModuleRunInfo.
   * @property {object} [runInfo] LastSuccessfulRunId Info for every
   * fullyQualifiedEntity.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ProfileStoreModuleRunInfo
   *
   * @returns {object} metadata of ProfileStoreModuleRunInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProfileStoreModuleRunInfo',
      type: {
        name: 'Composite',
        className: 'ProfileStoreModuleRunInfo',
        modelProperties: {
          runInfo: {
            required: false,
            serializedName: 'runInfo',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ProfileStoreModuleRunInfo;
