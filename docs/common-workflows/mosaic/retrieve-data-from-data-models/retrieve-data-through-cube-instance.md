---
title: Retrieve data through cube instance
description: This workflow demonstrates how to retrieve data for a data model through cube instance using REST API.
---

<Available since="Strategy ONE (December 2025)" />

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

This workflow sample demonstrates how to retrieve data for a data model through cube instance using REST API.

## Create cube instance

You can view a data model definition and data by creating a cube instance.

Endpoint: [POST /api/v2/cubes/\{dataModelId}/instances](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Cubes/createCubeInstance_1)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl --location --request POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/CDCB6AB0A14E466FA66B571B8B0CDB38/instances' \
--header 'X-MSTR-AuthToken: l0abia567pgqfuk8fbg5f0ao25' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' \
--data ''
```

Sample Response

- Response Body:

```json
{
  "id": "CDCB6AB0A14E466FA66B571B8B0CDB38",
  "name": "Cube test",
  "instanceId": "E001994BA149913037C78AA658F25C3A",
  "status": 1,
  "definition": {
    "grid": {
      "crossTab": false,
      "rows": [
        {
          "name": "Element",
          "id": "FC056DBB3CB84644904B9DAD8F3503CE",
          "type": "attribute",
          "forms": [
            {
              "id": "5DE92B254C50449C9C1C7938037B1C27",
              "name": "Element Name",
              "dataType": "UTF8Char",
              "baseFormCategory": "Element None",
              "baseFormType": "text"
            }
          ],
          "elements": [
            {
              "formValues": [""],
              "id": "h\\N;FC056DBB3CB84644904B9DAD8F3503CE"
            }
          ]
        },
        {
          "name": "Factor",
          "id": "9BB50F2B28E0447A9D3D0AF0B0816A40",
          "type": "attribute",
          "forms": [
            {
              "id": "7B70212B752A4D0E9D611BE240B8D45E",
              "name": "Factor Name",
              "dataType": "UTF8Char",
              "baseFormCategory": "Factor None",
              "baseFormType": "text"
            }
          ],
          "elements": [
            {
              "formValues": ["< 25"],
              "id": "h2;9BB50F2B28E0447A9D3D0AF0B0816A40"
            },
            {
              "formValues": ["25-35"],
              "id": "h5;9BB50F2B28E0447A9D3D0AF0B0816A40"
            },
            {
              "formValues": ["36-50"],
              "id": "h9;9BB50F2B28E0447A9D3D0AF0B0816A40"
            },
            {
              "formValues": ["51-60"],
              "id": "h13;9BB50F2B28E0447A9D3D0AF0B0816A40"
            },
            {
              "formValues": ["> 60"],
              "id": "h17;9BB50F2B28E0447A9D3D0AF0B0816A40"
            }
          ]
        },
        {
          "name": "Test",
          "id": "B6E2B07729A24271B9FDDD544C59DDAD",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "Test",
              "dataType": "integer",
              "baseFormCategory": "ID",
              "baseFormType": "number"
            }
          ],
          "elements": [
            {
              "formValues": [""],
              "id": "h\\N;B6E2B07729A24271B9FDDD544C59DDAD"
            }
          ]
        },
        {
          "name": "Test 2",
          "id": "2090B0424B6E425199D94F533F15E240",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "Test 2",
              "dataType": "UTF8Char",
              "baseFormCategory": "ID",
              "baseFormType": "text"
            }
          ],
          "elements": [
            {
              "formValues": [""],
              "id": "h\\N;2090B0424B6E425199D94F533F15E240"
            }
          ]
        }
      ],
      "columns": [],
      "pageBy": [],
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
      "total": 5,
      "current": 5,
      "offset": 0,
      "limit": 1000
    },
    "headers": {
      "rows": [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 2, 0, 0],
        [0, 3, 0, 0],
        [0, 4, 0, 0]
      ],
      "columns": []
    },
    "metricValues": {
      "raw": [],
      "formatted": [],
      "extras": []
    }
  },
  "promptOrdering": []
}
```

- Response Code: 200 (Success: OK)

## Get cube instance

You can view a data model definition and data using the cube instance you created in the previous step.

Endpoint: [GET /api/v2/cubes/\{dataModelId}/instances/\{instanceId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?visibility=all#/Cubes/getReport_1)

Sample Request

- Request Headers

```http
'Content-Type: application/json'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/CDCB6AB0A14E466FA66B571B8B0CDB38/instances/E001994BA149913037C78AA658F25C3A' \
--header 'X-MSTR-AuthToken: l0abia567pgqfuk8fbg5f0ao25' \
--header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Response

