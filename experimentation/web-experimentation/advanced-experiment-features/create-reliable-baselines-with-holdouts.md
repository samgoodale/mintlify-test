---
sidebar_position: 3
---

# Create reliable baselines with Holdouts

In a multi-campaign environment, understanding the true impact of changes can be challenging, especially when experiments overlap.

Kameleoon’s Holdouts solve this by creating a control group that remains unaffected by any active campaigns. This feature lets you establish a reliable baseline, so you can measure the aggregate impact of all changes against a group that experiences no modifications. In this article, we’ll explore how holdouts work, why they’re valuable for meaningful analysis, and how to set them up in Kameleoon.

:::note
This article explains holdouts for Web Experimentation. To use holdouts for **Feature Experimentation** refer to this [help doc](https://help.kameleoon.com/experimentation/feature-experimentation/create-and-manage-flags/create-and-manage-holdouts/).
:::

## What is a Holdout?

A holdout is a control group in Kameleoon that does not see any experiments or changes. It’s used to create a baseline against which you can measure the overall impact of all active experiments. Rather than comparing individual test groups, a holdout lets you measure the cumulative effect of all changes on user engagement or other metrics.

## Key benefits

In a typical A/B test, you compare users who see a single experiment against those who don’t. However, when multiple experiments are running, the results may overlap and impact each other, making it difficult to see the overall effect of the changes. A holdout solves this by:

- **Providing a Baseline:** The holdout group receives no experiments, creating a clear point of comparison.
- **Measuring Aggregate Impact:** With a holdout, you can see if the total impact of your changes is positive by comparing it to a group that sees none of them.

## Example of a Holdout

Imagine an e-commerce site running three experiments: changing button colors, updating product images, and adding a “Top Picks” section. The holdout group would:

- See the original versions of each of these elements (no changes applied).
- Act as a baseline to understand if the cumulative effect of these changes actually improves conversion rates or engagement.

## Setting up a Holdout in Kameleoon

1. **Create a new experiment:** Set up an experiment in Kameleoon and apply the “HOLDOUT” tag.
2. **Set traffic split:** Split your traffic so that one group (Control) sees no experiments, and the other (Variation) can be assigned to any experiment (as long as they meet the targeting criteria).
3. **Add goals:** Define the goals you want to track in the experiment. These goals will be essential for comparing the holdout group's performance against visitors who are not in the holdout.
4. **Launch your experiment:** Once the holdout experiment is created and launched, no further setup is needed. Simply monitor its performance over time by checking the Results page of the experiment tagged as holdout.

Your control group, which does not see any changes, becomes your baseline to measure the overall impact of the experiments displayed to the variation group.

## Best practices

- **Traffic allocation:** We recommend creating a holdout with a maximum of 10% excluded traffic over a limited period, typically three to six months. This allocation ensures a reliable baseline without heavily impacting overall traffic.
- **Simple segmentation:** You can set up multiple holdout groups for different segments, such as one for desktop and another for mobile. However, it’s best to avoid overly complex targeting rules for a holdout to maintain clarity and effectiveness.
