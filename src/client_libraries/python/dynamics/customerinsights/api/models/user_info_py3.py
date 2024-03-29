# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class UserInfo(Model):
    """Represents a User.

    :param user_id: Gets the unique ID for this user.
    :type user_id: str
    :param upn: Gets user identifier.
    :type upn: str
    :param instances_ids: Gets list of Instances Id.
    :type instances_ids:
     list[~dynamics.customerinsights.api.models.InstanceInfo]
    :param preferred_language: Gets user preferred language.
    :type preferred_language: str
    :param preferred_regional_format: Gets user preferred regional format.
    :type preferred_regional_format: str
    :param default_instance: Gets user default instance id.
    :type default_instance: str
    :param user_notifications_settings:
    :type user_notifications_settings:
     ~dynamics.customerinsights.api.models.UserNotificationsSettings
    :param industry_demo: Gets the industry demo selected by user during trial
    :type industry_demo: str
    :param tenant_id: Gets the tenant id of the user.
    :type tenant_id: str
    :param has_seen_welcome: Gets a value indicating whether the user has seen
     the all apps (welcome) page.
    :type has_seen_welcome: bool
    :param created_utc: Gets the created time of User settings created for EI
     Migration.
    :type created_utc: datetime
    :param allow_email_contacts: Gets a value indicating whether the user
     Opt-In to be contacted through emails. This is for CPM integration from
     EI.
    :type allow_email_contacts: bool
    :param portal_settings:
    :type portal_settings:
     ~dynamics.customerinsights.api.models.PortalSettings
    :param terms_of_use:
    :type terms_of_use: ~dynamics.customerinsights.api.models.TermsOfUse
    :param region: Gets the region that the user belongs to.
    :type region: str
    :param last_used_experience: Possible values include: 'audienceInsights',
     'engagementInsights', 'audienceInsightsB2B'
    :type last_used_experience: str or
     ~dynamics.customerinsights.api.models.enum
    :param instance_id: Customer Insights instance id associated with this
     object.
    :type instance_id: str
    """

    _attribute_map = {
        'user_id': {'key': 'userId', 'type': 'str'},
        'upn': {'key': 'upn', 'type': 'str'},
        'instances_ids': {'key': 'instancesIds', 'type': '[InstanceInfo]'},
        'preferred_language': {'key': 'preferredLanguage', 'type': 'str'},
        'preferred_regional_format': {'key': 'preferredRegionalFormat', 'type': 'str'},
        'default_instance': {'key': 'defaultInstance', 'type': 'str'},
        'user_notifications_settings': {'key': 'userNotificationsSettings', 'type': 'UserNotificationsSettings'},
        'industry_demo': {'key': 'industryDemo', 'type': 'str'},
        'tenant_id': {'key': 'tenantId', 'type': 'str'},
        'has_seen_welcome': {'key': 'hasSeenWelcome', 'type': 'bool'},
        'created_utc': {'key': 'createdUtc', 'type': 'iso-8601'},
        'allow_email_contacts': {'key': 'allowEmailContacts', 'type': 'bool'},
        'portal_settings': {'key': 'portalSettings', 'type': 'PortalSettings'},
        'terms_of_use': {'key': 'termsOfUse', 'type': 'TermsOfUse'},
        'region': {'key': 'region', 'type': 'str'},
        'last_used_experience': {'key': 'lastUsedExperience', 'type': 'str'},
        'instance_id': {'key': 'instanceId', 'type': 'str'},
    }

    def __init__(self, *, user_id: str=None, upn: str=None, instances_ids=None, preferred_language: str=None, preferred_regional_format: str=None, default_instance: str=None, user_notifications_settings=None, industry_demo: str=None, tenant_id: str=None, has_seen_welcome: bool=None, created_utc=None, allow_email_contacts: bool=None, portal_settings=None, terms_of_use=None, region: str=None, last_used_experience=None, instance_id: str=None, **kwargs) -> None:
        super(UserInfo, self).__init__(**kwargs)
        self.user_id = user_id
        self.upn = upn
        self.instances_ids = instances_ids
        self.preferred_language = preferred_language
        self.preferred_regional_format = preferred_regional_format
        self.default_instance = default_instance
        self.user_notifications_settings = user_notifications_settings
        self.industry_demo = industry_demo
        self.tenant_id = tenant_id
        self.has_seen_welcome = has_seen_welcome
        self.created_utc = created_utc
        self.allow_email_contacts = allow_email_contacts
        self.portal_settings = portal_settings
        self.terms_of_use = terms_of_use
        self.region = region
        self.last_used_experience = last_used_experience
        self.instance_id = instance_id
