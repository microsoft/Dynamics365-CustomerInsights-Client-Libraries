# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class DataInfo(Model):
    """DataInfo.

    :param kind: Possible values include: 'resource', 'entity', 'custom'
    :type kind: str or ~dynamics.customerinsights.api.models.enum
    :param change_type: Possible values include: 'none', 'new', 'update'
    :type change_type: str or ~dynamics.customerinsights.api.models.enum
    :param name: Gets the name of the data info.
    :type name: str
    """

    _attribute_map = {
        'kind': {'key': 'kind', 'type': 'str'},
        'change_type': {'key': 'changeType', 'type': 'str'},
        'name': {'key': 'name', 'type': 'str'},
    }

    def __init__(self, *, kind=None, change_type=None, name: str=None, **kwargs) -> None:
        super(DataInfo, self).__init__(**kwargs)
        self.kind = kind
        self.change_type = change_type
        self.name = name
