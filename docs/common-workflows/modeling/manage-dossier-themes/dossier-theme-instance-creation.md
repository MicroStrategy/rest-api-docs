---
title: Create a dossier theme instance
sidebar_label: Create a dossier theme instance
description: Dossier themes can be used to define dossier presentation styles. Once a theme is applied to a dossier, you can then apply that predefined formatting to a target dossier. To create a dossier theme, the client must create a theme instance from either the project default theme template, a dossier instance (with or without specifying which part of the dossier), or a report instance. In this section, multiple ways of creating dossier themes are presented and explained.
---

<Available since="2021 Update 10" />

This workflow sample demonstrates how to create a new dossier theme instance using `POST /api/themes`.

:::tip

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a dossier theme instance

Endpoint: [POST /api/themes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Themes/createThemes)

In this step, you are creating a dossier theme instance from a project default dossier theme template. Note that a theme template is also a dossier theme object. The newly created dossier theme instance inherits all properties from the template. You can find more examples in the following sections on this page, as well as More examples at the bottom of this page.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"
```

Sample Request Body:

```json
{}
```

Sample Curl:

```bash
curl -X 'POST' \
  'http://localhost:8282/consume-dev/api/themes' \
  -H 'accept: application/json' \
  -H 'X-MSTR-AuthToken: h5oeq515djqbltih6r883sbb90' \
  -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' \
  -H 'Content-Type: application/json' \
  -d '{
}'
```

Sample Response Body:

You can view the new dossier theme instance ID in the body of the response. The instance ID provides reference to the instance on the Intelligence Server, which can be used for further options, such as saving to metadata.

```json
{
  "instanceId": "2E7090A9D241F962D6B191B3A1BE02D4"
}
```

Sample Response Code: 201 (A new dossier theme instance is created on the Intelligence Server.)

### More examples

In the above example, the request body is empty. The newly created dossier theme instance is just a copy of the project default dossier theme template. With a properly prepared payload, you can get a dossier theme that is suited to your specific needs. The following properties can be put in the payload:

```json
{
  "themeId": "E0783EAF44DEF424CA5215A228D33606",
  "instanceId": "E0783EAF44DEF424CA5215A228D336067",
  "keys": [
    {
      "key": "String",
      "type": "control_key"
    }
  ]
}
```

The following properties are in the request body:

- themeId: Optional theme template ID if use template other than project default.
- instanceId: Optional Dossier or report instance ID.
- keys: Optional, only applicable when instance ID is for a dossier, indicating the parts of dossier whose style information to be used in new theme instance.
- key: id of key in dossier definition.
- type: Type of the key with 3 valid inputs: control_key, field, others.
