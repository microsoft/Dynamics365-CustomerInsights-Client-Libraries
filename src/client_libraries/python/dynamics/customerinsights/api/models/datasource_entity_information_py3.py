# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class DatasourceEntityInformation(Model):
    """Represents the entity info used in API requests (entity level).

    :param entity_name: Name of the entity.
    :type entity_name: str
    :param primary_key: Primary key name of the entity. We require the entity
     to have a single column primary key column
    :type primary_key: str
    :param entity_type: Possible values include: 'unspecified', 'profile',
     'conflationMap', 'activity', 'aggregateKpi', 'profileKpi',
     'unifiedActivity', 'segment', 'intelligence', 'genericPrediction',
     'enrichment', 'insights', 'derivedEntity', 'quarantine'
    :type entity_type: str or ~dynamics.customerinsights.api.models.enum
    :param timestamp_field_name: Time stamp field name.
    :type timestamp_field_name: str
    :param semantic_labels: Semantic labels by attribute name.
    :type semantic_labels:
     list[~dynamics.customerinsights.api.models.AttributeSemanticInformation]
    """

    _attribute_map = {
        'entity_name': {'key': 'entityName', 'type': 'str'},
        'primary_key': {'key': 'primaryKey', 'type': 'str'},
        'entity_type': {'key': 'entityType', 'type': 'str'},
        'timestamp_field_name': {'key': 'timestampFieldName', 'type': 'str'},
        'semantic_labels': {'key': 'semanticLabels', 'type': '[AttributeSemanticInformation]'},
    }

    def __init__(self, *, entity_name: str=None, primary_key: str=None, entity_type=None, timestamp_field_name: str=None, semantic_labels=None, **kwargs) -> None:
        super(DatasourceEntityInformation, self).__init__(**kwargs)
        self.entity_name = entity_name
        self.primary_key = primary_key
        self.entity_type = entity_type
        self.timestamp_field_name = timestamp_field_name
        self.semantic_labels = semantic_labels
