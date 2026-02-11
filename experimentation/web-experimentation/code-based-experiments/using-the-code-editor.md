---
sidebar_position: 1
---

# Using the Code editor

_Watch [this video](https://academy.kameleoon.com/get-started-with-web-experimentation/164379?utm_source=user_manual&utm_medium=online) for more information about using the Code editor._

**In this article:**

- An overview of the Code editor's interface and main features.
- Step-by-step instructions for creating variations using the Code editor, including working with HTML, CSS, and JavaScript code.
- Tips for optimizing your variations for maximum impact.
- Best practices for testing and validating your variations before launching your experiment.

## User benefits

With the Kameleoon Code editor, you can create, launch, and manage code-based experiments without using the Graphic editor. Inject JavaScript or CSS code directly into your variations and save time.

## Access the Code editor

### From the Experiments dashboard

Click **New experiment** in your Experiments dashboard > **With the code editor**.

![](../../../images/experimentation/web-experimentation/code-based-experimentation/using-the-code-editor/with-the-code-editor.png)

Then, you can name your test and associate it with a website and page URL.

## Structure of the Code editor

Our Code editor has the following structure:

- **Header**: Displays the experiment's name and status. Also includes the **Simulate** and **Launch** buttons.
- **Variation panel**: Lists variations and lets you add new ones. Each variation is selectable for editing.
- **Code area**: You can edit JavaScript (JS) or CSS code specific to the selected variation. Includes tabs to toggle between JS and CSS.
- **Left sidebar:** Includes criteria that you must define before launching your experiment and general settings.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-9.38.33 AM-1.png)

## Header

### Experiment information

The header displays the main information associated with the experiment:

- its name
- its status
- the last interaction (for example, last save, update, date of launch).

Hover over the **?** icon to access additional information about the experiment.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-9.54.16 AM.png)

You can check your experiment's status and ensure your changes were saved. Two types of saving are available:

- **Automatic**, when the experiment's status is draft, scheduled, or paused.
- **Manual**, for online and diverted experiments (via the green button in the **Finalize** tab).

### Header actions

#### Simulate

We strongly recommended simulating your Developer A/B experiment to confirm your experiment displays and functions correctly. To simulate your experiment, click **Simulate** to open simulation mode in a new tab.

#### Schedule

To schedule your experiment:

1. Click the **three-dots menu** to the right of **Simulate** > **Schedule.**
2. Specify a start date, an end date, or both.
3. Configure **Advanced schedule** options if necessary.
4. Click **Schedule** to confirm your schedule's creation.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-décran-2025-01-16-à-17.04.36.png)

Click **+Add a schedule** to add multiple schedules to your experiment.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-10.09.38 AM.png)

#### Estimate the duration

To estimate the amount of time it will take for your experiment to obtain exploitable results:

1. Click the **three-dots menu** to the right of **Simulate** > **Estimate the duration.**
2. Specify the required information.
3. Click **Calculate.**

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-10.14.08 AM.png)

## Variations panel

### Insert your code

You can add, modify, or remove code in the JS and/or CSS fields (select the corresponding tab: **JS** or **CSS**) for all variations.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-10.16.46 AM.png)

In the top right of the code window is an expand option. Click this button to expand the code area.

You can also split the code window into two, either vertically or horizontally, using dedicated buttons. Click the button again to restore the default view.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-10.20.31 AM.png)

Click **Add variation** to add a new variation. Click the **chevron** to add a **code variation** or a **URL redirection**.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-10.23.08 AM.png)

Our code editor provides you with several features:

- **JavaScript auto-complete**: When you start typing, the editor will display a drop-down list of suggested auto-completion options, letting you pick your desired method, parameter, or variable. Hover information and method signature information is also shown, so you can complete your code with fewer errors.
- **Syntax error detection**: Code syntax errors are underlined, and a hover window will show you more information about the error.
- **CSS color selection**: In the CSS editor, a pop-up color selector lets you automatically fill in your RGBA values.

Kameleoon provides an API and several recommended features for writing your JavaScript code. Note that Kameleoon does not include jQuery; instead, it uses the version already present on your website. Since Kameleoon may load before jQuery, you must ensure jQuery is fully loaded before running your variation’s JavaScript code. To check if jQuery has loaded, use the following code:

