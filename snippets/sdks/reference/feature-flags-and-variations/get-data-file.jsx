import { TipBox } from "/snippets/sdks/plain-callouts.jsx";

const GetDataFile = (props) => {
  if (props.sec === "tip_qa") {
    return (
      <TipBox>
        To evaluate all feature flags, use{" "}
        <props.ui.CodeRef x={props.c.GetVariations}/>. This method is more
        efficient than calling <props.ui.Code x={props.c.DataFile}/> and
        iterating through flags with <code>getVariation()</code>.
      </TipBox>
    );
  }

  if (props.sec === "description") {
    return (
      <p>
        Returns the current SDK configuration as a{" "}
        <props.ui.CodeRef x={props.c.DataFile}/> object.
      </p>
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
              <props.ui.CodeRef x={props.c.DataFile}/>
            </td>
            <td>The data file containing the SDK configuration.</td>
          </tr>
        </tbody>
      </table>
    );
  }

  if (props.sec === "exceptions") {
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
              <props.ui.Code x={props.c.Exceptions.SdkNotReady}/>
            </td>
            <td>
              <props.ui.Text x={props.shared.Exceptions.SdkNotReady}/>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default GetDataFile;
