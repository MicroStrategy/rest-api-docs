---
title: Get prompt information
sidebar_label: Get prompt information
---

<Available since="2021 Update 1" />

You can use REST APIs to get a list of the prompts that have been applied to a dashboard, document or report, together with the definition of each prompt. A workflow sample for using REST APIs to obtain information about prompts:

1. [Create an instance of a dashboard, document or report](#create-an-instance-of-a-dashboard-document-or-report)

   For a prompted dashboard or document, the data is not returned when the instance is created. Only the instance ID and the prompt status are returned. For a prompted report, the instance ID, prompts status, and data are currently returned.

   For unprompted dashboards, documents, and reports ,the data is returned.

1. [Get prompt information](#get-prompt-information)

   You can get information about prompts applied to dashboard, document, and report objects in the metadata as well as prompts applied to instances of those objects.

Detailed explanations for each step are provided below:

## Create an instance of a dashboard, document or report

Endpoints:

- `POST /api/dossiers/{dossierId}/instances`

- `POST /api/documents/{id}/instances`

- `POST /api/reports/{reportId}/instances`

  When an instance of a prompted report is created, the status is checked. If the status is "1" or "2", only the status and the instance ID are returned. Status "1" indicates that the instance has been created, and status "2" indicates that the dashboard, document or report is waiting for a prompt answer.

  Sample code for a response body when you create an instance of a prompted document or dashboard:

  ```json
  {
    "id": "0034EC8011E70F1600000080EFD5150B",

    "status": 2,

    "mid": "F160BAF211E8C0372DBC0080EFE59EDF"
  }
  ```

  Sample code for a response body when you create an instance of a prompted report:

  ```json
  {
    "id": "0034EC8011E70F1600000080EFD5150B",

    "name": "R_Day",

    "instanceId": "F160BAF211E8C0372DBC0080EFE59EDF",

    "status": 2
  }
  ```

## Get prompt information

Endpoints:

- `GET /api/documents/{id}/prompts`

- `GET /api/documents/{id}/instances/{instanceId}/prompts`

- `GET /api/reports/{reportId}/prompts`

- `GET /api/reports/{reportId}/instances/{instanceId}/prompts`

  You can get information about prompts applied to dashboard, document, and report objects in the metadata as well as prompts applied to instances of those objects. You can get prompt definitions for three separate prompt types: attribute element prompts, object prompts, and value prompts. Sample JSON for each prompt definition is provided below.

  ```json
  [
    // Object prompts
    {
      "id": "0B524DB54440D0280747C1A3058ED474",
      "key": "0B524DB54440D0280747C1A3058ED474@0@10",
      "name": "Metric Prompt",
      "title": "Objects",
      "type": "OBJECTS",
      "required": false,
      "max": 2,
      "min": 1,
      "defaultAnswer": {
        "name": "Cost Growth",
        "id": "D823D64B48A0104B01135587BA87A2BD",
        "type": 4
      },
      "answers": {
        "name": "Cost Growth",
        "id": "D823D64B48A0104B01135587BA87A2BD",
        "type": 4
      }
    },
    // Attribute element prompts
    {
      "id": "055A4B7241396EB7FC27E3A5D2A9FB2F",
      "key": "055A4B7241396EB7FC27E3A5D2A9FB2F@0@10",
      "name": "Age Range Prompt",
      "title": "Age Range",
      "type": "ELEMENTS",
      "required": false,
      "source": {
        "name": "Age Range",
        "id": "5603951E4FE1BC04A44E44B85BBB8ED2",
        "type": 12
      },
      "defaultAnswer": [
        {
          "id": "5603951E4FE1BC04A44E44B85BBB8ED2:2",
          "name": "25 to 34"
        }
      ],
      "answers": [
        {
          "id": "5603951E4FE1BC04A44E44B85BBB8ED2:2",
          "name": "25 to 34"
        }
      ]
    },
    // Value prompts
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
