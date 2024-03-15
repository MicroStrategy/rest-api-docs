---
title: Retrieve visualization query details
sidebar_label: Retrieve visualization query details
description: This workflow sample demonstrates how to retrieve the query details of visualizations in a dashboard instance.
---

<Available since="2021 Update 2" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5d5e523d-6a02-45a1-9537-bc0d37f9c10c).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve the query details of visualizations in a dashboard instance.

You want to view the query details of visualizations in the Cost Analysis Dashboard in the MicroStrategy Tutorial project. The object ID of the dashboard is `D14F30994A4B97AD8EF6AEA5F589E30B`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::info

The [DssXmlPrivilegesWebReportSQL](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesWebReportSQL) privilege is required to get the SQL view of a report instance.

:::

## Create a dashboard instance

Use [POST /api/dossiers/\{id}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/createDossierInstance_2)

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/dossiers/D14F30994A4B97AD8EF6AEA5F589E30B/instances" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Code: 201 (A new dashboard instance is created successfully.)

Sample Response Body:

```json
{
  "mid": "50454FC6DA48C798E8EDA28C46726F5B",
  "status": 1
}
```

## Get the query details of visualizations in the dashboard instance

Use `GET /api/dossiers/{id}/instances/{instanceId}/queryDetails`

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/dossiers/D14F30994A4B97AD8EF6AEA5F589E30B/instances/50454FC6DA48C798E8EDA28C46726F5B/queryDetails" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

Use the `visualizationKey` and `chapterKey` query parameters to control which visualization’s query details are returned in the response.

### If both `chapterKey` and `visualizationKey` are null, the return query details all visualizations in all chapters

```json
{
  "chapters": [
    {
      "key": "K36",
      "name": "Chapter 1",
      "visualizations": [
        {
          "key": "K52",
          "name": "Visualization 1",
          "queryDetails": "\n*********   Visualization Summary Start  **********\nTime Spent: 0.004 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nNote: The total 'Time Spent' above may be greater than the summation of the individual step execution times below.\nThere are preparation tasks for each step that are not individually measured.\n*********   Visualization Summary End    **********\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 8\nTime Spent: 0.001 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t[Quarter]@[Quarter_ID],\n\t[Quarter]@[QUARTER_DESC],\n\t[Year]@[Year_ID],\n\tsum([Cost])@{[Quarter]}\nfrom\tNew Dataset 1\nto\tEx1_tempcube0\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 15\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t[Call Center]@[CALL_CTR_ID],\n\t[Call Center]@[CENTER_NAME],\n\t[Profit]\nfrom\tNew Dataset 1\nto\tEx1_tempcube1\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 120\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t*\t\nfrom\tCross Join(\n\t           Ex1_tempcube0, \n\t           Ex1_tempcube1\n\t          )\nto\tEx1_tempcube2\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nDrop\tEx1_tempcube0\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nDrop\tEx1_tempcube1\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 120\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t[Call Center]@[CALL_CTR_ID],\n\t[Call Center]@[CENTER_NAME],\n\t[Quarter]@[Quarter_ID],\n\t[Quarter]@[QUARTER_DESC],\n\t[Year]@[Year_ID],\n\t[Profit],\n\t[Cost]\nfrom\tEx1_tempcube2\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nDrop\tEx1_tempcube2\n************   Individual Step End     ************\n\n\n",
          "sql": "select\t[Quarter]@[Quarter_ID],\n\t[Quarter]@[QUARTER_DESC],\n\t[Year]@[Year_ID],\n\tsum([Cost])@{[Quarter]}\nfrom\tNew Dataset 1\nto\tEx1_tempcube0\n\nselect\t[Call Center]@[CALL_CTR_ID],\n\t[Call Center]@[CENTER_NAME],\n\t[Profit]\nfrom\tNew Dataset 1\nto\tEx1_tempcube1\n\nselect\t*\t\nfrom\tCross Join(\n\t           Ex1_tempcube0, \n\t           Ex1_tempcube1\n\t          )\nto\tEx1_tempcube2\n\nDrop\tEx1_tempcube0\n\nDrop\tEx1_tempcube1\n\nselect\t[Call Center]@[CALL_CTR_ID],\n\t[Call Center]@[CENTER_NAME],\n\t[Quarter]@[Quarter_ID],\n\t[Quarter]@[QUARTER_DESC],\n\t[Year]@[Year_ID],\n\t[Profit],\n\t[Cost]\nfrom\tEx1_tempcube2\n\nDrop\tEx1_tempcube2\n\n"
        }
      ]
    },
    {
      "key": "W62",
      "name": "Chapter 2",
      "visualizations": [
        {
          "key": "K86",
          "name": "Visualization 1",
          "queryDetails": "\n*********   Visualization Summary Start  **********\nTime Spent: 0.005 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nNote: The total 'Time Spent' above may be greater than the summation of the individual step execution times below.\nThere are preparation tasks for each step that are not individually measured.\n*********   Visualization Summary End    **********\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 2\nTime Spent: 0.001 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t[Year]@[Year_ID],\n\tsum([Cost])@{[Year]}\nfrom\tNew Dataset 1\nto\tEx0_tempcube0\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 8\nTime Spent: 0.001 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t[Country]@[COUNTRY_ID],\n\t[Country]@[COUNTRY_NAME],\n\t[Region]@[REGION_ID],\n\t[Region]@[REGION_NAME],\n\tsum([Revenue])@{[Region]}\nfrom\tNew Dataset 1\nto\tEx0_tempcube1\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 16\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t*\t\nfrom\tCross Join(\n\t           Ex0_tempcube0, \n\t           Ex0_tempcube1\n\t          )\nto\tEx0_tempcube2\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nDrop\tEx0_tempcube0\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nDrop\tEx0_tempcube1\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 16\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t[Country]@[COUNTRY_ID],\n\t[Country]@[COUNTRY_NAME],\n\t[Region]@[REGION_ID],\n\t[Region]@[REGION_NAME],\n\t[Year]@[Year_ID],\n\t[Revenue],\n\t[Cost]\nfrom\tEx0_tempcube2\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nDrop\tEx0_tempcube2\n************   Individual Step End     ************\n\n\n",
          "sql": "select\t[Year]@[Year_ID],\n\tsum([Cost])@{[Year]}\nfrom\tNew Dataset 1\nto\tEx0_tempcube0\n\nselect\t[Country]@[COUNTRY_ID],\n\t[Country]@[COUNTRY_NAME],\n\t[Region]@[REGION_ID],\n\t[Region]@[REGION_NAME],\n\tsum([Revenue])@{[Region]}\nfrom\tNew Dataset 1\nto\tEx0_tempcube1\n\nselect\t*\t\nfrom\tCross Join(\n\t           Ex0_tempcube0, \n\t           Ex0_tempcube1\n\t          )\nto\tEx0_tempcube2\n\nDrop\tEx0_tempcube0\n\nDrop\tEx0_tempcube1\n\nselect\t[Country]@[COUNTRY_ID],\n\t[Country]@[COUNTRY_NAME],\n\t[Region]@[REGION_ID],\n\t[Region]@[REGION_NAME],\n\t[Year]@[Year_ID],\n\t[Revenue],\n\t[Cost]\nfrom\tEx0_tempcube2\n\nDrop\tEx0_tempcube2\n\n"
        }
      ]
    }
  ]
}
```

