---
sidebar_position: 2
---

# Multi-page experiments

Multi-page experiments let you design variations that encompass modifications across multiple pages within a single experiment.

**Benefits of Multi-Page Experiments:**

- **Holistic testing:** Evaluate your changes' impact across user journeys spanning multiple pages.
- **Unified experiment management:** Create and manage variations that affect different pages within the same experiment.
- **Streamlined workflow:** Design variations for multiple pages simultaneously, minimizing the need for separate experiments.

**Creating Multi-Page Variations:**

1. Launch the Graphic editor on all desired pages.
2. Design your variations and incorporate changes for each page within the same variation.
3. Define the targeting criteria for your multi-page experiment during finalization.

:::note
Kameleoon also supports the [simultaneous selection of multiple elements on one or several pages](https://help.kameleoon.com/experimentation/web-experimentation/graphic-based-experiments/getting-started-with-the-graphic-editor/). Multiple selection enables efficient edits to elements with identical IDs or classes across multiple targeted pages. For example, you can automatically apply a change to an "Add to Cart" CTA on one page to all other "Add to Cart" CTAs on targeted pages in the experiment. 
:::

## Target pages according to their URL

Once your variations are complete, click **Finalize** to proceed to the experiment configuration.

The **Targeting** section lets you select the specific pages on which your experiment will run. Define the pages where you want to implement the changes you made in your variations.

### Several pages sharing the same URL

If you want to target more segments:

1. In the finalization flow, click **Target a segment** > **Create a new segment**.The segment creation window opens.
2. Double-click the **Page URL** condition or drag and drop to select it. You can add this condition as many times as you need.

:::note
A wide range of targeting conditions are available. For more information on targeting options, please read [this article](https://help.kameleoon.com/assets/segments/manage-targeting-segments/).
:::

1. Indicate the URL or URL fragment you want to target on your website, and specify if you want to include or exclude it.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-decran-2021-06-08-174105-1920x556.png)

Kameleoon offers three options:

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-decran-2021-06-08-174147.png)

- **Contains:** Runs the test on all URLs containing a URL fragment.
- **Corresponds exactly to:** The test will only run on the URL you choose. If your URL contains changing parameters, use the **Matches the regular expression** option.
- **Matches the regular expression:** If your A/B test runs on a group of pages with specific parameters. For example: `?x=exemple&y=exemple2`.

Let’s take this regular expression as an example:

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-decran-2021-06-08-174330-1920x589.png)

The regular expression above requests Kameleoon to run the test on pages containing the path `mywebsite.com/article/january` and the parameter `x=y`.

Among the five following examples, only the first two URLs will be taken into account by the A/B test:

`http://www.mywebsite.com/article/january?x=y`
`https://mywebsite.com/article/january?a=b&x=y&c=d`
`http://www.mywebsite.com/article/january`
`http://www.mywebsite.com/article/january/?x=y`
`http://www.mywebsite.com/article/january/monday?x=y`

Explanation:

- The third URL does not contain the `x=y` parameter
- The fourth URL contains a `/` after `january`
- The fifth URL has `monday` added at the end.

### Several pages with the same URL fragment

To target several pages containing the same URL fragment, you can launch the test for a **Specific advanced segment** and follow the steps above, or choose to launch the test on **URLs containing a specific fragment** in the drop-down menu.

If, for instance, you want to change the color of the "Add to basket" button on each of your product pages, and all these pages' URLs contain one identical fragment, you should use this targeting option:

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/multi-page-experiments/target-by-webpage.png)

When you have selected **URLs containing a specific fragment**, a new field appears where you can enter the fragment of your choice.

If all of your pages contain the `/product/` fragment, choose **URLs containing a specific fragment**. The A/B test will only apply to pages containing this fragment.

### From an element on the page

Kameleoon's URL targeting feature may not work for your test targeting for two reasons:

- All the URLs are different.
- You want to test the last step of a process (for example, registration or booking) containing **several** steps, but only **one** URL. Targeting the URL would include all steps in the A/B test, so, in this case, URL targeting doesn't work.

To address potential issues with dynamic page content and ensure accurate targeting, Kameleoon offers the **Presence of an element on the page** feature.

1. Create a new segment within your experiment.
2. Select the **Technical** category > **Element on the page**. 
3. Define the specific element that should be present on the page for visitors to be included in the experiment.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-decran-2021-06-08-174842.png)

If your page contains a unique element (particularly in the case of a multi-step process with the same URL), you can use this method to target your test. To do so, indicate the HTML element's ID or the CSS selector to define the element.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-decran-2021-06-08-174926.png)

:::note
For optimal performance, choose an element located near the page's top when using **Presence of an element on the page**. Placing the element lower on the page increases the likelihood of flickering, as Kameleoon waits for the element to load before triggering the experiment.
:::

### On the whole website

You can also launch the test on all of your website's pages.

To do so, select **the entire site** when you choose your target audience.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/multi-page-experiments/target-entire-site.png)
