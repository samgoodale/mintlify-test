# Troubleshooting the Graphic editor

This section will help you troubleshoot issues with the Graphic editor and offer best practices for avoiding these issues in the future.

## What scenarios will these tips resolve?

- When changes you made to an experiment's variants in the Graphic editor don't appear, even though you saved and simulated them.
- When edits you made of all pages with the Graphic editor don't appear after pushing an experiment live.
- When the Graphic editor won't load.

## How do graphic editors work?

While making changes with the Graphic editor seems easy, your webpage's architecture (for example, how it's coded) can make editing complicated.

Like most visual editors built to create experiments, Kameleoon's Graphic editor uses [CSS selector](https://www.w3schools.com/cssref/css_selectors.asp) paths to identify the elements you edit. Selectors are the cornerstone of any action you take in the Graphic editor.

Kameleoon uses two types of CSS selector paths:

- **Simple selectors, such as the unique ID of the element:** Because it is unique, it cannot be repeated on a page or assigned to another element on the same page. Therefore, changes to this element made in the Graphic editor are confined to that element.
- **Combinator selectors:** The element is selected based on a specific relationship with its parent elements.

Kameleoon's Graphic editor follows two straightforward rules:

- **If Kameleoon finds an ID for the selected element:** That element will be used by default to identify the element when the page loads, and Kameleoon will apply the changes to it.
- **If Kameleoon doesn't find an ID for the selected element:** Kameleoon will create a combinator selector from the closest parent element that has an ID. For instance, if your product name element doesn't have an ID but the header does, Kameleoon will create a unique path from the header element to the product name.

## What causes issues?

### The element is dynamically generated

