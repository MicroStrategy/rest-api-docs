---
title: Apply parameters to a data model instance
description:
  This workflow demonstrates how to retrieve the parameter definitions of a Mosaic data model, and
  how to apply, retrieve, and change the parameter values of a data model instance using REST API.
---

<Available since="Strategy (September 2026)" />

:::info

Get the authorization token needed to execute the request with
[POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from
[GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

A Mosaic data model can expose parameters that its metrics consume at query time. This workflow
sample demonstrates how to read the parameters a model defines, supply values for them when you
create a cube instance, change those values afterward, and retrieve the data the new values
produce.

Parameters are _defined_ on the model and _given values_ on an instance, and two different requests
report the two halves:

- [GET /api/model/dataModels/\{dataModelId}/parameters](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Data%20Models)
  returns each parameter's **definition** &mdash; its datatype, and which values it will accept.
- The cube instance requests below report and change the parameter **values** a particular instance
  is currently using. They do not describe what a legal value is.

Read the definitions first, so you know what each parameter accepts before you send a value for it.

## Retrieve the parameter definitions from the model

Retrieve the parameters the model defines, each with its datatype and the values it accepts. This
request is made against the model itself, so it needs no cube instance and no changeset.

The `information.subType` of a parameter gives its datatype, for example `prompt_double`,
`prompt_long`, `prompt_string`, `prompt_date`, or `prompt_big_decimal`. The
`restriction.allowedValueType` gives the kind of value the parameter accepts, and determines which
other `restriction` fields are present:

| `allowedValueType` | The parameter accepts                 | Other `restriction` fields                                    |
| ------------------ | ------------------------------------- | ------------------------------------------------------------- |
| `user_input`       | any value of the parameter's datatype | none                                                          |
| `fixed_list`       | only a value drawn from a fixed list  | `values`, the list of allowed values                          |
| `range`            | only a value between two bounds       | `min` and `max`, and `interval` when the model defines a step |

The response is paged. `total` reports how many parameters the model defines, while `offset` and
`limit` describe the page returned. Pass `offset` and `limit` as query parameters to page through
them; the default `limit` of `-1` returns all of them.

Endpoint:
[GET /api/model/dataModels/\{dataModelId}/parameters](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Data%20Models)

Sample Request

- Request Headers

```http
'Accept: application/json'
'X-MSTR-AuthToken: knpqs112o3enhcbj4h0f5pqgu7'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/8F4E447590CE457A983D5C3764486805/parameters' \
--header 'Accept: application/json' \
--header 'X-MSTR-AuthToken: knpqs112o3enhcbj4h0f5pqgu7' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

Both parameters of this model take any number the user supplies, so each one reports an
`allowedValueType` of `user_input` and no further restriction.

- Response Body:

```json
{
  "offset": 0,
  "limit": -1,
  "total": 2,
  "parameters": [
    {
      "information": {
        "dateCreated": "2026-08-19T07:34:43.645Z",
        "dateModified": "2026-08-19T07:34:43.645Z",
        "versionId": "C390BE0F9F4275D4633DE69B25CCF94D",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "314988F06296423EB33A7361A4EB126D",
        "subType": "prompt_double",
        "name": "minP",
        "destinationFolderId": "4CDDE83E81EA47D8B451791C9DA87177"
      },
      "restriction": {
        "allowedValueType": "user_input"
      }
    },
    {
      "information": {
        "dateCreated": "2026-08-19T08:03:08.534Z",
        "dateModified": "2026-08-19T08:03:08.534Z",
        "versionId": "D0501562D44FAE3E226C4C9462A5594D",
        "acg": 255,
        "primaryLocale": "en-US",
        "objectId": "DB8B46BC23444186B9D05D9D1E2D71A4",
        "subType": "prompt_double",
        "name": "maxP",
        "destinationFolderId": "4CDDE83E81EA47D8B451791C9DA87177"
      },
      "restriction": {
        "allowedValueType": "user_input"
      }
    }
  ]
}
```

- Response Code: 200 (Success: OK)

A parameter restricted to a fixed list reports the values it accepts:

```json
{
  "restriction": {
    "allowedValueType": "fixed_list",
    "values": [100, 200, 500]
  }
}
```

A parameter restricted to a range reports its bounds, and a step when the model defines one:

```json
{
  "restriction": {
    "allowedValueType": "range",
    "min": 0,
    "max": 1000,
    "interval": 50
  }
}
```

Send a value that the parameter's `allowedValueType` does not permit and the request is refused, as
shown in [Handle a rejected value](#handle-a-rejected-value).

## Create a cube instance with parameters

Supply the parameter values in the body of the create-instance request. The model is then executed
once, with your values, instead of once with the model's defaults and again for each later change. A
cube that is not a Mosaic data model ignores the `parameters` field.

If a value is rejected, the whole request fails with a `400` and the instance, although created, is
not returned and expires on its own.

Endpoint:
[POST /api/v2/cubes/\{dataModelId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Cubes/createCubeInstance_1)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: knpqs112o3enhcbj4h0f5pqgu7'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Request Body

```json
{
  "parameters": [
    { "id": "314988F06296423EB33A7361A4EB126D", "value": "200" },
    { "id": "DB8B46BC23444186B9D05D9D1E2D71A4", "value": "900" }
  ]
}
```

- Curl

```bash
curl --location --request POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/8F4E447590CE457A983D5C3764486805/instances?limit=5' \
--header 'Content-Type: application/json' \
--header 'X-MSTR-AuthToken: knpqs112o3enhcbj4h0f5pqgu7' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--data '{
  "parameters": [
    { "id": "314988F06296423EB33A7361A4EB126D", "value": "200" },
    { "id": "DB8B46BC23444186B9D05D9D1E2D71A4", "value": "900" }
  ]
}'
```

Sample Response

The response is a regular cube instance result. The applied values appear in the `parameters` array, and the `data` reflects them: the metrics that consume `minP` and `maxP` are evaluated with the values you supplied.

- Response Body:

```json
{
  "name": "Airline Ticket Pricing Route Model",
  "id": "8F4E447590CE457A983D5C3764486805",
  "instanceId": "3055A8906D4A8D6582A0B3BD13319E65",
  "status": 1,
  "definition": {
    "grid": {
      "crossTab": false,
      "metricsPosition": {
        "axis": "columns",
        "index": 0
      },
      "rows": [
        {
          "name": "From City",
          "id": "B24BDFA9D7CB4F4FA9A8CF82FC55A59B",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "integer",
              "baseFormCategory": "ID",
              "baseFormType": "number"
            }
          ],
          "elements": [
            {
              "formValues": ["1"],
              "id": "h1;B24BDFA9D7CB4F4FA9A8CF82FC55A59B"
            },
            {
              "formValues": ["2"],
              "id": "h2;B24BDFA9D7CB4F4FA9A8CF82FC55A59B"
            },
            {
              "formValues": ["3"],
              "id": "h3;B24BDFA9D7CB4F4FA9A8CF82FC55A59B"
            }
          ]
        },
        {
          "name": "To City",
          "id": "81E5474F4A314857B439BA11549500CC",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "integer",
              "baseFormCategory": "ID",
              "baseFormType": "number"
            }
          ],
          "elements": [
            {
              "formValues": ["2"],
              "id": "h2;81E5474F4A314857B439BA11549500CC"
            },
            {
              "formValues": ["3"],
              "id": "h3;81E5474F4A314857B439BA11549500CC"
            },
            {
              "formValues": ["1"],
              "id": "h1;81E5474F4A314857B439BA11549500CC"
            },
            {
              "formValues": ["6"],
              "id": "h6;81E5474F4A314857B439BA11549500CC"
            }
          ]
        }
      ],
      "columns": [
        {
          "name": "Metrics",
          "id": "00000000000000000000000000000000",
          "type": "templateMetrics",
          "elements": [
            {
              "name": "advTicketMP",
              "id": "FF7E9DB24B134A5A893534A466B12195",
              "type": "metric",
              "min": 990.0,
              "max": 1280.0,
              "dataType": "double",
              "numberFormatting": {}
            },
            {
              "name": "advTicketP",
              "id": "93D34C27536A42078F867A55C4C0A077",
              "type": "metric",
              "min": -110.0,
              "max": 180.0,
              "dataType": "double",
              "numberFormatting": {}
            },
            {
              "name": "Ticket Price",
              "id": "0D1A650A93CD4851AEA51949D4808701",
              "type": "metric",
              "min": 90,
              "max": 380,
              "dataType": "integer",
              "numberFormatting": {
                "category": 1,
                "formatString": "#,##0",
                "negativeType": 1
              }
            }
          ]
        }
      ],
      "sorting": {
        "rows": [],
        "columns": [],
        "pageBy": []
      },
      "thresholds": []
    }
  },
  "data": {
    "currentPageBy": [],
    "paging": {
      "total": 10,
      "current": 5,
      "offset": 0,
      "limit": 5
    },
    "headers": {
      "rows": [
        [0, 0],
        [0, 1],
        [1, 2],
        [1, 3],
        [2, 0]
      ],
      "columns": [[0, 1, 2]]
    },
    "metricValues": {
      "raw": [
        [1250.0, 150.0, 350],
        [1050.0, -50.0, 150],
        [1280.0, 180.0, 380],
        [1150.0, 50.0, 250],
        [1180.0, 80.0, 280]
      ],
      "formatted": [
        ["1250", "150", "350"],
        ["1050", "-50", "150"],
        ["1280", "180", "380"],
        ["1150", "50", "250"],
        ["1180", "80", "280"]
      ],
      "extras": [
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}]
      ]
    }
  },
  "promptOrdering": [],
  "parameters": [
    {
      "id": "314988F06296423EB33A7361A4EB126D",
      "name": "minP",
      "value": "200"
    },
    {
      "id": "DB8B46BC23444186B9D05D9D1E2D71A4",
      "name": "maxP",
      "value": "900"
    }
  ]
}
```

- Response Code: 200 (Success: OK)

## List the parameters of an instance

List the parameters a Mosaic data model exposes on the instance you created, each with its object
ID, its name, and its current value. The object ID is what identifies a parameter when you change
its value.

A parameter that has never been given a value, or that has been unset, has no `value` field in the
response.

This request reports the state of the instance only. To learn a parameter's datatype or which values
it accepts, read its definition from the model, as shown in
[Retrieve the parameter definitions from the model](#retrieve-the-parameter-definitions-from-the-model).

Endpoint:
[GET /api/v2/cubes/\{dataModelId}/instances/\{instanceId}/parameters](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Cubes/getMosaicParameters)

Sample Request

- Request Headers

```http
'Accept: application/json'
'X-MSTR-AuthToken: knpqs112o3enhcbj4h0f5pqgu7'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/8F4E447590CE457A983D5C3764486805/instances/3055A8906D4A8D6582A0B3BD13319E65/parameters' \
--header 'Accept: application/json' \
--header 'X-MSTR-AuthToken: knpqs112o3enhcbj4h0f5pqgu7' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body:

