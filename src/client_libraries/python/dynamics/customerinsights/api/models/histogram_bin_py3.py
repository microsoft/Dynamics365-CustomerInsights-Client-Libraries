# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class HistogramBin(Model):
    """Histogram bin.

    :param lower_bound: Lower bound of Histogram bin.
    :type lower_bound: float
    :param upper_bound: Upper bound Histogram bin.
    :type upper_bound: float
    :param count: Represents an approximation count of the bin count.
    :type count: float
    """

    _attribute_map = {
        'lower_bound': {'key': 'lowerBound', 'type': 'float'},
        'upper_bound': {'key': 'upperBound', 'type': 'float'},
        'count': {'key': 'count', 'type': 'float'},
    }

    def __init__(self, *, lower_bound: float=None, upper_bound: float=None, count: float=None, **kwargs) -> None:
        super(HistogramBin, self).__init__(**kwargs)
        self.lower_bound = lower_bound
        self.upper_bound = upper_bound
        self.count = count
