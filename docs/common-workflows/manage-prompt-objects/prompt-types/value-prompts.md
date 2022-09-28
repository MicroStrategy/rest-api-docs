---
title: Value prompts
description: A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2541f642-4418-4621-980d-40fa31236eb8?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase.

Use REST APIs to perform the following actions on value prompts:

- [Retrieve a prompt's definition](../retrieve-a-prompts-definition.md)
- [Create a new prompt](#create-a-new-prompt)
- [Update an existing prompt](#update-an-existing-prompt)

You can manipulate the following types of value prompts through REST APIs:

- [Create a new prompt](#create-a-new-prompt)
  - [Date](#date)
  - [Text](#text)
  - [Number](#number)
  - [Big Decimal](#big-decimal)
  - [Long](#long)
- [Update an existing prompt](#update-an-existing-prompt)

## Create a new prompt

1. To create a value prompt, you must enter the required fields with the correct information, using [POST /api/model/prompts](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt).
1. The response can change based on the request parameters provided by the caller. Use the following parameters.

   | Location | Name                | Description                                                                |
   | -------- | ------------------- | -------------------------------------------------------------------------- |
   | header   | X-MSTR-authToken    | The authorization token                                                    |
   | header   | X-MSTR-ProjectID    | The ID of the project                                                      |
   | header   | X-MSTR-MS-Changeset | The ID of the changeset                                                    |
   | query    | showExpressionAs    | The parameter that specifies the format in which the response is returned. |

1. The sections below details the different types of value prompts you can create.

### Date

You can create a prompt that allows the results to be filtered based on a specific date and time, by providing the fields shown below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.

| Fields        | Name                 | Description                                                                                                         | Data Type | Required?          |
| ------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------- | --------- | ------------------ |
| information   | name                 | The name of the prompt. This should be a user-friendly name for identifying the prompt.                             | string    | :heavy_check_mark: |
| information   | subType              | The type of prompt. The "subType" for a date value prompt is "prompt_date".                                         | string    | :heavy_check_mark: |
| information   | destinationFolderId  | The folder ID where the new prompt is saved.                                                                        | string    | :heavy_check_mark: |
| title         |                      | The title of the prompt.                                                                                            | string    |                    |
| instruction   |                      | The instruction on how to apply the prompt.                                                                         | string    |                    |
| question      | type                 | The type of date. This can be "date" or "date_time".                                                                | string    | :heavy_check_mark: |
| defaultAnswer | value                | A list of date values used as the default answer. The date values can be static or dynamic.                         | string    |                    |
| restriction   | required             | An indicator that specifies whether a prompt answer is required or not.                                             | boolean   |                    |
| restriction   | allowPersonalAnswers | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple". | string    |                    |
| restriction   | min                  | The minimum value of the date that can be set. The date value can be static or dynamic.                             | string    |                    |
| restriction   | max                  | The maximum value of the date that can be set. The date value can be static or dynamic.                             | string    |                    |

Sample code for creating the different types of value prompt's definitions is provided below.

Static date:

````json
"date": {
    "mode": "static",
    "value": "2007-12-03"  //(A date without a time-zone in the ISO-8601 calendar system, YYYY-MM-DD)
}
```json

Dynamic date:
```json
"date": {
    "mode": "dynamic",
    "dayOffset": 2,
    "monthOffset": 0,
    "adjustmentMonthlyByDay": {
        "day": 1
    }
}
````

Static time:

```json
"time": {
    "hourMode": "static",
    "hour": 12,
    "minuteAndSecondMode": "static",
    "minute": 5,
    "second": 10
}
```

Dynamic time:

```json
"time": {
    "hourMode": "dynamic",
    "hourOffset": 1,
    "minuteAndSecondMode": "dynamic",
    "minuteOffset": 2,
    "secondOffset": 5
}
```

Sample code for creating a date prompt's definition is provided below.

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "subType": "prompt_date",
    "name": "Pick a valid date"
  },
  "title": "Date",
  "instruction": "Enter a value (Date).",
  "question": {
    "type": "date"
  },
  "defaultAnswer": {
    "value": {
      "dynamicDateTime": {
        "type": "date",
        "date": {
          "mode": "dynamic",
          "dayOffset": 8,
          "monthOffset": 0,
          "adjustmentNone": {}
        }
      }
    }
  },
  "restriction": {
    "required": true,
    "allowPersonalAnswers": "none",
    "min": {
      "dynamicDateTime": {
        "type": "date",
        "date": {
          "mode": "dynamic",
          "dayOffset": 5,
          "monthOffset": 0,
          "adjustmentNone": {}
        }
      }
    },
    "max": {
      "dynamicDateTime": {
        "type": "date",
        "date": {
          "mode": "dynamic",
          "dayOffset": 15,
          "monthOffset": 0,
          "adjustmentNone": {}
        }
      }
    }
  }
}
```

### Text

You can create a prompt that allows the results to be filtered based on a specific string, by providing the fields show below.

| Fields        | Name                 | Description                                                                                                         | Data Type | Required?          |
| ------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------- | --------- | ------------------ |
| information   | name                 | The name of the prompt. This should be a user-friendly name for identifying the prompt.                             | string    | :heavy_check_mark: |
| information   | subType              | The type of prompt. The "subType" for a value text prompt is "prompt_string".                                       | string    | :heavy_check_mark: |
| information   | destinationFolderId  | The folder ID where the new prompt is saved.                                                                        | string    | :heavy_check_mark: |
| title         |                      | The title of the prompt.                                                                                            | string    |                    |
| instruction   |                      | The instruction on how to apply the prompt.                                                                         | string    |                    |
| defaultAnswer | value                | A list of text values used as the default answer.                                                                   | string    |                    |
| restriction   | required             | An indicator that specifies whether a prompt answer is required or not.                                             | boolean   |                    |
| restriction   | allowPersonalAnswers | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple". | string    |                    |
| restriction   | min                  | The minimum number of characters that can be entered.                                                               | integer   |                    |
| restriction   | max                  | The maximum number of characters that can be entered.                                                               | integer   |                    |

Sample code for creating a text prompt's definition is provided below.

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "subType": "prompt_string",
    "name": "Enter a text"
  },
  "title": "Text",
  "instruction": "Enter a value (Text).",
  "defaultAnswer": {
    "value": "New York"
  },
  "restriction": {
    "required": false,
    "allowPersonalAnswers": "multiple",
    "min": 11,
    "max": 456782
  }
}
```

### Number

You can create a prompt that allows the results to be filtered based on a specific number, by providing the fields shown below.

| Fields        | Name                 | Description                                                                                                         | Data Type | Required?          |
| ------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------- | --------- | ------------------ |
| information   | name                 | The name of the prompt. This should be a user-friendly name for identifying the prompt.                             | string    | :heavy_check_mark: |
| information   | subType              | The type of prompt. The "subType" for a number prompt is "prompt_double".                                           | string    | :heavy_check_mark: |
| information   | destinationFolderId  | The folder ID where the new prompt is saved.                                                                        | string    | :heavy_check_mark: |
| title         |                      | The title of the prompt.                                                                                            | string    |                    |
| instruction   |                      | The instruction on how to apply the prompt.                                                                         | string    |                    |
| defaultAnswer | value                | A list of number values used as the default answer.                                                                 | string    |                    |
| restriction   | required             | An indicator that specifies whether a prompt answer is required or not.                                             | boolean   |                    |
| restriction   | allowPersonalAnswers | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple". | string    |                    |
| restriction   | min                  | The minimum number value that can be set.                                                                           | double    |                    |
| restriction   | max                  | The maximum number value that can be set.                                                                           | double    |                    |

Sample code for creating a number prompt's definition is shown below.

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "subType": "prompt_double",
    "name": "Choose a number"
  },
  "title": " ",
  "instruction": "Enter a value (Number).",
  "defaultAnswer": {
    "value": 0
  },
  "restriction": {
    "required": false,
    "allowPersonalAnswers": "none",
    "min": -100,
    "max": 2
  }
}
```

### Big decimal

You can create a prompt that allows the results to be filtered based on a specific big decimal value, by providing the fields shown below.

| Fields        | Name                 | Description                                                                                                         | Data Type   | Required?          |
| ------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------ |
| information   | name                 | The name of the prompt. This should be a user-friendly name for identifying the prompt.                             | string      | :heavy_check_mark: |
| information   | subType              | The type of prompt. The "subType" for a big decimal prompt is "prompt_big_decimal".                                 | string      | :heavy_check_mark: |
| information   | destinationFolderId  | The folder ID where the new prompt is saved.                                                                        | string      | :heavy_check_mark: |
| title         |                      | The title of the prompt.                                                                                            | string      |                    |
| instruction   |                      | The instruction on how to apply the prompt.                                                                         | string      |                    |
| defaultAnswer | value                | A list of big decimal values used as the default answer.                                                            | string      |                    |
| restriction   | required             | An indicator that specifies whether a prompt answer is required or not.                                             | boolean     |                    |
| restriction   | allowPersonalAnswers | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple". | string      |                    |
| restriction   | min                  | The minimum big decimal value that can be set.                                                                      | big decimal |                    |
| restriction   | max                  | The maximum big decimal value that can be set.                                                                      | big decimal |                    |

Sample code for creating a big decimal prompt's definition is shown below.

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "subType": "prompt_big_decimal",
    "name": "Choose a Big Decimal Value"
  },
  "title": "Big decimal",
  "instruction": "Enter a value (Big Decimal).",
  "defaultAnswer": {
    "value": "0.1"
  },
  "restriction": {
    "required": true,
    "allowPersonalAnswers": "none",
    "min": "0",
    "max": "1.0"
  }
}
```

### Long

You can create a prompt that allows the results to be filtered based on a specific long value, by providing the fields shown below

| Fields        | Name                 | Description                                                                                                         | Data Type | Required?          |
| ------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------- | --------- | ------------------ |
| information   | name                 | The name of the prompt. This should be a user-friendly name for identifying the prompt.                             | string    | :heavy_check_mark: |
| information   | subType              | The type of prompt. The "subType" for a long is "prompt_long".                                                      | string    | :heavy_check_mark: |
| information   | destinationFolderId  | The folder ID where the new prompt is saved.                                                                        | string    | :heavy_check_mark: |
| title         |                      | The title of the prompt.                                                                                            | string    |                    |
| instruction   |                      | The instruction on how to apply the prompt.                                                                         | string    |                    |
| defaultAnswer | value                | A list of long values used as the default answer.                                                                   | long      |                    |
| restriction   | required             | An indicator that specifies whether a prompt answer is required or not.                                             | boolean   |                    |
| restriction   | allowPersonalAnswers | An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple". | string    |                    |
| restriction   | min                  | The minimum long value that can be set.                                                                             | long      |                    |
| restriction   | max                  | The maximum long value that can be set.                                                                             | long      |                    |

Sample code for creating a long prompt's definition is shown below.

```json
{
  "information": {
    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",
    "subType": "prompt_long",
    "name": "Choose a long value"
  },
  "title": "Number",
  "instruction": "Enter a value (Number).",
  "defaultAnswer": {
    "value": -2147483648
  },
  "restriction": {
    "required": true,
    "allowPersonalAnswers": "none",
    "min": -2147483648,
    "max": 2147483647
  }
}
```

## Update an existing prompt

1. Update the definition of an object prompt using [PUT /api/model/prompts/{promptId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt).
1. Provide the following headers in the request:

   | Location | Name                | Description             |
   | -------- | ------------------- | ----------------------- |
   | header   | X-MSTR-authToken    | The authorization token |
   | header   | X-MSTR-ProjectID    | The ID of the project   |
   | header   | X-MSTR-MS-Changeset | The ID of the changeset |

1. In addition to the above header, you should also provide the ID of the prompt you want to update.
1. Modify the fields for the appropriate prompt type using the tables linked below. The `"subType"` field cannot be modified through this REST API.

   - [Date](#date)
   - [Text](#text)
   - [Number](#number)
   - [Big decimal](#big-decimal)
   - [Long](#long)
