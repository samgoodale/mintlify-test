---
sidebar_class_name: hidden
---
# Kameleoon Test Ideation

Kameleoon’s AI-powered Test Ideation analyzes your website’s interface to identify friction points and automatically generates optimization hypotheses. It transforms raw interface observations into implementation-ready experiments, allowing you to launch tests faster and with higher confidence.

## Overview

Designed in partnership with Conversion by Gain, a leading experimentation agency, the Kameleoon Test Ideation engine uses a hierarchical diagnostic structure to analyze your web pages. It mimics the reasoning of a CRO expert by scanning your site’s visual hierarchy, content, and layout.

Based on this analysis, the feature provides:

- **Friction identification**: Pinpoints specific usability or motivational barriers.
- **Root cause analysis**: Explains why a problem exists using behavioral psychology principles.
- **Experiment suggestions**: Proposes concrete A/B test ideas to improve performance.
- **Wireframe variations**: Generates specific design changes (copy, layout, styling) ready for implementation.

## How it works

The system performs the analysis in the background using a five-layer reasoning model, ensuring every suggestion is grounded in behavioral data rather than guesses.

### Analysis and problem detection

The system takes a snapshot of your page and maps every component (button, headers, text blocks). It then clusters observations to identify problems—high-level friction that negatively impacts user behavior.

### Root cause diagnosis

For every problem, the system identifies a root cause that explains the psychological mechanism behind the friction. It classifies issues using the Lever Framework developed by Conversion. This framework organizes friction into five master levers:

- **Comprehension**: Does the user understand the offer?
- **Motivation**: Does the user want to take action?
- **Trust**: Does the user believe the offer is legitimate?
- **Cost**: Is the perceived effort or price too high?
- **Usability**: Can the user interact with the interface easily?

### Lever Framework

Conversion's **Lever Framework** is a technical taxonomy designed to categorize UX features that influence user behavior. By standardizing these "levers," the framework enables data teams to isolate variables for more effective iteration, transfer behavioral insights across different experimentation programs, and generate structured datasets to train machine learning models for predicting experiment win rates.

For more information on the Lever Framework, see Conversion's dedicated [resource](https://conversion.com/framework/the-lever-framework/).

#### Cost

The **Cost Master Lever** classifies user-perceived downsides beyond financial value, defining "cost" as the total commitment required in exchange for product benefits. This hierarchy categorizes three primary friction points: monetary investment, the "soft costs" of time and effort, and the degree of flexibility available to the user to modify or bypass these anticipated commitments.

| Lever | Sub-Lever |
|-------|-----------|
| **Financial cost**: How much money the user exchanges for the product. | <ul><li>**Known cost**: These are financial costs that users know they will have to incur to access a product.</li><li>**Anticipated cost**: Refers to the longer-term financial costs of subscriptions or expected add-ons.</li><li>**Relative value**: Tactics used to make one product seem to have better value by comparing it with another.</li></ul> |
| **Soft cost**: The time and effort costs dedicated to getting value from the product. | <ul><li>**Time cost**: The part of a soft-cost which refers to the amount of time which must be dedicated to the service to gain value from it.</li><li>**Effort cost**: The part of a soft-cost which refers to how "hard" using the product will actually be for a user to benefit.</li></ul> |
| **Commitment**: How users contextualize the sense of commitment to the costs associated with a transaction or product. | |

#### Trust

The **Trust Master Lever** measures the user's perception of risk during website interaction. It evaluates three critical reliability factors: the foundational legitimacy of the platform, the credibility of product or service claims, and the perceived security of sensitive information processing.

| Lever | Sub-Lever |
|-------|-----------|
| **Legitimacy**: A concern with whether or not the site is that of a real company, selling a real product or service. | <ul><li>**UI Quality**: Cues in the overall UI presentation which suggest to a user that a site is not legitimate.</li><li>**Brand Recognition**: Whether and to what extent the user is familiar with the brand the site is representing.</li></ul> |
| **Credibility**: Concerned with how likely users are to believe the "motivational" claims made on a site, and how likely companies are to live up to them. | <ul><li>**Authority**: Appeals to known institutions, or authority figures as "endorsers" or a company or service, thereby "borrowing" credibility for the brand.</li><li>**Customer Service**: How the prominence/availability of customer/prospective services and easy contact of the company are used to make the company seem competent and trustworthy.</li><li>**Social Proof**: Appeals to a broader source of endorsement among a wider variety of individuals, usually people who will be considered representative of "typical" for the user.</li><li>**Reassurances**: Information and promises about the process behind a product/service which are designed to demonstrate good intentions and competence.</li></ul> |
| **Security**: Refers to a user's level of comfort inputting sensitive information such as payment details on a site. | <ul><li>**Payment Security**: Refers to ways that sites can demonstrate to users that their information will be processed safely.</li><li>**Personal Information Requests**: How requests for sensitive information are handled and presented to the user.</li></ul> |

