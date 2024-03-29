# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class AttributeDataProfile(Model):
    """Attribute data profile.

    :param value_counts: Represents Distribution of the top 100 values.
    :type value_counts: list[~dynamics.customerinsights.api.models.ValueCount]
    :param histogram: Represents histogram information Ordered from smallest
     to largest bin.
    :type histogram: list[~dynamics.customerinsights.api.models.HistogramBin]
    :param qualified_entity_name: Qualified entity name.
    :type qualified_entity_name: str
    :param attribute_name: Attribute name.
    :type attribute_name: str
    :param min: Minimum value.
    :type min: object
    :param max: Maximum value.
    :type max: object
    :param count: Total row count.
    :type count: long
    :param missing_count: Row count of missing values.
    :type missing_count: long
    :param error_count: Number of error values.
    :type error_count: long
    :param quantiles:
    :type quantiles: ~dynamics.customerinsights.api.models.Quantiles
    :param moments:
    :type moments: ~dynamics.customerinsights.api.models.Moments
    :param unique_value_count: Number of unique values.
    :type unique_value_count: long
    :param profiling_date: Profiling date
    :type profiling_date: datetime
    :param is_suggested_primary_key: Represents a value indicating whether
     this attribute can be used as a primary key of the entity
    :type is_suggested_primary_key: bool
    :param check_if_exact_stats: Represents a value indicating whether we
     calculate exact or approx stats
    :type check_if_exact_stats: object
    """

    _attribute_map = {
        'value_counts': {'key': 'valueCounts', 'type': '[ValueCount]'},
        'histogram': {'key': 'histogram', 'type': '[HistogramBin]'},
        'qualified_entity_name': {'key': 'qualifiedEntityName', 'type': 'str'},
        'attribute_name': {'key': 'attributeName', 'type': 'str'},
        'min': {'key': 'min', 'type': 'object'},
        'max': {'key': 'max', 'type': 'object'},
        'count': {'key': 'count', 'type': 'long'},
        'missing_count': {'key': 'missingCount', 'type': 'long'},
        'error_count': {'key': 'errorCount', 'type': 'long'},
        'quantiles': {'key': 'quantiles', 'type': 'Quantiles'},
        'moments': {'key': 'moments', 'type': 'Moments'},
        'unique_value_count': {'key': 'uniqueValueCount', 'type': 'long'},
        'profiling_date': {'key': 'profilingDate', 'type': 'iso-8601'},
        'is_suggested_primary_key': {'key': 'isSuggestedPrimaryKey', 'type': 'bool'},
        'check_if_exact_stats': {'key': 'checkIfExactStats', 'type': 'object'},
    }

    def __init__(self, *, value_counts=None, histogram=None, qualified_entity_name: str=None, attribute_name: str=None, min=None, max=None, count: int=None, missing_count: int=None, error_count: int=None, quantiles=None, moments=None, unique_value_count: int=None, profiling_date=None, is_suggested_primary_key: bool=None, check_if_exact_stats=None, **kwargs) -> None:
        super(AttributeDataProfile, self).__init__(**kwargs)
        self.value_counts = value_counts
        self.histogram = histogram
        self.qualified_entity_name = qualified_entity_name
        self.attribute_name = attribute_name
        self.min = min
        self.max = max
        self.count = count
        self.missing_count = missing_count
        self.error_count = error_count
        self.quantiles = quantiles
        self.moments = moments
        self.unique_value_count = unique_value_count
        self.profiling_date = profiling_date
        self.is_suggested_primary_key = is_suggested_primary_key
        self.check_if_exact_stats = check_if_exact_stats
