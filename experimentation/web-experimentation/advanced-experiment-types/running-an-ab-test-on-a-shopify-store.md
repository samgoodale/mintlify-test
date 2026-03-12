---
sidebar_position: 3
---

# Running an A/B test on a Shopify store

Let's say you want to test different variations of your product page and measure how visitors interact with it based on key KPIs, such as the number of "Add to cart" actions, entries into the checkout funnel, and, ultimately, the number of completed orders.

Imagine a typical product page, as shown in the image below. A user can either choose to buy the product immediately or add it to their cart. But what if most of your visitors typically only purchase one product? In that case, you might consider showing only a single "Buy Now" CTA to streamline the checkout process and reduce friction for your users.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/running-an-ab-test-on-a-shopify-store/product-page.png)

There are several ways to create experiments using Kameleoon. For example, you can:

- **Content swap test:** Each variant of your experiment lives on a different Shopify template, which can be access through a dedicated page URL (eg. `www.mystore.com/products/products/produc-name?view=version-b`). The A/B testing tool allows to swap your content with the variant (for example, pages B, C, etc.).
- **Use a visual editor:** Create variants directly on your product page using our Graphic editor, or customize them by injecting JS/CSS.
- **Leverage Shopify's Liquid and a JS SDK:** Add logic in your Liquid template to activate or deactivate specific variants for a subset of users.

Let's explore each method in more detail.

Before getting started, ensure Kameleoon is installed on your Shopify store—this is required to run any experiments.

- If you're running **web experiments**, we recommend using our [**Shopify x Kameleoon app**](https://apps.shopify.com/kameleoon-abtesting-app), which simplifies setup. Be sure to check out our [documentation](https://help.kameleoon.com/integrations/cms-e-commerce/shopify/shopify-plus/) for step-by-step instructions.
- If you're running **feature flags or feature experiments**, please follow the guidelines outlined in our feature experimentation [documentation](https://developers.kameleoon.com/feature-management-and-experimentation/web-sdks/js-sdk).

## Content Swapping testing

A **Content Swapping test** is an A/B/n experiment where users are shown different contents under the same URL, each representing a variant of the same page. Contrary to URL redirects, it doesn't create [Sample Ratio Mismatch](/experiment-analytics/statistical-methods/sample-ratio-mismatch)

With Shopify, content swapping tests are easy to set up using the `?view` URL parameter, which lets you serve alternate templates for the same page. For example:

- `https://kameleoon-segment-test.myshopify.com/products/vans-sh-8-hi`
- `https://kameleoon-segment-test.myshopify.com/products/vans-sh-8-hi?view=version-b`

In this case, `?view=version-b` uses [Shopify's alternate template feature](https://www.shopify.com/partners/blog/shopify-alternate-templates), letting you create multiple versions of templates for products, collections, carts, and more—perfect for content swapping experiments.

Now, let's walk through how to configure a content swap test in Shopify and Kameleoon.

In your Shopify admin, go to **Online Store** > **Themes** > **Actions** > **Edit Code**, and open the `product.liquid` template. The template includes two main sections:

- `product-template` — contains the product page's source code.
- `product-recommendations` — contains the code for the "You may also like" recommendation block.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/running-an-ab-test-on-a-shopify-store/0.png)

To set up your content swap experiment, you must create an alternate template for **variant B** and duplicate the `product-template` section, removing the code related the **Add to Cart** button.

Here's how:

1. Click **Add a new template** in your Shopify theme editor.
2. Choose the **Product** template type and name it (we've used `version-b`, but you can use any name).

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/running-an-ab-test-on-a-shopify-store/1.png)

:::tip
The name you choose will appear in the URL (for example, `?view=version-b`), so pick something that makes sense to your team but isn't confusing to users.
:::

3. Click **Add a new section**; name it **`product-template-version-b`**, and **copy and paste** the code from your original `product-template.liquid` file into this new section.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/running-an-ab-test-on-a-shopify-store/2.png)

You should now have four liquid files.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/running-an-ab-test-on-a-shopify-store/3.png)

