/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents a Segment Metadata.
 *
 */
class SegmentMetadata {
  /**
   * Create a SegmentMetadata.
   * @property {string} [name] Gets the unique name of the segment
   * @property {string} [friendlyName] Gets the friendlyName of the segment.
   * @property {string} [description] Gets the description of the segment.
   * @property {object} [segmentQueryExpression]
   * @property {string} [segmentQueryExpression.type] Possible values include:
   * 'structured', 'manual'
   * @property {array} [segmentQueryExpression.projections] Gets list of
   * attributes to be projected in segment.
   * @property {array} [segmentQueryExpression.rowsets] Gets list of rowsets of
   * segment.
   * @property {string} [segmentQueryExpression.segmentationQuerySql] Gets the
   * user specified custom SQL query.
   * @property {string} [state] Possible values include: 'inactive', 'active',
   * 'validating', 'validated', 'invalid', 'validationError'
   * @property {string} [errorDescription] Gets the error description when the
   * segment metadata has some issues after refresh.
   * @property {date} [endDate] Gets the end date of the segment.
   * @property {object} [evaluationStatus]
   * @property {string} [evaluationStatus.jobStatus] Possible values include:
   * 'None', 'Queued', 'Running', 'CompletedSuccess', 'CompletedFailure',
   * 'Cancelled', 'Interrupted', 'NotQualified'
   * @property {date} [evaluationStatus.evaluationDate]
   * @property {number} [evaluationStatus.entityCount]
   * @property {object} [evaluationStatus.error]
   * @property {string} [evaluationStatus.error.value]
   * @property {string} [evaluationStatus.error.key] Possible values include:
   * 'activityMappingDuplicateMappingOnEntity', 'activityMappingEmptyInput',
   * 'activityMappingInvalidKeyAttribute',
   * 'activityMappingInvalidRelationshipAttribute',
   * 'activityMappingInvalidStartEndTimeField',
   * 'activityMappingInvalidStartTimeFieldValue', 'apiInternalError',
   * 'apiVersionNotSupported', 'authEmptyAuthorizationCode',
   * 'authEmptyAuthorizationCodeError', 'authEmptyBearerToken',
   * 'authEmptyBearerTokenError', 'authEmptyRedirect', 'authEmptyRedirectUrl',
   * 'authEmptyRefreshToken', 'authEmptyState', 'authInvalidApp',
   * 'authInvalidAppType', 'authInvalidToken', 'authUserHasC360LicenseError',
   * 'configurationControllerMissingInput', 'customer360ApiInvalidIdentity',
   * 'customer360ApiInvalidTenantIdClaims',
   * 'customer360ApiInvalidUserIdClaims', 'dataRefreshInvalidScheduleRequest',
   * 'dataSourceCreateAlreadyExistError', 'dataSourceModelAlreadyExistError',
   * 'dataSourceDataSourceCanNotDelete', 'dataSourceDataSourceDeleted',
   * 'dataSourceDataSourceNotFound', 'dataSourceDuplicateDataSourceName',
   * 'dataSourceEmptyDataSource', 'dataSourceEmptyDataSourceName',
   * 'dataSourceEmptyDataSourceNameError', 'dataSourceEmptyAttributeError',
   * 'dataLakeAccountInvalidError', 'dataLakeSecretInvalidError',
   * 'dataSourceModelNotFoundError', 'modelDataTypeError',
   * 'modelDataConvertError', 'resourceMetadataNotFoundError',
   * 'dataSourceInactiveInstance', 'dataSourceInstanceNotFound',
   * 'dataSourceCreationFailed', 'dataSourceInvalidDataSourceName',
   * 'dataSourceInvalidDataSourceNameCharacter',
   * 'dataSourceInvalidEntityNames', 'dataSourceMetadataExceedsLimit',
   * 'dataSourceNotFound', 'dataSourceNotProvisioned',
   * 'dataSourceRefreshTimeout', 'dataSourceUpdateAlreadyExistError',
   * 'dataSourceUpdateDependenciesError', 'datasourceIngestionUnexpectedError',
   * 'dynamics365EmptyHeader', 'entityDataControllerContentType',
   * 'entityMetadataCanNotMarkAttribute', 'entityMetadataCanNotUpdateEntity',
   * 'entityMetadataCanNotUpdateEntityOfActivityType',
   * 'entityMetadataForAttributeNotFoundForEntity',
   * 'entityMetadataNotFoundForEntity', 'failedToSubmiProfileStoreJob',
   * 'gdprDeleteOldSnapshotsConfiguratonError',
   * 'gdprDeleteOldSnapshotsNonC360DataflowsError', 'graphApiEmptySearchTerm',
   * 'graphApiPrincipalIdMissingInRequest', 'graphApiPrincipalIdsExceedslimit',
   * 'graphApiPrincipalIdsExceedslimitError', 'graphApiTopLimitError',
   * 'graphApiGroupDirectoryInfoFailed', 'graphApiUserDirectoryInfoFailed',
   * 'instanceNoAssignmentsInRequest', 'instanceUserSettingsMissing',
   * 'instancePreferredLanguageMissing',
   * 'instancePreferredRegionalFormatMissing', 'invalidDataSourceType',
   * 'invocationBadRequestInReadingHeaderInfo', 'invocationFailedBindToMethod',
   * 'invocationUnsupportedMediaType',
   * 'measuresProcessingOrchestrationSkipMeasuresAndNotify',
   * 'nullOrEmptyInstanceId', 'offlineGraphIngestionOrchestrationNotify',
   * 'segmentEvaluationOrchestrationNotify',
   * 'profileStoreIngestionFailedWithJobInfo',
   * 'profileStoreIngestionOrchestrationFailed',
   * 'profileStoreOrchestrationSuccessful',
   * 'publicMetadataControllerAnonymousType', 'rbacAADDirectoryObjectNotFound',
   * 'rbacCanNotRevokePermissionFromInstance',
   * 'rbacDeletedRoleAssignmentsFromUser', 'rbacInvalidRole',
   * 'rbacRoleIsNotValid', 'rbacUnsupportedPrincipalType', 'rbacUserNotFound',
   * 'refreshBackgroundTaskRunningError', 'refreshConflationCancelled',
   * 'refreshConflationMetadataNotFound', 'refreshConflationJobFailed',
   * 'refreshEnrichmentMetadataNotFound', 'refreshEnrichmentMisconfigured',
   * 'refreshEnrichmentRequestExceeded', 'refreshEnrichmentRequestThrottling',
   * 'refreshExportCancelled', 'refreshExportCompleted', 'refreshExportFailed',
   * 'refreshExportRequestThrottling', 'refreshExportSkipped',
   * 'refreshMatchRequestThrotling',
   * 'refreshMeasuresEvaluationRequestThrottling',
   * 'refreshMergeRequestThrotling', 'refreshPrerequisitesUnmetError',
   * 'refreshRunningOrchestrationNotFound', 'resourceBuilderFailure',
   * 'segmentAdvancedEditorNotEnabled', 'staleMatchMetadataError',
   * 'staleMatchRunError', 'testName', 'measuresProcessingOrchestrationFailed',
   * 'measuresProcessingOrchestrationFailedV2',
   * 'offlineGraphIngestionOrchestrationFailed',
   * 'segmentEvaluationOrchestrationFailed', 'matchMergeOrchestrationFailed',
   * 'refreshMatchPairsEntityDoesNotExist',
   * 'invalidSegmentDefinitionErrorMessage', 'clauseForNextRefresh',
   * 'refreshIntelligenceCancelled', 'refreshIntelligenceCompleted',
   * 'refreshIntelligenceFailed', 'refreshIntelligenceSkipped',
   * 'refreshIntelligenceDisabled', 'refreshConflationConfigurationNotFound',
   * 'conflationPlanInvalid', 'conflationMetadataNotFoundForEntity',
   * 'conflationMetadataNotFoundForColumn', 'conflationConfigurationInvalid',
   * 'conflationUnexpectedError', 'matchPairsEntityDataMissing',
   * 'matchPairsEntityNotExist', 'conflationResolutionInvalid',
   * 'intelligenceUnsupportedDiscoverySource',
   * 'refreshDataPreparationCancelled',
   * 'refreshDataPreparationRequestThrottling', 'refreshDataPreparationFailed',
   * 'bapNotMapped', 'bapCannotCreateEnvironment',
   * 'bapInvalidEnvironmentDisplayNameLength',
   * 'bapInvalidEnvironmentDisplayName', 'bapInvalidEnvironmentLocation',
   * 'bapInvalidEnvironmentSku', 'bapInvalidEnvironment',
   * 'bapInvalidTenantEnvironmentLimit', 'bapInvalidUserEnvironmentLimit',
   * 'dataSourceIngestionCancelled', 'dataSourceIngestionSkippedNoEntities',
   * 'genericPredictionEntitiesNotAvailable',
   * 'genericPredictionEntityPartitionsNotAvailable',
   * 'genericPredictionEntityWithLabelAttributeNotAvailable',
   * 'genericPredictionAttributesNotAvailable',
   * 'invalidJarvisEntityCreationErrorMessage',
   * 'activityIngestionActivityIdNotFound',
   * 'activityIngestionActivityTimeNotFound',
   * 'activityIngestionIncorrectMinViewFields',
   * 'activityIngestionNoJarvisColumnMapping', 'activityIngestionNoPrimaryKey',
   * 'activityIngestionNoSourceStream',
   * 'activityIngestionNoSourceStreamWithCorrectActivityName',
   * 'activityIngestionNoStartOrEndTime',
   * 'activityIngestionRangeIndexNotFound',
   * 'activityIngestionUniqueSourceStream', 'entityNoPrimaryKey',
   * 'invalidSegmentAdvancedSegCreateInInvalidState', 'invalidSegmentFormat',
   * 'invalidSegmentNameExists', 'inavlidSegmentType',
   * 'inavlidSegmentValidationDisabled', 'invalidSegmentNameConflict',
   * 'invalidSegmentNoExistingSegWithName', 'invalidSegmentSegNotFound',
   * 'invalidSegmentValidationNotAllowedForState',
   * 'invalidSegmentValidationNotAllowedForType', 'segmentNotFound',
   * 'dataSourceEmptyResourceIdError', 'invalidOrganizationUrl',
   * 'enablingCdsEntitiesFailed',
   * 'dataSourceIngestionSkippedForMissingCdsModelJsonPath',
   * 'dataSourceIngestionSkippedForCdsModelIncomplete',
   * 'missingOrganizationUrl', 'searchStoreUnavailable',
   * 'profileStoreUnavailable', 'unsupportedInsightType',
   * 'invalidInsightInputGeneric', 'invalidMalformedInsightInputPayload',
   * 'invalidInsightInputMissingName'
   * @property {array} [evaluationStatus.error.args]
   * @property {uuid} [evaluationStatus.lastSuccessfulRunId]
   * @property {object} [sqlValidationStats]
   * @property {date} [sqlValidationStats.validationDate] Gets the last
   * validation evaluation date
   * @property {string} [sqlValidationStats.error] Gets the number of
   * consecutive failures
   * @property {array} [evaluationStatusHistory] Gets the segment evaluation
   * status history. (not persisted in store)
   * @property {number} [version] Gets the version number of this object.
   * @property {string} [updatedBy] Gets the UPN of the user who last updated
   * this record.
   * @property {date} [updatedUtc] Gets the time the object was last updated.
   * @property {string} [createdBy] Gets the email address of the user who
   * created this record.
   * @property {date} [createdUtc] Gets the time the object was initially
   * created.
   * @property {uuid} [instanceId] Gets the Customer Insights instance id
   * associated with this object.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SegmentMetadata
   *
   * @returns {object} metadata of SegmentMetadata
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SegmentMetadata',
      type: {
        name: 'Composite',
        className: 'SegmentMetadata',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
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
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          segmentQueryExpression: {
            required: false,
            serializedName: 'segmentQueryExpression',
            type: {
              name: 'Composite',
              className: 'SegmentationQuery'
            }
          },
          state: {
            required: false,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          errorDescription: {
            required: false,
            serializedName: 'errorDescription',
            type: {
              name: 'String'
            }
          },
          endDate: {
            required: false,
            serializedName: 'endDate',
            type: {
              name: 'DateTime'
            }
          },
          evaluationStatus: {
            required: false,
            serializedName: 'evaluationStatus',
            type: {
              name: 'Composite',
              className: 'SegmentationPublishStats'
            }
          },
          sqlValidationStats: {
            required: false,
            serializedName: 'sqlValidationStats',
            type: {
              name: 'Composite',
              className: 'SqlValidationStats'
            }
          },
          evaluationStatusHistory: {
            required: false,
            serializedName: 'evaluationStatusHistory',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HistoricalSegmentStatsElementType',
                  type: {
                    name: 'Composite',
                    className: 'HistoricalSegmentStats'
                  }
              }
            }
          },
          version: {
            required: false,
            readOnly: true,
            serializedName: 'version',
            type: {
              name: 'Number'
            }
          },
          updatedBy: {
            required: false,
            readOnly: true,
            serializedName: 'updatedBy',
            type: {
              name: 'String'
            }
          },
          updatedUtc: {
            required: false,
            readOnly: true,
            serializedName: 'updatedUtc',
            type: {
              name: 'DateTime'
            }
          },
          createdBy: {
            required: false,
            readOnly: true,
            serializedName: 'createdBy',
            type: {
              name: 'String'
            }
          },
          createdUtc: {
            required: false,
            readOnly: true,
            serializedName: 'createdUtc',
            type: {
              name: 'DateTime'
            }
          },
          instanceId: {
            required: false,
            readOnly: true,
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

module.exports = SegmentMetadata;