#### Usability

The **Usability Master Lever** evaluates the friction-free progression of a user toward a conversion goal, mirroring the psychological concept of cognitive fluency. It focuses on optimizing five technical and psychological pillars: navigational clarity, the minimization of cognitive load and fatigue, effective product discovery, strategic attention allocation, and the consistent acknowledgment of user progress.

| Lever | Sub-Lever |
|-------|-----------|
| **User flow**: A user's sense of direction and location: do they understand where they are on the site/in the user journey and what they must do to progress? | <ul><li>**Location**: A user's sense of where they are in the user-flow/journey, answering the question "where is the user now?"</li><li>**Direction**: About whether a user understands where they need to go next in the user journey to perform their desired action.</li></ul> |
| **Effort**: Refers to either a concern that an action or sequence will require a lot of exertion and focus, or an unpleasant feeling that something is already requiring this. | <ul><li>**Experienced effort**: The sense of how demanding it is to complete tasks and progress on a website.</li><li>**Anticipated effort**: Effort that the user "forecasts" regarding how they will feel completing a task on a site.</li></ul> |
| **Choice**: Refers to how product options are arranged and made findable on a site. | <ul><li>**Findability**: The search paths and functionality available to a user to browse through product options.</li><li>**Structure**: How product options are actually organized and presented on a page by default.</li><li>**Recommendation**: These are recommendations and promotions/pushes or product/options by the site to the user based on user preferences and behaviors.</li></ul> |
| **Attention**: How the site guides users' attention to focus on useful/relevant elements, and away from elements distract from your goals. | <ul><li>**Distraction**: About elements on a page whcih are distracting users from a more important (conversion) task.</li><li>**Engagement**: Ways to actively engage users with a particular element or task.</li></ul> |
| **Persistence**: About on-site mechanics that encourage users to continue trying to complete their desired action. | <ul><li>**Progress presentation**: About how users' progress is presented to them to demonstrate how far they've come in their journey.</li><li>**Positive feedback**: Acknowledging when users take a desirable action on the site.</li></ul> |

#### Comprehension

The **Comprehension Master Lever** assesses the efficacy of information architecture and content delivery. It focuses on establishing user confidence through three layers of clarity: foundational industry/product knowledge, granular details of a specific item of interest, and the logistical transparency of the final transaction.

| Lever | Sub-Lever |
|-------|-----------|
| **Education**: Aimed at educating users on the industry generally, rather than on specific offerings of the provider. | <ul><li>**Educational Content**: Provides broader industry or conceptual knowledge to help users navigate the market and evaluate offerings.</li></ul> |
| **Product Understanding**: Content that seeks to inform the user about specific product offerings, and helps them make an informed choice. | <ul><li>**Product Information**: Using words explicitly to describe specifications of a product.</li><li>**Product Depiction**: Implicit (imagery/video) used to help users understand a product.</li></ul> |
| **Transactional Understanding**: Content which seeks to inform the user and provide transparency around the terms of payment. | <ul><li>**Savings understanding**: Explains the explicit financial benefits of an offer, such as percentage discounts or total money saved.</li><li>**Payment structure**: Details the terms and timing of payment, including installments, subscription cycles, or fees.</li></ul> |

#### Motivation

The **Motivation Master Lever** addresses the perceived value proposition and emotional "upside" of a product offering. It focuses on maximizing purchase intent by optimizing several psychological drivers: inspirational copy and imagery, social belonging, urgency, low-friction product trials, variety of selection, and the long-term engagement or "stickiness" of the user experience.

