import {
  InfoBox,
  TipBox,
  WarningBox,
} from "/snippets/sdks/plain-callouts.jsx";

export const Shared = {
  Params: {
    VisitorCode: "Unique identifier of the user.",
    FeatureKey: "Key of the feature you want to expose to a user.",
  },
  Exceptions: {
    VisitorCodeInvalid:
      "Exception indicating that the provided visitor code is not valid. It is either empty or longer than 255 characters.",
    VisitorCodeEmpty: "The visitor code is empty.",
    VisitorCodeMaxLength:
      "The visitor code exceeded the maximum length (255 characters).",
    SdkNotReady:
      "Exception indicating that the SDK is not fully initialized yet.",
    PlatformException:
      "Exception indicating that the native plugin integration works incorrectly.",
    FeatureNotFound:
      "Exception indicating that the requested feature key wasn't found in the internal configuration of the SDK. This usually means that the feature flag is not activated in the Kameleoon app (but code implementing the feature is already deployed in the application).",
    FeatureEnvironmentDisabled:
      "Exception indicating that feature flag is disabled for the visitor's current environment (for example, production, staging, or development).",
    FeatureExperimentNotFound:
      "Exception indicating that the requested experiment id has not been found in the SDK's internal configuration. This is usually normal and means that the rule's corresponding experiment has not yet been activated on Kameleoon's side.",
    FeatureVariationNotFound:
      "Exception indicating that the requested variation key(id) has not been found in the internal configuration of the SDK. This is usually normal and means that the variation's corresponding experiment has not yet been activated on Kameleoon's side.",
    StorageRead: "Couldn't read storage data.",
    StorageWrite: "Couldn't update storage data.",
    SiteCodeIsEmpty:
      "Exception indicating that the specified site code is empty string which is invalid value.",
  },
  ExternalConfigFile: {
    NetworkDomain:
      "Custom domain used by SDKs for outgoing requests, often for proxying. Must be a valid domain (e.g., example.com or sub.example.com). Invalid formats default to Kameleoon's value.",
  },
  RemoteVisitorDataFilter: {
    CBS: "If true, Contextual Bandit score data will be retrieved.",
  },
};

const SharedDiv = (props) => {
  if (props.sec === "note_exceptions") {
    return (
      <props.ui.If c={!props.c.AreErrorsReturnedAsValues}>
        <InfoBox>
          In most cases, only the basic error,{" "}
          <props.ui.Code x={props.c.Exceptions.Kameleoon}/>, needs to be
          handled, as demonstrated in the example. However, if different types
          of errors require a response, handle each one separately based on
          specific requirements. Additionally, for enhanced reliability, general
          language errors can be handled by including{" "}
          <props.ui.Code x={props.c.Exceptions.Language}/>.
        </InfoBox>
      </props.ui.If>
    );
  }

  if (props.sec === "get_visitor_code_simulated") {
    return (
      <InfoBox>
        <p>
          The <props.ui.Code x={props.c.GetVisitorCode}/> method allows you to
          set <strong>simulated</strong> variations for a visitor. When cookies
          contain the key <code>kameleoonSimulationFFData</code>, the standard
          evaluation process is bypassed.
        </p>
        <details>
          <summary>View Details</summary>
          <p>You can apply simulations in two ways:</p>
          <ul>
            <li>
              <strong>Automatically (recommended):</strong> If using Kameleoon
              Web Experimentation or the SDK in{" "}
              <a href="https://developers.kameleoon.com/core-concepts/hybrid-experimentation#linking-feature-experiments-with-front-end-tracking-code">
                Hybrid mode
              </a>
              , the cookie is created automatically when simulating a
              variant&apos;s display using the{" "}
              <a href="https://help.kameleoon.com/use-simulation-mode/">
                Simulation Panel
              </a>
              .
            </li>
            <li>
              <strong>Manually:</strong> Set the{" "}
              <code>kameleoonSimulationFFData</code> cookie manually.
            </li>
          </ul>
          <p>
            It&apos;s important to distinguish <strong>simulated</strong>{" "}
            variations from{" "}
            <strong>
              <props.ui.Ref x={"forced"} href={props.c.SetForcedVariation.Ref}/>
            </strong>{" "}
            variations:
          </p>
          <ul>
            <li>
              <strong>Simulated variations:</strong> Affect the overall{" "}
              <strong>feature flag</strong> result.
            </li>
            <li>
              <strong>Forced variations:</strong> Are specific to an individual
              experiment.
            </li>
          </ul>
          <p>
            <strong>Manual setup</strong>
          </p>
          <p>
            Please ensure the <code>kameleoonSimulationFFData</code> cookie
            follows this format:
          </p>
          <ul>
            <li>
              <code>
                {`kameleoonSimulationFFData={"featureKey":{"expId":10,"varId":20}}`}
              </code>
              : Simulates the variation with <code>varId</code> of experiment{" "}
              <code>expId</code> for the given <code>featureKey</code>.
            </li>
            <li>
              <code>
                {`kameleoonSimulationFFData={"featureKey":{"expId":0}}`}
              </code>
              : Simulates the default variation for the given{" "}
              <code>featureKey</code>.
            </li>
          </ul>
          <p>
            To ensure proper functionality, the cookie value must be encoded as
            a URI component using a method such as{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent">
              encodeURIComponent
            </a>
            .
          </p>
        </details>
      </InfoBox>
    );
  }

  if (props.sec === "coroutine_warning") {
    return (
      <WarningBox>
        A common mistake is using suspended functions inside{" "}
        <code>mapCatching</code>, <code>runCatching</code>, or a{" "}
        <code>try-catch</code> block without properly re-throwing{" "}
        <code>CancellationException</code>, which can interfere with coroutine
        cancellation.
      </WarningBox>
    );
  }

  if (props.sec === "swift_async_warning") {
    return (
      <WarningBox>
        A common mistake is calling <code>async</code> functions with{" "}
        <code>try?</code> or inside a nested <code>do-catch</code> block
        without rethrowing <code>CancellationError</code>. This can interfere
        with task cancellation.
      </WarningBox>
    );
  }

  if (props.sec === "set_default_data_file_js") {
    return (
      <TipBox>
        <details>
          <summary>How to set <code>defaultDataFile</code> value correctly</summary>
          <p>
            <strong>Option 1 (Recommended):</strong> Use{" "}
            <code>JSON.stringify()</code>
          </p>
          <pre>
            <code>{`const dataFileJson = {"configuration":{"consentType":.....,
    {"key":"show_car","type":"JSON","value":"{\\"make\\":\\"Porsche\\",\\"model\\":\\"911\\"}"}},
    "dateModified":1752209266000};
const dataFileString = JSON.stringify(dataFileJson);
const configuration = {
  updateInterval: 20,
  defaultDataFile: dataFileString
};`}</code>
          </pre>
          <p>
            <strong>Option 2:</strong> Raw JSON string (escape special
            characters)
          </p>
          <pre>
            <code>{`const configuration = {
  updateInterval: 20,
  defaultDataFile: \`{"configuration":{"consentType":.....,
    {"key":"show_car","type":"JSON","value":"{\\\\"make\\\\":\\\\"Porsche\\\\",\\\\"model\\\\":\\\\"911\\\\"}"},
    "dateModified":1752209266000}\`
};`}</code>
          </pre>
        </details>
      </TipBox>
    );
  }

  return null;
};

export default SharedDiv;
