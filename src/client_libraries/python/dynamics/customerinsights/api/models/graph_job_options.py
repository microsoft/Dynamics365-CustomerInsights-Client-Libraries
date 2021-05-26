# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class GraphJobOptions(Model):
    """GraphJobOptions.

    :param additional_properties: Unmatched properties from the message are
     deserialized this collection
    :type additional_properties: dict[str, object]
    :param run_downstream_after_merge:
    :type run_downstream_after_merge: bool
    """

    _attribute_map = {
        'additional_properties': {'key': '', 'type': '{object}'},
        'run_downstream_after_merge': {'key': 'runDownstreamAfterMerge', 'type': 'bool'},
    }

    def __init__(self, **kwargs):
        super(GraphJobOptions, self).__init__(**kwargs)
        self.additional_properties = kwargs.get('additional_properties', None)
        self.run_downstream_after_merge = kwargs.get('run_downstream_after_merge', None)
