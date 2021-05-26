# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from .role_assignment_py3 import RoleAssignment


class InstancesInstanceIdRbacPrincipalsPrincipalIdAssignmentPutRequest(RoleAssignment):
    """Represents a role assignment Metadata.

    :param principal_id: Gets the Id of the principal.
    :type principal_id: str
    :param principal_type: Possible values include: 'user', 'group', 'app'
    :type principal_type: str or ~dynamics.customerinsights.api.models.enum
    :param roles: Gets the roles the principal belongs to.
    :type roles: list[str]
    :param instance_id: Customer Insights instance id associated with this
     object.
    :type instance_id: str
    """

    _attribute_map = {
        'principal_id': {'key': 'principalId', 'type': 'str'},
        'principal_type': {'key': 'principalType', 'type': 'str'},
        'roles': {'key': 'roles', 'type': '[str]'},
        'instance_id': {'key': 'instanceId', 'type': 'str'},
    }

    def __init__(self, *, principal_id: str=None, principal_type=None, roles=None, instance_id: str=None, **kwargs) -> None:
        super(InstancesInstanceIdRbacPrincipalsPrincipalIdAssignmentPutRequest, self).__init__(principal_id=principal_id, principal_type=principal_type, roles=roles, instance_id=instance_id, **kwargs)
