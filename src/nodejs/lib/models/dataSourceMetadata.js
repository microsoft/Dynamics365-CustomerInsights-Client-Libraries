/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents metadata for a Customer Insights data source.
 *
 */
class DataSourceMetadata {
  /**
   * Create a DataSourceMetadata.
   * @property {string} [kind] Possible values include: 'salesforce',
   * 'dynamics365', 'powerQuery', 'attachCdm', 'attachCds', 'powerPlatform',
   * 'datahub'
   * @property {boolean} [isActive]
   * @property {array} [entityNames]
   * @property {uuid} [dataSourceId] Gets the unique identity for this object.
   * @property {string} [name] Gets the unique name of the dataSource.
   * @property {string} [friendlyName] Gets the friendlyName of the dataSource.
   * @property {array} [entityInformation] Gets the entity information, by
   * entity name.
   * @property {string} [provisioningState] Possible values include: 'new',
   * 'creating', 'active', 'createFailed', 'updateFailed', 'deleting',
   * 'refreshCredentials', 'resetInstanceInProgress'
   * @property {date} [lastRefresh] Gets the time datasource was last
   * refreshed.
   * @property {string} [refreshState] Possible values include: 'notUpdated',
   * 'updated', 'updating', 'updateFailed', 'updateCancelled'
   * @property {array} [incrementalRefreshProperties] Gets the Incremental
   * refresh properties for entities.
   * @property {string} [modelJsonPath] Gets the model path for CDM data
   * source.
   * @property {number} [version] Gets the version number of this object.
   * @property {string} [updatedBy] Gets the UPN of the user who last updated
   * this record.
   * @property {date} [updatedUtc] Gets the time the object was last updated.
   * @property {string} [createdBy] Gets the email address of the user who
   * created this record.
   * @property {date} [createdUtc] Gets the time the object was initially
   * created.
   * @property {uuid} [instanceId] Gets the Customer Insights instance id
   * associated with this object.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DataSourceMetadata
   *
   * @returns {object} metadata of DataSourceMetadata
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataSourceMetadata',
      type: {
        name: 'Composite',
        className: 'DataSourceMetadata',
        modelProperties: {
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          isActive: {
            required: false,
            readOnly: true,
            serializedName: 'isActive',
            type: {
              name: 'Boolean'
            }
          },
          entityNames: {
            required: false,
            readOnly: true,
            serializedName: 'entityNames',
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
          dataSourceId: {
            required: false,
            readOnly: true,
            serializedName: 'dataSourceId',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: false,
            readOnly: true,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          entityInformation: {
            required: false,
            readOnly: true,
            serializedName: 'entityInformation',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DatasourceEntityInformationElementType',
                  type: {
                    name: 'Composite',
                    className: 'DatasourceEntityInformation'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          lastRefresh: {
            required: false,
            readOnly: true,
            serializedName: 'lastRefresh',
            type: {
              name: 'DateTime'
            }
          },
          refreshState: {
            required: false,
            serializedName: 'refreshState',
            type: {
              name: 'String'
            }
          },
          incrementalRefreshProperties: {
            required: false,
            readOnly: true,
            serializedName: 'incrementalRefreshProperties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'IncrementalRefreshPropertiesElementType',
                  type: {
                    name: 'Composite',
                    className: 'IncrementalRefreshProperties'
                  }
              }
            }
          },
          modelJsonPath: {
            required: false,
            readOnly: true,
            serializedName: 'modelJsonPath',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            readOnly: true,
            serializedName: 'version',
            type: {
              name: 'Number'
            }
          },
          updatedBy: {
            required: false,
            readOnly: true,
            serializedName: 'updatedBy',
            type: {
              name: 'String'
            }
          },
          updatedUtc: {
            required: false,
            readOnly: true,
            serializedName: 'updatedUtc',
            type: {
              name: 'DateTime'
            }
          },
          createdBy: {
            required: false,
            readOnly: true,
            serializedName: 'createdBy',
            type: {
              name: 'String'
            }
          },
          createdUtc: {
            required: false,
            readOnly: true,
            serializedName: 'createdUtc',
            type: {
              name: 'DateTime'
            }
          },
          instanceId: {
            required: false,
            readOnly: true,
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

module.exports = DataSourceMetadata;
