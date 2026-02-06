---
sidebar_position: 3
toc_max_heading_level: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Select, Text, Bold, Italic, Code, CodeRef, Ref, If } from '../commons/utils.mdx';
import SharedDiv, { Shared } from '../commons/shared.mdx';
import CrossDeviceReconciliation from '../commons/developer-guide/cross-device-reconciliation.mdx';
import EvaluateAudiences from '../commons/reference/feature-flags-and-variations/evaluate-audiences.mdx';
import GetDataFile from '../commons/reference/feature-flags-and-variations/get-data-file.mdx';
import GetVariations from '../commons/reference/feature-flags-and-variations/get-variations.mdx';
import GetVariation from '../commons/reference/feature-flags-and-variations/get-variation.mdx';
import Logging from '../commons/developer-guide/logging.mdx';
import SetForcedVariation from '../commons/reference/feature-flags-and-variations/set-forced-variation.mdx';
import Conversion from '../commons/reference/data-types/conversion.mdx';
import TrackConversion from '../commons/reference/goals/track-conversion.mdx';
import CustomBucketingKey from '../commons/developer-guide/custom-bucketing-key.mdx';
import ActivatingAFeatureFlag from '../commons/developer-guide/getting-started/activating-a-feature-flag.mdx';
import DataFile from '../commons/reference/returned-types/data-file.mdx';
import FeatureFlag from '../commons/reference/returned-types/feature-flag.mdx';
import Rule from '../commons/reference/returned-types/rule.mdx';
import ApplicationVersion from '../commons/reference/data-types/application-version.mdx';

# JavaScript / TypeScript SDK

export const Context = {
    IsJs: true,
    IsServer: true,
    IsSnakeCase: false,
    Common: {
        Null: "null",
        True: "true",
        False: "false",
        String: "string",
        Bool: "boolean",
        Int: "number",
        Float: "number",
        SDK: "JavaScript",
    },
    Params: {
        VisitorCode: "visitorCode",
        FeatureKey: "featureKey"
    },
    Exceptions: {
        Language: "Error",
        Kameleoon: "KameleoonException",
        Initialization: "KameleoonException.Initialization",
        VisitorCodeEmpty: "KameleoonException.VisitorCodeEmpty",
        VisitorCodeMaxLength: "KameleoonException.VisitorCodeMaxLength",
        FeatureNotFound: "KameleoonException.FeatureFlagConfigurationNotFound",
        FeatureEnvironmentDisabled: "KameleoonException.FeatureFlagEnvironmentDisabled",
        FeatureExperimentNotFound: "KameleoonException.FeatureFlagExperimentNotFound",
        FeatureVariationNotFound: "KameleoonException.FeatureFlagVariationNotFound",
        StorageRead: "KameleoonException.StorageRead",
        StorageWrite: "KameleoonException.StorageWrite",
    },
    KameleoonClientConfig: {
        Name: "KameleoonClientConfig",
        Ref: "#configuration-parameters",
        TrackingInterval: { FileName: "tracking_interval_millisecond" },
        IsUniqueIdentifier: { Name: "<>" }
    },
    Hook: {
        UseData: "useData",
    },
    // kameleoon.data
    Conversion: {
        Name: "Conversion",
        FullName: "data.Conversion",
        Ref: "#conversion",
        Params: {
            GoalId: { Name: "goalId" },
            Revenue: { Name: "revenue", Type: "float" },
            Negative: { Name: "negative" },
            Metadata: { Name: "metadata", Type: "CustomData[]", DefaultValue: "undefined" },
        },
    },
    CustomData: {
        Name: "CustomData",
        FullName: "CustomData",
        Ref: "#customdata"
    },
    UniqueIdentifier: {
        Name: "UniqueIdentifier",
        Ref: "#uniqueidentifier"
    },
    UserAgent: {
        Name: "UserAgent",
        Ref: "#useragent"
    },
    ApplicationVersion: {
        Name: 'ApplicationVersion',
        Ref: '#applicationversion',
        Params: {
            Version: { Type: 'string' },
        },
    },
    // kameleoon.types
    Variation: {
        Name: "Variation",
        FullName: "Variation",
        Ref: "#variation"
    },
    DataFile: {
        Name: "DataFile",
        FullName: "DataFile",
        Ref: "#datafile",
        Params: {
            FeatureFlags: { Name: "featureFlags", Type: "Map<string, FeatureFlag>" },
        }
    },
    FeatureFlag: {
        Name: "FeatureFlag",
        FullName: "FeatureFlag",
        Ref: "#featureflag",
        Params: {
            EnvironmentEnabled: { Name: "environmentEnabled" },
            Variations: { Name: "variations", Type: "Map<string, Variation>" },
            Rules: { Name: "rules", Type: "Rule[]" },
            DefaultVariationKey: { Name: "defaultVariationKey", Type: "string" },
        }
    },
    Rule: {
        Name: "Rule",
        FullName: "Rule",
        Ref: "#rule",
        Params: {
            Variations: { Name: "variations", Type: "Map<string, Variation>" },
        }
    },
    // methods
    GetVisitorCode: {
        Name: "getVisitorCode()",
        Ref: "#getvisitorcode",
        Params: {
            DefaultVisitorCode: { Name: "defaultVisitorCode" }
        }
    },
    Flush: {
        Name: "flush()",
        Ref: "#flush",
        Params: {
            Instant: { Name: "instant" }
        }
    },
    GetVariation: {
        Name: "getVariation()",
        Ref: "#getvariation",
        Return: "Variation",
        Params: {
            Track: { Name: "track" }
        }
    },
    GetVariations: {
        Name: "getVariations()",
        Ref: "#getvariations",
        Return: "Map<string, Variation>",
        Params: {
            OnlyActive: { Name: "onlyActive" },
            Track: { Name: "track" }
        }
    },
    SetForcedVariation: {
        Name: "setForcedVariation()",
        Ref: "#setforcedvariation",
        Params: {
            ExperimentId: { Name: "experimentId" },
            VariationKey: { Name: "variationKey", Type: "string | null", RemVal: "null" },
            ForceTargeting: { Name: "forceTargeting" },
        }
    },
    EvaluateAudiences: {
        Name: "evaluateAudiences()",
        Ref: "#evaluateaudiences"
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
            Revenue: { Name: "revenue", Type: "number" },
            IsUniqueIdentifier: { Name: "isUniqueIdentifier" },
            Negative: { Name: "negative" },
            Metadata: { Name: "metadata", Type: "CustomData[]", DefaultValue: "undefined" }
        }
    },
    IsFeatureActive: {
        Name: "isFeatureFlagActive()",
        Ref: "#isfeatureflagactive"
    },
    GetEngineTrackingCode: {
        Name: "getEngineTrackingCode()",
        Ref: "#getenginetrackingcode"
    },
    AddData: {
        Name: 'addData()',
        Ref: '#adddata',
        Params: {
            Track: { Name: "track" },
            Data: { Name: 'data', Type: '...KameleoonDataType[]' },
        }
    },
    GetDataFile: {
        Name: "getDataFile()",
        Ref: "#getdatafile",
    },
};

With the Kameleoon JavaScript SDK, you can run experiments and activate feature flags. Integrating our SDK into your web application is easy, and its footprint (memory and network usage) is low.