### If `chapterKey` is not null and `visualizationKey` is null, the return query details visualizations in a specific chapter

```json
{
  "chapters": [
    {
      "key": "K36",
      "name": "Chapter 1",
      "visualizations": [
        {
          "key": "K52",
          "name": "Visualization 1",
          "queryDetails": "\n*********   Visualization Summary Start  **********\nTime Spent: 0.004 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nNote: The total 'Time Spent' above may be greater than the summation of the individual step execution times below.\nThere are preparation tasks for each step that are not individually measured.\n*********   Visualization Summary End    **********\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 8\nTime Spent: 0.001 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t[Quarter]@[Quarter_ID],\n\t[Quarter]@[QUARTER_DESC],\n\t[Year]@[Year_ID],\n\tsum([Cost])@{[Quarter]}\nfrom\tNew Dataset 1\nto\tEx1_tempcube0\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 15\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t[Call Center]@[CALL_CTR_ID],\n\t[Call Center]@[CENTER_NAME],\n\t[Profit]\nfrom\tNew Dataset 1\nto\tEx1_tempcube1\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 120\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t*\t\nfrom\tCross Join(\n\t           Ex1_tempcube0, \n\t           Ex1_tempcube1\n\t          )\nto\tEx1_tempcube2\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nDrop\tEx1_tempcube0\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nDrop\tEx1_tempcube1\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 120\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t[Call Center]@[CALL_CTR_ID],\n\t[Call Center]@[CENTER_NAME],\n\t[Quarter]@[Quarter_ID],\n\t[Quarter]@[QUARTER_DESC],\n\t[Year]@[Year_ID],\n\t[Profit],\n\t[Cost]\nfrom\tEx1_tempcube2\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nDrop\tEx1_tempcube2\n************   Individual Step End     ************\n\n\n",
          "sql": "select\t[Quarter]@[Quarter_ID],\n\t[Quarter]@[QUARTER_DESC],\n\t[Year]@[Year_ID],\n\tsum([Cost])@{[Quarter]}\nfrom\tNew Dataset 1\nto\tEx1_tempcube0\n\nselect\t[Call Center]@[CALL_CTR_ID],\n\t[Call Center]@[CENTER_NAME],\n\t[Profit]\nfrom\tNew Dataset 1\nto\tEx1_tempcube1\n\nselect\t*\t\nfrom\tCross Join(\n\t           Ex1_tempcube0, \n\t           Ex1_tempcube1\n\t          )\nto\tEx1_tempcube2\n\nDrop\tEx1_tempcube0\n\nDrop\tEx1_tempcube1\n\nselect\t[Call Center]@[CALL_CTR_ID],\n\t[Call Center]@[CENTER_NAME],\n\t[Quarter]@[Quarter_ID],\n\t[Quarter]@[QUARTER_DESC],\n\t[Year]@[Year_ID],\n\t[Profit],\n\t[Cost]\nfrom\tEx1_tempcube2\n\nDrop\tEx1_tempcube2\n\n"
        }
      ]
    }
  ]
}
```

