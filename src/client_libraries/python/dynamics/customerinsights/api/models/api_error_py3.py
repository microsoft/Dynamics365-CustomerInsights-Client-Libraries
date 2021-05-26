# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class ApiError(Model):
    """Represents API error code and message.

    :param error_code: Possible values include: 'notFound',
     'ambiguousReference', 'malformedInput', 'serviceUnavailable',
     'badRequest', 'notAllowed', 'conflict', 'locked', 'forbidden'
    :type error_code: str or ~dynamics.customerinsights.api.models.enum
    :param message: Message associated with the error
    :type message: str
    """

    _attribute_map = {
        'error_code': {'key': 'errorCode', 'type': 'str'},
        'message': {'key': 'message', 'type': 'str'},
    }

    def __init__(self, *, error_code=None, message: str=None, **kwargs) -> None:
        super(ApiError, self).__init__(**kwargs)
        self.error_code = error_code
        self.message = message
