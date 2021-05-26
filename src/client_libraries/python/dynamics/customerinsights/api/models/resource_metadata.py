# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class ResourceMetadata(Model):
    """Represents a Resource metadata.

    :param kind: Possible values include: 'bearerAuthenticationConnection',
     'sshKeyAuthenticationConnection', 'apiKeyAuthenticationConnection',
     'basicAuthenticationConnection', 'adlsGen2', 'd365Sales', 'd365Marketing',
     'attachCds', 'ftp', 'facebookAds', 'http', 'mailchimp', 'googleAds',
     'marketo'
    :type kind: str or ~dynamics.customerinsights.api.models.enum
    :param resource_id: Gets the Id of the resource.
    :type resource_id: str
    :param operation_id: Gets the Id of the operation being performed on the
     resource.
    :type operation_id: str
    :param resource_type: Possible values include: 'adlsGen2', 'd365Sales',
     'cds', 'ftp', 'bearerAuthenticationConnection',
     'sshKeyAuthenticationConnection', 'apiKeyAuthenticationConnection',
     'basicAuthenticationConnection', 'facebookAds', 'http', 'mailchimp',
     'googleAds', 'marketo'
    :type resource_type: str or ~dynamics.customerinsights.api.models.enum
    :param name: Gets the Name of the resource.
    :type name: str
    :param description: Gets the Description of the resource.
    :type description: str
    :param version: Version number of this object.
    :type version: long
    :param updated_by: UPN of the user who last updated this record.
    :type updated_by: str
    :param updated_utc: Time this object was last updated.
    :type updated_utc: datetime
    :param created_by: Email address of the user who created this record.
    :type created_by: str
    :param created_utc: Time this object was initially created.
    :type created_utc: datetime
    :param instance_id: Customer Insights instance id associated with this
     object.
    :type instance_id: str
    """

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
        self.resource_id = kwargs.get('resource_id', None)
        self.operation_id = kwargs.get('operation_id', None)
        self.resource_type = kwargs.get('resource_type', None)
        self.name = kwargs.get('name', None)
        self.description = kwargs.get('description', None)
        self.version = kwargs.get('version', None)
        self.updated_by = kwargs.get('updated_by', None)
        self.updated_utc = kwargs.get('updated_utc', None)
        self.created_by = kwargs.get('created_by', None)
        self.created_utc = kwargs.get('created_utc', None)
        self.instance_id = kwargs.get('instance_id', None)
