---
title: Value Prompts
description: A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-30ed13b7-880a-4b38-bdf7-363d868bf70c?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase.

You can use REST APIs to perform the following action on value prompts:

- [Answer a value prompt](#answer-a-value-prompt)
  - [Provide Specific Prompt Answers](#provide-specific-prompt-answers)
- [Get Information About a Value Prompt](#get-information-about-a-value-prompt)
- [Value Prompt Definition](#value-prompt-definition)
- [Possible Prompt Execution Errors for Value Prompts](#possible-prompt-execution-errors-for-value-prompts)

## Answer a value prompt

You use the following REST API endpoints to answer a value prompt applied to a dossier, document, or report:

- PUT `/api/documents/{id}/instances/{instanceId}/prompts/answers`

- PUT `/api/reports/{reportId}/instances/{instanceId}/prompts/answers`

### Provide Specific Prompt Answers

You provide answers to a value prompt in the body parameter of the request. You must provide the prompt ID and specify the prompt type as "VALUE".

![swagger_promptAnswerModel](../../../images/swagger_promptAnswerModel.png)

Sample code for answering a value prompt for each data type is provided below:

- Numeric prompt

  ```json
  {
    "prompts": [
      {
        "key": "9BC4631D436CAA78D7A70AB2D0635D88@0@10",
        "type": "VALUE",
        "answers": "2015"
      }
    ]
  }
  ```

- Date prompt

  ```json
  {
    "prompts": [
      {
        "key": "A46842D548C3F0CEEDD3979528480FE5@0@10",
        "type": "VALUE",
        "answers": "2017-09-27T23:37:39.000+0000"
      }
    ]
  }
  ```

- Text prompt

  ```json
  {
    "prompts": [
      {
        "key": "CF604AA948AF21CBC67AF98FBA614E0F@0@10",
        "type": "VALUE",
        "answers": "q"
      }
    ]
  }
  ```

- Big decimal

  ```json
  {
    "prompts": [
      {
        "key": "6F96306444CD3F2597B3FF92E2220356@0@10",
        "type": "VALUE",
        "answers": "123"
      }
    ]
  }
  ```

## Get Information About a Value Prompt

You use the following REST API endpoints to get information about value prompts applied to dossier, document, and report objects in the metadata, as well as instances of those objects:

- GET `/api/documents/{id}/prompts`

- GET `/api/documents/{id}/instances/{instanceId}/prompts`

- GET `/api/reports/{reportId}/prompts`

- GET `/api/reports/{reportId}/instances/{instanceId}/prompts`

You provide the ID of the document, dossier, or report in the path of the request, as well as the instance ID if you are getting information about a prompt applied to an instance of a document, dossier, or report. The response contains the prompt information.

![swagger_promptAnswerModel_response](../../../images/swagger_promptAnswerModel_response.png)

## Value Prompt Definition

The model for the definition of a value prompt can be represented with the following fields:

- `id` GUID of the prompt.
- `name` Name of the prompt. This is the most user-friendly value that can be used to identify the prompt.
- `key` Unique identifier of the prompt. It is important to use this to identify the prompt if the same prompt is used more than once in the report, document or dossier.
- `title` Title of the prompt.
- `required` Specifies whether this prompt is required or optional.
- `type` Prompt type. For value prompts, the value is "VALUE".
- `min` Minimum value of prompt answer.

:::tip

This value depends on the data type of the value prompt. It can be date, number, string, and so on.

:::

- `max` Maximum value of prompt answer.

:::tip

This value depends on the data type of the value prompt. It can be date, number, string, and so on.

:::

- `defaultAnswer` Default prompt answer

- `answers` Answer to be used for prompt.

- `dataType` Data type of prompt value (from [EnumDSSXMLDataType](https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLDataType.html)). The following data types are supported by value prompts:

  - Numeric prompt
  - Date prompt
  - Text prompt
  - Big decimal

Sample JSON for a value prompt definition is provided below.

```json
[
  {
    "id": "0CE45CA4483E29FFB0AF969D68588E95",
    "key": "0CE45CA4483E29FFB0AF969D68588E95@0@10",
    "name": "NamePrompt",
    "title": "Name Prompt",
    "type": "VALUE",
    "required": true,
    "answers": "Darren",
    "defaultAnswer": "Darren",
    "dataType": 8
  }
]
```

Sample code for the value prompt definition for each data type is provided below:

- Numeric prompt

  ```json
  {
    "key": "9780961349394064B659679AA3D0A822@0@10",
    "name": "Value (Number)",
    "title": "Number",
    "type": "VALUE",
    "required": true,
    "max": 50,
    "min": 0.25,
    "dataType": "NUMERIC"
  }
  ```

- Date prompt

  ```json
  {
    "key": "A46842D548C3F0CEEDD3979528480FE5@0@10",
    "name": "Value (Date)",
    "title": "Date",
    "type": "VALUE",
    "required": true,
    "max": "2018-09-26T23:37:39.000+0000",
    "min": "2018-09-26T23:37:39.000+0000",
    "answers": "2017-09-27T04:00:00.000+0000",
    "defaultAnswer": "2018-09-26T04:00:00.000+0000",
    "dataType": "DATE"
  }
  ```

- Text prompt

  ```json
  {
    "key": "CF604AA948AF21CBC67AF98FBA614E0F@0@10",
    "name": "Value (Text)",
    "title": "Text",
    "type": "VALUE",
    "required": true,
    "max": 5,
    "min": 1,
    "answers": "q",
    "defaultAnswer": "ab",
    "dataType": "TEXT"
  }
  ```

- Big decimal

  ```json
  {
    "key": "6F96306444CD3F2597B3FF92E2220356@0@10",
    "name": "Value (Big Decimal)",
    "title": "Big decimal",
    "type": "VALUE",
    "required": true,
    "max": 999999999999.4,
    "min": 0,
    "answers": 2000,
    "defaultAnswer": 12,
    "dataType": "NUMERIC"
  }
  ```

## Possible Prompt Execution Errors for Value Prompts

Numerous errors can occur during the prompt execution workflow, when answering prompts. Some of these are [general errors](../prompt-execution-errors.md), and others occur only for specific types of prompts. The errors listed below are specific to value prompts.

- Does not meet minimum date range

  HTTP - 400

  ```json

  {
    "code": "ERR006",
    "message": "The date(2011-08-07T21:09:50.000+0000) provided for prompt name:
     Value (Date) key: 180E0FE14CA4A62957488C8EBE6FE321@0@10 does not meet the
     minimum date range specified(2012-10-08T21:09:50.000+0000) by the prompt",
    "ticketId": "6f5c692f3c294e0b95d2d02fd4a3402a"
  }
  ```

- Exceeds maximum date range

  HTTP - 400

  ```json

  {
    "code": "ERR006",
    "message": "The date(2040-08-07T21:09:50.000+0000) provided for prompt name:
     Value (Date) key: 180E0FE14CA4A62957488C8EBE6FE321@0@10 exceeds the maximum
     date range specified(2012-10-08T21:09:50.000+0000) by the prompt",
    "ticketId": "1e8068d7ca044ba1abd828f473feb3d7"
  }
  ```

- Does not meet minimum value

  HTTP - 400

  ```json

  {
    "code": "ERR006",
    "message": "The value(0.1456) provided for prompt name: Value (Number)
     key: 2CBAE32748F6ECE80617CF9A6B34003D@0@10 does not meet the minimum
     required value(0.999999999)",
    "ticketId": "7937c4d61aad4f34b9ae7433efe3237e"
  }
  ```

- Exceeds maximum value

  HTTP - 400

  ```json

  {
    "code": "ERR006",
    "message": "The value(200000.99) provided for prompt name: Value (Number)
     key: 2CBAE32748F6ECE80617CF9A6B34003D@0@10 exceeds the maximum allowed
     value(100000.99}",
    "ticketId": "6f5c692f3c294e0b95d2d02fd4a3402a"
  }
  ```

- Text length too short

  HTTP - 400

  ```json

  {
    "code": "ERR006",
    "message": "The number of characters provided for prompt name: Value (Text)
     key: CF604AA948AF21CBC67AF98FBA614E0F@0@10 does not meet the minimum
     required(2} text length.",
    "ticketId": "9c91e304e5a74881a8579230ea0d463c"
  }
  ```

- Text length too long

  HTTP - 400

  ```json

  {
    "code": "ERR006",
    "message": "The number of characters provided for prompt name: Value (Text)
     key: CF604AA948AF21CBC67AF98FBA614E0F@0@10 exceeds the maximum allowed(5)
     text length.",
    "ticketId": "67fb558e27c34d6e816a8a17920a23eb"
  }
  ```
