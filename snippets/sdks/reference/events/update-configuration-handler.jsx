const UpdateConfigurationHandler = (props) => {
  if (props.sec === "description") {
    return (
      <p>
        The <props.ui.Code x={props.c.UpdateConfigurationHandler}/> method
        allows you to handle the event when configuration has updated data. It
        takes one input parameter,{" "}
        <strong>
          <props.ui.Text x={props.c.UpdateConfigurationHandler.Params.Handler.Name}/>
        </strong>
        . The{" "}
        <props.ui.Text x={props.c.UpdateConfigurationHandler.Params.Handler.Name}/>{" "}
        will be called when the configuration is updated using a real-time
        configuration event.
      </p>
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
              <props.ui.Text x={props.c.UpdateConfigurationHandler.Params.Handler.Name}/>
            </td>
            <td>
              <props.ui.Code x={props.c.UpdateConfigurationHandler.Params.Handler.Type}/>
            </td>
            <td>
              The handler that will be called when the configuration is updated
              using a real-time configuration event.
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default UpdateConfigurationHandler;
