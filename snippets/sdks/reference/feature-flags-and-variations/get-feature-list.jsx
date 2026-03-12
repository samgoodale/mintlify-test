import { TipBox } from "/snippets/sdks/plain-callouts.jsx";

const GetFeatureList = (props) => {
  if (props.sec === "tip_get_variations") {
    return (
      <TipBox>
        If you want to iterate over all feature flags and call{" "}
        <props.ui.CodeRef x={props.c.GetVariation}/> on each, use the{" "}
        <props.ui.CodeRef x={props.c.GetVariations}/> method instead.
      </TipBox>
    );
  }

  if (props.sec === "description") {
    return <p>Returns a list of feature flag keys currently available for the SDK.</p>;
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
              <props.ui.Code x={props.c.GetFeatureList.Return}/>
            </td>
            <td>List of feature flag keys</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return null;
};

export default GetFeatureList;
