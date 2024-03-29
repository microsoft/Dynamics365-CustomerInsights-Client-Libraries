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

    public partial class ParsingError
    {
        /// <summary>
        /// Initializes a new instance of the ParsingError class.
        /// </summary>
        public ParsingError()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the ParsingError class.
        /// </summary>
        /// <param name="code">Possible values include: 'unknown',
        /// 'parsingFailed', 'entityNotFound', 'attributeNotFound',
        /// 'unsupportedSyntax', 'invalidOperation', 'incorrectArgumentCount',
        /// 'incorrectIntervalType', 'invalidArgument'</param>
        public ParsingError(IList<LogMessage> messages = default(IList<LogMessage>), string code = default(string))
        {
            Messages = messages;
            Code = code;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "messages")]
        public IList<LogMessage> Messages { get; set; }

        /// <summary>
        /// Gets or sets possible values include: 'unknown', 'parsingFailed',
        /// 'entityNotFound', 'attributeNotFound', 'unsupportedSyntax',
        /// 'invalidOperation', 'incorrectArgumentCount',
        /// 'incorrectIntervalType', 'invalidArgument'
        /// </summary>
        [JsonProperty(PropertyName = "code")]
        public string Code { get; set; }

    }
}
