# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class DismissedNotification(Model):
    """Represents a dismissed notification.

    :param notification_id: Gets the unique id of the notification
    :type notification_id: str
    :param notification_expiry_time_utc: Gets the expiration UTC date time of
     this notification.
    :type notification_expiry_time_utc: datetime
    """

    _attribute_map = {
        'notification_id': {'key': 'notificationId', 'type': 'str'},
        'notification_expiry_time_utc': {'key': 'notificationExpiryTimeUtc', 'type': 'iso-8601'},
    }

    def __init__(self, *, notification_id: str=None, notification_expiry_time_utc=None, **kwargs) -> None:
        super(DismissedNotification, self).__init__(**kwargs)
        self.notification_id = notification_id
        self.notification_expiry_time_utc = notification_expiry_time_utc
