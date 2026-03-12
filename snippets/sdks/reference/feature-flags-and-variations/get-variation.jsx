import { InfoBox, NoteBox } from "/snippets/sdks/plain-callouts.jsx";

const GetVariation = (props) => {
  if (props.sec === "description") {
    return (
      <>
        <ul>
          <li>
            <em>
              📨 Sends Tracking Data to Kameleoon (depending on the{" "}
              <props.ui.Code x={props.c.GetVariation.Params.Track.Name}/> parameter)
            </em>
          </li>
        </ul>

        <p>
          Retrieves the <props.ui.CodeRef x={props.c.Variation}/> assigned to a
          given visitor for a specific feature flag.
        </p>

        <props.ui.If c={props.c.IsServer}>
          <p>
            This method takes a <props.ui.Code x={props.c.Params.VisitorCode}/>{" "}
            and <props.ui.Code x={props.c.Params.FeatureKey}/> as mandatory
            arguments. The{" "}
            <props.ui.Code x={props.c.GetVariation.Params.Track.Name}/> argument
            is optional and defaults to{" "}
            <props.ui.Code x={props.c.Common.True}/>.
          </p>
        </props.ui.If>

        <props.ui.If c={props.c.IsClient}>
          <p>
            This method takes <props.ui.Code x={props.c.Params.FeatureKey}/> as
            a mandatory argument and{" "}
            <props.ui.Code x={props.c.GetVariation.Params.Track.Name}/> as an
            optional argument. The{" "}
            <props.ui.Code x={props.c.GetVariation.Params.Track.Name}/> argument
            is optional and defaults to{" "}
            <props.ui.Code x={props.c.Common.True}/>.
          </p>
        </props.ui.If>

        <p>
          It returns the assigned <props.ui.Code x={props.c.Variation}/> for the
          visitor. If the visitor is not associated with any feature flag rules,
          the method returns the default <props.ui.Code x={props.c.Variation}/>{" "}
          for the given feature flag.
        </p>

        <p>
          Ensure that proper error handling is implemented in your code to
          manage potential exceptions.
        </p>

        <NoteBox>
          The default variation refers to the variation assigned to a visitor
          when they do not match any predefined delivery rules for a feature
          flag. In other words, it is the fallback variation applied to all
          users who are not targeted by specific rules. It&apos;s represented as
          the variation in the &quot;Then, for everyone else...&quot; section in a
          management interface.
        </NoteBox>
      </>
    );
  }

  if (props.sec === "description___js") {
    return (
      <>
        <ul>
          <li>
            <em>
              📨 Sends Tracking Data to Kameleoon (depending on the{" "}
              <props.ui.Code x={props.c.GetVariations.Params.Track.Name}/> parameter)
            </em>
          </li>
          <li>
            <em>
              🎯 Events: <a href="#events-1">EventType.Evaluation</a>
            </em>
          </li>
        </ul>

        <props.ui.If c={props.c.IsReact}>
          <InfoBox>
            Method is obtained using <props.ui.Code x={"useFeatureFlag"} />{" "}
            hook.
          </InfoBox>
        </props.ui.If>

        <p>
          Retrieves the <props.ui.CodeRef x={props.c.Variation}/> assigned to a
          given visitor for a specific feature flag.
        </p>

        <p>
          This method takes a <props.ui.Code x={props.c.Params.VisitorCode}/>{" "}
          and <props.ui.Code x={props.c.Params.FeatureKey}/> as mandatory
          arguments. The{" "}
          <props.ui.Code x={props.c.GetVariation.Params.Track.Name}/> argument
          is optional and defaults to <props.ui.Code x={props.c.Common.True}/>.
        </p>

        <p>
          It returns the assigned <props.ui.Code x={props.c.Variation}/> for the
          visitor. If the visitor is not associated with any feature flag rules,
          the method returns the default <props.ui.Code x={props.c.Variation}/>{" "}
          for the given feature flag.
        </p>

        <p>
          Ensure that proper error handling is implemented in your code to
          manage potential exceptions.
        </p>

        <NoteBox>
          The default variation refers to the variation assigned to a visitor
          when they do not match any predefined delivery rules for a feature
          flag. In other words, it is the fallback variation applied to all
          users who are not targeted by specific rules. It&apos;s represented as
          the variation in the &quot;Then, for everyone else...&quot; section in a
          management interface.
        </NoteBox>
      </>
    );
  }

  if (props.sec === "arguments") {
    return (
      <>
        <props.ui.If c={props.c.IsServer}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <props.ui.Text x={props.c.Params.VisitorCode}/> <em>(required)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.String}/>
                </td>
                <td>
                  <props.ui.Text x={props.shared.Params.VisitorCode}/>
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  <props.ui.Text x={props.c.Params.FeatureKey}/> <em>(required)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.String}/>
                </td>
                <td>
                  <props.ui.Text x={props.shared.Params.FeatureKey}/>
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  <props.ui.Text x={props.c.GetVariation.Params.Track.Name}/> <em>(optional)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.Bool}/>
                </td>
                <td>
                  An optional parameter to enable or disable tracking of the
                  feature evaluation.
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.True}/>
                </td>
              </tr>
            </tbody>
          </table>
        </props.ui.If>

        <props.ui.If c={props.c.IsClient}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <props.ui.Text x={props.c.Params.FeatureKey}/> <em>(required)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.String}/>
                </td>
                <td>
                  <props.ui.Text x={props.shared.Params.FeatureKey}/>
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  <props.ui.Text x={props.c.GetVariation.Params.Track.Name}/> <em>(optional)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.Bool}/>
                </td>
                <td>
                  An optional parameter to enable or disable tracking of the
                  feature evaluation.
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.True}/>
                </td>
              </tr>
            </tbody>
          </table>
        </props.ui.If>
      </>
    );
  }

  if (props.sec === "return_value") {
    return (
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <props.ui.Code x={props.c.GetVariation.Return}/>
            </td>
            <td>
              An assigned <props.ui.CodeRef x={props.c.Variation}/> to a given
              visitor for a specific feature flag.
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  if (props.sec === "exceptions") {
    return (
      <>
        <props.ui.If c={props.c.IsServer}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <props.ui.Code x={props.c.Exceptions.VisitorCodeInvalid}/>
                </td>
                <td>
                  <props.ui.Text x={props.shared.Exceptions.VisitorCodeInvalid}/>
                </td>
              </tr>
              <tr>
                <td>
                  <props.ui.Code x={props.c.Exceptions.FeatureNotFound}/>
                </td>
                <td>
                  <props.ui.Text x={props.shared.Exceptions.FeatureNotFound}/>
                </td>
              </tr>
              <tr>
                <td>
                  <props.ui.Code x={props.c.Exceptions.FeatureEnvironmentDisabled}/>
                </td>
                <td>
                  <props.ui.Text x={props.shared.Exceptions.FeatureEnvironmentDisabled}/>
                </td>
              </tr>
            </tbody>
          </table>
        </props.ui.If>

        <props.ui.If c={props.c.IsClient}>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <props.ui.Code x={props.c.Exceptions.SdkNotReady}/>
                </td>
                <td>
                  <props.ui.Text x={props.shared.Exceptions.SdkNotReady}/>
                </td>
              </tr>
              <tr>
                <td>
                  <props.ui.Code x={props.c.Exceptions.FeatureNotFound}/>
                </td>
                <td>
                  <props.ui.Text x={props.shared.Exceptions.FeatureNotFound}/>
                </td>
              </tr>
              <tr>
                <td>
                  <props.ui.Code x={props.c.Exceptions.FeatureEnvironmentDisabled}/>
                </td>
                <td>
                  <props.ui.Text x={props.shared.Exceptions.FeatureEnvironmentDisabled}/>
                </td>
              </tr>
            </tbody>
          </table>
        </props.ui.If>
      </>
    );
  }

  if (props.sec === "exceptions___js") {
    return (
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <props.ui.Code x={props.c.Exceptions.Initialization}/>
            </td>
            <td>
              Method was executed before the <code>kameleoonClient</code>{" "}
              completed its <props.ui.CodeRef x="initialize" href="#initialize"/>{" "}
              call.
            </td>
          </tr>
          <tr>
            <td>
              <props.ui.Code x={props.c.Exceptions.VisitorCodeEmpty}/>
            </td>
            <td>
              <props.ui.Text x={props.shared.Exceptions.VisitorCodeEmpty}/>
            </td>
          </tr>
          <tr>
            <td>
              <props.ui.Code x={props.c.Exceptions.VisitorCodeMaxLength}/>
            </td>
            <td>
              <props.ui.Text x={props.shared.Exceptions.VisitorCodeMaxLength}/>
            </td>
          </tr>
          <tr>
            <td>
              <props.ui.Code x={props.c.Exceptions.FeatureNotFound}/>
            </td>
            <td>
              <props.ui.Text x={props.shared.Exceptions.FeatureNotFound}/>
            </td>
          </tr>
          <tr>
            <td>
              <props.ui.Code x={props.c.Exceptions.FeatureEnvironmentDisabled}/>
            </td>
            <td>
              <props.ui.Text x={props.shared.Exceptions.FeatureEnvironmentDisabled}/>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default GetVariation;
