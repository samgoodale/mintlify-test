import { NoteBox } from "/snippets/sdks/plain-callouts.jsx";

const TrackConversion = (props) => {
  if (props.sec === "description") {
    return (
      <>
        <ul><li><em>📨 Sends Tracking Data to Kameleoon</em></li></ul>
        <props.ui.If c={props.c.IsServer}>
          <>
            <p>
              Use this method to track a conversion for a specific{" "}
              <a href="https://help.kameleoon.com/create-new-goal/">goal</a>{" "}
              and user. This method requires{" "}
              <props.ui.Code x={props.c.Params.VisitorCode}/> and{" "}
              <props.ui.Code x={props.c.TrackConversion.Params.GoalId}/>.
            </p>
            <p>
              The <props.ui.Code x={props.c.TrackConversion}/> method
              doesn&apos;t return any value. This method is non-blocking as the
              server call is made asynchronously.
            </p>
            <NoteBox>
              <p>
                The parameter{" "}
                <props.ui.Code x={props.c.TrackConversion.Params.IsUniqueIdentifier}/> is
                deprecated. Please use{" "}
                <props.ui.CodeRef x={props.c.UniqueIdentifier}/> instead.
              </p>
              <p>
                It can still be useful in edge-case scenarios where you cannot
                access the anonymous visitor code.
              </p>
            </NoteBox>
          </>
        </props.ui.If>
        <props.ui.If c={props.c.IsClient}>
          <>
            <p>
              Use this method to track conversions. This method requires{" "}
              <props.ui.Code x={props.c.TrackConversion.Params.GoalId}/> to
              track conversion on this particular goal.
            </p>
            <p>
              The <props.ui.Code x={props.c.TrackConversion}/> method
              doesn&apos;t return any value. This method is non-blocking as the
              server call is made asynchronously.
            </p>
          </>
        </props.ui.If>
      </>
    );
  }

  if (props.sec === "description___js" || props.sec === "description___js_old") {
    return (
      <>
        <ul><li><em>📨 Sends Tracking Data to Kameleoon</em></li></ul>
        <props.ui.If c={props.c.IsReact}>
          <p>
            The <props.ui.Code x={props.c.TrackConversion}/> function, used with
            the <props.ui.Code x={props.c.Hook.UseData}/> hook, creates and adds{" "}
            <props.ui.CodeRef x={props.c.Conversion}/> data to the visitor and
            executes <props.ui.Code x={props.c.Flush}/>.
          </p>
        </props.ui.If>
        <props.ui.If c={props.c.IsJs}>
          <p>
            Use this method to track a conversion for a specific goal and user.
            This method requires <props.ui.Code x={props.c.Params.VisitorCode}/>{" "}
            and <props.ui.Code x={props.c.TrackConversion.Params.GoalId}/>.
          </p>
          <p>
            The <props.ui.Code x={props.c.TrackConversion}/> method
            doesn&apos;t return any value. This method is non-blocking as the
            server call is made asynchronously.
          </p>
        </props.ui.If>
        {props.sec === "description___js_old" ? (
          <>
            <p>
              If you specify a <props.ui.Code x={props.c.Params.VisitorCode}/> and set{" "}
              <props.ui.Code x={props.c.TrackConversion.Params.IsUniqueIdentifier}/> to{" "}
              <props.ui.Code x={props.c.Common.True}/>, the method uses it as
              the unique visitor identifier.
            </p>
            <NoteBox>
              The <props.ui.Code x={props.c.TrackConversion.Params.IsUniqueIdentifier}/> can
              also be useful in edge-case scenarios.
            </NoteBox>
          </>
        ) : null}
      </>
    );
  }

  if (
    props.sec === "arguments" ||
    props.sec === "arguments___js" ||
    props.sec === "arguments___js_old"
  ) {
    if (props.sec === "arguments") {
      return (
        <>
          <props.ui.If c={props.c.IsServer}>
            <table><thead><tr><th>Name</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody>
              <tr><td><props.ui.Text x={props.c.Params.VisitorCode}/> <em>(required)</em></td><td><props.ui.Code x={props.c.Common.String}/></td><td><props.ui.Text x={props.shared.Params.VisitorCode}/></td><td /></tr>
              <tr><td><props.ui.Text x={props.c.TrackConversion.Params.GoalId.Name}/> <em>(required)</em></td><td><props.ui.Code x={props.c.Common.Int}/></td><td>ID of the goal.</td><td /></tr>
              <tr><td><props.ui.Text x={props.c.TrackConversion.Params.Revenue.Name}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.TrackConversion.Params.Revenue.Type}/></td><td>Revenue of the conversion.</td><td><code>0</code></td></tr>
              <tr><td><props.ui.Text x={props.c.TrackConversion.Params.Negative.Name}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.Common.Bool}/></td><td>Defines if the revenue is positive or negative.</td><td><props.ui.Code x={props.c.Common.False}/></td></tr>
              <tr><td><props.ui.Text x={props.c.TrackConversion.Params.Metadata.Name}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.TrackConversion.Params.Metadata.Type}/></td><td>Lets you set specific values for custom data that have been defined as metadata for the goal.</td><td><props.ui.Code x={props.c.TrackConversion.Params.Metadata.DefaultValue}/></td></tr>
              <tr><td><props.ui.Text x={props.c.TrackConversion.Params.IsUniqueIdentifier.Name}/> <em>(deprecated)</em></td><td><props.ui.Code x={props.c.Common.Bool}/></td><td>An optional parameter for specifying if the visitor code is a unique identifier.</td><td><props.ui.Code x={props.c.Common.False}/></td></tr>
            </tbody></table>
          </props.ui.If>
          <props.ui.If c={props.c.IsClient}>
            <table><thead><tr><th>Name</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody>
              <tr><td><props.ui.Text x={props.c.TrackConversion.Params.GoalId.Name}/> <em>(required)</em></td><td><props.ui.Code x={props.c.Common.Int}/></td><td>ID of the goal.</td><td /></tr>
              <tr><td><props.ui.Text x={props.c.TrackConversion.Params.Revenue.Name}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.Common.Float}/></td><td>Revenue of the conversion.</td><td><code>0</code></td></tr>
              <tr><td><props.ui.Text x={props.c.TrackConversion.Params.Negative.Name}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.Common.Bool}/></td><td>Defines if the revenue is positive or negative.</td><td><props.ui.Code x={props.c.Common.False}/></td></tr>
              <tr><td><props.ui.Text x={props.c.TrackConversion.Params.Metadata.Name}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.TrackConversion.Params.Metadata.Type}/></td><td>Metadata of the conversion.</td><td><props.ui.Code x={props.c.TrackConversion.Params.Metadata.DefaultValue}/></td></tr>
            </tbody></table>
          </props.ui.If>
        </>
      );
    }
    if (props.sec === "arguments___js") {
      return (
        <table><thead><tr><th>Name</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody>
          <tr><td><props.ui.Text x={props.c.Params.VisitorCode}/> <em>(required)</em></td><td><props.ui.Code x={props.c.Common.String}/></td><td><props.ui.Text x={props.shared.Params.VisitorCode}/></td><td /></tr>
          <tr><td><props.ui.Text x={props.c.TrackConversion.Params.GoalId.Name}/> <em>(required)</em></td><td><props.ui.Code x={props.c.Common.Int}/></td><td>ID of the goal.</td><td /></tr>
          <tr><td><props.ui.Text x={props.c.TrackConversion.Params.Negative.Name}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.Common.Bool}/></td><td>Defines if the revenue is positive or negative.</td><td><props.ui.Code x={props.c.Common.False}/></td></tr>
          <tr><td><props.ui.Text x={props.c.TrackConversion.Params.Revenue.Name}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.TrackConversion.Params.Revenue.Type}/></td><td>Revenue of the conversion.</td><td><code>0</code></td></tr>
          <tr><td><props.ui.Text x={props.c.TrackConversion.Params.Metadata.Name}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.TrackConversion.Params.Metadata.Type}/></td><td>Metadata of the conversion.</td><td><props.ui.Code x={props.c.TrackConversion.Params.Metadata.DefaultValue}/></td></tr>
        </tbody></table>
      );
    }
    return (
      <table><thead><tr><th>Name</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody>
        <tr><td><props.ui.Text x={props.c.Params.VisitorCode}/> <em>(required)</em></td><td><props.ui.Code x={props.c.Common.String}/></td><td><props.ui.Text x={props.shared.Params.VisitorCode}/></td><td /></tr>
        <tr><td><props.ui.Text x={props.c.TrackConversion.Params.GoalId.Name}/> <em>(required)</em></td><td><props.ui.Code x={props.c.Common.Int}/></td><td>ID of the goal.</td><td /></tr>
        <tr><td><props.ui.Text x={props.c.TrackConversion.Params.Revenue.Name}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.TrackConversion.Params.Revenue.Type}/></td><td>Revenue of the conversion.</td><td><code>0</code></td></tr>
        <tr><td><props.ui.Text x={props.c.TrackConversion.Params.IsUniqueIdentifier.Name}/> <em>(optional)</em></td><td><props.ui.Code x={props.c.Common.Bool}/></td><td>An optional parameter for specifying if the visitor code is a unique identifier.</td><td><props.ui.Code x={props.c.Common.False}/></td></tr>
      </tbody></table>
    );
  }

  if (props.sec === "note_metadata") {
    return (
      <>
        <p>
          Support for <props.ui.Text x={props.c.TrackConversion.Params.Metadata.Name}/> in
          conversions is currently <strong>only available to customers
          participating in the beta program</strong>.
        </p>
        <p>
          If the parameter is provided, Kameleoon will use these specified
          values for the current conversion instead of what was previously
          collected using the <props.ui.CodeRef x={props.c.AddData}/> method.
        </p>
        <p>
          Kameleoon will only consider the metadata values that are explicitly
          passed as parameters to the{" "}
          <props.ui.Code x={props.c.TrackConversion}/> method.
        </p>
        <p>
          In the example below, Kameleoon will associate the conversion only
          with the custom data value explicitly provided as a parameter.
        </p>
      </>
    );
  }

  if (props.sec === "exceptions") {
    return (
      <>
        <props.ui.If c={props.c.IsServer}>
          <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
            <tr><td><props.ui.Code x={props.c.Exceptions.VisitorCodeInvalid}/></td><td><props.ui.Text x={props.shared.Exceptions.VisitorCodeInvalid}/></td></tr>
          </tbody></table>
        </props.ui.If>
        <props.ui.If c={props.c.IsFlutter}>
          <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
            <tr><td><props.ui.Code x={props.c.Exceptions.PlatformException}/></td><td><props.ui.Text x={props.shared.Exceptions.PlatformException}/></td></tr>
          </tbody></table>
        </props.ui.If>
      </>
    );
  }

  if (props.sec === "exceptions___js") {
    return (
      <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
        <tr><td><props.ui.Code x={props.c.Exceptions.VisitorCodeMaxLength}/></td><td><props.ui.Text x={props.shared.Exceptions.VisitorCodeMaxLength}/></td></tr>
        <tr><td><props.ui.Code x={props.c.Exceptions.VisitorCodeEmpty}/></td><td><props.ui.Text x={props.shared.Exceptions.VisitorCodeEmpty}/></td></tr>
        <tr><td><props.ui.Code x={props.c.Exceptions.StorageWrite}/></td><td><props.ui.Text x={props.shared.Exceptions.StorageWrite}/></td></tr>
      </tbody></table>
    );
  }

  return null;
};

export default TrackConversion;
