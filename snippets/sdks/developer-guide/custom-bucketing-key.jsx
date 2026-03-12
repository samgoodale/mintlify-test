import { WarningBox } from "/snippets/sdks/plain-callouts.jsx";

const getContext = (props) =>
  props.c.IsSnakeCase
    ? {
        NewVisitorCode: "new_visitor_code",
        UserId: "user_id",
        AccountId: "account_id",
      }
    : {
        NewVisitorCode: "newVisitorCode",
        UserId: "userId",
        AccountId: "accountId",
      };

const CustomBucketingKey = (props) => {
  if (props.sec === "description") {
    return (
      <>
        <p>
          By default, Kameleoon uses a unique, anonymous visitor ID (
          <props.ui.Code x={props.c.Params.VisitorCode}/>) to assign users to
          feature flag variations. This ID is typically generated and stored on
          the user&apos;s device (in a browser cookie for client-side and
          server-side SDKs, in persistent storage for mobile SDKs). However, in
          certain scenarios you may need to ensure all users of the same
          organization see the same variant of a feature flag.
        </p>
        <p>
          The <strong>Custom Bucketing Key</strong> option allows you to
          override this default behavior by providing your own custom identifier
          for bucketing. This override ensures that Kameleoon&apos;s assignment
          logic uses your specified key instead of the default{" "}
          <props.ui.Code x={props.c.Params.VisitorCode}/>.
        </p>
      </>
    );
  }

  if (props.sec === "use_cases") {
    return (
      <>
        <p>
          Using a custom bucketing key is essential for maintaining consistency
          and accuracy in your feature flag assignments, particularly in these
          situations:
        </p>
        <ul>
          <li>
            <strong>Account-level or organizational experiments:</strong> For
            B2B products or scenarios where you want to assign all users from
            the same organization to the same variation, you can use an
            identifier like an{" "}
            <props.ui.Code x={getContext(props).AccountId}/>. Custom bucketing
            keys are crucial for A/B testing features that impact an entire team
            or company.
          </li>
        </ul>
        <p>
          By implementing a custom bucketing key, you ensure greater
          consistency and accuracy in your experiments, leading to more reliable
          results and a better user experience.
        </p>
      </>
    );
  }

  if (props.sec === "technical_details_1") {
    return (
      <p>
        When you configure a custom bucketing key for a feature flag, you
        provide Kameleoon with a specific identifier from your
        application&apos;s data:
      </p>
    );
  }

  if (props.sec === "technical_details_2") {
    return (
      <>
        <ul>
          <li>
            <strong>Providing the custom key:</strong> You provide your custom
            identifier to the Kameleoon SDK using the{" "}
            <props.ui.CodeRef x={props.c.AddData}/> method. In this method, you
            will pass your chosen custom bucketing key as a{" "}
            <props.ui.CodeRef x={props.c.CustomData}/> object. Here,{" "}
            <props.ui.Code x={getContext(props).NewVisitorCode}/> refers to the
            identifier you wish to use for your bucketing (for example, the new{" "}
            <props.ui.Code x={getContext(props).UserId}/> or{" "}
            <props.ui.Code x={getContext(props).AccountId}/>).
          </li>
        </ul>
        <WarningBox>
          For the custom bucketing key to function correctly, it must also be
          defined and configured for the feature flag during the flag creation
          or editing process. Without this corresponding configuration, the
          SDK&apos;s bucketing will not apply your custom key. For detailed
          instructions on how to set this up in Kameleoon, refer to this{" "}
          <a href="https://help.kameleoon.com/create-feature-flag/#Advanced_Flag_Settings">
            article
          </a>
          .
        </WarningBox>
        <ul>
          <li>
            <strong>Bucketing logic:</strong> Once a custom bucketing key is
            provided through the <props.ui.Code x={props.c.AddData}/> method,
            all hash calculations for assigning users to variations will use
            this <props.ui.Code x={getContext(props).NewVisitorCode}/> instead
            of the default <props.ui.Code x={props.c.Params.VisitorCode}/>.
          </li>
          <li>
            <strong>Data tracking and analytics:</strong> While the{" "}
            <props.ui.Code x={getContext(props).NewVisitorCode}/> is used for
            bucketing decisions, <strong>all subsequent data</strong> is sent
            and associated with the original{" "}
            <props.ui.Code x={props.c.Params.VisitorCode}/>.
          </li>
        </ul>
      </>
    );
  }

  if (props.sec === "technical_requirements") {
    return (
      <>
        <p>To effectively use a custom bucketing key:</p>
        <ul>
          <li>
            The key must be a <props.ui.Code x={props.c.Common.String}/>.
          </li>
          <li>
            It must be unique for the entity you intend to bucket (for example,
            if using a <props.ui.Code x={getContext(props).UserId}/>, each
            user&apos;s ID should be unique).
          </li>
          <li>
            The key must be available to the SDK at the exact moment the
            feature flag decision is evaluated for that user or request.
          </li>
        </ul>
      </>
    );
  }

  return null;
};

export default CustomBucketingKey;
