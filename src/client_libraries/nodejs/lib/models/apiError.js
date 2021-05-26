/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents API error code and message
 *
 */
class ApiError {
  /**
   * Create a ApiError.
   * @property {string} [errorCode] Possible values include: 'notFound',
   * 'ambiguousReference', 'malformedInput', 'serviceUnavailable',
   * 'badRequest', 'notAllowed', 'conflict', 'locked', 'forbidden'
   * @property {string} [message] Message associated with the error
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApiError
   *
   * @returns {object} metadata of ApiError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApiError',
      type: {
        name: 'Composite',
        className: 'ApiError',
        modelProperties: {
          errorCode: {
            required: false,
            serializedName: 'errorCode',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApiError;