### If both `chapterKey` and `visualizationKey` are not null, the return query details a single specific visualization

```json
{
  "chapters": [
    {
      "key": "W62",
      "name": "Chapter 2",
      "visualizations": [
        {
          "key": "K86",
          "name": "Visualization 1",
          "queryDetails": "\n*********   Visualization Summary Start  **********\nTime Spent: 0.005 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nNote: The total 'Time Spent' above may be greater than the summation of the individual step execution times below.\nThere are preparation tasks for each step that are not individually measured.\n*********   Visualization Summary End    **********\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 2\nTime Spent: 0.001 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t[Year]@[Year_ID],\n\tsum([Cost])@{[Year]}\nfrom\tNew Dataset 1\nto\tEx0_tempcube0\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 8\nTime Spent: 0.001 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t[Country]@[COUNTRY_ID],\n\t[Country]@[COUNTRY_NAME],\n\t[Region]@[REGION_ID],\n\t[Region]@[REGION_NAME],\n\tsum([Revenue])@{[Region]}\nfrom\tNew Dataset 1\nto\tEx0_tempcube1\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 16\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t*\t\nfrom\tCross Join(\n\t           Ex0_tempcube0, \n\t           Ex0_tempcube1\n\t          )\nto\tEx0_tempcube2\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nDrop\tEx0_tempcube0\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nDrop\tEx0_tempcube1\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nNumber of Rows Returned: 16\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nselect\t[Country]@[COUNTRY_ID],\n\t[Country]@[COUNTRY_NAME],\n\t[Region]@[REGION_ID],\n\t[Region]@[REGION_NAME],\n\t[Year]@[Year_ID],\n\t[Revenue],\n\t[Cost]\nfrom\tEx0_tempcube2\n************   Individual Step End     ************\n\n\n\n************   Individual Step Start   ************\nTime Spent: 0.000 sec(s)\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\nQuery Execution End Time: 6/4/2021 8:03:26 AM\n\nDrop\tEx0_tempcube2\n************   Individual Step End     ************\n\n\n",
          "sql": "select\t[Year]@[Year_ID],\n\tsum([Cost])@{[Year]}\nfrom\tNew Dataset 1\nto\tEx0_tempcube0\n\nselect\t[Country]@[COUNTRY_ID],\n\t[Country]@[COUNTRY_NAME],\n\t[Region]@[REGION_ID],\n\t[Region]@[REGION_NAME],\n\tsum([Revenue])@{[Region]}\nfrom\tNew Dataset 1\nto\tEx0_tempcube1\n\nselect\t*\t\nfrom\tCross Join(\n\t           Ex0_tempcube0, \n\t           Ex0_tempcube1\n\t          )\nto\tEx0_tempcube2\n\nDrop\tEx0_tempcube0\n\nDrop\tEx0_tempcube1\n\nselect\t[Country]@[COUNTRY_ID],\n\t[Country]@[COUNTRY_NAME],\n\t[Region]@[REGION_ID],\n\t[Region]@[REGION_NAME],\n\t[Year]@[Year_ID],\n\t[Revenue],\n\t[Cost]\nfrom\tEx0_tempcube2\n\nDrop\tEx0_tempcube2\n\n"
        }
      ]
    }
  ]
}
```
