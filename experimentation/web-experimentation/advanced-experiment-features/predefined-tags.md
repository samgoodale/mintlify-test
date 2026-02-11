---
sidebar_position: 4
---

# Predefined tags

There are predefined tags that you can use with your experiments to change the default behavior of Kameleoon:

- **TECHNICAL**:  
  When you add a `TECHNICAL` tag to an experiment, Kameleoon will display the variation of the experiment, but no data will be collected or sent to an analytics platform until [consent](https://help.kameleoon.com/project-management/consent-management-policy/#consent-policy) has been given.  
  This tag is typically used for experiments or personalization campaigns that display the same variant to all users.

- **DELAYED**:  
  Adding the `DELAYED` tag to an experiment allows you to delay non-essential experiments until after the first page load. Experiments with this tag are intelligently managed:  
  Kameleoon doesn't download the configuration until an idle time of at least 10 seconds after the initial page load **or** until the visitor is targeted and allocated with a variant that is not the control variant.

- **LIVE-UPDATE**:  
  By default, Kameleoon downloads active experiments and includes them in the application file (`kameleoon.js`).  
  The browser stores and caches this file for 90 minutes. If you stop or modify an experiment, targeted visitors returning to a page with active experiments within the 90-minute caching period may still see the experiment due to the cached version.  
  To make more frequent updates without being impacted by browser caching, the `LIVE-UPDATE` tag refreshes any experiment within **one minute**.  
  This is particularly useful for campaigns that require regular updates.

- **HOLDOUT**:  
  Create a control group that remains unaffected by any active campaigns. This allows you to establish a reliable baseline to measure the aggregate impact of all changes against a group that experiences no modifications.  
  Set up an experiment in Kameleoon and tag it with the `HOLDOUT` label.  
  [More about this tag](https://help.kameleoon.com/experimentation/web-experimentation/advanced-experiment-features/create-reliable-baselines-with-holdouts/)

- **MUTUALLY EXCLUSIVE GROUP**:  
  Group campaigns so that each visitor sees only one campaign per group, reducing overlap and improving test clarity.  
  Follow the naming convention `ME-GROUP-{GROUP NAME}` to tag each campaign in the group, such as `ME-GROUP-A`.  
  This naming signals Kameleoon to treat the campaigns within each group as mutually exclusive.  
  [More about this tag](https://help.kameleoon.com/experimentation/web-experimentation/advanced-experiment-features/prevent-overlapping-campaigns-with-mutually-exclusive-groups/)