**Getting started**: For help getting started, see the [developer guide](#developer-guide).

**Changelog**: Details on the latest version of JavaScript / TypeScript SDK can be found in the [changelog](https://github.com/Kameleoon/client-js/blob/main/CHANGELOG.md).

**SDK methods**: For the full reference documentation of the JavaScript SDK, see the [reference](#reference) section.

## Developer guide

This section will help you get started as well as introduce you to some of the more advanced concepts.

### Getting started

#### Installation

The Kameleoon SDK Installation tool is best method to install the SDK quickly. The **SDK Installer** helps you install the SDK of your choice, generate a basic code sample, and configure [external dependencies](#external-dependencies) if needed.

To use the SDK Installation tool, install and run it globally:

```bash
npm install --global @kameleoon/sdk-installer
kameleoon-sdk
```

Or run it directly with `npx`:

```bash
npx @kameleoon/sdk-installer
```

:::note
You can also inject the JavaScript SDK into your app as a single file using the `<script>` tag. You can then access all SDK methods using the global object `KameleoonSDK`.

Example:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My App</title>
    <script src="https://static.kameleoon.com/kameleoonSDK-4.9.1.js"></script>
    <script type="module" src="app.js"></script>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

```js title="app.js"
const { KameleoonClient, CustomData } = KameleoonSDK;
```

To always use the latest version of a major release, use the following script, where `4` is the [current major version](https://developers.kameleoon.com/feature-management-and-experimentation/versions):

```html
https://static.kameleoon.com/kameleoonSDK-4-latest.js
```

To always stay on a specific version, specify the full version number instead. For example, for version `4.9.1`, which is the earliest version available as a static script, use the following:

```html
https://static.kameleoon.com/kameleoonSDK-4.9.1.js
```

Versions can be referenced on the [release page](https://github.com/Kameleoon/client-js/releases).
:::

#### Initialize the Kameleoon Client

Here is a step-by-step guide for configuring the JavaScript SDK for your application.

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  Environment,
  KameleoonClient,
  SDKConfigurationType,
} from '@kameleoon/javascript-sdk';

// -- Optional configuration
const configuration: Partial<SDKConfigurationType> = {
  updateInterval: 20,
  environment: Environment.Production,
  cookieDomain: '.example.com',
};

const client = new KameleoonClient({ siteCode: 'my_site_code', configuration });

// -- Waiting for the client initialization using `async/await`
async function init(): Promise<void> {
  await client.initialize();
}

init();

// -- Waiting for the client initialization using `Promise.then()`
client
  .initialize()
  .then(() => {})
  .catch((error) => {});
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { Environment, KameleoonClient } from '@kameleoon/javascript-sdk';

// -- Optional configuration
const configuration = {
  updateInterval: 20,
  environment: Environment.Production,
  cookieDomain: '.example.com',
};

const client = new KameleoonClient({ siteCode: 'my_site_code', configuration });

// -- Waiting for the client initialization using `async/await`
async function init() {
  await client.initialize();
}

init();

// -- Waiting for the client initialization using `Promise.then()`
client
  .initialize()
  .then(() => {})
  .catch((error) => {});
```

</TabItem>
</Tabs>

To start, developers need to create an entry point for the JavaScript SDK by creating a new instance of Kameleoon Client.

Use `KameleoonClient` to run feature experiments and retrieve the status of feature flags and their variations.

`KameleoonClient` initialization is performed asynchronously to ensure that the Kameleoon API call was successful. For initialization, use the method [`initialize()`](#initialize). Use `async/await`, `Promise.then()` or any other method to handle asynchronous client initialization.

##### Arguments

| Name                       | Type                            | Description                                                                                                                                                                                          |
|----------------------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| siteCode (_required_)      | `string`                        | This is a [unique key](https://help.kameleoon.com/question/how-do-i-find-my-site-id/) of the Kameleoon project you are using with the SDK. This field is mandatory.                                  |
| configuration (_optional_) | `Partial<SDKConfigurationType>` | Client's configuration                                                                                                                                                                               |
| externals (_optional_)     | `ExternalsType`                 | External implementation of SDK dependencies ([External dependencies](#external-dependencies))                                                                                                        |
| stubMode (_optional_)      | `boolean`                       | When set to true, the client will operate in stub mode and perform no operations. In this mode, all method calls execute no actions, ensuring that no external actions or side effects occur. |

##### Configuration Parameters

<Tabs>

<TabItem value="version_3" label="SDK Version 3">

| Name                                      | Type          | Description                                                                                                                                                                                                                                                                                   | Default Value                              |
| ----------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| updateInterval (_optional_)               | `number`      | Specifies the refresh interval, in minutes, that the SDK fetches the configuration for the active experiments and feature flags. The value determines the maximum time it takes to propagate changes, such as activating or deactivating feature flags or launching experiments, to your production servers. If left unspecified, the default interval is set to 60 minutes. Additionally, we offer a [streaming mode](/feature-management-and-experimentation/technical-considerations/#streaming-premium-option) that uses server-sent events (SSE) to push new configurations to the SDK automatically and apply new configurations in real-time, without any delays.                                                                                                                                                                                                                 | `60`                                       |
| environment (_optional_)                  | `Environment` | feature flag environment                                                                                                                                                                                                                                                                      | `Environment.Production`                   |
| targetingDataCleanupInterval (_optional_) | `number`      | interval in _minutes_ for cleaning up targeting data, minimum value is 1 minute                                                                                                                                                                                                               | `undefined` (no cleanup will be performed) |
| domain (_optional_)                       | `string`      | [domain](#domain-information) to which the cookie belongs. Deprecated, use `cookieDomain` instead                                                                                                                                                                                              | `undefined`                                |
| cookieDomain (_optional_)                 | `string`      | [domain](#domain-information) to which the cookie belongs.                                                                                                                                                                                                                                     | `undefined`                                |
| networkDomain (_optional_)                | `string`      | custom domain the SDKs uses for all outgoing network requests. Commonly used for proxying. The format is `second_level_domain.top_level_domain` (for example, `example.com`). If an invalid format is specified, the SDK uses the default Kameleoon value.                                     | `undefined`                                |
| requestTimeout (_optional_)               | `number`      | timeout in _milliseconds_ for all SDK network requests, if timeout is exceeded request will fail.                                                                                                                                                                                  | `10_000` (10 seconds)                      |
| trackingInterval (_optional_)             | `number`      | Specifies the interval for tracking requests in milliseconds. All visitors who were evaluated for any feature flag or had associated data are included in this tracking request, which is performed once per interval. The minimum value is `100` ms and the maximum value is `1_000` ms | `1_000` (1 second)                         |

:::note
The `domain` parameter is deprecated and will be removed in a future release. Use `cookieDomain` instead.
:::

</TabItem>

<TabItem value="version_4" label="SDK Version 4" default>

| Name                                      | Type                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Default Value                              |
|-------------------------------------------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| updateInterval (_optional_)               | `number`                | Specifies the refresh interval, in minutes, that the SDK fetches the configuration for the active experiments and feature flags. The value determines the maximum time it takes to propagate changes, such as activating or deactivating feature flags or launching experiments, to your production servers. If left unspecified, the default interval is set to 60 minutes. Additionally, we offer a [streaming mode](/feature-management-and-experimentation/technical-considerations/#streaming-premium-option) that uses server-sent events (SSE) to push new configurations to the SDK automatically and apply new configurations in real-time, without any delays. | `60`                                       |
| environment (_optional_)                  | `Environment \| string` | feature flag environment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `Environment.Production`                   |
| targetingDataCleanupInterval (_optional_) | `number`                | interval in _minutes_ for cleaning up targeting data, minimum value is 1 minute                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `undefined` (no cleanup will be performed) |
| cookieDomain (_optional_)                 | `string`                | [domain](#domain-information) to which the cookie belongs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `undefined`                                |
| networkDomain (_optional_)                | `string`                | custom domain the SDKs uses for all outgoing network requests. Commonly used for proxying. The format is `second_level_domain.top_level_domain` (for example, `example.com`). If an invalid format is specified, the SDK uses the default Kameleoon value.                                                                                                                                                                                                                                                                                                                                                                                                | `undefined`                                |
| requestTimeout (_optional_)               | `number`                | timeout in _milliseconds_ for all SDK network requests, if timeout is exceeded request will fail immediately                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `10_000` (10 seconds)                      |
| trackingInterval (_optional_)             | `number`                | Specifies the interval for tracking requests in milliseconds. All visitors who were evaluated for any feature flag or had associated data are included in this tracking request, which is performed once per interval. The minimum value is `100` ms and the maximum value is `1_000` ms                                                                                                                                                                                                                                                                                                                                                                  | `1_000` (1 second)                         |
| defaultDataFile (_optional_)              | `string`                | The `defaultDataFile` feature ensures the Kameleoon SDK is always **READY** by providing a fallback configuration when no cached data file exists. Developers can preload a valid configuration by fetching it from `https://sdk-config.kameleoon.eu/v3/<sitecode>` and passing it as `defaultDataFile` during initialization. When a `dateModified` timestamp (in milliseconds) is provided and is newer than the cached version, the SDK will use the default datafile instead of the cached version. **If `dateModified` is omitted, the default datafile is only applied when no cached version exists**. This ensures the SDK always has a valid configuration, whether default, cached, or updated.                                                       | `undefined`                                |

<SharedDiv sec="set_default_data_file_js" c={Context}/>

</TabItem>

</Tabs>

:::note
Do not use several client instances in one application, as it is not fully supported yet. Several client instances may lead to local storage configuration being overwritten and cause bugs.
:::

#### Activating a feature flag

##### Assigning a unique ID to a user

<ActivatingAFeatureFlag sec="assigning_a_unique_id_to_a_user" c={Context}/>

##### Retrieving a flag configuration

<ActivatingAFeatureFlag sec="retrieving_a_feature_flag_configuration___default" c={Context}/>

##### Adding data points to target a user or filter / breakdown visits in reports

<ActivatingAFeatureFlag sec="adding_data_points_to_target_a_user_or_filter_breakdown_visits_in_reports___server" c={Context}/>

##### Tracking goal conversions

<ActivatingAFeatureFlag sec="tracking_goal_conversions___param" c={Context}/>

##### Sending events to analytics solutions

<ActivatingAFeatureFlag sec="sending_events_to_analytics_solutions" c={Context}/>

### Using a custom bucketing key

<CustomBucketingKey sec="description" c={Context}/>

#### Use cases

<CustomBucketingKey sec="use_cases" c={Context}/>

#### Technical details

<CustomBucketingKey sec="technical_details_1" c={Context}/>

```js
client.addData(visitorCode, new CustomData(index, 'newVisitorCode'));
```
:::tip
[More information in addData()](#adddata)
:::

<CustomBucketingKey sec="technical_details_2" c={Context}/>

#### Technical requirementes

<CustomBucketingKey sec="technical_requirements" c={Context}/>

### Targeting conditions

The Kameleoon SDKs support a variety of predefined targeting conditions that you can use to target users in your campaigns.
For the list of conditions supported by this SDK, see [use visit history to target users](/feature-management-and-experimentation/using-visit-history-in-feature-flags-and-experiments).

You can also use your own [external data to target users](/feature-management-and-experimentation/use-external-data-to-target-users).

### Logging

<Logging sec="logging" c={Context}/>

#### Log levels

<Logging sec="log_levels" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient, KameleoonLogger, LogLevel } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code', configuration });

// The `NONE` log level does not allow logging.
client.setLogLevel(LogLevel.NONE);
// Or use directly KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.NONE);

// The `ERROR` log level only allows logging issues that may affect the SDK's primary behavior.
client.setLogLevel(LogLevel.ERROR);
// Or use directly KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.ERROR);

// The `WARNING` log level allows logging issues which may require additional attention.
// It extends the `ERROR` log level.
// The `WARNING` log level is a default log level.
client.setLogLevel(LogLevel.WARNING);
// Or use KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.WARNING);

// The `INFO` log level allows logging general information on the SDK's internal processes.
// It extends the `WARNING` log level.
client.setLogLevel(LogLevel.INFO);
// Or use KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.INFO);

// The `DEBUG` level logs additional details about the SDK’s internal processes and extends the `INFO` level
// with more granular. diagnostic output.
// This information is not intended for end-user interpretation but can be sent to our support team
// to assist with internal troubleshooting.
client.setLogLevel(LogLevel.DEBUG);
// Or use KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.DEBUG);
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, KameleoonLogger, LogLevel } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code', configuration });

// The `NONE` log level does not allow logging.
client.setLogLevel(LogLevel.NONE);
// Or use KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.NONE);


// The `ERROR` log level only allows logging issues that may affect the SDK's primary behavior.
client.setLogLevel(LogLevel.ERROR);
// Or use KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.ERROR);

// The `WARNING` log level allows logging issues which may require additional attention.
// It extends the `ERROR` log level.
// The `WARNING` log level is a default log level.
client.setLogLevel(LogLevel.WARNING);
// Or use KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.WARNING);

// The `INFO` log level allows logging general information on the SDK's internal processes.
// It extends the `WARNING` log level.
client.setLogLevel(LogLevel.INFO);
// Or use KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.INFO);

// The `DEBUG` level logs additional details about the SDK’s internal processes and extends the `INFO` level
// with more granular. diagnostic output.
// This information is not intended for end-user interpretation but can be sent to our support team
// to assist with internal troubleshooting.
client.setLogLevel(LogLevel.DEBUG);
// Or use KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.DEBUG);
```

</TabItem>
</Tabs>

#### Custom handling of logs

<Logging sec="custom_handling_of_logs" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient, KameleoonLogger, IExternalLogger, LogLevel } from '@kameleoon/javascript-sdk';

export class CustomLogger implements IExternalLogger {
  // `log` method accepts logs from the SDK
  public log(level: LogLevel, message: string): void {
    // Custom log handling logic here. For example:
    switch (level) {
      case LogLevel.DEBUG:
        console.debug(message);
        break;
      case LogLevel.INFO:
        console.info(message);
        break;
      case LogLevel.WARNING:
        console.warn(message);
        break;
      case LogLevel.ERROR:
        console.error(message);
        break;
    }
  }
}

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  externals: {
    logger: new CustomLogger(),
  },
});

// Log level filtering is applied separately from log handling logic.
// The custom logger will only accept logs that meet or exceed the specified log level.
// Ensure the log level is set correctly.
client.setLogLevel(LogLevel.DEBUG);
// Or use KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.DEBUG);
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, KameleoonLogger, LogLevel } from '@kameleoon/javascript-sdk';

export class CustomLogger {
  // `log` method accepts logs from the SDK
  log(level, message) {
    // Custom log handling logic here. For example:
    switch (level) {
      case 'DEBUG':
        console.debug(message);
        break;
      case 'INFO':
        console.info(message);
        break;
      case 'WARNING':
        console.warn(message);
        break;
      case 'ERROR':
        console.error(message);
        break;
    }
  }
}

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  externals: {
    logger: new CustomLogger(),
  },
});

// Log level filtering is applied separately from log handling logic.
// The custom logger will only accept logs that meet or exceed the specified log level.
// Ensure the log level is set correctly.
client.setLogLevel(LogLevel.DEBUG);
// Or use KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.DEBUG);
```

</TabItem>
</Tabs>

### Domain information

You provide a domain as the `domain` in the `KameleoonClient` configuration, which is used for storing Kameleoon visitor code in cookies. Domains are important when working with the [`getVisitorCode`](#getvisitorcode) and [`setLegalConsent`](#setlegalconsent) methods. The domain you provide is stored in the cookie as the `Domain=` key.

### Setting the domain

The domain you provide indicates if the URL address can use the cookie. For example, if your domain is `www.example.com`. the cookie is only available from a `www.example.com` URL. This means pages with the `app.example.com` domain can't use the cookie.

For more fllexibility with subdomains, you can specify the domain with a period (`.`). For example, the domain `.example.com` allows the cookie to function on both `app.example.com` and `login.example.com`.

:::note
You can't use regular expressions, special symbols, protocol, or port numbers in the `domain`.
Additionally, a [specific list of subdomains](https://publicsuffix.org/list/public_suffix_list.dat) can't be used with the prefix `.`.
:::

Here's a small domain cheat sheet:

| Domain                         | Allowed URLs           | Disallowed URLs       |
| ------------------------------ | ---------------------- | --------------------- |
| `www.example.com`              | ✅`www.example.com`    | ❌ `app.example.com`  |
|                                | ✅ `example.com`       | ❌ `.com`             |
|                                |                        |                       |
| `.example.com` = `example.com` | ✅ `example.com`       | ❌ `otherexample.com` |
|                                | ✅ `www.example.com`   |                       |
|                                | ✅ `app.example.com`   |                       |
|                                | ✅ `login.example.com` |                       |
| `https://www.example.com`      | ⛔ bad domain          | ⛔ bad domain         |
| `www.example.com:4408`         | ⛔ bad domain          | ⛔ bad domain         |
| `.localhost.com` = `localhost` | ⛔ bad domain          | ⛔ bad domain         |

#### Developing on localhost

`localhost` is always considered a bad domain, making testing the domain when developing on `localhost` difficult.

There are two ways to avoid this issue:

- Don't specify the `domain` field in the SDK client while testing.
- Create a local domain for `localhost`. For example:
  - Navigate to `/etc/hosts` on _Linux_ or to `c:\Windows\System32\Drivers\etc\hosts` on _Windows_.
  - Open `hosts` with file super user or administrator rights.
  - Add a domain to the `localhost` port, for example: `127.0.0.1 app.com`
  - Now you can run your app locally on `app.com:{my_port}` and specify `.app.com` as your domain

### External dependencies

SDK external dependencies use the _dependency injection_ pattern to give you the ability to provide your own implementations for certain parts of an SDK.

:::note
In the JavaScript SDK, all external dependencies have default implementations, which use a native browser API so there's no need to provide them unless another API is required for specific use cases.
:::

Here's the list of available external dependencies:

| Dependency           | Interface                     | Required/Optional | API Used               | Description                                                                                                                                                                                          |
|----------------------|-------------------------------| ----------------- |------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `storage`            | `IExternalStorage`            | _Optional_        | Browser `localStorage` | Used for storing all the existing and collected SDK data.                                                                                                                                             |
| `requester`          | `IExternalRequester`          | _Optional_        | Browser `fetch`        | Used for performing all network requests.                                                                                                                                                         |
| `eventSource`        | `IExternalEventSource`        | _Optional_        | Browser `EventSource`  | Used for receiving Server Sent Events for [Real Time Update](https://developers.kameleoon.com/feature-management-and-experimentation/technical-considerations#streaming-premium-option) capabilities. |
| `visitorCodeManager` | `IExternalVisitorCodeManager` | _Optional_        | Browser cookie         | Used for storing and synchronizing visitor codes.                                                                                                                                                      |
| `logger`             | `ILogger`                     | _Optional_        | Custom implementation  | Used for custom handling of logs from the SDK. Lets you define how logs are processed and their output.                                                                                    |

The following example implements external dependencies. To import an interface from an SDK, create a class that implements the interface and pass the instantiated class to the SDK.

#### Storage

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { IExternalStorage, KameleoonClient } from '@kameleoon/javascript-sdk';

// --- External Storage implementation ---
// - JavaScript `Map` is used as an example storage
const storage = new Map();

class MyStorage<T> implements IExternalStorage<T> {
  public read(key: string): T | null {
    // - Read data using `key`
    const data = storage.get(key);

    // - Return `null` if there's no data
    if (!data) {
      return null;
    }

    // - Return obtained data
    return data;
  }

  public write(key: string, data: T): void {
    // - Write data using `key`
    storage.set(key, data);
  }
}

// --- Create KameleoonClient ---
const client = new KameleoonClient({
  siteCode: 'my_site_code',
  externals: {
    storage: new MyStorage(),
  },
});
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

// --- External Storage implementation ---
// - JavaScript `Map` is used as an example storage
const storage = new Map();

class MyStorage {
  read(key) {
    // - Read data using `key`
    const data = storage.get(key);

    // - Return `null` if there's no data
    if (!data) {
      return null;
    }

    // - Return obtained data
    return data;
  }

  write(key, data) {
    // - Write data using `key`
    storage.set(key, data);
  }
}

// --- Create KameleoonClient ---
const client = new KameleoonClient({
  siteCode: 'my_site_code',
  externals: {
    storage: new MyStorage(),
  },
});
```

</TabItem>
</Tabs>

#### EventSource

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  IExternalEventSource,
  KameleoonClient,
  EventSourceOpenParametersType,
} from '@kameleoon/javascript-sdk';

// --- External EventSource implementation ---
// - Example uses native browser `EventSource`
class MyEventSource implements IExternalEventSource {
  private eventSource?: EventSource;

  public open({
    eventType,
    onEvent,
    url,
  }: EventSourceOpenParametersType): void {
    // - Initialize `EventSource`
    const eventSource = new EventSource(url);

    this.eventSource = eventSource;
    // - Add event listener with provided event type and event callback
    this.eventSource.addEventListener(eventType, onEvent);
  }

  public close(): void {
    // - Cleanup open event source
    if (this.eventSource) {
      this.eventSource.close();
    }
  }

  public onError(callback: (error: Event) => void): void {
    // - Set error callback
    if (this.eventSource) {
      this.eventSource.onerror = callback;
    }
  }
}

// --- Create KameleoonClient ---
const client = new KameleoonClient({
  siteCode: 'my_site_code',
  externals: {
    eventSource: new MyEventSource(),
  },
});
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

// --- External EventSource implementation ---
// - Example uses native browser `EventSource`
class MyEventSource {
  eventSource;

  open({ eventType, onEvent, url }) {
    // - Initialize `EventSource`
    const eventSource = new EventSource(url);

    this.eventSource = eventSource;
    // - Add event listener with provided event type and event callback
    this.eventSource.addEventListener(eventType, onEvent);
  }

  close() {
    // - Cleanup open event source
    if (this.eventSource) {
      this.eventSource.close();
    }
  }

  public onError(callback) {
    // - Set error callback
    if (this.eventSource) {
      this.eventSource.onerror = callback;
    }
  }
}

// --- Create KameleoonClient ---
const client = new KameleoonClient({
  siteCode: 'my_site_code',
  externals: {
    eventSource: new MyEventSource(),
  },
});
```

</TabItem>
</Tabs>

#### VisitorCodeManager

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  IExternalVisitorCodeManager,
  SetDataParametersType,
  KameleoonClient,
  KameleoonUtils,
} from '@kameleoon/javascript-sdk';

// --- External Visitor Code Manager implementation ---
// - Example uses browser `document.cookie` API
class MyVisitorCodeManager implements IExternalVisitorCodeManager {
  public getData(key: string): string | null {
    const cookieString = document.cookie;

    // - Return `null` if no cookie was found
    if (!cookieString) {
      return null;
    }

    // - Parse cookie using the provided `key`
    return KameleoonUtils.getCookieValue(cookieString, key);
  }

  public setData({
    visitorCode,
    domain,
    maxAge,
    key,
    path,
  }: SetDataParametersType): void {
    // - Set cookie with provided parameters
    let resultCookie = `${key}=${visitorCode}; Max-Age=${maxAge}; Path=${path}`;

    if (domain) {
      resultCookie += `; Domain=${domain}`;
    }

    document.cookie = resultCookie;
  }
}

// --- Create KameleoonClient ---
const client = new KameleoonClient({
  siteCode: 'my_site_code',
  externals: {
    visitorCodeManager: new MyVisitorCodeManager(),
  },
});
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, KameleoonUtils } from '@kameleoon/javascript-sdk';

// --- External Visitor Code Manager implementation ---
// - Example uses browser `document.cookie` API
class MyVisitorCodeManager {
  getData(key) {
    const cookieString = document.cookie;

    // - Return `null` if no cookie was found
    if (!cookieString) {
      return null;
    }

    // - Parse cookie using provided `key`
    return KameleoonUtils.getCookieValue(cookieString, key);
  }

  setData({ visitorCode, domain, maxAge, key, path }) {
    // - Set cookie with provided parameters
    let resultCookie = `${key}=${visitorCode}; Max-Age=${maxAge}; Path=${path}`;

    if (domain) {
      resultCookie += `; Domain=${domain}`;
    }

    document.cookie = resultCookie;
  }
}

// --- Create KameleoonClient ---
const client = new KameleoonClient({
  siteCode: 'my_site_code',
  externals: {
    visitorCodeManager: new MyVisitorCodeManager(),
  },
});
```

</TabItem>
</Tabs>

#### Requester

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  RequestType,
  IExternalRequester,
  KameleoonResponseType,
  SendRequestParametersType,
  KameleoonClient,
} from '@kameleoon/javascript-sdk';

// --- External Requester Implementation
export class MyRequester implements IExternalRequester {
  public async sendRequest({
    url,
    parameters,
  }: SendRequestParametersType<RequestType>): Promise<KameleoonResponseType> {
    // - Using native browser `fetch`
    return await fetch(url, parameters);
  }
}

// --- Create KameleoonClient ---
const client = new KameleoonClient({
  siteCode: 'my_site_code',
  externals: {
    requester: new MyRequester(),
  },
});
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

// --- External Requester Implementation
export class MyRequester {
  async sendRequest({ url, parameters }) {
    // - Using native browser `fetch`
    return await fetch(url, parameters);
  }
}

// --- Create KameleoonClient ---
const client = new KameleoonClient({
  siteCode: 'my_site_code',
  externals: {
    requester: new MyRequester(),
  },
});
```

</TabItem>
</Tabs>

:::tip
[Return mocked result](#simulatesuccessrequest)
:::

#### Logger

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient, KameleoonLogger, IExternalLogger, LogLevel } from '@kameleoon/javascript-sdk';

// --- Custom Logger Implementation
export class CustomLogger implements IExternalLogger {
  public log(level: LogLevel, message: string): void {
    // Custom log handling logic here.
  }
}

// --- Create KameleoonClient ---
const client = new KameleoonClient({
  siteCode: 'my_site_code',
  externals: {
    logger: new CustomLogger(),
  },
});
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

// --- Custom Logger Implementation
export class CustomLogger {
  log(level, message) {
    // Custom log handling logic here.
  }
}

// --- Create KameleoonClient ---
const client = new KameleoonClient({
  siteCode: 'my_site_code',
  externals: {
    logger: new CustomLogger(),
  },
});
```

</TabItem>
</Tabs>

### Error Handling

Almost every `KameleoonClient` method may throw an error occassionaly. These errors are deliberately predefined `KameleoonError`s
that extend the native JavaScript `Error` class, providing useful messages and special `type` fields with a type `KameleoonException`.

`KameleoonException` is an enum containing all possible error types.

To know exactly what type of `KameleoonException` the method may throw, check the `Throws` section in the method description on this page, or hover over the method in your IDE to see the jsdocs description.

Handling errors makes your application more stable and avoids technical issues.

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonError,
  KameleoonClient,
  KameleoonException,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  try {
    await client.initialize();

    const customData = new CustomData(0, 'my_data');
    client.addData(visitorCode, customData);
  } catch (error) {
    // -- Type guard for inferring error type, as native JavaScript `catch`
    //    only infers `unknown`
    if (error instanceof KameleoonError) {
      switch (error.type) {
        case KameleoonException.VisitorCodeMaxLength:
          // -- Handle an error
          break;
        case KameleoonException.StorageWrite:
          // -- Handle an error
          break;
        case KameleoonException.Initialization:
          // -- Handle an error
          break;
        default:
          break;
      }
    }
  }
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, KameleoonException } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  try {
    await client.initialize();

    const customData = new CustomData(0, 'my_data');
    client.addData(visitorCode, customData);
  } catch (error) {
    switch (error.type) {
      case KameleoonException.VisitorCodeMaxLength:
        // -- Handle an error
        break;
      case KameleoonException.StorageWrite:
        // -- Handle an error
        break;
      case KameleoonException.Initialization:
        // -- Handle an error
        break;
      default:
        break;
    }
  }
}

init();
```

</TabItem>
</Tabs>

### Cross-device experimentation

<CrossDeviceReconciliation sec="cross_device_experimentation" c={Context}/>

#### Synchronizing custom data across devices

<CrossDeviceReconciliation sec="synchronizing_custom_data" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts title="Device One"
import { KameleoonClient, CustomData } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Custom Data with index `0` was set to `Visitor` scope
  //    in Kameleoon.
  const customDataIndex = 0;
  const customData = new CustomData(customDataIndex, 'my_data');

  client.addData('my_visitor', customData);
  client.flush();
}

init();
```

```ts title="Device Two"
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Before working with data, make `getRemoteVisitorData` call
  await getRemoteVisitorData({ visitorCode: 'my_visitor_code' });

  // -- New SDK code will have access to CustomData with `Visitor` scope
  //    defined on Device One.
  //    So, "my_data" is now available for targeting and tracking "my_visitor".
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```ts title="Device One"
import { KameleoonClient, CustomData } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Custom Data with index `0` was set to `Visitor` scope
  //    in Kameleoon.
  const customDataIndex = 0;
  const customData = new CustomData(customDataIndex, 'my_data');

  client.addData('my_visitor', customData);
  client.flush();
}

init();
```

```ts title="Device Two"
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Before working with data, make `getRemoteVisitorData` call.
  await getRemoteVisitorData({ visitorCode: 'my_visitor_code' });

  // -- New SDK code will have access to CustomData with `Visitor` scope
  //    defined on Device One.
  //    So, "my_data" is now available for targeting and tracking "my_visitor"
}

init();
```

</TabItem>
</Tabs>

#### Using custom data for session merging

<Tabs>
<TabItem value="version_3" label="SDK Version 3">

Cross-device experimentation allows you to combine a visitor's history across each of their devices (history reconciliation). History reconciliation lets you merge different visitors sessions into a single session. To reconcile visit history, use [`CustomData`](#customdata) to provide a unique identifier for the visitor.

Follow the [activating cross-device history reconciliation](#cross-device-experimentation) guide to set up your custom data in Kameleoon.

When your custom data is set up, you can use it in your code to merge a visitor's sessions. Sessions with the same identifier will always see the same experiment variation, and are displayed as a single visitor in the `Visitor` view of your experiment's result page.

The SDK configuration ensures that associated sessions always see the same variation of the experiment.

Afterwards, you can use the SDK normally. The following methods may be helpful with session merging:

- [`getRemoteVisitorData`](#getremotevisitordata) with `isUniqueIdentifier=true` - to retrieve data for all linked visitors
- [`trackConversion`](#trackconversion) or [`flush`](#flush) with `isUniqueIdentifier=true` - to track data for a specific visitor that is associated with another visitor.

:::tip
As the custom data you use as the identifier must be set to the `Visitor` scope, you need to use [cross-device custom data synchronization](https://developers.kameleoon.com/core-concepts/cross-device-experimentation) to retrieve the identifier with the [`getRemoteVisitorData`](#getremotevisitordata) method on each device.
:::

Here's an example of how to use custom data for session merging.

In this example, we have an application with a login page. Since we don't know the user ID at the moment of login, we use an anonymous visitor identifier generated by the[`getVisitorCode`](#getvisitorcode) method. After the user logs in, we can associate the anonymous visitor with the user ID and use it as the visitor's unique identifier.

<Tabs>

<TabItem value="ts" label="TypeScript" default>

```ts title="Login Page"
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
});

async function init(): Promise<void> {
  await client.initialize();

  const anonymousVisitor = getVisitorCode();
  // -- Saving `visitorCode` in `window` to re-use it later
  window.anonymousVisitor = anonymousVisitor;

  // -- Getting a variation—assume it's variation `A`
  const variation = client.getVariation({
    visitorCode: anonymousVisitor,
    featureKey: 'my_feature_key',
  });
}

init();
```

```ts title="Application Page"
import { CustomData } from '@kameleoon/javascript-sdk';

async function init(): Promise<void> {
  // -- At this point, the anonymous visitor has logged in,
  //    and we have a user ID to use as a visitor identifier.
  // -- Associating both visitors with an identifier Custom Data,
  //    where index `1` is the Custom Data's index, configured
  //    as a unique identifier in Kameleoon.
  const userIdentifierData = new CustomData(1, 'my_user_id');
  // -- Taking `visitorCode` from `window` object
  client.addData(window.anonymousVisitor, userIdentifierData);

  // -- Retrieving the variation for the user ID ensures
  //    consistency with the anonymous visitor's variation.
  //    Both the anonymous visitor and the user ID will be
  //    assigned variation `A`.
  const variation = client.getVariation({
    visitorCode: 'my_user_id',
    featureKey: 'my_feature_key',
  });

  // -- `my_user_id` and `anonymousVisitor` are now linked.
  //    They can be tracked as a single visitor.
  client.trackConversion({
    visitorCode: 'my_user_id',
    goalId: 123,
    revenue: 100,
    // -- Informing the SDK that the visitor is a unique identifier
    isUniqueIdentifier: true,
  });

  // -- Additionally, linked visitors share previously
  //    collected remote data
  const data = await client.getRemoteVisitorData({
    visitorCode: 'my_user_id',
    // -- Informing the SDK that the visitor is a unique identifier
    isUniqueIdentifier: true,
  });
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js title="Login Page"
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
});

async function init() {
  await client.initialize();

  const anonymousVisitor = getVisitorCode();
  // -- Saving `visitorCode` in `window` to re-use it later.
  window.anonymousVisitor = anonymousVisitor;

  // -- Getting a variation—assume it's variation `A`
  const variation = client.getVariation({
    visitorCode: anonymousVisitor,
    featureKey: 'my_feature_key',
  });
}

init();
```

```js title="Application Page"
import { CustomData } from '@kameleoon/javascript-sdk';

async function init() {
  // -- At this point anonymous visitor has logged in,
  //    and we have a user ID to use as a visitor identifier
  // -- Associating both visitors with an identifier Custom Data,
  //    where index `1` is the Custom Data's index, configured
  //    as a unique identifier in Kameleoon.
  const userIdentifierData = new CustomData(1, 'my_user_id');
  // -- Taking `visitorCode` from `window` object
  client.addData(window.anonymousVisitor, userIdentifierData);

  // -- Retrieving the variation for the user ID ensures
  //    consistency with the anonymous visitor's variation.
  //    Both the anonymous visitor and the user ID will be
  //    assigned variation `A`.
  const variation = client.getVariation({
    visitorCode: 'my_user_id',
    featureKey: 'my_feature_key',
  });

  // -- `my_user_id` and `anonymousVisitor` are now linked.
  //    They can be tracked as a single visitor.
  client.trackConversion({
    visitorCode: 'my_user_id',
    goalId: 123,
    revenue: 100,
    // -- Informing the SDK that the visitor is a unique identifier.
    isUniqueIdentifier: true,
  });

  // -- Additionally, linked visitors share previously
  //    collected remote data.
  const data = await client.getRemoteVisitorData({
    visitorCode: 'my_user_id',
    // -- Informing the SDK that the visitor is a unique identifier.
    isUniqueIdentifier: true,
  });
}

init();
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="version_4" label="SDK Version 4" default>

<CrossDeviceReconciliation sec="using_custom_data_session_merging" c={Context}/>

<Tabs>

<TabItem value="ts" label="TypeScript" default>

```ts title="Login Page"
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
});

async function init(): Promise<void> {
  await client.initialize();

  const anonymousVisitor = getVisitorCode();
  // -- Saving `visitorCode` in `window` to re-use it later.
  window.anonymousVisitor = anonymousVisitor;

  // -- Getting a variation, assume it's variation `A`
  const variation = client.getVariation({
    visitorCode: anonymousVisitor,
    featureKey: 'my_feature_key',
  });
}

init();
```

```ts title="Application Page"
import { CustomData, UniqueIdentifier } from '@kameleoon/javascript-sdk';

async function init(): Promise<void> {
  // -- At this point anonymous visitor has logged in,
  //    and we have a user ID to use as a visitor identifier
  // -- Associating both visitors with an identifier Custom Data,
  //    where index `1` is the Custom Data's index, configured
  //    as a unique identifier in Kameleoon.
  const userIdentifierData = new CustomData(1, 'my_user_id');
  // -- Taking `visitorCode` from `window` object
  client.addData(window.anonymousVisitor, userIdentifierData);
  // -- Flushing data for the anonymous `visitorCode`
  client.flush(window.anonymousVisitor);

  // -- Informing the SDK that the visitor is a unique identifier
  client.addData('my_user_id', new UniqueIdentifier(true));

  // -- Retrieving the variation for the user ID ensures
  //    consistency with the anonymous visitor's variation.
  //    Both the anonymous visitor and the user ID will be
  //    assigned variation `A`.
  const variation = client.getVariation({
    visitorCode: 'my_user_id',
    featureKey: 'my_feature_key',
  });

  // -- `my_user_id` and `anonymousVisitor` are now linked.
  //    They can be tracked as a single visitor.
  client.trackConversion({
    visitorCode: 'my_user_id',
    goalId: 123,
    revenue: 100,
  });

  // -- Additionally, linked visitors share previously
  //    collected remote data.
  const data = await client.getRemoteVisitorData({
    visitorCode: 'my_user_id',
  });
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js title="Login Page"
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
});

async function init() {
  await client.initialize();

  const anonymousVisitor = getVisitorCode();
  // -- Saving `visitorCode` in `window` to re-use it later.
  window.anonymousVisitor = anonymousVisitor;

  // -- Getting a variation, assume it's variation `A`
  const variation = client.getVariation({
    visitorCode: anonymousVisitor,
    featureKey: 'my_feature_key',
  });
}

init();
```

```js title="Application Page"
import { CustomData, UniqueIdentifier } from '@kameleoon/javascript-sdk';

async function init() {
  // -- At this point anonymous visitor has logged in,
  //    and we have a user ID to use as a visitor identifier
  // -- Associating both visitors with an identifier Custom Data,
  //    where index `1` is the Custom Data's index, configured
  //    as a unique identifier in Kameleoon.
  const userIdentifierData = new CustomData(1, 'my_user_id');
  // -- Taking `visitorCode` from `window` object
  client.addData(window.anonymousVisitor, userIdentifierData);
  // -- Flushing data for the anonymous `visitorCode`
  client.flush(window.anonymousVisitor);

  // -- Informing the SDK that the visitor is a unique identifier.
  client.addData('my_user_id', new UniqueIdentifier(true));

  // -- Retrieving the variation for the user ID ensures
  //    consistency with the anonymous visitor's variation.
  //    Both the anonymous visitor and the user ID will be
  //    assigned variation `A`.
  const variation = client.getVariation({
    visitorCode: 'my_user_id',
    featureKey: 'my_feature_key',
  });

  // -- `my_user_id` and `anonymousVisitor` are now linked.
  //    They can be tracked as a single visitor.
  client.trackConversion({
    visitorCode: 'my_user_id',
    goalId: 123,
    revenue: 100,
  });

  // -- Additionally, linked visitors share previously
  //    collected remote data.
  const data = await client.getRemoteVisitorData({
    visitorCode: 'my_user_id',
  });
}

init();
```

</TabItem>
</Tabs>

</TabItem>

</Tabs>

### Utilities

The SDK has a set of utility methods that you can use to simplify your development process. All methods are represented as static members of `KameleoonUtils` class.

#### simulateSuccessRequest

Use the `simulateSuccessRequest` method to simulate a successful request to the Kameleoon server. It can be useful for custom [Requester](#requester) implementations, when a developer needs to simulate a successful request (for example, disabling tracking).

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonUtils,
  IExternalRequester,
  SendRequestParametersType,
  RequestType,
  KameleoonResponseType,
} from '@kameleoon/javascript-sdk';

// - Example of `Requester` with disabled tracking
class Requester implements IExternalRequester {
  public async sendRequest({
    url,
    parameters,
    requestType,
  }: SendRequestParametersType<RequestType>): Promise<KameleoonResponseType> {
    if (requestType === RequestType.Tracking) {
      return KameleoonUtils.simulateSuccessRequest<RequestType.Tracking>(
        requestType,
        null,
      );
    }

    return await fetch(url, parameters);
  }
}
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonUtils } from '@kameleoon/javascript-sdk';

// - Example of `Requester` with disabled tracking
class Requester {
  async sendRequest({ url, parameters, requestType }) {
    if (requestType === RequestType.Tracking) {
      return KameleoonUtils.simulateSuccessRequest(requestType, null);
    }

    return await fetch(url, parameters);
  }
}
```

</TabItem>
</Tabs>

##### Arguments

| Name                     | Type                                   | Description                                                           |
| ------------------------ | -------------------------------------- | --------------------------------------------------------------------- |
| requestType (_required_) | `RequestType`                          | A type of request                                                     |
| data (_required_)        | `SimulateRequestDataType[RequestType]` | A type of request data, which is different depending on `RequestType` |

Data type `SimulateRequestDataType` is defined as follows:

- `RequestType.Tracking` - `null`
- `RequestType.ClientConfiguration` - `ClientConfigurationDataType`
- `RequestType.RemoteData` - `JSONType`

##### Return value

`Promise<KameleoonResponseType>` - returns a promise with the response of the request

#### getCookieValue

Use the `getCookieValue` method to parse a common cookie string (`key_1=value_1; key_2=value_2; ...`) and get the value of a specific cookie key. This method is useful when working with a custom implementation of [`VisitorCodeManager`](#visitorcodemanager).

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonUtils } from '@kameleoon/javascript-sdk';

const cookies = 'key_1=value_1; key_2=value_2';
const key = 'key_1';

const value = KameleoonUtils.getCookieValue(cookies, key); // = `value_1`
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonUtils } from '@kameleoon/javascript-sdk';

const cookies = 'key_1=value_1; key_2=value_2';
const key = 'key_1';

const value = KameleoonUtils.getCookieValue(cookies, key); // = `value_1`
```

</TabItem>
</Tabs>

##### Arguments

| Name                | Type     | Description                                            |
| ------------------- | -------- | ------------------------------------------------------ |
| cookie (_required_) | `string` | Cookie string in a form `key_1=value_1; key_2=value_2` |
| key (_required_)    | `string` | String representation of a key to find a value by      |

##### Return value

`string | null` - returns a string with a cookie value or `null` if the key was not found

## Reference

This is the full reference documentation for the Kameleoon JavaScript SDK.

### Initialization

#### initialize()

<Tabs>

<TabItem value="version_3" label="SDK Version 3">

`initialize()` is an asynchronous method for `KameleoonClient` initialization. The method fetches Kameleoon SDK data from our servers or retrieves data from a local source if data is up-to-date or the update interval has not been reached.

:::note
- If the SDK configuration could not be retrieved but there is an older configuration available in the SDK storage, the SDK uses the older configuration as a fallback and `initialize` does not throw an error.

- Client initialization has an optional _offline mode_.
It is activated by setting the optional `useCache` parameter to `true`.

In _offline mode_, if tracking requests for any of the following methods fail due to internet connectivity issues, the SDK automatically resends the request when internet connection has been reestablished:

- [flush](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk/#flush)
- [trackConversion](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk/#trackconversion)
- [getFeatureFlagVariationKey](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk/#getfeatureflagvariationkey)
- [getFeatureFlagVariable](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk/#getfeatureflagvariable)
- [isFeatureFlagActive](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk/#isfeatureflagactive)

:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonClient,
  KameleoonError,
  KameleoonException,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  try {
    await client.initialize();
  } catch (err) {
    if (err instanceof KameleoonError) {
      switch (err.type) {
        case KameleoonException.StorageWrite:
        // -- Handle error case
        case KameleoonException.ClientConfiguration:
        // -- Handle error case
        default:
          break;
      }
    }
  }
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, KameleoonException } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  try {
    await client.initialize();
  } catch (err) {
    switch (err.type) {
      case KameleoonException.StorageWrite:
      // -- Handle error case
      case KameleoonException.ClientConfiguration:
      // -- Handle error case
      default:
        break;
    }
  }
}

init();
```

</TabItem>
</Tabs>

##### Arguments

| Name                  | Type      | Description                                                                                                                                 | Default Value |
| --------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| useCache (_optional_) | `boolean` | parameter for activating SDK offline mode. If `true`, failed polls will not return error and will use cached data if such data is available. | `false`       |

##### Return value

`Promise<boolean>` - A promise that resolves to a boolean indicating whether the SDK was successfully initialized. Usually, if an unresolvable issue occurs, the `initialize` method will throw an error instead of resolving the promise. Therefore, the `boolean` value is almost always `true` and typically does not provide much additional information.

##### Exceptions thrown

| Type                                       | Description                                               |
| ------------------------------------------ | --------------------------------------------------------- |
| `KameleoonException.StorageWrite`          | Couldn't update storage data                              |
| `KameleoonException.ClientConfiguration`   | Couldn't retrieve client configuration from Kameleoon API |
| `KameleoonException.MaximumRetriesReached` | Maximum retries reached, request failed                   |

</TabItem>

<TabItem value="version_4" label="SDK Version 4" default>

An asynchronous method for `KameleoonClient` initialization by fetching Kameleoon SDK related data from server or by retrieving data from local source if data is up-to-date or update interval has not been reached.

:::note
- If the SDK configuration could not be retrieved but there is an older configuration available in SDK storage, the SDK uses the older configuration as a fallback and the `initialize` does not throw an error.

- SDK supports an _offline mode_.

In _offline mode_ if tracking requests from any of the following methods fail due to internet connectivity issues, the SDK automatically resends the request as soon as it detects that the internet connection has been re-established:

- [flush](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk/#flush)
- [trackConversion](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk/#trackconversion)
- [getFeatureFlagVariationKey](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk/#getfeatureflagvariationkey)
- [getFeatureFlagVariable](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk/#getfeatureflagvariable)
- [isFeatureFlagActive](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk/#isfeatureflagactive)

:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonClient,
  KameleoonError,
  KameleoonException,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  try {
    await client.initialize();
  } catch (err) {
    if (err instanceof KameleoonError) {
      switch (err.type) {
        case KameleoonException.StorageWrite:
        // -- Handle error case
        case KameleoonException.ClientConfiguration:
        // -- Handle error case
        default:
          break;
      }
    }
  }
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, KameleoonException } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  try {
    await client.initialize();
  } catch (err) {
    switch (err.type) {
      case KameleoonException.StorageWrite:
      // -- Handle error case
      case KameleoonException.ClientConfiguration:
      // -- Handle error case
      default:
        break;
    }
  }
}

init();
```

</TabItem>
</Tabs>

##### Return value

`Promise<boolean>` - A promise that resolves to a boolean indicating whether the SDK was successfully initialized. Usually, if an unresolvable issue occurs, the `initialize` method will throw an error instead of resolving the promise. Therefore, the `boolean` value is almost always `true` and typically does not provide much additional information.

##### Exceptions thrown

| Type                                       | Description                                               |
| ------------------------------------------ | --------------------------------------------------------- |
| `KameleoonException.StorageWrite`          | Couldn't update storage data                              |
| `KameleoonException.ClientConfiguration`   | Couldn't retrieve client configuration from Kameleoon API |
| `KameleoonException.MaximumRetriesReached` | Maximum retries reached, request failed                   |

</TabItem>
</Tabs>

### Feature flags and variations

#### getVariation()

<GetVariation sec="description___js" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
});

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get variation with tracking
  const variation = client.getVariation({
    visitorCode,
    featureKey: 'my_feature_key',
  });

  // -- Get variation without tracking
  const variation = client.getVariation({
    visitorCode,
    featureKey: 'my_feature_key',
    track: false,
  });

  // -- An Example variation:
  // {
  //  key: 'variation_key',
  //  id: 123,
  //  experimentId: 456,
  //  variables: Map {
  //    'variable_key' => {
  //      key: 'variable_key',
  //      type: VariableType.BOOLEAN,
  //      value: true,
  //    }
  //  },
  // }
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
});

async function init() {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get variation with tracking
  const variation = client.getVariation({
    visitorCode,
    featureKey: 'my_feature_key',
  });

  // -- Get variation without tracking
  const variation = client.getVariation({
    visitorCode,
    featureKey: 'my_feature_key',
    track: false,
  });

  // -- An Example variation:
  // {
  //  key: 'variation_key',
  //  id: 123,
  //  experimentId: 456,
  //  variables: Map {
  //    'variable_key' => {
  //      key: 'variable_key',
  //      type: VariableType.BOOLEAN,
  //      value: true,
  //    }
  //  },
  // }
}

init();
```

</TabItem>
</Tabs>

##### Arguments

An object of type `GetVariationParamsType` with the following properties:

<GetVariation sec="arguments" c={Context}/>

##### Return value

<GetVariation sec="return_value" c={Context}/>

##### Exceptions thrown

<GetVariation sec="exceptions___js" c={Context}/>

#### getVariations()

<GetVariations sec="description___js" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
});

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get all feature flag variations with tracking
  const variations = client.getVariations({
    visitorCode,
  });

  // -- Get active feature flag variations with tracking
  const variations = client.getVariations({
    visitorCode,
    onlyActive: true,
  });

  // -- Get active feature flag variations without tracking
  const variations = client.getVariations({
    visitorCode,
    onlyActive: true,
    track: false,
  });

  // -- An Example variations:
  // Map {
  // 'feature_key' => {
  //    key: 'variation_key',
  //    id: 123,
  //    experimentId: 456,
  //    variables: Map {
  //      'variable_key' => {
  //        key: 'variable_key',
  //        type: VariableType.BOOLEAN,
  //        value: true,
  //      }
  //    },
  //   }
  // }
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
});

async function init() {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get all feature flag variations with tracking
  const variations = client.getVariations({
    visitorCode,
  });

  // -- Get active feature flag variations with tracking
  const variations = client.getVariations({
    visitorCode,
    onlyActive: true,
  });

  // -- Get active feature flag variations without tracking
  const variations = client.getVariations({
    visitorCode,
    onlyActive: true,
    track: false,
  });

  // -- An Example variations:
  // Map {
  // 'feature_key' => {
  //    key: 'variation_key',
  //    id: 123,
  //    experimentId: 456,
  //    variables: Map {
  //      'variable_key' => {
  //        key: 'variable_key',
  //        type: VariableType.BOOLEAN,
  //        value: true,
  //      }
  //    },
  //   }
  // }
}

init();
```

</TabItem>
</Tabs>

##### Arguments

An object of type `GetVariationParamsType` with the following properties:

<GetVariations sec="arguments" c={Context}/>

##### Return value

<GetVariations sec="return_value" c={Context}/>

##### Exceptions thrown

<GetVariations sec="exceptions___js" c={Context}/>

#### isFeatureFlagActive()

- 📨 _Sends Tracking Data to Kameleoon (depending on the `track` parameter)_
- 🎯 _Events:_ [`EventType.Evaluation`](#events-1)

The method `isFeatureFlagActive()` returns a boolean value indicating whether the visitor identified by `visitorCode` has the specified `featureKey` active. This method checks for targeting, determines the variation for the visitor, and saves this information to storage. Additionally, it sends a tracking request.

There is also an overload of this method that allows you to pass a `track` parameter, which you can use to disable tracking of the feature evaluation.

:::note
Only visitors with an active feature flag must be targetted.
:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient, CustomData } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Add CustomData with index `0` containing visitor id to check the targeting
  client.addData(visitorCode, new CustomData(0, 'visitor_id'));

  // -- Check if the feature flag is active for visitor
  const isActive = client.isFeatureFlagActive(visitorCode, 'my_feature_key');

  // -- Check if the feature flag is active for visitor without tracking
  const isActive = client.isFeatureFlagActive({ visitorCode, featureKey: 'my_feature_key', track: false});
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, CustomData } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Add CustomData with index `0` containing visitor id to check the targeting
  client.addData(visitorCode, new CustomData(0, 'visitor_id'));

  // -- Check if the feature flag is active for visitor
  const isActive = client.isFeatureFlagActive(visitorCode, 'my_feature_key');

  // -- Check if the feature flag is active for visitor without tracking
  const isActive = client.isFeatureFlagActive({ visitorCode, featureKey: 'my_feature_key', track: false});
}

init();
```

</TabItem>
</Tabs>

##### Arguments

There are two overloads available for this method:

1. Two parameters overload:

:::warning
This overload is deprecated and will be removed in the next major update. Please use the new overload with an object parameter.
:::

| Name                     | Type     | Description                                                              |
| ------------------------ | -------- | ------------------------------------------------------------------------ |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters in length |
| featureKey (_required_)  | `string` | a unique key for feature flag                                            |

2. Object parameter overload of type `IsFeatureFlagActiveParamsType`:

| Name                     | Type      | Description                                                              | Default |
| ------------------------ | --------- | ------------------------------------------------------------------------ | ------- |
| visitorCode (_required_) | `string`  | unique visitor identification string, can't exceed 255 characters in length | -       |
| featureKey (_required_)  | `string`  | a unique key for feature flag                                            | -       |
| track (_optional_)       | `boolean` | a boolean indicator of whether to track the feature evaluation           | `true`  |

##### Return value

`boolean` - a boolean indicating whether the feature flag with `featureKey` is active for the visitor with `visitorCode`

##### Exceptions thrown

| Type                                                  | Description                                                                              |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `KameleoonException.Initialization`                   | Method was executed before the `kameleoonClient` completed its `initialize` call.        |
| `KameleoonException.VisitorCodeMaxLength`             | The visitor code exceeded the maximum length (255 characters).                            |
| `KameleoonException.VisitorCodeEmpty`                 | The visitor code is empty.                                                                |
| `KameleoonException.FeatureFlagConfigurationNotFound` | No feature flag was found for provided `featureKey`.                                      |
| `KameleoonException.DataInconsistency`                | Allocated variation was found, but there is no feature flag with according `featureKey` |

#### getFeatureFlags()

🚫 _Doesn't send Tracking Data to Kameleoon_

The `getFeatureFlags()` method returns a list of feature flags stored in the client configuration.

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Get all feature flags
  const featureFlags = client.getFeatureFlags();
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Get all feature flags
  const featureFlags = client.getFeatureFlags();
}

init();
```

</TabItem>
</Tabs>

##### Return value

`FeatureFlagType[]` - list of feature flags. Each feature flag item contains an `id` and `key`.

##### Exceptions thrown

| Type                                | Description                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.Initialization` | Method was executed before the `kameleoonClient` completed its `initialize` call. |

---

#### setForcedVariation()

<SetForcedVariation sec="description" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Forcing the variation "on" for the "featureKey1" feature flag for the visitor
  client.setForcedVariation({
    visitorCode: visitorCode,
    experimentId: 9516,
    variationKey: 'on',
    forceTargeting: false,
  });

  // -- Resetting the forced variation for the "featureKey1" feature flag for the visitor
  client.setForcedVariation({
    visitorCode: visitorCode,
    experimentId: 9516,
    variationKey: null,
  });
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Forcing the variation "on" for the "featureKey1" feature flag for the visitor
  client.setForcedVariation({
    visitorCode: visitorCode,
    experimentId: 9516,
    variationKey: 'on',
    forceTargeting: false,
  });

  // -- Resetting the forced variation for the "featureKey1" feature flag for the visitor
  client.setForcedVariation({
    visitorCode: visitorCode,
    experimentId: 9516,
    variationKey: null,
  });
}

init();
```

</TabItem>
</Tabs>

##### Arguments

<SetForcedVariation sec="arguments" c={Context}/>

##### Exceptions thrown

<SetForcedVariation sec="exceptions___js" c={Context}/>

#### evaluateAudiences()

<EvaluateAudiences sec="description" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  client.evaluateAudiences(visitorCode);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  client.evaluateAudiences(visitorCode);
}

init();
```

</TabItem>
</Tabs>

##### Arguments

<EvaluateAudiences sec="arguments" c={Context}/>

##### Exceptions thrown

<EvaluateAudiences sec="exceptions___js" c={Context}/>

#### getDataFile()

<GetDataFile sec="tip_qa" c={Context}/>

<GetDataFile sec="description" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

const dataFile = client.getDataFile();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

const dataFile = client.getDataFile();
```

</TabItem>
</Tabs>

##### Return value

<GetDataFile sec="return_value" c={Context}/>

### Visitor data

#### getVisitorCode()

The `getVisitorCode()` method obtains a visitor code from the browser cookie. If the visitor code doesn't exist, the method generates a random visitor code (or uses the `defaultVisitorCode` value if you provided one) and sets the new visitor code in a cookie.

<SharedDiv sec="get_visitor_code_simulated" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get visitor code with default value
  const visitorCode = client.getVisitorCode('my_default_visitor_code');
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript" default>

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get visitor code with default value
  const visitorCode = client.getVisitorCode('my_default_visitor_code');
}

init();
```

</TabItem>
</Tabs>

##### Arguments

| Name                            | Type     | Description                                                         |
| ------------------------------- | -------- | ------------------------------------------------------------------- |
| `defaultVisitorCode` (_optional_) | `string` | visitor code used if there is no visitor code in cookies |

:::note
If you don't provide a `defaultVisitorCode` and there is no visitor code stored in a cookie, the visitor code will be randomly generated.
:::

##### Return value

`string` - result visitor code

##### Exceptions thrown

| Type                                      | Description                          |
| ----------------------------------------- | ------------------------------------ |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code length was exceeded |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty            |

#### addData()

The `addData()` method adds [targeting data](#data-types) to storage so other methods can use the data to decide whether to target the current visitor.

The `addData()` method does not return any value and does not interact with Kameleoon back-end servers on its own. Instead, all the declared data is saved for future transmission using the [flush](#flush) method. This approach reduces the number of server calls made, as the data is typically grouped into a single server call. Note that the [trackConversion](#trackconversion) method also sends out any previously associated data, just like the flush method. The same is true for the [getFeatureFlagVariationKey](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk/#getfeatureflagvariationkey) and [getFeatureFlagVariable](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk/#getfeatureflagvariable) methods, if an experimentation rule is triggered.

:::tip
Each visitor can only have one instance of associated data for most data types. However, `CustomData` is an exception. Visitors can have one instance of associated `CustomData` per `customDataIndex`.
:::

:::note
- `userAgent` data will not be stored in storage like other data, and it will be sent with every tracking request for bot filtration.

- For the data types you can use for targeting, see the [supported targeting conditions](#targeting-conditions).
:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonClient,
  BrowserType,
  CustomData,
  Browser,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Create Kameleoon Data Types
  const browserData = new Browser(BrowserType.Chrome);
  const customData = new CustomData(0, 'my_data');

  // -- Add one Data item to Storage
  client.addData('my_visitor_code', browserData);

  // -- Add Data to Storage using variadic style
  client.addData('my_visitor_code', browserData, customData);

  // -- Add Data to Storage in array
  const dataArr = [browserData, customData];
  client.addData('my_visitor_code', ...dataArr);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import {
  KameleoonClient,
  CustomData,
  Browser,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Create Kameleoon Data Types
  const browserData = new Browser(BrowserType.Chrome);
  const customData = new CustomData(0, 'my_data');

  // -- Add one Data item to Storage
  client.addData('my_visitor_code', browserData);

  // -- Add Data to Storage using variadic style
  client.addData('my_visitor_code', browserData, customData);

  // -- Add Data to Storage in array
  const dataArr = [browserData, customData];
  client.addData('my_visitor_code', ...dataArr);
}

init();
```

</TabItem>
</Tabs>

##### Arguments

| Name                       | Type                  | Description                                                                                                 |
| -------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------- |
| visitorCode (_required_)   | `string`              | unique visitor identification string, can't exceed 255 characters.                                    |
| kameleoonData (_optional_) | `KameleoonDataType[]` | number of instances of any type of `KameleoonData`, can be added solely in array or as sequential arguments |

:::note
- `kameleoonData` is a variadic argument. It can be passed as one or several arguments (see the example).

- The index or ID of the [custom data](https://help.kameleoon.com/create-push-custom-data) can be found in your Kameleoon account. Note that this index starts at `0`, which means that the first custom data you create for a given site will be assigned `0` as its ID, not `1`.
:::

##### Exceptions thrown

| Type                                      | Description                                                                        |
| ----------------------------------------- | ---------------------------------------------------------------------------------- |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length of 255 characters.                     |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty.                                                          |
| `KameleoonException.StorageWrite`         | Couldn't update storage data.                                                       |
| `KameleoonException.Initialization`       | Method was executed before the `kameleoonClient` completed its `initialize` call. |

:::note
Check the [Data Types](#data-types) reference for more details on how to manage different data types.
:::

#### flush()

<Tabs>
<TabItem value="version_3" label="SDK Version 3">

The `flush()` method collects the Kameleoon data linked to the visitor. It then sends a tracking request, along with all data added using the `addData` method, which has not yet been sent using one of [these methods](/feature-management-and-experimentation/faq#when-does-the-sdk-send-a-tracking-request-for-analytics).

If you don't specify a `visitorCode`, the SDK flushes all of its stored data to the remote Kameleoon servers. If any previously failed tracking requests were stored locally in [offline mode](#initialize), the SDK attempts to send the stored requests before executing the latest request.

:::note
The `isUniqueIdentifier` can be helpful in unique situations; for example, if you cannot access the anonymous `visitorCode` given to a visitor, but you can use an internal ID linked to that visitor through session merging.
:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  const customData = new CustomData(0, 'my_data');
  client.addData(visitorCode, customData);

  // -- Flush added custom data for visitor
  client.flush(visitorCode);

  // -- Flush data for all the visitors
  client.flush();

  // -- Flush data with unique visitor identifier flag
  const internalUserId = 'my_user_id';
  client.flush(internalUserId, true);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  const customData = new CustomData(0, 'my_data');
  client.addData(visitorCode, customData);

  // -- Flush added custom data for visitor
  client.flush(visitorCode);

  // -- Flush data for all the visitors
  client.flush();

  // -- Flush data with unique visitor identifier flag
  const internalUserId = 'my_user_id';
  client.flush(internalUserId, true);
}

init();
```

</TabItem>
</Tabs>

##### Arguments

| Name                            | Type      | Description                                                                                                                                                 | Default |
| ------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| visitorCode (_optional_)        | `string`  | unique visitor identification string, can't exceed 255 characters, if not passed, all data will be flushed (sent to the remote Kameleoon servers). | -       |
| isUniqueIdentifier (_optional_) | `boolean` | an optional parameter for specifying if the `visitorCode` is a unique identifier.                                                                              | `false` |

##### Exceptions thrown

| Type                                      | Description                                                                       |
| ----------------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length (255 characters).                     |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty.                                                         |
| `KameleoonException.Initialization`       | Method was executed before the `kameleoonClient` completed its `initialize` call. |

</TabItem>
<TabItem value="version_4" label="SDK Version 4" default>

`flush()` takes the Kameleoon data associated with a visitor and schedules the data to be sent in the next tracking request. The time of the next tracking request is defined by the SDK Configuration [`trackingInterval`](#configuration-parameters) parameter. Visitor data can be added using the [addData](#adddata) and [getRemoteVisitorData](#getremotevisitordata) methods.

If you don't specify a `visitorCode`, the SDK flushes all of its stored data to the remote Kameleoon servers. If any previously failed tracking requests were stored locally in [offline mode](#initialize), the SDK attempts to send the stored requests before executing the latest request.

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  const customData = new CustomData(0, 'my_data');
  client.addData(visitorCode, customData);

  // -- Flush added custom data for visitor
  client.flush(visitorCode);

  // -- Instantly flush added custom data for visitor
  client.flush({ visitorCode, instant: true });

  // -- Flush data for all the visitors
  client.flush();

  // -- Instantly flush data for all the visitors
  client.flush({ instant: true });
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  const customData = new CustomData(0, 'my_data');
  client.addData(visitorCode, customData);

  // -- Flush added custom data for visitor
  client.flush(visitorCode);

  // -- Instantly flush added custom data for visitor
  client.flush({ visitorCode, instant: true });

  // -- Flush data for all the visitors
  client.flush();

  // -- Instantly flush data for all the visitors
  client.flush({ instant: true });
}

init();
```

</TabItem>
</Tabs>

##### Arguments

| Name                     | Type      | Description                                                                                                                                        | Default |
|--------------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------| ------- |
| visitorCode (_optional_) | `string`  | unique visitor identification string, can't exceed 255 characters, if not passed, all data will be flushed (sent to the remote Kameleoon servers). | -       |

Or an object with the type FlushParamsType, containing:

| Name                     | Type      | Description                                                                                                                                        | Default |
|--------------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------| ------- |
| visitorCode (_optional_) | `string`  | unique visitor identification string, can't exceed 255 characters, if not passed, all data will be flushed (sent to the remote Kameleoon servers). | -       |
| instant (_optional_)     | `boolean` | Boolean flag indicating whether the data should be sent instantly (`true`) or according to the scheduled tracking interval (`false`).              | -       |

##### Exceptions thrown

| Type                                      | Description                                                                       |
| ----------------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length (255 characters).                     |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty.                                                         |
| `KameleoonException.Initialization`       | Method was executed before the `kameleoonClient` completed it's `initialize` call. |

</TabItem>
</Tabs>

#### getRemoteData()

The `getRemoteData()` method returns data that is stored for a specified site code in a remote Kameleoon server.

You can use this method to retrieve user preferences, historical data, or any other data relevant to your application's logic. By storing this data on our highly scalable servers using our Data API, you can efficiently manage massive amounts of data and retrieve it for each of your visitors or users.

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Get remote data
  const jsonData = await getRemoteData('my_data_key');

  const data = JSON.parse(jsonData);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Get remote data
  const jsonData = await getRemoteData('my_data_key');

  const data = JSON.parse(jsonData);
}

init();
```

</TabItem>
</Tabs>

##### Arguments

| Name             | Type     | Description                                                |
| ---------------- | -------- | ---------------------------------------------------------- |
| key (_required_) | `string` | unique key with which data is associated. |

##### Return value

`JSONType` - promise with data retrieved for a specific key

##### Exceptions thrown

| Type                            | Description                                  |
| ------------------------------- | -------------------------------------------- |
| `KameleoonException.RemoteData` | Couldn't retrieve data from the Kameleoon server. |

#### getRemoteVisitorData()

<Tabs>
<TabItem value="version_3" label="SDK Version 3">

`getRemoteVisitorData()` is an asynchronous method used to retrieve Kameleoon Visits Data for the `visitorCode` from the Kameleoon Data API. This method stores data for making targeting decisions.

Data obtained using this method is important when you want to:

- use data collected from other devices.
- access a user's history, such as previously visited pages during past visits.
- use data that is only accessible on the client-side, like datalayer variables and goals that only convert on the front-end.

Read [this article](https://developers.kameleoon.com/feature-management-and-experimentation/using-visit-history-in-feature-flags-and-experiments/) for a better understanding of possible use cases.

:::caution
By default, `getRemoteVisitorData()` automatically retrieves the latest stored custom data with `scope=Visitor` and attaches them to the visitor without the need to call the method `addData()`. It is particularly useful for [synchronizing custom data between multiple devices](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/nodejs-sdk/#synchronizing-custom-data-across-devices).
:::

:::note
The `isUniqueIdentifier` can be helpful in unique situations; for example, if you cannot access the anonymous `visitorCode` given to a visitor, but you can use an internal ID linked to that visitor through session merging.
:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonClient,
  KameleoonDataType,
  VisitorDataFiltersType,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Get remote visitor data and add it to storage
  const kameleoonDataList: KameleoonDataType[] = await getRemoteVisitorData({
    visitorCode: 'my_visitor_code',
  });

  // -- Get remote visitor data without adding it to storage
  const kameleoonDataList: KameleoonDataType[] = await getRemoteVisitorData({
    visitorCode: 'my_visitor_code',
    shouldAddData: false,
  });

  // -- Get remote visitor data without adding it to storage,
  //    and customizing filters for retrieving visits data
  const filters: VisitorDataFiltersType = {
    currentVisit: true,
    previousVisitAmount: 10,
    customData: true,
    geolocation: true,
    conversions: true,
  };

  const kameleoonDataList: KameleoonDataType[] = await getRemoteVisitorData({
    visitorCode: 'my_visitor_code',
    shouldAddData: false,
    filters,
  });
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Get remote visitor data and add it to storage
  const kameleoonDataList = await getRemoteVisitorData({
    visitorCode: 'my_visitor_code',
  });

  // -- Get remote visitor data without adding it to storage
  const kameleoonDataList = await getRemoteVisitorData({
    visitorCode: 'my_visitor_code',
    shouldAddData: false,
  });

  // -- Get remote visitor data without adding it to storage,
  //    and customizing filters for retrieving visits data
  const filters = {
    currentVisit: true,
    previousVisitAmount: 10,
    customData: true,
    geolocation: true,
    conversions: true,
  };

  const kameleoonDataList = await getRemoteVisitorData({
    visitorCode: 'my_visitor_code',
    shouldAddData: false,
    filters,
  });
}

init();
```

</TabItem>
</Tabs>

##### Arguments

An object with the type `RemoteVisitorDataParamsType` containing:

| Name                            | Type                     | Description                                                                                                                                            | Default Value                                                                                                  |
| ------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| visitorCode (_required_)        | `string`                 | unique visitor identification string, can't exceed 255 characters.                                                                               | -                                                                                                              |
| shouldAddData (_optional_)      | `boolean`                | boolean flag identifying whether the retrieved custom data should be added to storage automatically (without calling the `addData` method afterwards).  | `true`                                                                                                         |
| filters (_optional_)            | `VisitorDataFiltersType` | filters for specifying what data should be retrieved from visits, by default, only `customData` is retrieved from the current and latest previous visit. | `{ previousVisitAmount: 1, currentVisit: true customData: true }`, other filters parameters are set to `false` |
| isUniqueIdentifier (_optional_) | `boolean`                | optional parameter that, when `true`, specifies that the `visitorCode` is a unique identifier.                                                            | `false`                                                                                                        |

##### Return value

`KameleoonDataType[]` - promise with list of Kameleoon Data retrieved

##### Exceptions thrown

| Type                                      | Description                                                            |
| ----------------------------------------- | ---------------------------------------------------------------------- |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length (255 characters)          |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty                                              |
| `KameleoonException.RemoteData`           | Couldn't retrieve data from Kameleoon server                           |
| `KameleoonException.VisitAmount`          | Visit amount must be a number between 1 and 25                         |
| `KameleoonException.Initialization`       | Method was executed before `initialize` was done for `kameleoonClient` |


##### Using parameters in getRemoteVisitorData()

The `getRemoteVisitorData()` method offers flexibility by allowing you to define various parameters when retrieving data on visitors. Whether you're targeting based on goals, experiments, or variations, the same approach applies across all data types.

For example, if you want to retrieve data on visitors who completed a goal "Order transaction", you can specify parameters within the `getRemoteVisitorData()` method to refine your targeting. For instance, if you want to target only users who converted on the goal in their last five visits, you can set the `previousVisitAmount` parameter to 5 and `conversions` to true.

The flexibility shown in this example is not limited to goal data. You can use parameters within the `getRemoteVisitorData()` method to retrieve data on a variety of visitor behaviors.

:::note
Here is the list of available `VisitorDataFiltersType` filters:

| Name                             | Type      | Description                                                                                                                                                                                            | Default |
|----------------------------------| --------- |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ------- |
| previousVisitAmount (_optional_) | `number`  | Number of previous visits to retrieve data from. Number between `1` and `25`                                                                                                                           | `1`     |
| currentVisit (_optional_)        | `boolean` | If true, current visit data will be retrieved                                                                                                                                                          | `true`  |
| customData (_optional_)          | `boolean` | If true, custom data will be retrieved.                                                                                                                                                                | `true`  |
| pageViews (_optional_)           | `boolean` | If true, page data will be retrieved.                                                                                                                                                                  | `false` |
| geolocation (_optional_)         | `boolean` | If true, geolocation data will be retrieved.                                                                                                                                                           | `false` |
| device (_optional_)              | `boolean` | If true, device data will be retrieved.                                                                                                                                                                | `false` |
| browser (_optional_)             | `boolean` | If true, browser data will be retrieved.                                                                                                                                                               | `false` |
| operatingSystem (_optional_)     | `boolean` | If true, operating system data will be retrieved.                                                                                                                                                      | `false` |
| conversions (_optional_)         | `boolean` | If true, conversion data will be retrieved.                                                                                                                                                            | `false` |
| experiments (_optional_)         | `boolean` | If true, experiment data will be retrieved.                                                                                                                                                            | `false` |
| kcs (_optional_)                 | `boolean` | If true, Kameleoon Conversion Score (KCS) will be retrieved. Requires the [AI Predictive Targeting add-on](https://help.kameleoon.com/target-users-by-ai-propensity-score-kameleoon-conversion-score/) | `false` |
:::

</TabItem>

<TabItem value="version_4" label="SDK Version 4" default>

`getRemoteVisitorData()` is an asynchronous method for retrieving Kameleoon Visits Data for the `visitorCode` from the Kameleoon Data API. The method adds data to storage for other methods to use when making targeting decisions.

Data obtained using this is important when you want to:

- use data collected from other devices.
- access a user's history, such as previously visited pages during past visits.
- use data that is only accessible on the client-side, like datalayer variables and goals that only convert on the front-end.

Read [this article](https://developers.kameleoon.com/feature-management-and-experimentation/using-visit-history-in-feature-flags-and-experiments/) for a better understanding of possible use cases.

:::caution
By default, `getRemoteVisitorData()` automatically retrieves the latest stored custom data with `scope=Visitor` and attaches them to the visitor without the need to call the method `addData()`. It is particularly useful for [synchronizing custom data between multiple devices](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/nodejs-sdk/#synchronizing-custom-data-across-devices).
:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonClient,
  KameleoonDataType,
  VisitorDataFiltersType,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Get remote visitor data and add it to storage
  const kameleoonDataList: KameleoonDataType[] = await getRemoteVisitorData({
    visitorCode: 'my_visitor_code',
  });

  // -- Get remote visitor data without adding it to storage
  const kameleoonDataList: KameleoonDataType[] = await getRemoteVisitorData({
    visitorCode: 'my_visitor_code',
    shouldAddData: false,
  });

  // -- Get remote visitor data without adding it to storage,
  //    and customizing filters for retrieving visits data
  const filters: VisitorDataFiltersType = {
    currentVisit: true,
    previousVisitAmount: 10,
    customData: true,
    geolocation: true,
    conversions: true,
  };

  const kameleoonDataList: KameleoonDataType[] = await getRemoteVisitorData({
    visitorCode: 'my_visitor_code',
    shouldAddData: false,
    filters,
  });
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Get remote visitor data and add it to storage
  const kameleoonDataList = await getRemoteVisitorData({
    visitorCode: 'my_visitor_code',
  });

  // -- Get remote visitor data without adding it to storage
  const kameleoonDataList = await getRemoteVisitorData({
    visitorCode: 'my_visitor_code',
    shouldAddData: false,
  });

  // -- Get remote visitor data without adding it to storage,
  //    and customizing filters for retrieving visits data
  const filters = {
    currentVisit: true,
    previousVisitAmount: 10,
    customData: true,
    geolocation: true,
    conversions: true,
  };

  const kameleoonDataList = await getRemoteVisitorData({
    visitorCode: 'my_visitor_code',
    shouldAddData: false,
    filters,
  });
}

init();
```

</TabItem>
</Tabs>

##### Arguments

An object with the type `RemoteVisitorDataParamsType` containing:

| Name                       | Type                     | Description                                                                                                                                            | Default Value                                                                                                  |
| -------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| visitorCode (_required_)   | `string`                 | unique visitor identification string, can't exceed 255 characters length                                                                               | -                                                                                                              |
| shouldAddData (_optional_) | `boolean`                | boolean flag identifying whether the retrieved custom data should be added to storage automatically (without calling the `addData` method afterwards)  | `true`                                                                                                         |
| filters (_optional_)       | `VisitorDataFiltersType` | filters for specifying what data should be retrieved from visits, by default only `customData` is retrieved from the current and latest previous visit | `{ previousVisitAmount: 1, currentVisit: true customData: true }`, other filters parameters are set to `false` |

##### Return value

`KameleoonDataType[]` - promise with list of Kameleoon Data retrieved

##### Exceptions thrown

| Type                                      | Description                                                            |
| ----------------------------------------- | ---------------------------------------------------------------------- |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length (255 characters)          |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty                                              |
| `KameleoonException.RemoteData`           | Couldn't retrieve data from Kameleoon server                           |
| `KameleoonException.VisitAmount`          | Visit amount must be a number between 1 and 25                         |
| `KameleoonException.Initialization`       | Method was executed before `initialize` was done for `kameleoonClient` |

##### Using parameters in getRemoteVisitorData()

The `getRemoteVisitorData()` method offers flexibility, allowing you to define various parameters when retrieving data on visitors. Whether you're targeting based on goals, experiments, or variations, the same approach applies across all data types.

For example, if you want to retrieve data on visitors who completed a goal "Order transaction", you can specify parameters within the `getRemoteVisitorData()` method to refine your targeting. For instance, if you want to target only users who converted on the goal in their last five visits, you can set the `previousVisitAmount` parameter to 5 and `conversions` to true.

The flexibility shown in this example is not limited to goal data. You can use parameters within the `getRemoteVisitorData()` method to retrieve data on a variety of visitor behaviors.

:::note
Here is the list of available `VisitorDataFiltersType` filters:

| Name                             | Type      | Description                                                                                                                                                                                                                                                                                                                                  | Default |
|----------------------------------| --------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| previousVisitAmount (_optional_) | `number`  | Number of previous visits to retrieve data from. Number between `1` and `25`                                                                                                                                                                                                                                                                 | `1`     |
| currentVisit (_optional_)        | `boolean` | If true, current visit data will be retrieved                                                                                                                                                                                                                                                                                                | `true`  |
| customData (_optional_)          | `boolean` | If true, custom data will be retrieved.                                                                                                                                                                                                                                                                                                      | `true`  |
| pageViews (_optional_)           | `boolean` | If true, page data will be retrieved.                                                                                                                                                                                                                                                                                                        | `false` |
| geolocation (_optional_)         | `boolean` | If true, geolocation data will be retrieved.                                                                                                                                                                                                                                                                                                 | `false` |
| device (_optional_)              | `boolean` | If true, device data will be retrieved.                                                                                                                                                                                                                                                                                                      | `false` |
| browser (_optional_)             | `boolean` | If true, browser data will be retrieved.                                                                                                                                                                                                                                                                                                     | `false` |
| operatingSystem (_optional_)     | `boolean` | If true, operating system data will be retrieved.                                                                                                                                                                                                                                                                                            | `false` |
| conversions (_optional_)         | `boolean` | If true, conversion data will be retrieved.                                                                                                                                                                                                                                                                                                  | `false` |
| experiments (_optional_)         | `boolean` | If true, experiment data will be retrieved.                                                                                                                                                                                                                                                                                                  | `false` |
| kcs (_optional_)                 | `boolean` | If true, Kameleoon Conversion Score (KCS) will be retrieved. Requires the [AI Predictive Targeting add-on](https://help.kameleoon.com/target-users-by-ai-propensity-score-kameleoon-conversion-score/)                                                                                                                                       | `false` |
| visitorCode (_optional_)         | `boolean` | If true, Kameleoon will retrieve the `visitorCode` from the most recent visit and use it for the current visit. This is necessary if you want to ensure that the visitor, identified by their `visitorCode`, always receives the same variation across visits for [Cross-device experimentation](/core-concepts/cross-device-experimentation). | `true`  |
| personalization (_optional_)     | `boolean` | If true, personalization data will be retrieved. This is required for the personalization condition                                                                                                                                                                                                                                          | `false` |
| cbs (_optional_)                 | `boolean` | <Text x={Shared.RemoteVisitorDataFilter.CBS}/>                                                                                                                                                                                                                                                                                               | `false` |
:::

</TabItem>
</Tabs>

#### getVisitorWarehouseAudience()

`getVisitorWarehouseAudience` is an asynchronous method that retrieves all audience data associated with the visitor in your data warehouse using the specified `visitorCode` and `warehouseKey`. The `warehouseKey` is typically your internal user ID. The `customDataIndex` parameter corresponds to the Kameleoon custom data that Kameleoon uses to target your visitors. Refer to the [warehouse targeting documentation](https://help.kameleoon.com/warehouse-audience-targeting/) for additional details.

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonClient,
  KameleoonDataType,
  CustomData,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor warehouse audience data using `warehouseKey`
  //    and add it to storage
  const customData: CustomData = await getVisitorWarehouseAudience({
    visitorCode: 'my_visitor',
    customDataIndex: 10,
    warehouseKey: 'my_key',
  });

  // -- Get visitor warehouse audience data using `visitorCode`
  //    and add it to storage
  const customData: CustomData = await getVisitorWarehouseAudience({
    visitorCode: 'my_visitor',
    customDataIndex: 10,
  });
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Get visitor warehouse audience data using `warehouseKey`
  //    and add it to storage
  const customData = await getVisitorWarehouseAudience({
    visitorCode: 'my_visitor',
    customDataIndex: 10,
    warehouseKey: 'my_key',
  });

  // -- Get visitor warehouse audience data using `visitorCode`
  //    and add it to storage
  const customData = await getVisitorWarehouseAudience({
    visitorCode: 'my_visitor',
    customDataIndex: 10,
  });
}

init();
```

</TabItem>
</Tabs>

##### Arguments

Parameters object consisting of:

| Name                         | Type     | Description                                                                                         |
| ---------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| visitorCode (_required_)     | `string` | unique visitor identification string, can't exceed 255 characters length                            |
| customDataIndex (_required_) | `number` | number representing the index of the custom data you want to use to target your Warehouse Audiences |
| warehouseKey (_optional_)    | `string` | unique key to identify the warehouse data (usually, your internal user ID)                          |

##### Return value

`Promise<CustomData | null>` - promise containing CustomData with the associated warehouse data or `null` if there was no data

##### Exceptions thrown

| Type                                      | Description                                                   |
| ----------------------------------------- | ------------------------------------------------------------- |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length (255 characters) |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty                                     |
| `KameleoonException.RemoteData`           | Couldn't retrieve data from Kameleoon server                  |

#### setLegalConsent()

:::note
Consent information is synchronized between the Kameleoon Engine (application file `engine.js`) and the JS SDK. This synchronization means that once consent is set on either the Engine or the SDK, it's automatically set for both. This feature eliminates the need for manual consent handling and ensures that SDKs operate in compliance with user preferences.

If you use Kameleoon in Hybrid mode, we recommend reading the consent section in our [Hybrid experimentation article](/core-concepts/hybrid-experimentation/#managing-consent-in-hybrid-mode)
:::

When handling legal consent, it's important to use the [`getVisitorCode`](#getvisitorcode) method from `KameleoonClient`, not the deprecated method from `KameleoonUtils`. Additionally, this method does not accept `domain` as an argument. Instead, pass it to the `KameleoonClient` constructor. Refer to the above example.

The `setLegalConsent` method specifies whether the visitor has given legal consent to use personal data. Setting the `legalConsent` parameter to `false` limits the types of data that you can include in tracking requests. This method helps you adhere to legal and regulatory requirements while responsibly managing visitor data. You can find more information on personal data in the [consent management policy](https://help.kameleoon.com/consent-management-policy/).

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  await client.initialize();

  const visitorCode = client.getVisitorCode();
  client.setLegalConsent(visitorCode, true);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  await client.initialize();

  const visitorCode = client.getVisitorCode();
  client.setLegalConsent(visitorCode, true);
}

init();
```

</TabItem>
</Tabs>

##### Arguments

| Name                     | Type      | Description                                                                                                                                                                                    |
| ------------------------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| visitorCode (_required_) | `string`  | unique visitor identification string, can't exceed 255 characters. length                                                                                                                       |
| consent (_required_)     | `boolean` | a boolean value representing the legal consent status. `true` indicates that the visitor has given legal consent. `false` indicates that the visitor has never provided or has withdrawn legal consent. |

##### Exceptions thrown

| Type                                      | Description                                                          |
| ----------------------------------------- | -------------------------------------------------------------------- |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code length exceeded the maximum length (255 characters) |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty                                            |

### Goals and third-party analytics

#### trackConversion()

<Tabs>
<TabItem value="version_3" label="SDK Version 3">

<TrackConversion sec="description___js_old" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  const experimentId = 123;
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Track conversion
  client.trackConversion({ visitorCode, revenue: 20000, goalId: 123 });

  // -- Track conversion with unique visitor identifier flag
  const internalUserId = 'my_user_id';
  client.trackConversion({
    visitorCode: internalUserId,
    revenue: 20000,
    goalId: 123,
    isUniqueIdentifier: true,
  });
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  const experimentId = 123;
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Track conversion
  client.trackConversion({ visitorCode, revenue: 20000, goalId: 123 });

  // -- Track conversion with unique visitor identifier flag
  const internalUserId = 'my_user_id';
  client.trackConversion({
    visitorCode: internalUserId,
    revenue: 20000,
    goalId: 123,
    isUniqueIdentifier: true,
  });
}

init();
```

</TabItem>
</Tabs>

##### Arguments

Parameters object consisting of:

<TrackConversion sec="arguments___js_old" c={Context}/>

##### Exceptions thrown

<TrackConversion sec="exceptions___js" c={Context}/>

</TabItem>

<TabItem value="version_4" label="SDK Version 4" default>

<TrackConversion sec="description___js" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient, CustomData } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  const experimentId = 123;
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Track conversion
  client.trackConversion({
    visitorCode,
    revenue: 20000,
    goalId: 123,
    metadata: [new CustomData(0, 'value')],
    negative: true,
  });
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, CustomData } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  const experimentId = 123;
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Track conversion
  client.trackConversion({
    visitorCode,
    revenue: 20000,
    goalId: 123,
    metadata: [new CustomData(0, 'value')],
    negative: true,
  });
}

init();
```

</TabItem>
</Tabs>

##### Arguments

Parameters object consisting of:

<TrackConversion sec="arguments___js" c={Context}/>

:::note
<TrackConversion sec="note_metadata" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
kameleoonClient.addData(visitorCode, new CustomData(5, 'Credit Card'), new CustomData(9, 'Express Delivery'));
kameleoonClient.trackConversion({
    visitorCode,
    goalId: 1000,
    metadata: [new CustomData(5, 'Amex Credit Card')]
});
```
</TabItem>
<TabItem value="js" label="JavaScript">

```js
kameleoonClient.addData(visitorCode, new CustomData(5, 'Credit Card'), new CustomData(9, 'Express Delivery'));
kameleoonClient.trackConversion({
    visitorCode,
    goalId: 1000,
    metadata: [new CustomData(5, 'Amex Credit Card')]
});
```

</TabItem>
</Tabs>
:::

</TabItem>
</Tabs>

##### Exceptions thrown

<TrackConversion sec="exceptions___js" c={Context}/>

---

#### getEngineTrackingCode()

The `getEngineTrackingCode()` method returns the Kameleoon tracking code for the current visitor. The tracking code is based on the feature experiments that were triggered during the last five seconds.

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Trigger feature experiment
  // -- E.g., result `variationKey` id is `200`, and implicit experiment id is `100`.
  client.getVariation({ visitorCode: 'visitor_code', featureKey: 'my_feature_key' });

  // -- Get tracking code
  const engineCode = client.getEngineTrackingCode('visitor_code');

  // -- Result engine code will look like this
  // `
  // window.kameleoonQueue = window.kameleoonQueue || [];
  // window.kameleoonQueue.push(['Experiments.assignVariation', 100, 200, true]);
  // window.kameleoonQueue.push(['Experiments.trigger', 100, true]);
  // `

  // -- Insert tracking code into the page
  const script = document.createElement('script');
  script.textContent = engineCode;
  document.body.appendChild(script);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Trigger feature experiment
  // -- E.g., result `variationKey` id is `200`, and implicit experiment id is `100`
  client.getVariation({ visitorCode: 'visitor_code', featureKey: 'my_feature_key' });

  // -- Get tracking code
  const engineCode = client.getEngineTrackingCode('visitor_code');

  // -- Result engine code will look like this
  // `
  // window.kameleoonQueue = window.kameleoonQueue || [];
  // window.kameleoonQueue.push(['Experiments.assignVariation', 100, 200, true]);
  // window.kameleoonQueue.push(['Experiments.trigger', 100, true]);
  // `

  // -- Insert tracking code into the page
  const script = document.createElement('script');
  script.textContent = engineCode;
  document.body.appendChild(script);
}

init();
```

</TabItem>
</Tabs>

:::note
The result tracking code can be inserted directly into the html `<script>` tag.
:::

For example:

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <script>
      const engineTrackingCode = `
        window.kameleoonQueue = window.kameleoonQueue || [];
        window.kameleoonQueue.push(['Experiments.assignVariation', 100, 200, true]);
        window.kameleoonQueue.push(['Experiments.trigger', 100, true]);
      `;
      const script = document.createElement('script');

      script.textContent = engineTrackingCode;
      document.body.appendChild(script);
    </script>
  </body>
</html>
```

##### Arguments

| Name                     | Type     | Description                                                              |
| ------------------------ | -------- | ------------------------------------------------------------------------ |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters. |

##### Return value

`string` containing engine tracking code

##### Exceptions thrown

| Type                                      | Description                                                          |
| ----------------------------------------- | -------------------------------------------------------------------- |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code length exceeded the maximum length (255 characters). |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty.                                            |

### Events

<Tabs>
<TabItem value="version_3" label="SDK Version 3">

#### Sending exposure events to external tools

Kameleoon offers built-in integrations with various analytics and CDP solutions, such as [Mixpanel, Google Analytics 4, Segment...](https://help.kameleoon.com/category/user-manual/manage-your-integrations/). To ensure that you can track and analyze your server-side experiments, Kameleoon provides a method, `getEngineTrackingCode()`, that returns the JavasScript code to be inserted in your page. The code automatically sends the exposure events to your analytics solution. The SDK builds a tracking code for your active analytics solution based on the experiments that the visitor has triggered in the last five seconds.
For more information about hybrid experimentation, please refer to this [article](https://developers.kameleoon.com/core-concepts/hybrid-experimentation).

The `getEngineTrackingCode()` method returns the Kameleoon tracking code for the current visitor. The tracking code is based on the experiments that were triggered during the last five seconds.

:::note
To benefit from this feature, you will need to implement both the JavaScript SDK and our Kameleoon JavaScript tag. We recommend you implement the Kameleoon asynchronous tag, which you can install before closing the `<body>` tag in your HTML page, as it will only be used for tracking purposes.
:::

</TabItem>

<TabItem value="version_4" label="SDK Version 4" default>

#### onEvent()

Method `onEvent()` fires a callback when a specific event is triggered. The callback function can access the data associated with the event.
The SDK methods in this documentation note which event types they trigger, if any.

:::note
You can only assign one callback to each `EventType`.
:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonClient,
  EventType,
  EvaluationEventDataType,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Define logic to be executed on SDK event
  client.onEvent(EventType.Evaluation, (eventData: EvaluationEventDataType) => {
    // -- My Logic
  });
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, EventType } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Define logic to be executed on SDK event
  client.onEvent(EventType.Evaluation, (eventData) => {
    // -- My Logic
  });
}

init();
```

</TabItem>
</Tabs>

##### Events

Events are defined in the `EventType` enum. Depending on the event type, the `eventData` parameter will have a different type.

| Type                            | `eventData` type                   | Description                                                                                                           |
| ------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `EventType.Evaluation`          | `EvaluationEventDataType`          | Triggered when the SDK evaluates any variation for a feature flag. It is triggered regardless of the result variation. |
| `EventType.ConfigurationUpdate` | `ConfigurationUpdateEventDataType` | Triggered when the SDK receives a configuration update from the server (when using real-time streaming).               |

##### Arguments

| Name                  | Type                                            | Description                                                                                          |
| --------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| event (_required_)    | `EventType`                                     | a type of the event to associate with the callback.                                      |
| callback (_required_) | `(eventData: EventDataType<EventType>) => void` | a callback function with the `eventData` parameter that is called when a configuration update occurs. |

##### Exceptions thrown

| Type                                | Description                                                                      |
| ----------------------------------- | -------------------------------------------------------------------------------- |
| `KameleoonException.Initialization` | Method was executed before the `kameleoonClient` completed the `initialize` call. |

---

##### Sending exposure events to external tools

Kameleoon offers built-in integrations with various analytics and CDP solutions, such as [Mixpanel, Google Analytics 4, Segment...](https://help.kameleoon.com/category/user-manual/manage-your-integrations/). To ensure that you can track and analyze your server-side experiments, Kameleoon provides a method, `getEngineTrackingCode()`, that returns the JavasScript code to be inserted in your page. The code automatically sends the exposure events to your analytics solution. The SDK builds a tracking code for your active analytics solution based on the experiments that the visitor has triggered in the last five seconds.
For more information about hybrid experimentation, please refer to this [article](https://developers.kameleoon.com/core-concepts/hybrid-experimentation).

The `getEngineTrackingCode()` method returns the Kameleoon tracking code for the current visitor. The tracking code is based on the experiments that were triggered during the last five seconds.

:::note
To benefit from this feature, you will need to implement both the JavaScript SDK and our Kameleoon JavaScript tag. We recommend you implement the Kameleoon asynchronous tag, which you can install before closing the `<body>` tag in your HTML page, as it will only be used for tracking purposes.
:::
</TabItem>
</Tabs>

---

### Data types

Kameleoon Data types are helper classes used to store data in storage in predefined forms.

During the [flush](#flush) execution, the SDK collects all data and sends it with the tracking request.

Data available in the SDK is not available for targeting and reporting in the Kameleoon app until you add the data (for example, by using the `addData()` methodt).
See [use visit history to target users](../using-visit-history-in-feature-flags-and-experiments) for more information.

:::note
If you are using hybrid mode, call `getRemoteVisitorData()` to automatically fill all data that Kameleoon has previously collected.
:::

#### Browser

:::note
Since JavaScript SDK `4.10.0`, `Browser` is automatically detected based on the `User-Agent` string. However, you can still manually override it if needed.
:::

`Browser` contains browser information.

:::note
Each visitor can only have one `Browser`. Adding second a `Browser` overwrites the first one.
:::

| Name                 | Type          | Description                                                                                     |
| -------------------- | ------------- | ----------------------------------------------------------------------------------------------- |
| browser (_required_) | `BrowserType` | predefined browser type (`Chrome`, `InternetExplorer`, `Firefox`, `Safari`, `Opera`, `Other`).   |
| version (_optional_) | `number`      | version of the browser, floating point number represents major and minor version of the browser. |

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonClient,
  BrowserType,
  Browser,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Add new browser data to client
  const browser = new Browser(BrowserType.Chrome, 86.1);
  client.addData('my_visitor_code', browser);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import {
  KameleoonClient,
  BrowserType,
  Browser,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Add new browser data to client
  const browser = new Browser(BrowserType.Chrome, 86.1);
  client.addData('my_visitor_code', browser);
}

init();
```

</TabItem>
</Tabs>

---

#### UniqueIdentifier

`UniqueIdentifier` data is used as marker for unique visitor identification.

If you add `UniqueIdentifier` for a visitor, `visitorCode` is used as the unique visitor identifier, which is useful for [Cross-device experimentation](/core-concepts/cross-device-experimentation). Associating a `UniqueIdentifier` with a visitor notifies the SDK that the visitor is linked to another visitor.

The `isUniqueIdentifier` can be helpful in unique situations; for example, if you cannot access the anonymous `visitorCode` given to a visitor, but you can use an internal ID linked to that visitor through session merging.

:::note
Each visitor can only have one `UniqueIdentifier`. Adding another `UniqueIdentifier` overwrites the first one.
:::

| Name               | Type      | Description                                                                                                                                                   |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value (_required_) | `boolean` | value that specifies if the visitor is associated with another visitor, `false` implies that the visitor is not associated with any other visitor. |

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient, UniqueIdentifier } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Add unique identifier to a visitor
  client.addData('my_visitor_code', new UniqueIdentifier(true));
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, UniqueIdentifier } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Add unique identifier to a visitor
  client.addData('my_visitor_code', new UniqueIdentifier(true));
}

init();
```

</TabItem>
</Tabs>

---

#### Conversion

<Conversion sec="description" c={Context}/>

`ConversionParametersType` conversionParameters - an object with conversion parameters described below

<Conversion sec="arguments" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonClient,
  ConversionParametersType,
  Conversion,
  CustomData,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();
  // -- Defined conversion parameters
  const conversionParameters: ConversionParametersType = {
    goalId: 123,
    revenue: 10000,
    negative: true,
    metadata: [new CustomData(0, 'value')],
  };

  // -- Add new conversion data to client
  const conversion = new Conversion(conversionParameters);
  client.addData('my_visitor_code', conversion);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, Conversion, CustomData } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Defined conversion parameters
  const conversionParameters = {
    goalId: 123,
    revenue: 10000,
    negative: true,
    metadata: [new CustomData(0, 'value')],
  };

  // -- Add new conversion data to client
  const conversion = new Conversion(conversionParameters);
  client.addData('my_visitor_code', conversion);
}

init();
```

</TabItem>
</Tabs>

#### Cookie

`Cookie` contains information about the cookie stored on the visitor's device.

:::note
- Generally, the JavaScript SDK will attempt to use a `localStorage` cookie for the conditions. If `localStorage` is not possible, the SDK can use `Cookie` data as an alternative.

- Each visitor can only have one `Cookie`. Adding a second `Cookie` overwrites the first one.
:::

| Name                | Type           | Description                                                         |
| ------------------- | -------------- | ------------------------------------------------------------------- |
| cookie (_required_) | `CookieType[]` | A list of `CookieType` objects consisting of cookie keys and values. |

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient, CookieType, Cookie } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Add new cookie data to client
  const cookieData: CookieType[] = [
    { key: 'key_1', value: 'value_1' },
    { key: 'key_2', value: 'value_2' },
  ];
  const cookie = new Cookie(cookieData);
  client.addData('my_visitor_code', cookie);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, Cookie } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Add new cookie data to client
  const cookieData = [
    { key: 'key_1', value: 'value_1' },
    { key: 'key_2', value: 'value_2' },
  ];
  const cookie = new Cookie(cookieData);
  client.addData('my_visitor_code', cookie);
}