4. Remove the **Add to cart** button code from the **`product-template-version-b.liquid`** section.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/running-an-ab-test-on-a-shopify-store/4.png)

5. Call your modified section (`product-template-version-b`) from the alternate product template you created (`product.version-b.liquid`).

Your updated code should look something like this:

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/running-an-ab-test-on-a-shopify-store/5.png)

Once you've saved your changes, you're all set! You now have a second variant of your product page.

Shopify lets you load alternate template files using the `?view=` URL parameter. As long as the value matches a template file in your theme, Shopify will render that version of the page.

For example, visiting `https://kameleoon-store.myshopify.com/products/vans-sh-8-hi?view=version-b` will now display the product page **without the Add to Cart button**—just as we intended.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/running-an-ab-test-on-a-shopify-store/buy-now.png)

Most of the hard work is done—now it's time to **configure your content swap experiment in Kameleoon**, so that 50% of your visitors are shown **variation B** instead of the original product page. It's a simple process:

1. Go to the [Kameleoon app](https://app.kameleoon.com/).
2. Click **New experiment** > **With the code editor**.
3. Enter the required information and click **Create**.

The Code editor will open. From there, you can set up and launch your experiment.

4. Click the **chevron** next to **Add variation** > **Add code variation**.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/running-an-ab-test-on-a-shopify-store/add-url-redirection.png)

5. Add the **following code**, adapting the `VIEW` and the `SELECTOR` variables to suit your use case

```javascript
var VIEW = 'version-b';        // Alternate template handle, e.g. 'version-b'
var SELECTOR = '#MainContent'; // Main container selector

Kameleoon.API.Core.runWhenElementPresent(
  SELECTOR,
  function () {
    fetch(window.location.pathname + '?view=' + encodeURIComponent(VIEW), {
      credentials: 'same-origin'
    })
      .then(function (r) { return r.text(); })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var newContent = doc.querySelector(SELECTOR) || doc.body;

		var main = document.querySelector(SELECTOR);
        main.replaceWith(newContent);
      })
      .catch(function (err) {
        console.error('[Kameleoon] Swap failed:', err);
      });
  }
);
```

Variation B is now set up. You're just one step away from launching your experiment.

Use the tabs in the left sidebar to define:

- **Targeting:** Define who should see the experiment (all users, specific user segments).
- **Traffic allocation:** Choose how to split visitors between the original and variation B.
- **Goals:** Set how you'll measure success (click, conversions, orders).

Since we want to run this experiment for **50% of our traffic** on **product pages**, we'll configure the targeting as follows:

- **Include** URLs that contain `/products/`.
- **Exclude** URLs with the parameter `view=version-b` to prevent an infinite redirect loop.

Next, choose the primary goal used to measure your experiment's success. In this case, we want to increase the number of orders.

If you've installed the **Shopify x Kameleoon app**, select the automatically tracked **Shopify orders** goal.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/running-an-ab-test-on-a-shopify-store/goals.png)

Your experiment is now ready to be pushed live!

We **highly recommend simulating your experiment before launching**. Simulating lets you verify that visitors assigned to the **Buy it now** variation are correctly shown the **URL B content**.

Once you've simulated your experiment, return to Kameleoon and click **Launch** to launch your experiment.

Data collection will begin as soon as the first targeted visit ends on your store. As a general guideline, we recommend running the experiment for 2-3 weeks, depending on your traffic volume, before evaluating results.

