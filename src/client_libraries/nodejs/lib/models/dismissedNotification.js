/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents a dismissed notification.
 *
 */
class DismissedNotification {
  /**
   * Create a DismissedNotification.
   * @property {uuid} [notificationId] Gets the unique id of the notification
   * @property {date} [notificationExpiryTimeUtc] Gets the expiration UTC date
   * time of this notification.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DismissedNotification
   *
   * @returns {object} metadata of DismissedNotification
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DismissedNotification',
      type: {
        name: 'Composite',
        className: 'DismissedNotification',
        modelProperties: {
          notificationId: {
            required: false,
            serializedName: 'notificationId',
            type: {
              name: 'String'
            }
          },
          notificationExpiryTimeUtc: {
            required: false,
            serializedName: 'notificationExpiryTimeUtc',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = DismissedNotification;
