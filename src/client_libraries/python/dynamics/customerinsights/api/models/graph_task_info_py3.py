# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class GraphTaskInfo(Model):
    """GraphTaskInfo.

    :param task_id:
    :type task_id: str
    :param task_status: Possible values include: 'queued', 'needsUpdate',
     'running', 'failed', 'timedOut', 'aborted', 'deleted', 'successful',
     'skipped'
    :type task_status: str or ~dynamics.customerinsights.api.models.enum
    :param operation_type: Possible values include: 'none', 'ingestion',
     'derivedEntity', 'dataPreparation', 'map', 'match', 'merge',
     'profileStore', 'search', 'activity', 'attributeMeasures',
     'entityMeasures', 'measures', 'segmentation', 'enrichment',
     'intelligence', 'aiBuilder', 'insights', 'export', 'modelManagement',
     'relationship', 'roleAssignment', 'analysis', 'all'
    :type operation_type: str or ~dynamics.customerinsights.api.models.enum
    :param sub_type: Possible values include: 'noSubType',
     'templatedMeasures', 'createAnalysisModel', 'linkAnalysisModel',
     'singleActivityMapping', 'powerPlatform'
    :type sub_type: str or ~dynamics.customerinsights.api.models.enum
    :param job_ids:
    :type job_ids: list[str]
    :param friendly_name:
    :type friendly_name: str
    :param end_timestamp:
    :type end_timestamp: datetime
    :param ci_error:
    :type ci_error: ~dynamics.customerinsights.api.models.CIResult
    :param ci_errors:
    :type ci_errors: list[~dynamics.customerinsights.api.models.CIResult]
    :param waiting_task_ids:
    :type waiting_task_ids: list[str]
    :param additional_info:
    :type additional_info:
     ~dynamics.customerinsights.api.models.CustomTaskInformation
    :param submitted_timestamp:
    :type submitted_timestamp: datetime
    """

    _attribute_map = {
        'task_id': {'key': 'taskId', 'type': 'str'},
        'task_status': {'key': 'taskStatus', 'type': 'str'},
        'operation_type': {'key': 'operationType', 'type': 'str'},
        'sub_type': {'key': 'subType', 'type': 'str'},
        'job_ids': {'key': 'jobIds', 'type': '[str]'},
        'friendly_name': {'key': 'friendlyName', 'type': 'str'},
        'end_timestamp': {'key': 'endTimestamp', 'type': 'iso-8601'},
        'ci_error': {'key': 'ciError', 'type': 'CIResult'},
        'ci_errors': {'key': 'ciErrors', 'type': '[CIResult]'},
        'waiting_task_ids': {'key': 'waitingTaskIds', 'type': '[str]'},
        'additional_info': {'key': 'additionalInfo', 'type': 'CustomTaskInformation'},
        'submitted_timestamp': {'key': 'submittedTimestamp', 'type': 'iso-8601'},
    }

    def __init__(self, *, task_id: str=None, task_status=None, operation_type=None, sub_type=None, job_ids=None, friendly_name: str=None, end_timestamp=None, ci_error=None, ci_errors=None, waiting_task_ids=None, additional_info=None, submitted_timestamp=None, **kwargs) -> None:
        super(GraphTaskInfo, self).__init__(**kwargs)
        self.task_id = task_id
        self.task_status = task_status
        self.operation_type = operation_type
        self.sub_type = sub_type
        self.job_ids = job_ids
        self.friendly_name = friendly_name
        self.end_timestamp = end_timestamp
        self.ci_error = ci_error
        self.ci_errors = ci_errors
        self.waiting_task_ids = waiting_task_ids
        self.additional_info = additional_info
        self.submitted_timestamp = submitted_timestamp
