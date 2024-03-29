# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class SqlValidationStats(Model):
    """Represents measure sql validation stats.

    :param validation_date: Date of Validation evaluation
    :type validation_date: datetime
    :param error: Gets the number of consecutive failures
    :type error: str
    """

    _attribute_map = {
        'validation_date': {'key': 'validationDate', 'type': 'iso-8601'},
        'error': {'key': 'error', 'type': 'str'},
    }

    def __init__(self, *, validation_date=None, error: str=None, **kwargs) -> None:
        super(SqlValidationStats, self).__init__(**kwargs)
        self.validation_date = validation_date
        self.error = error
