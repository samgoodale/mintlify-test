import { TipBox } from "/snippets/sdks/plain-callouts.jsx";

const Conversion = (props) => {
  if (props.sec === "description") {
    return (
      <>
        <p>
          The <props.ui.Code x={props.c.Conversion}/> data set stored here can
          be used to filter experiment and personalization reports by any goal
          associated with it.
        </p>
        <TipBox>
          <ul>
            <li>
              Each visitor can have multiple{" "}
              <props.ui.Code x={props.c.Conversion}/> objects.
            </li>
            <li>
              You can find the{" "}
              <props.ui.Code x={props.c.Conversion.Params.GoalId}/> in the
              Kameleoon app.
            </li>
          </ul>
        </TipBox>
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
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <props.ui.Text x={props.c.Conversion.Params.GoalId.Name}/> <em>(required)</em>
            </td>
            <td>
              <props.ui.Code x={props.c.Common.Int}/>
            </td>
            <td>ID of the goal.</td>
            <td />
          </tr>
          <tr>
            <td>
              <props.ui.Text x={props.c.Conversion.Params.Revenue.Name}/> <em>(optional)</em>
            </td>
            <td>
              <props.ui.Code x={props.c.Conversion.Params.Revenue.Type}/>
            </td>
            <td>Revenue of the conversion</td>
            <td>
              <code>0</code>
            </td>
          </tr>
          <tr>
            <td>
              <props.ui.Text x={props.c.Conversion.Params.Negative.Name}/> <em>(optional)</em>
            </td>
            <td>
              <props.ui.Code x={props.c.Common.Bool}/>
            </td>
            <td>Defines if the revenue is positive or negative.</td>
            <td>
              <props.ui.Code x={props.c.Common.False}/>
            </td>
          </tr>
          <tr>
            <td>
              <props.ui.Text x={props.c.Conversion.Params.Metadata.Name}/> <em>(optional)</em>
            </td>
            <td>
              <props.ui.Code x={props.c.Conversion.Params.Metadata.Type}/>
            </td>
            <td>Metadata of the conversion.</td>
            <td>
              <props.ui.Code x={props.c.Conversion.Params.Metadata.DefaultValue}/>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default Conversion;
