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
    /// Represents a measure definition
    /// </summary>
    public partial class MeasureDefinition
    {
        /// <summary>
        /// Initializes a new instance of the MeasureDefinition class.
        /// </summary>
        public MeasureDefinition()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the MeasureDefinition class.
        /// </summary>
        /// <param name="kind">Possible values include: 'entity',
        /// 'attribute'</param>
        /// <param name="isScalar">Gets a value indicating whether the current
        /// measure is a scalar measure e doesn't have any dimensions</param>
        /// <param name="linkedEntities">Gets list of linked entities
        /// associated with the measure.</param>
        /// <param name="variables">Gets list of variables (computed columns)
        /// for the measure.</param>
        /// <param name="dimensions">Gets list of dimensions with the
        /// measure.</param>
        /// <param name="aggregates">Gets list of aggregates of the
        /// measure.</param>
        /// <param name="isProfile">Gets a value indicating whether the current
        /// measure is a profile measure</param>
        /// <param name="measureQuerySql">Gets the user specified custom SQL
        /// query.</param>
        /// <param name="type">Possible values include: 'structured',
        /// 'manual'</param>
        /// <param name="isManualQueryScalar">Gets the indicating whether the
        /// Business Measure is Scalar or not.</param>
        /// <param name="dependencies">Gets the list of measures that this
        /// measure depends on.</param>
        public MeasureDefinition(string kind = default(string), bool? isScalar = default(bool?), IList<MeasureLinkedEntity> linkedEntities = default(IList<MeasureLinkedEntity>), IList<MeasureVariable> variables = default(IList<MeasureVariable>), MeasureExpression filters = default(MeasureExpression), SegmentMembershipCriteria filteringCriteria = default(SegmentMembershipCriteria), IList<MeasureDimension> dimensions = default(IList<MeasureDimension>), IList<MeasureAggregate> aggregates = default(IList<MeasureAggregate>), bool? isProfile = default(bool?), string measureQuerySql = default(string), string type = default(string), bool? isManualQueryScalar = default(bool?), IList<EntityDependency> dependencies = default(IList<EntityDependency>))
        {
            Kind = kind;
            IsScalar = isScalar;
            LinkedEntities = linkedEntities;
            Variables = variables;
            Filters = filters;
            FilteringCriteria = filteringCriteria;
            Dimensions = dimensions;
            Aggregates = aggregates;
            IsProfile = isProfile;
            MeasureQuerySql = measureQuerySql;
            Type = type;
            IsManualQueryScalar = isManualQueryScalar;
            Dependencies = dependencies;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets possible values include: 'entity', 'attribute'
        /// </summary>
        [JsonProperty(PropertyName = "kind")]
        public string Kind { get; set; }

        /// <summary>
        /// Gets a value indicating whether the current measure is a scalar
        /// measure e doesn't have any dimensions
        /// </summary>
        [JsonProperty(PropertyName = "isScalar")]
        public bool? IsScalar { get; private set; }

        /// <summary>
        /// Gets list of linked entities associated with the measure.
        /// </summary>
        [JsonProperty(PropertyName = "linkedEntities")]
        public IList<MeasureLinkedEntity> LinkedEntities { get; private set; }

        /// <summary>
        /// Gets list of variables (computed columns) for the measure.
        /// </summary>
        [JsonProperty(PropertyName = "variables")]
        public IList<MeasureVariable> Variables { get; private set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "filters")]
        public MeasureExpression Filters { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "filteringCriteria")]
        public SegmentMembershipCriteria FilteringCriteria { get; set; }

        /// <summary>
        /// Gets list of dimensions with the measure.
        /// </summary>
        [JsonProperty(PropertyName = "dimensions")]
        public IList<MeasureDimension> Dimensions { get; private set; }

        /// <summary>
        /// Gets list of aggregates of the measure.
        /// </summary>
        [JsonProperty(PropertyName = "aggregates")]
        public IList<MeasureAggregate> Aggregates { get; private set; }

        /// <summary>
        /// Gets a value indicating whether the current measure is a profile
        /// measure
        /// </summary>
        [JsonProperty(PropertyName = "isProfile")]
        public bool? IsProfile { get; private set; }

        /// <summary>
        /// Gets the user specified custom SQL query.
        /// </summary>
        [JsonProperty(PropertyName = "measureQuerySql")]
        public string MeasureQuerySql { get; private set; }

        /// <summary>
        /// Gets or sets possible values include: 'structured', 'manual'
        /// </summary>
        [JsonProperty(PropertyName = "type")]
        public string Type { get; set; }

        /// <summary>
        /// Gets the indicating whether the Business Measure is Scalar or not.
        /// </summary>
        [JsonProperty(PropertyName = "isManualQueryScalar")]
        public bool? IsManualQueryScalar { get; private set; }

        /// <summary>
        /// Gets the list of measures that this measure depends on.
        /// </summary>
        [JsonProperty(PropertyName = "dependencies")]
        public IList<EntityDependency> Dependencies { get; private set; }

    }
}