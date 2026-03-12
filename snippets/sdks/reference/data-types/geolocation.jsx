import { TipBox } from "/snippets/sdks/plain-callouts.jsx";

const Geolocation = (props) => {
  if (props.sec === "description") {
    return <p><code>Geolocation</code> contains the visitor&apos;s geolocation details.</p>;
  }

  if (props.sec === "arguments") {
    return (
      <>
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
                country <em>(required)</em>
              </td>
              <td>
                <props.ui.Code x={props.c.Common.String}/>
              </td>
              <td>The country of the visitor.</td>
            </tr>
            <tr>
              <td>
                region <em>(optional)</em>
              </td>
              <td>
                <nobr><props.ui.Code x={props.c.Geolocation.Params.Region.Type}/></nobr>
              </td>
              <td>The region of the visitor.</td>
            </tr>
            <tr>
              <td>
                city <em>(optional)</em>
              </td>
              <td>
                <nobr><props.ui.Code x={props.c.Geolocation.Params.City.Type}/></nobr>
              </td>
              <td>The city of the visitor.</td>
            </tr>
            <tr>
              <td>
                <props.ui.Text x={props.c.Geolocation.Params.PostalCode.Name}/> <em>(optional)</em>
              </td>
              <td>
                <nobr><props.ui.Code x={props.c.Geolocation.Params.PostalCode.Type}/></nobr>
              </td>
              <td>The postal code of the visitor.</td>
            </tr>
            <tr>
              <td>
                latitude <em>(optional)</em>
              </td>
              <td>
                <props.ui.Code x={props.c.Geolocation.Params.Latitude.Type}/>
              </td>
              <td>
                The latitude coordinate representing the location of the
                visitor. Coordinate number represents decimal degrees.
              </td>
            </tr>
            <tr>
              <td>
                longitude <em>(optional)</em>
              </td>
              <td>
                <props.ui.Code x={props.c.Geolocation.Params.Longitude.Type}/>
              </td>
              <td>
                The longitude coordinate representing the location of the
                visitor. Coordinate number represents decimal degrees.
              </td>
            </tr>
          </tbody>
        </table>

        <TipBox>
          <ul>
            <li>
              Each visitor can have only one <code>Geolocation</code>. Adding a
              second <code>Geolocation</code> overwrites the first one.
            </li>
          </ul>
        </TipBox>
      </>
    );
  }

  return null;
};

export default Geolocation;
