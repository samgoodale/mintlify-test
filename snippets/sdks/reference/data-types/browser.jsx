const Browser = (props) => {
  if (props.sec === "description") {
    return (
      <p>
        The <props.ui.Code x={props.c.Browser}/> data set stored here can be
        used to filter experiment and personalization reports by any value
        associated with it.
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
              <props.ui.Text x={props.c.Browser.Params.BrowserType.Name}/>{" "}
              <em>(required)</em>
            </td>
            <td>
              <props.ui.Code x={props.c.Browser.Params.BrowserType.Type}/>
            </td>
            <td>
              List of browsers:{" "}
              <props.ui.Code x={props.c.Browser.Params.BrowserType.Chrome}/>,{" "}
              <props.ui.Code x={props.c.Browser.Params.BrowserType.IE}/>,{" "}
              <props.ui.Code x={props.c.Browser.Params.BrowserType.Firefox}/>,{" "}
              <props.ui.Code x={props.c.Browser.Params.BrowserType.Safari}/>,{" "}
              <props.ui.Code x={props.c.Browser.Params.BrowserType.Opera}/>,{" "}
              <props.ui.Code x={props.c.Browser.Params.BrowserType.Other}/>.
            </td>
          </tr>
          <tr>
            <td>
              version <em>(optional)</em>
            </td>
            <td>
              <props.ui.Code x={props.c.Browser.Params.Version.Type}/>
            </td>
            <td>
              Version of the browser, floating point number represents major and
              minor version of the browser
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default Browser;
