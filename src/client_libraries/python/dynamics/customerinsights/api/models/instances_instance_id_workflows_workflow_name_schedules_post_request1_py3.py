# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from .workflow_refresh_schedule_py3 import WorkflowRefreshSchedule


class InstancesInstanceIdWorkflowsWorkflowNameSchedulesPostRequest1(WorkflowRefreshSchedule):
    """Represents a DAG refresh schedule.

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
    :param identifiers: Gets the identifiers of the schedule
    :type identifiers: list[str]
    :param job_type: Possible values include: 'full', 'incremental'
    :type job_type: str or ~dynamics.customerinsights.api.models.enum
    :param is_active: Gets a value indicating whether the schedule is active.
    :type is_active: bool
    :param timezone_id: Gets the ID of the timezone
    :type timezone_id: str
    :param cron_schedules: Gets the schedule in CRON format
    :type cron_schedules: list[str]
    :param schedule_id: Gets the ID of the schedule
    :type schedule_id: str
    :param instance_id: Customer Insights instance id associated with this
     object.
    :type instance_id: str
    """

    _attribute_map = {
        'operation_type': {'key': 'operationType', 'type': 'str'},
        'sub_type': {'key': 'subType', 'type': 'str'},
        'identifiers': {'key': 'identifiers', 'type': '[str]'},
        'job_type': {'key': 'jobType', 'type': 'str'},
        'is_active': {'key': 'isActive', 'type': 'bool'},
        'timezone_id': {'key': 'timezoneId', 'type': 'str'},
        'cron_schedules': {'key': 'cronSchedules', 'type': '[str]'},
        'schedule_id': {'key': 'scheduleId', 'type': 'str'},
        'instance_id': {'key': 'instanceId', 'type': 'str'},
    }

    def __init__(self, *, operation_type=None, sub_type=None, identifiers=None, job_type=None, is_active: bool=None, timezone_id: str=None, cron_schedules=None, schedule_id: str=None, instance_id: str=None, **kwargs) -> None:
        super(InstancesInstanceIdWorkflowsWorkflowNameSchedulesPostRequest1, self).__init__(operation_type=operation_type, sub_type=sub_type, identifiers=identifiers, job_type=job_type, is_active=is_active, timezone_id=timezone_id, cron_schedules=cron_schedules, schedule_id=schedule_id, instance_id=instance_id, **kwargs)
