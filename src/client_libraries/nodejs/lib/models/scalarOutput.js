/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ScalarOutput.
 */
class ScalarOutput {
  /**
   * Create a ScalarOutput.
   * @property {object} [values] Gets the output folder path for the
   * evaluation.
   * @property {string} [measureName]
   * @property {date} [evaluationTime] Gets the evaluation start time.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ScalarOutput
   *
   * @returns {object} metadata of ScalarOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ScalarOutput',
      type: {
        name: 'Composite',
        className: 'ScalarOutput',
        modelProperties: {
          values: {
            required: false,
            serializedName: 'values',
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
          },
          measureName: {
            required: false,
            serializedName: 'measureName',
            type: {
              name: 'String'
            }
          },
          evaluationTime: {
            required: false,
            serializedName: 'evaluationTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = ScalarOutput;