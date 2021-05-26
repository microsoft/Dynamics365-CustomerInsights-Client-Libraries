/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The information for datalake folder in CDS
 *
 */
class DatalakeFolderDetail {
  /**
   * Create a DatalakeFolderDetail.
   * @property {string} [name] Gets the datalake folder Friendly Name
   * @property {string} [uniqueName] Gets the Cds datalake folder unique Name
   */
  constructor() {
  }

  /**
   * Defines the metadata of DatalakeFolderDetail
   *
   * @returns {object} metadata of DatalakeFolderDetail
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatalakeFolderDetail',
      type: {
        name: 'Composite',
        className: 'DatalakeFolderDetail',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          uniqueName: {
            required: false,
            serializedName: 'uniqueName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DatalakeFolderDetail;
