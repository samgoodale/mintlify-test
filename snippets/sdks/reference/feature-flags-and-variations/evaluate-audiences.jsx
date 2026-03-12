export const EvaluateAudiences = (props) => {
  if (props.sec === "description") {
    return (
      <>
        <ul>
          <li>
            <em>📨 Sends Tracking Data to Kameleoon</em>
          </li>
        </ul>

        <p>
          This method evaluates visitors against all available Audiences
          Explorer segments and tracks those who match.
        </p>

        <p>
          <props.ui.Code x={props.c.EvaluateAudiences.Name}/> should be called{" "}
          <strong>after all relevant visitor data has been set or updated</strong>,
          and <strong>just before</strong> getting a feature variation or
          checking a feature flag. This approach ensures that the visitor is
          evaluated against the most current data available, allowing for
          accurate audience assignment based on all criteria.
        </p>

        <p>
          After calling this method, you can perform a detailed analysis of
          segment performance in Audiences Explorer.
        </p>
      </>
    );
  }

  if (props.sec === "arguments") {
    return (
      <>
        <props.ui.If c={!props.c.EvaluateAudiences.Params?.Timeout}>
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
                  <props.ui.Text x={props.c.Params.VisitorCode}/> <em>(required)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.String}/>
                </td>
                <td>
                  <props.ui.Text x={props.shared.Params.VisitorCode}/>
                </td>
              </tr>
            </tbody>
          </table>
        </props.ui.If>

        <props.ui.If c={props.c.EvaluateAudiences.Params?.Timeout}>
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
                  <props.ui.Text x={props.c.EvaluateAudiences.Params?.Timeout}/> <em>(optional)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.EvaluateAudiences.Params?.Timeout?.Type}/>
                </td>
                <td>
                  Timeout (in milliseconds). This parameter specifies the maximum
                  amount of time the method can block to wait for a result. If a
                  timeout value is not provided, the SDK uses the{" "}
                  <props.ui.CodeRef
                    x="default_timeout"
                    href={props.c.KameleoonClientConfig.Ref}
                  />{" "}
                  specified in your configuration.
                </td>
                <td>
                  <props.ui.Code x={props.c.EvaluateAudiences.Params?.Timeout?.Default}/>
                </td>
              </tr>
            </tbody>
          </table>
        </props.ui.If>
      </>
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

        <props.ui.If c={!props.c.AreErrorsReturnedAsValues}>
          <div>
            <p>
              In most cases, only the basic error,{" "}
              <props.ui.Code x={props.c.Exceptions.Kameleoon}/>, needs to be
              handled, as demonstrated in the example. However, if different
              types of errors require a response, handle each one separately
              based on specific requirements.
            </p>
            <p>
              For enhanced reliability, general language errors can also be
              handled by including{" "}
              <props.ui.Code x={props.c.Exceptions.Language}/>.
            </p>
          </div>
        </props.ui.If>
      </>
    );
  }

  if (props.sec === "exceptions___js") {
    return (
      <>
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

        <props.ui.If c={!props.c.AreErrorsReturnedAsValues}>
          <div>
            <p>
              In most cases, only the basic error,{" "}
              <props.ui.Code x={props.c.Exceptions.Kameleoon}/>, needs to be
              handled, as demonstrated in the example. However, if different
              types of errors require a response, handle each one separately
              based on specific requirements.
            </p>
            <p>
              For enhanced reliability, general language errors can also be
              handled by including{" "}
              <props.ui.Code x={props.c.Exceptions.Language}/>.
            </p>
          </div>
        </props.ui.If>
      </>
    );
  }

  return null;
};

export default EvaluateAudiences;
