// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Dynamics.CustomerInsights.Api.Models
{
    using System.Linq;

    /// <summary>
    /// Represents a Relationship
    /// </summary>
    public partial class InstancesInstanceIdManageRelationshipsRelationshipNamePutRequest : RelationshipMetadata
    {
        /// <summary>
        /// Initializes a new instance of the
        /// InstancesInstanceIdManageRelationshipsRelationshipNamePutRequest
        /// class.
        /// </summary>
        public InstancesInstanceIdManageRelationshipsRelationshipNamePutRequest()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the
        /// InstancesInstanceIdManageRelationshipsRelationshipNamePutRequest
        /// class.
        /// </summary>
        /// <param name="friendlyName">Gets the friendly name of the
        /// relationship.</param>
        /// <param name="name">Gets the unique name for relationship</param>
        /// <param name="description">Gets the description for
        /// relationship</param>
        /// <param name="relationshipType">Possible values include:
        /// 'singleKeyRelationshipOrigin', 'singleKeyRelationshipDestination',
        /// 'dataSourceLineageOrigin', 'dataSourceLineageDestination'</param>
        /// <param name="fromAttributeName">Gets the name of the foreign key
        /// reference attribute that this relationship originates from.</param>
        /// <param name="fromEntityName">Gets the name of the entity this
        /// relationship originates from.</param>
        /// <param name="toAttributeName">Gets the name of the foreign key
        /// attribute that this relationship points to.</param>
        /// <param name="toEntityName">Gets the name of the entity this
        /// relationship points to.</param>
        /// <param name="cardinality">Possible values include: 'oneToMany',
        /// 'oneToOne', 'manyToOne'</param>
        /// <param name="source">Possible values include: 'user', 'system',
        /// 'inferred'</param>
        /// <param name="version">Version number of this object.</param>
        /// <param name="updatedBy">UPN of the user who last updated this
        /// record.</param>
        /// <param name="updatedUtc">Time this object was last updated.</param>
        /// <param name="createdBy">Email address of the user who created this
        /// record.</param>
        /// <param name="createdUtc">Time this object was initially
        /// created.</param>
        /// <param name="instanceId">Customer Insights instance id associated
        /// with this object.</param>
        public InstancesInstanceIdManageRelationshipsRelationshipNamePutRequest(string friendlyName = default(string), string name = default(string), string description = default(string), string relationshipType = default(string), string fromAttributeName = default(string), string fromEntityName = default(string), string toAttributeName = default(string), string toEntityName = default(string), string cardinality = default(string), string source = default(string), long? version = default(long?), string updatedBy = default(string), System.DateTime? updatedUtc = default(System.DateTime?), string createdBy = default(string), System.DateTime? createdUtc = default(System.DateTime?), System.Guid? instanceId = default(System.Guid?))
            : base(friendlyName, name, description, relationshipType, fromAttributeName, fromEntityName, toAttributeName, toEntityName, cardinality, source, version, updatedBy, updatedUtc, createdBy, createdUtc, instanceId)
        {
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

    }
}
