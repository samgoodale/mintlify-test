---
title: 'React SDK'
---

With the Kameleoon React SDK, you can run feature experiments and activate feature flags on your front-end web and mobile application. Integrating our SDK into your web and mobile application is easy, and its footprint (memory and network usage) is low.

**Getting started**: For help getting started, see the [developer guide](#developer-guide)

**Changelog**: Details on the latest version of the React SDK can be found in the [changelog](https://github.com/Kameleoon/client-react/blob/main/CHANGELOG.md).

**SDK methods**: For the full reference documentation of the React SDK, see the [reference](#reference) section.

**Requirements**: React SDK requires `React 16.8.0+`

## Developer guide

Follow this section to integrate the SDK into your application and learn more about using the SDK.

### Getting started

This section walks you through installing and configurating the SDK for the first time.

#### Installation

The Kameleoon SDK Installation tool is the preferred way to install the SDK. This **SDK Installer** helps you to install the SDK of your choice, generate a basic code sample, and configure [external dependencies](#external-dependencies) if needed.

To start the SDK Installation tool, install and run it globally:

```bash
npm install --global @kameleoon/sdk-installer
kameleoon-sdk
```

Or run it directly with `npx`:

```bash
npx @kameleoon/sdk-installer
```

#### Create the Kameleoon Client

To get started to create an entry point for React SDK by creating Kameleoon Client on the top level of your application. Create an instance of `KameleoonClient` using the `createClient()` function, imported from the `kameleoon` package.

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  createClient,
  Environment,
  SDKConfigurationType,
} from '@kameleoon/react-sdk';

// -- Optional configuration
const configuration: Partial<SDKConfigurationType> = {
  updateInterval: 60,
  environment: Environment.Production,
  cookieDomain: '.example.com',
};

const client = createClient({ siteCode: 'my_site_code', configuration });
```

</Tab>
<Tab title="JavaScript">

```jsx

// -- Optional configuration
const configuration = {
  updateInterval: 60,
  environment: Environment.Production,
  cookieDomain: '.example.com',
};

const client = createClient({ siteCode: 'my_site_code', configuration });
```

</Tab>
</Tabs>

#### Wrap the application in the Kameleoon Provider

The second step is connecting the previously created Kameleoon Client to `KameleoonProvider` by passing the configured client to `KameleoonProvider`:

<Tabs>
<Tab title="TS">

```tsx
import {
  createClient,
  Environment,
  KameleoonProvider,
} from '@kameleoon/react-sdk';

const client = createClient({
  siteCode: 'my_site_code',
  configuration: {
    updateInterval: 60,
    environment: Environment.Production,
  },
});

function AppWrapper(): JSX.Element {
  return (
    <KameleoonProvider client={client}>
      <App />
    </KameleoonProvider>
  );
}
```

</Tab>
<Tab title="JS">

```jsx
import {
  createClient,
  Environment,
  KameleoonProvider,
} from '@kameleoon/react-sdk';

const client = createClient({
  siteCode: 'my_site_code',
  configuration: {
    updateInterval: 60,
    environment: Environment.Production,
  },
});

function AppWrapper() {
  return (
    <KameleoonProvider client={client}>
      <App />
    </KameleoonProvider>
  );
}
```

</Tab>
<Tab title="NextJS (TS)">

<Warning>
If you are using **Next.js** for server-side rendering (SSR), you **have to** use `KameleoonProviderSSR` or `KameleoonProvider` with `stubMode=true`.
This prevents the SDK client from being initialized on the server and ensures that the React SDK runs exclusively on the client side.
</Warning>

```tsx
import {
  createClient,
  Environment,
  KameleoonProviderSSR,
} from '@kameleoon/react-sdk';

function AppWrapper(): JSX.Element {
  return (
    <KameleoonProviderSSR sdkParameters={{
      siteCode: 'my_site_code',
      configuration: {
        updateInterval: 60,
        environment: Environment.Production,
      }
    }}>
      <App />
    </KameleoonProviderSSR>
  );
}
```

</Tab>
<Tab title="NextJS (JS)">

<Warning>
If you are using **Next.js** for server-side rendering (SSR), you **have to** use `KameleoonProviderSSR` or `KameleoonProvider` with `stubMode=true`.
This prevents the SDK client from being initialized on the server and ensures that the React SDK runs exclusively on the client side.
</Warning>

```jsx
import {
  createClient,
  Environment,
  KameleoonProviderSSR,
} from '@kameleoon/react-sdk';

function AppWrapper() {
  return (
    <KameleoonProviderSSR sdkParameters={{
      siteCode: 'my_site_code',
      configuration: {
        updateInterval: 60,
        environment: Environment.Production,
      }
    }}>
      <App />
    </KameleoonProviderSSR>
  );
}
```

</Tab>
<Tab title="NextJS with externals(TS)">

<Warning>
If you are using **Next.js** for server-side rendering (SSR), you **have to** use `KameleoonProviderSSR` or `KameleoonProvider` with `stubMode=true`.
This prevents the SDK client from being initialized on the server and ensures that the React SDK runs exclusively on the client side.
</Warning>

```tsx
import {
  createClient,
  Environment,
  KameleoonProvider,
} from '@kameleoon/react-sdk';

// Checks if the code is running on the server (Node.js) and not in the browser.
// This can be replaced with any other mechanism you use to detect server-side execution.
const isServer = typeof window === 'undefined';

const client = createClient({
  siteCode: 'my_site_code',
  configuration: {
    updateInterval: 60,
    environment: Environment.Production,
  },
  externals: {
    // Add your external dependencies here, e.g. storage, eventSource, visitorCodeManager, etc.
  },
  stubMode: isServer,
});

function AppWrapper(): JSX.Element {
  return (
    <KameleoonProvider client={client}>
      <App />
    </KameleoonProvider>
  );
}
```

</Tab>
<Tab title="NextJS with externals(JS)">

<Warning>
If you are using **Next.js** for server-side rendering (SSR), you **have to** use `KameleoonProviderSSR` or `KameleoonProvider` with `stubMode=true`.
This prevents the SDK client from being initialized on the server and ensures that the React SDK runs exclusively on the client side.
</Warning>

```jsx
import {
  createClient,
  Environment,
  KameleoonProvider,
} from '@kameleoon/react-sdk';

// Checks if the code is running on the server (Node.js) and not in the browser.
// This can be replaced with any other mechanism you use to detect server-side execution.
const isServer = typeof window === 'undefined';

const client = createClient({
  siteCode: 'my_site_code',
  configuration: {
    updateInterval: 60,
    environment: Environment.Production,
  },
  externals: {
    // Add your external dependencies here, e.g. storage, eventSource, visitorCodeManager, etc.
  },
  stubMode: isServer,
});

function AppWrapper() {
  return (
    <KameleoonProvider client={client}>
      <App />
    </KameleoonProvider>
  );
}
```

</Tab>
</Tabs>

##### KameleoonProvider

Use this provider on root level by wrapping your app to gain an access to `KameleoonClient`. This ensures your app does not flicker due to flag changes at startup time.

###### Props

| Name                  | Type              | Description                                            |
| --------------------- | ----------------- | ------------------------------------------------------ |
| children (_required_) | `ReactNode`       | child elements of the provider                         |
| client (_required_)   | `KameleoonClient` | `KameleoonClient` instance created by `createClient()` |

##### KameleoonProviderSSR

Use this provider on root level by wrapping your app to gain an access to `KameleoonClient`.
`KameleoonProviderSSR` differs from `KameleoonProvider` in that it creates a `KameleoonClient` instance inside the context on the first client request. This prevents the risk of creating the client on the server side. It is recommended for use in SSR-based systems, such as Next.js with SSR.

###### Props

| Name                       | Type            | Description                                                            |
|----------------------------|-----------------|------------------------------------------------------------------------|
| children (_required_)      | `ReactNode`     | child elements of the provider                                         |
| sdkParameters (_required_) | `SDKParameters` | `SDKParameters` settings for creating an instance of `KameleoonClient` |

#### Await for the client initialization

`KameleoonClient` initialization is done asynchronously in order to make sure that Kameleoon API call was successful for that hook `useInitialize` is used. You can use `async/await`, `Promise.then()` or any other method to handle asynchronous client initialization.

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();

  // -- Waiting for the client initialization using `async/await`

  const init = useCallback(async (): Promise<void> => {
    await initialize();
  }, [initialize]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();

  // -- Waiting for the client initialization using `async/await`

  const init = useCallback(async () => {
    await initialize();
  }, [initialize]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

#### Activating a feature flag

##### Assigning a unique ID to a user

##### Retrieving a flag configuration

##### Adding data points to target a user or filter / breakdown visits in reports

##### Tracking goal conversions

##### Sending events to analytics solutions

### React Native considerations

<Note>
React Native on `android` platform doesn't support `Real Time Update` feature.
</Note>

While React SDK works the same way in both React Native and React contexts, it's important to note that setup steps differ.
Due to the lack of browser API in React Native, React SDK has to have different [external dependency](#external-dependencies) implementations to work correctly.
For that, Kameleoon provides several dedicated npm packages that you can install and set up manually or install using [Kameleoon SDK Installation Tool](#installation) (recommended).

The packages include:

- `@kameleoon/react-native-storage` - built using `react-native-mmkv` library
- `@kameleoon/react-native-event-source` - built using `react-native-event-source-ts` library
- `@kameleoon/react-native-visitor-code-manager` - built on top of `react-native-mmkv` library
- `@kameleoon/react-native-platform-analyzer` - built using `react-native` library
- _optional_ `@kameleoon/react-native-secure-prng` - built using `react-native-get-random-values` library

If you don't want to use the listed packages, you can provide your own implementation following [the external dependencies guide](#external-dependencies).

Example React SDK setup for React Native application:

<Tabs>
<Tab title="TypeScript">

```ts

// --- Create KameleoonClient ---
const client = createClient({
  siteCode: 'my_site_code',
  externals: {
    storage: new KameleoonStorage(),
    eventSource: new KameleoonEventSource(),
    visitorCodeManager: new KameleoonVisitorCodeManager(),
    platformAnalyzer: new KameleoonPlatformAnalyzer(),
    // -- Optional --
    prng: new KameleoonSecurePRNG(),
  },
});
```

</Tab>
<Tab title="JavaScript">

```js

// --- Create KameleoonClient ---
const client = createClient({
  siteCode: 'my_site_code',
  externals: {
    storage: new KameleoonStorage(),
    eventSource: new KameleoonEventSource(),
    visitorCodeManager: new KameleoonVisitorCodeManager(),
    platformAnalyzer: new KameleoonPlatformAnalyzer(),
    // -- Optional --
    prng: new KameleoonSecurePRNG(),
  },
});
```

</Tab>
</Tabs>

### Using a custom bucketing key

#### Use cases

#### Technical details

```jsx
addData(visitorCode, new CustomData(index, 'newVisitorCode'));
```

<Tip>
[More information in addData()](#adddata)
</Tip>

#### Technical requirementes

### Targeting conditions

The Kameleoon SDKs support a variety of predefined targeting conditions that you can use to target users in your campaigns.
For the list of conditions supported by this SDK, see [use visit history to target users](/feature-management-and-experimentation/using-visit-history-in-feature-flags-and-experiments).

You can also use your own [external data to target users](/feature-management-and-experimentation/use-external-data-to-target-users).

### Logging

#### Log levels

<Tabs>
<Tab title="TypeScript">

```ts

const client = createClient({ siteCode: 'my_site_code', configuration });

// The `NONE` log level does not allow logging.
client.setLogLevel(LogLevel.NONE);
// Or use KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.NONE);

// The `ERROR` log level only allows logging issues that may affect the SDK's main behaviour.
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

</Tab>
<Tab title="JavaScript">

```js

const client = createClient({ siteCode: 'my_site_code', configuration });

// The `NONE` log level allows no logging.
client.setLogLevel(LogLevel.NONE);
// Or use KameleoonLogger
KameleoonLogger.setLogLevel(LogLevel.NONE);

// The `ERROR` log level only allows logging issues that may affect the SDK's main behaviour.
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

</Tab>
</Tabs>

#### Custom handling of logs

<Tabs>
<Tab title="TypeScript">

```ts

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

const client = createClient({
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

</Tab>
<Tab title="JavaScript">

```js

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

const client = createClient({
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

</Tab>
</Tabs>

### Domain information

You provide a domain as the `domain` in `KameleoonClient` [configuration], which is used for storing Kameleoon visitor code in cookies. This is important when working with the [`getVisitorCode`](#getvisitorcode) and [`setLegalConsent`](#setlegalconsent) methods. The domain you provide is stored in the cookie as the `Domain=` key.

#### Setting the domain

The domain you provide indicates the URL address can use the cookie. For example, if your domain is `www.example.com`. the cookie is only available from a `www.example.com` URL. That means that pages with the `app.example.com` domain can't use the cookie.

To be more flexible around subdomains, you can prefix a domain with `.`. For example, the domain `.example.com` allows the cookie to function on both `app.example.com` and `login.example.com`.

<Note>
You can't use regular expressions, special symbols, protocol, or port numbers in the `domain`.
Additionally, a [specific list of subdomains](https://publicsuffix.org/list/public_suffix_list.dat) are not allowed to be used with the prefix `.`.
</Note>

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

`localhost` is always considered a bad domain, making it hard to test the domain when developing on localhost.

There are two ways to avoid this issue:

- Don't specify the `domain` field in the SDK client while testing. This prevents `localhost` issues (the cookie will be set on any domain).
- Create a local domain for `localhost`. For example:
  - Navigate to `/etc/hosts` on _Linux_ or to `c:\Windows\System32\Drivers\etc\hosts` on _Windows_
  - Open `hosts` with file super user or administrator rights
  - Add a domain to the localhost port, for example: `127.0.0.1 app.com`
  - Now you can run your app locally on `app.com:{my_port}` and specify `.app.com` as your domain

### External dependencies

SDK external dependencies use the _dependency injection_ pattern to give you the ability to provide your own implementations for certain parts of an SDK.

<Note>
In the React SDK, all external dependencies have default implementations, which use a native browser API so there's no need to provide them unless another API is required for specific use cases.
</Note>

Here's the list of available external dependencies:

| Dependency                        | Interface                     | API Used                                          | Description                                                                                                                                                                                          |
|-----------------------------------|-------------------------------|---------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `storage` (_optional_)            | `IExternalStorage`            | Browser `localStorage`                            | Used for storing all the existing and collected SDK data                                                                                                                                             |
| `requester` (_optional_)          | `IExternalRequester`          | Browser `fetch`                                   | Used for performing all the network requests                                                                                                                                                         |
| `eventSource` (_optional_)        | `IExternalEventSource`        | Browser `EventSource`                             | Used for receiving Server Sent Events for [Real Time Update](https://developers.kameleoon.com/feature-management-and-experimentation/technical-considerations#streaming-premium-option) capabilities |
| `visitorCodeManager` (_optional_) | `IExternalVisitorCodeManager` | Browser cookie                                    | Used for storing and synchronizing visitor code                                                                                                                                                      |
| `prng` (_optional_)               | `IExternalPRNG`               | `Math.random` or Browser `crypto.getRandomValues` | Used to generate unique IDs for tracking events                                                                                                                                                      |
| `logger` (_optional_)             | `ILogger`                     | Custom implementation                             | Used for custom handling of logs from the SDK. Allows to define how logs are processed and where they are output.                                                                                    |
| `platformAnalyzer` (_optional_)   | `IPlatformAnalyzer`           | React Native API                                  | Automatically detects the platform and attaches this information to the visitor data. Designed specifically for React Native.                                                                        |

The following example implements external dependencies. To import an interface from an SDK, create a class that implements it and pass the instantiated class to the SDK.

#### Storage

<Tabs>
<Tab title="TypeScript">

```ts

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
const client = createClient({
  siteCode: 'my_site_code',
  externals: {
    storage: new MyStorage(),
  },
});
```

</Tab>
<Tab title="JavaScript">

```js

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
const client = createClient({
  siteCode: 'my_site_code',
  externals: {
    storage: new MyStorage(),
  },
});
```

</Tab>
</Tabs>

#### EventSource

<Tabs>
<Tab title="TypeScript">

```ts
import {
  IExternalEventSource,
  EventSourceOpenParametersType,
} from '@kameleoon/react-sdk';

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
const client = createClient({
  siteCode: 'my_site_code',
  externals: {
    eventSource: new MyEventSource(),
  },
});
```

</Tab>
<Tab title="JavaScript">

```js
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
const client = createClient({
  siteCode: 'my_site_code',
  externals: {
    eventSource: new MyEventSource(),
  },
});
```

</Tab>
</Tabs>

#### VisitorCodeManager

<Tabs>
<Tab title="TypeScript">

```ts
import {
  IExternalVisitorCodeManager,
  SetDataParametersType,
  KameleoonUtils,
} from '@kameleoon/react-sdk';

// --- External Visitor Code Manager implementation ---
// - Example uses browser `document.cookie` API
class MyVisitorCodeManager implements IExternalVisitorCodeManager {
  public getData(key: string): string | null {
    const cookieString = document.cookie;

    // - Return `null` if no cookie was found
    if (!cookieString) {
      return null;
    }

    // - Parse cookie using provided `key`
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
const client = createClient({
  siteCode: 'my_site_code',
  externals: {
    visitorCodeManager: new MyVisitorCodeManager(),
  },
});
```

</Tab>
<Tab title="JavaScript">

```js

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
const client = createClient({
  siteCode: 'my_site_code',
  externals: {
    visitorCodeManager: new MyVisitorCodeManager(),
  },
});
```

</Tab>
</Tabs>

#### Requester

<Tabs>
<Tab title="TypeScript">

```ts
import {
  RequestType,
  IExternalRequester,
  KameleoonResponseType,
  SendRequestParametersType,
} from '@kameleoon/react-sdk';

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
const client = createClient({
  siteCode: 'my_site_code',
  externals: {
    requester: new MyRequester(),
  },
});
```

</Tab>
<Tab title="JavaScript">

```js

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

</Tab>
</Tabs>

<Tip>
[Return mocked result](#simulatesuccessrequest)
</Tip>

#### Pseudo Random Number Generator

Pseudo Random Number Generator (PRNG) is a dependency that generates random floating point number between `0` and `1` (similar to `Math.random`).

Default Kameleoon implementation relies on Browser's `crypto` or `Math.random` function if `crypto` is not available.
Those API are very secure and reliable, however in some edge cases (especially in some `React Native` engines) you might want to provide your own implementation or use a dedicated Kameleoon package for React Native - `@kameleoon/react-native-secure-prng`

<Tabs>
<Tab title="TypeScript">

```ts

// --- External Pseudo Random Number Generator (PRNG) implementation ---
class MyPRNG implements IExternalPRNG {
  public getRandomNumber(): number {
    // Return a random floating point number between `0` and `1`, like `Math.random()` does.
    return Math.random();
  }
}

// --- Create KameleoonClient ---
const client = createClient({
  siteCode: 'my_site_code',
  externals: {
    prng: new MyPRNG(),
  },
});
```

</Tab>
<Tab title="JavaScript">

```js
// --- External Pseudo Random Number Generator (PRNG) implementation ---
class MyPRNG {
  getRandomNumber() {
    // Return a random floating point number between `0` and `1`, like `Math.random()` does.
    return Math.random();
  }
}

// --- Create KameleoonClient ---
const client = createClient({
  siteCode: 'my_site_code',
  externals: {
    prng: new MyPRNG(),
  },
});
```

</Tab>
</Tabs>

#### Logger

<Tabs>
<Tab title="TypeScript">

```ts

// --- Custom Logger Implementation
export class CustomLogger implements IExternalLogger {
  public log(level: LogLevel, message: string): void {
    // Custom log handling logic here.
  }
}

// --- Create KameleoonClient ---
const client = createClient({
  siteCode: 'my_site_code',
  externals: {
    logger: new CustomLogger(),
  },
});
```

</Tab>
<Tab title="JavaScript">

```js

// --- Custom Logger Implementation
export class CustomLogger {
  log(level, message) {
    // Custom log handling logic here.
  }
}

// --- Create KameleoonClient ---
const client = createClient({
  siteCode: 'my_site_code',
  externals: {
    logger: new CustomLogger(),
  },
});
```

</Tab>
</Tabs>

### Error Handling

Almost every React SDK callback which is returned by hooks may throw an error at some point, these errors are not just caveats but rather deliberately predefined `KameleoonError`s
that extend native JavaScript `Error` class providing useful messages and special `type` field with a type `KameleoonException`.

`KameleoonException` is an enum containing all possible error types.

To know exactly what type of `KameleoonException` the callbacks may throw, you can check `Throws` section of the hooks description on this page or just hover over the callback in your IDE to see jsdocs description.

Overall handling the errors considered a good practice to make your application more stable and avoid technical issues.

---

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useVisitorCode,
  useData,
  CustomData,
  KameleoonError,
  KameleoonException,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { addData } = useData();

  const init = useCallback(async (): Promise<void> => {
    try {
      await initialize();

      // -- Get visitor code
      const visitorCode = getVisitorCode();

      const customData = new CustomData(0, 'my_data');
      addData(visitorCode, customData);
    } catch (error) {
      // -- Type guard for inferring error type, as native JavaScript `catch`
      //    only infers `unknown`.
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
  }, [initialize, addData, visitorCode, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useVisitorCode,
  useData,
  CustomData,
  KameleoonException,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { addData } = useData();

  const init = useCallback(async () => {
    try {
      await initialize();

      // -- Get visitor code
      const visitorCode = getVisitorCode();

      const customData = new CustomData(0, 'my_data');
      addData(visitorCode, customData);
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
  }, [initialize, addData, visitorCode, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

### Cross-device experimentation

#### Synchronizing custom data across devices

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { addData, flush } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Custom Data with index `0` was set to `Visitor` scope
    //    in Kameleoon.
    const customDataIndex = 0;
    const customData = new CustomData(customDataIndex, 'my_data');

    addData('my_visitor', customData);
    flush();
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getRemoteVisitorData } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Before working with data, call `getRemoteVisitorData`.
    await getRemoteVisitorData({ visitorCode: 'my_visitor_code' });

    // -- New SDK code will have access to CustomData with `Visitor` scope
    //    defined on Device One.
    //    So, "my_data" is now available to target and track "my_visitor".
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();
  const { addData, flush } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Custom Data with index `0` was set to `Visitor` scope
    //    in Kameleoon.
    const customDataIndex = 0;
    const customData = new CustomData(customDataIndex, 'my_data');

    addData('my_visitor', customData);
    flush();
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

```jsx

function MyComponent() {
  const { initialize } = useInitialize();
  const { getRemoteVisitorData } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Before working with data, call `getRemoteVisitorData`.
    await getRemoteVisitorData({ visitorCode: 'my_visitor_code' });

    // -- New SDK code will have access to CustomData with `Visitor` scope
    //    defined on Device One.
    //    So, "my_data" is now available to target and track "my_visitor".
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

#### Using custom data for session merging

<Tabs>
<Tab title="SDK Version 9">

[Cross-device experimentation](https://developers.kameleoon.com/core-concepts/cross-device-experimentation) allows you to combine a visitor's history across each of their devices (history reconciliation). One of the powerful features that history reconciliation provides is the ability to merge different visitors sessions into one. To reconcile visit history, you can use [`CustomData`](#customdata) to provide a unique identifier for the visitor.

Follow the [activating cross-device history reconciliation](https://developers.kameleoon.com/core-concepts/cross-device-experimentation#activating-cross-device-history-reconciliation) guide to set up your custom data on the Kameleoon platform

When your custom data is set up, you can use it in your code to merge a visitor's session.
Sessions with the same identifier will always see the same experiment variation and will be displayed as a single visitor in the `Visitor` view of your experiment's result pages.

The configuration SDK ensures that associated sessions always see the same variation of the experiment.

Afterwards, you can use the SDK normally. The following methods might be helpful in the context of session merging:

- Use [`getRemoteVisitorData`](#getremotevisitordata) with `isUniqueIdentifier=true` to retrieve data for all linked visitors
- Use [`trackConversion`](#trackconversion) or [`flush`](#flush) with `isUniqueIdentifier=true` to track some data for specific visitor that is associated with another visitor

<Tip>
As the custom data you use as the identifier must be set to `Visitor` scope, you need to use [cross-device custom data synchronization](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/nodejs-sdk/#synchronizing-custom-data-across-devices) to retrieve the identifier with the [`getRemoteVisitorData`](#getremotevisitordata) method on each device.
</Tip>

Here's an example of how to use custom data for session merging. In this example, we have an application with a login page. Since we don't know the user ID at the moment of login, we use an anonymous visitor identifier generated by the [`getVisitorCode`](#getvisitorcode) method. After the user logs in, we can associate the anonymous visitor with the user ID and use it as a unique identifier for the visitor.

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
  CustomData,
} from '@kameleoon/react-sdk';

function LoginPage(): JSX.Element {
  const [visitorCode, setVisitorCode] = useState<string | null>(null);

  const { initialize } = useInitialize();
  const { getVariation } = useFeatureFlag();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    const anonymousVisitor = getVisitorCode();
    // -- Saving `visitorCode` in the state to re-use it later.
    setVisitorCode(anonymousVisitor);

    // -- Getting a variation, assume it's variation `A`
    const variation = getVariation({
      visitorCode: anonymousVisitor,
      featureKey: 'my_feature_key',
    });
  }, [initialize, getVariation, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

```tsx
import {
  useData,
  useFeatureFlag,
  useVisitorCode,
  CustomData,
} from '@kameleoon/react-sdk';

type Props = {
  anonymousVisitor: string;
};

function ApplicationPage(props: Props): JSX.Element {
  const { addData, trackConversion, getRemoteVisitorData } = useData();
  const { getVariation } = useFeatureFlag();

  const init = useCallback(async (): Promise<void> => {
    // -- At this point anonymous visitor has logged in,
    //    and we have a user ID to use as a visitor identifier
    // -- Associating both visitors with an identifier Custom Data,
    //    where index `1` is the Custom Data's index, configured
    //    as a unique identifier in Kameleoon.
    const userIdentifierData = new CustomData(1, 'my_user_id');
    // -- Let's assume the anonymous visitor identifier
    //    was passed as a prop.
    addData(props.anonymousVisitor, userIdentifierData);

    // -- Retrieving the variation for the user ID ensures
    //    consistency with the anonymous visitor's variation.
    //    Both the anonymous visitor and the user ID will be
    //    assigned variation `A`.
    const variation = getVariation({
      visitorCode: 'my_user_id',
      featureKey: 'my_feature_key',
    });

    // -- `my_user_id` and `anonymousVisitor` are now linked.
    //    They can be tracked as a single visitor.
    trackConversion({
      visitorCode: 'my_user_id',
      goalId: 123,
      revenue: 100,
      // -- Informing the SDK that the visitor is a unique identifier
      isUniqueIdentifier: true,
    });

    // -- Additionally, linked visitors share previously
    //    collected remote data.
    const data = await getRemoteVisitorData({
      visitorCode: 'my_user_id',
      // -- Informing the SDK that the visitor is a unique identifier.
      isUniqueIdentifier: true,
    });
  }, [
    getRemoteVisitorData,
    trackConversion,
    addData,
    getVariation,
  ]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
  CustomData,
} from '@kameleoon/react-sdk';

function LoginPage() {
  const [visitorCode, setVisitorCode] = useState(null);

  const { initialize } = useInitialize();
  const { getVariation } = useFeatureFlag();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async () => {
    await initialize();

    const anonymousVisitor = getVisitorCode();
    // -- Saving `visitorCode` in the state to re-use it later.
    setVisitorCode(anonymousVisitor);

    // -- Getting a variation, assume it's variation `A`
    const variation = getVariation({
      visitorCode: anonymousVisitor,
      featureKey: 'my_feature_key',
    });
  }, [initialize, getVariation, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

```jsx
import {
  useData,
  useFeatureFlag,
  useVisitorCode,
  CustomData,
} from '@kameleoon/react-sdk';

function ApplicationPage(props) {
  const { addData, trackConversion, getRemoteVisitorData } = useData();
  const { getVariation } = useFeatureFlag();

  const init = useCallback(async () => {
    // -- At this point anonymous visitor has logged in,
    //    and we have a user ID to use as a visitor identifier
    // -- Associating both visitors with an identifier Custom Data,
    //    where index `1` is the Custom Data's index, configured
    //    as a unique identifier in Kameleoon.
    const userIdentifierData = new CustomData(1, 'my_user_id');
    // -- Let's assume the anonymous visitor identifier
    //    was passed as a prop.
    addData(props.anonymousVisitor, userIdentifierData);

    // -- Retrieving the variation for the user ID ensures
    //    consistency with the anonymous visitor's variation.
    //    Both the anonymous visitor and the user ID will be
    //    assigned variation `A`.
    const variation = getVariation({
      visitorCode: 'my_user_id',
      featureKey: 'my_feature_key',
    });

    // -- `my_user_id` and `anonymousVisitor` are now linked.
    //    They can be tracked as a single visitor.
    trackConversion({
      visitorCode: 'my_user_id',
      goalId: 123,
      revenue: 100,
      // -- Informing the SDK that the visitor is a unique identifier.
      isUniqueIdentifier: true,
    });

    // -- Additionally, linked visitors share previously
    //    collected remote data.
    const data = await getRemoteVisitorData({
      visitorCode: 'my_user_id',
      // -- Informing the SDK know the visitor is a unique identifier.
      isUniqueIdentifier: true,
    });
  }, [
    getRemoteVisitorData,
    trackConversion,
    addData,
    getVariation,
  ]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

</Tab>

<Tab title="SDK Version 10">

[Cross-device experimentation](https://developers.kameleoon.com/core-concepts/cross-device-experimentation) allows you to combine a visitor's history across each of their devices (history reconciliation). One of the powerful features that history reconciliation provides is the ability to merge different visitors sessions into one. To reconcile visit history, you can use [`CustomData`](#customdata) to provide a unique identifier for the visitor.

Follow the [activating cross-device history reconciliation](https://developers.kameleoon.com/core-concepts/cross-device-experimentation#activating-cross-device-history-reconciliation) guide to set up your custom data on the Kameleoon platform

When your custom data is set up, you can use it in your code to merge a visitor's session.
Sessions with the same identifier will always see the same experiment variation and will be displayed as a single visitor in the `Visitor` view of your experiment's result pages.

The SDK configuration ensures that associated sessions always see the same variation of the experiment.

Before using other methods make sure to let SDK know that the visitor is a unique identifier by adding [`UniqueIdentifier`](#uniqueidentifier) data to a visitor

<Tip>
As the custom data you use as the identifier must be set to `Visitor` scope, you need to use [cross-device custom data synchronization](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/nodejs-sdk/#synchronizing-custom-data-across-devices) to retrieve the identifier with the [`getRemoteVisitorData`](#getremotevisitordata) method on each device.
</Tip>

Here's an example of how to use custom data for session merging. In this example, we have an application with a login page. Since we don't know the user ID at the moment of login, we use an anonymous visitor identifier generated by the [`getVisitorCode`](#getvisitorcode) method. After the user logs in, we can associate the anonymous visitor with the user ID and use it as a unique identifier for the visitor.

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
  CustomData,
} from '@kameleoon/react-sdk';

function LoginPage(): JSX.Element {
  const [visitorCode, setVisitorCode] = useState<string | null>(null);

  const { initialize } = useInitialize();
  const { getVariation } = useFeatureFlag();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    const anonymousVisitor = getVisitorCode();
    // -- Saving `visitorCode` in the state to re-use it later.
    setVisitorCode(anonymousVisitor);

    // -- Getting a variation, assume it's variation `A`
    const variation = getVariation({
      visitorCode: anonymousVisitor,
      featureKey: 'my_feature_key',
    });
  }, [initialize, getVariation, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

```tsx
import {
  useData,
  useFeatureFlag,
  useVisitorCode,
  CustomData,
  UniqueIdentifier,
} from '@kameleoon/react-sdk';

type Props = {
  anonymousVisitor: string;
};

function ApplicationPage(props: Props): JSX.Element {
  const { addData, trackConversion, getRemoteVisitorData, flush } = useData();
  const { getVariation } = useFeatureFlag();

  const init = useCallback(async (): Promise<void> => {
    // -- At this point anonymous visitor has logged in,
    //    and we have a user ID to use as a visitor identifier
    // -- Associating both visitors with an identifier Custom Data,
    //    where index `1` is the Custom Data's index, configured
    //    as a unique identifier in Kameleoon.
    const userIdentifierData = new CustomData(1, 'my_user_id');
    // -- Let's assume the anonymous visitor identifier
    //    was passed as a prop.
    addData(props.anonymousVisitor, userIdentifierData);
    // -- Flushing data for the anonymous `visitorCode`
    flush(props.anonymousVisitor);

    // -- Informing the SDK that the visitor is unique identifier.
    addData('my_user_id', new UniqueIdentifier(true));

    // -- Retrieving the variation for the user ID ensures
    //    consistency with the anonymous visitor's variation.
    //    Both the anonymous visitor and the user ID will be
    //    assigned variation `A`.
    const variation = getVariation({
      visitorCode: 'my_user_id',
      featureKey: 'my_feature_key',
    });

    // -- `my_user_id` and `anonymousVisitor` are now linked.
    //    They can be tracked as a single visitor.
    trackConversion({
      visitorCode: 'my_user_id',
      goalId: 123,
      revenue: 100,
    });

    // -- Additionally, linked visitors share previously
    //    collected remote data.
    const data = await getRemoteVisitorData({
      visitorCode: 'my_user_id',
    });
  }, [
    getRemoteVisitorData,
    trackConversion,
    addData,
    getVariation,
  ]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
  CustomData,
} from '@kameleoon/react-sdk';

function LoginPage() {
  const [visitorCode, setVisitorCode] = useState(null);

  const { initialize } = useInitialize();
  const { getVariation } = useFeatureFlag();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async () => {
    await initialize();

    const anonymousVisitor = getVisitorCode();
    // -- Saving `visitorCode` in the state to re-use it later.
    setVisitorCode(anonymousVisitor);

    // -- Getting a variation, assume it's variation `A`
    const variation = getVariation({
      visitorCode: anonymousVisitor,
      featureKey: 'my_feature_key',
    });
  }, [initialize, getVariation, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

```jsx
import {
  useData,
  useFeatureFlag,
  useVisitorCode,
  CustomData,
  UniqueIdentifier,
} from '@kameleoon/react-sdk';

function ApplicationPage(props) {
  const { addData, trackConversion, getRemoteVisitorData, flush } = useData();
  const { getVariation } = useFeatureFlag();

  const init = useCallback(async () => {
    // -- At this point anonymous visitor has logged in,
    //    and we have a user ID to use as a visitor identifier
    // -- Associating both visitors with an identifier Custom Data,
    //    where index `1` is the Custom Data's index, configured
    //    as a unique identifier in Kameleoon.
    const userIdentifierData = new CustomData(1, 'my_user_id');
    // -- Let's assume the anonymous visitor identifier
    //    was passed as a prop.
    addData(props.anonymousVisitor, userIdentifierData);
    // -- Flushing data for the anonymous `visitorCode`
    flush(props.anonymousVisitor);

    // -- Informing the SDK that the visitor is a unique identifier.
    addData('my_user_id', new UniqueIdentifier(true));

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
    trackConversion({
      visitorCode: 'my_user_id',
      goalId: 123,
      revenue: 100,
    });

    // -- Additionally, linked visitors share previously
    //    collected remote data.
    const data = await getRemoteVisitorData({
      visitorCode: 'my_user_id',
    });
  }, [
    getRemoteVisitorData,
    trackConversion,
    addData,
    getVariation,
  ]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>
</Tab>

</Tabs>

### Utilities

SDK has a set of utility methods that can be used to simplify the development process. All the methods are represented as static members of `KameleoonUtils` class.

#### simulateSuccessRequest

Method `simulateSuccessRequest` is used to simulate a successful request to the Kameleoon server. It can be useful for custom [Requester](#requester) implementations when developer needs to simulate a successful request, for example disabling tracking.

<Tabs>
<Tab title="TypeScript">

```ts
import {
  KameleoonUtils,
  IExternalRequester,
  SendRequestParametersType,
  RequestType,
  KameleoonResponseType,
} from '@kameleoon/react-sdk';

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

</Tab>
<Tab title="JavaScript">

```js

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

</Tab>
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

Method `getCookieValue` is used to parse a common cookie string (`key_1=value_1; key_2=value_2; ...`) and get the value of a specific cookie key. It's useful when working with a custom implementation of [`VisitorCodeManager`](#visitorcodemanager).

<Tabs>
<Tab title="TypeScript">

```ts

const cookies = 'key_1=value_1; key_2=value_2';
const key = 'key_1';

const value = KameleoonUtils.getCookieValue(cookies, key); // = `value_1`
```

</Tab>
<Tab title="JavaScript">

```js

const cookies = 'key_1=value_1; key_2=value_2';
const key = 'key_1';

const value = KameleoonUtils.getCookieValue(cookies, key); // = `value_1`
```

</Tab>
</Tabs>

##### Arguments

| Name                | Type     | Description                                            |
| ------------------- | -------- | ------------------------------------------------------ |
| cookie (_required_) | `string` | Cookie string in a form `key_1=value_1; key_2=value_2` |
| key (_required_)    | `string` | String representation of a key to find a value by      |

##### Return value

`string | null` - returns a string with a cookie value or `null` if the key was not found

## Reference

This is the full reference documentation for the React SDK.

### Initialization

This section provides the methods you use to create and initialize the Kameleoon Client in your application.

#### initialize()

<Tabs>
<Tab title="SDK Version 9">

An asynchronous `initialize` function, collected with `useInitialize` hook, that's used for KameleoonClient initialization by fetching Kameleoon SDK related data from server or by retrieving data from local source if data is up-to-date or update interval has not been reached.

<Note>
- If the SDK configuration could not be retrieved but there is an older configuration available in SDK storage, the SDK uses the older configuration as a fallback and the `initialize` does not throw an error.

- Client initialization has an optional _offline mode_.
It is activated by setting optional `useCache` parameter to `true`.

In _offline mode_ if tracking requests from any of the following methods fail due to internet connectivity issues, the SDK automatically resends the request as soon as it detects that the internet connection has been re-established:

- [flush](#flush)
- [trackConversion](#trackconversion)
- [getFeatureFlagVairationKey](#getfeatureflagvariationkey)
- [getFeatureVariable](#getfeatureflagvariable)
- [sFeatureFlagActive](#isfeatureflagactive)
</Note>

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();

  const init = useCallback(async (): Promise<void> => {
    await initialize();
  }, [initialize]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();

  const init = useCallback(async () => {
    await initialize();
  }, [initialize]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

| Name                  | Type                     | Description                                                                                                                                          | Default Value |
| --------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| useCache (_optional_) | `boolean` or `undefined` | parameter for activating SDK offline mode, if `true` is passed failed polls will not return error and will use cached data if such data is available | `false`       |

##### Return value

`Promise<boolean>` - a promise resolved to a boolean indicating a successful sdk initialization. Generally initialize will throw an error if the something that can not be handled will happen, so the `boolean` value will almost always be `true` and won't give as much useful information.

##### Exceptions thrown

| Type                                       | Description                                               |
| ------------------------------------------ | --------------------------------------------------------- |
| `KameleoonException.StorageWrite`          | Couldn't update storage data                              |
| `KameleoonException.ClientConfiguration`   | Couldn't retrieve client configuration from Kameleoon API |
| `KameleoonException.MaximumRetriesReached` | Maximum retries reached, request failed                   |

</Tab>
<Tab title="SDK Version 10">

An asynchronous `initialize` function, collected with `useInitialize` hook, that's used for KameleoonClient initialization by fetching Kameleoon SDK related data from server or by retrieving data from local source if data is up-to-date or update interval has not been reached.

<Note>
- If the SDK configuration could not be retrieved but there is an older configuration available in SDK storage, the SDK uses the older configuration as a fallback and the `initialize` does not throw an error.

- SDK supports an _offline mode_.

In _offline mode_ if tracking requests from any of the following methods fail due to internet connectivity issues, the SDK automatically resends the request as soon as it detects that the internet connection has been re-established:

- [flush](#flush)
- [trackConversion](#trackconversion)
- [getFeatureFlagVairationKey](#getfeatureflagvariationkey)
- [getFeatureVariable](#getfeatureflagvariable)
- [sFeatureFlagActive](#isfeatureflagactive)
</Note>

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();

  const init = useCallback(async (): Promise<void> => {
    await initialize();
  }, [initialize]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();

  const init = useCallback(async () => {
    await initialize();
  }, [initialize]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Return value

`Promise<boolean>` - a promise resolved to a boolean indicating a successful sdk initialization. Generally initialize will throw an error if the something that can not be handled will happen, so the `boolean` value will almost always be `true` and won't give as much useful information.

##### Exceptions thrown

| Type                                       | Description                                               |
| ------------------------------------------ | --------------------------------------------------------- |
| `KameleoonException.StorageWrite`          | Couldn't update storage data                              |
| `KameleoonException.ClientConfiguration`   | Couldn't retrieve client configuration from Kameleoon API |
| `KameleoonException.MaximumRetriesReached` | Maximum retries reached, request failed                   |

</Tab>
</Tabs>

#### isInitialized()

The `isInitialized` function, collected with the `useInitialize` hook, is a small utility method that checks if the SDK initialization has completed. For example, this can be useful when dealing with a deeply nested component tree, because it allows you to quickly check the SDK readiness without having to manage a global state, or pass the initialization result using component props.

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();

  const init = useCallback(async (): Promise<void> => {
    await initialize();
  }, [initialize]);

  useEffect(() => {
    init();
  }, [init]);
}

function DeeplyNestedComponent(): JSX.Element {
  const { isInitialized } = useInitialize();
  const { getVariation } = useFeatureFlag();

  if (isInitialized()) {
    const variation = getVariation({ visitorCode: 'visitor_code', featureKey: 'my_feature_key' });
  }
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();

  const init = useCallback(async () => {
    await initialize();
  }, [initialize]);

  useEffect(() => {
    init();
  }, [init]);
}

function DeeplyNestedComponent() {
  const { isInitialized } = useInitialize();
  const { getVariation } = useFeatureFlag();

  if (isInitialize()) {
    const variation = getVariation({ visitorCode: 'visitor_code', featureKey: 'my_feature_key' });
  }
}
```

</Tab>
</Tabs>

##### Return value

A `boolean` value. Returns `true` if SDK was successfully initialized, otherwise returns `false`.

#### createClient()

To get started, you need to create an entry point for React SDK by creating a Kameleoon Client at the top level of your application using the `createClient()` function imported from `kameleoon` package.

An instance of `KameleoonClient` is created using `createClient()` function.

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  createClient,
  Environment,
  SDKConfigurationType,
} from '@kameleoon/react-sdk';

// -- Optional configuration
const configuration: Partial<SDKConfigurationType> = {
  updateInterval: 60,
  environment: Environment.Production,
  cookieDomain: '.example.com',
};

const client = createClient({ siteCode: 'my_site_code', configuration });
```

</Tab>
<Tab title="JavaScript">

```jsx

// -- Optional configuration
const configuration = {
  updateInterval: 60,
  environment: Environment.Production,
  cookieDomain: '.example.com',
};

const client = createClient({ siteCode: 'my_site_code', configuration });
```

</Tab>
</Tabs>

##### Arguments

An object of type `SDKParameters` containing:

| Name                       | Type                            | Description                                                                                                                                                         |
| -------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| siteCode (_required_)      | `string`                        | This is a [unique key](https://help.kameleoon.com/question/how-do-i-find-my-site-id/) of the Kameleoon project you are using with the SDK. This field is mandatory. |
| configuration (_optional_) | `Partial<SDKConfigurationType>` | client's configuration                                                                                                                                              |
| externals (_optional_)     | `ExternalsType`                 | external implementation of SDK dependencies ([External dependencies](#external-dependencies))                                                                       |

##### Configuration Parameters

<Tabs>
<Tab title="SDK Version 9">

| Name                                      | Type          | Description                                                                                                                                                                                                                                                                                   | Default Value                              |
| ----------------------------------------- |---------------| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| updateInterval (_optional_)               | `number`      | Specifies the refresh interval, in minutes, that the SDK fetches the configuration for the active experiments and feature flags. The value determines the maximum time it takes to propagate changes, such as activating or deactivating feature flags or launching experiments, to your production servers. If left unspecified, the default interval is set to 60 minutes. Additionally, we offer a [streaming mode](/feature-management-and-experimentation/technical-considerations/#streaming-premium-option) that uses server-sent events (SSE) to push new configurations to the SDK automatically and apply new configurations in real-time, without any delays.                                                                                                                                                                                                                 | `60`                                       |
| environment (_optional_)                  | `Environment` | feature flag environment                                                                                                                                                                                                                                                                      | `Environment.Production`                   |
| targetingDataCleanupInterval (_optional_) | `number`      | interval in _minutes_ for cleaning up targeting data; minimum value is 1 minute                                                                                                                                                                                                               | `undefined` (no cleanup will be performed) |
| domain (_optional_)                       | `string`      | [domain](#domain-information) that the cookie belongs to. Deprecated, use `cookieDomain` instead                                                                                                                                                                                              | `undefined`                                |
| cookieDomain (_optional_)                 | `string`      | [domain](#domain-information) that the cookie belongs to.                                                                                                                                                                                                                                     | `undefined`                                |
| networkDomain (_optional_)                | `string`      | custom domain the SDKs uses for all outgoing network requests, commonly used for proxying. The format is `second_level_domain.top_level_domain` (for example, `example.com`). If an invalid format is specified, the SDK uses the default Kameleoon value                                     | `undefined`                                |
| requestTimeout (_optional_)               | `number`      | timeout in _milliseconds_ for all SDK network requests, if timeout is exceeded request will fail immediately                                                                                                                                                                                  | `10_000` (10 seconds)                      |
| trackingInterval (_optional_)             | `number`      | Specifies the interval for tracking requests, in milliseconds. All visitors who were evaluated for any feature flag or had associated data will be included in this tracking request, which is performed once per interval. The minimum value is `100` ms and the maximum value is `1_000` ms | `1_000` (1 second)                         |

<Note>
The `domain` parameter is deprecated and will be removed in a future release. Use `cookieDomain` instead.
</Note>

</Tab>

<Tab title="SDK Version 10">

| Name                                      | Type                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Default Value                              |
|-------------------------------------------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| updateInterval (_optional_)               | `number`                | Specifies the refresh interval, in minutes, that the SDK fetches the configuration for the active experiments and feature flags. The value determines the maximum time it takes to propagate changes, such as activating or deactivating feature flags or launching experiments, to your production servers. If left unspecified, the default interval is set to 60 minutes. Additionally, we offer a [streaming mode](/feature-management-and-experimentation/technical-considerations/#streaming-premium-option) that uses server-sent events (SSE) to push new configurations to the SDK automatically and apply new configurations in real-time, without any delays. | `60`                                       |
| environment (_optional_)                  | `Environment \| string` | feature flag environment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `Environment.Production`                   |
| targetingDataCleanupInterval (_optional_) | `number`                | interval in _minutes_ for cleaning up targeting data; minimum value is 1 minute                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `undefined` (no cleanup will be performed) |
| cookieDomain (_optional_)                 | `string`                | [domain](#domain-information) that the cookie belongs to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `undefined`                                |
| networkDomain (_optional_)                | `string`                | custom domain the SDKs uses for all outgoing network requests, commonly used for proxying. The format is `second_level_domain.top_level_domain` (for example, `example.com`). If an invalid format is specified, the SDK uses the default Kameleoon value                                                                                                                                                                                                                                                                                                                                                                                                 | `undefined`                                |
| requestTimeout (_optional_)               | `number`                | timeout in _milliseconds_ for all SDK network requests, if timeout is exceeded request will fail immediately                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `10_000` (10 seconds)                      |
| trackingInterval (_optional_)             | `number`                | Specifies the interval for tracking requests, in milliseconds. All visitors who were evaluated for any feature flag or had associated data will be included in this tracking request, which is performed once per interval. The minimum value is `100` ms and the maximum value is `1_000` ms                                                                                                                                                                                                                                                                                                                                                             | `1_000` (1 second)                         |
| stubMode (_optional_)                     | `boolean`               | When set to true, the client will operate in stub mode and perform no operations. In this mode, all method calls execute no actions, ensuring that no external actions or side effects occur.                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `false`                                    |
| defaultDataFile (_optional_)              | `string`                | The `defaultDataFile` feature ensures the Kameleoon SDK is always **READY** by providing a fallback configuration when no cached data file exists. Developers can preload a valid configuration by fetching it from `https://sdk-config.kameleoon.eu/v3/<sitecode>` and passing it as `defaultDataFile` during initialization. When a `dateModified` timestamp (in milliseconds) is provided and is newer than the cached version, the SDK will use the default datafile instead of the cached version. **If `dateModified` is omitted, the default datafile is only applied when no cached version exists**. This ensures the SDK always has a valid configuration, whether default, cached, or updated.                                                       | `undefined`                                |

</Tab>

</Tabs>

##### Return value

`KameleoonClient` - an instance of KameleoonClient.

<Note>
Make sure not to use several client instances in one application as it is not fully supported yet and may overwrite the local storage configuration and cause unintended behavior (bugs).
</Note>

### Feature flags and variations

This section provides the methods you use to retrieve and manage the feature flags and variations assigned to the visitor.

#### getVariation()

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVariation } = useFeatureFlag();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code using `getVisitorCode` function
    const visitorCode = getVisitorCode();

    // -- Get variation with tracking
    const variation = getVariation({
      visitorCode,
      featureKey: 'my_feature_key',
    });

    // -- Get variation without tracking
    const variation = getVariation({
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
  }, [initialize, visitorCode, getVariation, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```js
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVariation } = useFeatureFlag();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code using `getVisitorCode` function
    const visitorCode = getVisitorCode();

    // -- Get variation with tracking
    const variation = getVariation({
      visitorCode,
      featureKey: 'my_feature_key',
    });

    // -- Get variation without tracking
    const variation = getVariation({
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
  }, [initialize, visitorCode, getVariation, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

An object of type `GetVariationParamsType` with the following properties:

##### Return value

##### Exceptions thrown

#### getVariations()

<Tabs>
<Tab title="TypeScript">

```ts
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVariations } = useFeatureFlag();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code using `getVisitorCode` function
    const visitorCode = getVisitorCode();

    // -- Get all feature flag variations with tracking
    const variations = getVariations({
      visitorCode,
    });

    // -- Get active feature flag variations with tracking
    const variations = getVariations({
      visitorCode,
      onlyActive: true,
    });

    // -- Get active feature flag variations without tracking
    const variations = getVariations({
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
  }, [initialize, visitorCode, getVariations, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```js
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVariations } = useFeatureFlag();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code using `getVisitorCode` function
    const visitorCode = getVisitorCode();

    // -- Get all feature flag variations with tracking
    const variations = getVariations({
      visitorCode,
    });

    // -- Get active feature flag variations with tracking
    const variations = getVariations({
      visitorCode,
      onlyActive: true,
    });

    // -- Get active feature flag variations without tracking
    const variations = getVariations({
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
  }, [initialize, visitorCode, getVariations, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

An object of type `GetVariationsParamsType` with the following properties:

##### Return value

##### Exceptions thrown

#### isFeatureFlagActive()

- 📨 _Sends Tracking Data to Kameleoon (depending on the `track` parameter)_
- 🎯 _Events:_ `EventType.Evaluation`

The method `isFeatureFlagActive()`, used with the `useFeatureFlag` hook, determines whether a visitor identified by `visitorCode` has the specified `featureKey` active. This method checks the targeting conditions, identifies the variation for the visitor, and saves this information to storage. Additionally, the hook sends a tracking request.

There is also an overload for this method that includes a `track` parameter, allowing you to disable the tracking of the feature evaluation.

<Note>
Visitor must be targeted to has feature flag active
</Note>

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useData,
  useFeatureFlag,
  useVisitorCode,
  CustomData,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { addData } = useData();
  const { isFeatureFlagActive } = useFeatureFlag();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code using `getVisitorCode` function
    const visitorCode = getVisitorCode();

    const featureKey = 'my_feature_key';

    // -- Add CustomData with index `0` containing visitor id to check the targeting
    addData(visitorCode, new CustomData(0, 'visitor_id'));

    // -- Get the status of feature flag
    const isActive = isFeatureFlagActive(visitorCode, featureKey);

    // -- Check if the feature flag is active for visitor without tracking
    const isActive = isFeatureFlagActive({ visitorCode, featureKey: 'my_feature', track: false});
  }, [initialize, visitorCode, isFeatureFlagActive, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useData,
  useFeatureFlag,
  useVisitorCode,
  CustomData,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { addData } = useData();
  const { isFeatureFlagActive } = useFeatureFlag();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code using `getVisitorCode` function.
    const visitorCode = getVisitorCode();

    const featureKey = 'my_feature_key';

    // -- Add CustomData with index `0` containing visitor id to check targeting.
    addData(visitorCode, new CustomData(0, 'visitor_id'));

    // -- Get the feature flag's status.
    const isActive = isFeatureFlagActive(visitorCode, featureKey);

    // -- Check if the feature flag is active for visitors without tracking.
    const isActive = isFeatureFlagActive({ visitorCode, featureKey: 'my_feature', track: false});
  }, [initialize, visitorCode, isFeatureFlagActive, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

There are two overloads available for this method:

1. Two parameters overload:

<Warning>
This overload is deprecated and will be removed in the next major version. Please use the new overload with an object parameter.
</Warning>

| Name                     | Type     | Description                                                              |
| ------------------------ | -------- | ------------------------------------------------------------------------ |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters length |
| featureKey (_required_)  | `string` | a unique key for feature flag                                            |

2. Object parameter overload of type `IsFeatureFlagActiveParamsType`:

| Name                     | Type      | Description                                                              | Default |
| ------------------------ | --------- | ------------------------------------------------------------------------ | ------- |
| visitorCode (_required_) | `string`  | unique visitor identification string, can't exceed 255 characters length | -       |
| featureKey (_required_)  | `string`  | a unique key for feature flag                                            | -       |
| track (_optional_)       | `boolean` | a boolean indicator of whether to track the feature evaluation           | `true`  |

##### Return value

`boolean` - indicator of whether the feature flag with `featureKey` is active for visitor with `visitorCode`.

##### Exceptions thrown

| Type                                                  | Description                                                                            |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `KameleoonException.Initialization`                   | Method was executed before the `kameleoonClient` completed it's `initialize` call      |
| `KameleoonException.VisitorCodeMaxLength`             | The visitor code exceeded the maximum length (255 characters)                          |
| `KameleoonException.VisitorCodeEmpty`                 | The visitor code is empty                                                              |
| `KameleoonException.FeatureFlagConfigurationNotFound` | No feature flag was found for the specified `featureKey`                               |
| `KameleoonException.DataInconsistency`                | Allocated variation was found but there is no feature flag with according `featureKey` |

---

#### getFeatureFlags()

🚫 _Doesn't send Tracking Data to Kameleoon_

The `getFeatureFlags` method collected with the `useFeatureFlag` hook returns a list of feature flags stored in the client configuration.

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getFeatureFlags } = useFeatureFlag();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get list of all feature flags
    const featureFlags = getFeatureFlags();
  }, [initialize, getFeatureFlags]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();
  const { getFeatureFlags } = useFeatureFlag();

  const init = useCallback(async () => {
    await initialize();

    // -- Get list of all feature flags
    const featureFlags = getFeatureFlags();
  }, [initialize, getFeatureFlags]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Return value

`FeatureFlagType[]` - list of feature flags, each feature flag item contains `id` and `key`.

##### Exceptions thrown

| Type                                | Description                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.Initialization` | Method was executed before the `kameleoonClient` completed it's `initialize` call |

---

#### setForcedVariation()

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { setForcedVariation } = useFeatureFlag();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Forcing the variation "on" in the feature flag "featureKey1" for the visitor
    setForcedVariation({
      visitorCode: visitorCode,
      experimentId: 9516,
      variationKey: 'on',
      forceTargeting: false,
    });

    // -- Resetting the forced variation for the "featureKey1" feature flag for the visitor
    setForcedVariation({
      visitorCode: visitorCode,
      experimentId: 9516,
      variationKey: null,
    });
  }, [initialize, visitorCode, setForcedVariation, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { setForcedVariation } = useFeatureFlag();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Forcing the variation "on" for the "featureKey1" feature flag for the visitor
    setForcedVariation({
      visitorCode: visitorCode,
      experimentId: 9516,
      variationKey: 'on',
      forceTargeting: false,
    });

    // -- Resetting the forced variation for the "featureKey1" feature flag for the visitor
    setForcedVariation({
      visitorCode: visitorCode,
      experimentId: 9516,
      variationKey: null,
    });
  }, [initialize, visitorCode, setForcedVariation, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

##### Exceptions thrown

#### evaluateAudiences()

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { evaluateAudiences } = useFeatureFlag();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    evaluateAudiences(visitorCode);
  }, [initialize, visitorCode, evaluateAudiences, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { evaluateAudiences } = useFeatureFlag();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    evaluateAudiences(visitorCode);
  }, [initialize, visitorCode, evaluateAudiences, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

##### Exceptions thrown

#### getDataFile()

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useFeatureFlag,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { getDataFile } = useFeatureFlag();

  useEffect(() => {
    const dataFile = getDataFile();
  }, [getDataFile]);
}
```

</Tab>
<Tab title="JavaScript">

```jsч
import {
  useFeatureFlag,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { getDataFile } = useFeatureFlag();

  useEffect(() => {
    const dataFile = getDataFile();
  }, [getDataFile]);
}
```

</Tab>
</Tabs>

##### Return value

### Visitor data

This section provides the methods you use to manage visitor data.

#### getVisitorCode()

`getVisitorCode` method collected from `useVisitorCode` hook obtains a visitor code from the browser cookie. If the visitor code doesn't exist yet, the function generates a random visitor code (or uses the `defaultVisitorCode` value if you provided one) and sets the new visitor code in a cookie.

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Pass, save, and retrieve the default visitorCode.
    const visitorCode = getVisitorCode('default_visitor_code');
  }, [initialize, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Pass, save, and retrieve the default visitorCode.
    const visitorCode = getVisitorCode('default_visitor_code');
  }, [initialize, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

| Name                            | Type     | Description                                                         |
| ------------------------------- | -------- | ------------------------------------------------------------------- |
| defaultVisitorCode (_optional_) | `string` | visitor code to be used in case there is no visitor code in cookies |

<Note>
If you don't provide a `defaultVisitorCode` and there is no visitor code stored in a cookie, the visitor code will be randomly generated.
</Note>

##### Return value

`string` - result visitor code.

##### Exceptions thrown

| Type                                      | Description                          |
| ----------------------------------------- | ------------------------------------ |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code length was exceeded |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty            |

---

#### addData()

The `addData` function, used with the `useData` hook, collects targeting data to store for other hooks to determine if the current visitor is targeted.

<Note>
- The `addData()` function does not return any value and does not interact with Kameleoon back-end servers on its own. Instead, all the declared data is saved for future transmission via the [flush](#flush) method .This approach helps reduce the number of server calls made, as the data is typically grouped into a single server call triggered by the execution of [flush](#flush).

The [trackConversion](#trackconversion) method also sends out any previously associated data, just like the [flush](#flush). The same holds true for [getFeatureFlagVariationKey](#getfeatureflagvariationkey) and [getFeatureVariable](#getfeatureflagvariable) methods if an experimentation rule is triggered.

- `userAgent` data will not be stored in storage like other data, and it will be sent with every tracking request for bot filtration.

- Check the list of [supported conditions](#targeting-conditions) to know what data types can be used for targeting
</Note>

<Tip>
Each visitor can only have one instance of associated data for most data types. However, `CustomData` is an exception. Visitors can have one instance of associated `CustomData` per `customDataIndex`.
</Tip>

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useVisitorCode,
  useData,
  CustomData,
  Browser,
  BrowserType,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { addData } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Create Kameleoon Data Types
    const customData = new CustomData(0, 'my_data');
    const browserData = new Browser(BrowserType.Chrome);

    // -- Add one Data item to Storage
    addData(visitorCode, browserData);

    // -- Add Data to Storage using variadic style
    addData(visitorCode, browserData, customData);

    // -- Add Data to Storage in array
    addData(visitorCode, ...[browserData, customData]);
  }, [initialize, visitorCode, addData, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useVisitorCode,
  useData,
  CustomData,
  Browser,
  BrowserType,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { addData } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Create Kameleoon Data Types
    const customData = new CustomData(0, 'my_data');
    const browserData = new Browser(BrowserType.Chrome);

    // -- Add one Data item to Storage
    addData(visitorCode, browserData);

    // -- Add Data to Storage using variadic style
    addData(visitorCode, browserData, customData);

    // -- Add Data to Storage in array
    addData(visitorCode, ...[browserData, customData]);
  }, [initialize, visitorCode, addData, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

| Name                       | Type                  | Description                                                                                                 |
| -------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------- |
| visitorCode (_required_)   | `string`              | unique visitor identification string, can't exceed 255 characters length                                    |
| kameleoonData (_optional_) | `KameleoonDataType[]` | number of instances of any type of `KameleoonData`, can be added solely in array or as sequential arguments |

<Note>
- `kameleoonData` is variadic argument it can be passed as one or several arguments (see the example)

- The index or ID of the [custom data](https://help.kameleoon.com/create-push-custom-data) can be found in your Kameleoon account. It is important to note that this index starts at `0`, which means that the first custom data you create for a given site will be assigned `0` as its ID, not `1`.
</Note>

##### Exceptions thrown

| Type                                      | Description                                                                       |
| ----------------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length (255 characters)                     |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty                                                         |
| `KameleoonException.StorageWrite`         | Couldn't update storage data                                                      |
| `KameleoonException.Initialization`       | Method was executed before the `kameleoonClient` completed it's `initialize` call |

<Note>
See the [Data types](#data-types) reference for more details of how to manage different data types.
</Note>

---

#### flush()

<Tabs>
<Tab title="SDK Version 9">

Method `flush` collected with `useData` takes the Kameleoon data associated with the visitor and sends the data tracking request along with all of the data that's been added previously using the [addData](#adddata).

If you don't specify a `visitorCode`, the SDK flushes all of its stored data to the remote Kameleoon servers. If any previously failed tracking requests were stored locally during [offline mode](#initialize), the SDK attempts to send the stored requests before executing the latest request.

<Note>
The `isUniqueIdentifier` parameter can be useful in some edge-case scenarios, such as when you can't access the anonymous `visitorCode` that was originally assigned to the visitor, but you do have access to an internal ID that is connected to the anonymous visitor using session merging capabilities.
</Note>

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useVisitorCode,
  useData,
  CustomData,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { addData, flush } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Create instance of CustomData
    const customData = new CustomData(0, 'my_data');
    addData(visitorCode, customData);

    // -- Flush added custom data for visitor
    flush(visitorCode);

    // -- Flush data for all the visitors
    flush();

    // -- Flush data with unique visitor identifier flag
    const internalUserId = 'my_user_id';
    flush(internalUserId, true);
  }, [initialize, visitorCode, addData, flush, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useVisitorCode,
  useData,
  CustomData,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { addData, flush } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Create instance of CustomData
    const customData = new CustomData(0, 'my_data');
    addData(visitorCode, customData);

    // -- Flush added custom data for visitor
    flush(visitorCode);

    // -- Flush data for all the visitors
    flush();

    // -- Flush data with unique visitor identifier flag
    const internalUserId = 'my_user_id';
    flush(internalUserId, true);
  }, [initialize, visitorCode, addData, flush, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

| Name                            | Type      | Description                                                                                                                                                 | Default |
| ------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| visitorCode (_optional_)        | `string`  | unique visitor identification string, can't exceed 255 characters length, if not passed all the data will be flushed (sent to the remote Kameleoon servers) | -       |
| isUniqueIdentifier (_optional_) | `boolean` | an optional parameter for specifying if the visitorCode is a unique identifier                                                                              | `false` |

##### Exceptions thrown

| Type                                      | Description                                                                       |
| ----------------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length (255 characters)                     |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty                                                         |
| `KameleoonException.Initialization`       | Method was executed before the `kameleoonClient` completed it's `initialize` call |

</Tab>

<Tab title="SDK Version 10">

`flush()` takes the Kameleoon data associated with the visitor and schedules the data to be sent with the next tracking request. The time of the next tracking request is defined by SDK Configuration [`trackingInterval`](#configuration-parameters) parameter. Visitor data can be added using [addData](#adddata) and [getRemoteVisitorData](#getremotevisitordata) methods.

If you don't specify a `visitorCode`, the SDK flushes all of its stored data to the remote Kameleoon servers. If any previously failed tracking requests were stored locally during [offline mode](#initialize), the SDK attempts to send the stored requests before executing the latest request.

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useVisitorCode,
  useData,
  CustomData,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { addData, flush } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Create instance of CustomData
    const customData = new CustomData(0, 'my_data');
    addData(visitorCode, customData);

    // -- Flush added custom data for visitor
    flush(visitorCode);

    // -- Instantly flush added custom data for visitor
    flush({ visitorCode, instant: true });

    // -- Flush data for all the visitors
    flush();

    // -- Instantly flush data for all the visitors
    flush({ instant: true });
  }, [initialize, visitorCode, addData, flush, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useVisitorCode,
  useData,
  CustomData,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { addData, flush } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Create instance of CustomData
    const customData = new CustomData(0, 'my_data');
    addData(visitorCode, customData);

    // -- Flush added custom data for visitor
    flush(visitorCode);

    // -- Instantly flush added custom data for visitor
    flush({ visitorCode, instant: true });

    // -- Flush data for all the visitors
    flush();

    // -- Instantly flush data for all the visitors
    flush({ instant: true });
  }, [initialize, visitorCode, addData, flush, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
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
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length (255 characters)                     |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty                                                         |
| `KameleoonException.Initialization`       | Method was executed before the `kameleoonClient` completed it's `initialize` call |

</Tab>
</Tabs>

---

#### getRemoteData()

Asynchronous method `getRemoteData`, collected with the `useData` hook, returns a data stored for specified site code on a remote Kameleoon server.

For example, you can use this function to retrieve user preferences, historical data, or any other data relevant to your application's logic. By storing this data on our highly scalable servers using our [Data API], you can efficiently manage massive amounts of data and retrieve it for each of your visitors or users.

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { getRemoteData } = useData();

  const getData = useCallback(async (): Promise<void> => {
    // -- Get remote data
    const jsonData = await getRemoteData('my_data_key');

    const data = JSON.parse(jsonData);
  }, [getRemoteData]);

  useEffect(() => {
    getData();
  }, [getData]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { getRemoteData } = useData();

  const getData = useCallback(async () => {
    // -- Get remote data
    const jsonData = await getRemoteData('my_data_key');

    const data = JSON.parse(jsonData);
  }, [getRemoteData]);

  useEffect(() => {
    getData();
  }, [getData]);
}
```

</Tab>
</Tabs>

##### Arguments

| Name             | Type     | Description                                                |
| ---------------- | -------- | ---------------------------------------------------------- |
| key (_required_) | `string` | unique key that the data you try to get is associated with |

##### Return value

`JSONType` - promise with data retrieved for specific key.

##### Exceptions thrown

| Type                            | Description                                  |
| ------------------------------- | -------------------------------------------- |
| `KameleoonException.RemoteData` | Couldn't retrieve data from Kameleoon server |

---

#### getRemoteVisitorData()

<Tabs>
<Tab title="SDK Version 9">

`getRemoteVisitorData()` is an asynchronous method for retrieving Kameleoon Visits Data for the `visitorCode` from the Kameleoon Data API. The method adds the data to storage for other methods to use when making targeting decisions.

Data obtained using this method plays an important role when you want to:

- use data collected from other devices.
- access a user's history, such as previously visited pages during past visits.
- use data that is only accessible on the client-side, like datalayer variables and goals that only convert on the front-end.

Read [this article](https://developers.kameleoon.com/feature-management-and-experimentation/using-visit-history-in-feature-flags-and-experiments/) for a better understanding of possible use cases.

<Warning>
By default, `getRemoteVisitorData()` automatically retrieves the latest stored custom data with `scope=Visitor` and attaches them to the visitor without the need to call the method `addData()`. It is particularly useful for [synchronizing custom data between multiple devices](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/nodejs-sdk/#synchronizing-custom-data-across-devices).
</Warning>

<Note>
The `isUniqueIdentifier` parameter can be useful in edge-case scenarios, such as when you can't access the anonymous `visitorCode` that was originally assigned to the visitor, but you do have access to an internal ID that is connected to the anonymous visitor using session merging capabilities.
</Note>

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useData,
  KameleoonDataType,
  VisitorDataFiltersType,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { getRemoteVisitorData } = useData();

  const getData = useCallback(async (): Promise<void> => {
    // -- Get remote visitor data and add it to storage.
    const kameleoonDataList: KameleoonDataType[] = await getRemoteVisitorData({
      visitorCode: 'my_visitor_code',
    });

    // -- Get remote visitor data without adding it to storage.
    const kameleoonDataList: KameleoonDataType[] = await getRemoteVisitorData({
      visitorCode: 'my_visitor_code',
      shouldAddData: false,
    });

    // -- Get remote visitor data without adding it to storage,
    //    and customizing filters for retrieving visits data.
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
  }, [getRemoteVisitorData]);

  useEffect(() => {
    getData();
  }, [getData]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { getRemoteVisitorData } = useData();

  const getData = useCallback(async () => {
    // -- Get remote visitor data and add it to storage.
    const kameleoonDataList = await getRemoteVisitorData({
      visitorCode: 'my_visitor_code',
    });

    // -- Get remote visitor data without adding it to storage.
    const kameleoonDataList = await getRemoteVisitorData({
      visitorCode: 'my_visitor_code',
      shouldAddData: false,
    });

    // -- Get remote visitor data without adding it to storage,
    //    and customizing filters for retrieving visits data.
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
  }, [getRemoteVisitorData]);

  useEffect(() => {
    getData();
  }, [getData]);
}
```

</Tab>
</Tabs>

##### Arguments

An object with the type `RemoteVisitorDataParamsType` containing:

| Name                            | Type                     | Description                                                                                                                                            | Default Value                                                                                                  |
| ------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| visitorCode (_required_)        | `string`                 | unique visitor identification string, can't exceed 255 characters length                                                                               | -                                                                                                              |
| shouldAddData (_optional_)      | `boolean`                | boolean flag identifying whether the retrieved custom data should be set to the storage like `addData` method does                                     | `true`                                                                                                         |
| filters (_optional_)            | `VisitorDataFiltersType` | filters for specifying what data should be retrieved from visits, by default only `customData` is retrieved from the current and latest previous visit | `{ previousVisitAmount: 1, currentVisit: true customData: true }`, other filters parameters are set to `false` |
| isUniqueIdentifier (_optional_) | `boolean`                | optional parameter that, when `true`, specifies that the visitorCode is a unique identifier                                                            | `false`                                                                                                        |

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

For example, let's say you want to retrieve data on visitors who completed a goal "Order transaction". You can specify parameters within the `getRemoteVisitorData()` method to refine your targeting. For instance, if you want to target only users who converted on the goal in their last five visits, you can set the `previousVisitAmount` parameter to 5 and `conversions` to true.

The flexibility shown in this example is not limited to goal data. You can use parameters within the `getRemoteVisitorData()` method to retrieve data on a variety of visitor behaviors.

<Note>
Here is the list of available `VisitorDataFiltersType` filters:

| Name                             | Type      | Description                                                                                                                                                                                            | Default |
| -------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
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
</Note>

</Tab>

<Tab title="SDK Version 10">

`getRemoteVisitorData()` is an asynchronous method for retrieving Kameleoon Visits Data for the `visitorCode` from the Kameleoon Data API. The method adds the data to storage for other methods to use when making targeting decisions.

Data obtained using this method plays an important role when you want to:

- use data collected from other devices.
- access a user's history, such as previously visited pages during past visits.
- use data that is only accessible on the client-side, like datalayer variables and goals that only convert on the front-end.

Read [this article](https://developers.kameleoon.com/feature-management-and-experimentation/using-visit-history-in-feature-flags-and-experiments/) for a better understanding of possible use cases.

<Warning>
By default, `getRemoteVisitorData()` automatically retrieves the latest stored custom data with `scope=Visitor` and attaches them to the visitor without the need to call the method `addData()`. It is particularly useful for [synchronizing custom data between multiple devices](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/nodejs-sdk/#synchronizing-custom-data-across-devices).
</Warning>

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useData,
  KameleoonDataType,
  VisitorDataFiltersType,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { getRemoteVisitorData } = useData();

  const getData = useCallback(async (): Promise<void> => {
    // -- Get remote visitor data and add it to storage.
    const kameleoonDataList: KameleoonDataType[] = await getRemoteVisitorData({
      visitorCode: 'my_visitor_code',
    });

    // -- Get remote visitor data without adding it to storage.
    const kameleoonDataList: KameleoonDataType[] = await getRemoteVisitorData({
      visitorCode: 'my_visitor_code',
      shouldAddData: false,
    });

    // -- Get remote visitor data without adding it to storage,
    //    and customizing filters for retrieving visits data.
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
  }, [getRemoteVisitorData]);

  useEffect(() => {
    getData();
  }, [getData]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { getRemoteVisitorData } = useData();

  const getData = useCallback(async () => {
    // -- Get remote visitor data and add it to storage.
    const kameleoonDataList = await getRemoteVisitorData({
      visitorCode: 'my_visitor_code',
    });

    // -- Get remote visitor data without adding it to storage.
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
  }, [getRemoteVisitorData]);

  useEffect(() => {
    getData();
  }, [getData]);
}
```

</Tab>
</Tabs>

##### Arguments

An object with the type `RemoteVisitorDataParamsType` containing:

| Name                       | Type                     | Description                                                                                                                                            | Default Value                                                                                                  |
| -------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| visitorCode (_required_)   | `string`                 | unique visitor identification string, can't exceed 255 characters length                                                                               | -                                                                                                              |
| shouldAddData (_optional_) | `boolean`                | boolean flag identifying whether the retrieved custom data should be set to the storage like `addData` method does                                     | `true`                                                                                                         |
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

The `getRemoteVisitorData()` method offers flexibility by allowing you to define various parameters when retrieving data on visitors. Whether you're targeting based on goals, experiments, or variations, the same approach applies across all data types.

For example, let's say you want to retrieve data on visitors who completed a goal "Order transaction". You can specify parameters within the `getRemoteVisitorData()` method to refine your targeting. For instance, if you want to target only users who converted on the goal in their last five visits, you can set the `previousVisitAmount` parameter to 5 and `conversions` to true.

The flexibility shown in this example is not limited to goal data. You can use parameters within the `getRemoteVisitorData()` method to retrieve data on a variety of visitor behaviors.

<Note>
Here is the list of available `VisitorDataFiltersType` filters:

| Name                             | Type      | Description                                                                                                                                                                                                                                                                                                                                  | Default |
| -------------------------------- | --------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
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
| cbs (_optional_)                 | `boolean` | If true, Contextual Bandit score data will be retrieved.                                                                                                                                                                                                                                                                                               | `false` |
</Note>

</Tab>
</Tabs>

---

#### getVisitorWarehouseData()

Asynchronous method `getVisitorWarehouseAudience` collected with `useData` hook retrieves all audience data associated with the visitor in your data warehouse using the specified `visitorCode` and `warehouseKey`. The `warehouseKey` is typically your internal user ID. The `customDataIndex` parameter corresponds to the Kameleoon custom data that Kameleoon uses to target your visitors. Refer to the [warehouse targeting documentation](https://help.kameleoon.com/warehouse-audience-targeting/) for additional details.

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { getVisitorWarehouseAudience } = useData();

  const getData = useCallback(async (): Promise<void> => {
    // -- Get visitor warehouse audience data using `warehouseKey`
    //    and add it to storage.
    const customData: CustomData = await getVisitorWarehouseAudience({
      visitorCode: 'my_visitor',
      customDataIndex: 10,
      warehouseKey: 'my_key',
    });

    // -- Get visitor warehouse audience data using `visitorCode`
    //    and add it to storage.
    const customData: CustomData = await getVisitorWarehouseAudience({
      visitorCode: 'my_visitor',
      customDataIndex: 10,
    });
  }, [getRemoteData]);

  useEffect(() => {
    getData();
  }, [getData]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { getVisitorWarehouseAudience } = useData();

  const getData = useCallback(async () => {
    // -- Get visitor warehouse audience data using `warehouseKey`
    //    and add it to storage.
    const customData = await getVisitorWarehouseAudience({
      visitorCode: 'my_visitor',
      customDataIndex: 10,
      warehouseKey: 'my_key',
    });

    // -- Get visitor warehouse audience data using `visitorCode`
    //    and add it to storage.
    const customData = await getVisitorWarehouseAudience({
      visitorCode: 'my_visitor',
      customDataIndex: 10,
    });
  }, [getRemoteData]);

  useEffect(() => {
    getData();
  }, [getData]);
}
```

</Tab>
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

---

#### setLegalConsent()

Method `setLegalConsent`, collected with `useVisitorCode` hook, specifies whether the visitor has given legal consent to use personal data. Setting the `legalConsent` parameter to `false` limits the types of data that you can include in tracking requests. This helps you adhere to legal and regulatory requirements while responsibly managing visitor data. You can find more information on personal data in the [consent management policy](https://help.kameleoon.com/consent-management-policy/).

<Note>
- Consent information is in sync between the Kameleoon Engine (application file engine.js) and the React SDK. This synchronization means that once consent is set on either the Engine or the SDK, it's automatically set for both. This feature eliminates the need for manual consent handling and ensures that SDKs operate in compliance with user preferences.

If you use Kameleoon in Hybrid mode, we recommend reading the consent section in our [Hybrid experimentation article](/core-concepts/hybrid-experimentation/#managing-consent-in-hybrid-mode)

- When handling legal consent, it's important to use [`getVisitorCode`](#getvisitorcode) method. Additionally, `getVisitorCode` does not accept `domain` as an argument. Instead, pass it to the [`createClient`](#createclient) function.
</Note>

<Tabs>
<Tab title="TypeScript">

```ts

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode, setLegalConsent } = useVisitorCode();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    setLegalConsent(visitorCode, true);
  }, [initialize, getVisitorCode, setLegalConsent]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```js

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVisitorCode, setLegalConsent } = useVisitorCode();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    setLegalConsent(visitorCode, true);
  }, [initialize, getVisitorCode, setLegalConsent]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

| Name                     | Type      | Description                                                                                                                                                                                    |
| ------------------------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| visitorCode (_required_) | `string`  | unique visitor identification string, can't exceed 255 characters length                                                                                                                       |
| consent (_required_)     | `boolean` | a boolean value representing the legal consent status. `true` indicates the visitor has given legal consent, `false` indicates the visitor has never provided, or has withdrawn, legal consent |

##### Exceptions thrown

| Type                                      | Description                                                          |
| ----------------------------------------- | -------------------------------------------------------------------- |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code length exceeded the maximum length (255 characters) |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty                                            |

---

### Goals and third-party analytics

This section provides the methods you use to track when a visitor action achieve one of you goals (a conversion).

#### trackConversion()

<Tabs>
<Tab title="SDK Version 9">

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { trackConversion } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Track conversion
    trackConversion({ visitorCode, revenue: 2000, goalId: 123 });

    // -- Track conversion with unique visitor identifier flag
    const internalUserId = 'my_user_id';
    trackConversion({
      visitorCode: internalUserId,
      revenue: 20000,
      goalId: 123,
      isUniqueIdentifier: true,
    });
  }, [initialize, trackConversion, visitorCode, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { trackConversion } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Track conversion
    trackConversion({ visitorCode, revenue: 2000, goalId: 123 });

    // -- Track conversion with unique visitor identifier flag
    const internalUserId = 'my_user_id';
    trackConversion({
      visitorCode: internalUserId,
      revenue: 20000,
      goalId: 123,
      isUniqueIdentifier: true,
    });
  }, [initialize, trackConversion, visitorCode, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

Parameters object consisting of:

##### Exceptions thrown

</Tab>

<Tab title="SDK Version 10">

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { trackConversion } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Track conversion
    trackConversion({
      visitorCode,
      revenue: 2000,
      goalId: 123,
      metadata: [new CustomData(0, 'value')],
      negative: true,
    });
  }, [initialize, trackConversion, visitorCode, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { trackConversion } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Track conversion
    trackConversion({
      visitorCode,
      revenue: 2000,
      goalId: 123,
      metadata: [new CustomData(0, 'value')],
      negative: true,
    });
  }, [initialize, trackConversion, visitorCode, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

Parameters object consisting of:

<Note>
<Tabs>
<Tab title="TypeScript">

```ts
addData(visitorCode, new CustomData(5, 'Credit Card'), new CustomData(9, 'Express Delivery'));
trackConversion({
    visitorCode,
    goalId: 1000,
    metadata: [new CustomData(5, 'Amex Credit Card')]
});
```
</Tab>
<Tab title="JavaScript">

```js
addData(visitorCode, new CustomData(5, 'Credit Card'), new CustomData(9, 'Express Delivery'));
trackConversion({
    visitorCode,
    goalId: 1000,
    metadata: [new CustomData(5, 'Amex Credit Card')]
});
```

</Tab>
</Tabs>
</Note>

##### Exceptions thrown

</Tab>
</Tabs>

---

#### getEngineTrackingCode()

Method `getEngineTrackingCode()` collected with `useFeatureFlag` hook obtains Kameleoon tracking code for the current visitor. Tracking code is built based the feature experiments that were triggered during the last 5 seconds

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getEngineTrackingCode, getVariation } =
    useFeatureFlag();

  const [engineCode, setEngineCode] = useState<string>('');

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Trigger feature experiment
    // -- E.g., result `variationKey` id is `200` and implicit experiment id is `100`
    getVariation({ visitorCode: 'visitor_code', featureKey: 'my_feature_key' });

    // -- Get tracking code and set it to state
    setEngineCode(getEngineTrackingCode('visitor_code'));

    // -- Result engine code will look like this
    // `
    // window.kameleoonQueue = window.kameleoonQueue || [];
    // window.kameleoonQueue.push(['Experiments.assignVariation', 100, 200, true]);
    // window.kameleoonQueue.push(['Experiments.trigger', 100, true]);
    // `
  }, [initialize, getVariation, getEngineTrackingCode]);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (!engineCode) {
      return;
    }

    // -- Insert tracking code into the page
    const script = document.createElement('script');
    script.textContent = engineCode;

    document.body.appendChild(script);

    // -- Remove script from the page
    return () => {
      document.body.removeChild(script);
    };
  }, [engineCode]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();
  const { getEngineTrackingCode, getVariation } =
    useFeatureFlag();

  const [engineCode, setEngineCode] = useState('');

  const init = useCallback(async () => {
    await initialize();

    // -- Trigger feature experiment
    // -- E.g., result `variationKey` id is `200` and implicit experiment id is `100`
    getVariation({ visitorCode: 'visitor_code', featureKey: 'my_feature_key' });

    // -- Get tracking code and set it to state
    setEngineCode(getEngineTrackingCode('visitor_code'));

    // -- Result engine code will look like this
    // `
    // window.kameleoonQueue = window.kameleoonQueue || [];
    // window.kameleoonQueue.push(['Experiments.assignVariation', 100, 200, true]);
    // window.kameleoonQueue.push(['Experiments.trigger', 100, true]);
    // `
  }, [initialize, getVariation, getEngineTrackingCode]);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (!engineCode) {
      return;
    }

    // -- Insert tracking code into the page
    const script = document.createElement('script');
    script.textContent = engineCode;

    document.body.appendChild(script);

    // -- Remove script from the page
    return () => {
      document.body.removeChild(script);
    };
  }, [engineCode]);
}
```

</Tab>
</Tabs>

<Note>
Result tracking code can be inserted directly into html `<script>` tag

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
</Note>

##### Arguments

| Name                     | Type     | Description                                                              |
| ------------------------ | -------- | ------------------------------------------------------------------------ |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters length |

##### Return value

`string` containing engine tracking code

##### Exceptions thrown

| Type                                      | Description                                                   |
| ----------------------------------------- | ------------------------------------------------------------- |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length (255 characters) |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty                                     |

---

### Events

This section provides the methods you use to handle events.

<Tabs>

<Tab title="SDK Version 10">

#### onEvent()

Method `onEvent`, collected with the `useInitialize` hook, fires a callback when a specific event is triggered. The callback function has access to the data associated with the event. The SDK methods in this documentation note which event types they can trigger, if any.

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  EventType,
  EvaluationEventDataType,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize, onEvent } = useInitialize();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Define logic to execute on SDK event
    onEvent(EventType.Evaluation, (eventData: EventDataType) => {
      // -- My Logic
    });
  }, [initialize, onEvent]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize, onEvent } = useInitialize();

  const init = useCallback(async () => {
    await initialize();

  // -- Define logic to execute on SDK event
  .onEvent(EventType.Evaluation, (eventData) => {
    // -- My Logic
  });
  }, [initialize, onEvent]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

<Note>
You can only assign one callback to each `EventType`.
</Note>

##### Events

Events are defined in the `EventType` enum. Depending on the event type, the `eventData` parameter will have a different type.

| Type                            | `eventData` type                   | Description                                                                                                           |
| ------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `EventType.Evaluation`          | `EvaluationEventDataType`          | Triggered when the SDK evaluates any variation for a feature flag. It is triggered regardless of the result variation |
| `EventType.ConfigurationUpdate` | `ConfigurationUpdateEventDataType` | Triggered when the SDK receives a configuration update from the server (when using real-time streaming)               |

##### Arguments

| Name                  | Type                                            | Description                                                                                               |
| --------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| event (_required_)    | `EventType`                                     | a type of the event to associate the callback action with                                              |
| callback (_required_) | `(eventData: EventDataType<EventType>) => void` | a callback function with the `eventData` parameter that will be called when a configuration update occurs |

##### Exceptions thrown

| Type                                | Description                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.Initialization` | Method was executed before the `kameleoonClient` completed it's `initialize` call |

---

##### Sending exposure events to external tools

Kameleoon offers built-in integrations with various analytics and CDP solutions, such as [Mixpanel, Google Analytics 4, Segment...](https://help.kameleoon.com/category/user-manual/manage-your-integrations/). To ensure that you can track and analyze your server-side experiments, Kameleoon provides a method `getEngineTrackingCode()` that returns the JavasScript code to be inserted in your page to automatically send the exposure events to the analytics solution you are using. The SDK builds a tracking code for your active analytics solution based on the experiments that the visitor has triggered in the last 5 seconds.
For more information about hybrid experimentation, please refer to this [documentation](https://developers.kameleoon.com/core-concepts/hybrid-experimentation).

<Note>
To benefit from this feature, you will need to implement both the React SDK and our Kameleoon JavaScript tag. We recommend you implement the [Kameleoon asynchronous tag], which you can install before your closing `<body>` tag in your HTML page, as it will be only used for tracking purposes.
</Note>

</Tab>

</Tabs>

### Data types

Kameleoon Data types are helper classes used for storing data in storage in predefined forms.
During the [flush](#flush) execution, the SDK collects all the data and sends it along with the tracking request.

Data available in the SDK is not available for targeting and reporting in the Kameleoon app until you add the data. For example, by using the `addData()` method.
See [use visit history to target users](../using-visit-history-in-feature-flags-and-experiments) for more information.

<Note>
If you are using hybrid mode, you can call `getRemoteVisitorData()` to automatically fill all data that Kameleoon has collected previously.
</Note>

#### Browser

<Note>
Since React SDK `10.11.0`, `Browser` is automatically detected based on the `User-Agent` string. However, you can still manually override it if needed.
</Note>

Browser contains browser information.

<Note>
Each visitor can only have one `Browser`. Adding a second `Browser` overwrites the first one.
</Note>

| Name                 | Type          | Description                                                                                     |
| -------------------- | ------------- | ----------------------------------------------------------------------------------------------- |
| browser (_required_) | `BrowserType` | predefined browser type (`Chrome`, `InternetExplorer`, `Firefox`, `Safari`, `Opera`, `Other`)   |
| version (_optional_) | `number`      | version of the browser, floating point number represents major and minor version of the browser |

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useData,
  Browser,
  BrowserType,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Add new browser data to client
    const browser = new Browser(BrowserType.Chrome, 86.1);
    addData('my_visitor_code', browser);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useData,
  Browser,
  BrowserType,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Add new browser data to client
    const browser = new Browser(BrowserType.Chrome, 86.1);
    addData('my_visitor_code', browser);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

---

#### UniqueIdentifier

`UniqueIdentifier` data is used as marker for unique visitor identification.

If you add `UniqueIdentifier` for a visitor, `visitorCode` is used as the unique visitor identifier, which is useful for [Cross-device experimentation](/core-concepts/cross-device-experimentation). Associating a `UniqueIdentifier` with a visitor notify SDK that the visitor is linked to another visitor.

The `UniqueIdentifier` can also be useful in other edge-case scenarios, such as when you can't access the anonymous `visitorCode` that was originally assigned to the visitor, but you do have access to an internal ID that is connected to the anonymous visitor using session merging capabilities.

<Note>
Each visitor can only have one `UniqueIdentifier`. Adding another `UniqueIdentifier` overwrites the first one.
</Note>

| Name               | Type      | Description                                                                                                                                                   |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value (_required_) | `boolean` | value that specifies if the visitor is associated with another visitor, provided `false` will imply that the visitor is not associated with any other visitor |

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Add new unique identifier to a visitor
    addData('my_visitor_code', new UniqueIdentifier(true));
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Add new unique identifier to a visitor
    addData('my_visitor_code', new UniqueIdentifier(true));
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

---

#### Conversion

`ConversionParametersType` conversionParameters - an object with conversion parameters described below

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useData,
  Conversion,
  ConversionParametersType,
  CustomData,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Defined conversion parameters
    const conversionParameters: ConversionParametersType = {
      goalId: 123,
      revenue: 10000,
      negative: true,
      metadata: [new CustomData(0, 'value')],
    };

    // -- Add new conversion data to client
    const conversion = new Conversion(conversionParameters);
    addData('my_visitor_code', conversion);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Defined conversion parameters
    const conversionParameters = {
      goalId: 123,
      revenue: 10000,
      negative: true,
      metadata: [new CustomData(0, 'value')],
    };

    // -- Add new conversion data to client
    const conversion = new Conversion(conversionParameters);
    addData(visitorCode, conversion);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

#### Cookie

`Cookie` contains information about the cookie stored on the visitor's device.

<Note>
- Generally, the React SDK will attempt to use a `localStorage` cookie for the conditions. If not possible, SDK can use `Cookie` data as an alternative.

- Each visitor can only have one `Cookie`. Adding a second `Cookie` overwrites the first one.
</Note>

| Name                | Type           | Description                                                         |
| ------------------- | -------------- | ------------------------------------------------------------------- |
| cookie (_required_) | `CookieType[]` | A list of `CookieType` objects consisting of cookie keys and values |

<Tabs>
<Tab title="TypeScript">

```ts
import {
  KameleoonClient,
  CookieType,
  Cookie,
  useInitialize,
  useData,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Add new cookie data to client
    const cookieData: CookieType[] = [
      { key: 'key_1', value: 'value_1' },
      { key: 'key_2', value: 'value_2' },
    ];
    const cookie = new Cookie(cookieData);
    addData('my_visitor_code', cookie);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```js
import {
  KameleoonClient,
  CookieType,
  Cookie,
  useInitialize,
  useData,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Add new cookie data to client
    const cookieData = [
      { key: 'key_1', value: 'value_1' },
      { key: 'key_2', value: 'value_2' },
    ];
    const cookie = new Cookie(cookieData);
    addData('my_visitor_code', cookie);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Methods

`Cookie` data has a static utility method `fromString` that you can use to create a cookie instantly by parsing a string that contains valid cookie data.
The method accepts `string` as parameter and returns an initialized `Cookie` instance.

<Tabs>
<Tab title="TypeScript">

```ts

const cookieString = 'key_1=value_1; key_2=value_2';
const cookie: Cookie = Cookie.fromString(cookieString);

// -- The result cookie will contain the following cookie array
// [
//    { key: 'key_1', value: 'value_1' },
//    { key: 'key_2', value: 'value_2' },
// ]
```

</Tab>
<Tab title="JavaScript">

```js

const cookieString = 'key_1=value_1; key_2=value_2';
const cookie = Cookie.fromString(cookieString);

// -- The result cookie will contain the following cookie array
// [
//    { key: 'key_1', value: 'value_1' },
//    { key: 'key_2', value: 'value_2' },
// ]
```

</Tab>
</Tabs>

#### GeolocationData

`GeolocationData` contains the visitor's geolocation details

<Note>
Each visitor can only have one `GeolocationData`. Adding a second `GeolocationData` overwrites the first one.
</Note>

An object parameter with the type `GeolocationInfoType` containing the following fields:

| Name                     | Type               | Description                                                                                                           |
| ------------------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| country (_required_)     | `string`           | The country of the visitor                                                                                            |
| region (_optional_)      | `string`           | The region of the visitor                                                                                             |
| city (_optional_)        | `string`           | The city of the visitor                                                                                               |
| postalCode (_optional_)  | `string`           | The postal code of the visitor                                                                                        |
| coordinates (_optional_) | `[number, number]` | Coordinates array tuple of two position values (longitude and latitude). Coordinate number represents decimal degrees |

<Tabs>
<Tab title="TypeScript">

```ts
import {
  KameleoonClient,
  GeolocationData,
  GeolocationInfoType,
  useData,
  useInitialize,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Add geolocation data
    const geolocationInfo: GeolocationInfoType = {
      country: 'France',
      region: 'Île-de-France',
      city: 'Paris',
      postalCode: '75008',
      coordinates: [48.8738, 2.295],
    };
    const geolocationData = new GeolocationData(geolocationInfo);
    addData('my_visitor_code', geolocationData);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```js
import {
  KameleoonClient,
  GeolocationData,
  useData,
  useInitialize,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Add geolocation data
    const geolocationInfo = {
      country: 'France',
      region: 'Île-de-France',
      city: 'Paris',
      postalCode: '75008',
      coordinates: [48.8738, 2.295],
    };
    const geolocationData = new GeolocationData(geolocationInfo);
    addData('my_visitor_code', geolocationData);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

---

#### CustomData

To retain custom data for future visits, the SDK transmits `CustomData` with a `Visitor` scope during the next tracking request. You can configure the scope in the data settings on the [custom data dashboard](https://app.kameleoon.com/customData/dashboard).

`CustomData` allows you to associate any type of data with each visitor easily. This data can then be used as a targeting condition in [segments](https://help.kameleoon.com/create-new-segment/) or as a filter or breakdown in experiment reports.

For more information about custom data, please refer to this [article](/core-concepts/custom-data).

| Name                   | Type       | Description                                                                                                                                                                                                             | Default |
|------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| index/name _(required)_     | `number`/`string`   | Index or Name of the custom data. **Either `index` or `name` must be provided** to identify the data.                                                                                                                                |         |
| overwrite _(optional)_ | `boolean`  | Flag to explicitly control how the values are stored and how they appear in reports. [See more](https://developers.kameleoon.com/core-concepts/custom-data/#default-logic-when-overwrite-parameter-is-false-or-omitted) | `true`  |
| value (_required_)     | `string[]` | The custom data value. It must be stringified to match the `string` type. _Note:_ value is variadic.                                                                                                                    |         |

<Note>
- Each visitor is allowed only one `CustomData` for each unique `index`. Adding another `CustomData` with the same `index` will replace the existing one.

- The custom data ‘index’ can be found in the [Custom Data dashboard](https://help.kameleoon.com/manage-your-custom-data/) under the “INDEX” column.

- To prevent the SDK from sending data with the selected index to Kameleoon servers for privacy reasons, enable the option: **Use this data only locally for targeting purposes** when creating custom data.

- Adding a `CustomData` instance created with a name when the SDK instance is not initialized or the name is not registered, will result in the data being ignored.
</Note>

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Defined conversion parameters
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
    const customData = new CustomData(
      customDataIndex,
      dataItemOne,
      dataItemTwo,
    );

    // -- Create custom data using an array of values
    const dataList = [dataItemOne, dataItemTwo, dataItemThree];
    const customData = new CustomData(customDataIndex, ...dataList);

    // -- Create custom data using overwrite flag
    const customData = new CustomData(customDataIndex, false, ...dataList);

    // -- Create custom data using name instead of index
    const customData = new CustomData('customDataName', false, ...dataList);

    // -- Add new custom data to client
    addData('my_visitor_code', customData);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Defined conversion parameters
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
    const customData = new CustomData(
      customDataIndex,
      dataItemOne,
      dataItemTwo,
    );

    // -- Create custom data using an array of values
    const dataList = [dataItemOne, dataItemTwo, dataItemThree];
    const customData = new CustomData(customDataIndex, ...dataList);

    // -- Create custom data using overwrite flag
    const customData = new CustomData(customDataIndex, false, ...dataList);

    // -- Create custom data using name instead of index
    const customData = new CustomData('customDataName', false, ...dataList);

    // -- Add new custom data to client
    addData('my_visitor_code', customData);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

---

#### Device

<Note>
Since React SDK `10.11.0`, `Device` is automatically detected based on the `User-Agent` string. However, you can still manually override it if needed.

**React Native:** Support for this feature is currently experimental and may require adjustments to work correctly. In React Native, the `Device` is automatically detected based on the `DPI` from `react-native.Dimensions`.
</Note>

Device contains information about your device.

<Note>
Each visitor can only have one `Device`. Adding a second `Device` overwrites the first one.
</Note>

| Name                    | Type         | Description                                                      |
| ----------------------- | ------------ | ---------------------------------------------------------------- |
| deviceType (_required_) | `DeviceType` | possible types for device type (`PHONE`, `TABLET`, `DESKTOP`) |

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useData,
  Device,
  DeviceType,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Add new device data to client
    const device = new Device(DeviceType.Desktop);
    addData('my_visitor_code', device);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useData,
  Device,
  DeviceType,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Add new device data to client
    const device = new Device(DeviceType.Desktop);
    addData('my_visitor_code', device);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

---

#### OperatingSystem

<Note>
Since React SDK `10.11.0`, `OperatingSystem` is automatically detected based on the `User-Agent` string. However, you can still manually override it if needed.

**React Native:** Support for this feature is currently experimental and may require adjustments to work correctly. In React Native, the `OperatingSystem` is automatically detected based on the `react-native.Platform`.
</Note>

`OperatingSystem` contains the visitor's operating system information.

<Note>
Each visitor can only have one `OperatingSystem`. Adding a second `OperatingSystem` overwrites the previous one.
</Note>

| Name                         | Type                  | Description                                                                                     |
| ---------------------------- | --------------------- | ----------------------------------------------------------------------------------------------- |
| operatingSystem (_required_) | `OperatingSystemType` | possible types for device type: `WINDOWS_PHONE`, `WINDOWS`, `ANDROID`, `LINUX`, `MAC`, `IOS` |

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useData,
  OperatingSystem,
  OperatingSystemType,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Add operating system data
    const operatingSystem = new OperatingSystem(OperatingSystemType.Windows);
    addData('my_visitor_code', operatingSystem);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useData,
  OperatingSystem,
  OperatingSystemType,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Add operating system data
    const operatingSystem = new OperatingSystem(OperatingSystemType.Windows);
    addData('my_visitor_code', operatingSystem);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

---

#### PageView

<Note>
Since React SDK `10.11.0`, `PageView` is automatically detected based on the `window.location?.href` and `document.title`. However, you can still manually override it if needed.

**React Native:** Support for this feature is currently experimental and may require adjustments to work correctly.
</Note>

PageView contains information about your web page.

<Note>
Each visitor can have one `PageView` per unique URL. Adding a `PageView` with the same URL as an existing one will notify SDK that the visitor revisited page
</Note>

`PageViewParametersType` pageViewParameters - an object with page view parameters described below

| Name                    | Type       | Description                                                                        |
| ----------------------- | ---------- | ---------------------------------------------------------------------------------- |
| urlAddress (_required_) | `string`   | url address of the page to track                                                   |
| title (_required_)      | `string`   | title of the web page                                                              |
| referrer (_optional_)   | `number[]` | an optional parameter containing a list of referrers Indices, has no default value |

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useData,
  PageView,
  PageViewParametersType,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Define page view parameters
    const pageViewParameters: PageViewParametersType = {
      urlAddress: 'www.example.com',
      title: 'my example',
      referrers: [123, 456],
    };

    // -- Add new page view data to client
    const pageView = new PageView(pageViewParameters);
    addData('my_visitor_code', pageView);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Define page view parameters
    const pageViewParameters = {
      urlAddress: 'www.example.com',
      title: 'my example',
      referrers: [123, 456],
    };

    // -- Add new page view data to client
    const pageView = new PageView(pageViewParameters);
    addData('my_visitor_code', pageView);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

---

#### UserAgent

Store information on the user-agent of the visitor. Server-side experiments are more vulnerable to **bot traffic** than client-side experiments. To address this, Kameleoon uses the IAB/ABC International Spiders and Bots List to identify known bots and spiders. Kameleoon also uses the `UserAgent` field to filter out bots and other unwanted traffic that could otherwise skew your conversion metrics. For more details, see the help article on [bot filtering](https://help.kameleoon.com/question/how-does-kameleoon-filter-bot-traffic-from-my-results/).

If you use internal bots, we suggest that you pass the value **curl/8.0** of the userAgent to exclude them from our analytics.

<Note>
A visitor can only have one `UserAgent`. Adding a second `UserAgent` overwrites the first one.
</Note>

| Name               | Type     | Description               |
| ------------------ | -------- | ------------------------- |
| value (_required_) | `string` | value used for comparison |

<Warning>
Server-side experiments are more vulnerable to **bot traffic** than client-side experiments. To address this, Kameleoon uses the IAB/ABC International Spiders and Bots List to identify known bots and spiders. We recommend that you pass the user agent to be filtered by Kameleoon when running server-side experiments for each visitor browsing your website, to avoid counting bots in your analytics.

If you use internal bots, we suggest that you pass the value **curl/8.0** of the userAgent to exclude them from our analytics.
</Warning>

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Add new user agent data to client
    const userAgent = new UserAgent('my_unique_value');
    addData('my_visitor_code', userAgent);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Add new user agent data to client
    const userAgent = new UserAgent('my_unique_value');
    addData('my_visitor_code', userAgent);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

#### ApplicationVersion

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useData,
  ApplicationVersion,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Add new application version data to client
    const applicationVersion = new ApplicationVersion('1.2');
    addData('my_visitor_code', applicationVersion);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useData,
  ApplicationVersion,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { addData } = useData();

  const init = useCallback(async () => {
    await initialize();

    // -- Add new application version data to client
    const applicationVersion = new ApplicationVersion('1.2');
    addData('my_visitor_code', applicationVersion);
  }, [initialize, addData]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

---

### Returned Types

#### DataFile

<Tabs>
<Tab title="TypeScript">

```ts

const featureFlags: Map<string, FeatureFlag> = dataFile.featureFlags;
```

</Tab>
<Tab title="JavaScript">

```js
const featureFlags = dataFile.featureFlags;
```

</Tab>
</Tabs>

#### FeatureFlag

<Tabs>
<Tab title="TypeScript">

```ts

// Check whether the feature flag is enabled in the current environment
const isEnvironmentEnabled: boolean = featureFlag.environmentEnabled;

// Retrieve the key of the default variation
const defaultVariationKey: string = featureFlag.defaultVariationKey;

// Retrieve all variations of the feature flag as a map (key = variation key, value = Variation object)
const variations: Map<string, Variation> = featureFlag.variations;

// Retrieve all targeting rules associated with the feature flag
const rules: Rule[] = featureFlag.rules;
```

</Tab>
<Tab title="JavaScript">

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

</Tab>
</Tabs>

#### Rule

<Tabs>
<Tab title="TypeScript">

```ts

// Retrieve all variations of the rule as a map (key = variation key, value = Variation object)
const variations: Map<string, Variation>  = rule.variations;
```

</Tab>
<Tab title="JavaScript">

```js
// Retrieve all variations of the rule as a map (key = variation key, value = Variation object)
const variations  = rule.variations;
```

</Tab>
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

<Note>
- Ensure that your code handles the case where `id` or `experimentId` may be `null`, indicating a default variation.
- The `variables` map might be empty if no variables are associated with the variation.
</Note>

<Tabs>
<Tab title="TypeScript">

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

</Tab>
<Tab title="JavaScript">

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

</Tab>
</Tabs>

#### Variable

`Variable` contains information about a variable associated with the assigned variation.

| Name  | Type     | Description                                                                                                                                |
|-------|----------|--------------------------------------------------------------------------------------------------------------------------------------------|
| key   | `string` | The unique key identifying the variable.                                                                                                   |
| type  | `string` | The type of the variable. Possible values: **BOOLEAN**, **NUMBER**, **STRING**, **JSON**, **JS**, **CSS**.                                 |
| value | `any`    | The value of the variable, which can be of the following types: **boolean**, **number**, **String**, **Record\<string, any\>**, **any[]**. |

<Tabs>
<Tab title="TypeScript">

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

</Tab>
<Tab title="JavaScript">

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

</Tab>
</Tabs>

### Deprecated methods

<Warning>
These methods are deprecated and will be removed in the next major update.
</Warning>

#### getFeatureFlagVariationKey()

- 📨 _Sends Tracking Data to Kameleoon_
- 🎯 _Events:_ `EventType.Evaluation`

<Note>
Use the [`getVariation`](#getvariation) method.
</Note>

The method `getFeatureFlagVariationKey()`, which is used with the `useFeatureFlag` hook, retrieves the variation key for a visitor identified by their `visitorCode`. This process includes checking the targeting criteria, identifying the appropriate variation assigned to the visitor, storing this information, and sending a tracking request.

<Note>
If a user has never been associated with a feature flag, the SDK will randomly return a variation key according to the rules of that feature flag. If the user is already linked to the feature flag, the SDK will identify the previously assigned variation key. If the user does not meet any of the specified rules, the SDK will return the default value defined in Kameleoon’s feature flag delivery rules. It’s important to note that the default value may not always be a variation key; it could also be a boolean value or another data type, depending on how the feature flag is configured.
</Note>

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getFeatureFlagVariationKey } = useFeatureFlag();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code using `getVisitorCode` function.
    const visitorCode = getVisitorCode();

    const featureKey = 'my_feature_key';

    // -- Get the variationKey for the visitor under `visitorCode` in the feature flag.
    const variationKey = getFeatureFlagVariationKey(visitorCode, featureKey);
  }, [initialize, visitorCode, getFeatureFlagVariationKey, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { getFeatureFlagVariationKey } = useFeatureFlag();
  const { getVisitorCode } = useVisitorCode();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code using `getVisitorCode` function
    const visitorCode = getVisitorCode();

    const featureKey = 'my_feature_key';

    // -- Get the variationKey for the visitor under `visitorCode` in the found feature flag
    const variationKey = getFeatureFlagVariationKey(visitorCode, featureKey);
  }, [initialize, visitorCode, getFeatureFlagVariationKey, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

| Name                     | Type     | Description                                                              |
| ------------------------ | -------- | ------------------------------------------------------------------------ |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters length |
| featureKey (_required_)  | `string` | a unique key for feature flag                                            |

##### Return value

`string` - a string containing variable key for the allocated feature flag variation for the provided visitor.

##### Exceptions thrown

| Type                                                  | Description                                                            |
| ----------------------------------------------------- | ---------------------------------------------------------------------- |
| `KameleoonException.Initialization`                   | Method was executed before `initialize` was done for `kameleoonClient` |
| `KameleoonException.VisitorCodeMaxLength`             | The visitor code exceeded the maximum length (255 characters)          |
| `KameleoonException.VisitorCodeEmpty`                 | The visitor code is empty                                              |
| `KameleoonException.FeatureFlagConfigurationNotFound` | No feature flag was found for the specified `featureKey`               |
| `KameleoonException.FeatureFlagEnvironmentDisabled`   | Feature flag is disabled for the current environment                   |

#### getVisitorFeatureFlags()

- 🚫 _Doesn't send Tracking Data to Kameleoon_
- 🎯 _Events:_ `EventType.Evaluation` (for each feature flag)

<Note>
Use the [`getVariations`](#getvariations) method.
</Note>

The `getVisitorFeatureFlags` method, utilized with the `useFeatureFlag` hook, returns a list of _active_ feature flags that target the visitor associated with the `visitorCode` (the visitor must have one of the allocated variations).
<Warning>
This method only collects the feature flags that are currently active for the visitor. As a result, it does not include any feature flags for which the visitor is assigned to the “off” variation (default or control). If you need to retrieve all of the visitor’s feature flags, use `getFeatureFlags` instead.

For example:

```ts
// -- `getVisitorFeatureFlags` doesn't trigger feature experiments;
//    it only returns feature flags where visitors didn't get the `off` variation.
getVisitorFeatureFlags('my_visitor').forEach(({ key }) => {
  // -- `getFeatureFlagVariationKey` triggers a feature experiment,
  //    as `off` is already filtered out - visitors will never take part
  //    in an experiment where the `off` variation was allocated.
  getFeatureFlagVariationKey('my_visitor', key);
});
```

For cases where you need all of the visitor's feature flags, use [`getFeatureFlags`](#getfeatureflags) instead:

```ts
// -- Both `off` and other variations are processed as expected
getFeatureFlags('my_visitor').forEach(({ key }) => {
  getFeatureFlagVariationKey('my_visitor', key);
});
```
</Warning>

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { getVisitorFeatureFlags } = useFeatureFlag();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Get active feature flags for visitor
    const featureFlags = getVisitorFeatureFlags(visitorCode);
  }, [initialize, visitorCode, getVisitorFeatureFlags, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { getVisitorFeatureFlags } = useFeatureFlag();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Get active feature flags for visitor
    const featureFlags = getVisitorFeatureFlags(visitorCode);
  }, [initialize, visitorCode, getVisitorFeatureFlags, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

| Name                     | Type     | Description                                                              |
| ------------------------ | -------- | ------------------------------------------------------------------------ |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters length |

##### Return value

`FeatureFlagType[]` - list of feature flags, each feature flag item contains `id` and `key`.

##### Exceptions thrown

| Type                                      | Description                                                                       |
| ----------------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.Initialization`       | Method was executed before the `kameleoonClient` completed it's `initialize` call |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length (255 characters)                     |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty                                                         |
| `KameleoonException.StorageRead`          | Error while reading storage data                                                  |

---

#### getActiveFeatureFlags()

- 🚫 _Doesn't send Tracking Data to Kameleoon_
- 🎯 _Events:_ `EventType.Evaluation` (for each feature flag)

<Note>
Use the [`getVariations`](#getvariations) method.
</Note>

The `getActiveFeatureFlags` method, collected with the `useFeatureFlag` hook, returns a `Map`, where key is feature key and value is detailed information about the visitor's variation and it's variables

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { getActiveFeatureFlags } = useFeatureFlag();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Get active feature flags for visitor
    //    with detailed variation and variables data
    const activeFeatures = getActiveFeatureFlags(visitorCode);

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
  }, [initialize, visitorCode, getVisitorFeatureFlags, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}

init();
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { getActiveFeatureFlags } = useFeatureFlag();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Get active feature flags for visitor
    //    with detailed variation and variables data
    const activeFeatures = getActiveFeatureFlags(visitorCode);

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
  }, [initialize, visitorCode, getVisitorFeatureFlags, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}

init();
```

</Tab>
</Tabs>

<Warning>
This method only collects the visitor's _active_ feature flags. This means the result excludes all the feature flags for which the visitor is assigned to the `off` (default or control) variation. When you need all of the visitor's feature flags to iterate over, use `getFeatureFlags` instead.

See the [getVisitorFeatureFlags](#getvisitorfeatureflags) _CAUTION_ section method for more details.
</Warning>

##### Arguments

| Name                     | Type     | Description                                                              |
| ------------------------ | -------- | ------------------------------------------------------------------------ |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters length |

##### Return value

`Map<string, KameleoonVariationType>` - a map of feature flags, where key is feature key and value is detailed information about the visitor's variation and it's variables

##### Exceptions thrown

| Type                                      | Description                                                                       |
| ----------------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.Initialization`       | Method was executed before the `kameleoonClient` completed it's `initialize` call |
| `KameleoonException.VisitorCodeMaxLength` | The visitor code exceeded the maximum length of 255 characters                    |
| `KameleoonException.VisitorCodeEmpty`     | The visitor code is empty                                                         |
| `KameleoonException.StorageRead`          | Error while reading storage data                                                  |
| `KameleoonException.NumberParse`          | Couldn't parse Number value                                                       |
| `KameleoonException.JSONParse`            | Couldn't parse JSON value                                                         |

---

#### getFeatureFlagVariable()

- 📨 _Sends Tracking Data to Kameleoon_
- 🎯 _Events:_ `EventType.Evaluation`

<Note>
Use the [`getVariation`](#getvariation) method.
</Note>

The `getFeatureFlagVariable` method, collected with `useFeatureFlag` hook, returns a variable for the visitor under `visitorCode` in the found feature flag, this includes targeting check, finding the according variation exposed to the visitor and saving it to storage along with sending tracking request.

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useVisitorCode,
  useFeatureFlag,
  VariableType,
  JSONType,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { getFeatureFlagVariable } = useFeatureFlag();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Get feature variable
    const result = getFeatureFlagVariable({
      visitorCode,
      featureKey: 'my_feature_key',
      variableKey: 'my_variable_key',
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
  }, [initialize, getFeatureFlagVariable, visitorCode, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useVisitorCode,
  useFeatureFlag,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { getFeatureFlagVariable } = useFeatureFlag();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Get feature variable
    const variableResult = getFeatureFlagVariable({
      visitorCode,
      featureKey: 'my_feature_key',
      variableKey: 'my_variable_key',
    });

    const { type, value } = variableResult;
  }, [initialize, getFeatureFlagVariable, visitorCode, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

Parameters object of type `GetFeatureFlagVariableParamsType` containing the following fields:

| Name                     | Type     | Description                                                                                                            |
| ------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters length                                               |
| featureKey (_required_)  | `string` | a unique key for feature flag                                                                                          |
| variableKey (_required_) | `string` | key of the variable to be found for a feature flag with the specified `featureKey`, can be found on Kameleoon Platform |

##### Return value

`FeatureFlagVariableType` - a variable object containing `type` and `value` fields. You can check the `type` field against `VariableType` enum. For example, if the `type` is `VariableType.BOOLEAN` then `value` will be a `boolean` type.

##### Exceptions thrown

| Type                                                  | Description                                                                     |
| ----------------------------------------------------- | ------------------------------------------------------------------------------- |
| `KameleoonException.Initialization`                   | Method was executed before `initialize` was done for `kameleoonClient`          |
| `KameleoonException.VisitorCodeMaxLength`             | The visitor code exceeded the maximum length (255 characters)                   |
| `KameleoonException.VisitorCodeEmpty`                 | The visitor code is empty                                                       |
| `KameleoonException.FeatureFlagConfigurationNotFound` | No feature flag was found for the specified `featureKey`                        |
| `KameleoonException.FeatureFlagVariableNotFound`      | No feature variable was found for the specified `visitorCode` and `variableKey` |
| `KameleoonException.FeatureFlagEnvironmentDisabled`   | Feature flag is disabled for the current environment                            |
| `KameleoonException.JSONParse`                        | Couldn't parse JSON value                                                       |
| `KameleoonException.NumberParse`                      | Couldn't parse Number value                                                     |

#### getFeatureFlagVariables()

- 📨 _Sends Tracking Data to Kameleoon_
- 🎯 _Events:_ `EventType.Evaluation` (for each feature flag)

<Note>
Use the [`getVariations`](#getvariations) method.
</Note>

The `getFeatureFlagVariables` method, collected with the `useFeatureFlag`, hook returns a list of variables for the visitor under `visitorCode` in the found feature flag, this includes targeting check, finding the according variation exposed to the visitor and saving it to storage along with sending tracking request.

<Tabs>
<Tab title="TypeScript">

```tsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent(): JSX.Element {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { getFeatureFlagVariables } = useFeatureFlag();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode();

    // -- Get a list of variables for the visitor under `visitorCode` in the feature flag
    const variables = getFeatureFlagVariables(visitorCode, 'my_feature_key');
  }, [initialize, getFeatureFlagVariables, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx
import {
  useInitialize,
  useFeatureFlag,
  useVisitorCode,
} from '@kameleoon/react-sdk';

function MyComponent() {
  const { initialize } = useInitialize();
  const { getVisitorCode } = useVisitorCode();
  const { getFeatureFlagVariables } = useFeatureFlag();

  const init = useCallback(async () => {
    await initialize();

    // -- Get visitor code
    const visitorCode = getVisitorCode('www.example.com');

    // -- Get a list of variables for the visitor under `visitorCode` in the feature flag
    const variables = getFeatureFlagVariables(visitorCode, 'my_feature_key');
  }, [initialize, getFeatureFlagVariables, getVisitorCode]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

| Name                     | Type     | Description                                                              |
| ------------------------ | -------- | ------------------------------------------------------------------------ |
| visitorCode (_required_) | `string` | unique visitor identification string, can't exceed 255 characters length |
| featureKey (_required_)  | `string` | a unique key for feature flag                                            |

##### Return value

`FeatureVariableResultType[]` - a list of variable objects containing `key`, `type` and `value` fields. You can check the `type` field against `VariableType` enum. For example, if the `type` is `VariableType.BOOLEAN` then `value` will be a `boolean` type.

##### Exceptions thrown

| Type                                                  | Description                                                                       |
| ----------------------------------------------------- | --------------------------------------------------------------------------------- |
| `KameleoonException.Initialization`                   | Method was executed before the `kameleoonClient` completed it's `initialize` call |
| `KameleoonException.VisitorCodeMaxLength`             | The visitor code exceeded the maximum length (255 characters)                     |
| `KameleoonException.VisitorCodeEmpty`                 | The visitor code is empty                                                         |
| `KameleoonException.FeatureFlagConfigurationNotFound` | No feature flag was found for the specified `featureKey`                          |
| `KameleoonException.FeatureFlagVariationNotFound`     | No feature variation was found for the specified `visitorCode` and `variableKey`  |
| `KameleoonException.FeatureFlagEnvironmentDisabled`   | Feature flag is disabled for the current environment                              |
| `KameleoonException.JSONParse`                        | Couldn't parse JSON value                                                         |
| `KameleoonException.NumberParse`                      | Couldn't parse Number value                                                       |

---

#### onConfigurationUpdate()

<Note>
Use the `onEvent` method with `EventType.ConfigurationUpdate` instead.
</Note>

Method `onConfigurationUpdate` collected with `useInitialize` hook fires a callback on client configuration update.

<Note>
This hook only works for server sent events of real time update
</Note>

<Tabs>
<Tab title="TypeScript">

```tsx

function MyComponent(): JSX.Element {
  const { initialize, onConfigurationUpdate } = useInitialize();

  const init = useCallback(async (): Promise<void> => {
    await initialize();

    // -- Define logic to execute on client configuration update
    onConfigurationUpdate(() => {
      // -- My Logic
    });
  }, [initialize, onConfigurationUpdate]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
<Tab title="JavaScript">

```jsx

function MyComponent() {
  const { initialize, onConfigurationUpdate } = useInitialize();

  const init = useCallback(async () => {
    await initialize();

    // -- Define logic to execute on client configuration update
    onConfigurationUpdate(() => {
      // -- My Logic
    });
  }, [initialize, onConfigurationUpdate]);

  useEffect(() => {
    init();
  }, [init]);
}
```

</Tab>
</Tabs>

##### Arguments

| Name                  | Type         | Description                                                                        |
| --------------------- | ------------ | ---------------------------------------------------------------------------------- |
| callback (_required_) | `() => void` | callback function with no parameters that will be called upon configuration update |

##### Exceptions thrown

| Type                                | Description                                                                      |
| ----------------------------------- | -------------------------------------------------------------------------------- |
| `KameleoonException.Initialization` | Method was executed before the `kameleoonClient` completed its `initialize` call |
