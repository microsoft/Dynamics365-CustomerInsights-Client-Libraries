# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class PartitionMetadata(Model):
    """Represents a DCI entity data partition.

    Variables are only populated by the server, and will be ignored when
    sending a request.

    :param name: Gets the name of the data partition
    :type name: str
    :param location: Gets the uri location of the data
    :type location: str
    :param file_format_settings:
    :type file_format_settings: object
    :ivar has_header:
    :vartype has_header: bool
    """

    _validation = {
        'has_header': {'readonly': True},
    }

    _attribute_map = {
        'name': {'key': 'name', 'type': 'str'},
        'location': {'key': 'location', 'type': 'str'},
        'file_format_settings': {'key': 'fileFormatSettings', 'type': 'object'},
        'has_header': {'key': 'hasHeader', 'type': 'bool'},
    }

    def __init__(self, **kwargs):
        super(PartitionMetadata, self).__init__(**kwargs)
        self.name = kwargs.get('name', None)
        self.location = kwargs.get('location', None)
        self.file_format_settings = kwargs.get('file_format_settings', None)
        self.has_header = None
