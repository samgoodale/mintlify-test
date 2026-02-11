---
sidebar_position: 2
---

# Add and manage variations

The Kameleoon Graphic Editor makes it easy to add and manage variations for your experiments. This guide will walk you through the basic functions available in the Variations panel, including adding new variations, duplicating existing ones, and utilizing the URL redirection feature.

## Variations panel overview

![](https://wordpress-um.kameleoon.com/wp-content/uploads/variation-panel.png)

The Variations panel, located on the left side of the editor, is where you manage your experiment's variations. Here you can add, edit, duplicate, and delete variations.

- **Control variation:** This is your original page before any changes are made. This page is used as a reference for your experiment; you cannot change or delete it.
- **Variation 1, Variation 2, etc.:** These are the different variations you create to test against the control variation. You can modify each variation independently. By default, Kameleoon creates a variation called "Variation 1". You can add or delete as many variations as you want, but you must always keep at least one variation in your experiment.

## Adding a new variation

To add a new variation:

- Click **+ Add variation** in the Variations panel.

A new variation will appear in the list. You can start modifying this variation by adding or editing elements.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/new-variation.png)

## Managing variations

### Duplicating a variation

1. Hover over the variation you want to duplicate.
2. Click the **duplicate icon** that appears next to the variation name.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/manage-variations.png)

### Renaming a variation

1. Click the **three dots** next to the variation's name.
2. Select **Rename variation** from the dropdown menu.
3. Enter the new name and press Enter.

![](../../../images/experimentation/web-experimentation/graphic-based-experimentation/add-and-manage-variations/rename-variation.png)

### Custom code

**Custom code** lets you add custom CSS and JS code to your variations. To add custom code:

1. Click the **three dots** next to a variation's name.
2. Click **CSS** or **JSS** to access your desired code.
3. Enter your custom code > click **Save**.

### URL redirection

The URL redirection feature allows you to redirect users to a different URL as part of your experiment. This feature is useful if you want to test completely different pages against each other.

To set up URL redirection:

1. Click the **three dots** next to a variation's name.
2. Select **Redirection URL** from the dropdown menu.
3. A panel opens on the right-hand side of the editor.

![](https://wordpress-um.kameleoon.com/wp-content/uploads/redirection-url.png)

**Global redirection:**

- Select **Global redirection** if you want all users who are assigned to this variation to be redirected to a specific URL.
- Enter the target URL in the provided field.

**Include query parameters:**

- If you want to include query parameters from the original URL in the redirected URL, check the box labeled **Include query parameters in the redirect**.
- This option ensures that any query parameters (the text after the `?` in the original URL) are passed to the new URL, maintaining the integrity of dynamic content or tracking information.

**Redirection by parameter:**

- Select **Redirection by parameter** if you want to redirect users based on specific query parameters in the URL.
- Enter the parameter name in the provided field. The redirection will occur only if this parameter is present in the original URL.

4. After configuring the redirection settings, click **Save** to apply the changes.

### Preview

Click **Preview** to open a preview of your variation in a new tab.

### Search & replace

Click **Search & replace** to search for a specific word or character and replace it with new text. To search and replace within a variation, click the **three dots** next to a variation's name > **Search & replace**.

You have several options in the pop-in that opens.

- **Replace all:**
  - Choose this option to replace all instances of the entered text, both partial and complete.
  - For example, if you **search** for run and **replace** with walk, **all** instances of run (**run** and **run**ning, for example) will be replaced with **walk** (run > **walk**, running > **walk**ing).
- **Distinguish uppercase letters and lowercase letters:** Choose this option to make your search and replace **case-sensitive**.
  - For example, if you search for **Blueberry**, only instances of **B**lueberry (not blueberry, blueBerry, or BLUEBERRY) will be replaced.
- **Replace whole words corresponding to the research only:**
  - Choose this option to replace instances of **whole** words. Word fragments (running, as per the above example) will not be replaced.

### Delete variation

To delete a variation:

1. Click the three dots next to a variation's name.
2. Click **Delete variation** > **YES**.

Your experiment must always have at least one variation.

![](../../../images/experimentation/web-experimentation/graphic-based-experimentation/add-and-manage-variations/delete-varation.png)
