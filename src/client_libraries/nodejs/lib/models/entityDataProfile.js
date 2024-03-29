/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents Entity Data Profile information.
 *
 */
class EntityDataProfile {
  /**
   * Create a EntityDataProfile.
   * @property {string} [qualifiedEntityName] Qualified Entity Name.
   * @property {number} [rowCount] Row count.
   * @property {number} [quarantineRowCount] Quarentine row count
   * @property {date} [profilingDate] Date for Profiling.
   * @property {string} [profiledAttributes] Profiling attributes.
   * @property {string} [corruptAttributes] Respresents currupt attributes.
   * @property {array} [attributeDataProfiles] Contains all the attributes data
   * profiles.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EntityDataProfile
   *
   * @returns {object} metadata of EntityDataProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EntityDataProfile',
      type: {
        name: 'Composite',
        className: 'EntityDataProfile',
        modelProperties: {
          qualifiedEntityName: {
            required: false,
            serializedName: 'qualifiedEntityName',
            type: {
              name: 'String'
            }
          },
          rowCount: {
            required: false,
            serializedName: 'rowCount',
            type: {
              name: 'Number'
            }
          },
          quarantineRowCount: {
            required: false,
            serializedName: 'quarantineRowCount',
            type: {
              name: 'Number'
            }
          },
          profilingDate: {
            required: false,
            serializedName: 'profilingDate',
            type: {
              name: 'DateTime'
            }
          },
          profiledAttributes: {
            required: false,
            serializedName: 'profiledAttributes',
            type: {
              name: 'String'
            }
          },
          corruptAttributes: {
            required: false,
            serializedName: 'corruptAttributes',
            type: {
              name: 'String'
            }
          },
          attributeDataProfiles: {
            required: false,
            serializedName: 'attributeDataProfiles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AttributeDataProfileElementType',
                  type: {
                    name: 'Composite',
                    className: 'AttributeDataProfile'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = EntityDataProfile;
