# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class ResourceMetadata(Model):
    """Represents a Resource metadata.

    Variables are only populated by the server, and will be ignored when
    sending a request.

    :param kind: Possible values include: 'bearerAuthenticationConnection',
     'sshKeyAuthenticationConnection', 'basicAuthenticationConnection',
     'adlsGen2', 'd365Sales', 'd365Marketing', 'attachCds', 'ftp',
     'facebookAds', 'http', 'mailchimp', 'googleAds'
    :type kind: str or ~microsoft.dynamics.customerinsights.api.models.enum
    :ivar resource_id: Gets the Id of the resource.
    :vartype resource_id: str
    :ivar operation_id: Gets the Id of the operation being performed on the
     resource.
    :vartype operation_id: str
    :param resource_type: Possible values include: 'adlsGen2', 'd365Sales',
     'cds', 'ftp', 'bearerAuthenticationConnection',
     'sshKeyAuthenticationConnection', 'basicAuthenticationConnection',
     'facebookAds', 'http', 'mailchimp', 'googleAds'
    :type resource_type: str or
     ~microsoft.dynamics.customerinsights.api.models.enum
    :ivar name: Gets the Name of the resource.
    :vartype name: str
    :ivar description: Gets the Description of the resource.
    :vartype description: str
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
        'resource_id': {'readonly': True},
        'operation_id': {'readonly': True},
        'name': {'readonly': True},
        'description': {'readonly': True},
        'version': {'readonly': True},
        'updated_by': {'readonly': True},
        'updated_utc': {'readonly': True},
        'created_by': {'readonly': True},
        'created_utc': {'readonly': True},
        'instance_id': {'readonly': True},
    }

    _attribute_map = {
        'kind': {'key': 'kind', 'type': 'str'},
        'resource_id': {'key': 'resourceId', 'type': 'str'},
        'operation_id': {'key': 'operationId', 'type': 'str'},
        'resource_type': {'key': 'resourceType', 'type': 'str'},
        'name': {'key': 'name', 'type': 'str'},
        'description': {'key': 'description', 'type': 'str'},
        'version': {'key': 'version', 'type': 'long'},
        'updated_by': {'key': 'updatedBy', 'type': 'str'},
        'updated_utc': {'key': 'updatedUtc', 'type': 'iso-8601'},
        'created_by': {'key': 'createdBy', 'type': 'str'},
        'created_utc': {'key': 'createdUtc', 'type': 'iso-8601'},
        'instance_id': {'key': 'instanceId', 'type': 'str'},
    }

    def __init__(self, **kwargs):
        super(ResourceMetadata, self).__init__(**kwargs)
        self.kind = kwargs.get('kind', None)
        self.resource_id = None
        self.operation_id = None
        self.resource_type = kwargs.get('resource_type', None)
        self.name = None
        self.description = None
        self.version = None
        self.updated_by = None
        self.updated_utc = None
        self.created_by = None
        self.created_utc = None
        self.instance_id = None
