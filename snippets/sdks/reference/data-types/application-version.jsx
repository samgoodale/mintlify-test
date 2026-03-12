import { TipBox } from "/snippets/sdks/plain-callouts.jsx";

const ApplicationVersion = (props) => {
  if (props.sec === "description") {
    return (
      <>
        <p>
          <props.ui.Code x={props.c.ApplicationVersion}/> represents the
          semantic version number of your application.
        </p>
        <TipBox>
          A <strong>visitor</strong> can have only one{" "}
          <props.ui.Code x={props.c.ApplicationVersion}/>. Adding a second
          instance will overwrite the first one.
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              version <em>(optional)</em>
            </td>
            <td>
              <props.ui.Code x={props.c.Common.String}/>
            </td>
            <td>
              The mobile application version. This field must follow semantic
              versioning. Accepted formats are <code>major</code>,{" "}
              <code>major.minor</code>, or <code>major.minor.patch</code>.
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default ApplicationVersion;
