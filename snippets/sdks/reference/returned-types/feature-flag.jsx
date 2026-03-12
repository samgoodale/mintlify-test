const FeatureFlag = (props) => {
  if (props.sec === "description") {
    return (
      <>
        <p>
          The <props.ui.Code x={props.c.FeatureFlag}/> represents a set of
          properties that define a feature flag itself, for example, its{" "}
          <props.ui.CodeRef
            x={`${props.c.Variation.Name}s`}
            href={props.c.Variation.Ref}
          />
          , environment status, and other related details.
        </p>
        <p>
          It can be extended with additional information if required by clients.
          If you need more details, please contact your Customer Success
          Manager.
        </p>
      </>
    );
  }

  if (props.sec === "description_rules") {
    return (
      <>
        <p>
          The <props.ui.Code x={props.c.FeatureFlag}/> represents a set of
          properties that define a feature flag itself, for example, its{" "}
          <props.ui.CodeRef
            x={`${props.c.Variation.Name}s`}
            href={props.c.Variation.Ref}
          />
          , <props.ui.CodeRef x={`${props.c.Rule?.Name}s`} href={props.c.Rule?.Ref}/>,
          environment status, and other related details.
        </p>
        <p>
          It can be extended with additional information if required by clients.
          If you need more details, please contact your Customer Success
          Manager.
        </p>
      </>
    );
  }

  if (props.sec === "arguments") {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <props.ui.Text x={props.c.FeatureFlag.Params.EnvironmentEnabled}/>
            </td>
            <td>
              <props.ui.Code x={props.c.Common.Bool}/>
            </td>
            <td>
              Indicating whether the feature flag is enabled in the current
              environment.
            </td>
          </tr>
          <tr>
            <td>
              <props.ui.Text x={props.c.FeatureFlag.Params.Variations}/>
            </td>
            <td>
              <props.ui.Code x={props.c.FeatureFlag.Params.Variations.Type}/>
            </td>
            <td>
              A map of <props.ui.Code x={props.c.Variation}/> objects, keyed by
              variation keys.
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  if (props.sec === "arguments_rules") {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <props.ui.Text x={props.c.FeatureFlag.Params.EnvironmentEnabled}/>
            </td>
            <td>
              <props.ui.Code x={props.c.Common.Bool}/>
            </td>
            <td>
              Indicating whether the feature flag is enabled in the current
              environment.
            </td>
          </tr>
          <tr>
            <td>
              <props.ui.Text x={props.c.FeatureFlag.Params.DefaultVariationKey}/>
            </td>
            <td>
              <props.ui.Code x={props.c.Common.String}/>
            </td>
            <td>
              The key of the default variation associated with the feature flag.
            </td>
          </tr>
          <tr>
            <td>
              <props.ui.Text x={props.c.FeatureFlag.Params.Variations}/>
            </td>
            <td>
              <props.ui.Code x={props.c.FeatureFlag.Params.Variations.Type}/>
            </td>
            <td>
              A map of <props.ui.Code x={props.c.Variation}/> objects, keyed by
              variation keys.
            </td>
          </tr>
          <tr>
            <td>
              <props.ui.Text x={props.c.FeatureFlag.Params.Rules}/>
            </td>
            <td>
              <props.ui.Code x={props.c.FeatureFlag.Params.Rules?.Type}/>
            </td>
            <td>
              A list of <props.ui.Code x={props.c.Rule}/> objects
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default FeatureFlag;
