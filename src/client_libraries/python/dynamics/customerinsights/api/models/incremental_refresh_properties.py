# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class IncrementalRefreshProperties(Model):
    """Represents a Incremental Refresh Property.

    :param entity_name: Name of the entity.
    :type entity_name: str
    :param detect_changes_attribute_name: Column to detect changes.
    :type detect_changes_attribute_name: str
    :param filter_by_attribute_name: Column to get incremental data.
    :type filter_by_attribute_name: str
    :param incremental_granularity: Granularity of the incremental refresh.
    :type incremental_granularity: str
    :param incremental_periods: Incremental period.
    :type incremental_periods: int
    :param refresh_complete_periods: Indicating whether to refresh completed
     periods or not.
    :type refresh_complete_periods: bool
    :param incremental_periods_offset: Off set period.
    :type incremental_periods_offset: int
    :param primary_key_attribute_name: Primary key of the entity.
    :type primary_key_attribute_name: str
    :param rolling_window_granularity: Rolling window granularity.
    :type rolling_window_granularity: str
    :param rolling_window_periods: Rolling window period.
    :type rolling_window_periods: int
    """

    _attribute_map = {
        'entity_name': {'key': 'entityName', 'type': 'str'},
        'detect_changes_attribute_name': {'key': 'detectChangesAttributeName', 'type': 'str'},
        'filter_by_attribute_name': {'key': 'filterByAttributeName', 'type': 'str'},
        'incremental_granularity': {'key': 'incrementalGranularity', 'type': 'str'},
        'incremental_periods': {'key': 'incrementalPeriods', 'type': 'int'},
        'refresh_complete_periods': {'key': 'refreshCompletePeriods', 'type': 'bool'},
        'incremental_periods_offset': {'key': 'incrementalPeriodsOffset', 'type': 'int'},
        'primary_key_attribute_name': {'key': 'primaryKeyAttributeName', 'type': 'str'},
        'rolling_window_granularity': {'key': 'rollingWindowGranularity', 'type': 'str'},
        'rolling_window_periods': {'key': 'rollingWindowPeriods', 'type': 'int'},
    }

    def __init__(self, **kwargs):
        super(IncrementalRefreshProperties, self).__init__(**kwargs)
        self.entity_name = kwargs.get('entity_name', None)
        self.detect_changes_attribute_name = kwargs.get('detect_changes_attribute_name', None)
        self.filter_by_attribute_name = kwargs.get('filter_by_attribute_name', None)
        self.incremental_granularity = kwargs.get('incremental_granularity', None)
        self.incremental_periods = kwargs.get('incremental_periods', None)
        self.refresh_complete_periods = kwargs.get('refresh_complete_periods', None)
        self.incremental_periods_offset = kwargs.get('incremental_periods_offset', None)
        self.primary_key_attribute_name = kwargs.get('primary_key_attribute_name', None)
        self.rolling_window_granularity = kwargs.get('rolling_window_granularity', None)
        self.rolling_window_periods = kwargs.get('rolling_window_periods', None)
