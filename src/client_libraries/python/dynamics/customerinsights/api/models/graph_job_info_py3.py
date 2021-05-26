# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class GraphJobInfo(Model):
    """GraphJobInfo.

    :param job_id:
    :type job_id: str
    :param job_type: Possible values include: 'full', 'incremental'
    :type job_type: str or ~dynamics.customerinsights.api.models.enum
    :param job_submission_kind: Possible values include: 'onDemand',
     'scheduled'
    :type job_submission_kind: str or
     ~dynamics.customerinsights.api.models.enum
    :param job_status: Possible values include: 'queued', 'needsUpdate',
     'running', 'failed', 'timedOut', 'aborted', 'deleted', 'successful',
     'skipped'
    :type job_status: str or ~dynamics.customerinsights.api.models.enum
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
    :param end_timestamp:
    :type end_timestamp: datetime
    :param should_force_run_requested_nodes:
    :type should_force_run_requested_nodes: bool
    :param tasks:
    :type tasks: list[~dynamics.customerinsights.api.models.GraphTaskInfo]
    :param id_list:
    :type id_list: list[str]
    :param options:
    :type options: ~dynamics.customerinsights.api.models.GraphJobOptions
    :param submitted_timestamp:
    :type submitted_timestamp: datetime
    """

    _attribute_map = {
        'job_id': {'key': 'jobId', 'type': 'str'},
        'job_type': {'key': 'jobType', 'type': 'str'},
        'job_submission_kind': {'key': 'jobSubmissionKind', 'type': 'str'},
        'job_status': {'key': 'jobStatus', 'type': 'str'},
        'operation_type': {'key': 'operationType', 'type': 'str'},
        'sub_type': {'key': 'subType', 'type': 'str'},
        'end_timestamp': {'key': 'endTimestamp', 'type': 'iso-8601'},
        'should_force_run_requested_nodes': {'key': 'shouldForceRunRequestedNodes', 'type': 'bool'},
        'tasks': {'key': 'tasks', 'type': '[GraphTaskInfo]'},
        'id_list': {'key': 'idList', 'type': '[str]'},
        'options': {'key': 'options', 'type': 'GraphJobOptions'},
        'submitted_timestamp': {'key': 'submittedTimestamp', 'type': 'iso-8601'},
    }

    def __init__(self, *, job_id: str=None, job_type=None, job_submission_kind=None, job_status=None, operation_type=None, sub_type=None, end_timestamp=None, should_force_run_requested_nodes: bool=None, tasks=None, id_list=None, options=None, submitted_timestamp=None, **kwargs) -> None:
        super(GraphJobInfo, self).__init__(**kwargs)
        self.job_id = job_id
        self.job_type = job_type
        self.job_submission_kind = job_submission_kind
        self.job_status = job_status
        self.operation_type = operation_type
        self.sub_type = sub_type
        self.end_timestamp = end_timestamp
        self.should_force_run_requested_nodes = should_force_run_requested_nodes
        self.tasks = tasks
        self.id_list = id_list
        self.options = options
        self.submitted_timestamp = submitted_timestamp
