---
sidebar_position: 2
---

# Multi-language experiments

Kameleoon makes it quick and easy to implement multi-language experiments. In this tutorial, you will learn how to create a multi-language variant using the Graphic editor, using the [Fossil website](https://www.fossil.com/) as an example.

## Goal

The goal of this guide is to change the header label "Order Status" ("Statut de la commande" in French) to "Order Tracking" ("Suivi de commande" in French).

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/multi-language-experiments/header.png)

## Steps

1. Launch the Graphic editor.
2. Select "Order Status" in the header and generate the selector based on **Content**. If the label you want to edit is in a Shadow DOM see [this article](/experimentation/web-experimentation/advanced-experiment-features/using-shadow-dom-elements-in-the-graphic-editor#working-with-shadow-dom-in-the-graphic-editor)
3. Enter "Order Tracking".
4. Change the language to French by clicking **Ship to** > **Europe** > **France**.
5. Repeat step **2** and **3**, entering "Statut de la commande" in the header.
6. Change the text to "Suivi de commande".
7. Simulate the experiment to verify your variant.

![](../../../images/experimentation/web-experimentation/advanced-experiment-types/multi-language-experiments/demo.gif)