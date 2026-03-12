import { NoteBox, TipBox } from "/snippets/sdks/plain-callouts.jsx";

const CrossDeviceReconciliation = (props) => {
  if (props.sec === "cross_device_experimentation") {
    return (
      <p>
        To support visitors who access an app from multiple devices, Kameleoon
        allows the synchronization of previously collected visitor data across
        each of the visitor&apos;s devices and reconciliation of their visit
        history across devices through cross-device experimentation. Case
        studies and detailed information on how Kameleoon handles data across
        devices are available in the{" "}
        <a href="/core-concepts/cross-device-experimentation">
          article on cross-device experimentation
        </a>
        .
      </p>
    );
  }

  if (props.sec === "synchronizing_custom_data") {
    return (
      <>
        <p>
          Although custom mapping synchronization is used to align visitor data
          across devices, it is not always necessary. Below are two scenarios
          where custom mapping sync is not required:
        </p>
        <p>
          <strong>Same user ID across devices</strong>
        </p>
        <p>
          If the same user ID is used consistently across all devices,
          synchronization is handled automatically without a custom mapping
          sync. It is enough to call the{" "}
          <props.ui.Code x={props.c.GetRemoteVisitorData}/> method when you want
          to sync the data collected between multiple devices.
        </p>
        <p>
          <strong>Multi-server instances with consistent IDs</strong>
        </p>
        <p>
          In complex setups involving multiple servers, where the same user ID
          is available across servers, synchronization between servers (with{" "}
          <props.ui.Code x={props.c.GetRemoteVisitorData}/>) is sufficient
          without additional custom mapping sync.
        </p>
        <p>
          Customers who need additional data can refer to the{" "}
          <props.ui.CodeRef x={props.c.GetRemoteVisitorData}/> method
          description for further guidance. In the below code, it is assumed
          that the same unique identifier (in this case, the{" "}
          <props.ui.Code x={props.c.Params.VisitorCode}/>, which can also be
          referred to as <code>userId</code>) is used consistently between the
          two devices for accurate data retrieval.
        </p>
        <NoteBox>
          If you want to sync collected data in real time, you need to choose
          the scope <strong>Visitor</strong> for your custom data.
        </NoteBox>
      </>
    );
  }

  if (props.sec === "using_custom_data_session_merging") {
    return (
      <>
        <p>
          <a href="/core-concepts/cross-device-experimentation">
            Cross-device experimentation
          </a>{" "}
          allows for combining a visitor&apos;s history across each of their
          devices. To reconcile visit history, use{" "}
          <props.ui.CodeRef x={props.c.CustomData}/> to provide a unique
          identifier for the visitor.
        </p>
        <p>
          After cross-device reconciliation is enabled, calling{" "}
          <props.ui.CodeRef x={props.c.GetRemoteVisitorData}/> with the
          parameter <code>userId</code> retrieves all known data for a given
          user.
        </p>
        <p>
          Sessions with the same identifier will always be shown the same
          variation in an experiment. In the Visitor view of your
          experiment&apos;s results pages, these sessions will appear as a
          single visitor.
        </p>
        <p>
          The SDK configuration ensures that associated sessions always see the
          same variation of the experiment. However, there are some limitations
          regarding cross-device variation allocation.
        </p>
        <p>
          Follow the <a href="#cross-device-experimentation">activating
          cross-device history reconciliation</a> guide to set up your custom
          data on the Kameleoon platform.
        </p>

        <props.ui.If c={props.c.IsServer}>
          <>
            <p>
              Afterwards, you can use the SDK normally. The following methods
              may be helpful in the context of session merging:
            </p>
            <ul>
              <li>
                <props.ui.Code x={props.c.GetRemoteVisitorData}/> with added{" "}
                <props.ui.CodeRef
                  x={`${props.c.UniqueIdentifier.Name}(${props.c.Common.True})`}
                  href={props.c.UniqueIdentifier.Ref}
                />{" "}
                to retrieve data for all linked visitors.
              </li>
              <li>
                <props.ui.CodeRef x={props.c.TrackConversion}/> or{" "}
                <props.ui.CodeRef x={props.c.Flush}/> with added{" "}
                <props.ui.Code
                  x={`${props.c.UniqueIdentifier.Name}(${props.c.Common.True})`}
                />{" "}
                data to track some data for a specific visitor that is
                associated with another visitor.
              </li>
            </ul>
          </>
        </props.ui.If>

        <props.ui.If c={props.c.IsClient}>
          <>
            <p>
              Afterwards, you can use the SDK normally. The following methods
              may be helpful in the context of session merging:
            </p>
            <ul>
              <li>
                <props.ui.Code x={props.c.GetRemoteVisitorData}/> with passed{" "}
                <props.ui.Code
                  x={`${props.c.KameleoonClientConfig.IsUniqueIdentifier.Name}=${props.c.Common.True}`}
                />{" "}
                to <props.ui.CodeRef x={props.c.KameleoonClientConfig}/> to
                retrieve data for all linked visitors.
              </li>
              <li>
                <props.ui.CodeRef x={props.c.TrackConversion}/> or{" "}
                <props.ui.CodeRef x={props.c.Flush}/> with passed{" "}
                <props.ui.Code
                  x={`${props.c.KameleoonClientConfig.IsUniqueIdentifier.Name}=${props.c.Common.True}`}
                />{" "}
                to <props.ui.Code x={props.c.KameleoonClientConfig}/> to track
                some data for a specific visitor that is associated with another
                visitor.
              </li>
            </ul>
          </>
        </props.ui.If>

        <TipBox>
          As the custom data you use as the identifier must be set to{" "}
          <strong>Visitor scope</strong>, you need to use{" "}
          <a href="/core-concepts/cross-device-experimentation">
            cross-device custom data synchronization
          </a>{" "}
          to retrieve the identifier with the{" "}
          <props.ui.CodeRef x={props.c.GetRemoteVisitorData}/> method on each
          device.
        </TipBox>

        <p>Here&apos;s an example of how to use custom data for session merging.</p>
      </>
    );
  }

  if (props.sec === "cross_device_visitor_code") {
    return (
      <>
        <props.ui.If c={props.c.IsServer}>
          <p>
            In this example, the application has a login page. Since the user
            ID is unknown at the moment of login, an anonymous visitor
            identifier generated by the{" "}
            <props.ui.CodeRef x={props.c.GetVisitorCode}/> method is used.
            After the user logs in, the anonymous visitor is associated with the
            user ID and used as a unique identifier for the visitor.
          </p>
        </props.ui.If>
        <props.ui.If c={props.c.IsClient}>
          <p>
            In this example, the application has a login page. Since the user
            ID is unknown at the moment of login, an anonymous visitor
            automatically generated by the SDK is used. The visitor code can be
            retrieved with the <props.ui.CodeRef x={props.c.GetVisitorCode}/>{" "}
            method. After the user logs in, the anonymous visitor is associated
            with the user ID and used as a unique identifier for the visitor.
          </p>
        </props.ui.If>
      </>
    );
  }

  return null;
};

export default CrossDeviceReconciliation;
