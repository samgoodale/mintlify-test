---
sidebar_position: 3
toc_max_heading_level: 4
---

import { Select, Text, Bold, Italic, Code, CodeRef, Ref, If } from '../commons/utils.mdx';
import SharedDiv, { Shared } from '../commons/shared.mdx';
import Geolocation from '../commons/reference/data-types/geolocation.mdx';
import Browser from '../commons/reference/data-types/browser.mdx';
import UpdateConfigurationHandler from '../commons/reference/events/update-configuration-handler.mdx';
import AddData from '../commons/reference/visitor-data/add-data.mdx';
import GetFeatureList from '../commons/reference/feature-flags-and-variations/get-feature-list.mdx';
import GetVariations from '../commons/reference/feature-flags-and-variations/get-variations.mdx';
import GetVariation from '../commons/reference/feature-flags-and-variations/get-variation.mdx';
import GetVisitorCode from '../commons/reference/visitor-data/get-visitor-code.mdx';
import Logging from '../commons/developer-guide/logging.mdx';
import TargetingConditions from '../commons/developer-guide/targeting-conditions.mdx';
import Conversion from '../commons/reference/data-types/conversion.mdx';
import TrackConversion from '../commons/reference/goals/track-conversion.mdx';
import SetForcedVariation from '../commons/reference/feature-flags-and-variations/set-forced-variation.mdx';
import CustomBucketingKey from '../commons/developer-guide/custom-bucketing-key.mdx';
import EvaluateAudiences from '../commons/reference/feature-flags-and-variations/evaluate-audiences.mdx';
import GetDataFile from '../commons/reference/feature-flags-and-variations/get-data-file.mdx';
import DataFile from '../commons/reference/returned-types/data-file.mdx';
import FeatureFlag from '../commons/reference/returned-types/feature-flag.mdx';
import Rule from '../commons/reference/returned-types/rule.mdx';


# Flutter SDK

export const Context = {
  IsClient: true,
  IsFlutter: true,
  IsSnakeCase: false,
  Common: {
    Null: "null",
    True: "true",
    False: "false",
    String: "String",
    Bool: "bool",
    Float: "double",
    Int: "int",
  },
  Params: {
    VisitorCode: "visitorCode",
    FeatureKey: "featureKey"
  },
  Exceptions: {
    Language: "Exception",
    Kameleoon: "KameleoonException",
    SdkNotReady: "SDKNotReady",
    VisitorCodeInvalid: "VisitorCodeInvalid",
    PlatformException: "PlatformException",
    FeatureNotFound: "FeatureNotFound",
    FeatureEnvironmentDisabled: "FeatureEnvironmentDisabled",
    FeatureExperimentNotFound: "FeatureExperimentNotFound",
    FeatureVariationNotFound: "FeatureVariationNotFound"
  },
  Hook: {
    UseData: "useData",
  },
  KameleoonClientConfig: {
    Ref: "#initialize-the-kameleoon-client",
    TrackingInterval: {
        CodeName: "trackingIntervalMillisecond"
    }
  },
  // kameleoon.data
  CustomData: {
    Name: "CustomData",
    FullName: "data.CustomData",
    Ref: "#customdata"
  },
  Geolocation: {
    Name: "Geolocation",
    Ref: "#geolocation",
    Params: {
        Region: { Type: "String?" },
        City: { Type: "String?" },
        PostalCode: { Name: "postalCode", Type: "String?" },
        Latitude: { Type: "double?" },
        Longitude: { Type: "double?" },
    }
  },
  Browser: {
    Name: "Browser",
    Ref: "#browser",
    Params: {
      BrowserType: {
        Name: "browser",
        Type: "Browsers",
        Chrome: "chrome",
        IE: "internetExplorer",
        Firefox: "firefox",
        Safari: "safari",
        Opera: "opera",
        Other: "other"
      },
      Version: { Type: "double?" },
    },
  },
  UniqueIdentifier: {
    Name: "<>",
    Ref: "<>"
  },
  Conversion: {
    Name: "Conversion",
    FullName: "Conversion",
    Ref: "#conversion",
        Params: {
            GoalId: { Name: "goalId" },
            Revenue: { Name: "revenue", Type: "double" },
            Negative: { Name: "negative" },
            Metadata: { Name: "metadata", Type: "List<CustomData>", DefaultValue: "[]" }
        },
  },
  // kameleoon.types
  DataFile: {
    Name: "DataFile",
    FullName: "DataFile",
    Ref: "#datafile",
    Params: {
        FeatureFlags: { Name: "featureFlags", Type: "Map<String, FeatureFlag>" },
    }
  },
  FeatureFlag: {
    Name: "FeatureFlag",
    FullName: "FeatureFlag",
    Ref: "#featureflag",
    Params: {
        Variations: { Name: "variations", Type: "Map<String, Variation>" },
        EnvironmentEnabled: { Name: "environmentEnabled" },
        Rules: { Name: "rules", Type: "List<Rule>" },
        DefaultVariationKey: { Name: "defaultVariationKey" },
    }
  },
  Rule: {
        Name: "Rule",
        FullName: "Rule",
        Ref: "#rule",
        Params: {
            Variations: { Name: "variations", Type: "Map<String, Variation>" },
        }
  },
  Variation: {
    Name: "Variation",
    FullName: "types.Variation",
    Ref: "#variation"
  },
  // methods
  Flush: {
    Name: "flush()",
    Ref: "#flush",
    Params: {
        Instant: { Name: "instant" }
    }
  },
  GetRemoteVisitorData: {
    Name: "getRemoteVisitorData()",
    Ref: "#getremotevisitordata",
  },
  TrackConversion: {
    Name: "trackConversion()",
    Ref: "#trackconversion",
    Params: {
        GoalId: { Name: "goalId" },
        Revenue: { Name: "revenue", Type: "double" },
        IsUniqueIdentifier: { Name: "isUniqueIdentifier" },
        Negative: { Name: "negative" },
        Metadata: { Name: "metadata", Type: "List<CustomData>", DefaultValue: "[]" }
    }
  },
  IsFeatureActive: {
    Name: "isFeatureActive()",
    Ref: "#isfeatureactive"
  },
  AddData: {
    Name: "addData()",
    Ref: "#adddata",
    Params: {
        Track: { Name: "track" },
        Data: { Name: "data", Type: "List<Data>" }
    }
  },
  GetEngineTrackingCode: {
    Name: "getEngineTrackingCode()",
    Ref: "#getenginetrackingcode"
  },
  UpdateConfigurationHandler: {
    Name: "onUpdateConfiguration()",
    Ref: "#onupdateconfiguration",
    Params: {
        Handler: { Name: "handler", Type: "Function(int)?" }
    }
  },
  GetFeatureList: {
    Name: "getFeatureList()",
    Ref: "#getfeaturelist",
    Return: "Future<List<String>>",
  },
  GetVariation: {
    Name: "getVariation()",
    Ref: "#getvariation",
    Return: "Future<Variation>",
    Params: {
        Track: { Name: "track" }
    }
  },
  GetVariations: {
    Name: "getVariations()",
    Ref: "#getvariations",
    Return: "Future<Map<String, Variation>>",
    Params: {
        OnlyActive: { Name: "onlyActive" },
        Track: { Name: "track" }
    }
  },
  GetVisitorCode: {
    Name: "getVisitorCode()",
    Ref: "#getvisitorcode",
    Return: "Future<String>",
    Params: {
        DefaultVisitorCode: { Name: "defaultVisitorCode" }
    }
  },
  SetForcedVariation: {
    Name: "setForcedVariation()",
    Ref: "#setforcedvariation",
    Params: {
        ExperimentId: { Name: "experimentId" },
        VariationKey: { Name: "variationKey", Type: "String?", RemVal: "null" },
        ForceTargeting: { Name: "forceTargeting" },
    }
  },
  EvaluateAudiences: {
    Name: "evaluateAudiences()",
    Ref: "#evaluateaudiences"
  },
};

