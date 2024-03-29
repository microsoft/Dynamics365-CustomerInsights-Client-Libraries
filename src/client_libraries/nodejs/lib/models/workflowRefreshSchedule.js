/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents a DAG refresh schedule
 *
 */
class WorkflowRefreshSchedule {
  /**
   * Create a WorkflowRefreshSchedule.
   * @property {string} [operationType] Possible values include: 'none',
   * 'ingestion', 'derivedEntity', 'hierarchy', 'dataPreparation', 'map',
   * 'realtimeM3Search', 'match', 'merge', 'profileStore', 'search',
   * 'activity', 'contact', 'attributeMeasures', 'entityMeasures', 'measures',
   * 'segmentation', 'segmentMembership', 'enrichment', 'preEnrichment',
   * 'transform', 'intelligence', 'aiBuilder', 'insights', 'export',
   * 'modelManagement', 'relationship', 'roleAssignment', 'analysis',
   * 'semanticEntity', 'all'
   * @property {string} [subType] Possible values include: 'noSubType',
   * 'templatedMeasures', 'createAnalysisModel', 'linkAnalysisModel',
   * 'singleActivityMapping', 'powerPlatform'
   * @property {array} [identifiers] Gets the identifiers of the schedule
   * @property {string} [jobType] Possible values include: 'full',
   * 'incremental'
   * @property {boolean} [isActive] Gets a value indicating whether the
   * schedule is active.
   * @property {string} [timezoneId] Gets the ID of the timezone
   * @property {array} [cronSchedules] Gets the schedule in CRON format
   * @property {uuid} [scheduleId] Gets the ID of the schedule
   * @property {uuid} [instanceId] Customer Insights instance id associated
   * with this object.
   */
  constructor() {
  }

  /**
   * Defines the metadata of WorkflowRefreshSchedule
   *
   * @returns {object} metadata of WorkflowRefreshSchedule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkflowRefreshSchedule',
      type: {
        name: 'Composite',
        className: 'WorkflowRefreshSchedule',
        modelProperties: {
          operationType: {
            required: false,
            serializedName: 'operationType',
            type: {
              name: 'String'
            }
          },
          subType: {
            required: false,
            serializedName: 'subType',
            type: {
              name: 'String'
            }
          },
          identifiers: {
            required: false,
            serializedName: 'identifiers',
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
          },
          jobType: {
            required: false,
            serializedName: 'jobType',
            type: {
              name: 'String'
            }
          },
          isActive: {
            required: false,
            serializedName: 'isActive',
            type: {
              name: 'Boolean'
            }
          },
          timezoneId: {
            required: false,
            serializedName: 'timezoneId',
            type: {
              name: 'String'
            }
          },
          cronSchedules: {
            required: false,
            serializedName: 'cronSchedules',
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
          },
          scheduleId: {
            required: false,
            serializedName: 'scheduleId',
            type: {
              name: 'String'
            }
          },
          instanceId: {
            required: false,
            serializedName: 'instanceId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WorkflowRefreshSchedule;
