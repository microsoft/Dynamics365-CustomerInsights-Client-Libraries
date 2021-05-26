# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from .on_demand_job_request_py3 import OnDemandJobRequest


class InstancesInstanceIdWorkflowsWorkflowNameJobsPostRequest(OnDemandJobRequest):
    """Job Creation Request.

    :param graph_name:
    :type graph_name: str
    :param operation_type: Possible values include: 'none', 'ingestion',
     'derivedEntity', 'dataPreparation', 'map', 'match', 'merge',
     'profileStore', 'search', 'activity', 'attributeMeasures',
     'entityMeasures', 'measures', 'segmentation', 'enrichment',
     'intelligence', 'aiBuilder', 'insights', 'export', 'modelManagement',
     'relationship', 'roleAssignment', 'analysis', 'all'
    :type operation_type: str or ~dynamics.customerinsights.api.models.enum
    :param submission_kind: Possible values include: 'onDemand', 'scheduled'
    :type submission_kind: str or ~dynamics.customerinsights.api.models.enum
    :param job_type: Possible values include: 'full', 'incremental'
    :type job_type: str or ~dynamics.customerinsights.api.models.enum
    :param identifiers:
    :type identifiers: list[str]
    :param force_run_requested:
    :type force_run_requested: bool
    :param input_refresh_mode: Possible values include:
     'FailedOrModifiedRecursive', 'FailedRecursive', 'FailedOrModified',
     'Failed', 'None'
    :type input_refresh_mode: str or
     ~dynamics.customerinsights.api.models.enum
    :param options:
    :type options: ~dynamics.customerinsights.api.models.GraphJobOptions
    """

    _attribute_map = {
        'graph_name': {'key': 'graphName', 'type': 'str'},
        'operation_type': {'key': 'operationType', 'type': 'str'},
        'submission_kind': {'key': 'submissionKind', 'type': 'str'},
        'job_type': {'key': 'jobType', 'type': 'str'},
        'identifiers': {'key': 'identifiers', 'type': '[str]'},
        'force_run_requested': {'key': 'forceRunRequested', 'type': 'bool'},
        'input_refresh_mode': {'key': 'inputRefreshMode', 'type': 'str'},
        'options': {'key': 'options', 'type': 'GraphJobOptions'},
    }

    def __init__(self, *, graph_name: str=None, operation_type=None, submission_kind=None, job_type=None, identifiers=None, force_run_requested: bool=None, input_refresh_mode=None, options=None, **kwargs) -> None:
        super(InstancesInstanceIdWorkflowsWorkflowNameJobsPostRequest, self).__init__(graph_name=graph_name, operation_type=operation_type, submission_kind=submission_kind, job_type=job_type, identifiers=identifiers, force_run_requested=force_run_requested, input_refresh_mode=input_refresh_mode, options=options, **kwargs)
