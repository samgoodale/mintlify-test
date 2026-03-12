import { InfoBox, NoteBox } from "/snippets/sdks/plain-callouts.jsx";

const GetEngineTrackingCode = (props) => {
  if (props.sec === "description") {
    return (
      <>
        <p>
          Kameleoon offers built-in integrations with several analytics
          solutions, including Mixpanel, Google Analytics 4, and Segment. To
          ensure server-side experiments are tracked and analyzed correctly,
          Kameleoon provides the method{" "}
          <props.ui.Code x={props.c.GetEngineTrackingCode}/> to automatically
          send exposure events to the analytics solution. The SDK builds a
          tracking code for the active analytics solution based on the
          experiments the visitor has triggered in the last 5 seconds. Refer to{" "}
          <a href="https://developers.kameleoon.com/core-concepts/hybrid-experimentation/documentation">
            hybrid experimentation
          </a>{" "}
          for more information on implementing this method.
        </p>

        <NoteBox>
          Both the <props.ui.Text x={props.c.Common.SDK}/> SDK and the Kameleoon
          JavaScript tag must be implemented to benefit from this feature.
          Implementation of the Kameleoon asynchronous tag is recommended, which
          can be installed before the closing <code>&lt;/body&gt;</code> tag in
          the HTML page, as it is used only for tracking purposes.
        </NoteBox>

        <InfoBox>
          <p>The following string will be returned:</p>
          <pre>
            <code>{`window.kameleoonQueue = window.kameleoonQueue || [];
window.kameleoonQueue.push(['Experiments.assignVariation', experiment1ID, variation1ID]);
window.kameleoonQueue.push(['Experiments.trigger', experiment1ID, true]);
window.kameleoonQueue.push(['Experiments.assignVariation', experiment2ID, variation2ID]);
window.kameleoonQueue.push(['Experiments.trigger', experiment2ID, true]);`}</code>
          </pre>
          <p>
            Here, <code>experiment1ID</code>, <code>experiment2ID</code> and{" "}
            <code>variation1ID</code>, <code>variation2ID</code> represent the
            specific experiments and variations that users have been assigned
            to.
          </p>
        </InfoBox>
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
              <props.ui.Code x={props.c.Common.String}/>
            </td>
            <td>JavaScript code to be inserted in your page</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default GetEngineTrackingCode;