In general, IDs assigned to elements on [single-page applications](https://help.kameleoon.com/experimentation/web-experimentation/advanced-experiment-types/set-up-experiment-single-page-app/) are generated dynamically, meaning their values and selector paths continuously change. However, Kameleoon can follow these changes. To activate this option, you must set your own method of selecting an element on a page by indicating a custom attribute. To do so:

1. Click **Admin** > **Project**.
2. Click the **pencil** icon for the project you'd like to edit.
3. In the **Configuration** menu, click **General**.
4. Under **Advanced settings**, toggle **Enable support for dynamic websites (Single Page App, Progressive Web App...)** to **ON**.
5. Under **Set a custom attribute (optional)** define your desired custom attribute (for example, `data-id`, `data-qa`).

![](../../../images/experimentation/web-experimentation/graphic-based-experimentation/getting-started-with-the-graphic-editor/advanced-settings.png)

### The selector path used does not allow for the precise selection of an element

Not all elements have an ID. When the ID is absent, Kameleoon will generate a unique path from the closest parent element with an ID to the element you want to change.

Here is an example of a selector path that identifies the block that contains product thumbnail images: `#ProductSection-product-template > div:first-child > div:first-child > div:nth-of-type(6) > div:first-child > ul:nth-of-type(1) > div:first-child`.

This path starts at the parent block, `ProductSection-product-template`, and goes through five other child blocks before reaching the thumbnail block. So, the selector follows Product section template > block1 > block2 > block3 > block4 > block5 > thumbnail.

Generally, the broader the selector path, the more likely the selector will not cover all use cases on your website. With each website being unique, this limitation presents distinct challenges for graphic editors.

Your product pages may have varied layouts (for example, different HTML markups); therefore, they require different selectors. For instance, some product pages may have a block for ratings, while others don't. The inconsistency in elements' presence will break the original selector path found by Kameleoon when creating the variant.

The risk of having inconsistent element changes within your experiment grows proportionally to the length/breadth of the selector path identified by Kameleoon and based on how dynamic your product webpage layout is. When the risk is too great, we recommend using other selection options Kameleoon offers from the hierarchy toolbar. You may find an HTML class that is safer to use or ask your developer or CSM to create a CSS selector or validate your choice.

Alternatively, you can have AI generate a path for an element.

1. Select an element.
2. In the left sidebar, click **Edit selector**.

![](../../../images/experimentation/web-experimentation/graphic-based-experimentation/getting-started-with-the-graphic-editor/css-selector.png)

3. Click **AI generation** > **Validate**.

### Conflicting changes

One reason for the popularity and widespread use of graphic editors is the ease with which they allow you to start experimentation without requiring any code. Changes are straightforward in the Graphic editor; however, you must be cautious about introducing conflicting changes to your variants.

Conflicting changes generally refers to edits made to a child element that override edits made to a parent element. An example would be editing the color of a text element (the child), then selecting the parent and changing the color of the element again. The changes will not be applied and displayed correctly because **the change to the child element will render first**.

To avoid conflicting changes, we recommend the following rules:

- Never combine HTML code with other native editing capabilities of the Graphic editor, unless you know exactly what you're doing.
- If you plan to make changes to the same element, ensure you always select the element with the same CSS selector. Watch out for elements consisting of multiple elements.

## Graphic editor fails to load

There are a few reasons the Graphic editor may fail to load.

### The Graphic editor fails to load for anyone

#### Step 1: Verify the Kameleoon script installation

If the Graphic editor isn't loading, and you are being redirected to the login page or another destination, check whether the Kameleoon script is correctly installed on the page. To do this:

1. Open your browser's developer tools.
   - On Mac, press **Command + Option + I**
   - On Windows, press **Control + Shift + C**
2. Navigate to the **Elements** tab and press **Command + F** (Mac) or **Control + F** (Windows) and search for **Kameleoon** in the DOM.

Alternatively, you can:

1. Open the **Network** tab.
2. Filter by **Kameleoon** after refreshing the page to confirm if the script is being loaded.

- **If the Kameleoon script is present:** Move on to the next troubleshooting step.
- **If the Kameleoon script is not present:** You must install the script on the website to proceed.

To install the Kameleoon script, refer to the [Web experimentation installation guide](https://help.kameleoon.com/get-started/web-experimentation-installation-guide/#install-the-kameleoon-script)

Alternatively, if you have the [Kameleoon Chrome extension](https://chromewebstore.google.com/detail/kameleoon-debug-assistant/nimncjjomfcjmfnghgaopccmdggjfoam) installed:

1. In **Developer tools**, click the **double arrows** > **Kameleoon**.
2. Click **Dev tools** > **Tag injection**.
3. Enter your sitecode under **Sitecode to inject**.
4. Click **Inject tag**.

#### Step 2: Verify domain and subdomain configuration

Ensure that the domain and all relevant subdomains have been correctly configured in Kameleoon.

1. Click **Admin** > **Project**.
2. Select **Setup** for the relevant project.
3. Click **Modify setup**.
4. Navigate to the **Domain configuration** section and add all necessary domains and subdomains.
   - For subdomains, use an asterisk (`*`). For example, `*.mywebsite.com`.
5. After adding the required domains, validate your configuration.
6. At the top of the page, click the **pencil** icon next to your project title to modify the domain URL if needed.

#### Step 3: Check for CORS policy errors

To ensure the Graphic editor functions correctly, check your browser's console for any CORS (cross-origin resource sharing) policy errors.

1. Open the console using the following shortcuts:
   - On Mac: **`Command + Option + J`**
   - On Windows: **`Control + Shift + J`**
2. Look for any CORS-related errors in red, as shown in the image below.

If you encounter CORS policy issues, you must whitelist the following Kameleoon domains and subdomains in your server's CORS policy configuration:

- `*.kameleoon.com`
- `*.kameleoon.eu`
- `*.kameleoon.io`

For more information, follow the steps outlined [here](https://developers.kameleoon.com/web-experimentation/faq/#what-are-the-kameleoon-domains-that-i-need-to-whitelist).

### The Graphic editor loads for some users and not for others

#### Step 1: Clear cache

You may be viewing an outdated version of your website, which could prevent the Graphic editor from loading. To resolve this issue:

##### Option 1: Empty your cache

1. Open the browser inspector using one of these shortcuts:
   - On Mac: **`Command + Option + I`**
   - On Windows: **`Control + Shift + C`**
2. Right-click on the browser's refresh button and select **Empty cache and hard reload**.

Once complete, try relaunching the Graphic editor.

##### Option 2: Use private browsing (incognito mode)

You can also try opening the Graphic editor in a private browsing window to ensure that no cached files are interfering.

#### Step 2: Allow third-party cookies

Ensure that your browser allows third-party cookies, as they are essential for the Graphic editor to work properly.

To enable third-party cookies:

1. Go to your browser's **Settings**.
2. Navigate to **Privacy & Security**.
3. Locate the **Third-party Cookies** section and ensure they're allowed.

#### Step 3: Disable ad blockers

Ad blockers can sometimes interfere with the proper functioning of the Graphic editor. To resolve this issue, try one of these solutions:

1. Disable your ad blocker and relaunch the Graphic editor.
2. Open a private browsing window where the ad blocker might not be active and relaunch the Graphic editor.
3. Try using another browser without ad blockers and see if the Graphic editor works there.

#### Step 4: Disable other browser extensions

Check if you have any browser extensions activated that could interfere with the proper loading of the Graphic editor. Extensions related to privacy (such as Ghostery) or performance optimizers (uBlock Origin, for example) can prevent the editor from loading correctly.

#### Step 5: Disable the VPN

Check your **VPN** application settings or taskbar for active connections and toggle it off if it’s enabled.

Disconnecting from the VPN will allow direct access to your network without routing through a different server, which may help load the Kameleoon graphic editor correctly.

#### Step 6: Switch to a different Wi-Fi network

If the Graphic editor still won't launch, there could be network-related issues. Try connecting to a different network and relaunch the editor.

#### Step 7: Use the Chrome Dev browser

The Chrome Dev browser is often more compatible with tools like the Kameleoon Graphic editor. If you're facing issues with the standard Chrome browser, switch to [Chrome Dev](https://www.google.com/chrome/dev/).

#### Step 8: Install the Graphic editor extension

Installing the [Kameleoon Graphic editor extension](https://chromewebstore.google.com/detail/kameleoon-graphical-edito/jglbnpagaignkdmebicmmblgmledhpip) can help bypass common errors, such as CORS policy issues, and improve the editor's loading performance.

#### Step 9 – Check firewall or security tools (e.g., Edgesuite, WAF)

If your company uses a firewall, Web Application Firewall (WAF), or proxy tool such as Edgesuite/Akamai, the Kameleoon Graphic Editor requests may be blocked.

To resolve this:

Contact your IT team and ask them to whitelist Kameleoon’s domains in the firewall/WAF configuration.

The domains and subdomains listed in [this article](https://developers.kameleoon.com/web-experimentation/faq/#easy-setup-with-wildcards) must be accessible.

Ensure both HTTPS traffic (GET, POST, OPTIONS) and WebSocket connections are allowed to these domains.

After updating the firewall configuration, relaunch the Graphic Editor to confirm if the issue is resolved.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/Screenshot_2025-09-09_at_14.38.14-1920x879.png)

## Data discrepancies between Kameleoon and your analytics platform

Kameleoon offers many out-of-the-box [analytics integrations](https://help.kameleoon.com/integrations/integrations-overview/) that measure the impact of your campaigns. However, you may see different results (visits, visitors, or conversions) between our reporting system and your analytics platform. Small variations are usually normal, even if your integration is correctly set up. Different analytics platforms often define metrics or are configured differently. Some analytics platforms will not manage [ITTP issues with the Safari browser](https://developers.kameleoon.com/core-concepts/itp-management), as Kameleoon does, and [bot filtering](https://help.kameleoon.com/faq/#how-does-kameleoon-filter-bot-traffic-from-my-results) rules will not be exactly the same. However, you should start looking for a problem as soon as you have a data discrepancy greater than 7-10%.