```json
{
  "parameters": [
    {
      "id": "314988F06296423EB33A7361A4EB126D",
      "name": "minP",
      "value": "200"
    },
    {
      "id": "DB8B46BC23444186B9D05D9D1E2D71A4",
      "name": "maxP",
      "value": "900"
    }
  ]
}
```

- Response Code: 200 (Success: OK)

## Change the parameter values of an instance

Apply values to any number of parameters in one request, and return the resulting parameters. Only
the parameters named in the body change; every other parameter of the instance is left as it is. The
metrics that consume the parameters are re-evaluated once for the whole request, so setting several
at once costs less than a request per parameter.

Every value is checked before any is applied: if one is rejected the response is a `400` and none of
the parameters change.

Endpoint:
[PATCH /api/v2/cubes/\{dataModelId}/instances/\{instanceId}/parameters](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Cubes/setMosaicParameterValues)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: knpqs112o3enhcbj4h0f5pqgu7'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Request Body

```json
{
  "parameters": [
    { "id": "314988F06296423EB33A7361A4EB126D", "value": "100" },
    { "id": "DB8B46BC23444186B9D05D9D1E2D71A4", "value": "800" }
  ]
}
```

- Curl

```bash
curl --location --request PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/8F4E447590CE457A983D5C3764486805/instances/3055A8906D4A8D6582A0B3BD13319E65/parameters' \
--header 'Content-Type: application/json' \
--header 'X-MSTR-AuthToken: knpqs112o3enhcbj4h0f5pqgu7' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--data '{
  "parameters": [
    { "id": "314988F06296423EB33A7361A4EB126D", "value": "100" },
    { "id": "DB8B46BC23444186B9D05D9D1E2D71A4", "value": "800" }
  ]
}'
```

