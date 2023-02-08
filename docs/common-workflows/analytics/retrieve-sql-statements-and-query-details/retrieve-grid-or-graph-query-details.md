---
title: Retrieve grid or graph query details
sidebar_label: Retrieve grid or graph query details
description: This workflow sample demonstrates how to retrieve the query details of grids and graphs in a document instance.
---

<Available since="2021 Update 2" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b0ee6146-bd68-4aae-adfb-ef186d9e26ee?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve the query details of grids and graphs in a document instance.

You want to view query details of grids and graphs in the Cost Analysis Document in the MicroStrategy Tutorial project. The object ID of the document is `D14F30994A4B97AD8EF6AEA5F589E30B`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a document instance using `POST /api/documents/{id}/instances`

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/documents/D14F30994A4B97AD8EF6AEA5F589E30B/instances" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Code: 201 (A new document instance is created successfully.)

Sample Response Body:

```json
{
  "status": 1,
  "mid": "F4D88ADA0A4DF7B860BF3DA04418DBEA"
}
```

## Get the query details of grids and graphs in a document instance using `GET /api/documents/{id}/instances/{instanceId}/queryDetails`

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/documents/F4D88ADA0A4DF7B860BF3DA04418DBEA/instances/50454FC6DA48C798E8EDA28C46726F5B/queryDetails" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "layouts": [
    {
      "key": "K36",
      "name": "Chapter 1",
      "gridGraphs": [
        {
          "key": "K52",
          "rawName": "Visualization 1",
          "name": "Visualization 1",
          "queryDetails": "\n*********   Visualization Summary Start  **********\nTime Spent: 0.008 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nNote: The total 'Time Spent' above may be greater than the summation of the individual step execution times below.\nThere are preparation tasks for each step that are not individually measured.\n*********   Visualization Summary End    **********\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 8\nTime Spent: 0.001 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nselect\t[Quarter]@[Quarter_ID],\n\t[Quarter]@[QUARTER_DESC],\n\t[Year]@[Year_ID],\n\tsum([Cost])@{[Quarter]}\nfrom\tNew Dataset 1\nto\tEx3_tempcube0\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 15\nTime Spent: 0.001 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nselect\t[Call Center]@[CALL_CTR_ID],\n\t[Call Center]@[CENTER_NAME],\n\t[Profit]\nfrom\tNew Dataset 1\nto\tEx3_tempcube1\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 120\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nselect\t*\t\nfrom\tCross Join(\n\t           Ex3_tempcube0, \n\t           Ex3_tempcube1\n\t          )\nto\tEx3_tempcube2\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.001 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nDrop\tEx3_tempcube0\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nDrop\tEx3_tempcube1\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 120\nTime Spent: 0.001 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nselect\t[Call Center]@[CALL_CTR_ID],\n\t[Call Center]@[CENTER_NAME],\n\t[Quarter]@[Quarter_ID],\n\t[Quarter]@[QUARTER_DESC],\n\t[Year]@[Year_ID],\n\t[Profit],\n\t[Cost]\nfrom\tEx3_tempcube2\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nDrop\tEx3_tempcube2\n************   Individual Step End     ************\n\n\n",
          "sql": "select\t[Quarter]@[Quarter_ID],\n\t[Quarter]@[QUARTER_DESC],\n\t[Year]@[Year_ID],\n\tsum([Cost])@{[Quarter]}\nfrom\tNew Dataset 1\nto\tEx3_tempcube0\n\nselect\t[Call Center]@[CALL_CTR_ID],\n\t[Call Center]@[CENTER_NAME],\n\t[Profit]\nfrom\tNew Dataset 1\nto\tEx3_tempcube1\n\nselect\t*\t\nfrom\tCross Join(\n\t           Ex3_tempcube0, \n\t           Ex3_tempcube1\n\t          )\nto\tEx3_tempcube2\n\nDrop\tEx3_tempcube0\n\nDrop\tEx3_tempcube1\n\nselect\t[Call Center]@[CALL_CTR_ID],\n\t[Call Center]@[CENTER_NAME],\n\t[Quarter]@[Quarter_ID],\n\t[Quarter]@[QUARTER_DESC],\n\t[Year]@[Year_ID],\n\t[Profit],\n\t[Cost]\nfrom\tEx3_tempcube2\n\nDrop\tEx3_tempcube2\n\n"
        }
      ]
    },
    {
      "key": "W62",
      "name": "Chapter 2",
      "gridGraphs": [
        {
          "key": "K86",
          "rawName": "Visualization 1",
          "name": "Visualization 1",
          "queryDetails": "\n*********   Visualization Summary Start  **********\nTime Spent: 0.008 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nNote: The total 'Time Spent' above may be greater than the summation of the individual step execution times below.\nThere are preparation tasks for each step that are not individually measured.\n*********   Visualization Summary End    **********\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 2\nTime Spent: 0.002 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nselect\t[Year]@[Year_ID],\n\tsum([Cost])@{[Year]}\nfrom\tNew Dataset 1\nto\tEx2_tempcube0\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 8\nTime Spent: 0.001 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nselect\t[Country]@[COUNTRY_ID],\n\t[Country]@[COUNTRY_NAME],\n\t[Region]@[REGION_ID],\n\t[Region]@[REGION_NAME],\n\tsum([Revenue])@{[Region]}\nfrom\tNew Dataset 1\nto\tEx2_tempcube1\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 16\nTime Spent: 0.001 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nselect\t*\t\nfrom\tCross Join(\n\t           Ex2_tempcube0, \n\t           Ex2_tempcube1\n\t          )\nto\tEx2_tempcube2\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nDrop\tEx2_tempcube0\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nDrop\tEx2_tempcube1\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 16\nTime Spent: 0.001 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nselect\t[Country]@[COUNTRY_ID],\n\t[Country]@[COUNTRY_NAME],\n\t[Region]@[REGION_ID],\n\t[Region]@[REGION_NAME],\n\t[Year]@[Year_ID],\n\t[Revenue],\n\t[Cost]\nfrom\tEx2_tempcube2\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\nQuery Execution End Time: 6/4/2021 8:53:05 AM\n\nDrop\tEx2_tempcube2\n************   Individual Step End     ************\n\n\n",
          "sql": "select\t[Year]@[Year_ID],\n\tsum([Cost])@{[Year]}\nfrom\tNew Dataset 1\nto\tEx2_tempcube0\n\nselect\t[Country]@[COUNTRY_ID],\n\t[Country]@[COUNTRY_NAME],\n\t[Region]@[REGION_ID],\n\t[Region]@[REGION_NAME],\n\tsum([Revenue])@{[Region]}\nfrom\tNew Dataset 1\nto\tEx2_tempcube1\n\nselect\t*\t\nfrom\tCross Join(\n\t           Ex2_tempcube0, \n\t           Ex2_tempcube1\n\t          )\nto\tEx2_tempcube2\n\nDrop\tEx2_tempcube0\n\nDrop\tEx2_tempcube1\n\nselect\t[Country]@[COUNTRY_ID],\n\t[Country]@[COUNTRY_NAME],\n\t[Region]@[REGION_ID],\n\t[Region]@[REGION_NAME],\n\t[Year]@[Year_ID],\n\t[Revenue],\n\t[Cost]\nfrom\tEx2_tempcube2\n\nDrop\tEx2_tempcube2\n\n"
        }
      ]
    }
  ]
}
```
