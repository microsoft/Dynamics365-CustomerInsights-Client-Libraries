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
     'enrichment', 'insights', 'derivedEntity', 'corrupt', 'selfConflation',
     'conflationManualReview', 'selfConflationManualReview',
     'semanticActivity', 'segmentMembership', 'hierarchy', 'dataLineage',
     'transform', 'semanticEntity'
    :type entity_type: str or ~dynamics.customerinsights.api.models.enum
    :param timestamp_field_name: Time stamp field name.
    :type timestamp_field_name: str
    :param semantic_labels: Semantic labels by attribute name.
    :type semantic_labels:
     list[~dynamics.customerinsights.api.models.AttributeSemanticInformation]
    :param entity_enrichment_info:
    :type entity_enrichment_info:
     ~dynamics.customerinsights.api.models.EntityEnrichmentInformation
    :param delta_table_version: Gets theDeltaTable version of this entity.
    :type delta_table_version: long
    :param auto_generate_cdm_definition: Specifies if CDM definition for this
     entity should be auto generated.
    :type auto_generate_cdm_definition: bool
    """

    _attribute_map = {
        'entity_name': {'key': 'entityName', 'type': 'str'},
        'primary_key': {'key': 'primaryKey', 'type': 'str'},
        'entity_type': {'key': 'entityType', 'type': 'str'},
        'timestamp_field_name': {'key': 'timestampFieldName', 'type': 'str'},
        'semantic_labels': {'key': 'semanticLabels', 'type': '[AttributeSemanticInformation]'},
        'entity_enrichment_info': {'key': 'entityEnrichmentInfo', 'type': 'EntityEnrichmentInformation'},
        'delta_table_version': {'key': 'deltaTableVersion', 'type': 'long'},
        'auto_generate_cdm_definition': {'key': 'autoGenerateCDMDefinition', 'type': 'bool'},
    }

    def __init__(self, *, entity_name: str=None, primary_key: str=None, entity_type=None, timestamp_field_name: str=None, semantic_labels=None, entity_enrichment_info=None, delta_table_version: int=None, auto_generate_cdm_definition: bool=None, **kwargs) -> None:
        super(DatasourceEntityInformation, self).__init__(**kwargs)
        self.entity_name = entity_name
        self.primary_key = primary_key
        self.entity_type = entity_type
        self.timestamp_field_name = timestamp_field_name
        self.semantic_labels = semantic_labels
        self.entity_enrichment_info = entity_enrichment_info
        self.delta_table_version = delta_table_version
        self.auto_generate_cdm_definition = auto_generate_cdm_definition
