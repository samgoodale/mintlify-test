---
sidebar_position: 1
---

# URL redirection split tests

Unlike a classic A/B experiment, an A/B experiment with URL redirection implies that the tested page's different versions are developed and hosted on your web server: the versions are made available to visitors directly via your website.

Let's take the following example: you have two subscription pages you would like to test. These are their URLs:

`http://mywebsite.com/SubscriptionA.html`
`http://mywebsite.com/SubscriptionB.html`

The pages are accessible via your website. With Kameleoon, you can A/B test these two pages and analyze their performance and results.

## Simple URL redirection

Launch the Kameleoon editor as usual. Click the **three-dots menu** in the left panel next to a variation > **Redirection URL**. The **Redirection URL** panel opens. From there, you can configure your URL redirection for the variation you selected.

There are two types of redirection: **Global redirection** and **Redirection by parameter**.

:::note
Kameleoon Web Experimentation performs redirections using JavaScript. If you prefer to perform URL redirection with the HTTP response status code 302, use Kameleoon's [Feature Experimentation](https://www.kameleoon.com/en/platform/feature-experimentation) solution and an SDK.
:::

When setting up a redirection experiment, Kameleoon automatically handles the self-redirection for the original variation, which is highly recommended for the following reasons:

- **Consistency in user experience**: Redirecting the original variation ensures that all users are treated the same way, whether they are shown the control or a variant. Without this redirection, users in the original variation may experience slight delays or differences due to how variations are served, which could introduce bias into the test results. See section 9 of this [article](https://www.exp-platform.com/Documents/2009-ExPpitfalls.pdf) for more information.
- **Accurate data collection**: In redirection-based tests, failing to redirect to the original variation could cause discrepancies in how interactions are measured. For example, visitors to the original page may not experience the same tracking and reporting systems as those on the redirected variation, leading to incomplete or skewed data (see [section on SRM](#url-redirection-and-sample-ratio-mismatch)).

:::important
This process only applies when the redirection test is created in the Kameleoon app. It does **not** apply if the redirection is handled through the API. To reduce the risk of Sample Ratio Mismatch (SRM), you should duplicate the original variant and manage the self-redirection of the original variation using Kameleoon's API as well.
:::

### Global redirection

Global redirection is a simple URL redirection without further parameters.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/url-redirection-split-test/redirection-sidebar.png)

You need to type a complete URL (and not just a fragment of the URL). For example, you can indicate a global redirection from:

`http://www.website/page1`

to:

`http://www.website/page2`

You can also choose to include any query parameters in the redirect. For example, if you are redirecting users from `https://www.example.com/products?category=shoes` to `https://www.example2.com/products`, the query parameter **`category=shoes`** will be passed along to the redirection URL (`https://www.example2.com/products?category=shoes`).

### Redirection by parameter

If you want to use the same URL but with extra parameters, select **Redirection by parameter**.

Indicate the parameters to add at the end of the URL. This option can be useful if you want to change the default sorting of results on a product page, for instance.

Repeat this operation for every variation you want to test, indicating, for each, which URL visitors must be redirected to.

:::warning
In the case of a split URL A/B experiment, it’s important to correctly target your experiment. You should not use the **Presence of an element on the page** targeting option because it will significantly increase the flickering effect. Kameleoon would have to wait until the page loaded to check the presence or absence of the targeted element and then redirect visitors to a variation. For this kind of experiment, use the other targeting options (URL or advanced JavaScript condition). Likewise, if JavaScript code is used for complex redirection, keep the box **Load this JavaScript code after page has finished loading (at DOMReady)** unchecked. Also, it’s not necessary to indicate in your experiment's targeting that both pages (A and B) are relevant: page A is sufficient.
:::

## URL redirection on several pages

When a split URL A/B experiment runs on several pages (for example, every product information page), you need more features than those available in the redirection panel shown above. You often must manage the redirection with a personalized JavaScript code.

Say, for instance, you want to redirect every visitor accessing the following pages:

`http://mywebsite.com/product/sheet/technology,product,id.aspx`

to these pages:

`http://mywebsite.com/product_AB/sheet/technology,product,id.aspx`

The `technology`, `product` and `ID` parameters change according to the product information page displayed. To run this test, you must write JavaScript code to ensure that every possible case is taken into account. Here is an example:

```javascript
var url = window.location.href;
var redirect_url = url.replace("/product/", "/product_AB/");
Kameleoon.API.Core.processRedirect(redirect_url);
```

Once the JavaScript code is written, you must carefully define the target. If you want to target via a URL, you need to restrict the test to URLs containing the following fragment:

`http://mywebsite.com/product/sheet/`

:::note
Running a split URL A/B experiment on several pages implies that elements of identification are not managed as parameters but directly in the URL. The page type will not be `category.php?product=` but `/category/product.html`.
:::

Don't hesitate to consult [our developer documentation on URL redirection](https://developers.kameleoon.com/apis/activation-api-js/api-reference#processredirect)

## URL redirection and consent policy

When Kameleoon performs a redirection, certain data (such as the variation ID being exposed) must be temporarily stored in the visitor's browser to ensure proper tracking after the redirection is completed.

However, since data storage is not permitted before consent is provided, we recommend running redirect experiments only for users who have given their consent. To implement this, use the following JavaScript targeting condition in your experiment's configuration:

`return Kameleoon.API.Visitor.experimentLegalConsent || false;`

:::note
If you choose to run the experiment for users who have not provided their consent, Kameleoon will temporarily store the variation ID in session storage to maintain the initial allocation when the user reloads the page.
:::

[More about consent policy](https://developers.kameleoon.com/privacy-and-compliance/consent-management/)

## URL redirection and third-party analytics tools

### Impact on Custom Analytics Integrations

When using a custom analytics integration in a redirection experiment, data is not sent when the visitor is initially targeted since the analytics tool may not have enough time to load before the redirection occurs.

To ensure accurate tracking, Kameleoon stores the data in the browser before redirection, then sends the data after redirection (on the variation page), which ensures analytics tools receive the correct information while still allowing redirects to occur smoothly (without flickering).

### Impact on Referrer tracking

When Kameleoon performs a redirection, third-party analytics tools lose access to the original referrer `document.referrer`.

For example, if a visitor arrives at your website via a paid Facebook campaign but is immediately redirected to a variation, the referrer recorded will be the original page (before redirection)—not the Facebook campaign. _Facebook campaign → original page (before redirection) → variation page (after redirection)_

In Google Analytics 4 (GA4), this means the page's original version will always be recorded as the **referrer** when visitors are redirected to a variation.

To retrieve the correct referrer, you can either check the data in Kameleoon or use `Kameleoon.Gatherer.Referrer.obtain()` on the variation page and save the value in a custom variable on your side to ensure the correct referrer (Facebook campaign, for example) is captured.

## URL redirection and Sample Ratio Mismatch

Even though Kameleoon automatically redirects the original variation, conducting experiments involving URL redirects increases the likelihood of encountering an SRM. SRM occurs when visitors redirected to variant B fail to see the page or when data collection only takes place after page B loads. SRM results in a certain amount of data loss in variant B that would not be present on the original page. To address SRM, follow the guidelines described [here](https://help.kameleoon.com/experiment-analytics/statistical-methods/sample-ratio-mismatch/#what-to-do-when-your-experiment-is-positive-for-srm).

:::note
When configuring your experiment with a traffic allocation of original 0%, control 50%, and redirection 50%, ensure you define the new control as the reference in the Results page.
:::

## How to QA URL redirection experiments

To QA split URL experiments, open an incognito tab in your browser and follow these steps:

1. Go to your page, including the UTM parameters: `https://www.site.com?utm_param`
2. Open a new tab with the simulation.
3. Refresh the tab; you will be targeted.
4. Switch to your variation.

The redirection will then be performed.

Kameleoon tracks conversions for targeted visitors upon initial exposure and for all subsequent return visits within the attribution window. The attribution window determines the period during which visitor conversions and transactions are attributed to a specific variation. Visitor conversions are only taken into account in an experiment if the visit has been targeted by the experiment or if it falls within the attribution window.

For more information, [you can refer to this article](https://help.kameleoon.com/experiment-analytics/analyze-results/how-kameleoon-counts-conversions).

## URL redirection and SEO impact

If you're worried about the potential impact of redirection experiments on your website's SEO, or if you've noticed that your webpages have been de-indexed since starting your experiments, refer to [this](https://help.kameleoon.com/faq/#does-kameleoon-have-an-impact-on-seo-why-has-my-webpage-been-de-indexed) article.
