/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Settings to track notifications that users have viewed and dismissed
 *
 */
class Notifications {
  /**
   * Create a Notifications.
   * @property {object} [history]
   * @property {string} [history.id] Gets history id.
   * @property {boolean} [history.viewed] Checks for already visited.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Notifications
   *
   * @returns {object} metadata of Notifications
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Notifications',
      type: {
        name: 'Composite',
        className: 'Notifications',
        modelProperties: {
          history: {
            required: false,
            serializedName: 'history',
            type: {
              name: 'Composite',
              className: 'History'
            }
          }
        }
      }
    };
  }
}

module.exports = Notifications;