init();
```

</TabItem>
</Tabs>

##### Methods

`Cookie` data has a static utility method, `fromString`, that you can use to create a cookie by parsing a string that contains valid cookie data.

The method accepts `string` as a parameter and returns an initialized `Cookie` instance.

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { Cookie } from '@kameleoon/javascript-sdk';

const cookieString = 'key_1=value_1; key_2=value_2';
const cookie: Cookie = Cookie.fromString(cookieString);

// -- The result cookie will contain the following cookie array
// [
//    { key: 'key_1', value: 'value_1' },
//    { key: 'key_2', value: 'value_2' },
// ]
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { Cookie } from '@kameleoon/javascript-sdk';

const cookieString = 'key_1=value_1; key_2=value_2';
const cookie = Cookie.fromString(cookieString);

// -- The result cookie will contain the following cookie array
// [
//    { key: 'key_1', value: 'value_1' },
//    { key: 'key_2', value: 'value_2' },
// ]
```

</TabItem>
</Tabs>

#### GeolocationData

`GeolocationData` contains the visitor's geolocation details.

:::note
Each visitor can only have one `GeolocationData`. Adding a second `GeolocationData` overwrites the first one.
:::

An object parameter with the type `GeolocationInfoType` contains the following fields:

| Name                     | Type               | Description                                                                                                           |
| ------------------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| country (_required_)     | `string`           | The country of the visitor.                                                                                            |
| region (_optional_)      | `string`           | The region of the visitor.                                                                                             |
| city (_optional_)        | `string`           | The city of the visitor.                                                                                               |
| postalCode (_optional_)  | `string`           | The postal code of the visitor.                                                                                        |
| coordinates (_optional_) | `[number, number]` | Coordinates array tuple of two location values (longitude and latitude). Coordinate number represents decimal degrees. |

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonClient,
  GeolocationData,
  GeolocationInfoType,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Add geolocation data
  const geolocationInfo: GeolocationInfoType = {
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    postalCode: '75008',
    coordinates: [48.8738, 2.295],
  };
  const geolocationData = new GeolocationData(geolocationInfo);
  client.addData('my_visitor_code', geolocationData);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, GeolocationData } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Add geolocation data
  const geolocationInfo = {
    country: 'France',
    region: 'Île-de-France',
    city: 'Paris',
    postalCode: '75008',
    coordinates: [48.8738, 2.295],
  };
  const geolocationData = new GeolocationData(geolocationInfo);
  client.addData('my_visitor_code', geolocationData);
}

