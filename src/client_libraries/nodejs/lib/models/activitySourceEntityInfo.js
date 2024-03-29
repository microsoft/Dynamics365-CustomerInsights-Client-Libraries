/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Collection of the entity name and other info of the source activity entity
 * ingested by user.
 *
 */
class ActivitySourceEntityInfo {
  /**
   * Create a ActivitySourceEntityInfo.
   * @property {string} [entityName] Gets the qualified entity name of the
   * activity source entity.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ActivitySourceEntityInfo
   *
   * @returns {object} metadata of ActivitySourceEntityInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ActivitySourceEntityInfo',
      type: {
        name: 'Composite',
        className: 'ActivitySourceEntityInfo',
        modelProperties: {
          entityName: {
            required: false,
            serializedName: 'entityName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ActivitySourceEntityInfo;
