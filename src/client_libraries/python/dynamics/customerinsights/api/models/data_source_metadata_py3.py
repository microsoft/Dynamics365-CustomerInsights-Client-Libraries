# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class DataSourceMetadata(Model):
    """Represents metadata for a Customer Insights data source.

    Variables are only populated by the server, and will be ignored when
    sending a request.

    :param kind: Possible values include: 'salesforce', 'dynamics365',
     'powerQuery', 'attachCdm', 'attachCds', 'powerPlatform', 'datahub'
    :type kind: str or ~dynamics.customerinsights.api.models.enum
    :ivar is_active:
    :vartype is_active: bool
    :ivar entity_names:
    :vartype entity_names: list[str]
    :ivar data_source_id: Gets the unique identity for this object.
    :vartype data_source_id: str
    :ivar name: Gets the unique name of the dataSource.
    :vartype name: str
    :ivar friendly_name: Gets the friendlyName of the dataSource.
    :vartype friendly_name: str
    :ivar entity_information: Gets the entity information, by entity name.
    :vartype entity_information:
     list[~dynamics.customerinsights.api.models.DatasourceEntityInformation]
    :param provisioning_state: Possible values include: 'new', 'creating',
     'active', 'createFailed', 'updateFailed', 'deleting',
     'refreshCredentials', 'resetInstanceInProgress'
    :type provisioning_state: str or
     ~dynamics.customerinsights.api.models.enum
    :ivar last_refresh: Gets the time datasource was last refreshed.
    :vartype last_refresh: datetime
    :param refresh_state: Possible values include: 'notUpdated', 'updated',
     'updating', 'updateFailed', 'updateCancelled'
    :type refresh_state: str or ~dynamics.customerinsights.api.models.enum
    :ivar incremental_refresh_properties: Gets the Incremental refresh
     properties for entities.
    :vartype incremental_refresh_properties:
     list[~dynamics.customerinsights.api.models.IncrementalRefreshProperties]
    :ivar model_json_path: Gets the model path for CDM data source.
    :vartype model_json_path: str
    :ivar version: Gets the version number of this object.
    :vartype version: long
    :ivar updated_by: Gets the UPN of the user who last updated this record.
    :vartype updated_by: str
    :ivar updated_utc: Gets the time the object was last updated.
    :vartype updated_utc: datetime
    :ivar created_by: Gets the email address of the user who created this
     record.
    :vartype created_by: str
    :ivar created_utc: Gets the time the object was initially created.
    :vartype created_utc: datetime
    :ivar instance_id: Gets the Customer Insights instance id associated with
     this object.
    :vartype instance_id: str
    """

    _validation = {
        'is_active': {'readonly': True},
        'entity_names': {'readonly': True},
        'data_source_id': {'readonly': True},
        'name': {'readonly': True},
        'friendly_name': {'readonly': True},
        'entity_information': {'readonly': True},
        'last_refresh': {'readonly': True},
        'incremental_refresh_properties': {'readonly': True},
        'model_json_path': {'readonly': True},
        'version': {'readonly': True},
        'updated_by': {'readonly': True},
        'updated_utc': {'readonly': True},
        'created_by': {'readonly': True},
        'created_utc': {'readonly': True},
        'instance_id': {'readonly': True},
    }

    _attribute_map = {
        'kind': {'key': 'kind', 'type': 'str'},
        'is_active': {'key': 'isActive', 'type': 'bool'},
        'entity_names': {'key': 'entityNames', 'type': '[str]'},
        'data_source_id': {'key': 'dataSourceId', 'type': 'str'},
        'name': {'key': 'name', 'type': 'str'},
        'friendly_name': {'key': 'friendlyName', 'type': 'str'},
        'entity_information': {'key': 'entityInformation', 'type': '[DatasourceEntityInformation]'},
        'provisioning_state': {'key': 'provisioningState', 'type': 'str'},
        'last_refresh': {'key': 'lastRefresh', 'type': 'iso-8601'},
        'refresh_state': {'key': 'refreshState', 'type': 'str'},
        'incremental_refresh_properties': {'key': 'incrementalRefreshProperties', 'type': '[IncrementalRefreshProperties]'},
        'model_json_path': {'key': 'modelJsonPath', 'type': 'str'},
        'version': {'key': 'version', 'type': 'long'},
        'updated_by': {'key': 'updatedBy', 'type': 'str'},
        'updated_utc': {'key': 'updatedUtc', 'type': 'iso-8601'},
        'created_by': {'key': 'createdBy', 'type': 'str'},
        'created_utc': {'key': 'createdUtc', 'type': 'iso-8601'},
        'instance_id': {'key': 'instanceId', 'type': 'str'},
    }

    def __init__(self, *, kind=None, provisioning_state=None, refresh_state=None, **kwargs) -> None:
        super(DataSourceMetadata, self).__init__(**kwargs)
        self.kind = kind
        self.is_active = None
        self.entity_names = None
        self.data_source_id = None
        self.name = None
        self.friendly_name = None
        self.entity_information = None
        self.provisioning_state = provisioning_state
        self.last_refresh = None
        self.refresh_state = refresh_state
        self.incremental_refresh_properties = None
        self.model_json_path = None
        self.version = None
        self.updated_by = None
        self.updated_utc = None
        self.created_by = None
        self.created_utc = None
        self.instance_id = None