| Lever | Sub-Lever |
|-------|-----------|
| **Value statement**: The explicit positive information included about products/services to persuade users that it's of interest to them. | <ul><li>**Value proposition**: The company's core offering: what is the single line which applies to the product or service being offered.</li><li>**Benefits**: Specific "positive" features of the company or individual products and services offered, often framed as benefits to the user rather than functional features of the product, which may be found in the comprehension lever.</li></ul> |
| **Motivational depiction**: How a product or service use visual/implicit cues to convey value, as opposed to relying on explicit claims or experience with the product. | <ul><li>**Motivational imagery**: Using imagery to convey motivational messaging or positive/anticipatory emotional responses to the user.</li><li>**Motivational video**: Using video to convey motivational messaging or positive/anticipatory emotional responses to the user.</li></ul> |
| **Preview access**: How users can be shown the upside of a product by actually using the product, or some limited part of the product (for example, a free trial, samples). | <ul><li>**Free Trial**: Allowing users to experience the quality of a product or service by accessing it in full for a limited time.</li><li>**Limited Preview Content**: Allowing users to experience the quality of a product or service by offering some limited part of the service, possibly indefinitely.</li></ul> |
| **Obligation**: How users can be made to feel that they "ought" to purchase the product for some reason. | <ul><li>**Reciprocity**: Where users are offered some gesture (for example, discount, freebie) aimed at triggering the intuition to reciprocate the gesture by purchasing.</li><li>**Altruism**: A direct appeal to moral obligation—it is about benefits to other people's well-being.</li></ul> |
| **Sociability**: When users are led to expect they are gaining a social benefit from the product. | <ul><li>**Community**: Trying to elicit the sense that using a product will give you access to some real or imagined community.</li><li>**Exclusivity**: Trying to elicit the sense that using a product or service will give you an edge or superiority over the majority of people.</li></ul> |
| **Urgency**: How users are made to feel that they should complete their purchase within their current session, or else risk losing access to the product or paying a higher price. | <ul><li>**Availability**: Urgency based on the idea that failing to purchase quickly will mean missing out on the product entirely.</li><li>**Price change**: Urgency based on the idea that failing to purchase quickly will lead to price increases and greater cost in the future.</li></ul> |
| **Product range**: How the products available can be presented to make them appear motivationally varied and extensive. | <ul><li>**New product**: Adding a new product or service to serve a product preference or option not currently catered for.</li><li>**Variety**: Demonstrating the variety of product options available, whether explicit through copy ("Access thousands of movies and TV shows") or implicit (showing a background image of movie and TV show posters).</li></ul> |
| **Delivery**: Motivational content about how the user will receive the product (whether physical or virtual). | <ul><li>**Delivery Speed**: Informing users how quickly they can receive their product, emphasizing fast delivery speeds or short waits.</li><li>**Delivery Ease**: Informing users of how easy it is to receive a product, or how discretion may be used upon delivery.</li></ul> |
| **Gamification**: Refers to creating a sense of excitement and engagement around continuing to use the product. | <ul><li>**Immersion**: Creating a sense that users are in a different environment from the one they are really in.</li><li>**Progression**: Creating a sense that satisfying progress is being made through the "task" of completing the user's desired goals on the site.</li><li>**Competition**: Creating a sense that users' level of performance with the product or service is superior to that of others.</li></ul> |
| **Humanization**: Presentation of a site/brand as human and friendly to the user. | <ul><li>**Friendly Language**: The use of a friendly or informal tone to elicit a sense in users that the company/product/service is personable and accessible.</li><li>**Human Depictions**: The depiction of people as a means to make a company/product/service seem personable and accessible (friendly).</li></ul> |
| **Control**: Users feeling a positive sense that the product can be adapted to their preferences. | |

### Generate hypotheses

The system generates a hypothesis—a theory of change that articulates how fixing the root cause will improve the user outcome.

### Experiments and variations

For each page you analyze, the system generates one or more hypotheses. Each hypothesis includes specific test ideas that are ready to be implemented directly in the PBX interface.

To help you decide which tests to launch first, every idea is assigned an Impact Score. Powered by Confidence AI, the Impact Score represents the likelihood of the test producing a meaningful conversion lift, allowing you to focus on high-impact opportunities.

Each experiment suggests concrete variations—specific changes to text, layout, or styling—so you can start testing immediately without needing to design from scratch.

## Scanned pages

To generate test ideas, add specific URLs to the **Scanned pages** tab.

1. Navigate to **Insights** > **Test Ideas**.
1. Click **Add pages**. The **Add pages to scan** pop-up opens.
1. Select the project for the page.
1. Enter the page URL.
1. Click the **+** icon > **Add pages**.

