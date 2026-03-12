const ConsentRevocationBehavior = (props) => {
  if (props.sec === "consent_revocation_behavior") {
    return (
      <>
        <p>
          When you call <props.ui.Code x={props.c.SetLegalConsent}/> with{" "}
          <props.ui.Code
            x={`${props.c.SetLegalConsent.Params.LegalConsent.Name}=${props.c.Common.False}`}
          />
          , the SDK does not delete the <code>kameleoonVisitorCode</code>{" "}
          cookie. Instead, it stops extending the cookie&apos;s expiration date,
          allowing the cookie to persist until it naturally expires.
        </p>
        <p>
          If your compliance requirements demand the immediate removal of the
          cookie file upon opt-out, you must delete it manually using your
          framework&apos;s native cookie management methods. The SDK will not
          remove the file automatically.
        </p>
      </>
    );
  }

  return null;
};

export default ConsentRevocationBehavior;
