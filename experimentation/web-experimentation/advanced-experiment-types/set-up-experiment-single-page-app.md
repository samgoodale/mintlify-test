---
sidebar_position: 4
---

# Set up an experiment on a single-page app (React, Next.js, Vue.js...)

## What is a single-page app (SPA)?

### Definition and purpose

A single-page application (SPA) is a type of web application designed to provide a smoother and faster user experience by dynamically updating content without reloading the entire page. SPAs are typically built using modern JavaScript frameworks like React, Next.js, or Vue.js. Many SPAs also utilize server-side rendering (SSR), which adds complexity to client-side implementations like A/B testing and personalization.

The primary advantage of SPAs is improving the visitor’s navigation experience by loading resources once and updating the content dynamically, rather than reloading the entire page after each action.

### Implementation challenges and solutions

SPAs introduce unique challenges for tools like Kameleoon that rely on page loads to apply variations or run scripts. To ensure optimal performance, it is crucial to adapt the implementation strategy based on the type of SPA you’re working with.

In the following sections, we will outline best practices and procedures for handling each scenario, ensuring smooth integration and accurate tracking of visitor behavior across your website.

## Native setup

If your website is a full-site SPA, enabling the **"support for dynamic websites**" option ensures Kameleoon looks for URL changes. When the URL changes, all Kameleoon scripts rerun, including targeting and variation code.

Kameleoon will also monitor updates in your SPA by using a **`MutationObserver`** to track changes in the DOM, even when the page URL remains static. This allows Kameleoon to apply (or reapply) variation changes dynamically as updates occur on your website. Kameleoon supports various modifications made through the graphic editor, including:

- Style changes
- Text modifications
- Position updates (swap, insert before/after)
- Custom CSS selectors

This approach ensures that all relevant changes are consistently applied in a dynamic environment.

To enable **support for dynamic websites**:

1. Click **Admin** > **Projects**.
2. Locate your project's card and click the **Edit** icon.
3. Click **Configuration** and unfold the **General** menu.
4. Scroll down to **Advanced settings** and toggle **Enable support for dynamic websites (Single Page App, Progressive Web App...)** **ON**.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/set-up-an-experiment-on-a-single-page-app/advanced-settings.png)

Several options are available to help you optimize your configuration:

