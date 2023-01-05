---
title: Use prompts objects
description: Prompts are a platform capability of MicroStrategy that refine the data displayed in reports, documents, and dossiers. The system poses the prompt as a question during execution of a dossier, document, or report, and the answer determines the data that is returned. A prompt is similar to a filter; both are applied at runtime and customize the results of data that is returned from a data source. The actual prompt definition cannot be changed at runtime, but the answers to the prompt can be changed dynamically. Together with filtering, prompts allow you to build feature-rich applications by leveraging core MicroStrategy platform capabilities.
---

<Available since="2021 Update 1" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c22a4c1c-85a3-4f3b-8b34-ffeebd05e795?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

Prompts are a platform capability of MicroStrategy that refine the data displayed in reports, documents, and dossiers. The system poses the prompt as a question during execution of a dossier, document, or report, and the answer determines the data that is returned. A prompt is similar to a [filter](../filter-data/filter-data.md); both are applied at runtime and customize the results of data that is returned from a data source. The actual prompt definition cannot be changed at runtime, but the answers to the prompt can be changed dynamically. Together with filtering, prompts allow you to build feature-rich applications by leveraging core MicroStrategy platform capabilities.

Prompts are applied directly to reports and stored with the dataset for the report. Prompts are applied to dossiers and documents more indirectly. When you use a prompted report as a dataset for a dossier or document, the prompts stored with the dataset are automatically applied to the document or dossier.

You can use REST APIs to integrate prompts into your application workflow. You can provide prompt answers to dossiers, documents, and reports, and you can get information about the prompts that have been applied to a dossier, document or report object or instance.

- [Answering prompts](./answer-prompts.md) You can use REST APIs to provide prompt answers to dossiers, documents, and reports, to customize the data that is returned. Because prompts are stored with the dataset, you cannot add or change a prompt definition at runtime, but you can change the answers to the prompt. You can use REST APIs to provide new prompt answers, use the default prompt answers, or close optional prompts without providing an answer.
- [Getting information about prompts](./get-prompt-information/get-prompt-information.md) You can use REST APIs to get information about prompts applied to dossiers, documents, and reports—both objects in the metadata and instances of those objects. You can get a list of the prompts that have been applied to a dossier, document or report, together with the definition of those prompts.
- [Prompt types](./prompt-types/prompt-types.md) REST APIs can be used with all prompt types, but the actions that can be performed vary depending on the prompt type. For all prompt types, you can get prompt definitions, answer prompts with default answers, close prompts by providing no answers, or reset prompts. For some, but not all, of the prompt types, you can provide specific answers for prompts.
- [Prompt execution errors](./prompt-execution-errors.md) Numerous errors can occur during prompt execution. Some errors are the result of incorrect input, while others are caused by issues in the workflow. Certain errors occur for all types of prompts, while others occur only for specific types of prompts.

:::tip

For general information about prompts, see the [MicroStrategy product help](https://doc-archives.microstrategy.com/producthelp/10.5/basicreporting/webhelp/lang_1033/content/basicreporting/Asking_for_user_input__Prompts.htm#brcreatingquery_2014045409_1076748). For information on using prompts in data displayed on a mobile device, see the MicroStrategy Mobile Design and Administration Guide.

:::
