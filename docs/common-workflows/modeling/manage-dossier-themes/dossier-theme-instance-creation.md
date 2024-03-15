---
title: Create a dashboard theme instance
sidebar_label: Create a dashboard theme instance
description: Dashboard themes can be used to define dashboard presentation styles. Once a theme is applied to a dashboard, you can then apply that predefined formatting to a target dashboard. To create a dashboard theme, the client must create a theme instance from either the project default theme template, a dashboard instance (with or without specifying which part of the dashboard), or a report instance. In this section, multiple ways of creating dashboard themes are presented and explained.
---

<Available since="2021 Update 10" />

This workflow sample demonstrates how to create a new dashboard theme instance using `POST /api/themes`.

:::tip

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a dashboard theme instance

Endpoint: [POST /api/themes](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Themes/createThemes)

In this step, you are creating a dashboard theme instance from a project default dashboard theme template. Note that a theme template is also a dashboard theme object. The newly created dashboard theme instance inherits all properties from the template. You can find more examples in the following sections on this page, as well as More examples at the bottom of this page.

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

You can view the new dashboard theme instance ID in the body of the response. The instance ID provides reference to the instance on the Intelligence Server, which can be used for further options, such as saving to metadata.

```json
{
  "instanceId": "2E7090A9D241F962D6B191B3A1BE02D4"
}
```

Sample Response Code: 201 (A new dashboard theme instance is created on the Intelligence Server.)

### More examples

In the above example, the request body is empty. The newly created dashboard theme instance is just a copy of the project default dashboard theme template. With a properly prepared payload, you can get a dashboard theme that is suited to your specific needs. The following properties can be put in the payload:

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
- instanceId: Optional Dashboard or report instance ID.
- keys: Optional, only applicable when instance ID is for a dashboard, indicating the parts of dashboard whose style information to be used in new theme instance.
- key: id of key in dashboard definition.
- type: Type of the key with 3 valid inputs: control_key, field, others.