init();
```

</TabItem>
</Tabs>

---

#### CustomData

`CustomData` allows any type of data to be easily associated with each visitor. It can then be used as a targeting condition in [segments](https://help.kameleoon.com/create-new-segment/) or as a filter/breakdown in experiment reports.
To learn more about custom data, please refer to this [article](/core-concepts/custom-data).

| Name                   | Type       | Description                                                                                                                                                                                                             | Default |
|------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| index/name _(required)_     | `number`/`string`   | Index or Name of the custom data. **Either `index` or `name` must be provided** to identify the data.                                                                                                                                |         |
| overwrite _(optional)_ | `boolean`  | Flag to explicitly control how the values are stored and how they appear in reports. [See more](https://developers.kameleoon.com/core-concepts/custom-data/#default-logic-when-overwrite-parameter-is-false-or-omitted) | `true`  |
| value (_required_)     | `string[]` | The custom data value. It must be stringified to match the `string` type. _Note:_ value is variadic.                                                                                                                    |         |

:::note

- Each visitor is allowed only one `CustomData` for each unique `index`. Adding another `CustomData` with the same `index` will replace the existing one.

- The custom data ‘index’ can be found in the [Custom Data dashboard](https://help.kameleoon.com/manage-your-custom-data/) under the “INDEX” column.

- To prevent the SDK from sending data with the selected index to Kameleoon servers for privacy reasons, enable the option: **Use this data only locally for targeting purposes** when creating custom data.

- Adding a `CustomData` instance created with a name when the SDK instance is not initialized or the name is not registered, will result in the data being ignored.

:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient, CustomData } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  const dataItemOne = 'abc';
  const dataItemTwo = JSON.stringify(100);
  const dataItemThree = JSON.stringify({ a: 200, b: 300 });

  const customDataIndex = 0;

  // -- Create custom data using single parameter
  const customData = new CustomData(customDataIndex, dataItemOne);

  // -- Create custom data using overwrite flag
  const customData = new CustomData(customDataIndex, false, dataItemOne);

  // -- Create custom data using name instead of index
  const customData = new CustomData('customDataName', dataItemOne);

  // -- Create custom data using variadic number of parameters
  const customData = new CustomData(customDataIndex, dataItemOne, dataItemTwo);

  // -- Create custom data using an array of values
  const dataList = [dataItemOne, dataItemTwo, dataItemThree];
  const customData = new CustomData(customDataIndex, ...dataList);

  // -- Create custom data using overwrite flag
  const customData = new CustomData(customDataIndex, false, ...dataList);

  // -- Create custom data using name instead of index
  const customData = new CustomData('customDataName', false, ...dataList);

  // -- Add custom data
  client.addData('my_visitor_code', customData);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, CustomData } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  const dataItemOne = 'abc';
  const dataItemTwo = JSON.stringify(100);
  const dataItemThree = JSON.stringify({ a: 200, b: 300 });

  const customDataIndex = 0;

  // -- Create custom data using single parameter
  const customData = new CustomData(customDataIndex, dataItemOne);

  // -- Create custom data using overwrite flag
  const customData = new CustomData(customDataIndex, false, dataItemOne);

  // -- Create custom data using name instead of index
  const customData = new CustomData('customDataName', dataItemOne);

  // -- Create custom data using variadic number of parameters
  const customData = new CustomData(customDataIndex, dataItemOne, dataItemTwo);

  // -- Create custom data using an array of values
  const dataList = [dataItemOne, dataItemTwo, dataItemThree];
  const customData = new CustomData(customDataIndex, ...dataList);

  // -- Create custom data using overwrite flag
  const customData = new CustomData(customDataIndex, false, ...dataList);

  // -- Create custom data using name instead of index
  const customData = new CustomData('customDataName', false, ...dataList);

  // -- Add custom data
  client.addData('my_visitor_code', customData);
}

init();
```

