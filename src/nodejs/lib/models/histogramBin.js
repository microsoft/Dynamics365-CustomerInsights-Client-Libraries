/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Histogram bin.
 *
 */
class HistogramBin {
  /**
   * Create a HistogramBin.
   * @property {number} [lowerBound] Gets or sets the lower bound.
   * @property {number} [upperBound] Gets or sets the upper bound.
   * @property {number} [count] Gets or sets the count.
   */
  constructor() {
  }

  /**
   * Defines the metadata of HistogramBin
   *
   * @returns {object} metadata of HistogramBin
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HistogramBin',
      type: {
        name: 'Composite',
        className: 'HistogramBin',
        modelProperties: {
          lowerBound: {
            required: false,
            serializedName: 'lowerBound',
            type: {
              name: 'Number'
            }
          },
          upperBound: {
            required: false,
            serializedName: 'upperBound',
            type: {
              name: 'Number'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = HistogramBin;