```javascript
Kameleoon.API.Core.runWhenConditionTrue(function(){
 return typeof jQuery != "undefined"; 
 //allows to check that jQuery is loaded. Returns True if it is, or False otherwise. Kameleoon will execute this condition again every 200ms.
 
}, function(){
 //Enter here the code you want to execute in your variation. For example if you want to change the text of a block and this block has the id "block-2345", you can use the following Kameleoon API function
 
 Kameleoon.API.Core.runWhenElementPresent("#bloc-2345", function(){
 
 //Enter here your JavaScript code
 jQuery("#bloc-2345").text("My new text");
 
 });
 
}, 200);
```

:::note
JavaScript code does not run directly in the editor. To preview your modification, simulate your experiment.
:::

If you want more information about `Kameleoon.API.Core`, you can read our documentation for developers:

- [Find out more about the `runWhenElementPresent()` method](https://developers.kameleoon.com/apis/activation-api-js/api-reference#runwhenelementpresent)
- [Find out more about the `runWhenConditionTrue()` method](https://developers.kameleoon.com/apis/activation-api-js/api-reference#runwhenconditiontrue)

### Variation menu

Click the **three-dots menu** to display the variation menu.

You can:

- Rename a variation
- Preview a variation
- Add a display limit
- Delete a variation

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-10.29.14 AM-1.png)

Changes made in this menu only apply to the selected variation.

#### Rename variation

Click **Rename variation** to edit a variation's name. Type its new name and click the **X** icon or press **enter** to confirm.

#### Preview

Click **Preview variation** to open your variation in a new tab and check its display.

#### Add a display limit

Click **Add a display limit** to control how often a variation is shown. Enable any limits you'd like. Hover over the **?** icon to display a tooltip providing more information about a limit.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-11.06.32 AM.png)

Click **Save** to confirm your choices.

#### Delete

Click **Delete variation** > **Yes** to delete a variation. You cannot delete the final variation: you must have at least one variation in your experiment.

#### Duplicate

Click the **duplicate icon** to the right of the **three-dots menu** to generate a copy of the variation.

## Left sidebar

In the left sidebar, you'll find the criteria you must define before launching your experiment. You cannot launch your experiment without completing these steps.

### Finalization steps

The steps are the same as in the Graphic editor:

- Targeting
- Traffic allocation
- Goals
- Integrations

Click each of these sections and define the required criteria. A green checkmark will appear next to the sections when you've completed them, and the **Launch** button turns blue.

[Learn more about these Finalization steps](https://help.kameleoon.com/experimentation/web-experimentation/graphic-based-experiments/finalizing-an-experiment/#access-the-finalization-page)

### General settings

You can find your experiment's general settings here. This menu consists of the following sections:

- Main information
- Experiment code
- Experiment custom script
- Advanced settings

#### Main information

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-11.23.26 AM.png)

Here, you can manage your experiment's main information. You can specify the URL that the editor loads, your experiment's tags, and its hypothesis.

#### Experiment code

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-11.26.12 AM.png)

Here, you will find your experiment's general code. Kameleoon applies this code to each of your experiment's variations. Click the toggle to add this code to the original variation.

#### Experiment custom script

The JavaScript code added in this section lets you write global code that applies specifically to the experiment. This code runs alongside Kameleoon’s global script, ensuring that all changes are automatically removed when the experiment ends.

Additionally, this script executes **before** both the Experiment and Variation code, and it runs regardless of any targeting conditions you’ve set, meaning it will always execute as soon as Kameleoon loads.

#### Advanced settings

Here, you can access your experiment's advanced settings.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-11.52.36 AM.png)

##### Custom attribution window

Use this section to define an attribution window in days and hours. The attribution window is the time period during which a visitor's conversions and revenue are linked to a specific variation. By default, the attribution window is set at the website level, but you can customize it below before launching your experiment. Learn more about custom attribution windows [here](https://help.kameleoon.com/experiment-analytics/analyze-results/how-kameleoon-counts-conversions/).

##### Display limits

[Read the above section on display limits.](#add-a-display-limit)

You can set up display limits in **Advanced settings** or the **Variation** menu. The **Advanced settings** section provides an overview of all limits you've configured, regardless of where they were set.

##### JavaScript code options

Enable this option to load the experiment's JavaScript code after the page loads.

This option ensures that all page elements are fully loaded before executing JavaScript code, preventing conflicts and improving performance. It avoids issues with dynamic content or scripts running too early, which can be helpful if your variations depend on elements that load after the initial page render.