</TabItem>
</Tabs>

---

#### Device

:::note
Since JavaScript SDK `4.10.0`, `Device` is automatically detected based on the `User-Agent` string. However, you can still manually override it if needed.
:::

Device contains information about your device.

:::note
Each visitor can have only one `Device`. Adding a second `Device` overwrites the first one.
:::

| Name                    | Type         | Description                                                      |
| ----------------------- | ------------ | ---------------------------------------------------------------- |
| deviceType (_required_) | `DeviceType` | possible types for device type (`PHONE`, `TABLET`, `DESKTOP`) |

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient, DeviceType, Device } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Add device data
  const device = new Device(DeviceType.Desktop);
  client.addData('my_visitor_code', device);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, DeviceType, Device } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Add device data
  const device = new Device(DeviceType.Desktop);
  client.addData('my_visitor_code', device);
}

init();
```

</TabItem>
</Tabs>

---

#### OperatingSystem

:::note
Since JavaScript SDK `4.10.0`, `OperatingSystem` is automatically detected based on the `User-Agent` string. However, you can still manually override it if needed.
:::

`OperatingSystem` contains information about the operating system on the visitor's device.

:::note
Each visitor can only have one `OperatingSystem`. Adding a second `OperatingSystem` overwrites the first one.
:::

| Name                         | Type                  | Description                                                                                         |
| ---------------------------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| operatingSystem (_required_) | `OperatingSystemType` | possible types for device type: `WINDOWS_PHONE`, `WINDOWS`, `ANDROID`, `LINUX`, `MAC`, and `IOS` |

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonClient,
  OperatingSystem,
  OperatingSystemType,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Add operating system data
  const operatingSystem = new OperatingSystem(OperatingSystemType.Windows);
  client.addData('my_visitor_code', operatingSystem);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import {
  KameleoonClient,
  OperatingSystem,
  OperatingSystemType,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Add operating system data
  const operatingSystem = new OperatingSystem(OperatingSystemType.Windows);
  client.addData('my_visitor_code', operatingSystem);
}

init();
```

