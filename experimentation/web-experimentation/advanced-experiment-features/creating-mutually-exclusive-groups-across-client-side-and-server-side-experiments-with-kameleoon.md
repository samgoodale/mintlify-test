---
sidebar_position: 2
---

# Creating mutually exclusive groups across client-side and server-side experiments with Kameleoon

Managing mutually exclusive experiments is a common need when multiple experiments run in parallel. But what happens when some of these experiments are triggered client-side (via **Kameleoon Web Experimentation**) and others are triggered server-side (via **Kameleoon Feature Experimentation**)?

This is a more advanced use case, but one that Kameleoon supports with the right setup. In this article, we’ll walk you through how to configure a mutually exclusive setup that spans both technologies.

## The scenario

Suppose you want to run **three mutually exclusive experiments**:

- **Two experiments** are triggered **client-side** using Kameleoon Web Experimentation (JavaScript-based).
- **One experiment** is triggered **server-side** using Kameleoon Feature Experimentation (for example, via a backend SDK).

The challenge here is ensuring that visitors are **only exposed to one** of these experiments—even though they’re activated through different technologies and at different stages in the user journey.

### Handling this use case

To ensure mutual exclusivity across both client-side and server-side experiments, follow these steps:

#### 1. Start with the feature experiment

Since the feature experiment is triggered **server-side** and requires early targeting (before page load), it’s best to allocate traffic to it first.

- Create your **Feature Experiment**.
- Allocate **33% of the total traffic** to this experiment (or any other percentage that matches your testing plan).

The **remaining 67%** of the traffic will then be available for the two Web experiments.

#### 2. Create a mutually exclusive group for web experiments

Next, create a **Mutually Exclusive Group** for the two Web experiments.

👉 Follow this documentation: [Prevent overlapping campaigns with Mutually Exclusive Groups](https://help.kameleoon.com/experimentation/web-experimentation/advanced-experiment-features/prevent-overlapping-campaigns-with-mutually-exclusive-groups/). Preventing overlap ensures that visitors can only see **one of the two** Web experiments—never both.

#### 3. Add targeting conditions to exclude feature experiment participants

To ensure that users who are bucketed into the Feature Experiment do not enter either Web experiment, apply the following targeting condition to both Web experiments:

- **Targeting condition:**
`Campaigns → Feature Flag`
**→ Exclude visitors who have been exposed to any variation of your “feature_experiment_name”.**

This step guarantees that mutual exclusivity is preserved across both technologies.

#### 4. Technical considerations

By default, **Kameleoon Web Experimentation** will perform **a remote synchronization call** on each page load to check whether the user has been exposed to a Feature Experiment. This call is how Kameleoon knows whether to include or exclude a user from a Web experiment.

If the three experiments are running on the **same page**, this setup can be **tricky**, because the Web engine has to **wait for the server-side exposure status** before deciding whether to include the user in a Web experiment, which can result in **flickering** or delayed content.

:::note
If the Feature Experiment and the Web Experiments are triggered at different moments in the customer journey (for example, on different pages), you’ll also need to add an exclusion targeting condition in the Feature Experiment to exclude visitors who have already been exposed to one of the Web Experiments.
:::

##### Recommended solution

To eliminate flickering and ensure real-time decision-making, expose the user’s Feature Experiment status **directly on the front end**, without waiting for a remote call.

- Use the SDK method: `getEngineTrackingCode()`.
- Insert the output **in the HTML of the page**, ideally in the `<head>` section.

This way, Kameleoon immediately knows whether the user was already exposed to the Feature Experiment, allowing for faster and more seamless targeting.

## Summary

Mutually exclusive testing across client-side and server-side experiments is **complex—but fully supported** by Kameleoon when implemented correctly.

Here’s a quick recap:

- **Start with the feature experiment** and allocate its traffic share first.
- **Use mutually exclusive groups** to manage overlap between Web experiments.
- **Exclude feature experiment participants** from Web experiment targeting using campaign conditions.
- **Use the tracking code method** to eliminate delays and flicker if experiments overlap on the same page.

With this approach, you’ll ensure a clean and reliable testing experience while maintaining your data’s integrity.
