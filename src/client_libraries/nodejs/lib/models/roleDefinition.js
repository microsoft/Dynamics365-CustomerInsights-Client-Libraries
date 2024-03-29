/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a RoleDefinition.
 */
class RoleDefinition {
  /**
   * Create a RoleDefinition.
   * @property {string} [description]
   * @property {string} [roleName]
   */
  constructor() {
  }

  /**
   * Defines the metadata of RoleDefinition
   *
   * @returns {object} metadata of RoleDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RoleDefinition',
      type: {
        name: 'Composite',
        className: 'RoleDefinition',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          roleName: {
            required: false,
            serializedName: 'roleName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RoleDefinition;
