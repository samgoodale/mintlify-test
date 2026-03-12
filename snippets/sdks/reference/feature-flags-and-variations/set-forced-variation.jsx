export const SetForcedVariation = (props) => {
  if (props.sec === "description") {
    return (
      <div>
        <p>
          The method allows you to programmatically assign a specific{" "}
          <props.ui.CodeRef x={props.c.Variation}/> to a user, bypassing the
          standard evaluation process.
        </p>
        <p>
          When a <strong>forced</strong> variation is set, it overrides
          Kameleoon&apos;s real-time evaluation logic. To preserve segmentation
          and targeting conditions during an experiment, set{" "}
          <props.ui.Code
            x={`${props.c.SetForcedVariation.Params.ForceTargeting.Name}=${props.c.Common.False}`}
          />{" "}
          instead.
        </p>
        <props.ui.If c={props.c.IsServer}>
          <div
            style={{
              margin: "1rem 0",
              padding: "0.875rem 1rem",
              border: "1px solid #67e8f9",
              borderLeftWidth: "4px",
              borderRadius: "0.5rem",
              backgroundColor: "#ecfeff",
              color: "#155e75",
            }}
          >
            <p
              style={{
                margin: "0 0 0.5rem",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              Info
            </p>
            <div>
              <strong>Simulated</strong> variations always take precedence in
              the execution order.
            </div>
          </div>
        </props.ui.If>
        <p>
          A forced variation is treated the same as an evaluated variation. It
          is tracked in analytics and stored in the user context like any
          standard evaluated variation.
        </p>
        <p>
          The method may throw exceptions under certain conditions. Proper
          exception handling is essential.
        </p>
        <props.ui.If c={props.c.IsServer}>
          <div
            style={{
              margin: "1rem 0",
              padding: "0.875rem 1rem",
              border: "1px solid #fdba74",
              borderLeftWidth: "4px",
              borderRadius: "0.5rem",
              backgroundColor: "#fff7ed",
              color: "#9a3412",
            }}
          >
            <p
              style={{
                margin: "0 0 0.5rem",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              Warning
            </p>
            <div>
              <p>
                It&apos;s important to distinguish <strong>forced</strong>{" "}
                variations from{" "}
                <strong>
                  <props.ui.Ref
                    x={"simulated"}
                    href={props.c.GetVisitorCode.Ref}
                  />
                </strong>{" "}
                variations:
              </p>
              <ul>
                <li>
                  <strong>Forced variations:</strong> Are specific to an
                  individual experiment.
                </li>
                <li>
                  <strong>Simulated variations:</strong> Affect the overall{" "}
                  <strong>feature flag</strong> result.
                </li>
              </ul>
            </div>
          </div>
        </props.ui.If>
      </div>
    );
  }

  if (props.sec === "arguments") {
    return (
      <>
        <props.ui.If c={props.c.IsJs}>
          <p>An object of type <code>SetForcedVariationParametersType</code> with the following properties:</p>
        </props.ui.If>
        <props.ui.If c={props.c.IsServer}>
          <>
            <props.ui.If c={!props.c.SetForcedVariation.Params.Timeout}>
              <table><thead><tr><th>Name</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody>
                <tr><td><props.ui.Text x={props.c.Params.VisitorCode}/> <em>(required)</em></td><td><props.ui.Code x={props.c.Common.String}/></td><td><props.ui.Text x={props.shared.Params.VisitorCode}/></td><td /></tr>
                <tr><td><props.ui.Text x={props.c.SetForcedVariation.Params.ExperimentId}/> <em>(required)</em></td><td><props.ui.Code x={props.c.Common.Int}/></td><td><strong>Experiment Id</strong> that will be targeted and selected during the evaluation process.</td><td /></tr>
                <tr><td><props.ui.Text x={props.c.SetForcedVariation.Params.VariationKey}/> <em>(required)</em></td><td><props.ui.Code x={props.c.SetForcedVariation.Params.VariationKey.Type}/></td><td><strong>Variation Key</strong> corresponding to a <props.ui.Code x={props.c.Variation}/> that should be forced. If the value is <props.ui.Code x={props.c.SetForcedVariation.Params.VariationKey.RemVal}/>, the forced variation will be reset.</td><td /></tr>
                <tr><td><props.ui.Text x={props.c.SetForcedVariation.Params.ForceTargeting}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.Common.Bool}/></td><td>Indicates whether targeting for the experiment should be forced and skipped.</td><td><props.ui.Code x={props.c.Common.True}/></td></tr>
              </tbody></table>
            </props.ui.If>
            <props.ui.If c={props.c.SetForcedVariation.Params.Timeout}>
              <table><thead><tr><th>Name</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody>
                <tr><td><props.ui.Text x={props.c.Params.VisitorCode}/> <em>(required)</em></td><td><props.ui.Code x={props.c.Common.String}/></td><td><props.ui.Text x={props.shared.Params.VisitorCode}/></td><td /></tr>
                <tr><td><props.ui.Text x={props.c.SetForcedVariation.Params.ExperimentId}/> <em>(required)</em></td><td><props.ui.Code x={props.c.Common.Int}/></td><td><strong>Experiment Id</strong> that will be targeted and selected during the evaluation process.</td><td /></tr>
                <tr><td><props.ui.Text x={props.c.SetForcedVariation.Params.VariationKey}/> <em>(required)</em></td><td><props.ui.Code x={props.c.SetForcedVariation.Params.VariationKey.Type}/></td><td><strong>Variation Key</strong> corresponding to a <props.ui.Code x={props.c.Variation}/> that should be forced. If the value is <props.ui.Code x={props.c.SetForcedVariation.Params.VariationKey.RemVal}/>, the forced variation will be reset.</td><td /></tr>
                <tr><td><props.ui.Text x={props.c.SetForcedVariation.Params.ForceTargeting}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.Common.Bool}/></td><td>Indicates whether targeting for the experiment should be forced and skipped.</td><td><props.ui.Code x={props.c.Common.True}/></td></tr>
                <tr><td><props.ui.Text x={props.c.SetForcedVariation.Params.Timeout}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.SetForcedVariation.Params.Timeout?.Type}/></td><td>Timeout in milliseconds. If omitted, the SDK uses the <props.ui.CodeRef x="default_timeout" href={props.c.KameleoonClientConfig.Ref}/> specified in your configuration.</td><td><props.ui.Code x={props.c.SetForcedVariation.Params.Timeout?.Default}/></td></tr>
              </tbody></table>
            </props.ui.If>
          </>
        </props.ui.If>
        <props.ui.If c={props.c.IsClient}>
          <table><thead><tr><th>Name</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody>
            <tr><td><props.ui.Text x={props.c.SetForcedVariation.Params.ExperimentId}/> <em>(required)</em></td><td><props.ui.Code x={props.c.Common.Int}/></td><td><strong>Experiment Id</strong> that will be targeted and selected during the evaluation process.</td><td /></tr>
            <tr><td><props.ui.Text x={props.c.SetForcedVariation.Params.VariationKey}/> <em>(required)</em></td><td><props.ui.Code x={props.c.Common.String}/></td><td><strong>Variation Key</strong> corresponding to a <props.ui.Code x={props.c.Variation}/> that should be forced. If the value is <props.ui.Code x={props.c.Common.Null}/>, the forced variation will be reset.</td><td /></tr>
            <tr><td><props.ui.Text x={props.c.SetForcedVariation.Params.ForceTargeting}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.Common.Bool}/></td><td>Indicates whether targeting for the experiment should be forced and skipped.</td><td><props.ui.Code x={props.c.Common.True}/></td></tr>
          </tbody></table>
        </props.ui.If>
      </>
    );
  }

  if (props.sec === "exceptions") {
    return (
      <>
        <props.ui.If c={props.c.IsServer}>
          <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
            <tr><td><props.ui.Code x={props.c.Exceptions.VisitorCodeInvalid}/></td><td><props.ui.Text x={props.shared.Exceptions.VisitorCodeInvalid}/></td></tr>
            <tr><td><props.ui.Code x={props.c.Exceptions.FeatureExperimentNotFound}/></td><td><props.ui.Text x={props.shared.Exceptions.FeatureExperimentNotFound}/></td></tr>
            <tr><td><props.ui.Code x={props.c.Exceptions.FeatureVariationNotFound}/></td><td><props.ui.Text x={props.shared.Exceptions.FeatureVariationNotFound}/></td></tr>
          </tbody></table>
        </props.ui.If>
        <props.ui.If c={props.c.IsClient}>
          <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
            <tr><td><props.ui.Code x={props.c.Exceptions.SdkNotReady}/></td><td><props.ui.Text x={props.shared.Exceptions.SdkNotReady}/></td></tr>
            <tr><td><props.ui.Code x={props.c.Exceptions.FeatureExperimentNotFound}/></td><td><props.ui.Text x={props.shared.Exceptions.FeatureExperimentNotFound}/></td></tr>
            <tr><td><props.ui.Code x={props.c.Exceptions.FeatureVariationNotFound}/></td><td><props.ui.Text x={props.shared.Exceptions.FeatureVariationNotFound}/></td></tr>
          </tbody></table>
        </props.ui.If>
        <props.ui.If c={!props.c.AreErrorsReturnedAsValues}>
          <div
            style={{
              margin: "1rem 0",
              padding: "0.875rem 1rem",
              border: "1px solid #67e8f9",
              borderLeftWidth: "4px",
              borderRadius: "0.5rem",
              backgroundColor: "#ecfeff",
              color: "#155e75",
            }}
          >
            <p
              style={{
                margin: "0 0 0.5rem",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              Info
            </p>
            <div>
              In most cases, only the basic error,{" "}
              <props.ui.Code x={props.c.Exceptions.Kameleoon}/>, needs to be
              handled, as demonstrated in the example. However, if different
              types of errors require a response, handle each one separately
              based on specific requirements.
            </div>
          </div>
        </props.ui.If>
      </>
    );
  }

  if (props.sec === "exceptions___js") {
    return (
      <>
        <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
          <tr><td><props.ui.Code x={props.c.Exceptions.VisitorCodeEmpty}/></td><td><props.ui.Text x={props.shared.Exceptions.VisitorCodeEmpty}/></td></tr>
          <tr><td><props.ui.Code x={props.c.Exceptions.VisitorCodeMaxLength}/></td><td><props.ui.Text x={props.shared.Exceptions.VisitorCodeMaxLength}/></td></tr>
          <tr><td><props.ui.Code x={props.c.Exceptions.Initialization}/></td><td><props.ui.Text x={props.shared.Exceptions.SdkNotReady}/></td></tr>
          <tr><td><props.ui.Code x={props.c.Exceptions.FeatureExperimentNotFound}/></td><td><props.ui.Text x={props.shared.Exceptions.FeatureExperimentNotFound}/></td></tr>
          <tr><td><props.ui.Code x={props.c.Exceptions.FeatureVariationNotFound}/></td><td><props.ui.Text x={props.shared.Exceptions.FeatureVariationNotFound}/></td></tr>
          <tr><td><props.ui.Code x={props.c.Exceptions.StorageRead}/></td><td><props.ui.Text x={props.shared.Exceptions.StorageRead}/></td></tr>
          <tr><td><props.ui.Code x={props.c.Exceptions.StorageWrite}/></td><td><props.ui.Text x={props.shared.Exceptions.StorageWrite}/></td></tr>
        </tbody></table>
        <props.ui.If c={!props.c.AreErrorsReturnedAsValues}>
          <div
            style={{
              margin: "1rem 0",
              padding: "0.875rem 1rem",
              border: "1px solid #67e8f9",
              borderLeftWidth: "4px",
              borderRadius: "0.5rem",
              backgroundColor: "#ecfeff",
              color: "#155e75",
            }}
          >
            <p
              style={{
                margin: "0 0 0.5rem",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              Info
            </p>
            <div>
              In most cases, only the basic error,{" "}
              <props.ui.Code x={props.c.Exceptions.Kameleoon}/>, needs to be
              handled, as demonstrated in the example. However, if different
              types of errors require a response, handle each one separately
              based on specific requirements.
            </div>
          </div>
        </props.ui.If>
      </>
    );
  }

  return null;
};

export default SetForcedVariation;
