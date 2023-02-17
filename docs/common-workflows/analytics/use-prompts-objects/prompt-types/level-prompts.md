---
title: Level prompts
description: The level prompt is one of the most popular prompt types. It allows callers to specify the calculation level of a metric. For example, users can define a level prompt at the country level and apply it to a cost fact, as shown below, to generate a new **Cost_Level_Prompt** metric that aggregates the sum of **Cost** at the country level.
---

<Available since="2021 Update 1" />

The level prompt is one of the most popular prompt types. It allows callers to specify the calculation level of a metric. For example, users can define a level prompt at the country level and apply it to a cost fact, as shown below, to generate a new **Cost_Level_Prompt** metric that aggregates the sum of **Cost** at the country level.

![level_prompt](../../../../images/level_prompt.png)

Use REST APIs to perform the following actions on level prompts:

- [Answer a level prompt](#answer-a-level-prompt)
- [Get the level prompt's available answers](#get-the-level-prompts-available-answers)
- [Get the level prompt's definition](#get-the-level-prompts-definition)

## Answer a level prompt

Use the following REST APIs to answer a level prompt for a report, document, or dossier:

- Reports

  PUT `/api/reports/{id}/instances/{instanceId}/prompts/answers`

- Documents or Dossiers

  PUT `/api/documents/{id}/instances/{instanceId}/prompts/answers`

All available parameters for the prompt definition are shown below.

| Location | Name             | Description                                | Data Type | Required? |
| -------- | ---------------- | ------------------------------------------ | --------- | --------- |
| header   | X-MSTR-AuthToken | The authorization token                    | string    | yes       |
| header   | project id       | The ID of the project                      | string    | yes       |
| query    | id               | The ID of the report, document, or dossier | string    | yes       |
| query    | instance id      | The ID of the instance                     | string    | yes       |

The sample code below answers a level prompt.

```json
{
  "prompts": [
    {
      "key": "753C65EB402C44D3A991F285D3CB7F6D@0@10",
      "type": "LEVEL", // Required
      "answers": {
        "canContinue": true, // Optional, default value:  true
        "filterRest": true, // Optional, default value:  true
        "units": [
          {
            "id": "15969E6C4B5037A647A7F9AF80EAAB53",
            "type": "DEFAULT", // Optional, default value:  "DEFAULT"
            "filtering": "STANDARD", // Optional, default value:  "STANDARD"
            "groupBy": true, // Optional, default value:  true
            "grouping": "STANDARD" // Optional, default value:  "STANDARD"
          }
        ]
      }
    }
  ]
}
```

## Get the level prompt's available answers

Use the following REST APIs to get a level prompt's available answers for a report, document, or dossier:

- Reports

  GET `/api/reports/{id}/instances/{instanceId}/prompts/{id}/objects`

- Documents or Dossiers

  GET `/api/documents/{id}/instances/{instanceId}/prompts/{id}/objects`

All available parameters for getting the level prompt's available answers are shown below.

| Location | Name             | Description                                                                                                                                  | Data Type |
| -------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| header   | X-MSTR-AuthToken | The authorization token.                                                                                                                     | string    |
| header   | project id       | The project ID.                                                                                                                              | string    |
| query    | report id        | The ID of the report.                                                                                                                        | string    |
| query    | instance id      | The ID of the instance.                                                                                                                      | string    |
| query    | prompt id        | The ID of the prompt.                                                                                                                        | string    |
| query    | offset           | Returns the element beginning at this offset in the list. This value is zero-based and the default is zero.                                  | int       |
| query    | limit            | Limits the number of matching elements returned. The default value is 1000. Enter -1 to use unlimited numbers. The max value is Integer.Max. | int       |
| query    | search pattern   | Sets a search pattern for level prompt answer searches. The search pattern can be used for search keywords.                                  | string    |
|          |                  |                                                                                                                                              |           |

The sample code below gets the level prompt's available answers.

```json
{
  "objects": [
    {
      "id": "8D679D3C11D3E4981000E787EC6DE8A4",
      "name": "Year",
      "type": "ATTRIBUTE"
    },
    {
      "id": "C11D3E4981000E8D679D3787EC6DE8A4",
      "name": "Hierarchy Account",
      "type": "DIMENSION"
    }
  ]
}
```

## Get the level prompt's definition

Use the following REST APIs to get a the level prompt's definition for a report, document, or dossier:

- Reports

  GET `/api/reports/{id}/prompts`

  GET `/api/reports/{id}/instances/{instanceId}/prompts`

- Documents or Dossiers

  GET `/api/documents/{id}/prompts`

  GET `/api/documents/{id}/instances/{instanceId}/prompts`

All available parameters for getting the level prompt's definition are shown below.

| Location | Name             | Description                                                                               | Data Type | Required? |
| -------- | ---------------- | ----------------------------------------------------------------------------------------- | --------- | --------- |
| header   | X-MSTR-AuthToken | The authorization token.                                                                  | string    | yes       |
| header   | project id       | The project ID.                                                                           | string    | yes       |
| query    | id               | The ID of the report, document, or dossier.                                               | string    | yes       |
| query    | instance id      | The ID of the instance.                                                                   | string    | yes       |
| query    | closed           | Filter the closed field by this parameter. If this value is null the filter does nothing. | boolean   |           |

The sample code below gets the level prompt's definition.

```json
 {
    "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",
    "name": "Choose from a list of attributes/hierarchies to define level.",
    "title": "Choose from a list of attributes/hierarchies to define level.",,
    "type": "LEVEL",
    "closed": false,
    "required": true,
    "max": 2,
    "min": 1,
    "defaultAnswer": {
      "canContinue": true,           // Allow other users to add extra units to this definition
        "filterRest": true,            // Filter setting: uncheck to exclude attributes absent in report or level(dimensionality)
        "units":[{
            "name": "year",
            "id": "15969E6C4B5037A647A7F9AF80EAAB53",
            "type": "ATTRIBUTE",
            "filtering": "STANDARD",
            "groupBy": true,
            "grouping": "STANDARD"
        }]
    },
    "answers":{
      "canContinue": true,
        "filterRest": true,
        "units":[{
            "name": "Report Level",
            "id": "-4",
            "type": "DEFAULT",
            "filtering": "STANDARD",
            "groupBy": true,
            "grouping": "STANDARD"
        }]
    },
  }
```