- **Choose the scope:** You can enable the feature for the entire site or limit it to specific elements using the Graphic editor. Restricting the scope to selected elements helps reduce the overall script weight. See how to mark an element as dynamic [here](../graphic-based-experiments/edit-a-variation#enable-dynamic-elements).

- **Set a custom attribute (optional):** This option improves element identification and helps avoid issues related to dynamic attributes and selectors. If your website does not generate stable or unique HTML IDs, you can define a custom attribute for Kameleoon to use when identifying modified elements. This attribute takes priority over the element ID when building the selector.

- **Avoid dynamic ID selectors (optional):** This option also improves element identification when dealing with dynamic attributes and selectors. By default, Kameleoon ignores HTML IDs that contain numeric sequences longer than five digits. You can define your own regular expression to exclude additional ID patterns if needed.
  
### Set a custom attribute

You can define a custom attribute (for example, `data-id`, `data-qa`) to identify elements on the page. Custom attributes are particularly useful when your site generates dynamic IDs for HTML elements.

The Kameleoon Graphic Editor identifies elements using **CSS selectors**, which fall into two categories:

- **ID-Based Selection:** If the element has an ID, Kameleoon will use it to locate and modify the element when the page loads.
- **Combinator Selector:** If no ID is found, Kameleoon creates a selector path using the nearest parent element with an ID.

In cases where your IDs are dynamic and change frequently, the Graphic editor might struggle to identify elements. To resolve this issue, you can add a static custom attribute (for example, `<button custom-id="1">`) that reliably identifies elements across updates.

### Avoid dynamic ID selectors

By default, Kameleoon avoids using element IDs that contain dynamically generated numbers longer than five consecutive digits. Instead, it builds a path using a nearby static parent element with an ID.

You can customize this behavior by specifying a **regular expression** to exclude certain dynamic IDs, ensuring more accurate targeting.

## Custom setup

If your website is not a full-site SPA or you need to handle specific parts of the site, refer to the section below.

There are four different use cases for custom SPA setups.

### Partial-site SPAs

To enable this option for specific pages, disable it from **Advanced settings** and add the following code to your **Global script**:

```javascript
if (document.location.href.includes('mySPApage')) {
     Kameleoon.API.Core.enableSinglePageSupport();
 }
```

_Replace_ "mySPApage_" with your funnel's URL._

### Page changes without URL changes

In cases where the DOM updates without a URL change, rely on alternative indicators to reload Kameleoon. Below is an example using `sessionStorage` to detect page changes. You can add the code to your **Global script**:

```javascript
window.kam_step = JSON.parse(window.sessionStorage.getItem('formStep'))?.step;
 Kameleoon.API.Core.runWhenConditionTrue(() => {
     return window.kam_step != JSON.parse(window.sessionStorage.getItem('formStep'))?.step;
 }, () => {
     Kameleoon.API.Core.load();
 });
```

### Detect page changes with `pathname`

For pages where you need Kameleoon to rerun, but only when the **`pathname`** changes (ignoring query parameters), detect changes using the `pathname` instead of a full URL. The code below can be added to your **Global script**:

```javascript
if (document.location.href.includes('configurator')) {
     window.kam_configurator_url = document.location.pathname;
 `Kameleoon.API.Core.runWhenConditionTrue(() => {     return window.kam_configurator_url != document.location.pathname; }, () => {     Kameleoon.Gatherer.Referrer.update(window.kam_configurator_url);     Kameleoon.API.Core.load(); });`
 } else {
     Kameleoon.API.Core.enableSinglePageSupport();
 }
```

### Reapply variation code without reloading Kameleoon

In some cases, certain page elements are dynamic, and when the code is rehydrated, it may overwrite the Kameleoon code that has already been applied. To prevent this, you have two options:

- You can inform Kameleoon when the page or a specific element has finished rendering by using one of the following methods:
  - Define a window variable; for example, `window.pageLoadForKam = true`.
  - Trigger an event on the page that Kameleoon can listen for. For example, using `pageLoaded` or `contentUpdated`: `window.addEventListener('pageLoaded', () -> { runKameleoonVariationCode })`.
  - Add a specific class or attribute to the `<body>` tag or the target element. Then, in the **variation code**, use this class or attribute to make changes to the page or specific elements.
- In the **variation code**, you can set the fourth argument of the `runWhenElementPresent` function to `true`. This argument enables support for dynamic elements and single-page applications (SPA). When this option is enabled, if the specified CSS selector for the element is not found by Kameleoon during the initial page load, Kameleoon will monitor the DOM for the selector. Once the element appears in the DOM, Kameleoon will execute the callback function. Additionally, if a new element matching the selector is later added to the page, Kameleoon will re-execute the callback with the newly added element.

:::caution
Use the code below sparingly and only when absolutely necessary. Limit its usage to the minimum number of cases and avoid applying it to multiple elements simultaneously to maintain optimal page performance. Be mindful of the potential for an **infinite loop** if the page's source code modifies the element each time it is updated.
:::

```javascript
const insertMyNewCTA = () => {
     if (document.querySelector("#kameleoonElement-myNewCTA") == null) {
 `    Kameleoon.API.Core.runWhenElementPresent(         '#myElement',         ([myElement]) => {             myElement.insertAdjacentHTML('beforebegin', "<button id='kameleoonElement-myNewCTA'>More info</button>");         },         null, true     ); }`
 }
 insertMyNewCTA();
```

### Retrieve data from the dataLayer

