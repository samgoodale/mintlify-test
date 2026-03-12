const Shared = {
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

export default Shared;
