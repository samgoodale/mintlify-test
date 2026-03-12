const GetVisitorCode = (props) => {
  if (props.sec === "description") {
    return <p>Returns unique visitor code used in SDK.</p>;
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
              <props.ui.Code x={props.c.GetVisitorCode.Return}/>
            </td>
            <td>String representing a unique visitor code used in SDK.</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default GetVisitorCode;
