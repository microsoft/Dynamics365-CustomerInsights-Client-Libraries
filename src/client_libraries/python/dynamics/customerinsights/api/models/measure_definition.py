# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class MeasureDefinition(Model):
    """Represents a measure definition.

    :param kind: Possible values include: 'entity', 'attribute'
    :type kind: str or ~dynamics.customerinsights.api.models.enum
    :param is_scalar: Gets a value indicating whether the current measure is a
     scalar measure e doesn't have any dimensions
    :type is_scalar: bool
    :param linked_entities: Gets list of linked entities associated with the
     measure.
    :type linked_entities:
     list[~dynamics.customerinsights.api.models.MeasureLinkedEntity]
    :param variables: Gets list of variables (computed columns) for the
     measure.
    :type variables:
     list[~dynamics.customerinsights.api.models.MeasureVariable]
    :param filters:
    :type filters: ~dynamics.customerinsights.api.models.MeasureExpression
    :param filtering_criteria:
    :type filtering_criteria:
     ~dynamics.customerinsights.api.models.SegmentMembershipCriteria
    :param dimensions: Gets list of dimensions with the measure.
    :type dimensions:
     list[~dynamics.customerinsights.api.models.MeasureDimension]
    :param aggregates: Gets list of aggregates of the measure.
    :type aggregates:
     list[~dynamics.customerinsights.api.models.MeasureAggregate]
    :param is_profile: Gets a value indicating whether the current measure is
     a profile measure
    :type is_profile: bool
    :param measure_query_sql: Gets the user specified custom SQL query.
    :type measure_query_sql: str
    :param type: Possible values include: 'structured', 'manual'
    :type type: str or ~dynamics.customerinsights.api.models.enum
    :param is_manual_query_scalar: Gets the indicating whether the Business
     Measure is Scalar or not.
    :type is_manual_query_scalar: bool
    :param dependencies: Gets the list of measures that this measure depends
     on.
    :type dependencies:
     list[~dynamics.customerinsights.api.models.EntityDependency]
    """

    _attribute_map = {
        'kind': {'key': 'kind', 'type': 'str'},
        'is_scalar': {'key': 'isScalar', 'type': 'bool'},
        'linked_entities': {'key': 'linkedEntities', 'type': '[MeasureLinkedEntity]'},
        'variables': {'key': 'variables', 'type': '[MeasureVariable]'},
        'filters': {'key': 'filters', 'type': 'MeasureExpression'},
        'filtering_criteria': {'key': 'filteringCriteria', 'type': 'SegmentMembershipCriteria'},
        'dimensions': {'key': 'dimensions', 'type': '[MeasureDimension]'},
        'aggregates': {'key': 'aggregates', 'type': '[MeasureAggregate]'},
        'is_profile': {'key': 'isProfile', 'type': 'bool'},
        'measure_query_sql': {'key': 'measureQuerySql', 'type': 'str'},
        'type': {'key': 'type', 'type': 'str'},
        'is_manual_query_scalar': {'key': 'isManualQueryScalar', 'type': 'bool'},
        'dependencies': {'key': 'dependencies', 'type': '[EntityDependency]'},
    }

    def __init__(self, **kwargs):
        super(MeasureDefinition, self).__init__(**kwargs)
        self.kind = kwargs.get('kind', None)
        self.is_scalar = kwargs.get('is_scalar', None)
        self.linked_entities = kwargs.get('linked_entities', None)
        self.variables = kwargs.get('variables', None)
        self.filters = kwargs.get('filters', None)
        self.filtering_criteria = kwargs.get('filtering_criteria', None)
        self.dimensions = kwargs.get('dimensions', None)
        self.aggregates = kwargs.get('aggregates', None)
        self.is_profile = kwargs.get('is_profile', None)
        self.measure_query_sql = kwargs.get('measure_query_sql', None)
        self.type = kwargs.get('type', None)
        self.is_manual_query_scalar = kwargs.get('is_manual_query_scalar', None)
        self.dependencies = kwargs.get('dependencies', None)