</TabItem>
</Tabs>

#### PageView

:::note
Since JavaScript SDK `4.10.0`, `PageView` is automatically detected based on the `window.location?.href` and `document.title`. However, you can still manually override it if needed.
:::

`PageView` contains information about your web page.

:::note
Each visitor can have one `PageView` per unique URL. Adding a second `PageView` with the same URL notifies the SDK that the visitor re-visited the page.
:::

`PageViewParametersType` pageViewParameters - an object with page view parameters described below

| Name                    | Type       | Description                                                                        |
| ----------------------- | ---------- | ---------------------------------------------------------------------------------- |
| urlAddress (_required_) | `string`   | url address of the page to track.                                                   |
| title (_required_)      | `string`   | title of the web page.                                                              |
| referrer (_optional_)   | `number[]` | an optional parameter containing a list of referrer indices, has no default value. |

:::note
You can find the index or [referrer](https://help.kameleoon.com/create-acquisition-channel) ID in your Kameleoon account. Note that this index starts at 0, meaning the first acquisition channel you create for a given site will be assigned 0 as its ID, not 1.
:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonClient,
  PageViewParametersType,
  PageView,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Define page view parameters
  const pageViewParameters: PageViewParametersType = {
    urlAddress: 'www.example.com',
    title: 'my example',
    referrers: [123, 456],
  };

  // -- Add page view data
  const pageView = new PageView(pageViewParameters);
  client.addData('my_visitor_code', pageView);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, PageView } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Define page view parameters
  const pageViewParameters = {
    urlAddress: 'www.example.com',
    title: 'my example',
    referrers: [123, 456],
  };

  // -- Add page view data
  const pageView = new PageView(pageViewParameters);
  client.addData('my_visitor_code', pageView);
}

