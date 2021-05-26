# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class SegmentMembershipCriteria(Model):
    """Represent a Segment Query.

    :param logical_operator: Possible values include: 'and', 'or'
    :type logical_operator: str or ~dynamics.customerinsights.api.models.enum
    :param attribute: Gets the Attribute of the entity used in segment
     criteria.
    :type attribute: str
    :param comparison_operator: Possible values include: 'equals',
     'notEquals', 'greaterThan', 'greaterThanOrEqualTo', 'lessThan',
     'lessThanOrEqualTo', 'any', 'contains', 'startsWith', 'endsWith',
     'isNull', 'isNotNull', 'all', 'isIn', 'isWithinLast', 'isBetween',
     'isNotBetween', 'yearToDate', 'dayOf', 'monthOf', 'yearOf', 'dayOfWeek',
     'timeAt'
    :type comparison_operator: str or
     ~dynamics.customerinsights.api.models.enum
    :param child_criterias: Gets the list of Child criteria of segment.
    :type child_criterias:
     list[~dynamics.customerinsights.api.models.SegmentMembershipCriteria]
    :param value: Gets the Value in criteria.
    :type value: str
    :param ignore_case: Gets a value indicating whether case is ignored for
     this criteria.
    :type ignore_case: bool
    :param list_of_values: Gets the list of values in criteria.
    :type list_of_values: list[str]
    :param is_time: flag set to true if entries are of time format
    :type is_time: bool
    """

    _attribute_map = {
        'logical_operator': {'key': 'logicalOperator', 'type': 'str'},
        'attribute': {'key': 'attribute', 'type': 'str'},
        'comparison_operator': {'key': 'comparisonOperator', 'type': 'str'},
        'child_criterias': {'key': 'childCriterias', 'type': '[SegmentMembershipCriteria]'},
        'value': {'key': 'value', 'type': 'str'},
        'ignore_case': {'key': 'ignoreCase', 'type': 'bool'},
        'list_of_values': {'key': 'listOfValues', 'type': '[str]'},
        'is_time': {'key': 'isTime', 'type': 'bool'},
    }

    def __init__(self, *, logical_operator=None, attribute: str=None, comparison_operator=None, child_criterias=None, value: str=None, ignore_case: bool=None, list_of_values=None, is_time: bool=None, **kwargs) -> None:
        super(SegmentMembershipCriteria, self).__init__(**kwargs)
        self.logical_operator = logical_operator
        self.attribute = attribute
        self.comparison_operator = comparison_operator
        self.child_criterias = child_criterias
        self.value = value
        self.ignore_case = ignore_case
        self.list_of_values = list_of_values
        self.is_time = is_time
