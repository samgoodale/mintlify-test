const Rule = (props) => {
  if (props.sec === "description") {
    return (
      <>
        <p>
          The <props.ui.Code x={props.c.Rule}/> represents a set of properties
          that define a rule itself, for example, its{" "}
          <props.ui.CodeRef
            x={`${props.c.Variation.Name}s`}
            href={props.c.Variation.Ref}
          />
          .
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
              <props.ui.Text x={props.c.Rule.Params.Variations}/>
            </td>
            <td>
              <props.ui.Code x={props.c.Rule.Params.Variations.Type}/>
            </td>
            <td>
              A map of <props.ui.Code x={props.c.Variation}/> objects, keyed by
              variation keys.
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default Rule;
