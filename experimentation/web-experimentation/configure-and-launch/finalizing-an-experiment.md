---
sidebar_position: 1
---

# Finalizing an experiment

_Watch [this video](https://academy.kameleoon.com/get-started-with-web-experimentation/164197?utm_source=user_manual&utm_medium=online) in Kameleoon's academy for more information about the differences between A/B and multivariate tests._

## Access the finalization page

Once you create your variations, you are ready to launch your experiment.

In the header's right side, click **Finalize**, which opens the finalization page where you complete the following steps before you launch:

![](../../../images/experimentation/web-experimentation/graphic-based-experimentation/finalizing-an-experiment/finalize.png)

- [Define targeting](#define-targeting)
- [Allocate traffic to variations](#distribute-traffic)
- [Define goals](#define-goals) _(mandatory, unless you configure Integrations)_
- [Associate integrations](#set-up-reporting-tools) _(mandatory, unless you configure Goals)_
- [Simulate your experiment _(optional)_](#simulate)

On the finalization page, you can also:

- Estimate an experiment's duration
- Schedule an experiment

## Define targeting

Defining targeting is the first step in finalizing your A/B experiment. For more information on defining your experiment's targeting, refer to [this article](https://help.kameleoon.com/experimentation/web-experimentation/configure-and-launch/define-your-experiments-targeting/).

## Distribute traffic

The second step is traffic allocation. By default, Kameleoon distributes traffic evenly among your variations, but you can change this setting.

![](../../../images/experimentation/web-experimentation/graphic-based-experimentation/finalizing-an-experiment/traffic-allocation.png)

In the example above, Kameleoon shows 33.33% of visitors Variation 1, 33.33% Variation 2, and 33.33% the Original variation.

To change the traffic allocation:

- Click and drag the slider next to a variation.

**OR**

- Click the number to the right of a slider and enter your desired percentage.

Click **Next** to validate this step.

### Excluded traffic

Kameleoon automatically attributes any traffic that you don't assign to a variation to **Excluded traffic**. These visitors see your page's original version.

### Equal allocation per variation

Specify the percentage of traffic you want to divert to experiment variations.

For example, with three variations, a 75% diversion percentage allocates 75% of traffic to the variations and 25% to the original page. Kameleoon then displays each variation equally (25% of the time).

### Different allocation per variation

To allocate different traffic percentages to each variation, use the sliders to adjust the desired percentage for each.

![](../../../images/experimentation/web-experimentation/graphic-based-experimentation/finalizing-an-experiment/different-traffic.png)

You can also click the percentage and enter the value you want to apply to the variation.

At any time, you can return to an equal distribution between the variations. Click **Allocate equally**, located just below the list of variations.

### Allocation method

![](../../../images/experimentation/web-experimentation/graphic-based-experimentation/finalizing-an-experiment/traffic-allocation.png)

Select your experiment's traffic allocation method from the dropdown. You can choose one of the following options:

- **Manual:** You manually set a static traffic allocation for your visitors.
- **Multi-armed Bandit:** Kameleoon automatically adjusts your traffic allocation based on your variations' performance.
- **Contextual Bandit:** Kameleoon personalizes variations based on specific visitor attributes and dynamically selects the best variation for each visitor.

:::note
**Contextual Bandit** requires the **Contextual Bandit and AI Targeting** add-on. Contact your Customer Success Manager for more information.
:::

#### Contextual bandits

Contextual bandits dynamically optimize traffic allocation in experiments using machine learning. They adapt in real-time to redistribute traffic based on variation performance and user context to maximize effectiveness.

Key differences exist between multi-armed bandits and contextual bandits. Understanding these differences is critical for choosing the best method for your experiments:

- **Multi-armed bandits:**
  - Optimize traffic distribution among multiple variations (arms) to maximize a defined goal, such as click rates or conversions.
  - Treat all users equally; the system makes no distinction based on user attributes.
  - Ideal for scenarios where user-specific data is unavailable or unnecessary, and the focus is on finding the best-performing variation for the overall audience.
- **Contextual bandits:**
  - Incorporate additional user-specific data, like device type, location, or behavior, into decision-making.
  - Allow more personalized decisions, tailoring variations to specific users for improved outcomes.
  - The variability introduced by user attributes allows contextual bandits to optimize decisions in dynamic environments.

Multi-armed bandits optimize traffic allocation uniformly across users, while contextual bandits leverage contextual data to make personalized decisions.

If you would like more details on how Kameleoon’s contextual bandits work, read Kameleoon's [Statistical paper](../../../pdf-assets/statistics-at-kameleoon.pdf).

##### Configuring contextual bandits

To enable contextual bandits:

1. Navigate to the **Finalization** panel.
2. Click **Traffic allocation**.
3. Click the dropdown menu beneath **Select the allocation method** > **Contextual bandit**.

![](../../../images/experimentation/web-experimentation/graphic-based-experimentation/finalizing-an-experiment/contextual-bandit.png)

By default, the algorithm begins optimizing traffic based on predefined user attributes available in Kameleoon.

However, to fully leverage the power of contextual bandits—especially with the Contextual Bandit Premium feature included in the AI Predictive Targeting add-on (paid or trial)—you can provide custom data as additional input to the machine-learning model. Custom data allows the algorithm to make even more accurate predictions by incorporating business-specific attributes (for example, CRM segments, purchase history, in-app behavior).

To activate the use of custom data in your experiment:

- Go to your custom data configuration panel.
- Enable **Use this custom data as input for AI Predictive Targeting**.

Once enabled, Kameleoon’s algorithm uses these attributes as part of the decision-making process to deliver the most relevant variation to each visitor.

To learn more about AI Predictive Targeting, read our article on the subject [here](https://www.kameleoon.com/blog/\kameleoon-predicttm-your-visitors-enjoy-experiences-customized-their-purchase-intention).

### Advanced reallocation

:::note
Advanced reallocation is only available for **online** experiments.
:::

The **Advanced reallocation** feature allows you to redistribute traffic among variations in your experiment. When applied, Kameleoon resets the traffic allocation, and visitors who previously saw a specific variation are treated as new visitors. This feature is useful when you want to focus on a subset of variations or exclude certain variations from receiving further traffic.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-décran-2024-12-18-à-16.00.01.png)

Click the **Advanced reallocation** option located at the top-right of the traffic distribution step. In the panel that appears, choose which variations will be part of the reallocated traffic.

![](../../../images/experimentation/web-experimentation/graphic-based-experimentation/finalizing-an-experiment/advanced-reallocation.png)

This reallocation becomes effective once you click **Reallocate** and then click **Save** in the top-right of the page.

## Define goals

_This step is mandatory unless you configured an integration (reporting tool)._

Select one or several goals to activate Kameleoon as a reporting tool.

### Available goals

To use Kameleoon as a reporting tool, you must define a conversion goal. A goal is the metric you want to improve with your A/B experiment.

Several goals are available:

- **Engagement:** Achieved if the visitor visits other pages after the landing page.
- **Click tracking:** Achieved if the visitor clicks on a specific element you defined.
- **Scroll tracking:** Achieved if the visitor scrolls beyond a specific part of your page.
- **Access to a page:** Achieved if the visitor reaches a page of your choice.
- **Number of pages viewed:** Achieved if the visitor visits a certain number of pages.
- **Time elapsed:** Achieved if the visitor spends a predefined amount of time on your website.
- **Custom goal:** For more complex goals, you can create custom goals via a [Kameleoon API](https://developers.kameleoon.com/apis/activation-api-js/api-reference/) call.

### Create a new goal

To learn how to add a new goal, [read this article](https://help.kameleoon.com/assets/goals/create-a-goal/).

### Associate a goal to your experiment

Once you create a goal, you need to associate it with your experiment.

1. Click **Goals** in the Finalization page.
2. Find your goal and click it.
3. Click **Next** to validate this step.

## Set up reporting tools

_This step is mandatory unless you configured a goal._

### Add a new integration

To learn how to add a new integration, [see this article](https://help.kameleoon.com/integrations/integrations-overview/).

### Activate an integration on an experiment

Once you add a reporting tool to your list of integrations on the **Integrations** page, you can associate it with a campaign.

To do this:

1. Click **Integrations** in the Finalization page.
2. Find your desired tool and click it.
3. Click **Next** to validate this step.

## General settings

You can find your experiment's general settings here. This menu consists of the following sections:

- Main information
- Experiment code
- Experiment custom script
- Advanced settings

### Main information

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-11.23.26 AM.png)

Here, you can manage your experiment's main information. You can specify the URL that the editor loads, your experiment's tags, and its hypothesis.

### Experiment code

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-11.26.12 AM.png)

Here, you will find your experiment's general code. Kameleoon applies this code to each of your experiment's variations. Click the toggle to add this code to the original variation.

### Experiment custom script

The JavaScript code added in this section lets you write global code that applies specifically to the experiment. This code runs alongside Kameleoon’s global script, ensuring that the system automatically removes all changes when the experiment ends.

Additionally, this script executes **before** both the Experiment and Variation code, and it runs regardless of any targeting conditions you’ve set, meaning it always executes as soon as Kameleoon loads.

### Advanced settings

Here, you can access your experiment's advanced settings.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-01-at-11.52.36 AM.png)

#### Custom attribution window

Use this section to define an attribution window in days and hours. The attribution window is the time period during which a visitor's conversions and revenue are linked to a specific variation. By default, the attribution window is set at the website level, but you can customize it below before launching your experiment. Learn more about custom attribution windows [here](https://help.kameleoon.com/experiment-analytics/analyze-results/how-kameleoon-counts-conversions/).

#### Display limits

Refer to [this article](https://help.kameleoon.com/experimentation/web-experimentation/code-based-experiments/using-the-code-editor/#add-a-display-limit) for information on creating a display limit.

You can set up display limits in **Advanced settings** or the **Variation** menu. The **Advanced settings** section provides an overview of all limits you've configured, regardless of where they were set.

#### JavaScript code options

Enable this option to load the experiment's JavaScript code after the page loads.

This option ensures that all page elements are fully loaded before executing JavaScript code, preventing conflicts and improving performance. It avoids issues with dynamic content or scripts running too early, which can be helpful if your variations depend on elements that load after the initial page render.

## Simulate

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-décran-2023-11-20-à-16.15.27.png)

Simulation mode allows you to check if:

- Your variations or personalizations display correctly.
- Your campaign's targeting is configured correctly, and if not, understand why.
- The goals you have defined convert.
- Your different visitors see the right content at the right time.

For more information about simulation, [read this article](https://help.kameleoon.com/web-personalization/simulate-a-campaign).

## Estimate an experiment's duration

In the finalization panel of the editor, you can estimate an experiment's duration.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-décran-2023-11-09-à-16.12.11.png)

To do this, you must provide certain information:

- **Average number of visitors per day** visiting the tested pages - _This is the amount of visitors your test will target daily across all the test's variations._
- **Current conversion rate** of the goal (which will be used as a reference) - _This is an estimation of the current conversion rate of the main goal of the experiment you are trying to improve._
- **Minimum Detectable Effect** (MDE) - _This is the smallest change in the goal metric you aim to identify. It's calculated relative to the control variation's mean. For example, with a control conversion rate of 1%, a 5% MDE means you can detect if the rate falls below 0.95% or rises above 1.05%._
- **Desired reliability rate** (by default, it's 95%, but you can change its value) - _This setting lets you balance the risk of detecting an improvement which is not real - a false positive result. A common value is 95%. Increasing this parameter will lower your risk of getting a false positive result at the cost of increasing the required number of visitors needed to detect the same change._

:::note
This is an estimation; once your experiment is launched, the reliability index will inform you if your results are reliable. For more information, you can consult our documentation on the [Results page](https://help.kameleoon.com/experiment-analytics/analyze-results/access-the-results-page/).
:::

_The estimator automatically accounts for the traffic allocation and the number of variations._

:::note
You can also use our free [A/B testing duration calculator](https://www.kameleoon.com/ab-testing-calculator) to get a more precise estimate based on your traffic and conversion goals.
:::

## Launch

### Launch immediately

When you complete all mandatory finalization steps, a green check icon appears.

![](../../../images/experimentation/web-experimentation/graphic-based-experimentation/finalizing-an-experiment/checkmarks.png)

We strongly recommend simulating your experiment, but it's not mandatory. Simulating checks your variations' display, your experiment's targeting, and whether the defined goals lead to conversions.

When you are satisfied with your variations and experiment, click **Launch**.

A **Configuration summary** panel allows you to check your experiment settings.

![](../../../images/experimentation/web-experimentation/graphic-based-experimentation/finalizing-an-experiment/summary.png)

To modify settings, click a configuration option > **Edit**. When you are satisfied with your settings, click **Launch** in the bottom-right.

Your experiment is now online.

:::note
There may be a short latency time (up to 10 minutes) between the launch of an A/B experiment and its visibility on your website. Don't worry if your experiment does not appear immediately.
:::

### Schedule

You can schedule your experiment by defining a starting date, an ending date, or both.

To do so, click the **three-dots** menu > **Schedule**:

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-décran-2023-11-22-à-12.20.35.png)

**Or** click **Schedule** at the bottom of the **Configuration summary**.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-décran-2023-11-22-à-12.16.43-3.png)

A panel opens allowing you to schedule your experiment.

**Advanced schedule** allows you to set the experiment time zone and/or automate the experiment's conclusion. Automatic stops can trigger when the reliability rate reaches and stabilizes at the configured value, or when the experiment reaches a defined traffic threshold.

You should avoid setting an end date for A/B experiments before launch. The confidence rate is the primary indicator of whether an experiment can be stopped or should continue before conclusive results are obtained. However, defining an end date can be beneficial for experiments tied to specific events or timeframes. Regardless of whether an end date is set, always review the confidence rate before analyzing experiment results.

:::note
Once your experiment's scheduled end date is reached, the experiment will be **paused**, not stopped. You can easily resume the experiment whenever you'd like.
:::