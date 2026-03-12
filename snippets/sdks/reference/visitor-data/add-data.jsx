import { TipBox } from "/snippets/sdks/plain-callouts.jsx";

const AddData = (props) => {
  if (props.sec === "description") {
    return (
      <>
        <p>
          The <props.ui.Code x={props.c.AddData}/> method adds{" "}
          <a href="#data-types">targeting data</a> to storage so other methods
          can use the data to decide whether or not to target the current
          visitor.
        </p>

        <p>
          The <props.ui.Code x={props.c.AddData}/> method does not return any
          value and does not interact with Kameleoon back-end servers on its
          own. Instead, all the declared data is saved for future transmission
          using the <props.ui.CodeRef x={props.c.Flush}/> method. This approach
          reduces the number of server calls made, as the data is typically
          grouped into a single server call that is triggered by the{" "}
          <props.ui.Code x={props.c.Flush}/>.
        </p>

        <p>
          The <props.ui.CodeRef x={props.c.TrackConversion}/> method also sends
          out any previously associated data, just like the{" "}
          <props.ui.Code x={props.c.Flush}/>. The same holds true for{" "}
          <props.ui.CodeRef x={props.c.GetVariation}/> and{" "}
          <props.ui.CodeRef x={props.c.GetVariations}/> methods if an
          experimentation rule is triggered.
        </p>

        <TipBox>
          Each visitor can only have one instance of associated data for most
          data types. However, <props.ui.CodeRef x={props.c.CustomData}/> is an
          exception. Visitors can have one instance of associated{" "}
          <props.ui.Code x={props.c.CustomData}/> per index.
        </TipBox>
      </>
    );
  }

  if (props.sec === "arguments") {
    return (
      <>
        <props.ui.If c={props.c.IsServer}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <props.ui.Text x={props.c.Params.VisitorCode}/> <em>(required)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.String}/>
                </td>
                <td>
                  <props.ui.Text x={props.shared.Params.VisitorCode}/>
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  <props.ui.Text x={props.c.AddData.Params.Track.Name}/> <em>(optional)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.Bool}/>
                </td>
                <td>
                  Specifies whether the added data is eligible for tracking.
                  When set to <props.ui.Code x={props.c.Common.False}/>, the
                  data is stored locally and used only for targeting evaluation;
                  it is not sent to the Kameleoon Data API.
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.True}/>
                </td>
              </tr>
              <tr>
                <td>
                  <props.ui.Text x={props.c.AddData.Params.Data.Name}/> <em>(required)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.AddData.Params.Data.Type}/>
                </td>
                <td>Collection of Kameleoon data types.</td>
                <td />
              </tr>
            </tbody>
          </table>
        </props.ui.If>

        <props.ui.If c={props.c.IsClient}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <props.ui.Text x={props.c.AddData.Params.Track.Name}/> <em>(optional)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.Bool}/>
                </td>
                <td>
                  Specifies whether the added data is eligible for tracking.
                  When set to <props.ui.Code x={props.c.Common.False}/>, the
                  data is stored locally and used only for targeting evaluation;
                  it is not sent to the Kameleoon Data API.
                </td>
                <td>
                  <props.ui.Code x={props.c.Common.True}/>
                </td>
              </tr>
              <tr>
                <td>
                  <props.ui.Text x={props.c.AddData.Params.Data.Name}/> <em>(required)</em>
                </td>
                <td>
                  <props.ui.Code x={props.c.AddData.Params.Data.Type}/>
                </td>
                <td>Collection of Kameleoon data types.</td>
                <td />
              </tr>
            </tbody>
          </table>
        </props.ui.If>
      </>
    );
  }

  if (props.sec === "arguments_track_end") {
    return (
      <props.ui.If c={props.c.IsServer}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <props.ui.Text x={props.c.Params.VisitorCode}/> <em>(required)</em>
              </td>
              <td>
                <props.ui.Code x={props.c.Common.String}/>
              </td>
              <td>
                <props.ui.Text x={props.shared.Params.VisitorCode}/>
              </td>
              <td />
            </tr>
            <tr>
              <td>
                <props.ui.Text x={props.c.AddData.Params.Data.Name}/> <em>(required)</em>
              </td>
              <td>
                <props.ui.Code x={props.c.AddData.Params.Data.Type}/>
              </td>
              <td>Collection of Kameleoon data types.</td>
              <td />
            </tr>
            <tr>
              <td>
                <props.ui.Text x={props.c.AddData.Params.Track.Name}/> <em>(optional)</em>
              </td>
              <td>
                <props.ui.Code x={props.c.Common.Bool}/>
              </td>
              <td>
                Specifies whether the added data is eligible for tracking. When
                set to <props.ui.Code x={props.c.Common.False}/>, the data is
                stored locally and used only for targeting evaluation; it is not
                sent to the Kameleoon Data API.
              </td>
              <td>
                <props.ui.Code x={props.c.Common.True}/>
              </td>
            </tr>
          </tbody>
        </table>
      </props.ui.If>
    );
  }

  if (props.sec === "exceptions") {
    return (
      <>
        <props.ui.If c={props.c.IsServer}>
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
                  <props.ui.Code x={props.c.Exceptions.VisitorCodeInvalid}/>
                </td>
                <td>
                  <props.ui.Text x={props.shared.Exceptions.VisitorCodeInvalid}/>
                </td>
              </tr>
            </tbody>
          </table>
        </props.ui.If>

        <props.ui.If c={props.c.IsFlutter}>
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
                  <props.ui.Code x={props.c.Exceptions.PlatformException}/>
                </td>
                <td>
                  <props.ui.Text x={props.shared.Exceptions.PlatformException}/>
                </td>
              </tr>
            </tbody>
          </table>
        </props.ui.If>
      </>
    );
  }

  return null;
};

export default AddData;
