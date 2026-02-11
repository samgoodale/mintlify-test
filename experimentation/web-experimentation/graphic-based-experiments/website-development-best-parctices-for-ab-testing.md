---
sidebar_position: 2
---

# Website development - Best practices for A/B testing

To develop a website that is easy to use for A/B testing campaigns, it is crucial to consider several technical and structural elements. Here are the key aspects.

## 1\. Clean and semantic HTML structure

*   **Proper use of HTML tags**: Use semantic tags (`<header>`, `<footer>`, `<section>`, `<article>`, etc.) to improve content understanding and manipulation.
*   **Unique identifiers**: Add clear and relevant IDs (`id="unique-id"`) or classes (`class="class-name"`) to elements for precise targeting.
*   **Avoid unnecessary dynamic classes**: Avoid auto-generated classes unless they are meaningful (e.g., from certain CSS frameworks).
*   **Custom tags**: If you use dynamic classes, add non-dynamic attributes like `custom-id` to simplify element selection.
*   **Explicit names**: Use clear and descriptive names for classes, IDs, and variables (e.g., `.cta-button`, `#main-header`) to ensure they are understandable, even to outsiders.

## 2\. Code modularity

*   **Separation of concerns**: Keep HTML, CSS, and JavaScript well-separated to reduce complex dependencies. For the JavaScript part, you can expose complex logic to the `window` scope, allowing it to be reused across different parts of the site. For example, this can enable adding a product to the cart from a specific page or validating a form step efficiently.
*   **Mutation Observers**: Enable the use of Mutation Observers, which is an optimized way to detect elements on the page and monitor changes. Check out our specific API, **`runWhenElementPresent`,** used to detect elements rendered on the page [here](https://developers.kameleoon.com/apis/activation-api-js/api-reference#runwhenelementpresent).
*   **Logs**: Allow the use of `console.log` as a preferable way to debug.
*   **DataLayer (or equivalent object)**: Avoid changing the values of the same layer of the dataLayer. If the required information is not yet available, wait to set the correct value directly, rather than updating an outdated value afterward. RWCT Check out our specific API, **`runWhenConditionTrue`,** used to detect when inforamtion is loaded on the page [here](https://developers.kameleoon.com/apis/activation-api-js/api-reference#runwhenconditiontrue).
*   **DOM handling**: Avoid re-rendering the DOM once it has loaded, as this will overwrite the changes applied by Kameleoon and make it difficult to detect when the page has completed loading.

## 3\. SPA (Single Page Application)

*   **Cookies and LocalStorage (LS)**: Implement clear cookie or LS management to identify different steps of a form, for example.
*   **Events rendering**: To ensure that Kameleoon changes persist and are not overwritten, you can inform Kameleoon when the page or a specific element has finished rendering by using one of the following methods:
    *   Define a window variable, e.g., `window.pageLoadForKam = true`.
    *   Trigger an event on the page that Kameleoon can listen for, e.g., using “pageLoaded” or “contentUpdated”: `window.addEventListener('pageLoaded', () => { runKameleoonVariationCode })`.
    *   Add a specific class or attribute to the `<body>` tag or the target element.
*   **DataLayer (or equivalent object)**: Update the **dataLayer** values after every URL change, including page transitions within the same URL (e.g., form steps). Instead of stacking new layers on each change, **remove the old dataLayer entries before adding new ones**. This ensures that Kameleoon retrieves the latest values, as it waits for the **dataLayer** to be defined before processing the data. If outdated values persist across pages, Kameleoon may execute before the **dataLayer** is updated, leading to the retrieval of stale data from the previous page. Otherwise, refer to the “custom setup” section of this [article](https://help.kameleoon.com/set-up-experiment-single-page-app/) to best handle dataLayer info retrieval.

Follow our guide on [**how to set up an experiment on a single-page app**](https://help.kameleoon.com/set-up-experiment-single-page-app/) for best practices.

## 4\. Event management

*   **Multiple triggers**: Allow for the manipulation of events: `click`, `mousedown`, `hover`, etc.