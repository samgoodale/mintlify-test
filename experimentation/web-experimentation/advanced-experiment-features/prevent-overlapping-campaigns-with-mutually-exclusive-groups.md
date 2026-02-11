---
sidebar_position: 1
---

# Prevent overlapping campaigns with Mutually Exclusive Groups

This article covers how Mutually Exclusive Groups (MEGs) work, why they’re essential for reliable analysis, and how to set them up in Kameleoon.

Running multiple campaigns can lead to overlapping effects, especially when multiple teams experiment on the same area of the website. Kameleoon’s Mutually Exclusive Group solves this by letting you group experiments, so each visitor is exposed to only one experiment within each group. This feature leads to cleaner insights and a better experience for every visitor.

:::note
This article is for **web experiments**. To read about how to use Mutually Exclusive Groups for **feature experimentation** instead, refer to [this](https://help.kameleoon.com/experimentation/feature-experimentation/create-and-manage-flags/mutually-exclusive-groups-for-feature-experiments/) article.
:::

## What is a Mutually Exclusive Group?

The Mutually Exclusive Group feature in Kameleoon lets users create groups of campaigns where each visitor can only be targeted by one campaign within that group. This feature is particularly helpful when you have multiple campaigns that may conflict with each other.

## Key benefits

A Mutually Exclusive Group prevents overlapping campaigns from interfering with each other.

Benefits include:

- **Clearer results:** Avoids conflicting data by ensuring visitors see only one campaign within each group.
- **Better user experience:** Reduces visitor fatigue from being exposed to multiple changes, creating a smoother experience.

## Example of a Mutually Exclusive Group

Imagine you have two groups of campaigns targeting your website’s homepage:

- **Group A:** Campaign 1 (new homepage layout) and Campaign 2 (highlighted “Buy Now” button)
- **Group B:** Campaign 3 (simplified navigation) and Campaign 4 (updated product descriptions)

With a mutually exclusive setup:

- A visitor will see either Campaign 1 or Campaign 2 from Group A, but not both.
- The same visitor may see either Campaign 3 or Campaign 4 from Group B, but not both.

This setup ensures that visitors are not exposed to multiple conflicting changes within each group, allowing more precise measurements.

To maintain a consistent experience, if a visitor was previously assigned to an experiment within a group, they will remain assigned to the same experiment. Otherwise, the campaign displayed within the group is chosen randomly, ensuring an even distribution among the campaigns in that group.

### Cross-group exposure

Mutually Exclusive Groups only prevent overlap **within** the same group. Kameleoon can expose visitors to one campaign from Group A **and** one campaign from Group B simultaneously.

For example, a visitor could experience any of these combinations:

- Campaign 1 (from Group A) **and** Campaign 3 (from Group B)
- Campaign 1 (from Group A) **and** Campaign 4 (from Group B)
- Campaign 2 (from Group A) **and** Campaign 3 (from Group B)
- Campaign 2 (from Group A) **and** Campaign 4 (from Group B)

To maintain a consistent experience, if a visitor was previously assigned to an experiment within a group, they will remain assigned to the same experiment. Otherwise, the campaign displayed within the group is chosen randomly, ensuring an even distribution among the campaigns in that group.

## Setting up a Mutually Exclusive Group

1. **Define the campaign group:** Decide which campaigns should be mutually exclusive. For example, you may want all homepage layout changes to be grouped.
2. **Tag the campaign:** Follow the naming convention `“ME-GROUP-\{GROUP NAME}”` to tag each campaign in the group, such as `ME-GROUP-A`. This naming tells Kameleoon to treat the campaigns within each group as mutually exclusive.

As a result, visitors can see only one campaign from each mutually exclusive group, avoiding overlap and ensuring more accurate results.

:::note
Note that Mutually Exclusive Groups are disabled in simulation mode.
:::

