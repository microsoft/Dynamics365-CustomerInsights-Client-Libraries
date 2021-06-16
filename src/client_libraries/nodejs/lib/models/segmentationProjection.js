/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represent a Segment Projection.
 *
 */
class SegmentationProjection {
  /**
   * Create a SegmentationProjection.
   * @property {string} [entityName] Gets the Entity Name of the projection.
   * @property {array} [attributeNames] Gets the Attribute Names being
   * projected.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SegmentationProjection
   *
   * @returns {object} metadata of SegmentationProjection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SegmentationProjection',
      type: {
        name: 'Composite',
        className: 'SegmentationProjection',
        modelProperties: {
          entityName: {
            required: false,
            serializedName: 'entityName',
            type: {
              name: 'String'
            }
          },
          attributeNames: {
            required: false,
            serializedName: 'attributeNames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SegmentationProjection;