- Response Body:

```json
{
  "id": "CDCB6AB0A14E466FA66B571B8B0CDB38",
  "name": "Cube test",
  "instanceId": "E001994BA149913037C78AA658F25C3A",
  "status": 1,
  "definition": {
    "grid": {
      "crossTab": false,
      "rows": [
        {
          "name": "Element",
          "id": "FC056DBB3CB84644904B9DAD8F3503CE",
          "type": "attribute",
          "forms": [
            {
              "id": "5DE92B254C50449C9C1C7938037B1C27",
              "name": "Element Name",
              "dataType": "UTF8Char",
              "baseFormCategory": "Element None",
              "baseFormType": "text"
            }
          ],
          "elements": [
            {
              "formValues": [""],
              "id": "h\\N;FC056DBB3CB84644904B9DAD8F3503CE"
            }
          ]
        },
        {
          "name": "Factor",
          "id": "9BB50F2B28E0447A9D3D0AF0B0816A40",
          "type": "attribute",
          "forms": [
            {
              "id": "7B70212B752A4D0E9D611BE240B8D45E",
              "name": "Factor Name",
              "dataType": "UTF8Char",
              "baseFormCategory": "Factor None",
              "baseFormType": "text"
            }
          ],
          "elements": [
            {
              "formValues": ["< 25"],
              "id": "h2;9BB50F2B28E0447A9D3D0AF0B0816A40"
            },
            {
              "formValues": ["25-35"],
              "id": "h5;9BB50F2B28E0447A9D3D0AF0B0816A40"
            },
            {
              "formValues": ["36-50"],
              "id": "h9;9BB50F2B28E0447A9D3D0AF0B0816A40"
            },
            {
              "formValues": ["51-60"],
              "id": "h13;9BB50F2B28E0447A9D3D0AF0B0816A40"
            },
            {
              "formValues": ["> 60"],
              "id": "h17;9BB50F2B28E0447A9D3D0AF0B0816A40"
            }
          ]
        },
        {
          "name": "Test",
          "id": "B6E2B07729A24271B9FDDD544C59DDAD",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "Test",
              "dataType": "integer",
              "baseFormCategory": "ID",
              "baseFormType": "number"
            }
          ],
          "elements": [
            {
              "formValues": [""],
              "id": "h\\N;B6E2B07729A24271B9FDDD544C59DDAD"
            }
          ]
        },
        {
          "name": "Test 2",
          "id": "2090B0424B6E425199D94F533F15E240",
          "type": "attribute",
          "forms": [
            {
              "id": "45C11FA478E745FEA08D781CEA190FE5",
              "name": "Test 2",
              "dataType": "UTF8Char",
              "baseFormCategory": "ID",
              "baseFormType": "text"
            }
          ],
          "elements": [
            {
              "formValues": [""],
              "id": "h\\N;2090B0424B6E425199D94F533F15E240"
            }
          ]
        }
      ],
      "columns": [],
      "pageBy": [],
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
      "total": 5,
      "current": 5,
      "offset": 0,
      "limit": 1000
    },
    "headers": {
      "rows": [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 2, 0, 0],
        [0, 3, 0, 0],
        [0, 4, 0, 0]
      ],
      "columns": []
    },
    "metricValues": {
      "raw": [],
      "formatted": [],
      "extras": []
    }
  },
  "promptOrdering": []
}
```

- Response Code: 200 (Success: OK)
