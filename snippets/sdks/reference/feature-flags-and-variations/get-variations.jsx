import { InfoBox, NoteBox } from "/snippets/sdks/plain-callouts.jsx";

const GetVariations = (props) => {
  if (props.sec === "description") {
    return (
      <>
        <ul>
          <li>
            <em>
              📨 Sends Tracking Data to Kameleoon (depending on the{" "}
              <props.ui.Code x={props.c.GetVariations.Params.Track.Name}/> parameter)
            </em>
          </li>
        </ul>

        <p>
          Retrieves a map of <props.ui.CodeRef x={props.c.Variation}/> objects
          assigned to a given visitor across all feature flags.
        </p>

        <props.ui.If c={props.c.IsServer}>
          <p>
            This method iterates over all available feature flags and returns
            the assigned <props.ui.Code x={props.c.Variation}/> for each flag
            associated with the specified visitor. It takes{" "}
            <props.ui.Code x={props.c.Params.VisitorCode}/> as a mandatory
            argument, while{" "}
            <props.ui.Code x={props.c.GetVariations.Params.OnlyActive.Name}/> and{" "}
            <props.ui.Code x={props.c.GetVariations.Params.Track.Name}/> are
            optional.
          </p>
        </props.ui.If>

        <props.ui.If c={props.c.IsClient}>
          <p>
            This method iterates over all available feature flags and returns
            the assigned <props.ui.Code x={props.c.Variation}/> for each flag
            associated with the specified visitor. It takes{" "}
            <props.ui.Code x={props.c.GetVariations.Params.OnlyActive.Name}/> and{" "}
            <props.ui.Code x={props.c.GetVariations.Params.Track.Name}/> as
            optional arguments.
          </p>
        </props.ui.If>

        <ul>
          <li>
            If <props.ui.Code x={props.c.GetVariations.Params.OnlyActive.Name}/> is set
            to <props.ui.Code x={props.c.Common.True}/>, the method{" "}
            <props.ui.Code x={props.c.GetVariations}/> will return feature flags
            variations provided the user is not bucketed with the{" "}
            <code>off</code> variation.
          </li>
          <li>
            The <props.ui.Code x={props.c.GetVariations.Params.Track.Name}/> parameter
            controls whether or not the method will track the variation
            assignments. By default, it is set to{" "}
            <props.ui.Code x={props.c.Common.True}/>. If set to{" "}
            <props.ui.Code x={props.c.Common.False}/>, the tracking will be
            disabled.
          </li>
        </ul>

        <p>
          The returned map consists of feature flag keys as keys and their
          corresponding <props.ui.Code x={props.c.Variation}/> as values. If no
          variation is assigned for a feature flag, the method returns the
          default <props.ui.Code x={props.c.Variation}/> for that flag.
        </p>

        <p>
          Proper error handling should be implemented to manage potential
          exceptions.
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
          Retrieves a map of <props.ui.CodeRef x={props.c.Variation}/> objects
          assigned to a given visitor across all feature flags.
        </p>

        <p>
          This method iterates over all available feature flags and returns the
          assigned <props.ui.Code x={props.c.Variation}/> for each flag
          associated with the specified visitor. It takes{" "}
          <props.ui.Code x={props.c.Params.VisitorCode}/> as a mandatory
          argument, while{" "}
          <props.ui.Code x={props.c.GetVariations.Params.OnlyActive.Name}/> and{" "}
          <props.ui.Code x={props.c.GetVariations.Params.Track.Name}/> are
          optional.
        </p>

        <ul>
          <li>
            If <props.ui.Code x={props.c.GetVariations.Params.OnlyActive.Name}/> is set
            to <props.ui.Code x={props.c.Common.True}/>, the method{" "}
            <props.ui.Code x={props.c.GetVariations}/> will return feature flags
            variations provided the user is not bucketed with the{" "}
            <code>off</code> variation.
          </li>
          <li>
            The <props.ui.Code x={props.c.GetVariations.Params.Track.Name}/> parameter
            controls whether or not the method will track the variation
            assignments. By default, it is set to{" "}
            <props.ui.Code x={props.c.Common.True}/>. If set to{" "}
            <props.ui.Code x={props.c.Common.False}/>, the tracking will be
            disabled.
          </li>
        </ul>

        <p>
          The returned map consists of feature flag keys as keys and their
          corresponding <props.ui.Code x={props.c.Variation}/> as values. If no
          variation is assigned for a feature flag, the method returns the
          default <props.ui.Code x={props.c.Variation}/> for that flag.
        </p>

        <p>
          Proper error handling should be implemented to manage potential
          exceptions.
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
                  <props.ui.Text x={props.c.GetVariations.Params.OnlyActive.Name}/> <em>(optional)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.Bool}/>
                </td>
                <td>
                  An optional parameter indicating whether to return variations
                  for active (<props.ui.Code x={props.c.Common.True}/>) or all (
                  <props.ui.Code x={props.c.Common.False}/>) feature flags.
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.False}/>
                </td>
              </tr>
              <tr>
                <td>
                  <props.ui.Text x={props.c.GetVariations.Params.Track.Name}/> <em>(optional)</em>
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
                  <props.ui.Text x={props.c.GetVariations.Params.OnlyActive.Name}/> <em>(optional)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.Bool}/>
                </td>
                <td>
                  An optional parameter indicating whether to return variations
                  for active (<props.ui.Code x={props.c.Common.True}/>) or all (
                  <props.ui.Code x={props.c.Common.False}/>) feature flags.
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.False}/>
                </td>
              </tr>
              <tr>
                <td>
                  <props.ui.Text x={props.c.GetVariations.Params.Track.Name}/> <em>(optional)</em>
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
              <props.ui.Code x={props.c.GetVariations.Return}/>
            </td>
            <td>
              Map that contains the assigned <props.ui.CodeRef x={props.c.Variation}/>{" "}
              objects of the feature flags using the keys of the corresponding
              features.
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
        </tbody>
      </table>
    );
  }

  return null;
};

export default GetVariations;
