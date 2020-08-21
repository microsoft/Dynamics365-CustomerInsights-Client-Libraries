# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class IC360EntityModel(Model):
    """IC360EntityModel.

    Variables are only populated by the server, and will be ignored when
    sending a request.

    :ivar instance_id: Gets the instance ID associated with the model.
    :vartype instance_id: str
    :ivar dataflow_id: Gets the dataflow ID associated with the model.
    :vartype dataflow_id: str
    :ivar datasource_id: Gets the datasource ID associated with the model.
    :vartype datasource_id: str
    :param dataflow_type: Possible values include: 'dynamics365',
     'salesforce', 'conflationSortAndRefine', 'conflationDeduplication',
     'conflationMatchPairs', 'conflationResolveConflicts', 'enriched', 'kpi',
     'powerQuery', 'dataPreparation', 'intelligence', 'unifiedActivity',
     'segmentation', 'ingestion', 'attachCdm', 'genericPrediction',
     'attachCds', 'unknown', 'powerPlatform', 'datahub', 'insights',
     'derivedEntity'
    :type dataflow_type: str or
     ~microsoft.dynamics.customerinsights.api.models.enum
    :ivar entities: Gets entities in the model.
    :vartype entities:
     list[~microsoft.dynamics.customerinsights.api.models.IEntityMetadata]
    """

    _validation = {
        'instance_id': {'readonly': True},
        'dataflow_id': {'readonly': True},
        'datasource_id': {'readonly': True},
        'entities': {'readonly': True},
    }

    _attribute_map = {
        'instance_id': {'key': 'instanceId', 'type': 'str'},
        'dataflow_id': {'key': 'dataflowId', 'type': 'str'},
        'datasource_id': {'key': 'datasourceId', 'type': 'str'},
        'dataflow_type': {'key': 'dataflowType', 'type': 'str'},
        'entities': {'key': 'entities', 'type': '[IEntityMetadata]'},
    }

    def __init__(self, *, dataflow_type=None, **kwargs) -> None:
        super(IC360EntityModel, self).__init__(**kwargs)
        self.instance_id = None
        self.dataflow_id = None
        self.datasource_id = None
        self.dataflow_type = dataflow_type
        self.entities = None