You can analyze a maximum of 10 scanned pages per project. To check the status of pages across projects, click **View details**.

:::note
Hypothesis generation is not instant. Wait for the analysis to complete, which takes approximately 10–15 minutes after you scan a page.
:::

## View and manage test ideas

You can access AI-generated test ideas directly within Kameleoon.

### Select pages for analysis

1. Sign in to Kameleoon and navigate to **Insights** > **Test Ideas**.
2. From the dropdown menu, select the website to analyze.
3. Add the specific URLs to analyze.

:::note
The AI analysis process is thorough and may take up to 15 minutes to complete.
:::

### Analysis quotas and strategy

You can analyze a maximum of 10 pages per project within a 30-day period. Once a page is analyzed, a new analysis for that URL is unavailable until the 30-day period expires.

Because of this limit, select page categories rather than multiple similar pages.

- **Recommendation**: Analyze one representative URL for a category (for example, one product detail page) rather than adding 10 different product pages.
- **Logic**: Usability friction identified on one product page is likely present on all similar pages.
- **Targeting**: Although the analysis is performed on a single URL, apply the resulting experiment to all pages in that category (for example, targeting all product pages) using standard targeting conditions in PBX.

### Review suggestions

When a page is expanded, the system displays the generated hypotheses. For each hypothesis, the system lists specific, actionable test ideas.

![](../../../images/experimentation/web-experimentation/prompt-based-experimentation/kameleoon-test-ideation/hypothesis.png)

Each idea card displays:

- **Test name**: A concise title for the experiment.
- **Impact Score**: A predictive score (0-10) estimating the likelihood of this test producing a conversion lift. This score is derived from analyzing thousands of historical test results to identify factors that predict success:
    - **8-10 (High confidence)**: Strong evidence, proven patterns, and clear mechanisms.
    - **5-7 (Moderate confidence)**: Reasonable hypothesis with partially supported patterns.
    - **1-4 (Low confidence)**: Speculative mechanism or unsupported patterns.

### Analyze details

To understand the logic behind a suggestion:

1. Click the **three dots** menu next to a specific test idea.
2. Select **See details**.

**OR**

- Click **See diagnosis**.

A pop-up panel displays details about the test. The app highlights the targeted element at the top of the panel.

#### Hypothesis

![](../../../images/experimentation/web-experimentation/prompt-based-experimentation/kameleoon-test-ideation/hypothesis-details.png)

Under the Hypothesis dropdown, you can see:

- **Levers**: Shows the Conversion Master Lever, Lever, and Sub-Lever that form the hypothesis' basis.
- **Insight**: Provides a logical synthesis of why the change should work.
- **UX Observations**: Lists specific elements on your page that triggered the recommendation.
- **Best Practices**: Cites behavioral principles derived from academic research and successful test outcomes, ensuring recommendations are grounded in real-world performance data.

Best practices include:

- **Attention Follows Visual Weight**: Universal perceptual law validated across hundreds of tests.
- **Explicitly Framing Reduces Interpretation Effort**: Mechanism-aligned pattern from clarity testing.
- **Primary CTAs Require Dominant Contrast**: Design heuristic with consistent positive results.

#### Test Idea

![](../../../images/experimentation/web-experimentation/prompt-based-experimentation/kameleoon-test-ideation/test-idea-details.png)

The **Test Idea** dropdown shows the specific variations proposed for that test idea. These variations represent concrete ways to implement the test idea (for example, changing the checkout flow to a single-page layout).

### Launch an experiment

Once a promising idea is identified, move directly to the implementation phase.

1. In the sidebar, select the variation to test.
2. Click **Create in PBX**.

:::note
If you've already created a variation, the CTA changes to **View in PBX**.
:::

### How experiments are created

- **First variation**: The first time you click **Create in PBX** for a test idea, Kameleoon creates a new experiment containing the selected variation.
- **Additional variations**: To test multiple variations against each other (for example, Variation A versus Variation B), select a second variation from the list and click **Create in PBX** again. The system automatically adds the new variation to the experiment created in the previous step.

The PBX interface opens with the targeted element and suggested prompt ready for review. You can then finalize the design and launch the experiment.

![](../../../images/experimentation/web-experimentation/prompt-based-experimentation/kameleoon-test-ideation/prompt.png)