Sample Response

- Response Body:

```json
{
  "parameters": [
    {
      "id": "314988F06296423EB33A7361A4EB126D",
      "name": "minP",
      "value": "100"
    },
    {
      "id": "DB8B46BC23444186B9D05D9D1E2D71A4",
      "name": "maxP",
      "value": "800"
    }
  ]
}
```

- Response Code: 200 (Success: OK)

## Retrieve the updated data of the instance

Changing a parameter value re-evaluates the metrics that consume it, but the response of the
parameter requests reports the parameters only. Retrieve the instance itself to read the grid data
that the new values produced.

The instance keeps its ID, so you do not create a new one. Compare the `metricValues` below with
those returned when the instance was created: lowering `minP` from `200` to `100` and `maxP` from
`900` to `800` changes every value the parameterized metrics produce.

Endpoint: [GET /api/v2/cubes/\{dataModelId}/instances/\{instanceId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Cubes/getReport_1)

Sample Request

- Request Headers

```http
'Accept: application/json'
'X-MSTR-AuthToken: knpqs112o3enhcbj4h0f5pqgu7'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/8F4E447590CE457A983D5C3764486805/instances/3055A8906D4A8D6582A0B3BD13319E65?limit=5' \
--header 'Accept: application/json' \
--header 'X-MSTR-AuthToken: knpqs112o3enhcbj4h0f5pqgu7' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

The `parameters` array reports the values now in effect, and `data.metricValues` holds the grid
data produced by them.

- Response Body:

```json
{
  "name": "Airline Ticket Pricing Route Model",
  "id": "8F4E447590CE457A983D5C3764486805",
  "instanceId": "3055A8906D4A8D6582A0B3BD13319E65",
  "status": 1,
  "definition": {
    "grid": {
      "crossTab": false,
      "metricsPosition": {
        "axis": "columns",
        "index": 0
      },
      "rows": [
        {
          "name": "From City",
          "id": "B24BDFA9D7CB4F4FA9A8CF82FC55A59B",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "integer",
              "baseFormCategory": "ID",
              "baseFormType": "number"
            }
          ],
          "elements": [
            {
              "formValues": ["1"],
              "id": "h1;B24BDFA9D7CB4F4FA9A8CF82FC55A59B"
            },
            {
              "formValues": ["2"],
              "id": "h2;B24BDFA9D7CB4F4FA9A8CF82FC55A59B"
            },
            {
              "formValues": ["3"],
              "id": "h3;B24BDFA9D7CB4F4FA9A8CF82FC55A59B"
            }
          ]
        },
        {
          "name": "To City",
          "id": "81E5474F4A314857B439BA11549500CC",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "ID",
              "dataType": "integer",
              "baseFormCategory": "ID",
              "baseFormType": "number"
            }
          ],
          "elements": [
            {
              "formValues": ["2"],
              "id": "h2;81E5474F4A314857B439BA11549500CC"
            },
            {
              "formValues": ["3"],
              "id": "h3;81E5474F4A314857B439BA11549500CC"
            },
            {
              "formValues": ["1"],
              "id": "h1;81E5474F4A314857B439BA11549500CC"
            },
            {
              "formValues": ["6"],
              "id": "h6;81E5474F4A314857B439BA11549500CC"
            }
          ]
        }
      ],
      "columns": [
        {
          "name": "Metrics",
          "id": "00000000000000000000000000000000",
          "type": "templateMetrics",
          "elements": [
            {
              "name": "advTicketMP",
              "id": "FF7E9DB24B134A5A893534A466B12195",
              "type": "metric",
              "min": 890.0,
              "max": 1180.0,
              "dataType": "double",
              "numberFormatting": {}
            },
            {
              "name": "advTicketP",
              "id": "93D34C27536A42078F867A55C4C0A077",
              "type": "metric",
              "min": -10.0,
              "max": 280.0,
              "dataType": "double",
              "numberFormatting": {}
            },
            {
              "name": "Ticket Price",
              "id": "0D1A650A93CD4851AEA51949D4808701",
              "type": "metric",
              "min": 90,
              "max": 380,
              "dataType": "integer",
              "numberFormatting": {
                "category": 1,
                "formatString": "#,##0",
                "negativeType": 1
              }
            }
          ]
        }
      ],
      "sorting": {
        "rows": [],
        "columns": [],
        "pageBy": []
      },
      "thresholds": []
    }
  },
  "data": {
    "currentPageBy": [],
    "paging": {
      "total": 10,
      "current": 5,
      "offset": 0,
      "limit": 5
    },
    "headers": {
      "rows": [
        [0, 0],
        [0, 1],
        [1, 2],
        [1, 3],
        [2, 0]
      ],
      "columns": [[0, 1, 2]]
    },
    "metricValues": {
      "raw": [
        [1150.0, 250.0, 350],
        [950.0, 50.0, 150],
        [1180.0, 280.0, 380],
        [1050.0, 150.0, 250],
        [1080.0, 180.0, 280]
      ],
      "formatted": [
        ["1150", "250", "350"],
        ["950", "50", "150"],
        ["1180", "280", "380"],
        ["1050", "150", "250"],
        ["1080", "180", "280"]
      ],
      "extras": [
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}]
      ]
    }
  },
  "promptOrdering": [],
  "parameters": [
    {
      "id": "314988F06296423EB33A7361A4EB126D",
      "name": "minP",
      "value": "100"
    },
    {
      "id": "DB8B46BC23444186B9D05D9D1E2D71A4",
      "name": "maxP",
      "value": "800"
    }
  ]
}
```

- Response Code: 200 (Success: OK)

## Unset a parameter

Send a `null` value to unset a parameter, returning it to the state it was in before it was ever
given a value. In the response, the unset parameter has no `value` field.

Endpoint:
[PATCH /api/v2/cubes/\{dataModelId}/instances/\{instanceId}/parameters](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Cubes/setMosaicParameterValues)

Sample Request

- Request Body

```json
{
  "parameters": [{ "id": "314988F06296423EB33A7361A4EB126D", "value": null }]
}
```

- Curl

```bash
curl --location --request PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/8F4E447590CE457A983D5C3764486805/instances/3055A8906D4A8D6582A0B3BD13319E65/parameters' \
--header 'Content-Type: application/json' \
--header 'X-MSTR-AuthToken: knpqs112o3enhcbj4h0f5pqgu7' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--data '{
  "parameters": [
    { "id": "314988F06296423EB33A7361A4EB126D", "value": null }
  ]
}'
```

Sample Response

The unset parameter, `minP`, comes back with no `value`.

- Response Body:

```json
{
  "parameters": [
    {
      "id": "314988F06296423EB33A7361A4EB126D",
      "name": "minP"
    },
    {
      "id": "DB8B46BC23444186B9D05D9D1E2D71A4",
      "name": "maxP",
      "value": "800"
    }
  ]
}
```

- Response Code: 200 (Success: OK)

## Handle a rejected value

A value the model will not accept is refused with a `400` that names the parameter and the problem,
and the instance is left unchanged and still usable. Because validation runs over every value before
any is applied, one bad value in a batch changes nothing at all.

Endpoint:
[PATCH /api/v2/cubes/\{dataModelId}/instances/\{instanceId}/parameters](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Cubes/setMosaicParameterValues)

Sample Request

- Request Body

```json
{
  "parameters": [{ "id": "DB8B46BC23444186B9D05D9D1E2D71A4", "value": "abc" }]
}
```

- Curl

```bash
curl --location --request PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/8F4E447590CE457A983D5C3764486805/instances/3055A8906D4A8D6582A0B3BD13319E65/parameters' \
--header 'Content-Type: application/json' \
--header 'X-MSTR-AuthToken: knpqs112o3enhcbj4h0f5pqgu7' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--data '{
  "parameters": [
    { "id": "DB8B46BC23444186B9D05D9D1E2D71A4", "value": "abc" }
  ]
}'
```

Sample Response

- Response Body:

```json
{
  "code": "ERR006",
  "message": "Parameter 'maxP' expects a number, and 'abc' cannot be read as one",
  "ticketId": "ab959235b2a649aab4dfa0c721497fa5"
}
```

- Response Code: 400 (Bad Request)
