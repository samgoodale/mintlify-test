---
sidebar_position: 2
---

# Setting up Multivariate tests

_Watch [this video](https://academy.kameleoon.com/get-started-with-web-experimentation/164197?utm_source=user_manual&utm_medium=online) in our academy for more information on the differences between A/B and multivariate tests._

## What is a Multivariate test?

While a classic A/B test compares two versions of a page, Multivariate tests (MVT) allow for simultaneous testing of multiple variations of several page elements to determine the optimal combination for maximizing conversions. For example, an MVT can evaluate the performance of six different call-to-action buttons.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Capture-decran-2021-06-04-165718.png)

In the example, there are three colors (blue, red, orange) and two wordings: **Shop** and **Add to cart**.

You can test and compare the six possible combinations with an MVT.

## MVT Glossary

- **Multivariate test:** A multivariate test tests the conversion of one or more combinations of several elements.
- **Section:** A section is a group of several variations of an element.
- **Variation:** A variation is the suggested change for a given element. An MVT can include several variations that are gathered in sections.
- **Combination:** A combination is a collection of several variations from different sections that are displayed to exposed visitors.

## Creating a new Multivariate test

1. Click **New experiment** > **In the graphic editor**.
2. Select **Graphic MVT** from the **Experiment type** dropdown.
3. Fill in the required information and click **Continue**.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/setting-up-multivariate-tests/experiment-type.png)

## Set up your MVT sections and variations

Several variations make up a section.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/setting-up-multivariate-tests/section-a.png)

We are testing the color and wording of a CTA. There are three colors (blue, red, and orange) and two wordings: **Shop** and **Add to cart**.

You can create a first section (Section A, which we call **Color**) for colors that includes your reference version, and the variations **red** and **orange**.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/setting-up-multivariate-tests/color.png)

At the same time, you want to test the CTA's wording, and compare **Shop** with **Add to cart**. You can create a second section (Section B, which we call **Wording**), which will include your reference version and the variations **Shop** and **Add to cart**.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/setting-up-multivariate-tests/section-b.png)

Click **Create**. The Graphic editor's MVT version opens.

## The MVT editor

You can create your variations’ content the same way you would in an A/B experiment. However, the MVT editor is slightly different.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/setting-up-multivariate-tests/mvt-editor.png)

### Sections

Click a section in the left panel to select it.

Several options are available here:

- Click the **duplicate icon** to duplicate the section.
- Click the **three-dots menu** to:
  - Rename the section.
  - Delete the section.

:::note
You must have at least two sections in an MVT experiment.
:::

### Variations

The selected section’s variations are displayed in the left panel. Several options are available:

- Click the **duplicate icon** to duplicate the variation.
- Click the **three-dots menu** to:
  - Rename the variation.
  - Add custom code (JS or CSS) to the variation.
  - Preview the variation in a new tab.
  - Search and replace words on the page
  - Delete the variation.

If you delete all variations associated with a section, you will delete the section itself.

:::note
We recommend you change no more than two elements in your page (so, a maximum of two sections) with three to four variations of the element.

**Why?** For an MVT, the sections’ variations are associated to find the best combination. The more sections you create, the more traffic you need to get usable, reliable results.

To learn more about this subject, refer to our article on [statistical significance](https://help.kameleoon.com/experiment-analytics/statistical-methods/statistical-significance).
:::

Kameleoon automatically creates all possible combinations from each variation you design for a given experiment using full fractional factorial design, ensuring that all possible combinations are tested simultaneously.

## Traffic allocation

_For more information on traffic allocation in MVT experiments, watch [this vide](https://academy.kameleoon.com/how-to-finalize-your-web-experiment/175314) in our academy._

Once you have created your variations, you must finalize your experiment. You can finalize your experiment the same way as [a classic A/B experiment](https://help.kameleoon.com/experimentation/web-experimentation/graphic-based-experiments/finalizing-an-experiment). The only difference is your experiment's traffic distribution.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/setting-up-multivariate-tests/traffic-allocation.png)

### Traffic allocation for the experiment

To manage the experiment's traffic allocation, click and drag the slider next to **Exclude a percentage of the exposed visitors** to your desired percentage.

### Traffic allocation for exposed visitors

You can distribute your traffic based on sections or combinations.

#### Traffic distribution by sections

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-02-at-10.53.42%E2%80%AFAM.png)

Click **Sections** to distribute traffic by section. Check the checkbox next to a variation to include it in your experiment. To edit a variation’s traffic allocation:

- Click and drag the variation’s slider to adjust its traffic

**OR**

- Manually enter a percentage in the text field.

Click the **padlock** to prevent adjustments to a variation’s traffic allocation. Click the **padlock** again to make additional changes.

##### Example

In the example below, 30% of exposed visitors will see a red CTA and 40% will see an orange CTA.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-02-at-11.00.14%E2%80%AFAM-1536x136.png)

##### Allocate equally

Click **Allocate equally** to distribute traffic between variations equally. Clicking Allocate equally undoes your changes.

#### Traffic distribution by combination

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-02-at-11.06.55%E2%80%AFAM.png)

Click **Combinations** to distribute traffic based on the combinations you’ve created.

Suppose you want to test a CTA’s color **and** its wording. You would have two sections: **A** (color) and **B** (wording).

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/setting-up-multivariate-tests/combinations.png)

| Section A: COLOR | Section B: WORDING |
|------------------|--------------------|
| Variation A0: Original | Variation B0: Original |
| Variation A1: Red | Variation B1: Add to cart |
| Variation A2: Orange | |

The generated combinations have the following names:

- A0B0 Original / Original
- A0B1 Original / Add to cart
- A1B0 Red / Original
- A1B1 Red / Add to cart
- A2B0 Orange / Original
- A2B1 Orange / Add to cart

You can exclude combinations in the **Combinations** tab. For example, in an MVT where you changed both the background and text colors, you can exclude combinations where the background and text colors are the same.

##### Edit the traffic allocated to a combination

Check the checkbox next to a combination to include it in your experiment. To edit a variation’s traffic allocation:

- Click and drag the combination’s slider to adjust its traffic

**OR**

- Manually enter a percentage in the text field.

Click the **padlock** to prevent adjustments to a combination’s traffic allocation. Click the **padlock** again to make additional changes.

##### Allocate equally

Click **Allocate equally** to distribute traffic between variations equally. Clicking **Allocate equally** undoes your changes.

:::note
By default, the **Sections** tab is selected. The tabs are independent (editing the distribution for one of them doesn’t impact the other). The tab that is selected when you click **Launch** will be taken into account when distributing traffic.
:::

## Simulation, launch, and analysis

Once you’ve created your variations and distributed traffic, simulation, launch, and analysis are the same as in an A/B experiment.

### Simulate your MVT

We recommend simulating your experiment before going live.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot-2025-04-02-at-11.23.34%E2%80%AFAM.png)

The simulation panel generates your experiment’s combinations. Click **Currently displayed in simulation** to check the display of the combination of your choice.

Learn more about simulation in our [dedicated article](https://help.kameleoon.com/experimentation/feature-experimentation/using-the-rollout-planner/using-simulation-mode/).

### Launch the MVT

If everything is displaying correctly and your targeting, goals, and reporting tools have been set up, you are ready to launch. Click **Launch**.

### Results

If you selected Kameleoon as your reporting tool, your MVT’s results are transferred to the A/B experiment Results page. Each combination is considered a variation (as defined for classical A/B experiments).

:::note
You might experience a short latency time (up to 10 minutes) from the time you launch an A/B experiment to its visibility on your website. Don’t worry if your experiment does not appear immediately.
:::