init();
```

</TabItem>
</Tabs>

---

#### UserAgent

`UserAgent` lets you store information on the visitor's user-agent. Server-side experiments are more likely to be affected by bot traffic than client-side experiments. Kameleoon uses the IAB/ABC International Spiders and Bots List to tackle this issue and recognize known bots and spiders. Kameleoon also uses the `UserAgent` field to filter out bots and other unwanted traffic that might distort your conversion metrics. For more details, see our help article on [bot filtering](https://help.kameleoon.com/question/how-does-kameleoon-filter-bot-traffic-from-my-results/).

If you use internal bots, we suggest that you pass the value **curl/8.0** of the userAgent to exclude them from our analytics.

:::note
`Visitor` can only have one `UserAgent`. Adding a second `UserAgent` overwrites the first one.
:::

| Name               | Type     | Description               |
| ------------------ | -------- | ------------------------- |
| value (_required_) | `string` | value used for comparison |

:::caution
If you run Kameleoon in an hybrid mode, your server-side experiments are automatically protected against bot traffic. This protection occurs because Kameleoon collects the user-agent automatically on the front-end. Therefore, you don't need to pass the user-agent or any other parameter to filter bots and spiders.

If you use internal bots, we suggest that you pass the value **curl/8.0** of the userAgent to exclude them from our analytics.
:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient, UserAgent } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Add user agent data
  const userAgent = new UserAgent('my_unique_value');
  client.addData('my_visitor_code', userAgent);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, UserAgent } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Add user agent data
  const userAgent = new UserAgent('my_unique_value');
  client.addData('my_visitor_code', userAgent);
}

init();
```

</TabItem>
</Tabs>

#### ApplicationVersion

<ApplicationVersion sec="description" c={Context}/>

<ApplicationVersion sec="arguments" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient, ApplicationVersion } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Add application version
  const applicationVersion = new ApplicationVersion('1.2');
  client.addData('my_visitor_code', applicationVersion);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, ApplicationVersion } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Add application version
  const applicationVersion = new ApplicationVersion('1.2');
  client.addData('my_visitor_code', applicationVersion);
}

init();
```

</TabItem>
</Tabs>

---

### Returned Types

#### DataFile

<DataFile sec="description" c={Context}/>

<DataFile sec="arguments" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { FeatureFlag } from '@kameleoon/javascript-sdk';

const featureFlags: Map<string, FeatureFlag> = dataFile.featureFlags;
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
const featureFlags = dataFile.featureFlags;
```

</TabItem>
</Tabs>

#### FeatureFlag

<FeatureFlag sec="description_rules" c={Context}/>

<FeatureFlag sec="arguments_rules" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { Variation, Rule } from '@kameleoon/javascript-sdk';

// Check whether the feature flag is enabled in the current environment
const isEnvironmentEnabled: boolean = featureFlag.environmentEnabled;

// Retrieve the key of the default variation
const defaultVariationKey: string = featureFlag.defaultVariationKey;

// Retrieve all variations of the feature flag as a map (key = variation key, value = Variation object)
const variations: Map<string, Variation> = featureFlag.variations;

// Retrieve all targeting rules associated with the feature flag
const rules: Rule[] = featureFlag.rules;
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
// Check whether the feature flag is enabled in the current environment
const isEnvironmentEnabled = featureFlag.environmentEnabled;

// Retrieve the key of the default variation
const defaultVariationKey = featureFlag.defaultVariationKey;

// Retrieve all variations of the feature flag as a map (key = variation key, value = Variation object)
const variations = featureFlag.variations;

// Retrieve all targeting rules associated with the feature flag
const rules = featureFlag.rules;
```

</TabItem>
</Tabs>

#### Rule

<Rule sec="description" c={Context}/>

<Rule sec="arguments" c={Context}/>

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { Variation } from '@kameleoon/javascript-sdk';

// Retrieve all variations of the rule as a map (key = variation key, value = Variation object)
const variations: Map<string, Variation>  = rule.variations;
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
// Retrieve all variations of the rule as a map (key = variation key, value = Variation object)
const variations  = rule.variations;
```

