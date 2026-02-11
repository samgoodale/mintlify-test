# Using Shadow DOM elements in the Graphic editor

Shadow DOM is an advanced web development feature that lets developers encapsulate a part of their webpage's structure, creating a separate "shadow" section. Think of it like creating a miniature webpage within a component of your main site. This "mini-page" operates independently of the rest of your page, preventing conflicts between styles and scripts used within the component and those used on the main page.

If you're working in the Kameleoon Graphic editor, you'll need to know how the DOM (Document Object Model) works to use Shadow DOM elements. Since Shadow DOM elements are not visible in the main DOM by default, things like placing widgets or personalizing experiments can be trickier than working with standard DOM elements.

:::note
This feature is best suited for those with development experience. If you're not comfortable working with the DOM or Shadow DOM encapsulation, it's a good idea to reach out to a developer or look into some online resources about Web Components and Shadow DOM fundamentals.
:::

## Limitation of standard selectors

Standard CSS selectors or JavaScript methods like `querySelector()` or `$()` won't work on elements inside a Shadow DOM. These elements are hidden from the main page, meaning:

- You cannot target elements inside a Shadow DOM using the usual selection methods in the Kameleoon Graphic editor.
- Targeting these elements using traditional CSS or jQuery-style selectors in your experiment might fail.
- Any modifications (like text changes, style updates, or content insertion) may not apply unless special steps are taken to piece the Shadow DOM boundary.

:::tip
If you’re unsure whether you’re dealing with a Shadow DOM, inspect the element using your browser’s developer tools. Look for `#shadow-root` in the **Elements** panel.
:::

## Working with Shadow DOM in the Graphic editor

In most cases, users can select elements inside a shadow root directly from the preview zone in the Kameleoon Graphic editor.

### When the additional "Shadow root path" input appears

In some cases, when you attempt to select or edit an element inside a Shadow DOM using the Kameleoon Graphic editor, you may see an additional input field labeled **Shadow root path**. This field appears when Kameleoon detects that the target element exists within a shadow tree and cannot be accessed using standard selectors.

The Shadow root path lets you define a specific path through nested Shadow DOM layers so Kameleoon can reach and modify the element during experiment execution.

**Mock connection:** The Graphic editor uses this path to “mock” the connection between the main DOM and the element inside the Shadow DOM, which lets you visually edit and preview changes as if the element were part of the regular page structure.

## Examples

### Targeting a button inside a shadow root

In the Kameleoon Graphic editor, you can target elements inside a shadow root:

- **Directly in the Preview zone:** If the element is accessible, you can select it within the editor preview, just like any standard element.
- **Using “Edit selector”:** For more complex structures you can manually construct the selector path using the Edit selector input. Use the `::SHADOW-ROOT::` separator to indicate a step into shadow root.

### Inspecting Shadow DOM in DevTools

1. Right-click the element > **Inspect**.
2. In the **Elements** panel, look for `#shadow-root (open)` under the custom element.
3. Expand it to view the inner elements.

For example:

```html
<my-element>
  #shadow-root (open)
    <button class="cta">Click me</button>
</my-element>
```

## Visual cues or labels in the UI

While working with web pages that use Shadow DOM, the Kameleoon Graphic editor provides several visual indicators to help you identify when elements are part of a shadow root.

### #shadow-root in the Elements panel

![](../../../images/experimentation/web-experimentation/advanced-experiment-features/using-shadow-dom-elements-in-the-graphic-editor/element-panel.png)

In the editor’s **Elements** panel, components that use Shadow DOM will display `#shadow-root` as part of their CSS selector, which indicates that the element is encapsulated and not part of the main DOM tree.

### "Shadow root path" field in the selector panel

![](../../../images/experimentation/web-experimentation/advanced-experiment-features/using-shadow-dom-elements-in-the-graphic-editor/selector-panel.png)

When selecting an element inside a shadow root, an additional **Shadow root path** input appears in the **Edit CSS selector** panel. This input lets you build a full path through shadow roots using the `::SHADOW-ROOT::` syntax.

## How to write a selector path for Shadow DOM elements

When working with Shadow DOM elements in Kameleoon’s Graphic editor, a standard CSS selector is not sufficient. You must define a selector path that includes the shadow root.

To target an element inside a **single-level shadow root**, use the `::SHADOW-ROOT::` separator:

`custom-element::SHADOW-ROOT::.target-button`

The `::SHADOW-ROOT::` separator tells Kameleoon to enter the shadow root of the specified element and continue targeting inside it using standard CSS selectors.

:::note
Kameleoon currently supports navigating only **one level** into the shadow DOM. If the element is nested within multiple shadow roots, it cannot be targeted using a full selector path at this time.
:::

### Example

```html
<my-element>
  #shadow-root
    <button class="cta">Click me</button>
</my-element>
```

Your selector path will be `my-element::SHADOW-ROOT::.cta`

This tells Kameleoon to:

- Select the `my-element` element.
- Enter its shadow root.
- Target the `.cta` button inside it.

## Limitations and considerations

When working with Shadow DOM, keep the following limitations in mind:

- **Closed Shadow DOMs:** Elements in a closed shadow root cannot be accessed or modified using the Graphic editor or standard JavaScript.
- **Dynamic or script generated content:** If content inside a shadow root is generated or updated dynamically, your changes may not persist or take effect as expected.
- **Styling restrictions:** Styles applied from outside the shadow root often won’t affect inner elements due to Shadow DOM’s style encapsulation. CSS rules may need to be applied directly within the component’s internal structure, which isn’t possible via the Graphic editor.

### Shadow root (closed)

Some web components use a closed shadow root, meaning their internal DOM is completely hidden from the browser’s developer tools and JavaScript.

Unlike an open shadow root, which you can access using `.shadowRoot`, a closed shadow root does **not** expose its content through the DOM, making it inaccessible to:

- The Graphic editor
- JavaScript-based targeting
- Selector paths or custom scripts

Because the internal elements of a closed shadow root are hidden, you cannot select or modify them in Kameleoon. Even if you see the outer wrapper component, its internal structure remains sealed.

#### What can you do?

If a key element is inside a closed shadow root, you’ll need help from a developer. They may:

- Rebuild the component using an open shadow root.
- Expose specific elements for external targeting.
- Provide a hook or workaround for targeting.

:::tip
If you can’t inspect the inside of a component in browser DevTools, it’s likely using a closed shadow root.
:::

### Nested shadow roots

Shadow DOMs can be nested multiple layers deep (for example, a shadow root inside another shadow root). This case is not supported in Kameleoon's current version.

:::tip
If an element isn’t responding to edits, double-check if it’s inside a closed shadow root or if you’re missing part of the path.
:::

### Adding widgets to shadow root

Widgets can’t be added inside Shadow DOM elements in Kameleoon’s Graphic editor because the Shadow root isolates its content from the DOM nodes the editor can reach.

### Add click tracking from the Graphic editor

You currently cannot add a click tracking goal directly from the Graphic editor for Shadow DOM elements. However, you can create and manage one using Kameleoon's [API](https://developers.kameleoon.com/apis/activation-api-js/api-reference/#runwhenshadowrootelementpresent).
