---
sidebar_position: 1
---

# Get started

Prompt-based experimentation (PBX) is a fast and intuitive way to create experiments using natural language prompts and generative AI. Instead of coding or relying on a visual editor, you simply describe the change you want to make, and the AI generates a measurable, targeted experiment that you can simulate and run directly on your website. For more information on creating PBX experiments, refer to [this](/experimentation/web-experimentation/prompt-based-experiments/create-a-prompt-based-experiment/) article. For help getting started with effective prompts, refer to [this](/experimentation/web-experimentation/prompt-based-experiments/how-to-write-effective-prompts-dos-and-donts) article.

:::note
Kameleoon offers a free trial of prompt-based experimentation, so you can explore its capabilities before committing. For more information on available PBX plans, refer to [this](https://help.kameleoon.com/experimentation/web-experimentation/prompt-based-experiments/prompt-based-experimentation-plans) article.
:::

## What is Prompt-Based Experimentation?

Prompt-based experimentation is a form of vibe experimentation, a new way of creating, configuring, and analyzing experiments using natural language prompts and generative AI.

Instead of relying on a visual editor or writing code, you simply describe what you want to test and define your success criteria. The AI then generates a fully configured experiment that is both targeted and measurable.

Prompt-based experimentation combines the flexibility of a visual editor with the creative power of generative AI. It can handle advanced layout changes, generate new elements, and apply brand-oriented designs—often going beyond the capabilities of traditional visual editors. Best of all, it works directly on your existing website, so you can optimize and iterate without building new products from scratch.

:::tip
If you want to learn more about how PBX works under the hood, including which LLMs it uses and how to get the best results, refer to the [PBX FAQ](https://help.kameleoon.com/experimentation/web-experimentation/prompt-based-experiments/prompt-based-experimentation-faq/).
:::

### Examples of what you can create

With prompt-based experimentation, you can:

- Add dynamic “Add to cart” buttons on product pages, aligned with your brand’s identity.
- Implement sticky headers or call-to-action bars consistent with your site’s design.
- Introduce persistent, personalized pop-ups and tooltips triggered by user behavior.
- Add infinite scroll to your website’s category pages.
- Generate quizzes, forms, pop-ups, banners, and surveys that accelerate the customer journey and increase user engagement.

## Benefits of prompt-based experimentation

- **Speed:** Experiments can be built in minutes instead of hours.
- **Accessibility:** Non-technical users can create meaningful tests without coding.
- **Scalability:** Teams can run more experiments and increase their testing velocity, without scaling dev resources linearly.
- **Quality:** Prompt-based experimentation automatically generates code that is secure, responsive, and accessible.
- **Increased throughput and learnings:** More tests = more learnings. A faster feedback loop accelerates insights.

:::tip
For more information on the value added by PBX, refer to [this FAQ entry](https://help.kameleoon.com/experimentation/web-experimentation/prompt-based-experiments/prompt-based-experimentation-faq/#what-is-the-added-value-of-pbx-compared-to-other-vibe-coding-tools-on-the-market).
:::

### Before and after with PBX

| Dimension | Before PBX | After PBX |
|-----------|------------|-----------|
| Setup time | Days/weeks of work | Hours with PBX templates |
| Experiments per quarter | 2-3 | 5-10x more with the same resources |
| Stakeholder involvement | Mostly technical teams | Product, marketing, design engaged |
| Quality and consistency | Risk of errors | Standardized, validated implementations |
| Team focus | Dev-heavy workload | More time for ideation and analysis |
| Experimentation culture | Limited to few teams | Organization-wide adoption |

## Prerequisites

Before creating a prompt-based experiment, make sure you meet the following requirements:

- **Use a Chromium-based browser.**
  - The Kameleoon Prompt Testing extension is only available on browsers that support the Chrome Web Store (for example, Chrome, Arc, Brave, Edge).
- **Install the Kameleoon Prompt-Based Experimentation Chrome extension.**
  1. Go to the [Chrome Web Store](https://chromewebstore.google.com/detail/kameleoon-prompt-testing/eppgaaffepbibmnbaoodmilbhnmphchp) and install the Kameleoon Prompt Testing extension.
  2. Once installed, you’ll be able to start [creating prompt-based experiments](/experimentation/web-experimentation/prompt-based-experiments/create-a-prompt-based-experiment) directly in your browser.
- [**Install the Kameleoon script on your website**](https://developers.kameleoon.com/web-experimentation/simple-implementation).
  - The Kameleoon script must be implemented on the site where you want to simulate or run your prompt-based experiment. Without it, experiments cannot be executed or tracked.
- **Check you Content Security Policy (CSP).**
  - If your website restricts the loading of resources (scripts, images, media, CSS) via the standard CSP HTTP header, you must update your site's CSP to allow Kameleoon resources to load. Otherwise, PBX won't load on your website.
  - [Learn more about updating CSP for Kameleoon](https://developers.kameleoon.com/web-experimentation/faq#easy-setup-with-wildcards)
- **Allow third-party cookies.**
  - PBX uses a session cookie hosted on the Kameleoon domain for authentication. Ensure that you disable the **Block third-party cookies** option in your browser settings. If the PBX editor repeatedly prompts you to log in when loading on your website, verify that your browser allows third-party cookies.

:::tip
For more information on PBX's limitations and which sites it works on, refer to the [PBX FAQ](https://help.kameleoon.com/experimentation/web-experimentation/prompt-based-experiments/prompt-based-experimentation-faq/#does-prompt-based-experimentation-work-on-any-website-what-are-the-current-limitations).
:::

### What the extension enables you to do

With the extension, you can use the Kameleoon PBX editor directly from any page of your website and build variants with AI.

If you’re using a compatible browser but don’t yet have the extension installed, you’ll be prompted to download it before continuing.

![](../../../images/experimentation/web-experimentation/prompt-based-experimentation/create-a-prompt-based-experiment/extension.png)

## Additional resources

- [Create a prompt-based experiment](https://help.kameleoon.com/experimentation/web-experimentation/prompt-based-experiments/create-a-prompt-based-experiment)
- [How to write effective prompts (dos and don'ts)](https://help.kameleoon.com/experimentation/web-experimentation/prompt-based-experiments/how-to-write-effective-prompts-dos-and-donts)
- [Prompt-based experimentation plans](https://help.kameleoon.com/experimentation/web-experimentation/prompt-based-experiments/prompt-based-experimentation-plans)
- [Best practices and safeguards](https://help.kameleoon.com/experimentation/web-experimentation/prompt-based-experiments/best-practices-and-safeguards)
- [Contentsquare X PBX integration](https://help.kameleoon.com/experimentation/web-experimentation/prompt-based-experiments/contentsquare-pbx-integration)
- [FAQ](https://help.kameleoon.com/experimentation/web-experimentation/prompt-based-experiments/prompt-based-experimentation-faq)
