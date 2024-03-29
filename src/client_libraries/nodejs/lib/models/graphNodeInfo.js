/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a GraphNodeInfo.
 */
class GraphNodeInfo {
  /**
   * Create a GraphNodeInfo.
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
   * @property {string} [identifier]
   * @property {string} [friendlyName]
   * @property {array} [jobIds]
   * @property {string} [taskStatus] Possible values include: 'queued',
   * 'needsUpdate', 'running', 'failed', 'timedOut', 'aborted', 'deleted',
   * 'successful', 'skipped'
   * @property {array} [lastSuccessJobIds]
   * @property {date} [endTimestamp]
   * @property {date} [lastSuccessfulTimestamp]
   * @property {object} [ciError]
   * @property {string} [ciError.exceptionCulprit] Possible values include:
   * 'system', 'user', 'external'
   * @property {string} [ciError.errorCode]
   * @property {string} [ciError.resultSeverity] Possible values include:
   * 'error', 'warning', 'recommendation'
   * @property {string} [ciError.message] Message providing more information
   * about the event.
   * @property {string} [ciError.name] Message providing more information about
   * the event.
   * @property {object} [ciError.params]
   * @property {array} [ciError.ciResults] List of CiResult contining CI result
   * error code and information (if any).
   * @property {array} [ciErrors]
   * @property {object} [additionalInfo]
   * @property {string} [additionalInfo.kind] Possible values include: 'test',
   * 'segmentation', 'measures', 'export', 'incrementalIngestion',
   * 'incrementalMatch', 'incrementalMatchWithPreview', 'merge', 'mark',
   * 'affinities'
   * @property {object} [selectionReason]
   * @property {string} [selectionReason.code] Possible values include:
   * 'unknown', 'requested', 'firstRun', 'unsuccessful', 'lastRunSkipped',
   * 'alreadyRunning', 'modifiedInputs', 'upstreamRerunning',
   * 'dependantSystemNode', 'dependsOnMerge'
   * @property {string} [selectionReason.details]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GraphNodeInfo
   *
   * @returns {object} metadata of GraphNodeInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GraphNodeInfo',
      type: {
        name: 'Composite',
        className: 'GraphNodeInfo',
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
          identifier: {
            required: false,
            serializedName: 'identifier',
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          jobIds: {
            required: false,
            serializedName: 'jobIds',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UuidElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          taskStatus: {
            required: false,
            serializedName: 'taskStatus',
            type: {
              name: 'String'
            }
          },
          lastSuccessJobIds: {
            required: false,
            serializedName: 'lastSuccessJobIds',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UuidElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          endTimestamp: {
            required: false,
            serializedName: 'endTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          lastSuccessfulTimestamp: {
            required: false,
            serializedName: 'lastSuccessfulTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          ciError: {
            required: false,
            serializedName: 'ciError',
            type: {
              name: 'Composite',
              className: 'CIResult'
            }
          },
          ciErrors: {
            required: false,
            serializedName: 'ciErrors',
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
          },
          additionalInfo: {
            required: false,
            serializedName: 'additionalInfo',
            type: {
              name: 'Composite',
              className: 'CustomTaskInformation'
            }
          },
          selectionReason: {
            required: false,
            serializedName: 'selectionReason',
            type: {
              name: 'Composite',
              className: 'SelectionReason'
            }
          }
        }
      }
    };
  }
}

module.exports = GraphNodeInfo;
