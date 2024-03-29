# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class ScalarOutput(Model):
    """ScalarOutput.

    :param values: Output folder path for the evaluation.
    :type values: dict[str, str]
    :param measure_name:
    :type measure_name: str
    :param evaluation_time: Gets the evaluation start time.
    :type evaluation_time: datetime
    """

    _attribute_map = {
        'values': {'key': 'values', 'type': '{str}'},
        'measure_name': {'key': 'measureName', 'type': 'str'},
        'evaluation_time': {'key': 'evaluationTime', 'type': 'iso-8601'},
    }

    def __init__(self, *, values=None, measure_name: str=None, evaluation_time=None, **kwargs) -> None:
        super(ScalarOutput, self).__init__(**kwargs)
        self.values = values
        self.measure_name = measure_name
        self.evaluation_time = evaluation_time
