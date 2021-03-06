/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a EntitySearchConfiguration.
 */
class EntitySearchConfiguration {
  /**
   * Create a EntitySearchConfiguration.
   * @property {string} [qualifiedEntityName] Gets unique entity name for this
   * entity
   * @property {array} [attributes] Gets the attribute search config
   */
  constructor() {
  }

  /**
   * Defines the metadata of EntitySearchConfiguration
   *
   * @returns {object} metadata of EntitySearchConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EntitySearchConfiguration',
      type: {
        name: 'Composite',
        className: 'EntitySearchConfiguration',
        modelProperties: {
          qualifiedEntityName: {
            required: false,
            serializedName: 'qualifiedEntityName',
            type: {
              name: 'String'
            }
          },
          attributes: {
            required: false,
            serializedName: 'attributes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AttributeSearchConfigurationElementType',
                  type: {
                    name: 'Composite',
                    className: 'AttributeSearchConfiguration'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = EntitySearchConfiguration;
