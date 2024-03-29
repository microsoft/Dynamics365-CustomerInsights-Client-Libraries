// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Dynamics.CustomerInsights.Api.Models
{
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;

    /// <summary>
    /// Represents metadata for a measure (or KPI).
    /// </summary>
    public partial class InstancesInstanceIdManageMeasuresPostRequest1 : MeasureMetadata
    {
        /// <summary>
        /// Initializes a new instance of the
        /// InstancesInstanceIdManageMeasuresPostRequest1 class.
        /// </summary>
        public InstancesInstanceIdManageMeasuresPostRequest1()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the
        /// InstancesInstanceIdManageMeasuresPostRequest1 class.
        /// </summary>
        /// <param name="name">Unique name of the measure</param>
        /// <param name="description">Description of the measure.</param>
        /// <param name="evaluationHistory">Evaluation history for the measure.
        /// (not persisted in store)</param>
        /// <param name="outputHistory">Output history for the measure. (not
        /// persisted in store)</param>
        /// <param name="isTemplate">Check if measure metadata is a
        /// template</param>
        /// <param name="templateId">Gets the template ID for templates</param>
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
        public InstancesInstanceIdManageMeasuresPostRequest1(string displayName = default(string), string name = default(string), string description = default(string), MeasureDefinition definition = default(MeasureDefinition), Evaluation latestEvaluation = default(Evaluation), ScalarOutput output = default(ScalarOutput), EvaluationStats evaluationStats = default(EvaluationStats), StringInfo errorDescription = default(StringInfo), SqlValidationStats sqlValidationStats = default(SqlValidationStats), IList<Evaluation> evaluationHistory = default(IList<Evaluation>), IList<ScalarOutput> outputHistory = default(IList<ScalarOutput>), bool? isTemplate = default(bool?), System.Guid? templateId = default(System.Guid?), long? version = default(long?), string updatedBy = default(string), System.DateTime? updatedUtc = default(System.DateTime?), string createdBy = default(string), System.DateTime? createdUtc = default(System.DateTime?), System.Guid? instanceId = default(System.Guid?))
            : base(displayName, name, description, definition, latestEvaluation, output, evaluationStats, errorDescription, sqlValidationStats, evaluationHistory, outputHistory, isTemplate, templateId, version, updatedBy, updatedUtc, createdBy, createdUtc, instanceId)
        {
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

    }
}
