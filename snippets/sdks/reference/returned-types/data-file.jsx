const DataFile = (props) => {
  if (props.sec === "description") {
    return (
      <>
        <p>
          The <props.ui.Code x={props.c.DataFile}/> contains the SDK
          configuration details.
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
              <props.ui.Text x={props.c.DataFile.Params.FeatureFlags}/>
            </td>
            <td>
              <props.ui.Code x={props.c.DataFile.Params.FeatureFlags.Type}/>
            </td>
            <td>
              A map of <props.ui.CodeRef x={props.c.FeatureFlag}/> objects,
              keyed by feature flag keys.
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default DataFile;
