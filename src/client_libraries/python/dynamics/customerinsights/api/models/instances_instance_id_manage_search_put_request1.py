# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from .instance_search_configuration import InstanceSearchConfiguration


class InstancesInstanceIdManageSearchPutRequest1(InstanceSearchConfiguration):
    """Represents search configuration of an instance.

    :param entity_config: Gets search configurations for entities
    :type entity_config:
     list[~dynamics.customerinsights.api.models.EntitySearchConfiguration]
    :param is_system_generated: Gets a value indicating whether the
     configuration was system generated
    :type is_system_generated: bool
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
        'entity_config': {'key': 'entityConfig', 'type': '[EntitySearchConfiguration]'},
        'is_system_generated': {'key': 'isSystemGenerated', 'type': 'bool'},
        'version': {'key': 'version', 'type': 'long'},
        'updated_by': {'key': 'updatedBy', 'type': 'str'},
        'updated_utc': {'key': 'updatedUtc', 'type': 'iso-8601'},
        'created_by': {'key': 'createdBy', 'type': 'str'},
        'created_utc': {'key': 'createdUtc', 'type': 'iso-8601'},
        'instance_id': {'key': 'instanceId', 'type': 'str'},
    }

    def __init__(self, **kwargs):
        super(InstancesInstanceIdManageSearchPutRequest1, self).__init__(**kwargs)
