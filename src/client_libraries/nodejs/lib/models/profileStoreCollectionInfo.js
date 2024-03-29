/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ProfileStoreCollectionInfo.
 */
class ProfileStoreCollectionInfo {
  /**
   * Create a ProfileStoreCollectionInfo.
   * @property {string} [currentState] Possible values include: 'empty',
   * 'inBuild', 'queryable'
   * @property {number} [rowCount] Gets the row count of customer file yielded
   * from merge output.
   * @property {number} [size] Gets the size of customer file yielded from
   * merge .
   * @property {object} [profileStoreHydrationStateInfo] Gets the state of
   * profile store hydration per job type.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ProfileStoreCollectionInfo
   *
   * @returns {object} metadata of ProfileStoreCollectionInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProfileStoreCollectionInfo',
      type: {
        name: 'Composite',
        className: 'ProfileStoreCollectionInfo',
        modelProperties: {
          currentState: {
            required: false,
            serializedName: 'currentState',
            type: {
              name: 'String'
            }
          },
          rowCount: {
            required: false,
            nullable: true,
            serializedName: 'rowCount',
            type: {
              name: 'Number'
            }
          },
          size: {
            required: false,
            nullable: true,
            serializedName: 'size',
            type: {
              name: 'Number'
            }
          },
          profileStoreHydrationStateInfo: {
            required: false,
            serializedName: 'profileStoreHydrationStateInfo',
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

module.exports = ProfileStoreCollectionInfo;
