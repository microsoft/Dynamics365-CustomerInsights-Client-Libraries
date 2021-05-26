# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class EntityDataProfile(Model):
    """Represents Entity Data Profile information.

    :param qualified_entity_name: Qualified Entity Name.
    :type qualified_entity_name: str
    :param row_count: Row count.
    :type row_count: long
    :param quarantine_row_count: Quarentine row count
    :type quarantine_row_count: long
    :param profiling_date: Date for Profiling.
    :type profiling_date: datetime
    :param profiled_attributes: Profiling attributes.
    :type profiled_attributes: str
    :param corrupt_attributes: Respresents currupt attributes.
    :type corrupt_attributes: str
    """

    _attribute_map = {
        'qualified_entity_name': {'key': 'qualifiedEntityName', 'type': 'str'},
        'row_count': {'key': 'rowCount', 'type': 'long'},
        'quarantine_row_count': {'key': 'quarantineRowCount', 'type': 'long'},
        'profiling_date': {'key': 'profilingDate', 'type': 'iso-8601'},
        'profiled_attributes': {'key': 'profiledAttributes', 'type': 'str'},
        'corrupt_attributes': {'key': 'corruptAttributes', 'type': 'str'},
    }

    def __init__(self, **kwargs):
        super(EntityDataProfile, self).__init__(**kwargs)
        self.qualified_entity_name = kwargs.get('qualified_entity_name', None)
        self.row_count = kwargs.get('row_count', None)
        self.quarantine_row_count = kwargs.get('quarantine_row_count', None)
        self.profiling_date = kwargs.get('profiling_date', None)
        self.profiled_attributes = kwargs.get('profiled_attributes', None)
        self.corrupt_attributes = kwargs.get('corrupt_attributes', None)
