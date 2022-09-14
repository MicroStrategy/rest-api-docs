---
title: Prompt Execution Errors
description: Various errors can occur during prompt execution. Some errors can happen with all types of prompts, and others occur only for specific types of prompts.
---

Various errors can occur during prompt execution. Some errors can happen with [all types of prompts](#errors-that-apply-to-all-prompt-types), and others occur only for [specific types of prompts](#prompt-specific-errors). Some causes of errors during prompt execution include:

- Incorrect input:
  - ID for the prompt does not exist in the object (dossier, document, or report)
  - Name for the prompt does not exist in the object (dossier, document, or report)
  - Attribute element or name could not be found in the attribute element list prompt
  - ID (`objectId`) for an object prompt does not exist in the metadata or could not be found
  - Answer for a value prompt is outside of the expected range
  - Answer for a value prompt is of an unexpected data type
- Issues in the workflow:
  - The caller attempts to dismiss required prompts
  - The caller attempts to answer the prompt with no answers but the prompt requires them

## Errors That Apply to All Prompt Types

- Bad request. JSON is not formatted properly.

  ```json
  HTTP - 400
  {
    "code": "ERR006",
    "message": "Unexpected character ('\"' (code 34)): was expecting a colon to separate field name and value \n at [Source: (org.glassfish.jersey.message.internal.ReaderInterceptorExecutor$UnCloseableInputStream); line: 4, column: 13]",
    "ticketId": "307a1fbcc6394306b0c41f302d6ec5d6"
  }
  ```

- Message inbox could not be found

  ```json
  HTTP - 404
  {
    "code": "ERR004",
    "iServerCode": -2147468986,
    "message": "(Message not found in user history list. It may have been deleted from other session already. Please refresh your history list.)",
    "ticketId": "a57588a29fa646e2b167d3bc1d182446"
  }
  ```

- Unable to identify prompt based on key

  ```json
  HTTP - 400
  {
    "code": "ERR006",
    "message": "Failed to locate the prompt by either key: G46842D548C9F0CEEDD3979528480FE5@0@10, please verify this information is correct.",
    "ticketId": "30190f8b9f6b477f88229cc150b6b2ad"
  }
  ```

- Unable to identify prompt based on name

  ```json
  HTTP - 400
  {
    "code": "ERR006",
    "message": "Failed to locate the prompt by either name: my prompt, please verify this information is correct.",
    "ticketId": "66e6e02e57fc4b5db7ba6cc9109f8b1e"
  }
  ```

- Unable to identify prompt based on ID

  ```json
  HTTP - 400
  {
    "code": "ERR006",
    "message": "Failed to locate the prompt by either id: 138C60BC4999F6BEEFBFAFB970770A3F, please verify this information is correct.",
    "ticketId": "af62ab2e10b64a7d8b45f267ac4e4c1d"
  }
  ```

- Provided prompt type does not match actual WebPrompt prompt type (type provided in the JSON helps with serialization of the object)

  ```json
  HTTP - 400
  {
    "code": "ERR006",
    "message": "The supplied prompt type OBJECTS for prompt A46842D548C3F0CEEDD3979528480FE5@0@10 does not match, this prompt is of type VALUE please verify this information.",
    "ticketId": "61ddb2cc60be4d4d8d6d4cd05b07da51"
  }
  ```

- Attempted to answer with default answers, but the prompt does not have any

  ```json
  HTTP - 400
  {
    "code": "ERR006",
    "message": "The supplied prompt type OBJECTS for prompt A46842D548C3F0CEEDD3979528480FE5@0@10 does not match, this prompt is of type VALUE please verify this information.",
    "ticketId": "61ddb2cc60be4d4d8d6d4cd05b07da51"
  }
  ```

## Prompt-Specific Errors

- [Errors that occur only for attribute element prompts](#errors-that-occur-only-for-attribute-element-prompts)
- [Errors that occur only for object prompts](#errors-that-occur-only-for-object-prompts)
- [Errors that occur only for value prompts](#errors-that-occur-only-for-value-prompts)

Code samples for prompt-specific errors are provided below.

- ### Errors That Occur Only for Attribute Element Prompts

  - Incorrect attribute element format

  - Unable to find attribute element by name

    ```json
    HTTP - 400
    {
      "code": "ERR006",
      "message": "Unable to find elements that match 1234 for prompt name: Elements of Year key: 040A30DF43F18A2DFC208A8F4AC0A931@0@10.",
      "ticketId": "1f32bda3146e46539ce36f6d77f3ce66"
    }
    ```

  - Unable to find attribute element by ID

    ```json
    HTTP - 400
    {
      "code": "ERR006",
      "message": "Prompt validation failed. This is a required prompt.",
      "ticketId": "411a15817f3e4c9d862513ccc8390170"
    }
    ```

  - Too few elements provided

    ```json
    HTTP - 400
    {
      "code": "ERR006",
      "message": "The number of attribute elements for prompt name: Elements of Year key: 040A30DF43F18A2DFC208A8F4AC0A931@0@10 does not meet the minimum required(2} answers.",
      "ticketId": "d5dd190613944873a2c40ac0c2b995db"
    }
    ```

  - Too many elements provided

    ```json
    HTTP - 400
    {
      "code": "ERR006",
      "message": "The number of attribute elements for prompt name: Elements of Year key: 040A30DF43F18A2DFC208A8F4AC0A931@0@10 exceeds the maximum allowed(2} answers.",
      "ticketId": "35a8c3ffb18d4105aaaaa15df38dcb1e"
    }
    ```

  - Incorrect attribute element format for attribute element prompt

- ### Errors That Occur Only for Object Prompts

  - Too many prompt answers provided

    ```json
    HTTP - 400
    {
      "code": "ERR006",
      "message": "The number of objects provided for prompt name: Predefined list of objects key: 12FF3D5D43A6A17E8847FB9304FEA1E1@0@10 exceeds the maximum allowed(3} answers",
      "ticketId": "5352773f8b1440a9891911bc2cdd05b4"
    }
    ```

  - Too few prompt answers provided

    ```json
    HTTP - 400
    {
      "code": "ERR006",
      "message": "The number of objects provided for prompt name: Predefined list of objects key: 12FF3D5D43A6A17E8847FB9304FEA1E1@0@10 does not meet the minimum required(3} answer.",
      "ticketId": "3439cf127157448abfb621998868ad19"
    }
    ```

- ### Errors That Occur Only for Value Prompts

  - Incorrect data type provided for answer

  - Text length too short

    ```json
    HTTP - 400
    {
      "code": "ERR006",
      "message": "The number of characters provided for prompt name: Value (Text) key: CF604AA948AF21CBC67AF98FBA614E0F@0@10 does not meet the minimum required(2} text length.",
      "ticketId": "67fb558e27c34d6e816a8a17920a23eb"
    }
    ```

  - Text length too long

    ```json
    HTTP - 400
    {
      "code": "ERR006",
      "message": "The number of characters provided for prompt name: Value (Text) key: CF604AA948AF21CBC67AF98FBA614E0F@0@10 exceeds the maximum allowed(5) text length.",
      "ticketId": "67fb558e27c34d6e816a8a17920a23eb"
    }
    ```
