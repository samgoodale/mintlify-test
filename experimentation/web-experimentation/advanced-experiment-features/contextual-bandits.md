---
sidebar_position: 3
---

# Contextual bandits

Personalization is no longer a luxury—it’s an expectation. But delivering the right experience to each visitor, at the right time, is a daunting task, especially when you’re operating at scale. Traditional methods like A/B and multivariate testing (MVT) offer structured ways to improve user experiences, but they come with trade-offs: slow learning curves, limited flexibility, and static assumptions.

To address these limitations, there are **contextual bandits** (CBs)—a machine learning-based approach that offers a dynamic, data-driven alternative to traditional experimentation. In this article, we’ll explore:

- How contextual bandits work
- What kind of data powers them
- What “behavior” really means in this context
- Real-world use cases where CBs shine.

## What are contextual bandits?

Contextual bandits are a machine learning approach that balances **exploration** (trying new options) and **exploitation** (using the best-known option). Crucially, the algorithm now checks the status of the Learning phase every hour—similar to AI Predictive Targeting—letting it adapt more quickly and intelligently.

Unlike A/B or MVT tests, which are static and split traffic evenly across fixed variants, CBs are **dynamic**. They adjust variant allocation in real time based on what’s working best for different types of users.

It’s also important to distinguish CBs from traditional multi-armed bandits (MABs). While MABs consider only the performance of each option overall, CBs factor in real-time user context (like behavior, device type, referral source, and more) to make smarter decisions for each visitor.

## How contextual bandits work

At the heart of CBs is a continuously improving decision loop. Here’s how it works:

1. A user lands on your website.
2. The CB algorithm evaluates real-time contextual signals (for example, device, location, past behavior).
3. It selects the variant most likely to result in a positive outcome.
4. It observes the result (conversion, click, engagement).
5. It learns and updates its models accordingly.

This feedback loop happens constantly and is powered by live user data. Kameleoon uses contextual multi-armed bandits (CMABs), an advanced form of CB that incorporates multiple layers of user context to inform decisions.

## Understanding behavior in contextual bandits

In Kameleoon, behaviors include any interaction or signal from a user that can help predict their intent or preferences, which includes:

- Page views
- Scroll depth
- Time on site
- Clicks on CTAs
- Products browsed
- Cart contents

These behaviors feed into both our CB algorithm and our Kameleoon Conversion Score (KCS), creating a standardized behavioral foundation across all personalization tools.

## What makes contextual bandits smart?

The intelligence of a CB system comes down to the quality of data it receives. High-quality, real-time behavioral signals lead to better predictions and faster optimization.

Kameleoon’s real-time data pipeline ensures that CBs make informed decisions by:

- Capturing clean, relevant contextual signals instantly
- Feeding them into the model without delay
- Enabling hour-by-hour updates of the Learning phase status.

Kameleoon ensures your personalization efforts improve quickly and accurately.

## Use cases for contextual bandits

CBs are incredibly versatile. Here are a few ways you can put them to work:

### Optimizing homepage layouts

Show different homepage modules (like banners, featured products, or CTAs) depending on real-time user behavior. The CB continuously adapts to determine which layout performs best for different types of users.

### Saving personalized promotional offers

Instead of manually creating audience segments for promotions, let the CB do the heavy lifting. It analyzes signals such as cart value (which is a [custom data](https://help.kameleoon.com/assets/custom-data/create-custom-data/)), browsing history, or traffic source and shows the most effective offer automatically.

### Rolling out new features dynamically

Gradually introduce a new feature or UI component to users who are more likely to respond positively, based on how they interact with your site in real time.

## When to use contextual bandits

Contextual bandits are a powerful tool, but they aren’t always the right choice. Here’s a short guide:

**Best for:**

- Personalization at scale
- Continuous learning environments
- High-traffic pages with lots of user interaction

**Not ideal for:**

- Experiments where strict control and interpretability are essential.
- Low-traffic environments where learning would take too long.

## Summary

Contextual bandits are a smarter, more adaptive approach to experimentation. By continuously learning from high-quality real-time data, CBs let you deliver better experiences faster—no rigid tests or manual segmentation required.

Importantly, the behaviors that power Kameleoon’s contextual bandits are the same ones that fuel our AI propensity scores. This shared behavioral foundation means smart and consistent personalization across your experiments and optimizations.

In short, contextual bandits help you meet your users where they are—intelligently, efficiently, and at scale.

For more information on integrating CBs in your web experiments, refer to [this](https://help.kameleoon.com/experimentation/web-experimentation/configure-and-launch/finalizing-an-experiment/#contextual-bandits) article. Read [this](https://help.kameleoon.com/experimentation/feature-experimentation/using-the-rollout-planner/multi-armed-bandit-optimizations-for-feature-experiments/#contextual-bandits) article to learn more about CBs in feature experiments.
