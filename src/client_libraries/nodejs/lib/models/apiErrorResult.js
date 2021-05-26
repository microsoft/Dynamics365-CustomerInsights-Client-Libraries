/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Api Error response class (DTO)
 *
 */
class ApiErrorResult {
  /**
   * Create a ApiErrorResult.
   * @property {object} [exception]
   * @property {string} [httpStatusCode]
   * @property {string} [exceptionCulprit] Possible values include: 'system',
   * 'user', 'external'
   * @property {string} [errorCode]
   * @property {string} [resultSeverity] Possible values include: 'error',
   * 'warning'
   * @property {string} [message] Message providing more information about the
   * event.
   * @property {object} [params]
   * @property {array} [ciResults] List of CiResult contining CI result error
   * code and information (if any).
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApiErrorResult
   *
   * @returns {object} metadata of ApiErrorResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApiErrorResult',
      type: {
        name: 'Composite',
        className: 'ApiErrorResult',
        modelProperties: {
          exception: {
            required: false,
            serializedName: 'exception',
            type: {
              name: 'Object'
            }
          },
          httpStatusCode: {
            required: false,
            serializedName: 'httpStatusCode',
            type: {
              name: 'String'
            }
          },
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

module.exports = ApiErrorResult;