Kameleoon will help you determine when to stop the experiment by analyzing key indicators like statistical significance, uplift, and data stability over time. For a full understanding of how Kameleoon stats model works, we highly recommend reading [this documentation](https://help.kameleoon.com//experiment-analytics/statistical-methods/statistical-significance/).

When the template `version-b` is the winning one, no extra code is needed. The customer can just use this template as the default one.

You can use the content swap method you've just implemented on other Shopify pages using the same approach.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/running-an-ab-test-on-a-shopify-store/6.png)

## Create variants with a graphic or code editor

In the previous section, we explored how to set up a content swapping test using Shopify's alternate template URL parameter—a powerful method if you know exactly which template sections to update and have the technical skills to modify your Liquid files.

Another flexible and efficient approach is creating page variants using a graphic or code editor. Instead of redirecting visitors to an alternate URL, this method modifies pages on the fly—for example, by hiding the Add to Cart button in real time. The advantage? Changes happen so quickly that users won't notice they're part of an A/B test.

The biggest different here is ease of use. Kameleoon's Graphic editor lets you visually delete, edit, or rearrange elements without touching any code. However, for more advanced changes, JavaScript and CSS knowledge will come in handy. Fortunately, Kameleoon also offers a powerful Code editor to support this.

Let's walk through how to set up this experiment in Kameleoon:

1. Open the [Kameleoon app](https://app.kameleoon.com/).
2. Click **New experiment** > **With the graphic editor**.
3. Enter the required information and click **Create**.

Kameleoon's Graphic editor will open directly on the product page URL of your choice.

4. Select the **Add to Cart** button.
5. To hide the button:
   - Click the **three-dots menu** in the left sidebar > **Hide**;
   - **Or** click the **Hide** icon in the toolbar that appears beneath the selected element.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/running-an-ab-test-on-a-shopify-store/hide.png)

That's it—variation B is now ready!

Finalize your experiment by configuring it just like the split URL setup:

- Allocate 50% of traffic.
- Target all pages with URLs containing `/products/`.
- Set **Shopify Orders** as your primary KPI.

Just like with the split URL experiment, we highly recommend simulating your experiment on your device to ensure the variation displays correctly across all product pages.

Finally, click **Launch** to start the experiment on your store.

You can also achieve the same result by adding CSS or JavaScript directly in the variation using Kamneleoon's Code editor.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/running-an-ab-test-on-a-shopify-store/code-editor.png)

## Use JS SDK in Liquid to toggle features

Activating or disabling code directly in your `product.liquid` file using feature flags and Kameleoon's JavaScript SDK is the most advanced option of the three techniques we've covered. While more technical, it's extremely powerful if you want to progressively roll out features to your users.

Typically, feature flags require a server-side SDK embedded in your backend infrastructure. These SDKs handle tasks like user bucketing, targeting, and tracking experiment results. However, in Shopify, you don't control the server, so server-side SDKs aren't an option.

That's where Kameleoon's client-side JS SDK comes in. The SDK allows you to run feature experiments entirely in the browser, within your Shopify theme files. If you're comfortable editing Liquid templates, this is the recommended approach.

To get started:

1. Go to the [Kameleoon app](https://app.kameleoon.com/)
2. Navigate to the **Feature flags** menu.
3. Click **New feature flag** and follow the steps in [this guide](https://help.kameleoon.com/experimentation/feature-experimentation/create-and-manage-flags/manage-your-feature-flags/).

Your feature flag should contain one experiment rule with multiple variations, with **Off** as your control (original behavior).

Once your feature flag is created in Kameleoon, note the **feature flag key** (for example, `shopify-pdp-page`). You'll need this key to reference the flag in your Shopify theme code.

Now, it's time to write the logic in your `product.liquid` (or `product-template.liquid`) file that will control whether the Add to Cart CTA is shown or hidden based on the visitor's variation.

Here's the goal:

- If the visitor is in **variation B**, we'll hide the CTA.
- If the visitor is in **variation A** (the control), we'll display the CTA.

**What the script does:**

- Ensures the Kameleoon JS SDK is loaded and initialized.
- Checks if the feature flag is active and which variation the visitor is bucketed into.
- Applies the logic to hide or show the CTA accordingly.

To implement:

1. In your Shopify admin, go to **Online Store** > **Themes** > **Actions** > **Edit Code**.
2. Open the **`product-template.liquid`** file (or equivalent).
3. Insert the Kameleoon feature flag logic.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/image-28.png)

4. Click **Save** to apply the changes to your theme.

That's it! Your new feature experiment using the Kameleoon JS SDK is now live.
