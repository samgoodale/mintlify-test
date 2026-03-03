---
title: 'C# SDK'
---

Welcome to the developer documentation for the Kameleoon C# SDK! Use our SDK to run experiments on your back-end .NET application server. It is easy to integrate our SDK into your web-application, and its memory and network usage are low.

**Getting started**: For help getting started, see the [developer guide](#developer-guide).

**SDK methods**: For the full reference documentation of the C# SDK methods, see the [reference](#reference) section.

**Changelog**: Latest version of the C# SDK: 4.18.1 [changelog](https://github.com/Kameleoon/client-csharp/blob/master/CHANGELOG.md).

## Developer guide

### Getting started

This guide is designed to help you integrate our SDK into your C# applications.

#### Starter kit

#### Install the C# client

You can use the NuGet, .NET CLI, or Paket package manager to install the C# client.

<Tabs>
<Tab title="NuGet Package Manager">

```sh
Install-Package KameleoonClient -Version 4.17.0
```
</Tab>
<Tab title=".NET CLI">

```sh
dotnet add package KameleoonClient --version 4.17.0
```

</Tab>
<Tab title="Paket CLI">

```sh
paket add KameleoonClient --version 4.17.0
```

</Tab>
</Tabs>

#### Additional configuration

Create a ``.properties`` configuration file to provide credentials and customize the SDK's behavior. You can also [download a sample configuration](./assets/client%20configs/client-csharp.conf) file. Save this file in the default path `/etc/kameleoon/client-csharp.conf`. If you place the file in another location, you'll need to pass the path as an argument to `KameleoonClientFactory.Create()`. With the current version of the C# SDK, these are the available keys:

|Key                | Description    |
|----------------- | ---------------------------------------------------------------------------- |
|`client_id`          | Required for authentication to the Kameleoon service. To find your `client_id`, see the [API credentials](https://help.kameleoon.com/api-credentials/) documentation.|
|`client_secret`      | Required for authentication to the Kameleoon service. To find your `client_secret`, see the [API credentials](https://help.kameleoon.com/api-credentials/) documentation.|
|`session_duration_minute` | Designates the time interval (in minutes) that Kameleoon stores the visitor and their associated data in memory (RAM). Note that increasing the session duration increases the amount of RAM that needs to be allocated to store visitor data. The default session duration is 30 minutes.|
| `refresh_interval_minute`          | Specifies the refresh interval, in minutes, that the SDK fetches the configuration for the active experiments and feature flags. The value determines the maximum time it takes to propagate changes, such as activating or deactivating feature flags or launching experiments, to your production servers. If left unspecified, the default interval is set to 60 minutes. Additionally, we offer a [streaming mode](/feature-management-and-experimentation/technical-considerations/#streaming-premium-option) that uses server-sent events (SSE) to push new configurations to the SDK automatically and apply new configurations in real-time, without any delays.
| `default_timeout_millisecond`    | Specifies the timeout, in milliseconds, for network requests from the SDK. Set the value to 30 seconds or more if you do not have a stable connection. The default value is `10000` ms. Some methods have an additional parameter that you can use to override the default timeout for that particular method. If you do not specify the timeout for a method explicitly, the SDK uses this default value.
| `tracking_interval_millisecond` | Specifies the interval for tracking requests, in milliseconds. All visitors who were evaluated for any feature flag or had data flushed will be included in this tracking request, which is performed once per interval. The minimum value is `100` ms and the maximum value is `1000` ms, which is also the default value.
|`environment`        | Environment from which a feature flag’s configuration is to be used. The value can be `production`, `staging`, `development`. The default environment value is `production`. See the [managing environments](https://help.kameleoon.com/manage-environments/) article for details. |
|`top_level_domain`| The current top-level domain for your website. Use the format `example.com`. Don't include `https://`, `www`, or other subdomains. Kameleoon uses this information to set the corresponding cookie on the top-level domain. This field is mandatory. |
|`proxy_host`         | Sets the proxy host for all outgoing server calls made by the SDK. |
| `network_domain`                | Custom domain used by SDKs for outgoing requests, often for proxying. Must be a valid domain (e.g., `example.com` or `sub.example.com`). Invalid formats default to Kameleoon's value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Initialize the Kameleoon client

After you've installed the SDK and configured your credentials and SDK behavior, create the Kameleoon client in your application code. For example:

```csharp
using Kameleoon;

string siteCode = "a8st4f59bj";

try {
    // Read from default configuration path: "/etc/kameleoon/client-csharp.conf"
    IKameleoonClient kameleoonClient = KameleoonClientFactory.Create(siteCode);
} catch (KameleoonException.SiteCodeIsEmpty e) {
    // indicates that provided site code is empty
} catch (KameleoonException.ConfigCredentialsInvalid exception) {
    // indicates that provided clientId / clientSecret are not valid
}

try {
    IKameleoonClient kameleoonClient = KameleoonClientFactory.Create(siteCode, "custom/file/path/client-csharp.conf");
} catch (KameleoonException.SiteCodeIsEmpty e) {
    // indicates that provided site code is empty
} catch (KameleoonException.ConfigCredentialsInvalid exception) {
    // indicates that provided clientId / clientSecret are not valid
}

try {
    KameleoonClientConfig config = new KameleoonClientConfig(
        clientId: "<clientId>", // mandatory
        clientSecret: "<clientId>", // mandatory
        refreshIntervalMinute: 60, // in minutes, optional (60 minutes by default)
        sessionDurationMinute: 30, // in minutes, optional (30 minutes by default)
        defaultTimeoutMillisecond: 10_000, // in milliseconds, optional (10000 ms by default)
        trackingIntervalMilliseconds: 1000, // in milliseconds, optional (1000 ms by default)
        environment: "development", // optional
        topLevelDomain: "example.com", // mandatory if you use hybrid mode (engine or web experiments)
        proxyHost: "proxy.host.com", // optional
        networkDomain: "example.com", // optional
    );
    IKameleoonClient kameleoonClient = KameleoonClientFactory.Create(siteCode, config);
} catch (KameleoonException.SiteCodeIsEmpty e) {
    // indicates that provided site code is empty
} catch (KameleoonException.ConfigCredentialsInvalid exception) {
    // indicates that provided clientId / clientSecret are not valid
}
```
An `IKameleoonClient` is a singleton object that connects your app to the Kameleoon platform. It includes all the methods and features you need to run an experiment.

As a developer, you must ensure your app uses the correct logic for A/B testing with Kameleoon. It’s best to exclude a visitor from the experiment if you haven’t launched it yet. Excluding is simple because this fits with the default logic for variations.

#### Activating a feature flag

##### Assigning a unique ID to a user

##### Retrieving a flag configuration

##### Adding data points to target a user or filter / breakdown visits in reports

##### Tracking goal conversions

##### Sending events to analytics solutions

### Cross-device experimentation

#### Synchronizing custom data across devices

```csharp
// In this example Custom data with index `90` was set to "Visitor" scope on Kameleoon Platform.
const int VisitorScopeCustomDataIndex = 90;

kameleoonClient.AddData(visitorCode, new CustomData(VisitorScopeCustomDataIndex, "your data"));
kameleoonClient.Flush(visitorCode);
```

```csharp
// Before working with the data, call the `GetRemoteVisitorData` method.
await kameleoonClient.GetRemoteVisitorData(visitorCode);

// After calling the method, the SDK on Device B will have access to CustomData of Visitor scope as defined on Device A.
// So, "your data" will be available for targeting and tracking the visitor.
```

#### Using custom data for session merging

```csharp
// In this example, `91` represents the index of the Custom Data
// configured as a unique identifier in Kameleoon.
const int MappingIndex = 91;
const string FeatureKey = "ff123";

// 1. Before the visitor is authenticated

// Retrieve the variation for an unauthenticated visitor.
// Assume `anonymousVisitorCode` is the randomly generated ID for that visitor.
Variation anonymousVariation = kameleoonClient.GetVariation(anonymousVisitorCode, FeatureKey);

// 2. After the visitor is authenticated

// Assume `userId` is the visitor code of the authenticated visitor.
kameleoonClient.AddData(anonymousVisitorCode, new CustomData(MappingIndex, userId));
kameleoonClient.Flush(anonymousVisitorCode, instant=true);

// Indicate that `userId` is a unique identifier.
kameleoonClient.AddData(userId, new UniqueIdentifier(true));

// 3. After the visitor has been authenticated

// Retrieve the variation for the `userId`, which will match the anonymous visitor code's variation.
Variation userVariation = kameleoonClient.GetVariation(userId, FeatureKey);
bool isSameVariation = userVariation.Key == anonymousVariation.Key; // true

// The `userId` and `anonymousVisitorCode` are now linked and tracked as a single visitor.
kameleoonClient.TrackConversion(userId, 123, 10.0);

// Additionally, the linked visitors will share all fetched remote visitor data.
await kameleoonClient.GetRemoteVisitorData(userId);
```

### Using a custom bucketing key

#### Use cases

#### Technical details

```csharp
kameleoonClient.AddData(visitorCode, new CustomData(index, "newVisitorCode"));
```

#### Technical requirementes

### Targeting conditions

### Logging

#### Log levels

```csharp
// The `None` log level does not allow logging.
Kameleoon.Logging.KameleoonLogger.LogLevel = Kameleoon.Logging.LogLevel.None;

// The `Error` log level only allows logging issues that may affect the SDK's primary behavior.
Kameleoon.Logging.KameleoonLogger.LogLevel = Kameleoon.Logging.LogLevel.Error;

// The `Warning` log level allows logging issues which may require additional attention.
// It extends the `Error` log level.
// The `Warning` log level is a default log level.
Kameleoon.Logging.KameleoonLogger.LogLevel = Kameleoon.Logging.LogLevel.Warning;

// The `Info` log level allows logging general information on the SDK's internal processes.
// It extends the `Warning` log level.
Kameleoon.Logging.KameleoonLogger.LogLevel = Kameleoon.Logging.LogLevel.Info;

// The `DEBUG` level logs additional details about the SDK’s internal processes and extends the `INFO` level
// with more granular. diagnostic output.
// This information is not intended for end-user interpretation but can be sent to our support team
// to assist with internal troubleshooting.
Kameleoon.Logging.KameleoonLogger.LogLevel = Kameleoon.Logging.LogLevel.Debug;
```

#### Custom handling of logs

```csharp
class CustomLogger : Kameleoon.Logging.ILogger
{
    private readonly Microsoft.Extensions.Logging.ILogger inner;

    public CustomLogger(Microsoft.Extensions.Logging.ILogger inner)
    {
        this.inner = inner;
    }

    // `Log` method accepts logs from the SDK
    public void Log(Kameleoon.Logging.LogLevel level, string message)
    {
        // Custom log handling logic here. For example:
        switch (level)
        {
            case Kameleoon.Logging.LogLevel.Error:
                Microsoft.Extensions.Logging.LoggerExtensions.LogError(inner, message);
                break;
            case Kameleoon.Logging.LogLevel.Warning:
                Microsoft.Extensions.Logging.LoggerExtensions.LogWarning(inner, message);
                break;
            case Kameleoon.Logging.LogLevel.Info:
                Microsoft.Extensions.Logging.LoggerExtensions.LogInformation(inner, message);
                break;
            case Kameleoon.Logging.LogLevel.Debug:
                Microsoft.Extensions.Logging.LoggerExtensions.LogDebug(inner, message);
                break;
        }
    }
}

// Log level filtering is applied separately from log handling logic.
// The custom logger will only accept logs that meet or exceed the specified log level.
// Ensure the log level is set correctly.
Kameleoon.Logging.KameleoonLogger.LogLevel = Kameleoon.Logging.LogLevel.Debug; // Optional; defaults to `LogLevel.Warning`.
Kameleoon.Logging.KameleoonLogger.Logger = new CustomLogger();
```

## Reference

This is the full reference documentation of the C# SDK.

### Initialization

#### Create()

To start using the SDK, you need to initialize it. Your app interacts with the SDK through the `KameleoonClient` class found in `Kameleoon.IKameleoonClient`. You can create this object using the static method **Kameleoon.KameleoonClientFactory** `Create()`.

```csharp
using Kameleoon;

string siteCode = "a8st4f59bj";

try {
    // Read from default configuration path: "/etc/kameleoon/client-csharp.conf"
    IKameleoonClient kameleoonClient = KameleoonClientFactory.Create(siteCode);
} catch (KameleoonException.SiteCodeIsEmpty e) {
    // indicates that provided site code is empty
} catch (KameleoonException.ConfigCredentialsInvalid exception) {
    // indicates that provided clientId / clientSecret are not valid
}

try {
    IKameleoonClient kameleoonClient = KameleoonClientFactory.Create(siteCode, "custom/file/path/client-csharp.conf");
} catch (KameleoonException.SiteCodeIsEmpty e) {
    // indicates that provided site code is empty
} catch (KameleoonException.ConfigCredentialsInvalid exception) {
    // indicates that provided clientId / clientSecret are not valid
}

try {
    KameleoonClientConfig config = new KameleoonClientConfig(
        clientId: "<clientId>", // mandatory
        clientSecret: "<clientId>", // mandatory
        refreshIntervalMinute: 60, // in minutes, optional (60 minutes by default)
        sessionDurationMinute: 30, // in minutes, optional (30 minutes by default)
        defaultTimeoutMillisecond: 10_000, // in milliseconds, optional (10000 ms by default)
        trackingIntervalMilliseconds: 1000, // in milliseconds, optional (1000 ms by default)
        environment: "development", // optional
        topLevelDomain: "example.com", // mandatory if you use hybrid mode (engine or web experiments)
        proxyHost: "proxy.host.com" // optional
        networkDomain: "example.com", // optional
    );
    IKameleoonClient kameleoonClient = KameleoonClientFactory.Create(siteCode, config);
} catch (KameleoonException.SiteCodeIsEmpty e) {
    // indicates that provided site code is empty
} catch (KameleoonException.ConfigCredentialsInvalid exception) {
    // indicates that provided clientId / clientSecret are not valid
}
```

##### Arguments

| Name | Type | Description      | Default |
|-------- | ------- | ---------- | ------- |
| siteCode _(required)_ | `string` | This is a [unique key](https://help.kameleoon.com/question/how-do-i-find-my-site-id/) of the Kameleoon project you are using with the SDK. | |
| configurationFilePath _(optional)_ | `string` | Path to the SDK configuration file. | `/etc/kameleoon/client-csharp.conf` |
| kameleoonConfig _(optional)_ | `KameleoonClientConfig` |  Configuration SDK object that you can pass instead of using a configuration file.| `null` |

##### Return value

| Type | Description|
|-------- | ------- |
| `IKameleoonClient` | An instance of the **KameleoonClient** class, that will be used to manage your experiments and feature flags. |

##### Exceptions thrown

|Type | Description |
|-------- | -------
| `KameleoonException.ConfigCredentialsInvalid` | Exception indicating that the requested credentials were not provided in the configuration file or as arguments on the method.|
| `KameleoonException.SiteCodeIsEmpty` | Exception indicating that the specified site code is empty string which is invalid value.|

#### WaitInit()

`WaitInit()` awaits the initialization of the Kameleoon client. This method allows you to verify that the client has successfully initialized before you proceed with other operations.

```csharp
using static Kameleoon;

try {
    await kameleoonClient.WaitInit();
} catch (Exception exception) {
    //  indicates that client could not be initialized due to the thrown exception.
}
```

##### Return value

|Type | Description|
|-------- | -------|
|Task | The task will complete when the client has been successfully initialized.|

##### Exceptions thrown

| Type | Description |
|-------- | -------  |
|Exception | Exception indicating that client is not initialized properly and cannot be used yet.|

### Feature flags and variations

#### IsFeatureActive()

- 📨 _Sends Tracking Data to Kameleoon (depending on the `track` parameter)_

<Note>
This method was previously called `ActivateFeature`, which was removed in SDK version `4.0.0`.
</Note>

To activate a feature toggle, call the `IsFeatureActive` method.

This method requires a **visitorCode** and a **featureKey** (or **featureID**) to check if a user can access a specific feature.

If the user has never been linked to this feature, the SDK will randomly decide whether to activate it, returning either **true** (the user can access the feature) or **false** (the user cannot). If the user with the given **visitorCode** is already linked to this feature, the system will return the previous value of the **featureFlag**.

Make sure to include proper error handling in your code, as shown in the example, to catch any potential errors.

If you specify a `visitorCode`, the `IsFeatureActive()` method uses it as the unique visitor identifier, which is useful for [cross-device experimentation](https://developers.kameleoon.com/core-concepts/cross-device-experimentation). When you specify a `visitorCode` and set the `isUniqueIdentifier` parameter to `true`, the SDK links the flushed data with the visitor associated with the specified identifier.

<Note>
The parameter `isUniqueIdentifier` is deprecated. Please use [`UniqueIdentifier`](#uniqueidentifier) instead.

The `isUniqueIdentifier` can be helpful in unique situations; for example, if you cannot access the anonymous `visitorCode` given to a visitor, but you can use an internal ID linked to that visitor through session merging.
</Note>
```csharp
string visitorCode = kameleoonClient.GetVisitorCode(Request, Response, "example.com");
string featureKey = "new_checkout";
bool hasNewCheckout = false;

try {
  hasNewCheckout = kameleoonClient.IsFeatureActive(visitorCode, featureKey);
  // disabling tracking
  hasNewCheckout = kameleoonClient.IsFeatureActive(visitorCode, featureKey, track: false);
}
catch (KameleoonException.FeatureNotFound e) {
  // Feature toggle not yet activated on Kameleoon's side - we consider the feature inactive.
  hasNewCheckout = false;
}
catch (Exception e) {
  // This is a generic Exception handler which will handle all exceptions.
  Console.WriteLine("Exception occured");
}
if (hasNewCheckout)
{
  // Implement new checkout code here.
}
```

##### Arguments

| Name    | Type    | Description |
|-------- | ------- | ----------- |
|visitorCode | string | Unique identifier of the user. This field is mandatory.|
|featureKey | string | Key of the feature you want to expose to a user. This field is mandatory.|
|isUniqueIdentifier (Deprecated) | bool | An optional parameter for specifying if the visitorCode is a unique identifier. If not provided, the default value is `false`. The field is optional.|
|track | bool | An optional parameter to enable or disable tracking of the feature evaluation (`true` by default).|

##### Return value

|Type     | Description |
|-------- | ----------- |
| bool    | Value of the feature that is registered for a given **visitorCode**.|

##### Exceptions thrown

| Type | Description |
|-------- | ---------|
|KameleoonException.VisitorCodeInvalid | Exception indicating that the specified visitor code is not valid. (It is either empty or longer than 255 characters).|
|KameleoonException.FeatureNotFound | Exception indicating that the requested feature ID has not been found in the internal configuration of the SDK. This is usually normal and means that the feature flag has not yet been activated on Kameleoon's side (but code implementing the feature is already deployed on the web-application's side).|

#### GetVariation()

```csharp
const string featureKey = "new_checkout";
Variation variation;

try
{
  variation = kameleoonClient.GetVariation(visitorCode, featureKey);
  // disabling tracking
  variation = kameleoonClient.GetVariation(visitorCode, featureKey, false);
} catch (KameleoonException.FeatureNotFound e)
{
  // The error has occurred; the feature flag isn't found in the current configuration.
} catch (KameleoonException.FeatureEnvironmentDisabled e)
{
  // The feature flag is disabled for the environment.
} catch (KameleoonException.VisitorCodeInvalid e)
{
  // The visitor code you passed to the method is invalid and can't be accepted by SDK.
}

// Fetch a variable value for the assigned variation.
string title = variation.Variables["title"].Value;

switch (variation.Key)
{
  case "on":
    // Main variation key is selected for visitorCode.
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

##### Return value

##### Exceptions thrown

#### GetVariations()

```csharp
IReadOnlyDictionary<string, Types.Variation> variations;
try
{
    variations = kameleoonClient.GetVariations(visitorCode);
    // only active variations
    variations = kameleoonClient.GetVariations(visitorCode, true);
    // disable tracking
    variations = kameleoonClient.GetVariations(visitorCode, track: false);
}
catch (VisitorCodeInvalid e)
{
    //  Handle exception
}
```

##### Arguments

##### Return value

##### Exceptions thrown

#### GetFeatureList()

<Note>
This method was previously named `ObtainFeatureList()`, which was removed in SDK version `4.0.0`.
</Note>

```csharp
const featureFlagIds = kameleoonClient.GetFeatureList()
```

##### Return value

#### SetForcedVariation()

```csharp
const int experimentId = 9516;
try
{
    // Forcing the variation "on" in the experiment 9516 for the visitor
    kameleoonClient.SetForcedVariation(visitorCode, experimentId, "on");

    // Forcing the variation "on" while preserving segmentation and targeting conditions during the experiment
    kameleoonClient.SetForcedVariation(visitorCode, experimentId, "on", false);

    // Resetting the forced variation for the experiment 9516 for the visitor
    kameleoonClient.SetForcedVariation(visitorCode, experimentId, null);
}
catch (KameleoonException ex)
{
    // Handling the exception
}
```

##### Arguments

##### Exceptions thrown

#### EvaluateAudiences()

```csharp
try
{
    kameleoonClient.EvaluateAudiences(visitorCode);
}
catch (KameleoonException ex)
{
    // Handling the exception
}
```

##### Arguments

##### Exceptions thrown

### Visitor data

#### GetVisitorCode()

<Note>
This method was previously called `ObtainVisitorCode`, which was removed in SDK version `4.0.0`.
</Note>

To get the Kameleoon **visitorCode** for the current visitor, use the `GetVisitorCode()` method. This method is crucial in environments where front-end and back-end systems must consistently identify users. Here’s how it works:

1. Check for a **kameleoonVisitorCode** cookie or query parameter in the current HTTP request. If you find one, use that as the visitor identifier and skip the next step.

2. If you don’t find a cookie or parameter, either randomly create a new identifier or use the **defaultVisitorCode** argument if it’s provided. Doing so lets you use your identifiers as visitor codes, making connecting Kameleoon visitors to your own users easier without needing extra look-ups.

3. Set the server-side **kameleoonVisitorCode** cookie using the identifier value. The method returns this identifier value.

<Warning>
If you provide your own `visitorCode`, make sure it is unique! Also note that the length of `visitorCode` is limited to **255** characters. Using an identifier with too many characters will result in an exception.
</Warning>

```csharp
try
{
    string visitorCode = kameleoonClient.GetVisitorCode(Request, Response);

    string visitorCode = kameleoonClient.GetVisitorCode(Request, Response, defaultVisitorCode);
}
catch (VisitorCodeInvalid e)
{
    //  Handle exception
}
```

##### Arguments

| Name | Type | Description |
| -------- | ------- | ---------- |
| Request | Microsoft.AspNetCore.Http.HttpRequest / System.Web.HttpRequest | The current Request object should be passed as the first parameter. This field is mandatory. |
| Response | Microsoft.AspNetCore.Http.HttpResponse / System.Web.HttpResponse |  The current Response object should be passed as the second parameter. This field is mandatory. |
| defaultVisitorCode | string | This parameter will be used as the **visitorCode** if no existing **kameleoonVisitorCode** cookie is found on the request. This field is optional, and by default a random **visitorCode** will be generated. |

##### Return value

| Type | Description |
|-------- | -------- |
| string  | A **visitorCode** that will be associated with this particular user and should be used with most of the methods of the SDK. |

##### Exceptions thrown

|Type | Description |
|-------- | ------- |
|KameleoonException.VisitorCodeInvalid | Exception indicating that the provided visitor code is not valid (it is either empty or longer than 255 characters).|

#### AddData()

```csharp
kameleoonClient.AddData(new Browser(Browser.Browsers.CHROME));
kameleoonClient.AddData(
    visitorCode,
    new PageView("https://url.com", "title", new int[] {3}),
    new Conversion(32, 10f, false)
);
```
##### Arguments

##### Exceptions

#### Flush()

- 📨 _Sends Tracking Data to Kameleoon_

The `Flush()` method collects the Kameleoon data linked to the visitor. It then sends a tracking request along with all the previously added data using the `AddData` method, which has not yet been sent using one of [these methods](/feature-management-and-experimentation/faq#when-does-the-sdk-send-a-tracking-request-for-analytics). `Flush()` is non-blocking as the server call is made asynchronously.

`Flush()` lets you control when the data associated with a given `visitorCode` is sent to our servers. For instance, if you call `AddData()` a dozen times, it would be inefficient to send data to the server after each time `AddData()` is invoked, so all you have to do is call `Flush()` once at the end.

If you specify a `visitorCode`, the `Flush()` method uses it as the unique visitor identifier, which is useful for [cross-device experimentation](/core-concepts/cross-device-experimentation). When you specify a `visitorCode` and set the `isUniqueIdentifier` parameter to `true`, the SDK links the flushed data with the visitor associated with the specified identifier.

<Note>
The parameter `isUniqueIdentifier` is deprecated. Please use [`UniqueIdentifier`](#uniqueidentifier) instead.

The `isUniqueIdentifier` can be helpful in unique situations; for example, if you cannot access the anonymous `visitorCode` given to a visitor, but you can use an internal ID linked to that visitor through session merging.
</Note>

```csharp
string visitorCode = kameleoonClient.GetVisitorCode(Request, Response, "example.com");

kameleoonClient.AddData(new Browser(Browser.Browsers.CHROME));
kameleoonClient.AddData(
    visitorCode,
    new PageView("https://url.com", "title", new int[] {3}),
    new Conversion(32, 10f, false)
);

kameleoonClient.Flush(visitorCode); // Interval tracking (most performant tracking method)

kameleoonClient.Flush(true, visitorCode); // Instant tracking

// if you operate with unique ID
kameleoonClient.AddData(visitorCode, new UniqueIdentifier(true));
kameleoonClient.Flush(visitorCode);
```

##### Arguments

| Name | Type | Description |
|-------- | ------- | ----------- |
| instant | bool | Boolean flag indicating whether the data should be sent instantly (`true`) or according to the scheduled tracking interval (`false`). This field is optional.
| visitorCode | string | Unique identifier of the user. This field is mandatory. |
| isUniqueIdentifier (Deprecated) | bool | An optional parameter for specifying if the visitorCode is a unique identifier. The `visitorCode` should be provided and not `null` to apply `isUniqueIdentifier` for a visitor, otherwise it will be ignored. If not provided, the default value is `false`. The field is optional. |

#### GetRemoteData()

<Note>
This method was previously named `RetrieveDataFromRemoteSource`, which was removed in SDK version `4.0.0`.
</Note>

`GetRemoteData()` is a method that lets you fetch data for a specific **siteCode** (set in `KameleoonClientFactory.create()`) from a remote Kameleoon server using a **key** you provide. Our Data API stores this data on our servers, which are designed to efficiently handle large amounts of data. Keep in mind that because this method involves a server call, it works asynchronously.

```csharp
var testValue = await kameleoonClient.GetRemoteData("test"); // default timeout
testValue = await kameleoonClient.GetRemoteData("test", 1000);
try {
  testValue = await kameleoonClient.GetRemoteData("test");
} catch (Exception e)  {
  // Timeout or Json Parsing Exception
}
```

##### Arguments

| Name | Type | Description |
|-------- | ------- | ----------- |
| key | string | The key that the data you try to get is associated with. This field is mandatory. |
|timeout | int? | Timeout (in milliseconds). This parameter specifies the maximum amount of time to wait for a result. This field is optional, if not provided, it will use the default value of 10000 milliseconds. |

##### Return value

| Type | Description |
|------ | ---------  |
| JObject | Data associated with retrieving data for specific **key**.|

##### Exceptions thrown

|Type | Description |
|-------- | ------- |
| Exception  | Exception indicating that the request timed out or retrieved data can't be parsed with `JObject.Parse` method.|

#### GetRemoteVisitorData()

`GetRemoteVisitorData()` is a method that retrieves Kameleoon visit data for a specific user using their `VisitorCode`. It works in the background and stores this data for other methods to make targeting decisions.

This data is important for several reasons:

* It helps you use information collected from different devices.
* It allows you to access a user’s history, such as previously visited pages from earlier visits.
* It lets you use data only available on the client side, such as datalayer variables and goals that only track conversions on the front-end.

Read [this article]( https://developers.kameleoon.com/feature-management-and-experimentation/using-visit-history-in-feature-flags-and-experiments/) for a better understanding of possible use cases.

<Warning>
By default, `GetRemoteVisitorData()` automatically retrieves the latest stored custom data with `Scope=Visitor` and attaches them to the visitor without the need to call the method `AddData()`. It is particularly useful for [synchronizing custom data between multiple devices](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/nodejs-sdk/#synchronizing-custom-data-across-devices).
</Warning>

<Note>
The parameter `isUniqueIdentifier` is deprecated. Please use [`UniqueIdentifier`](#uniqueidentifier) instead.

The `isUniqueIdentifier` can be helpful in unique situations; for example, if you cannot access the anonymous `visitorCode` given to a visitor, but you can use an internal ID linked to that visitor through session merging.
</Note>

```csharp
string visitorCode = "visitorCode";
// Visitor data will be fetched and automatically added for `visitorCode`
Task<IReadOnlyCollection<IData>> visitorData = kameleoonClient.GetRemoteVisitorData(visitorCode);

// If you only want to fetch data and add it yourself manually, set addData == `false`.
Task<IReadOnlyCollection<IData>> visitorData = kameleoonClient.GetRemoteVisitorData(visitorCode, false);

// If you want to fetch custom list of data types
var filter = new RemoteVisitorDataFilter(25, customData: false, conversions: true, experiments: true);
var visitorData = kameleoonClient.getRemoteVisitorData(visitorCode, filter: filter);

try {
  IReadOnlyCollection<IData> visitorData = await kameleoonClient.GetRemoteVisitorData(visitorCode);
  // Your custom code
} catch (Exception e) {
  // Catch exception
}
```

##### Arguments

|Name | Type | Description |
|-------- | ------- | ----------- |
|visitorCode | string | The visitor code for which you want to retrieve the assigned data. This field is mandatory. |
|addData | bool | A boolean indicating whether the method should automatically add retrieved data for a visitor. This field is optional. |
|timeout | int? | Timeout (in milliseconds). This parameter specifies the maximum amount of time to wait for a result. This field is optional. If not provided, the default value is 10000 milliseconds. |
|filter | `Kameleoon.Types.RemoteVisitorDataFilter` | Filter for specifying what data should be retrieved from visits, by default only `CustomData` is retrieved from the current and latest previous visit (`new RemoteVisitorDataFilter(previousVisitAmount: 1, currentVisit: true, customData: true)` or `RemoteVisitorDataFilter.Default`). Other filters parameters are set to `false`. This filed is optional. |
isUniqueIdentifier (Deprecated) | bool | An optional parameter for specifying if the visitorCode is a unique identifier. If not provided, the default value is `false`. The field is optional.|

##### Return value

| Type | Description |
|----- | ----------  |
|`Task<IReadOnlyCollection<IData>>` | Collection associated with a given visitor.|

##### Exceptions thrown

|Type | Description |
|-------- | ------- |
| HttpRequestException | Exception indicating that the request was failed for any reason. |
|Exception | Exception indicating that the request timed out or any other reason of failure.|

##### Using parameters in GetRemoteVisitorData()

The `GetRemoteVisitorData()` method offers flexibility by allowing you to define various parameters when retrieving data on visitors. Whether you're targeting based on goals, experiments, or variations, the same approach applies across all data types.

For example, let's say you want to retrieve data on visitors who completed a goal "Order transaction". You can specify parameters within the `GetRemoteVisitorData()` method to refine your targeting. For instance, if you want to target only users who converted on the goal in their last five visits, you can set the `PreviousVisitAmount` parameter to 5 and `Conversions` to true.

The flexibility shown in this example is not limited to goal data. You can use parameters within the `GetRemoteVisitorData()` method to retrieve data on a variety of visitor behaviors.

<Note>
Here is the list of available `Kameleoon.Types.RemoteVisitorDataFilter` options:

| Name                             | Type      | Description                                                                  | Default |
| -------------------------------- | --------- | ---------------------------------------------------------------------------- | ------- |
| previousVisitAmount _(optional)_ | `int`     | Number of previous visits to retrieve data from. Number between `1` and `25` | `1`     |
| currentVisit _(optional)_        | `bool` | If true, current visit data will be retrieved                                | `true`  |
| customData _(optional)_          | `bool` | If true, custom data will be retrieved.                                      | `true`  |
| pageViews _(optional)_           | `bool` | If true, page data will be retrieved.                                        | `false` |
| geolocation _(optional)_         | `bool` | If true, geolocation data will be retrieved.                                 | `false` |
| device _(optional)_              | `bool` | If true, device data will be retrieved.                                      | `false` |
| browser _(optional)_             | `bool` | If true, browser data will be retrieved.                                     | `false` |
| operatingSystem _(optional)_     | `bool` | If true, operating system data will be retrieved.                            | `false` |
| conversions _(optional)_         | `bool` | If true, conversion data will be retrieved.                                  | `false` |
| experiments _(optional)_         | `bool` | If true, experiment data will be retrieved.                                  | `false` |
| kcs _(optional)_                 | `bool` | If true, Kameleoon Conversion Score (KCS) will be retrieved. Requires the [AI Predictive Targeting add-on](https://help.kameleoon.com/target-users-by-ai-propensity-score-kameleoon-conversion-score/). | `false` |
| visitorCode _(optional)_         | `bool` | If true, the `visitorCode` from the most recent visit should be retrieved and applied to the current visitor. Required for [Cross-device experimentation](/core-concepts/cross-device-experimentation). | `true` |
| cbs _(optional)_                 | `bool` | If true, Contextual Bandit score data will be retrieved. | `false` |
</Note>

#### GetVisitorWarehouseAudience()

This method retrieves all audience data associated with the visitor in your data warehouse using the specified `visitorCode` and `warehouseKey`. The `warehouseKey` is typically your internal user ID. The `customDataIndex` parameter corresponds to the Kameleoon custom data that Kameleoon uses to target your visitors. You can refer to the [warehouse targeting documentation](https://help.kameleoon.com/warehouse-audience-targeting/) for additional details. The method returns a `CustomData` object, confirming that the data has been added to the visitor and is available for targeting purposes.

```csharp
Task<CustomData> warehouseAudienceDataTask = kameleoonClient.
  GetVisitorWarehouseAudience(visitorCode, customDataIndex); // default timeout
Task<CustomData> warehouseAudienceDataTask = kameleoonClient.
  GetVisitorWarehouseAudience(visitorCode, customDataIndex, timeout: 1000);

// If you need to specify warehouse key
Task<CustomData> warehouseAudienceDataTask = kameleoonClient.
  GetVisitorWarehouseAudience(visitorCode, customDataIndex, warehouseKeyValue); // default timeout
Task<CustomData> warehouseAudienceDataTask = kameleoonClient.
  GetVisitorWarehouseAudience(visitorCode, customDataIndex, warehouseKeyValue, 1000);

try
{
  CustomData warehouseAudienceData = await warehouseAudienceDataTask;
  // Your custom code
}
catch (Exception e)
{
  // Catch exception
}
```

##### Arguments

| Name    | Type | Description  |
|-------- | ------- | ----------- |
|visitorCode | string | A unique visitor identification string, can't exceed 255 characters length. |
|customDataIndex | int | An integer representing the index of the custom data you want to use to target your BigQuery Audiences.|
|warehouseKey | string | A unique key to identify the warehouse data (usually, your internal user ID). This field is optional.|
|timeout | int? | Timeout (in milliseconds). This parameter specifies the maximum amount of time to wait for a result. This field is optional. If not provided, the default value is 10000 milliseconds. |

##### Return value

| Type | Description |
|----- | -------     |
|`Task<CustomData>` | A `CustomData` instance confirming that the data has been added to the visitor.|

#####  Exceptions thrown

|Type | Description |
|-------- | ------- |
|KameleoonException.VisitorCodeInvalid | Exception indicating that the provided visitor code is not valid (it is either empty or longer than 255 characters).|
|HttpRequestException | Exception indicating that the request was failed for any reason.|
|Exception | Exception indicating that the request timed out or any other reason of failure.|

#### SetLegalConsent()

You must use this method to specify whether the visitor has given legal consent to use personal data. Setting the `legalConsent` parameter to `false` limits the types of data that you can include in tracking requests. This method helps you adhere to legal and regulatory requirements while responsibly managing visitor data. You can find more information on personal data in the [consent management policy](https://help.kameleoon.com/consent-management-policy/).

```csharp
string visitorCode = kameleoonClient.GetVisitorCode(httpRequest, httpResponse);
kameleoonClient.SetLegalConsent(visitorCode, true, httpResponse);
```

##### Arguments

|Name | Type | Description |
|--- | ---- | -----------  |
|visitorCode | string | The user's unique identifier. This field is required.|
|legalConsent | bool | A boolean value representing the legal consent status. `true` indicates the visitor has given legal consent, `false` indicates the visitor has never provided, or has withdrawn, legal consent. This field is required.|
|response | Microsoft.AspNetCore.Http.HttpResponse / System.Web.HttpRequest | The HTTP response where values in the cookies will be adjusted based on the legal consent status. This field is optional.|

#####  Exceptions thrown

| Type | Description |
|--------- | ------- |
| KameleoonException.VisitorCodeInvalid | Exception indicating that the provided visitor code is not valid. It is either empty or longer than 255 characters.|

### Goals and third-party analytics

#### TrackConversion()

```csharp
using Kameleoon;

string visitorCode = kameleoonClient.GetVisitorCode(Request, Response, "example.com");
int goalId = 83023;

kameleoonClient.TrackConversion(visitorCode, goalId);

// Add metadata
var cd = new CustomData(1, "metadata");
kameleoonClient.TrackConversion(visitorCode, goalId, metadata: cd)
```

##### Arguments

<Note>
```csharp
kameleoonClient.AddData(visitorCode, new CustomData(5, "Credit Card"), new CustomData(9, "Express Delivery"));
kameleoonClient.TrackConversion(visitorCode, 10, metadata: new CustomData(5, "Amex Credit Card"));
```
</Note>

##### Exceptions

#### GetEngineTrackingCode()

```csharp
string engineTrackingCode = kameleoonClient.GetEngineTrackingCode(visitorCode);
```

##### Arguments

##### Return value

### Events

#### UpdateConfigurationHandler()

```csharp
kameleoonClient.UpdateConfigurationHandler(async delegate () {
  // Configuration was updated
});
```
##### Arguments

### Data types

Data available in the SDK is not available for targeting and reporting in the Kameleoon app until it is added; for example, by using the `addData()` method.
See [use visit history to target users](../using-visit-history-in-feature-flags-and-experiments) for more information.

<Note>
If you are in hybrid mode, you can call `GetRemoteVisitorData()` to automatically fill all data that Kameleoon collected previously.
</Note>

The following data types are available in `Kameleoon.Data.IData`.

#### Browser

```csharp
kameleoonClient.AddData(visitorCode, new Browser(Browser.Browsers.CHROME));

kameleoonClient.AddData(visitorCode, new Browser(Browser.Browsers.SAFARI, 16));
```
#### PageView

| Name      | Type   | Description                                        |
|-----------|--------|----------------------------------------------------|
| url       | string | URL of the page viewed. This field is mandatory.   |
| title     | string | Title of the page viewed. This field is mandatory. |
| referrers | int[]  | Referrers of viewed pages. This field is optional. |

<Note>
The index (ID) of the referrer is available in our Back-Office in the Acquisition channel configuration page. Be careful: this index starts at 0, so the first [acquisition channel](https://help.kameleoon.com/create-acquisition-channel) you create for a given site would have the ID 0, not 1.
</Note>

```csharp
kameleoonClient.AddData(
  visitorCode,
  new PageView("https://url.com", "title", new int[] {3})
);
```

#### Conversion

```csharp
kameleoonClient.AddData(visitorCode, new Conversion(32, 10f));

kameleoonClient.AddData(visitorCode, new Conversion(33, negative: true));

kameleoonClient.AddData(
    visitorCode,
    new Conversion(34, 5f, metadata: new CustomData(3, "metadata1", "md2"), new CustomData(5, "md3"))
);
```

#### CustomData

`CustomData` allows any type of data to be easily associated with each visitor. It can then be used as a targeting condition in [segments](https://help.kameleoon.com/create-new-segment/) or as a filter/breakdown in experiment reports.
To learn more about custom data, please refer to this [article](/core-concepts/custom-data).

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| index/name _(required)_ | `int`/`string` | Index or Name of the custom data. **Either `index` or `name` must be provided** to identify the data. | |
| values _(required)_ | `params string[]` | Values of the custom data to be stored. |  |
| overwrite _(optional)_ | `bool` | Flag to explicitly control how the values are stored and how they appear in reports. [See more](https://developers.kameleoon.com/core-concepts/custom-data/#default-logic-when-overwrite-parameter-is-false-or-omitted) | `true` |

<Note>
- Each visitor is allowed only one `CustomData` for each unique `index`. Adding another `CustomData` with the same `index` will replace the existing one.

- The custom data ‘index’ can be found in the [Custom Data dashboard](https://help.kameleoon.com/manage-your-custom-data/) under the “INDEX” column.

- To prevent the SDK from sending data with the selected index to Kameleoon servers for privacy reasons, enable the option: **Use this data only locally for targeting purposes** when creating custom data.

- Adding a `CustomData` instance created with a name when the SDK instance configuration is not up to date or the name is not registered, will result in the data being ignored.
</Note>

```csharp
kameleoonClient.AddData(visitorCode, new CustomData(1, "value"));

// With several values
kameleoonClient.AddData(visitorCode, new CustomData(1, "value1", "value2"));

// To set the 'overwrite' flag to false
kameleoonClient.AddData(visitorCode, new CustomData(1, false, "value"));

// To use a name instead of the index
kameleoonClient.AddData(visitorCode, new CustomData("my-custom-data", "value"));
```

#### Device

| Name    | Type   | Description                                                                                          |
| ------- | ------ | ---------------------------------------------------------------------------------------------------- |
| device | Device.Type | List of devices: **PHONE**, **TABLET**, **DESKTOP**. This field is mandatory. |

```csharp
kameleoonClient.AddData(visitorCode, new Device(Device.Type.DESKTOP));
```

#### UserAgent

Server-side experiments are more likely to be affected by bot traffic than client-side experiments. Kameleoon uses the IAB/ABC International Spiders and Bots List to tackle this issue and recognize known bots and spiders. Kameleoon also uses the `UserAgent` field to filter out bots and other unwanted traffic that might distort your conversion metrics. For more details, see our help article on [bot filtering](https://help.kameleoon.com/question/how-does-kameleoon-filter-bot-traffic-from-my-results/).

If you use internal bots, we suggest that you pass the value **curl/8.0** of the userAgent to exclude them from our analytics.

| Name    | Type   | Description                                                                                          |
| ------- | ------ | ---------------------------------------------------------------------------------------------------- |
| Value | string | The `UserAgent` value that will be sent with tracking requests. This field is mandatory. |

```csharp
kameleoonClient.AddData(visitorCode, new UserAgent("Your User Agent"));
```

#### UniqueIdentifier

If you don't add `UniqueIdentifier` for a visitor, `visitorCode` is used as the unique visitor identifier, which is useful for [Cross-device experimentation](/core-concepts/cross-device-experimentation). When you add `UniqueIdentifier` for a visitor, the SDK links the flushed data with the visitor associated with the specified identifier.

The `isUniqueIdentifier` can be helpful in unique situations; for example, if you cannot access the anonymous `visitorCode` given to a visitor, but you can use an internal ID linked to that visitor through session merging.

| Name    | Type   | Description  |
| ------- | ------ | ------------ |
| value | `bool` | Parameter for specifying if the visitorCode is a unique identifier. This field is required. |

```csharp
kameleoonClient.AddData(visitorCode, new UniqueIdentifier(true));
```

#### OperatingSystem

`OperatingSystem` contains information about the operating system on the visitor's device.

<Note>
Each visitor can only have one `OperatingSystem`. Adding a second `OperatingSystem` overwrites the first one.
</Note>

| Name | Type | Description  |
| ---- | ---- | -----------  |
| type | `OperatingSystem.Type` | List of operating systems: `WINDOWS`, `MAC`, `IOS`, `LINUX`, `ANDROID` and `WINDOWS_PHONE`. This field is required.|

```csharp
kameleoonClient.addData(visitorCode, new OperatingSystem(OperatingSystem.Type.WINDOWS));
```

#### Cookie

`Cookie` contains information about the cookie stored on the visitor's device.

| Name | Type | Description  |
| ---- | ---- | -----------  |
| cookies | `IReadOnlyDictionary<string, string>` | A string object map consisting of cookie keys and values. This field is required. |

<Note>
Each visitor can only have one `Cookie`. Adding a second `Cookie` overwrites the first one.
</Note>

```csharp
Cookie cookie = new Cookie (new Dictionary<string, string>() {
    { "k1", "v1" },
    { "k2", "v2" },
});
kameleoonClient.addData(visitorCode, cookie);
```

#### Geolocation

```csharp
kameleoonClient.addData(visitorCode, new Geolocation("France", "Île-de-France", "Paris"));
```

### Returned Types

#### Variation

`Variation` contains information about the assigned variation to the visitor (or the default variation if no specific assignment exists).

| Name        | Type                         | Description                                                                 |
| ----------- | ---------------------------- | --------------------------------------------------------------------------- |
| Key       | `string`                     | The unique key identifying the variation.                                   |
| Id        | `int`                    | The ID of the assigned variation (or `Variation.UndefinedId` if it's the default variation).  |
| ExperimentId | `int`                 | The ID of the experiment associated with the variation (or `Variation.UndefinedId` if default). |
| Variables | `IReadOnlyDictionary<string, Variable>`      | A dictionary containing the variables of the assigned variation, keyed by variable names. This could be an empty collection if no variables are associated. |

<Note>
- The `Variation` object provides details about the assigned variation and its associated experiment, while the [`Variable`](#variable) object contains specific details about each variable within a variation.
- Ensure that your code handles the case where `Id` or `ExperimentId` may be `Variation.UndefinedId`, indicating a default variation.
- The `Variables` dictionary might be empty if no variables are associated with the variation.
</Note>

```csharp
// Retrieving the variation key
string variationKey = variation.Key;

// Retrieving the variation id
int variationId = variation.Id;

// Retrieving the experiment id
int experimentId = variation.ExperimentId;

// Retrieving the variables map
var variables = variation.Variables;
```

#### Variable

`Variable` contains information about a variable associated with the assigned variation.

| Name    | Type      | Description                                                                                                      |
| ------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| Key   | `string`  | The unique key identifying the variable.                                                                         |
| Type  | `string`  | The type of the variable. Possible values: **BOOLEAN**, **NUMBER**, **STRING**, **JSON**, **JS**, **CSS**.       |
| Value | `object`  | The value of the variable, which can be of the following types: **bool**, **int**, **double**, **string**, **Newtonsoft.Json.Linq.JToken**. |

```csharp
// Retrieving the variables map
var variables = variation.Variables;

// Variable type can be retrieved for further processing
string type = variables["isDiscount"].Type;

// Retrieving the variable value by key
bool isDiscount = (bool)variables["isDiscount"].Value;

// Variable value can be of different types
string title = (string)variables["title"].Value;
```

### Deprecated methods

<Warning>
These methods are deprecated and will be removed in SDK version `5.0.0`.
</Warning>

#### GetFeatureVariationKey()

- 📨 _Sends Tracking Data to Kameleoon_

To get feature variation key, call `GetFeatureVariationKey()`.

<Note>
Use [`GetVariation()`](#getvariation) instead.
</Note>

This method requires a **visitorCode** and a **featureKey** (or **featureID**) to check if a user can access a specific feature.

If the user has never been linked to this feature, the SDK will randomly decide whether to activate it, returning either **true** (they can access the feature) or **false** (they cannot). If the user with the given **visitorCode** is already linked to this feature, the system will return the previous value of the **featureFlag**.

Make sure to include proper error handling in your code, as shown in the example, to catch any potential errors.

If you specify a `visitorCode`, the `GetFeatureVariationKey()` method uses it as the unique visitor identifier, which is useful for [cross-device experimentation](https://developers.kameleoon.com/core-concepts/cross-device-experimentation). When you specify a `visitorCode` and set the `isUniqueIdentifier` parameter to `true`, the SDK links the flushed data with the visitor associated with the specified identifier.

<Note>
The parameter `isUniqueIdentifier` is deprecated. Please use [`UniqueIdentifier`](#uniqueidentifier) instead.

The `isUniqueIdentifier` can be helpful in unique situations; for example, if you cannot access the anonymous `visitorCode` given to a visitor, but you can use an internal ID linked to that visitor through session merging.
</Note>
```csharp
string visitorCode = kameleoonClient.GetVisitorCode(Request, Response, "example.com");
string featureKey = "new_checkout";
string variationKey = "";

try {
  variationKey = kameleoonClient.GetFeatureVariationKey(visitorCode, featureKey);
} catch (KameleoonException.FeatureNotFound e) {
  // The feature is not yet activated on Kameleoon's side.
} catch (KameleoonException.FeatureEnvironmentDisabled e) {
  // The feature flag is disabled for the environment.
}

switch (variationKey) {
  case "on":
    // Main variation key is selected for visitorCode.
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

| Name | Type | Description |
| ---- | ---- | ----------- |
| visitorCode | string | Unique identifier of the user. This field is mandatory. |
| featureKey | string | Key of the feature you want to expose to a user. This field is mandatory. |
| isUniqueIdentifier (Deprecated) | bool | An optional parameter for specifying if the visitorCode is a unique identifier. If not provided, the default value is `false`. The field is optional.

##### Return value

| Type    | Description                                                          |
| ------- | -------------------------------------------------------------------- |
| string | Variation key of the feature flag that is registered for a given **visitorCode**. |

##### Exceptions thrown

| Type | Description |
| ---- | ----------- |
| KameleoonException.FeatureNotFound | Exception indicating that the requested feature key has not been found in the internal configuration of the SDK. This is usually normal and means that the feature flag has not yet been activated on Kameleoon's side (but code implementing the feature is already deployed on the web-application's side). |
| KameleoonException.FeatureEnvironmentDisabled | Exception indicating that feature flag is disabled for the visitor's current environment (for example, production, staging, or development).|

#### GetActiveFeatureListForVisitor()

<Note>
- Use [`GetActiveFeatures`](#getactivefeatures) instead.
- This method was previously called `ObtainFeatureListForVisitorCode()`, which was removed in SDK version `4.0.0`.
</Note>

This method takes a single `visitorCode` parameter. Return only the active feature flags for the specified visitor.

```csharp
var featureListIds = kameleoonClient.GetActiveFeatureListForVisitor(visitorCode)
```
##### Arguments

|Name | Type | Description |
|-------- | ------- | ----------- |
|visitorCode | string | Unique identifier of the user. This field is mandatory.|

##### Return value

| Type | Description |
|----- | ------------ |
| `List<string>` | List of active feature flag IDs available for specific `visitorCode`|

#### GetFeatureVariable()

- 📨 _Sends Tracking Data to Kameleoon_

<Note>
Use [`GetVariation()`](#getvariation) instead.
</Note>

To get variable of variation key associated with a user, call the `GetFeatureVariable()` method of our SDK.

This method requires a **visitorCode** and a **featureKey** (or **featureID**) to check if a user can access a specific feature.

If the user has never been linked to this feature, the SDK will randomly decide whether to activate it, returning either **true** (they can access the feature) or **false** (they cannot). If the user with the given **visitorCode** is already linked to this feature, the system will return the previous value of the **featureFlag**.

Make sure to include proper error handling in your code, as shown in the example, to catch any potential errors.

If you specify a `visitorCode`, the `GetFeatureVariable()` method uses it as the unique visitor identifier, which is useful for [cross-device experimentation](https://developers.kameleoon.com/core-concepts/cross-device-experimentation). When you specify a `visitorCode` and set the `isUniqueIdentifier` parameter to `true`, the SDK links the flushed data with the visitor associated with the specified identifier.

<Note>
The parameter `isUniqueIdentifier` is deprecated. Please use [`UniqueIdentifier`](#uniqueidentifier) instead.

The `isUniqueIdentifier` can be helpful in unique situations; for example, if you cannot access the anonymous `visitorCode` given to a visitor, but you can use an internal ID linked to that visitor through session merging.
</Note>

```csharp
var visitorCode = kameleoonClient.GetVisitorCode(req, res, "example.com");
const string featureKey = "feature_key";
const string variableKey = "var"

try {
  var variableValue = kameleoonClient.GetFeatureVariable(visitorCode, featureKey, variableKey);
  // Your custom code, depending on variableValue
} catch (KameleoonException.FeatureNotFound e) {
  // The feature is not yet activated in the Kameleoon app
} catch (KameleoonException.FeatureEnvironmentDisabled e) {
  // The feature flag is disabled for the environment
} catch (KameleoonException.FeatureVariableNotFound e) {
  // Requested variable not defined in the Kameleoon app
}
```

##### Arguments

| Name | Type | Description |
| ---- | ---- | ----------- |
| visitorCode  | string | Unique identifier of the user. This field is mandatory.   |
| featureKey   | string | Key of the feature you want to expose to a user. This field is mandatory. |
| variableKey | string | Key of the variable you want to get a value. This field is mandatory. |
| isUniqueIdentifier (Deprecated) | bool | An optional parameter for specifying if the visitorCode is a unique identifier. If not provided, the default value is `false`. The field is optional.

##### Return value

| Type    | Description                                                          |
| ------- | -------------------------------------------------------------------- |
| object | Value of variable of variation that is registered for a given **visitorCode** for this feature flag. Possible types: bool, int, double, string, JObject, JArray |

##### Exceptions thrown

| Type | Description |
| ---- | ----------- |
| KameleoonException.FeatureNotFound | Exception indicating that the requested feature key has not been found in the internal configuration of the SDK. This is usually normal and means that the feature flag has not yet been activated on Kameleoon's side (but code implementing the feature is already deployed on the web application's side). |
| KameleoonException.FeatureEnvironmentDisabled | Exception indicating that feature flag is disabled for the visitor's current environment (for example, production, staging, or development).
| KameleoonException.FeatureVariableNotFound | Exception indicating that the requested variable wasn't found. Check that the variable's key in the Kameleoon app matches the one in your code.
| KameleoonException.VisitorCodeInvalid | Exception indicating that the specified visitor code is not valid. (It is either empty or longer than 255 characters).

#### GetActiveFeatures()

<Note>
Use [`GetVariations()`](#getvariations) instead.
</Note>

`GetActiveFeatures` method retrieves information about the active feature flags that are available for the specified visitor code.

<Note>
The `Kameleoon.Types.Variation.Id` and `Kameleoon.Types.Variation.ExperimentId` properties of returned variations are optional. If not specified, the default value is `Kameleoon.Types.Variation.UndefinedId`.
</Note>

```csharp
IReadOnlyDictionary<string, Kameleoon.Types.Variation> activeFeatures = GetActiveFeatures(visitorCode);
```

##### Arguments

|Name        | Type   | Description |
|---------- | ------ | ------------ |
|visitorCode | string | Unique identifier of the visitor you want to retrieve active feature flags for. This field is mandatory.|

##### Return value

| Type | Description |
| ---- | ------------ |
|`IReadOnlyDictionary<string, Kameleoon.Types.Variation>` | A dictionary that contains the assigned variations of the active features using the active feature IDs as keys.|

##### Exceptions thrown

|Type | Description |
|-------- | ------- |
| KameleoonException.VisitorCodeInvalid | Exception indicating that the provided visitor code is not valid. It is either empty or longer than 255 characters. |

#### GetFeatureVariationVariables()

<Note>
- Use [`GetVariation()`](#getvariation) instead.
- This method was previously called `GetFeatureAllVariables()`, which was removed in SDK version `4.0.0`.
</Note>

Call this method to retrieve all feature variables for a feature. You can modify feature variables in the Kameleoon app.

This method takes two input parameters: `featureKey` and `variationKey`. It returns the data with the `Dictionary<string, object>` type, as defined on the web interface. It will throw an exception (`KameleoonException.FeatureNotFound`) if the requested feature has not been found in the SDK's internal configuration.

```csharp
string featureKey = "myFeature";

try {
  var allVariables = kameleoonClient.GetFeatureVariationVariables(featureKey, variationKey);
} catch (KameleoonException.FeatureNotFound e) {
  // The feature is not yet activated in the Kameleoon app.
} catch (KameleoonException.FeatureEnvironmentDisabled e) {
  // The feature flag is disabled for the environment.
} catch (KameleoonException.FeatureVariationNotFound e) {
  // The variation is not activated in the Kameleoon app (the associated experiment is not online).
} catch (Exception e) {
  // This is a generic Exception handler which will handle all exceptions.
  Console.WriteLine("Exception occurred");
}
```

##### Arguments

| Name                    | Type             | Description                                                                     |
| ----------------------- | ---------------- | ------------------------------------------------------------------------------- |
| featureKey | `string` | Identificator key of the feature you need to obtain. This field is mandatory. |
| variationKey | `string` | Key of the variation you want to obtain. This field is required.          |

##### Return value

| Type | Description |
| ---- | ----------- |
| `Dictionary<string, object>` | Data associated with this feature flag. The values of can be a number, string, boolean or object (depending on the type defined on the web interface). |

##### Exceptions thrown

| Type | Description |
| -------- | ------- |
|KameleoonException.FeatureNotFound | Exception indicating that the requested feature has not been found in the internal configuration of the SDK. This is usually normal and means that the feature flag has not yet been activated on Kameleoon's side.|
|KameleoonException.FeatureEnvironmentDisabled | Exception indicating that the feature flag is disabled for the visitor's current environment (for example, production, staging, or development).|
|KameleoonException.FeatureVariationNotFound | Exception indicating that the requested variation ID wasn't found in the internal configuration of the SDK. This usually means that the variation's corresponding experiment is not activated in the Kameleoon app.|
