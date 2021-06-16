# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class DatalakeFolderDetail(Model):
    """The information for datalake folder in CDS.

    :param name: Gets the datalake folder Friendly Name
    :type name: str
    :param unique_name: Gets the Cds datalake folder unique Name
    :type unique_name: str
    """

    _attribute_map = {
        'name': {'key': 'name', 'type': 'str'},
        'unique_name': {'key': 'uniqueName', 'type': 'str'},
    }

    def __init__(self, *, name: str=None, unique_name: str=None, **kwargs) -> None:
        super(DatalakeFolderDetail, self).__init__(**kwargs)
        self.name = name
        self.unique_name = unique_name