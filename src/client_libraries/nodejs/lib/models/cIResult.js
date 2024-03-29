/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents response result type
 *
 */
class CIResult {
  /**
   * Create a CIResult.
   * @property {string} [exceptionCulprit] Possible values include: 'system',
   * 'user', 'external'
   * @property {string} [errorCode]
   * @property {string} [resultSeverity] Possible values include: 'error',
   * 'warning', 'recommendation'
   * @property {string} [message] Message providing more information about the
   * event.
   * @property {string} [name] Message providing more information about the
   * event.
   * @property {object} [params]
   * @property {array} [ciResults] List of CiResult contining CI result error
   * code and information (if any).
   */
  constructor() {
  }

  /**
   * Defines the metadata of CIResult
   *
   * @returns {object} metadata of CIResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CIResult',
      type: {
        name: 'Composite',
        className: 'CIResult',
        modelProperties: {
          exceptionCulprit: {
            required: false,
            serializedName: 'exceptionCulprit',
            type: {
              name: 'String'
            }
          },
          errorCode: {
            required: false,
            serializedName: 'errorCode',
            type: {
              name: 'String'
            }
          },
          resultSeverity: {
            required: false,
            serializedName: 'resultSeverity',
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
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          params: {
            required: false,
            serializedName: 'params',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          ciResults: {
            required: false,
            serializedName: 'ciResults',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CIResultElementType',
                  type: {
                    name: 'Composite',
                    className: 'CIResult'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CIResult;
