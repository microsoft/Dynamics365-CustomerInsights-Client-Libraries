# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class HierarchyDependency(Model):
    """Represents metadata for a Hierarchy Dependency.

    :param source_entity: Gets the source entities fully qualified name.
    :type source_entity: str
    :param account_id_attribute: Gets entity account Id.
    :type account_id_attribute: str
    :param parent_account_id_attribute: Gets parent account id.
    :type parent_account_id_attribute: str
    """

    _attribute_map = {
        'source_entity': {'key': 'sourceEntity', 'type': 'str'},
        'account_id_attribute': {'key': 'accountIdAttribute', 'type': 'str'},
        'parent_account_id_attribute': {'key': 'parentAccountIdAttribute', 'type': 'str'},
    }

    def __init__(self, *, source_entity: str=None, account_id_attribute: str=None, parent_account_id_attribute: str=None, **kwargs) -> None:
        super(HierarchyDependency, self).__init__(**kwargs)
        self.source_entity = source_entity
        self.account_id_attribute = account_id_attribute
        self.parent_account_id_attribute = parent_account_id_attribute