When using GTM as the retrieval method for setting custom data values, Kameleoon relies on a defined `dataLayer` to access its values. If the `dataLayer` is updated after each URL change by stacking new entries instead of removing the old ones, Kameleoon may retrieve outdated values. This retrieval happens because the old data persists across pages, and Kameleoon might execute before the `dataLayer` is updated. To prevent this issue, ensure that outdated entries are removed before adding new ones. Alternatively, implement custom code to wait for changes in the `dataLayer` length before retrieving the latest values:

```javascript
`window.dataLayerLength = window.dataLayerLength || 0; Kameleoon.API.Core.runWhenConditionTrue(() => { return window.dataLayer && window.dataLayerLength != window.dataLayer.length }, () => { window.dataLayerLength = window.dataLayer.length //then, retrieve and use dataLayer info here })`
```

## General Considerations

### Event listeners, timeouts, and intervals

Use `Kameleoon.API.Utils` to manage event listeners, timeouts, or intervals. These methods ensure that listeners and timers are automatically removed when a URL change occurs without a page reload. These removals prevent duplicates when Kameleoon reruns.

### Unique element IDs

When adding elements via Kameleoon, ensure their `id` starts with `kameleoonElement`. This naming convention ensures the element is removed before Kameleoon reruns, avoiding duplication or conflicts.

**Example:**

`<div id="kameleoonElement-myNewCTA"></div>` 

### Page view incrementation

Kameleoon only counts a new page when all its scripts are re-executed, which happens under two conditions:

- When `Kameleoon.API.Core.enableSinglePageSupport()` is called, combined with a URL change.
- When `Kameleoon.API.Core.load()` is explicitly triggered.

By following all the guidelines above, you can ensure that variations are implemented effectively and consistently across SPAs, enhancing user experience while maintaining data integrity. For any additional assistance, feel free to contact the Kameleoon team.

## Alternatives

### REACT and JS SDKs

Kameleoon offers a [React SDK](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/react-js-sdk) and a [JavaScript/TypeScript SDK](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk) designed for single-page applications. These SDKs provide an alternate method for running experiments and managing feature flags within your SPA by integrating the SDK into your application’s codebase.

For a comprehensive list of features available for SPAs, refer to our [SDK documentation](https://developers.kameleoon.com/feature-management-and-experimentation/overview).

### GatsbyJS plugin

Kameleoon also provides a dedicated plugin for GatsbyJS applications. To integrate Kameleoon with your GatsbyJS app, follow the instructions outlined in [this article](https://www.gatsbyjs.com/plugins/gatsby-plugin-kameleoon/).

### Next.js framework

If your website is built with Next.js, there's an important consideration when using Kameleoon's Graphic editor. Next.js websites load in a specific way that could cause conflict with Kameleoon's changes if they happen too quickly, potentially causing the page to display incorrectly.

#### Recommended solution

The Kameleoon team created a dedicated Next.js setup guide that solves this issue automatically. This setup ensures:

- Kameleoon loads quickly and efficiently.
- Your page displays smoothly without flickering.
- Changes appear at the right time without breaking your site.
- Page navigation works correctly.

**See the step-by-step guide:** [Implementation with Next.js](https://developers.kameleoon.com/web-experimentation/implementation-with-nextjs/)

#### Alternative approaches

If you can't use the recommended setup above, there are other ways to prevent conflicts. Your developer can add a simple signal that tells Kameleoon "the page is ready for changes now."

- **Method 1: Page ready indicator**
  - Add a marker to the `<body>` element once the page is fully loaded. Then set up your Kameleoon experiments to only run when this marker is present.
- **Method 2: Custom event**
  - Use Kameleoon's command queue to send a signal once your page is ready: `Events.trigger('my page is hydrated')`.
  - Then configure your experiments to use the **Custom event** targeting criteria to wait for this signal before making changes. For more details on implementing custom events and other targeting, refer to [this article](https://help.kameleoon.com/assets/segments/create-a-segment/#technical)

:::note
The dedicated Next.js setup handles all of this automatically, so you won't need to worry about these technical details.
:::
