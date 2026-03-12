import { NoteBox } from "/snippets/sdks/plain-callouts.jsx";

const ActivatingAFeatureFlag = (props) => {
  if (props.sec === "assigning_a_unique_id_to_a_user") {
    return (
      <>
        <p>
          To assign a unique ID to a user, you can use the{" "}
          <props.ui.CodeRef x={props.c.GetVisitorCode}/> method. If a{" "}
          <strong>visitor code</strong> doesn&apos;t exist, the method generates
          a random unique ID or uses a{" "}
          <props.ui.Code x={props.c.GetVisitorCode.Params.DefaultVisitorCode.Name}/> that
          you would have generated. The ID is then set in a response headers
          cookie.
        </p>
        <p>
          If you are using Kameleoon in{" "}
          <a href="https://developers.kameleoon.com/core-concepts/hybrid-experimentation/">
            Hybrid mode
          </a>
          , calling the <props.ui.Code x={props.c.GetVisitorCode}/> method
          ensures that the unique ID (<strong>visitor code</strong>) is shared
          between the application file <code>engine.js</code> and the SDK.
        </p>
      </>
    );
  }

  if (
    props.sec === "retrieving_a_feature_flag_configuration___default" ||
    props.sec === "retrieving_a_feature_flag_configuration___cron_job_interval_tracking" ||
    props.sec === "retrieving_a_feature_flag_configuration___flutter"
  ) {
    const trackingInterval =
      props.sec === "retrieving_a_feature_flag_configuration___cron_job_interval_tracking"
        ? "one of the next tracking request, which is automatically performed by the cron job. By default, its interval is 1 minute."
        : props.sec === "retrieving_a_feature_flag_configuration___flutter"
          ? "the next tracking request, which is automatically triggered based on the SDK’s tracking interval configuration. By default, this interval is set to 1000 milliseconds (1 second)."
          : "the next tracking request, which is automatically triggered based on the SDK’s tracking interval configuration. By default, this interval is set to 1000 milliseconds (1 second).";

    return (
      <>
        <p>
          To implement a feature flag in your code, you must first create the
          feature flag in your Kameleoon account.
        </p>
        <p>
          To determine the status or variation of a feature flag for a specific
          user, you should use the <props.ui.CodeRef x={props.c.GetVariation}/>{" "}
          or <props.ui.CodeRef x={props.c.IsFeatureActive}/> method to retrieve
          the configuration based on the{" "}
          <props.ui.Code x={props.c.Params.FeatureKey}/>.
        </p>
        <p>
          The <props.ui.Code x={props.c.GetVariation}/> method handles both
          simple feature flags with ON/OFF states and more complex flags with
          multiple variations. The method retrieves the appropriate variation
          for the user by checking the feature rules, assigning the variation,
          and returning it based on the{" "}
          <props.ui.Code x={props.c.Params.FeatureKey}/> and{" "}
          <props.ui.Code x={props.c.Params.VisitorCode}/>.
        </p>
        <p>
          The <props.ui.Code x={props.c.IsFeatureActive}/> method can be used
          if you want to retrieve the configuration of a simple feature flag
          that has only an ON or OFF state.
        </p>
        <p>
          If your feature flag has associated variables,{" "}
          <props.ui.Code x={props.c.GetVariation}/> also enables you to access
          the <props.ui.CodeRef x={props.c.Variation}/> object. When{" "}
          <props.ui.Code
            x={`${props.c.GetVariation.Params.Track.Name}=${props.c.Common.True}`}
          />
          , the SDK will send the exposure event to the specified experiment on{" "}
          {trackingInterval}
        </p>
        <p>
          The <props.ui.Code x={props.c.GetVariation}/> method allows you to
          control whether tracking is done. If{" "}
          <props.ui.Code
            x={`${props.c.GetVariation.Params.Track.Name}=${props.c.Common.False}`}
          />
          , no exposure events will be sent by the SDK. This is useful when
          using <props.ui.Code x={props.c.GetVariations}/> without triggering
          any tracking events.
        </p>
      </>
    );
  }

  if (
    props.sec === "adding_data_points_to_target_a_user_or_filter_breakdown_visits_in_reports___server" ||
    props.sec === "adding_data_points_to_target_a_user_or_filter_breakdown_visits_in_reports___mobile"
  ) {
    const isServer =
      props.sec ===
      "adding_data_points_to_target_a_user_or_filter_breakdown_visits_in_reports___server";
    return (
      <>
        <p>
          To target a user, ensure you&apos;ve added relevant data points to
          their profile before retrieving the feature variation or checking if
          the flag is active. Use the <props.ui.CodeRef x={props.c.AddData}/>{" "}
          method to add these data points to the user&apos;s profile.
        </p>
        <p>
          To retrieve data points collected on other devices{isServer
            ? " or to access past user data collected client-side when using Kameleoon in Hybrid mode"
            : ""}
          , use the <props.ui.CodeRef x={props.c.GetRemoteVisitorData}/> method
          before retrieving the variation or checking if the feature flag is
          active.
        </p>
        <p>
          To learn more about available targeting conditions, see the{" "}
          <a href="/feature-management-and-experimentation/using-visit-history-in-feature-flags-and-experiments">
            detailed article on the subject
          </a>
          .
        </p>
        <p>
          Additionally, the data points you add to the visitor profile will be
          available when analyzing your experiments, allowing you to filter and
          break down your results by factors like {isServer ? "device and browser" : "device"}.
        </p>
        <p>
          If you need to track additional data points beyond what&apos;s
          automatically collected, you can use Kameleoon&apos;s{" "}
          <a href="#customdata">Custom Data feature</a>. Don&apos;t forget to
          call the <props.ui.CodeRef x={props.c.Flush}/> method to send the
          collected data to Kameleoon servers for analysis.
        </p>
        {isServer ? (
          <NoteBox>
            To ensure your results are accurate, it&apos;s recommended to filter
            out bots by using the <props.ui.CodeRef x={props.c.UserAgent}/> data
            type.
          </NoteBox>
        ) : null}
      </>
    );
  }

  if (
    props.sec === "tracking_goal_conversions___param" ||
    props.sec === "tracking_goal_conversions___param___cron_job_interval_tracking" ||
    props.sec === "tracking_goal_conversions___param___mobile" ||
    props.sec === "tracking_goal_conversions___param___mobile___flutter" ||
    props.sec === "tracking_goal_conversions___method"
  ) {
    const mobile =
      props.sec === "tracking_goal_conversions___param___mobile" ||
      props.sec === "tracking_goal_conversions___param___mobile___flutter";
    const cron =
      props.sec === "tracking_goal_conversions___param___cron_job_interval_tracking";
    const method = props.sec === "tracking_goal_conversions___method";
    return (
      <>
        <p>
          When a user completes a desired action, it is recorded as a
          conversion. To track conversions, use the{" "}
          <props.ui.CodeRef x={props.c.TrackConversion}/> method and provide the
          required{" "}
          <props.ui.Code
            x={
              mobile
                ? props.c.TrackConversion.Params.GoalId.Name
                : props.c.Params.VisitorCode
            }
          />
          {!mobile ? (
            <>
              {" "}and{" "}
              <props.ui.Code x={props.c.TrackConversion.Params.GoalId.Name}/>
            </>
          ) : null}{" "}
          parameters.
        </p>
        <p>
          The conversion tracking request will be sent along with the next
          scheduled tracking request{cron
            ? ", which the SDK sends at regular intervals (defined in the interval tracking crontab)."
            : method
              ? ", which the SDK sends at regular intervals."
              : ", which the SDK sends at regular intervals."}{" "}
          If you prefer to send the request immediately, use the{" "}
          <props.ui.CodeRef x={props.c.Flush}/>
          {method ? null : (
            <>
              {" "}method with the parameter{" "}
              <props.ui.Code
                x={`${props.c.Flush.Params.Instant?.Name}=${props.c.Common.True}`}
              />
            </>
          )}
          .
        </p>
      </>
    );
  }

  if (props.sec === "sending_events_to_analytics_solutions") {
    return (
      <>
        <p>
          To track conversions and send exposure events to your customer
          analytics solution, you must first implement Kameleoon in{" "}
          <a href="/core-concepts/hybrid-experimentation/">Hybrid mode</a>.
          Then, use the <props.ui.CodeRef x={props.c.GetEngineTrackingCode}/> method.
        </p>
        <p>
          The <props.ui.Code x={props.c.GetEngineTrackingCode}/> method
          retrieves the unique tracking code required to send exposure events to
          your analytics solution.
        </p>
      </>
    );
  }

  return null;
};

export default ActivatingAFeatureFlag;