With the Kameleoon Flutter SDK, you can run experiments and activate feature flags on all platforms targeted by the Flutter application framework. Integrating our SDK into your applications is easy, and its footprint (in terms of memory and network usage) is low.

**Getting started**: For help getting started, see the [developer guide](#developer-guide).

**Changelog**: Latest version of the Flutter SDK: 3.6.0 [Changelog](https://github.com/Kameleoon/client-flutter/blob/master/CHANGELOG.md).

**SDK methods**: For the full reference documentation of the Flutter SDK methods, see the [reference](#reference) section.

## Developer guide

### Getting started

This guide is designed to help you integrate our SDK and start running experiments in your Flutter applications. This tutorial will explain the setup of a simple A/B test to change the number of recommended products based on different variations.

#### Install the Flutter client

To install the Kameleoon Flutter client, declare a dependency in your `pubspec.yaml` file:

```ruby
kameleoon_client_flutter: ^3.0.0
```

:::caution[Web only]
In **release** mode, the JS library is loaded automatically. However, in **debug** mode, there may be issues (due Dart Development Compiler) with importing the JS library. To avoid potential problems, we strongly recommend importing the JS library explicitly.
Add the following script line to the `<head>` section of your `index.html`:
```html
<script type="application/javascript" charset="utf-8" src="assets/packages/kameleoon_client_flutter/assets/kameleoonSDK.js"></script>
```
:::

#### Initialize the Kameleoon client

After installing the SDK into your application and setting up a server-side experiment in the Kameleoon app, the next step is creating the Kameleoon client.

A `KameleoonClient` is a singleton object (per `siteCode`) that acts as a bridge between your application and the Kameleoon platform. It includes all the methods and properties you need to run an experiment.

```dart
import 'package:kameleoon_client_flutter/kameleoon_client_flutter.dart';

class _HomePage extends State<HomePage> {
    KameleoonClient kameleoonClient

    @override
    void initState() {
            super.initState();

            try {
                // pass client configuration and visitorCode as arguments
                final config = KameleoonClientConfig(
                    refreshIntervalMinutes: 15, // 60 minutes by default, optional
                    defaultTimeoutMilliseconds: 10000,  // 10_000 milliseconds by default, optional
                    dataExpirationIntervalMinutes: 1440 * 365, // infinity by default, optional
                    trackingIntervalMilliseconds: 500, // 1000 milliseconds by default, optional
                    environment: "staging",  // optional
                    isUniqueIdentifier: false, // false by default, optional
                    domain: "example.com", // web only option, optional
                    networkDomain: "company.com", //  web only option, optional
                    defaultDataFile: "{...}" // optional
                );

                final visitorCode = "yourVisitorCode";
                final kameleoonClient = KameleoonClientFactory.create(siteCode, visitorCode: visitorCode, config: config);
                // or, if you want, visitor code will be generated automatically
                final kameleoonClient = KameleoonClientFactory.create(siteCode, config: config);
            } on SiteCodeIsEmpty catch (ex) {
                // Exception indicates that the provided siteCode is empty
            } on VisitorCodeInvalid catch (ex) {
                // Exception indicates that the provided visitorCode is invalid
            } on Exception catch (ex) {
                // Any other error
            }
    }
}
```

While executing, the `KameleoonClientFactory.create()` method initializes the client, but it is not immediately ready for use, as the Kameleoon Client must retrieve the current configuration of feature flags (along with their traffic repartition) from a Kameleoon remote server. This retrieval requires network access, which is not always available. Until the Kameleoon Client is fully ready, you should not attempt to run other methods in the Kameleoon Android SDK. Note that once the first configuration of feature flags is fetched, it is then periodically refreshed, but even if the refresh fails for any reason, the Kameleoon client will continue to function using the previous configuration.

You can use the [`isReadyAsync()`](#isreadyasync) method to check if the Kameleoon client initialization is finished.

Alternatively, you can use a **helper callback** to encapsulate the logic of feature flag triggering and variation implementation. The best approach ([`isReadyAsync()`](#isreadyasync) or **callback**) depends on your preferences and the exact use case. We recommend using [`isReadyAsync()`](#isreadyasync) when you expect that the SDK will be ready for use. For example, you should use `isReadyAsync()` when you are running a feature flag on a dialog that users likely wouldn't access for the first few seconds or minutes of navigating the app. We recommend using the callback when there is a high probability that the SDK is still in the process of initialization. For example, if you are running a feature flag that appears onscreen at the application's launch, you should use a callback that makes the application wait until either the SDK is ready or a specified timeout has expired.

:::note
It's your responsibility as the app developer to ensure the logic of your application code is correct within the context of A/B testing using Kameleoon. A good practice is to always assume that the application user can be left out of the feature flag when the Kameleoon client is not yet ready. This exclusion is easy to implement, as it corresponds to the implementation of the default or reference variation logic. The code samples in the next paragraph show examples of this approach.
:::

You're now ready to implement feature management and features flags. See the [Reference](#reference) section for details about additional methods.

#### Activating a feature flag

##### Retrieving a flag configuration

To implement a feature flag in your code, you must first create a [feature flag](https://help.kameleoon.com/create-feature-flag/) in your Kameleoon account.

To determine if a feature flag is active for a specific user, you must retrieve its configuration. Use the [`getFeatureVariationKey()`](#getfeaturevariationkey) or [`isFeatureActive()`](#isfeatureactive) method to retrieve the configuration based on the `featureKey`.

Use the `isFeatureActive()` method if you want to retrieve the configuration of a simple feature flag that has only an ON or OFF state, as opposed to more complex feature flags with multiple variations or targeting options.

The `getFeatureVariationKey()` method retrieves the configuration of a feature experiment with several feature variations. You can use the method to get a variation key for a given user by providing the `visitorCode` and `featureKey` as mandatory arguments.

Feature flags can have associated variables that are used to customize their behavior. To retrieve these variables, use the [`getFeatureVariationVariables()`](#getfeaturevariationvariables) method after calling `getFeatureVariationKey()`, as you must obtain the `variationKey` for the user.

:::note
To check if a feature flag is active, you only need to use **one** method. Choose `isFeatureFlagActive` if you want to know if a feature flag is on or off. For more complex scenarios, like dynamically changing the feature's behavior, use `getFeatureFlagVariables`.
:::

##### Adding data points to target a user or filter / breakdown visits in reports

To target a user, ensure you’ve added relevant data points to their profile before retrieving the feature variation or checking if the flag is active. Use the [`addData()`](#adddata) method to add these data points to the user’s profile.

To retrieve data points that have been collected on other devices or to access past data points about a user (which would have been collected client-side if you are using Kameleoon in Hybrid mode), use the [`getRemoteVisitorData()`](#getremotevisitordata) method. This method asynchronously fetches data from our servers. However, you must call `getRemoteVisitorData()` **before** retrieving the variation or checking if the feature flag is active, as this data might be required to assign a user to a given variation of a feature flag.

To learn more about available targeting conditions, read our [detailed article on the subject](/feature-management-and-experimentation/using-visit-history-in-feature-flags-and-experiments).

Additionally, the data points you add to the visitor profile will be available when analyzing your experiments, allowing you to filter and break down your results by factors like device and browser. Remember to call the `flush()` method to send saved data to the Kameleoon servers.

If you need to track additional data points beyond what's automatically collected, you can use Kameleoon's [Custom Data feature](#customdata). Custom Data lets you capture and analyze specific information relevant to your experiments. Don't forget to call the `flush()` method to send the collected data to Kameleoon servers for analysis.

##### Tracking flag exposition and goal conversions

Kameleoon will automatically track visitors’ exposition to flags as soon as you call one of these methods:

* `getFeatureVariationKey()`
* `getFeatureVariable()`
* `isFeatureActive()`

When a user completes a desired action (for example, making a purchase), it counts as a conversion. To track conversions, you must use the [`trackConversion()`](#trackconversion) method, and provide the `visitorCode` and `goalId` parameters.

### Using a custom bucketing key

<CustomBucketingKey sec="description" c={Context}/>

#### Use cases

<CustomBucketingKey sec="use_cases" c={Context}/>

#### Technical details

<CustomBucketingKey sec="technical_details_1" c={Context}/>

```dart
try {
    await kameleoonClient.addData(CustomData.withIndex(index, values: ["newVisitorCode"]))
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
}
```

<CustomBucketingKey sec="technical_details_2" c={Context}/>

#### Technical requirementes

<CustomBucketingKey sec="technical_requirements" c={Context}/>

### Targeting conditions

<TargetingConditions sec="targeting_conditons_description" c={Context}/>

### Logging

<Logging sec="logging" c={Context}/>

#### Log levels

<Logging sec="log_levels" c={Context}/>

```dart
// The `none` log level does not allow logging.
KameleoonLogger.setLogLevel(LogLevel.none);

// The `error` log level only allows logging issues that may affect the SDK's main behaviour.
KameleoonLogger.setLogLevel(LogLevel.error);

// The `warning` log level allows logging issues which may require additional attention.
// It extends the `error` log level.
// The `warning` log level is a default log level.
KameleoonLogger.setLogLevel(LogLevel.warning);

// The `info` log level allows logging general information on the SDK's internal processes.
// It extends the `warning` log level.
KameleoonLogger.setLogLevel(LogLevel.info);

// The `DEBUG` level logs additional details about the SDK’s internal processes and extends the `INFO` level
// with more granular. diagnostic output.
// This information is not intended for end-user interpretation but can be sent to our support team
// to assist with internal troubleshooting.
KameleoonLogger.setLogLevel(LogLevel.debug);
```

#### Custom handling of logs

<Logging sec="custom_handling_of_logs" c={Context}/>

```dart
import 'package:logging/logging.dart' as logging;

class CustomLogger extends Logger {
  final logger = logging.Logger("CustomLogger");
  // `log` method accepts logs from the SDK
  @override
  void log(LogLevel level, String message) {
    // Custom log handling logic here. For example:
    switch (level) {
      case LogLevel.error:
        logger.severe(message);
        break;
      case LogLevel.warning:
        logger.warning(message);
        break;
      case LogLevel.info:
        logger.info(message);
        break;
      case LogLevel.debug:
        logger.fine(message);
        break;
      default:
        break;
    }
  }
}

// Log level filtering is applied separately from log handling logic.
// The custom logger will only accept logs that meet or exceed the specified log level.
// Ensure the log level is set correctly.
KameleoonLogger.setLogLevel(LogLevel.debug); // Optional, defaults to `LogLevel.warning`.
KameleoonLogger.setLogger(CustomLogger());
```

### Error Handling

Handling errors is considered a good practice to make your application more stable and avoid technical issues. Most `KameleoonClient` methods can throw a `KameleoonException` error.

Since it can be difficult to patch the SDK version on the Android client side, we recommended that you enclose every SDK method in a `try` clause that catches the `KameleoonException` and the `Throwable` error type to prevent other fatal errors.

For example:

```dart
try {
    // Calling a method of the SDK
} on KameleoonException {
    // Handling expected exceptions
} on Exception {
    // Any other error
}
```

## Reference

This is a full reference documentation of the Flutter SDK.

### Initialization

Once you have [installed the SDK](#install-the-flutter-client) in your application, you must initialize Kameleoon. All of your application's interactions with the SDK, such as triggering an experiment, are accomplished using this Kameleoon client object.

#### create()

Call this method before any others to initialize the SDK. This method is in `KameleoonClientFactory`. Your app conducts all interactions with the SDK using the resulting `KameleoonClient` object that this method creates.

You can customize the SDK's behavior (for example, the environment, the credentials, and so on) by providing a [configuration object](#additional-configuration). Otherwise, the SDK tries to find your configuration file and uses it instead.


```dart
import 'package:kameleoon_client_flutter/kameleoon_client_flutter.dart'


final siteCode = "a8st4f59bj";
try {
    // pass client configuration and visitorCode as arguments
    final config = KameleoonClientConfig(
      refreshIntervalMinutes: 15, // 60 minutes by default, optional
      defaultTimeoutMilliseconds: 10000, // 10_000 milliseconds by default, optional
      dataExpirationIntervalMinutes: 1440 * 365, // infinity by default, optional
      trackingIntervalMilliseconds: 500, // 1000 milliseconds by default, optional
      environment: "staging",  // optional
      isUniqueIdentifier: false, // false by default, optional
      domain: "example.com" // web only option, optional
      networkDomain: "company.com", //  web only option, optional
      defaultDataFile: "{...}" // optional
    );
    final visitorCode = "yourVisitorCode";
    final kameleoonClient = KameleoonClientFactory.create(siteCode, visitorCode: visitorCode, config: config);
} on SiteCodeIsEmpty catch (ex) {
     // Exception indicates that the provided siteCode is empty
} on VisitorCodeInvalid catch (ex) {
    // Exception indicates that the provided visitorCode is invalid
} on Exception catch (ex) {
    // Any other error
}

try {
    // generate visitorCode automatically and use default Kameleoon client config
    final kameleoonClient = KameleoonClientFactory.create(siteCode);
} on SiteCodeIsEmpty catch (ex) {
     // Exception indicates that the provided siteCode is empty
} on Exception catch (ex) {
    // Any other error
}
```

##### Arguments

| Name                 | Type                      | Description                                                                                                                                                               | Default |
| -------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| siteCode _(required)_   | `String`                 | A [unique key](https://help.kameleoon.com/question/how-do-i-find-my-site-id/) identifying the Kameleoon project used with the SDK.                                      |  |
| visitorCode _(optional)_ | `String`               | An optional visitor identifier. If available, use your internal **user ID**; otherwise, the SDK will generate one automatically.                                      | `nil` |
| config _(optional)_      | `KameleoonClientConfig` | If the SDK configuration is not provided, the SDK will automatically use the default settings. | `nil` |

##### Return value

| Type              | Description                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| `KameleoonClient` | An instance of the `KameleoonClient` class that your app can then use to manage your experiments and feature flags. |

##### Exceptions thrown

| Type                                        | Description                                                                                                                             |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `VisitorCodeInvalid` | <Text x={Shared.Exceptions.VisitorCodeInvalid}/> |
| `SiteCodeIsEmpty`    | <Text x={Shared.Exceptions.SiteCodeIsEmpty}/> |

#### isReadyAsync()

For mobile SDKs, the Kameleoon Client can't initialize immediately as it must perform a server call to retrieve the current configuration for the active feature flags. Use `isReadyAsync()` to check if the SDK is ready by calling this method before triggering any feature flags.

Alternatively, you can use a callback (see the [`runWhenReady()`](#runwhenready) method for details).

```dart
final ready = kameleoonClient.isReadyAsync();
```

##### Return value

| Name  | Type | Description                                                                                     |
| ----- | ---- | ----------------------------------------------------------------------------------------------- |
| ready | bool | Boolean representing the SDK's status (properly initialized, or not yet ready to be used).      |

#### runWhenReady()

For mobile SDKs, the Kameleoon Client can't initialize immediately as it must perform a server call to retrieve the current configuration for all active feature flags. Use the [`runWhenReady()`](#runwhenready) method of the `KameleoonClient` class to pass a callback that will be executed as soon as the SDK is ready for use. You can also set a timeout.

The callback given as the first argument to this method must be an instance of a type of `Function(bool ready)`. If the `ready` equals `true`, the Kameleoon client is ready and should contain code that triggers a feature flag and implements variations. Otherwise, the specified timeout will occur before the client is initialized. The callback should contain code that implements the reference variation, as the user will be excluded from the feature flag if a timeout occurs.

```dart
kameleoonClient.runWhenReady((ready) async {
    final defaultProductsNumber = 5;
    if (ready) {
        late int recommendedProductsNumber;
        try {
            recommendedProductsNumber = await kameleoonClient.getFeatureVariable("feature_key", "product_number");
        } on Exception {
            recommendedProductsNumber = defaultProductsNumber;
        }
    } else {
        recommendedProductsNumber = defaultProductsNumber;
    }

    setState(() {
        _recommendedProductsNumber = recommendedProductsNumber;
    });
}, 2000);
```

#####  Arguments

| Name | Type | Description    |
|-------- | ------- | ----------- |
| callback _(required)_ | `Function(bool)` | Callback object with `ready` flag. |
| timeout (_optional)_ | `Duration` | Timeout (in milliseconds). If not provided, it will use the default value of `defaultTimeoutMilliseconds` (from `KameleoonClientConfig`) milliseconds.|

### Feature flags and variations

#### isFeatureActive()

- 📨 _Sends Tracking Data to Kameleoon_

To activate a feature toggle, call this method. This method accepts a `featureKey` as a required argument to check if the specified feature will be active for a visitor.

If the visitor has never been associated with this feature flag, the method returns a random boolean value (`true` if the visitor should be shown this feature, otherwise `false`). If the visitor is already registered with this feature flag, this method returns the previous feature flag value.

Ensure you set up proper error handling as shown in the example code to catch potential exceptions.

```dart
String featureKey = "new_checkout";
bool hasNewCheckout = false;

try {
  hasNewCheckout = await kameleoonClient.isFeatureActive(featureKey);
} on SDKNotReady {
  // Exception indicates that the SDK has not completed its initialization yet.
} on FeatureNotFound {
  // The error has occurred; feature flag isn't found in current configuration.
} on KameleoonException {
  // Generic exception in native plugin integration occurred.
} on Exception {
  // Any other error
}
if (hasNewCheckout) {
  // Implement new checkout code here
}
```

#####  Arguments

| Name | Type | Description     |
|-------- | ------- | ----------|
| featureKey | `String` | Unique key of the feature you want to expose to a user. This field is required. |
| track | `bool` | An optional parameter to enable or disable tracking of the feature evaluation (`true` by default).

#####  Return value

|Type | Description |
|-------- | ------- |
|`Future<bool>` | Value of the feature that is registered for a visitor. |

#####  Exceptions thrown

| Type | Description |
| ---- | ----------- |
| SDKNotReady | Exception indicating that the SDK has not completed its initialization. |
| FeatureNotFound  | Exception indicating that the requested feature ID was not found in the SDK's internal configuration. This exception usually means that the feature flag has not been activated on the Kameleoon side (but code implementing the feature is already deployed in the application). |
| PlatformException | Exception indicating that the native plugin integration works incorrectly.

#### getVariation()

<GetVariation sec="description" c={Context}/>

```dart
final String featureKey = "featureKey";
Variation? variation;
try {
    variation = await client.getVariation(featureKey);
    // disabling tracking
    variation = await client.getVariation(featureKey, track: false);
} on SDKNotReady {
    // Exception indicating that the SDK has not completed its initialization yet.
} on FeatureNotFound {
    // The feature key is not in the configuration file that has been fetched by the SDK.
} on FeatureEnvironmentDisabled {
    // The feature flag is disabled for the environment.
}

String? title = variation?.variables['title']?.value;

switch (variation?.key) {
    case "on":
        // Main variation key is selected for visitorCode
        break;
    case "alternative_variation":
        // Alternative variation key
        break;
    default:
        // Default variation key
        break;
}
```

##### Arguments

<GetVariation sec="arguments" c={Context}/>

##### Return value

<GetVariation sec="return_value" c={Context}/>

##### Exceptions thrown

<GetVariation sec="exceptions" c={Context}/>

#### getVariations()

<GetVariations sec="description" c={Context}/>

```dart
try {
    Map<String, Variation> variations = await kameleoonClient.getVariations();
    // only active variations
    Map<String, Variation> variations = await kameleoonClient.getVariations(onlyActive: true);
    // disable tracking
    Map<String, Variation> variations = await kameleoonClient.getVariations(onlyActive: false, track: false);
} on SDKNotReady {
    // Exception indicating that the SDK has not completed its initialization yet.
}
```

##### Arguments

<GetVariations sec="arguments" c={Context}/>

##### Return value

<GetVariations sec="return_value" c={Context}/>

##### Exceptions thrown

<GetVariations sec="exceptions" c={Context}/>

#### getFeatureList()

<GetFeatureList sec="description" c={Context}/>

```dart
try {
    final allFeatureFlagKeys = await kameleoonClient.getFeatureList();
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
}
```

##### Return value

<GetFeatureList sec="return_value" c={Context}/>

#### getDataFile()

<GetDataFile sec="tip_qa" c={Context}/>
<GetDataFile sec="description" c={Context}/>

```dart
try {
    final dataFile = await kameleoonClient.getDataFile();
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
}
```

##### Return value

<GetDataFile sec="return_value" c={Context}/>

##### Errors thrown

<GetDataFile sec="exceptions" c={Context}/>

#### setForcedVariation()

<SetForcedVariation sec="description" c={Context}/>

```dart
final experimentId = 9516;
try {
    // Forcing the variation "on" for the experiment 9516 for the visitor
    await kameleoonClient.setForcedVariation(experimentId, "on")

    // Forcing the variation "on" while preserving segmentation and targeting conditions during the experiment
    await kameleoonClient.setForcedVariation(experimentId, "on", forceTargeting: false)

    // Resetting the forced variation for the experiment 9516 for the visitor
    await kameleoonClient.setForcedVariation(experimentId, null);
} on KameleoonException {
  // Handling the exception
}
```

##### Arguments

<SetForcedVariation sec="arguments" c={Context}/>

##### Errors thrown

<SetForcedVariation sec="exceptions" c={Context}/>

#### evaluateAudiences()

<EvaluateAudiences sec="description" c={Context}/>


```dart
try {
    await kameleoonClient.evaluateAudiences();
} on KameleoonException {
  // Handling the exception
}
```

##### Errors thrown

<EvaluateAudiences sec="exceptions" c={Context}/>

### Goals

#### trackConversion()

<TrackConversion sec="description" c={Context}/>

```dart
kameleoonClient.trackConversion(goalId); // default revenue
kameleoonClient.trackConversion(goalId, 10); // provided revenue == 10

// Add metadata
kameleoonClient.trackConversionWithOptParams(goalId, metadata: [CustomData.withIndex(1, values: ["true"])]);
kameleoonClient.trackConversionWithOptParams(goalId, revenue: 10, metadata: [CustomData.withIndex(1, values: ["true"])]);
```

##### Arguments
<TrackConversion sec="arguments" c={Context}/>

:::note
<TrackConversion sec="note_metadata" c={Context}/>

```dart
kameleoonClient.addData([
    CustomData.withIndex(5, values: ["Credit Card"]),
    CustomData.withIndex(9, values: ["Express Delivery"])
]);
kameleoonClient.trackConversionWithOptParams(1000, metadata: [CustomData.withIndex(5, values: ["Amex Credit Card"])]);
```
:::

### Events

#### onUpdateConfiguration()

:::note
This method was previously called `updateConfigurationHandler`, which was removed in SDK version `3.0.0` release.
:::

<UpdateConfigurationHandler sec="description" c={Context}/>

```dart
kameleoonClient.onUpdateConfiguration((timestamp) {
    // timestamp value contains the value of Unix time (number of seconds elapsed since January 1, 1970) when configuration was updated.
});
```

##### Arguments

<UpdateConfigurationHandler sec="arguments" c={Context}/>

### Visitor data

#### getVisitorCode()
<GetVisitorCode sec="description" c={Context}/>

```dart
final visitorCode = await kameleoonClient.getVisitorCode();
```

#####  Return value
<GetVisitorCode sec="return_value" c={Context}/>

#### addData()

<AddData sec="description" c={Context}/>

```dart
try {
    await kameleoonClient.addData([
        Device(Devices.phone),
        CustomData.withIndex(1, values: ["some custom value"]),
        Conversion(32, 10f, false),
    ]);
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
}
```

##### Arguments

<AddData sec="arguments" c={Context}/>

##### Exceptions

<AddData sec="exceptions" c={Context}/>

#### flush()

- 📨 _Sends Tracking Data to Kameleoon_

Data associated with the current user via the `addData()` method is not sent immediately to the server. It is stored and accumulated until it is sent automatically by the `trackConversion()` method, or manually sent by calling the `flush()` method, letting you control exactly when the data is flushed to our servers. For example, if you call the `addData()` method a dozen times, it would waste resources to send data to the server after each `addData()` invocation. Just call `flush()` once at the end.

The `flush()` method doesn't return any value. This method is non-blocking as the server call is made asynchronously.

```dart
kameleoonClient.flush(); // Interval tracking (most performant tracking method)

kameleoonClient.flush(instant: true); // Instant tracking
```

##### Exceptions thrown

|Type | Description |
|-------- | ------- |
| PlatformException | Exception indicating that the native plugin integration doesn't work correctly.

#### getRemoteData()

:::note
This method was previously called `retrieveDataFromRemoteSource`, which was removed in SDK version `3.0.0` release.
:::

Use this method to retrieve data from a remote Kameleoon server based on your active `siteCode` and the `key` argument (or the active `visitorCode` if you omit the `key`). The `visitorCode` and `siteCode` are specified in `KameleoonClientFactory.create()`. You can quickly and conveniently store data on our highly scalable remote servers using the Kameleoon Data API. Your application can then retrieve the data using this method.

Note that since a server call is required, this mechanism is asynchronous.

```dart
try {
    final data = await kameleoonClient.getRemoteData("test");
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
} on Exception {
    // Any other error (including network issues).
}
```

##### Arguments

| Name | Type | Description     |
|-------- | ------- | ----------|
| key | String | The key that the data you try to get is associated with. This field is optional. |

##### Return value

| Type | Description |
|----- | ----------- |
| `Future<dynamic>` | Future with retrieving data for specific `key` (or `visitorCode` if `key` is omitted). |

|Type | Description |
|-------- | ------- |
| PlatformException | Exception indicating that the native plugin integration works incorrectly.
| Exception | Exception indicating that the request timed out or any other reason of failure.|

#### getRemoteVisitorData()

`getRemoteVisitorData()` is an asynchronous method for retrieving Kameleoon Visits Data for the `visitorCode` from the Kameleoon Data API. This method adds the data to storage for other methods to use when making targeting decisions.

Data obtained using this method plays an important role when you want to:

* use data collected from other devices.
* access a user's history, such as custom data collected during previous visits.

Read [this article]( https://developers.kameleoon.com/feature-management-and-experimentation/using-visit-history-in-feature-flags-and-experiments/) for a better understanding of possible use cases.

:::caution
By default, `getRemoteVisitorData()` automatically retrieves the latest stored custom data with `scope=Visitor` and attaches them to the visitor without having to call `addData()`. It is particularly useful for [synchronizing custom data between multiple devices](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/nodejs-sdk/#synchronizing-custom-data-across-devices).
:::

```dart
// Visitor data will be fetched and automatically added for `visitorCode`.
try {
    final visitorData = await kameleoonClient.getRemoteVisitorData();
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
} on Exception {
    // Any other error (including network issues).
}

// If you only want to fetch data and add it yourself manually, set addData == `false`.
try {
    final visitorData = await kameleoonClient.getRemoteVisitorData(addData: false);
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
} on Exception {
    // Any other error (including network issues).
}

// If you want to fetch custom list of data types
final filter = RemoteVisitorDataFilter.withValues(
    previousVisitAmount: 25,
    currentVisit: true,
    conversions: true,
);
try {
    final visitorData = await kameleoonClient.getRemoteVisitorData(filter: filter, addData: false);
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
} on Exception {
    // Any other error (including network issues).
}
```

##### Arguments

Name | Type | Description
--------- | ------- | -----------
filter | `RemoteVisitorDataFilter` | Filter that selects which data should be retrieved from visit history. By default, `getRemoteVisitorData` retrieves `CustomData` from the current and latest previous visit (`RemoteVisitorDataFilter()`). All other filters parameters default to `false`. This field is optional.
addData | boolean | A boolean indicating whether the method should automatically add retrieved data for a visitor. If unspecified, the default value is **true**. This field is optional.

##### Return value

| Type | Description |
|----- | -------     |
|`Future<List<Data>>` | An array containing the fetched data for the visitor. |

##### Exceptions thrown

|Type | Description |
|-------- | ------- |
| PlatformException | Exception indicating that the native plugin integration doesn't work correctly.
| Exception | Exception indicating that the request timed out or any other reason of failure.|

##### Using parameters in getRemoteVisitorData()

The `getRemoteVisitorData()` method offers flexibility by letting you define various parameters when retrieving data on visitors. Whether you're targeting based on goals, experiments, or variations, the same approach applies across all data types.

For example, suppose you want to retrieve data on visitors who completed a goal "Order transaction". You can specify parameters within the `getRemoteVisitorData()` method to refine your targeting. For instance, if you want to target only users who converted on the goal in their last five visits, you can set the `previousVisitAmount` parameter to `5` and `conversions` to `true`.

The flexibility shown in this example is not limited to goal data. You can use parameters within the `getRemoteVisitorData()` method to retrieve data on a variety of visitor behaviors.

:::note
Here is the list of available `RemoteVisitorDataFilter` options:

| Name                             | Type      | Description                                                                  | Default |
| -------------------------------- | --------- | ---------------------------------------------------------------------------- | ------- |
| previousVisitAmount (_optional_)         | `int` | Number of previous visits to retrieve data from. Number between `1` and `25` | `1`|
| currentVisit (_optional_)                | `boolean` | If true, current visit data will be retrieved. | `true`  |
| customData (_optional_)                  | `boolean` | If true, custom data will be retrieved. | `true`  |
| geolocation (_optional_)                 | `boolean` | If true, geolocation data will be retrieved. | `false` |
| conversions (_optional_)                 | `boolean` | If true, conversion data will be retrieved. | `false` |
| experiments (_optional_)                 | `boolean` | If true, experiment data will be retrieved. | `false` |
| pageViews (_optional_, _web only_)       | `boolean` | If true, page data will be retrieved. | `false` |
| device (_optional_, _web only_)          | `boolean` | If true, device data will be retrieved. | `false` |
| browser (_optional_, _web only_)         | `boolean` | If true, browser data will be retrieved. | `false` |
| operatingSystem (_optional_, _web only_) | `boolean` | If true, operating system data will be retrieved. | `false` |
| kcs (_optional_)                 | `boolean` | If true, Kameleoon Conversion Score (KCS) will be retrieved. Requires the [AI Predictive Targeting add-on](https://help.kameleoon.com/target-users-by-ai-propensity-score-kameleoon-conversion-score/)                                    | `false` |
| visitorCode (_optional_)         | `boolean` | If true, Kameleoon will retrieve the `visitorCode` from the most recent visit and use it for the current visit. This is necessary if you want to ensure that the visitor, identified by their `visitorCode`, always receives the same variation across visits for [Cross-device experimentation](/core-concepts/cross-device-experimentation). | `true` |
| cbs (_optional_)                 | `boolean` | <Text x={Shared.RemoteVisitorDataFilter.CBS}/> | `false` |
:::

#### getVisitorWarehouseAudience()

Retrieves all audience data associated with the visitor in your data warehouse. The optional `warehouseKey` parameter is typically your internal user ID. The `customDataIndex` parameter corresponds to the Kameleoon custom data that Kameleoon uses to target your visitors. You can refer to the [warehouse targeting documentation](https://help.kameleoon.com/warehouse-audience-targeting/) for additional details. The method returns the result as a `CustomData` object, confirming that the data has been added to the visitor and is available for targeting purposes.

:::note
Since a server call is required, this mechanism is asynchronous.
:::

```dart
try {
    final customData = await kameleoonClient.getVisitorWarehouseAudience(customDataIndex);
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
} on Exception {
    // Any other error (including network issues).
}

// If you need to specify warehouse key
try {
    final customData = await kameleoonClient.getVisitorWarehouseAudience(customDataIndex, "warehouseKey");
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
} on Exception {
    // Any other error (including network issues).
}
```

##### Arguments

| Name    | Type | Description  |
|-------- | ------- | ----------- |
|visitorCode | string | A unique visitor identification string, can't exceed 255 characters. |
|customDataIndex | int | An integer representing the index of the custom data you want to use to target your BigQuery Audiences.|
|warehouseKey | string | A unique key to identify the warehouse data (usually, your internal user ID). This field is optional.|

##### Return value

| Type | Description |
|----- | -------     |
|`Future<CustomData>` | A `CustomData` instance confirming that the data has been added to the visitor.|

#####  Exceptions thrown

|Type | Description |
|-------- | ------- |
| PlatformException | Exception indicating that the native plugin integration doesn't work correctly.
| Exception | Exception indicating that the request timed out or any other reason of failure.|

#### setLegalConsent()

You must use this method to specify whether the visitor has given legal consent to use their personal data. Setting the `consent` parameter to `false` limits the types of data that you can include in tracking requests. This method helps you adhere to legal and regulatory requirements while responsibly managing visitor data. You can find more information on personal data in the [consent management policy](https://help.kameleoon.com/consent-management-policy/).

```dart
try {
    final customData = await kameleoonClient.setLegalConsent(true);
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
} on Exception {
    // Any other error (including network issues).
}
```

##### Arguments

Name | Type | Description
---- | ---- | -----------
consent | boolean | A boolean value representing the legal consent status. `true` indicates the visitor has given legal consent, `false` indicates the visitor has never provided, or has withdrawn, legal consent. This field is required.

##### Exceptions thrown

|Type | Description |
|-------- | ------- |
| PlatformException | Exception indicating that the native plugin integration works incorrectly.

### Data types

This section lists the `Data` types supported by Kameleoon. We provide several standard data types and the `CustomData` type that lets you define custom data types.

#### Conversion

<Conversion sec="description" c={Context}/>
<Conversion sec="arguments" c={Context}/>

```dart
try {
    final conversion = Conversion(32, 10);
    final conversionMetadata = Conversion(32, 10, false, [CustomData.withIndex(1, values: ["true"])]);
    final conversionOptParams = Conversion.withOptParams(32, metadata: [CustomData.withIndex(1, values: ["true"])]);

    await kameleoonClient.addData([conversion, conversionMetadata, conversionOptParams]);
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
}
```

#### CustomData

:::note
This data type is available for both types of SDKs: Mobile & Web.
:::

`CustomData` allows any type of data to be easily associated with each visitor. `CustomData` can then be used as a targeting condition in [segments](https://help.kameleoon.com/create-new-segment/) or as a filter/breakdown in experiment reports.

To learn more about custom data, please refer to this [article](/core-concepts/custom-data).

| Name   | Type                  | Description                                                          |
|--------|-----------------------|----------------------------------------------------------------------|
| index/name _(required)_ | `int`/`String` | Index or Name of the custom data. **Either `index` or `name` must be provided** to identify the data. | |
| overwrite _(optional)_ | `bool` | Flag to explicitly control how the values are stored and how they appear in reports. [See more](https://developers.kameleoon.com/core-concepts/custom-data/#default-logic-when-overwrite-parameter-is-false-or-omitted) | `true` |
| values _(optional)_ | `List<String>` | Values of the custom data to be stored. | |

:::note
- Each visitor is allowed only one `CustomData` for each unique `index`. Adding another `CustomData` with the same `index` will replace the existing `CustomData`.
- The custom data `index` can be found in the [Custom Data dashboard](https://help.kameleoon.com/manage-your-custom-data/) under the “INDEX” column.
- To prevent the SDK from sending data with the selected index to Kameleoon servers for privacy reasons, enable the **Use this data only locally for targeting purposes** option when creating custom data.
- Adding a `CustomData` instance created with a name when the SDK instance configuration is not up to date or the name is not registered, will result in the data being ignored.
:::

```dart
try {
    await kameleoonClient.addData([CustomData.withIndex(1, values: ["some custom value"])]);

    // With several values
    await kameleoonClient.addData(CustomData.withIndex(1, values: ["value 1", "value 2"]))

    // To set the 'overwrite' flag to false
    await kameleoonClient.addData(CustomData.withIndex(1, overwrite: false, values: ["first value", "second value"]))

    // To use a name instead of the index
    await kameleoonClient.addData(CustomData.withName("my-custom-data", values: ["value"]))
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
}
```

#### Device

:::note
This data type is available for both types of SDKs: Mobile & Web.
:::

Store information about the user's device.

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| device | Devices | List of devices: `phone`, `table`, `desktop`. This field is mandatory. |

```dart
try {
    await kameleoonClient.addData([Device(Devices.phone)]);
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
}
```

#### Geolocation

:::note
This data type is available for both types of SDKs: Mobile & Web.
:::

<Geolocation sec="description" c={Context}/>

<Geolocation sec="arguments" c={Context}/>

```dart
try {
    await kameleoonClient.addData([Geolocation("France", region: "Île-de-France", city: "Paris")]);
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
}
```

#### Browser

:::note
The data type is available only for Web SDK
:::

<Browser sec="description" c={Context}/>

<Browser sec="arguments" c={Context}/>

```dart
try {
    await kameleoonClient.addData([Browser(Browsers.chrome)]);

    await kameleoonClient.addData([Browser(Browsers.chrome, 10.0)]);
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
}
```

#### PageView

:::note
This data type is only available for Web SDKs.
:::

| Name      | Type          | Description                                        |
|-----------|---------------|----------------------------------------------------|
| url       | String        | URL of the page viewed. This field is mandatory.   |
| title     | String        | Title of the page viewed. This field is mandatory. |
| referrers | `List<int>`    | Referrers of viewed pages. This field is optional. |

:::note
The referrer's index (ID) is available in the Acquisition channel configuration page of the Kameleoon app. Be careful: this index starts at 0, so the first [acquisition channel](https://help.kameleoon.com/create-acquisition-channel) you create for a given site will have the ID 0, not 1.
:::

```dart
try {
    await kameleoonClient.addData([PageView("https://url.com", "title", [3])]);
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
}
```

#### OperatingSystem

:::note
This data type is only available for Web SDKs.
:::

`OperatingSystem` contains information about the operating system on the visitor's device.

:::tip
Each visitor can only have one `OperatingSystem`. Adding a second `OperatingSystem` overwrites the first one.
:::

| Name | Type | Description  |
| ---- | ---- | -----------  |
| type | `OperatingSystems` | List of operating systems: `windows`, `mac`, `ios`, `linux`, `android`, `windowsPhone` . This field is required.

```dart
try {
    await kameleoonClient.addData([OperatingSystem(OperatingSystem.linux)]);
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
}
```

#### Cookie

:::note
This data type is only available for Web SDKs.
:::

`Cookie` contains information about the cookie stored on the visitor's device.

| Name | Type | Description  |
| ---- | ---- | -----------  |
| cookies | `Map<String, String>` | A string object map consisting of cookie keys and values. This field is required.

:::tip
Each visitor can only have one `Cookie`. Adding second `Cookie` overwrites the first one.
:::


```dart
try {
    await kameleoonClient.addData([Cookie({
        "my_key1": "my_value1",
        "my_key2": "my_value2"
    })]);
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
}
```

### Returned Types

#### DataFile

<DataFile sec="description" c={Context}/>

<DataFile sec="arguments" c={Context}/>

```dart
final featureFlags = dataFile.featureFlags
```

#### FeatureFlag

<FeatureFlag sec="description_rules" c={Context}/>

<FeatureFlag sec="arguments_rules" c={Context}/>

```dart
// Check whether the feature flag is enabled in the current environment
final isEnvironmentEnabled = featureFlag.environmentEnabled

// Retrieve the key of the default variation
final defaultVariationKey = featureFlag.defaultVariationKey

// Retrieve the default variation object
final defaultVariation = featureFlag.defaultVariation

// Retrieve all variations of the feature flag as a map (key = variation key, value = Variation object)
final variations = featureFlag.variations

// Retrieve all targeting rules associated with the feature flag
final rules = featureFlag.rules
```

#### Rule

<Rule sec="description" c={Context}/>

<Rule sec="arguments" c={Context}/>

```dart
// Retrieve all variations of the rule as a map (key = variation key, value = Variation object)
final variations = rule.variations
```

#### Variation

`Variation` contains information about the visitor's assigned variation (or the default variation, if no specific assignment exists).

| Name        | Type                         | Description                                                                 |
| ----------- | ---------------------------- | --------------------------------------------------------------------------- |
| name       | `String`                     | The name of the variation.                                                   |
| key       | `String`                     | The unique key identifying the variation.                                   |
| id        | `int?`                    | The ID of the assigned variation (or `-1` if it's the default variation).  |
| experimentId | `int?`                 | The ID of the experiment associated with the variation (or `-1` if default). |
| variables | `Map<String, Variable>`      | A map containing the variables of the assigned variation, keyed by variable names. This could be an empty collection if no variables are associated. |

:::note
- The `Variation` object provides details about the assigned variation and its associated experiment, while the [`Variable`](#variable) object contains specific details about each variable within a variation.
- Ensure that your code handles the case where `id` or `experimentId` may be `-1`, indicating a default variation.
- The `variables` map might be empty if no variables are associated with the variation.
:::

```dart
// Retrieving the variation name
var variationName = variation.name

// Retrieving the variation key
var variationKey = variation.key;

// Retrieving the variation id
var variationId = variation.id;

// Retrieving the experiment id
var experimentId = variation.experimentId;

// Retrieving the variables map
var variables = variation.variables;
```

#### Variable

`Variable` contains information about a variable associated with the assigned variation.

| Name    | Type      | Description                                                                                                      |
| ------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| key   | `String`  | The unique key identifying the variable.                                                                         |
| type  | `String`  | The type of the variable. Possible values: **BOOLEAN**, **NUMBER**, **STRING**, **JSON**.                        |
| value | `dynamic`    | The value of the variable, which can be of the following types: **bool**, **int**, **double**, **String**, **Map\<String, dynamic\>** (json object), **[dynamic]** (json array). |

```swift
// Retrieving the variables map
var variables = variation.variables;

// Variable type can be retrieved for further processing
var type = variables["isDiscount"]?.type ?? "";

// Retrieving the variable value by key
var isDiscount = variables["isDiscount"]?.value as bool? ?? false;

// Variable value can be of different types
var title = variables["title"]?.value as String? ?? "";
```

### Deprecated methods

:::caution
These methods are deprecated and will be removed in SDK version `4.0.0`.
:::

#### isReady()

:::caution
Use [`isReadyAsync()`](#isreadyasync) instead. On iOS and Android, [`isReady()`](#isready) may return incorrect (`false`) results even if the SDK has already been initialized with [`defaultDataFile`](#initialize-the-kameleoon-client).
:::


For mobile SDKs, the Kameleoon Client can't initialize immediately as it must perform a server call to retrieve the current configuration for the active feature flags. Use `isReady()` to check if the SDK is ready by calling this method before triggering any feature flags.

Alternatively, you can use a callback (see the [`runWhenReady()`](#runwhenready) method for details).

```dart
final ready = kameleoonClient.isReady();
```

##### Return value

| Name  | Type | Description                                                                                     |
| ----- | ---- | ----------------------------------------------------------------------------------------------- |
| ready | bool | Boolean representing the SDK's status (properly initialized, or not yet ready to be used). |

#### getFeatureVariationKey()

- 📨 _Sends Tracking Data to Kameleoon_

:::note
Use [`getVariation()`](#getvariation) instead.
:::

Use this method to get the feature variation key for a visitor. This method takes `featureKey` as a required argument to retrieve the variation key for the specified user.

If the visitor has never been associated with this feature flag, the SDK returns a randomly assigned variation key (according to the feature flag rules). If the visitor is already registered with this feature flag, this method returns the previous variation key. If the user does not match any of the rules, the default value will be returned, which is defined in your customer's account.

Ensure you set up proper error handling as shown in the example code to catch potential exceptions.

```dart
String featureKey = "new_checkout";
String variationKey = "";

try {
    variationKey = await kameleoonClient.getFeatureVariationKey(featureKey);
} on SDKNotReady {
    // Exception indicates that the SDK has not completed its initialization yet.
} on FeatureNotFound {
    // The error has occurred; feature flag isn't found in current configuration.
} on FeatureEnvironmentDisabled {
    // The feature flag is disabled for the environment.
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
} on Exception {
    // Any other error.
}

switch(variationKey) {
    case 'on':
        // Main variation key is selected for visitorCode
        break;
    case 'alternative_variation':
        // Alternative variation key
        break;
    default:
        // Default variation key
        break;
}
```

##### Arguments

| Name | Type | Description |
| ---- | ---- | ----------- |
| featureKey | String | Key of the feature you want to expose to a user. This field is mandatory. |

##### Return value

| Type    | Description                                                          |
| ------- | -------------------------------------------------------------------- |
| `Future<String>` | Variation key of the feature flag that is registered to a visitor. |

##### Exceptions thrown

| Type | Description |
| ---- | ----------- |
| SDKNotReady | Exception indicating that the SDK has not completed its initialization. |
| FeatureNotFound  | Exception indicating that the requested feature ID was not found in the SDK's internal configuration. This exception usually means that the feature flag has not been activated on the Kameleoon side (but code implementing the feature is already deployed in the application). |
| PlatformException | Exception indicating that the native plugin integration don't work correctly.

#### getActiveFeatures()

:::note
- Use [`getVariations()`](#getvariations) instead.
- Previously called `getFeatureListForVisitorCode`, which was removed in SDK version `4.0.0` release.
:::

`getActiveFeatures` method retrieves information about the active feature flags that are available for the visitor.

```dart
try {
    final activeFeatures = await kameleoonClient.getActiveFeatures();
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
}
```

##### Return value

| Type | Description |
| ---- | ----------- |
| `Future<Map<String, Variation>>` | Map that contains the assigned variations of the active features using the keys of the corresponding active features.  |

#### getFeatureVariable()

- 📨 _Sends Tracking Data to Kameleoon_

:::note
- Use [`getVariation()`](#getvariation) instead.
- This method was previously called `obtainFeatureVariable`, which was removed in SDK version `3.0.0`.
:::

This method gets a variable value of variation key for a specific user. It takes a `featureKey` and `variableKey` as required arguments.

If the visitor has never been associated with the `featureKey`, the SDK returns a randomly assigned variable value for the specified variation key (according to the feature flag rules). If the visitor is already registered with this feature flag, this method returns the variable value for previously registered variation. If the user does not match any of the rules, the default variable value is returned.

Ensure you set up proper error handling as shown in the example code to catch potential exceptions.

```dart
String featureKey = "feature_key";
String variableKey = "product_number";
int recommendedProductsNumber = 5;
try {
  recommendedProductsNumber = await kameleoonClient.getFeatureVariable(featureKey, variableKey);
} on SDKNotReady {
  // Exception indicates that the SDK has not completed its initialization yet.
} on FeatureNotFound {
  // The error has occurred; feature flag isn't found in current configuration.
} on FeatureEnvironmentDisabled {
  // The feature flag is disabled for the environment.
} on FeatureVariableNotFound {
  // Requested variable not defined in Kameleoon.
} on KameleoonException {
  // Generic exception in native plugin integration occurred.
} on Exception {
  // Any other error.
}

setState(() {
    _recommendedProductsNumber = recommendedProductsNumber;
});
```

##### Arguments

| Name | Type | Description |
| ---- | ---- | ----------- |
| featureKey   | String | Key of the feature you want to expose to a user. This field is mandatory. |
| variableKey  | String | Name of the variable for which you want to get a value. This field is mandatory. |

##### Return value

| Type    | Description |
| ------- | ----------- |
| `Future<dynamic>` | Value of the variation's variable that is registered to a visitor for this feature flag. Possible types: `bool`, `int`, `double`, `String`, `List`, `Map` |

##### Exceptions thrown

| Type | Description |
| ---- | ----------- |
| SDKNotReady | Exception indicating that the SDK has not completed its initialization. |
| FeatureNotFound  | Exception indicating that the requested feature ID was not found in the SDK's internal configuration. This exception usually means that the feature flag has not been activated on the Kameleoon side (but code implementing the feature is already deployed in the application). |
| FeatureEnvironmentDisabled | Exception indicating that the feature flag is disabled for the visitor's current environment (for example, production, staging, or development). |
| FeatureVariableNotFound | Exception indicating that the specified variable was not found. Check that the variable key in the Kameleon app matches the key in your code. |
| PlatformException | Exception indicating that the native plugin integration works incorrectly.

#### getFeatureVariationVariables()

:::note
- Use [`getVariation()`](#getvariation) instead.
- This method was previously called `getFeatureAllVariables`, which was removed in SDK version `4.0.0` release.
:::

To retrieve all of a feature's variables, call this method. You can modify your feature variables in the Kameleoon app.

This method takes one input parameter: `featureKey`. It returns the data as a `Map<String, Object>` type, as defined in the Kameleoon app. It throws an exception (`FeatureNotFound`) if the requested feature was not found in the SDK's internal configuration.

```dart
final featureKey = "featureKey";
final variationKey = "variationKey";

try {
    final allVariables = await client.getFeatureVariationVariables(featureKey, variationKey);
} on SDKNotReady {
  // Exception indicates that the SDK has not completed its initialization yet.
} on FeatureNotFound {
    // The error has occurred; feature flag isn't found in current configuration.
} on FeatureEnvironmentDisabled {
    // The feature flag is disabled for the environment.
} on KameleoonException {
    // Generic exception in native plugin integration occurred.
} on Exception {
    // Any other error.
}
```

##### Arguments

| Name | Type | Description |
| ---- | ---- | ----------- |
| featureKey | String | Identificator key of the feature you want to obtain. This field is mandatory. |
| variationKey | String | The key of the variation you want to obtain. This field is mandatory.          |

##### Return value

| Type | Description |
| ---- | ----------- |
| `Future<Map<String, dynamic>>` | Data associated with this feature flag. The values of can be an int, double, bool, String, List or Map (depending on the type defined on the web interface). |

##### Exceptions thrown

| Type | Description |
|----- | ----------- |
| FeatureNotFound | Exception indicating that the requested feature has not been found in the SDK's internal configuration. This exception is usually normal and means that the feature flag has not been activated on Kameleoon''s side. |
| FeatureEnvironmentDisabled | Exception indicating that feature flag is disabled for the visitor's current environment (for example, production, staging, or development). |
| FeatureVariationNotFound | Exception indicating that the requested variation ID has not been found in the SDK's internal configuration. This exception is usually normal and means that the variation's corresponding experiment has not been activated on Kameleoon's side. |
| PlatformException | Exception indicating that the native plugin integration doesn't work correctly.
