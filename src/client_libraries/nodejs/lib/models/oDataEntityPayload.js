/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ODataEntityPayload.
 */
class ODataEntityPayload {
  /**
   * Create a ODataEntityPayload.
   * @property {string} [odatacontext]
   * @property {number} [odatacount]
   * @property {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ODataEntityPayload
   *
   * @returns {object} metadata of ODataEntityPayload
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ODataEntityPayload',
      type: {
        name: 'Composite',
        className: 'ODataEntityPayload',
        modelProperties: {
          odatacontext: {
            required: false,
            serializedName: '@odata\\.context',
            type: {
              name: 'String'
            }
          },
          odatacount: {
            required: false,
            serializedName: '@odata\\.count',
            type: {
              name: 'Number'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ODataEntityPayload;
