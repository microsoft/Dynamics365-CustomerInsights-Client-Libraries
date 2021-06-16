# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class UserNotificationsSettings(Model):
    """Represents a user notifications settings.

    :param dismissed_banner_notifications: Gets the list of dismissed banner
     notifications for this user.
    :type dismissed_banner_notifications:
     list[~dynamics.customerinsights.api.models.DismissedNotification]
    """

    _attribute_map = {
        'dismissed_banner_notifications': {'key': 'dismissedBannerNotifications', 'type': '[DismissedNotification]'},
    }

    def __init__(self, **kwargs):
        super(UserNotificationsSettings, self).__init__(**kwargs)
        self.dismissed_banner_notifications = kwargs.get('dismissed_banner_notifications', None)