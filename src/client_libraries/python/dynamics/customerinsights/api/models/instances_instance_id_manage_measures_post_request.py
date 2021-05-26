# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from .measure_metadata import MeasureMetadata


class InstancesInstanceIdManageMeasuresPostRequest(MeasureMetadata):
    """Represents metadata for a measure (or KPI).

    :param display_name:
    :type display_name: str
    :param name: Unique name of the measure
    :type name: str
    :param description: Description of the measure.
    :type description: str
    :param definition:
    :type definition: ~dynamics.customerinsights.api.models.MeasureDefinition
    :param latest_evaluation:
    :type latest_evaluation: ~dynamics.customerinsights.api.models.Evaluation
    :param output:
    :type output: ~dynamics.customerinsights.api.models.ScalarOutput
    :param evaluation_stats:
    :type evaluation_stats:
     ~dynamics.customerinsights.api.models.EvaluationStats
    :param error_description:
    :type error_description: ~dynamics.customerinsights.api.models.StringInfo
    :param sql_validation_stats:
    :type sql_validation_stats:
     ~dynamics.customerinsights.api.models.SqlValidationStats
    :param evaluation_history: Evaluation history for the measure. (not
     persisted in store)
    :type evaluation_history:
     list[~dynamics.customerinsights.api.models.Evaluation]
    :param output_history: Output history for the measure. (not persisted in
     store)
    :type output_history:
     list[~dynamics.customerinsights.api.models.ScalarOutput]
    :param version: Version number of this object.
    :type version: long
    :param updated_by: UPN of the user who last updated this record.
    :type updated_by: str
    :param updated_utc: Time this object was last updated.
    :type updated_utc: datetime
    :param created_by: Email address of the user who created this record.
    :type created_by: str
    :param created_utc: Time this object was initially created.
    :type created_utc: datetime
    :param instance_id: Customer Insights instance id associated with this
     object.
    :type instance_id: str
    """

    _attribute_map = {
        'display_name': {'key': 'displayName', 'type': 'str'},
        'name': {'key': 'name', 'type': 'str'},
        'description': {'key': 'description', 'type': 'str'},
        'definition': {'key': 'definition', 'type': 'MeasureDefinition'},
        'latest_evaluation': {'key': 'latestEvaluation', 'type': 'Evaluation'},
        'output': {'key': 'output', 'type': 'ScalarOutput'},
        'evaluation_stats': {'key': 'evaluationStats', 'type': 'EvaluationStats'},
        'error_description': {'key': 'errorDescription', 'type': 'StringInfo'},
        'sql_validation_stats': {'key': 'sqlValidationStats', 'type': 'SqlValidationStats'},
        'evaluation_history': {'key': 'evaluationHistory', 'type': '[Evaluation]'},
        'output_history': {'key': 'outputHistory', 'type': '[ScalarOutput]'},
        'version': {'key': 'version', 'type': 'long'},
        'updated_by': {'key': 'updatedBy', 'type': 'str'},
        'updated_utc': {'key': 'updatedUtc', 'type': 'iso-8601'},
        'created_by': {'key': 'createdBy', 'type': 'str'},
        'created_utc': {'key': 'createdUtc', 'type': 'iso-8601'},
        'instance_id': {'key': 'instanceId', 'type': 'str'},
    }

    def __init__(self, **kwargs):
        super(InstancesInstanceIdManageMeasuresPostRequest, self).__init__(**kwargs)
