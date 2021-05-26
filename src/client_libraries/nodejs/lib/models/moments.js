/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Statistical moments.
 *
 */
class Moments {
  /**
   * Create a Moments.
   * @property {number} [mean] Represents the mean.
   * @property {number} [standardDeviation] Represents standard deviation.
   * @property {number} [variance] Represents variance.
   * @property {number} [skewness] Represents skewness in data.
   * @property {number} [kurtosis] Represents kurtosis.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Moments
   *
   * @returns {object} metadata of Moments
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Moments',
      type: {
        name: 'Composite',
        className: 'Moments',
        modelProperties: {
          mean: {
            required: false,
            nullable: true,
            serializedName: 'mean',
            type: {
              name: 'Number'
            }
          },
          standardDeviation: {
            required: false,
            nullable: true,
            serializedName: 'standardDeviation',
            type: {
              name: 'Number'
            }
          },
          variance: {
            required: false,
            nullable: true,
            serializedName: 'variance',
            type: {
              name: 'Number'
            }
          },
          skewness: {
            required: false,
            nullable: true,
            serializedName: 'skewness',
            type: {
              name: 'Number'
            }
          },
          kurtosis: {
            required: false,
            nullable: true,
            serializedName: 'kurtosis',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Moments;
