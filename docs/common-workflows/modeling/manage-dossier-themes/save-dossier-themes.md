---
title: Save dossier themes
sidebar_label: Save dossier themes
description: A workflow sample for saving a dossier theme instance to metadata is provided below.
---

<Available since="2021 Update 10" />

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to save a dossier theme instance to metadata using `POST /api/themes/dossiers/{dossierId}/instances/{instanceId}/saveAs`.

:::tip

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a new dossier theme instance

Endpoint: [POST /api/themes/dossiers/{dossierId}/instances/{instanceId}/saveAs](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Themes/saveThemes)

In this step, you are saving a dossier theme instance to metadata as a dossier object using `POST /api/themes/dossiers/{dossierId}/instances/{instanceId}/saveAs`. Dossier theme objects are applied to dossiers for their presentation style.

:::tip

In path parameter, instanceId is ID of dossier theme instance, which is created with `POST /api/themes`

:::

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body:

```json
{
  "name": "theme1",
  "description": "Theme description",
  "folderId": "28B6C20543281266286B22B8C117BC45",
  "overwrite": false
}
```

Sample Curl:

```bash
curl -X 'POST' \
  'http://localhost:8282/consume-dev/api/themes/dossiers/3C4526642940B2235E5EDF97EB009661/instances/3C4526642940B2235E5EDF97EB009661/saveAs' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: 7m798e0p471ip49lufeso7d6se' \
  -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "theme1",
  "description": "Theme description",
  "folderId": "28B6C20543281266286B22B8C117BC45",
  "overwrite": false
}'
```

Sample Response Body:

You can view the new dossier theme object ID in the body of the response. The ID provides reference to the theme object, which can be used for further options, such as applying a theme to a dossier.

```json
{
  "id": "2E7090A9D241F962D6B191B3A1BE02D4"
}
```

Sample Response Code: 201 (Dossier theme instance is saved to metadata.)
