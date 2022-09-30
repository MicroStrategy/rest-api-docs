---
title: Get prompt information
---

You can use REST APIs to get information about five supported types of prompts applied to dossiers, documents, and reports. You can get a list of the prompts that have been applied to a dossier, document or report, together with the definition of each prompt.

The prompts supported in the MicroStrategy platform are defined in EnumDSSXMLPromptType.

You can use REST APIs to return information about the following prompts:

- [Attribute element prompts](../prompt-types/attribute-element-prompts.md)
- [Attribute qualification prompts](../prompt-types/attribute-qualification-prompts.md)
- [Object prompts](../prompt-types/object-prompts.md)
- [Value prompts](../prompt-types/value-prompts.md)
- [Metric expression prompts](../prompt-types/metric-expression-prompts.md)
- [Hierarchy qualification prompts](../prompt-types/hierarchy-qualification-prompts.md)
- [Level prompts](../prompt-types/level-prompts.md)

You can identify prompts with the prompt key, prompt ID, or prompt name. If more than one identifier is provided, the logic for identifying the prompt will follow this order: key, ID, name. The prompt key is used first if is available because the key is the only unique value. Since the same prompt can be applied more than once to a dataset, the ID and the name might not be unique. Despite this possibility, the name is often the most convenient way to identify a prompt because of its descriptive nature.

To help you get started using REST APIs to build feature-rich applications that leverage MicroStrategy's prompt capabilities, we have provided a [workflow sample for getting a prompt definition](./workflow-get-prompt-information.md).
