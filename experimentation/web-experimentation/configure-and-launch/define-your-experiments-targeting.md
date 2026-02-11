---
sidebar_position: 2
---

# Define your experiment's targeting

The first step in finalizing your experiment is setting up targeting.

In Kameleoon, targeting is defined by a:

- **Segment:** _Who_ will be targeted.
- **Trigger:** _When_ they will be targeted.

You must configure both before you launch your experiment.

When you open the **Targeting** page, the trigger is automatically set to the website URL you specified when creating the experiment.

You can see a summary of your current targeting settings in the **Summary** panel at the top of the page.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-de%CC%81cran-2025-08-13-a%CC%80-16.36.09.png)

## Defining a segment

Use the **Segments** panel to choose who will be included in your experiment.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-de%CC%81cran-2025-08-13-a%CC%80-16.37.01.png)

### All visitors

Target all visitors without any restrictions.

### Target a segment

Select an existing segment you've already created in Kameleoon.

You can also click **Create a new segment** to open the Segment Builder. For detailed instructions, refer to [this](https://help.kameleoon.com/assets/segments/create-a-segment/) article.

## AI-powered targeting

Use **AI Predictive Targeting** to reach visitors most likely to convert—without manually creating a segment.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-de%CC%81cran-2025-08-13-a%CC%80-16.38.17.png)

## Target specific visitors

You can quickly create a one-off segment for a specific experiment. The segment will not appear in your main segment list.

Choose one or more targeting conditions and fill in the required fields. You can add or remove conditions as needed.

**Available targeting conditions include:**

- Likelihood to convert
- Device type
- IP geolocation
- Browser cookie
- Segment
- Visitor type

## Edit or reset a segment

From the **Summary** panel, click **Edit** to modify the segment, or **Reset** to revert to **All visitors**.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-de%CC%81cran-2025-08-13-a%CC%80-16.39.35.png)

## Targeting a deprecated segment

If a legacy segment contains a Trigger condition, it will be marked as deprecated.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-de%CC%81cran-2025-08-13-a%CC%80-16.39.41.png)

You can still use the segment, but you cannot set a separate trigger to avoid conflicts.

For more information, refer to [this](https://help.kameleoon.com/assets/segments/update-your-segments-and-triggers-for-better-targeting/) article.

## Defining a trigger

Use the **Triggers** panel to specify _when_ your visitors should be targeted.

By default, new experiments have a trigger based on the website URL entered when the experiment was created.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-de%CC%81cran-2025-08-13-a%CC%80-16.40.21.png)

### When a web page is reached

Trigger the experiment when visitors access pages that match the specified URL criteria.

#### A specific page

You can target visitors based on the exact URL of the page they're visiting.

Specify the page's URL in the text box. When you select this option, the targeting will apply **not only to the specified URL**, but also to **any version of the URL that includes parameters** (for example, query strings). So, if a visitor is on the specified URL with any additional parameters, they will still be targeted.

For example, targeting `www.example.com/product` will also match `www.example.com/product? ref=homepage`.

#### The URLs containing a specific fragment

You can target visitors who are on a page whose URL contains a specific fragment.

Specify the fragment in the text field. This option is useful when you want to include multiple pages or variations of a URL without listing each one individually. For example, targeting the fragment `/product` will match URLs like `www.example.com/product/123`, `www.example.com/category/product?`, or `www.example.com/product review`. 

#### The URLs of all modified pages

_(Available only for experiments created with the Graphic editor)_

You can target the pages you have modified in your experiment. When you select this option, the campaign will apply to the URLs of all pages where changes have been made, based on the modifications configured in the editor.

#### The entire site

If you want your campaign to run across all of your site’s pages, select **The entire site**. When you select this option, every page within the project scope will be included, regardless of the URL structure or parameter.

:::note
Only use this option when your campaign is relevant across the entire site.
:::

#### When a specific trigger occurs

Select an existing trigger from your list or click **Create a new trigger**. For detailed steps, refer to [this](https://help.kameleoon.com/assets/triggers/create-a-trigger/) article.

#### When a combination of triggers occurs

Create a one-off trigger for this experiment only.

To configure this option, select a targeting condition from the list and fill out its fields.

You can also add another condition or remove the one you don't need by clicking the corresponding buttons.

**Available targeting conditions include:**

- Trigger
- Visited URL
- JavaScript code
- Custom event
- Browser cookie

## Edit or reset a trigger

In the **Summary** panel, click **Edit** to change the trigger or **Reset** to revert to **A specific page** (pre-filled with your experiment URL).

Next, continue to the finalization flow by distributing your experiment's traffic.

:::note
To accurately simulate targeting that includes targeting, use [the updated simulation mode](https://help.kameleoon.com/experimentation/feature-experimentation/using-the-rollout-planner/using-simulation-mode/).
:::
