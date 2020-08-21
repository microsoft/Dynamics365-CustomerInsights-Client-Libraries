// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Dynamics.CustomerInsights.Api.Models
{
    using Newtonsoft.Json;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;

    /// <summary>
    /// Represents the entity info used in API requests (entity level)
    /// </summary>
    public partial class DatasourceEntityInformation
    {
        /// <summary>
        /// Initializes a new instance of the DatasourceEntityInformation
        /// class.
        /// </summary>
        public DatasourceEntityInformation()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the DatasourceEntityInformation
        /// class.
        /// </summary>
        /// <param name="entityName">Gets the name of the entity.</param>
        /// <param name="primaryKey">Gets the primary key name of the entity.
        /// We require the entity to have a single column primary key
        /// column</param>
        /// <param name="entityType">Possible values include: 'unspecified',
        /// 'profile', 'conflationMap', 'activity', 'aggregateKpi',
        /// 'profileKpi', 'unifiedActivity', 'segment', 'intelligence',
        /// 'genericPrediction', 'enrichment', 'insights', 'derivedEntity',
        /// 'quarantine'</param>
        /// <param name="timestampFieldName">Gets the time stamp field
        /// name.</param>
        /// <param name="semanticLabels">Gets the semantic labels, by attribute
        /// name.</param>
        public DatasourceEntityInformation(string entityName = default(string), string primaryKey = default(string), string entityType = default(string), string timestampFieldName = default(string), IList<AttributeSemanticInformation> semanticLabels = default(IList<AttributeSemanticInformation>))
        {
            EntityName = entityName;
            PrimaryKey = primaryKey;
            EntityType = entityType;
            TimestampFieldName = timestampFieldName;
            SemanticLabels = semanticLabels;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets the name of the entity.
        /// </summary>
        [JsonProperty(PropertyName = "entityName")]
        public string EntityName { get; set; }

        /// <summary>
        /// Gets the primary key name of the entity. We require the entity to
        /// have a single column primary key column
        /// </summary>
        [JsonProperty(PropertyName = "primaryKey")]
        public string PrimaryKey { get; set; }

        /// <summary>
        /// Gets or sets possible values include: 'unspecified', 'profile',
        /// 'conflationMap', 'activity', 'aggregateKpi', 'profileKpi',
        /// 'unifiedActivity', 'segment', 'intelligence', 'genericPrediction',
        /// 'enrichment', 'insights', 'derivedEntity', 'quarantine'
        /// </summary>
        [JsonProperty(PropertyName = "entityType")]
        public string EntityType { get; set; }

        /// <summary>
        /// Gets the time stamp field name.
        /// </summary>
        [JsonProperty(PropertyName = "timestampFieldName")]
        public string TimestampFieldName { get; set; }

        /// <summary>
        /// Gets the semantic labels, by attribute name.
        /// </summary>
        [JsonProperty(PropertyName = "semanticLabels")]
        public IList<AttributeSemanticInformation> SemanticLabels { get; set; }

    }
}
