---
sidebar_position: 3
---

# How to write effective prompts (dos & don'ts)

In Kameleoon's prompt-based experimentation (PBX), our AI is a powerful collaborator ready to transform your A/B tests and personalizations. The secret to unlocking its full potential lies in how effectively you prompt. This guide will help you craft prompts that go beyond basic instructions, allowing you to:

- **Accelerate innovation:** Rapidly build and test complex UI variations.
- **Achieve pixel-perfect accuracy:** Bring your exact visual and functional visions to life.
- **Streamline your workflow:** Drastically reduce manual adjustments and development cycles.
- **Eliminate guesswork:** Get consistent, predictable results that drive your experiments forward.

You don't need to be an AI guru or coding expert. With the right techniques, you can turn your ideas into impactful, high-performing experiences.

Let's dive into how to write clear, specific, and effective instructions for the AI in your prompt-based experiments.

## Core principles for effective prompting

To guide Kameleoon's AI effectively, keep these fundamental principles in mind:

- **Be specific:** Always describe the change, identify the target element, and outline the desired style or functionality.
- **Start small and iterate:** If you're unsure, begin with a simple request and gradually build complexity. AI models learn from feedback; sometimes, the simplest starting points lead to the best results.
- **Provide context:** The more relevant context you provide about **why** you want to test a particular idea or what you aim to achieve, the better the AI can tailor its output to meet your objectives.

You can also use external AI tools like ChatGPT to help craft your prompt. For example, you can take a screenshot of the element or page you want to modify, describe what you want to change, and ask ChatGPT to generate a well-structured prompt for you. This method can be helpful for refining your instructions and improving your request's clarity before entering it in Kameleoon.

## DO — What you should do

These guidelines will help you craft prompts that lead to precise, high-quality AI-generated variations.

1. **Be highly specific with your request:**
   - **Clearly describe what you want to change or add:** Instead of "change the button", say "change the 'Add to Cart' button's color to dark blue". For additions, specify "add a delivery truck icon next to the free shipping text".
   - **Specify where the change should occur:** Indicate the exact location. For example, "in the main banner", "below the headline", or "next to the call-to-action button".

:::tip
Use our **Draw a sketch** feature to visually circle the element or area you want to update.
:::

2. **Structure your prompts for clarity:**
   - Organize your prompts into distinct parts to give the AI a clear, actionable instruction set. Think about defining the what, where, and how for optimal results.
     - **Define the Core Action:** State exactly what transformation you want to achieve (for example, "Change the headline", "Add a new section", "Modify button styling").
     - **Identify the Target Element:** Clearly point out the specific part of the UI you're addressing (for example, "the main hero banner", "the 'Sign Up' button in the footer", "the product image gallery").
     - **Detail the Desired Outcome:** Describe the visual or functional result you expect, including properties like color, size, font, position, or content.
       - **Example:**
         - **Core action:** Change the color.
         - **Target element:** The "Add to Cart" button.
         - **Desired outcome:** Make it a vibrant orange (`#FF4500`) to increase visibility.
3. **Use clear and simple language:**
   - Write in a clear, concise, and action-oriented style. For example, "replace the white background with a blue gradient" instead of "make it look nicer".
4. **Describe visual elements in detail:**
   - Include details like **size, color, shape, style, or type of image**. The more descriptive you are, the closer the AI will get to your vision.
   - You can also import a mockup or design or your variant using the **Import a file** feature. When using a file as a template (for popups, banners, etc.) and you want the AI to build something based on it, provide explicit instructions. For example: "Build a newsletter popup by using the attached template file and adapt it to my brand design". Adding details like "adapt to my brand image" can significantly influence the outcome and ensure that the generated content aligns with your visual identity.
5. **Stick to one request per prompt:**
   - Avoid stacking multiple unrelated edits in a single prompt. For example, don't ask to "change the button color, add a promo image, and move the text" all at once. Break this up into separate focused prompts. This segmentation allows the AI to concentrate on one task at a time, reducing the likelihood of errors and "AI hallucination".
6. **Use concrete examples if helpful:**
   - Sometimes, showing is better than telling. For example, "add an icon like the Google Maps pin" or "use a blue similar to Facebook's".
7. **Include a clear goal or intent:**
   - Always explain what you're trying to achieve visually. For example, "make the button stand out more to improve click-through rate", or "highlight free shipping to reduce cart abandonment".
8. **Rephrase if the first prompt doesn't work:**
   - Try simplifying or rewording the prompt if you don't get the result you expected.