</TabItem>
</Tabs>

#### Variation

`Variation` contains information about the assigned variation to the visitor (or the default variation, if no specific assignment exists).

| Name         | Type                    | Description                                                                                         |
| ------------ |-------------------------|-----------------------------------------------------------------------------------------------------|
| name         | `string`                | name of the variation.                                                                              |
| key          | `string`                | key of the variation.                                                                               |
| id           | `number` or `null`      | id of the variation or `null` if the visitor landed on the default variation.                       |
| experimentId | `number` or `null`      | id of the experiment or `null` if the visitor landed on the default variation.                      |
| variables    | `Map<string, Variable>` | map of variables for the variation, where key is the variable key and value is the variable object. |

:::note

- Ensure that your code handles the case where `id` or `experimentId` is `null`, indicating a default variation.
- The `variables` map might be empty if no variables are associated with the variation.

:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
// Retrieving the variation name
const variationName = variation.name;

// Retrieving the variation key
const variationKey = variation.key;

// Retrieving the variation id
const variationId = variation.id;

// Retrieving the experiment id
const experimentId = variation.experimentId;

// Retrieving the variables map
const variables = variation.variables;
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
// Retrieving the variation name
const variationName = variation.name;

// Retrieving the variation key
const variationKey = variation.key;

// Retrieving the variation id
const variationId = variation.id;

// Retrieving the experiment id
const experimentId = variation.experimentId;

// Retrieving the variables map
const variables = variation.variables;
```

</TabItem>
</Tabs>

#### Variable

`Variable` contains information about a variable associated with the assigned variation.

| Name  | Type     | Description                                                                                                                                |
|-------|----------|--------------------------------------------------------------------------------------------------------------------------------------------|
| key   | `string` | The unique key identifying the variable.                                                                                                   |
| type  | `string` | The type of the variable. Possible values: **BOOLEAN**, **NUMBER**, **STRING**, **JSON**, **JS**, **CSS**.                                 |
| value | `any`    | The value of the variable, which can be of the following types: **boolean**, **number**, **String**, **Record\<string, any\>**, **any[]**. |

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
// Retrieving the variables map
const variables = variation.variables;

// Variable type can be retrieved for further processing
const type = variables.get('isDiscount')?.type || '';

// Retrieving the variable value by key
const isDiscount = variables.get('isDiscount')?.value || false;

// Variable value can be of different types
const title = variables.get('title')?.value || '';
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
// Retrieving the variables map
const variables = variation.variables;

// Variable type can be retrieved for further processing
const type = variables.get('isDiscount')?.type || '';

// Retrieving the variable value by key
const isDiscount = variables.get('isDiscount')?.value || false;

// Variable value can be of different types
const title = variables.get('title')?.value || '';
```

</TabItem>
</Tabs>

### Deprecated methods

:::caution
These methods are deprecated and will be removed in the next major update.
:::

#### getFeatureFlagVariationKey()

- 📨 _Sends Tracking Data to Kameleoon_
- 🎯 _Events:_ [`EventType.Evaluation`](#events-1)

:::note
Use the [`getVariation`](#getvariation) method instead
:::

The `getFeatureFlagVariationKey()` method retrieves the variation key for a visitor identified by a `visitorCode`. This method includes a targeting check that identifies the appropriate variation exposed to the visitor, saves it to storage, and sends a tracking request.

:::note
When a user is not associated with a feature flag, the SDK randomly returns a variation key according to the feature flag rules. If the user has already been registered with the feature flag, the SDK will detect this association and return the user's previous variation key value. However, if the user does not meet any of the defined rules, the SDK will return the default value specified in Kameleoon's feature flag delivery rules. It's important to note that the default value can be a variation key, a boolean value, or another data type, depending on the feature flag's configuration.
:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient, CustomData } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Add CustomData with index `0` containing visitor id to check the targeting
  client.addData(new CustomData(0, 'visitor_id'));

  // -- Get visitor feature flag variation key
  const variationKey = client.getFeatureFlagVariationKey(
    visitorCode,
    'my_feature_key',
  );
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient, CustomData } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Add CustomData with index `0` containing visitor id to check the targeting
  client.addData(new CustomData(0, 'visitor_id'));

  // -- Get visitor feature flag variation key
  const variationKey = client.getFeatureFlagVariationKey(
    visitorCode,
    'my_feature_key',
  );
}

init();
```

</TabItem>
</Tabs>

##### Arguments

| Name                     | Type     | Description                                                              |
| ------------------------ | -------- | ------------------------------------------------------------------------ |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters length |
| featureKey (_required_)  | `string` | a unique key for feature flag                                            |

##### Return value

`string` a string containing variable key for the allocated feature flag variation for the provided visitor

##### Exceptions thrown

| Type                                                  | Description                                                            |
| ----------------------------------------------------- | ---------------------------------------------------------------------- |
| `KameleoonException.Initialization`                   | Method was executed before `initialize` was performed for `kameleoonClient`. |
| `KameleoonException.VisitorCodeMaxLength`             | The visitor code exceeded the maximum length.                           |
| `KameleoonException.VisitorCodeEmpty`                 | The visitor code is empty.                                              |
| `KameleoonException.FeatureFlagConfigurationNotFound` | No feature flag was found for provided `featureKey`.                    |
| `KameleoonException.FeatureFlagEnvironmentDisabled`   | Feature flag is disabled for the current environment.                   |

#### getVisitorFeatureFlags()

- 🚫 _Doesn't send Tracking Data to Kameleoon_
- 🎯 _Events:_ [`EventType.Evaluation`](#events-1) (for each feature flag)

:::note
Use the [`getVariations`](#getvariations) method instead.
:::

The `getVisitorFeatureFlags()` method returns a list of feature flags that target a visitor identified by their `visitorCode` and the feature flags that are active for the specified visitor.

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get active feature flags for visitor
  const featureFlags = client.getVisitorFeatureFlags(visitorCode);
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get active feature flags for visitor
  const featureFlags = client.getVisitorFeatureFlags(visitorCode);
}

init();
```

</TabItem>
</Tabs>

:::caution

This method only collects the visitor's _active_ feature flags, meaning the result excludes all feature flags for which the visitor is assigned the `off` (default or control) variation. When you need all of the visitor's feature flags, use `getFeatureFlags` instead.

For example:

```ts
// -- `getVisitorFeatureFlags` doesn't trigger feature experiments;
//    it only returns feature flags where visitor didn't get the `off` variation
client.getVisitorFeatureFlags('my_visitor').forEach(({ key }) => {
  // -- `getFeatureFlagVariationKey` triggers feature experiments,
  //    as `off` is already filtered out - you won't see a
  //    visitor taking part in experiment where the `off` variation was allocated.
  client.getFeatureFlagVariationKey('my_visitor', key);
});
```

For cases where you need all of the visitor's feature flags, use [`getFeatureFlags`](#getfeatureflags) instead:

```ts
// -- Both `off` and other variations are processed as expected
client.getFeatureFlags('my_visitor').forEach(({ key }) => {
  client.getFeatureFlagVariationKey('my_visitor', key);
});
```

:::

##### Arguments

| Name                     | Type     | Description                                                              |
| ------------------------ | -------- | ------------------------------------------------------------------------ |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters in length |

##### Return value

`FeatureFlagType[]` - list of feature flags. Each feature flag item contains `id` and `key`

##### Exceptions thrown

| Type                                      | Description                                                                       |
| ----------------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.Initialization`       | Method was executed before the `kameleoonClient` completed its `initialize` call. |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length (255 characters).                     |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty.                                                         |
| `KameleoonException.StorageRead`          | Error while reading storage data.                                                  |

---

#### getActiveFeatureFlags()

- 🚫 _Doesn't send Tracking Data to Kameleoon_
- 🎯 _Events:_ [`EventType.Evaluation`](#events-1) (for each feature flag)

:::note
Use the [`getVariations`](#getvariations) method instead.
:::

The `getActiveFeatureFlags()` method returns a `Map`, where key is featurekey and value is detailed information about the visitor's variation and it's variables

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get active feature flags for visitor
  //    with detailed variation and variables data
  const activeFeatures = client.getActiveFeatureFlags(visitorCode);

  // -- Result example:
  // Map {
  //   'feature-key-one' => {
  //     id: 100,
  //     key: 'variation-key-one',
  //     experimentId: 200,
  //     variables: [
  //      { key: 'variable_bool', type: VariableType.Boolean, value: true },
  //     ]
  //   },
  //   'feature-key-two' => {
  //     id: null, // -> `null` because it is default variation
  //     key: 'default-variation-key',
  //     experimentId: null, // -> `null` because it is default variation
  //     variables: []
  //   }
  // }
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get active feature flags for visitor
  //    with detailed variation and variables data
  const activeFeatures = client.getActiveFeatureFlags(visitorCode);

  // -- Result example:
  // Map {
  //   'feature-key-one' => {
  //     id: 100,
  //     key: 'variation-key-one',
  //     experimentId: 200,
  //     variables: [
  //      { key: 'variable_bool', type: VariableType.Boolean, value: true },
  //     ]
  //   },
  //   'feature-key-two' => {
  //     id: null, // -> `null` because it is default variation
  //     key: 'default-variation-key',
  //     experimentId: null, // -> `null` because it is default variation
  //     variables: []
  //   }
  // }
}

init();
```

</TabItem>
</Tabs>

:::caution

This method only collects the visitor's _active_ feature flags. This means the result excludes all the feature flags for which the visitor is assigned to the `off` (default or control) variation. When you need all of the visitor's feature flags to iterate, use `getFeatureFlags` instead.

See the [getVisitorFeatureFlags](#getvisitorfeatureflags) _CAUTION_ section method for more details.

:::

##### Arguments

| Name                     | Type     | Description                                                              |
| ------------------------ | -------- | ------------------------------------------------------------------------ |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters length |

##### Return value

`Map<string, KameleoonVariationType>` - a map of feature flags, where `key` is `featureKey` and `value` is detailed information about the visitor's variation and its variables.

##### Exceptions thrown

| Type                                      | Description                                                                       |
| ----------------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.Initialization`       | Method was executed before the `kameleoonClient` completed its `initialize` call. |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length (255 characters).                    |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty.                                                        |
| `KameleoonException.StorageRead`          | Error while reading storage data.                                                 |
| `KameleoonException.NumberParse`          | Couldn't parse Number value.                                                      |
| `KameleoonException.JSONParse`            | Couldn't parse JSON value.                                                        |

#### getFeatureFlagVariable()

- 📨 _Sends Tracking Data to Kameleoon_
- 🎯 _Events:_ [`EventType.Evaluation`](#events-1)

:::note
Use the [`getVariation`](#getvariation) method.
:::

The `getFeatureFlagVariable()` method returns a variable for a visitor identified by a `visitorCode`. This method includes a targeting check that identifies the appropriate variation exposed to the visitor, saves it to storage, and sends a tracking request.

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import {
  KameleoonClient,
  VariableType,
  JSONType,
} from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get feature variable
  const result = client.getFeatureFlagVariable({
    visitorCode,
    featureKey: 'my_feature_key'
    variableKey: 'my_variable_key'
  });

  // -- Infer the type of variable by its `type`
  switch (result.type) {
    case VariableType.BOOLEAN:
      const myBool: boolean = result.value;
      break;
    case VariableType.NUMBER:
      const myNum: number = result.value;
      break;
    case VariableType.JSON:
      const myJson: JSONType = result.value;
      break;
    case VariableType.STRING:
    case VariableType.JS:
    case VariableType.CSS:
      const myStr: string = result.value;
      break;
    default:
      break;
  }
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get feature variable
  const variableResult = client.getFeatureFlagVariable({
    visitorCode,
    featureKey: 'my_feature_key'
    variableKey: 'my_variable_key'
  });

  const { type, value } = variableResult;
}

init();
```

</TabItem>
</Tabs>

##### Arguments

Parameters object of type `GetFeatureFlagVariableParamsType` containing the following fields:

| Name                     | Type     | Description                                                                                                       |
| ------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------- |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters in length.                                          |
| featureKey (_required_)  | `string` | a unique key for feature flag.                                                                                     |
| variableKey (_required_) | `string` | key of the variable to be found for a feature flag with provided `featureKey`. Can be found in Kameleoon platform |

##### Return value

`FeatureFlagVariableType` - a variable object containing `type` and `value` fields. You can check the `type` field against `VariableType` enum. For example, if the `type` is `VariableType.BOOLEAN`, then `value` will be a `boolean` type.

##### Exceptions thrown

| Type                                                  | Description                                                                       |
| ----------------------------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.Initialization`                   | Method was executed before the `kameleoonClient` completed its `initialize` call. |
| `KameleoonException.VisitorCodeMaxLength`             | The visitor code exceeded the maximum length (255 characters).                     |
| `KameleoonException.VisitorCodeEmpty`                 | The visitor code is empty.                                                         |
| `KameleoonException.FeatureFlagConfigurationNotFound` | No feature flag was found for provided `featureKey`.                               |
| `KameleoonException.FeatureFlagVariableNotFound`      | No feature variable was found for provided `visitorCode` and `variableKey`.        |
| `KameleoonException.FeatureFlagEnvironmentDisabled`   | Feature flag is disabled for the current environment.                              |
| `KameleoonException.JSONParse`                        | Couldn't parse JSON value.                                                         |
| `KameleoonException.NumberParse`                      | Couldn't parse Number value.                                                       |

#### getFeatureFlagVariables()

- 📨 _Sends Tracking Data to Kameleoon_
- 🎯 _Events:_ [`EventType.Evaluation`](#events-1) (for each feature flag)

:::note
Use the [`getVariation`](#getvariation) method.
:::

The `getFeatureFlagVariables()` method returns a variable for a visitor identified by a `visitorCode`. This method includes a targeting check that identifies the appropriate variation exposed to the visitor, saves it to storage, and sends a tracking request.

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init(): Promise<void> {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get a list of variables for the visitor under `visitorCode` in the feature flag
  const variables = client.getFeatureFlagVariables(
    visitorCode,
    'my_feature_key',
  );
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({
  siteCode: 'my_site_code',
  configuration: { cookieDomain: '.example.com' },
});

async function init() {
  await client.initialize();

  // -- Get visitor code
  const visitorCode = client.getVisitorCode();

  // -- Get a list of variables for the visitor under `visitorCode` in the feature flag
  const variables = client.getFeatureFlagVariables(
    visitorCode,
    'my_feature_key',
  );
}

init();
```

</TabItem>
</Tabs>

##### Arguments

| Name                     | Type     | Description                                                              |
| ------------------------ | -------- | ------------------------------------------------------------------------ |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters. |
| featureKey (_required_)  | `string` | a unique key for feature flag.                                            |

##### Return value

`FeatureVariableResultType[]` - a list of variable objects containing `key`, `type` and `value` fields. You can check the `type` field against `VariableType` enum. For example, if the `type` is `VariableType.BOOLEAN`, then `value` will be a `boolean` type.

##### Exceptions thrown

| Type                                                  | Description                                                                       |
| ----------------------------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.Initialization`                   | Method was executed before the `kameleoonClient` completed its `initialize` call. |
| `KameleoonException.VisitorCodeMaxLength`             | The visitor code exceeded the maximum length (255 characters).                     |
| `KameleoonException.VisitorCodeEmpty`                 | The visitor code is empty.                                                         |
| `KameleoonException.FeatureFlagConfigurationNotFound` | No feature flag was found for provided `featureKey`.                               |
| `KameleoonException.FeatureFlagVariationNotFound`     | No feature variation was found for provided `visitorCode` and `variationKey`.      |
| `KameleoonException.FeatureFlagEnvironmentDisabled`   | Feature flag is disabled for the current environment.                              |
| `KameleoonException.JSONParse`                        | Couldn't parse JSON value.                                                         |
| `KameleoonException.NumberParse`                      | Couldn't parse Number value.                                                       |

#### onConfigurationUpdate()

:::note
Use the `onEvent` method with `EventType.ConfigurationUpdate` instead.
:::

The `onConfigurationUpdate()` method fires a callback on client configuration update.

:::note
This method is applicable only for server-sent events used in real-time updates.
:::

<Tabs>
<TabItem value="ts" label="TypeScript" default>

```ts
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init(): Promise<void> {
  await client.initialize();

  // -- Define logic to be executed on client configuration update
  client.onConfigurationUpdate(() => {
    // -- My Logic
  });
}

init();
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
import { KameleoonClient } from '@kameleoon/javascript-sdk';

const client = new KameleoonClient({ siteCode: 'my_site_code' });

async function init() {
  await client.initialize();

  // -- Define logic to be executed on client configuration update
  client.onConfigurationUpdate(() => {
    // -- My Logic
  });
}

init();
```

</TabItem>
</Tabs>

##### Arguments

| Name                  | Type         | Description                                                                        |
| --------------------- | ------------ | ---------------------------------------------------------------------------------- |
| callback (_required_) | `() => void` | callback function with no parameters that will be called upon configuration update. |

##### Exceptions thrown

| Type                                | Description                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.Initialization` | Method was executed before the `kameleoonClient` completed its `initialize` call. |
