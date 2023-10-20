---
title: Apply dossier themes
sidebar_label: Apply dossier themes
description: A workflow sample for applying a dossier theme to a dossier instance is provided below.
---

<Available since="2021 Update 10" />

This workflow sample demonstrates how to apply a theme to a dossier instance through `POST /api/v2/dossiers/{dossierId}/instances/{instanceId}/themes/{themeId}`

:::tip

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Apply a theme to dossier instance

Endpoint: [POST /api/v2/dossiers/{dossierId}/instances/{instanceId}/themes/{themeId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/applyTheme)

Sample path parameters:

- `dossierId`: the object ID of the dossier;
- `instanceId`: the ID of dossier instance;
- `themeId`: the object ID of the theme

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body: None

Sample Curl:

```bash
curl -X 'POST' \
  'http://localhost:8282/consume-dev/api/v2/dossiers/119DEDCC11D4E0EFC000EB9495D0F444/instances/4A2F9667C842E3BB9D0CFFABE6F3ED53/themes/4A2F9667C842E3BB9D0CFFABE6F3ED5B' \
  -H 'accept: */*' \
  -H 'X-MSTR-AuthToken: mni11f26j5acml4opgf0gckmnk' \
  -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' \
  -d ''
```

Sample Response Body: N/A

Sample Response Code: 201 (Dossier theme instance is saved to metadata.)