9. **Start with a new variation when trying something different:**
    - If you want to try a new idea, begin by creating a separate test variation.

## DON'T — What to avoid

These common pitfalls can lead to vague or incorrect AI outputs.

1. **Vague or overly general prompts:**
   - Avoid broad instructions like "make it look nicer" or "change this design a bit". If you're looking for inspiration or direction, try using the **Suggest ideas** tool available at the bottom of the prompt area.
2. **Technical jargon or uncommon abbreviations:**
   - Keep your language beginner-friendly and visually focused.
3. **Overly long or confusing prompts:**
   - Too many ideas at once make it hard for the AI to respond clearly.
4. **Mixing multiple intentions in one prompt:**
   - For example, "change the button color, add a promo image, and move the text"—break this up.
5. **Assuming the AI understands your marketing goal:**
   - Always explain what you're trying to achieve visually; don't assume the AI can infer your marketing objectives.
6. **Relying on the first result:**
   - Always double-check that the visual change matches what you asked for and test it in simulation mode.
7. **Vague terms like "this", "that area", or "something cool":**
   - Be specific about _what_ should change and _how_.
8. **Requests that require back-end logic:** 
   - The AI cannot access or modify server-side systems or business logic. For example, do not request "change the product price", "adjust delivery options", or "add a discount for returning customers". Similarly, requests like "add a loyalty points tracker" or "create a subscription billing flow" involve dynamic data and server-side processing and must be handled by developers.

## Examples of effective prompt structures

To help you write more effective prompts, here are proven templates with real-world examples. These structured approaches consistently deliver accurate results by organizing your requirements in four key components:

- **Task/goal:** What you want to achieve.
- **Content/UX requirements:** Specific visual details, layout guidelines, and design elements (including mockup references if applicable).
- **Behavior/interaction:** How the element should respond to user actions.
- **Constraints/edge cases:** Technical limitations, responsive requirements, and what should **not** happen.

The following are example use cases of this structure with corresponding prompts.

### Example 1: Color selection dropdown

#### Task

Replace the existing color selection interface with a single dropdown menu displaying all available colors with names and swatches.

#### Content/UX requirements

Display all colors in the dropdown along with their respective names and color swatches. If colors belong to two categories (for example, Essential Colors and Limited Edition), show a clear distinction between categories. Dropdown must be interactive, accessible, and consistent in styling with the site.

#### Behavior/interaction

When a user selects a color, ensure it updates the selection correctly and triggers any necessary page refresh to reflect the change.

#### Constraints

Do not add multiple dropdowns; replace the existing interface. Placement and size of dropdown is defined by the static mockup or sketch. Must be responsive and work across desktop, tablet, and mobile. Interaction should not interfere with other page elements or existing functionality. Manage the dynamic specifics of the webpage so that no additional dropdown is added when selecting a color. Impact on performance should not occur.

### Example 2: Image carousel with auto-play

#### Task

Transform the list of images on the left side of the page into an interactive image carousel/slider.

#### Content/UX requirements

Replace the current static image list with a carousel that allows users to navigate between images using left and right arrows. Use the original image dimensions to preserve layout consistency and avoid distortion. Arrows should appear centered vertically beside the carousel; on hover, arrows slightly increase opacity for visibility. Maintain spacing between images as in the original layout, ensuring that adjacent elements on the page (for example, text blocks or CTAs) remain aligned.

#### Behavior/interaction

Add an automatic slide animation that transitions every 5 seconds, creating a smooth and continuous loop. Animation type: horizontal slide, easing ease-in-out, duration 0.5 seconds per transition. On hover, pause the automatic animation and display both navigation arrows clearly. Auto-play must resume when the cursor leaves the carousel area.

#### Constraints

The mockup or sketch is static, used only to indicate the carousel's position and size. Carousel must remain responsive across all devices. No change in image resolution or cropping. Do not alter other interactive elements or create new UI components beyond the defined arrows and automatic slide animation.

### Tips for using this structure

- **Not every prompt needs all four sections:** For simple changes, a clear task and content description may be sufficient.
- **Use this format for complex requests:** Use for instances requiring a high degree of precision, such as interactive elements, multi-step interactions, or providing mockups.
- **Reference mockups explicitly:** If you've imported a design file, mention it in the content/UX requirements section and specify which parts the AI should focus on.
- **Be explicit about what should not happen:** In the constraints section, define what you do **not** want to happen to avoid undesirable side effects or performance issues.
