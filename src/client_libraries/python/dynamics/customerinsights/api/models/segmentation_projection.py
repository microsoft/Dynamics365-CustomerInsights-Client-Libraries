# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class SegmentationProjection(Model):
    """Represent a Segment Projection.

    :param entity_name: Gets the Entity Name of the projection.
    :type entity_name: str
    :param attribute_names: Gets the Attribute Names being projected.
    :type attribute_names: list[str]
    :param path: Gets the relationship path to use for segment projection.
    :type path: list[str]
    :param projection_type: Possible values include: 'pre', 'post'
    :type projection_type: str or ~dynamics.customerinsights.api.models.enum
    """

    _attribute_map = {
        'entity_name': {'key': 'entityName', 'type': 'str'},
        'attribute_names': {'key': 'attributeNames', 'type': '[str]'},
        'path': {'key': 'path', 'type': '[str]'},
        'projection_type': {'key': 'projectionType', 'type': 'str'},
    }

    def __init__(self, **kwargs):
        super(SegmentationProjection, self).__init__(**kwargs)
        self.entity_name = kwargs.get('entity_name', None)
        self.attribute_names = kwargs.get('attribute_names', None)
        self.path = kwargs.get('path', None)
        self.projection_type = kwargs.get('projection_type', None)
