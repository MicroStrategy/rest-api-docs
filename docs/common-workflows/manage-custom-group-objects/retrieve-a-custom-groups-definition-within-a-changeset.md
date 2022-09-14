---
title: Workflow Sample - Retrieve a Custom Group's Definition within a Changeset
sidebar_label: Retrieve a Custom Group's Definition within a Changeset
description: This workflow sample demonstrates how to retrieve a custom group’s definition within a changeset.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-1cd8c3f9-4d8f-496f-b183-3f615c8812e2?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to retrieve a custom group’s definition within a changeset.

A changeset maintains an indivisible group of creations or modifications on modeling objects. If you plan to use the response of `GET /api/model/customGroups/{customGroupsId}` to create a new custom group or update the custom group's definition, it is recommended to associate all requests to one changeset.

You want to get the definition of the `"Age Group"` custom group object. The object ID of the custom group is `085CBF314703A71E926EA187C2002969` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

## Create a changeset

Endpoint: [POST /api/model/changesets.](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",
  "dateCreated": "2020-11-17T16:38:09.825650Z",
  "dateModified": "2020-11-17T16:38:09.825665Z",
  "status": "Ready",
  "schemaEdit": false,
  "userName": "MSTR User",
  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",
  "userDateNumberLocale": "en-US",
  "userMetadataLocale": "en-US",
  "userWarehouseLocale": "en-US"
}
```

Sample Response Code: 201 (A new changeset is created successfully.)

## Get a custom group's definition within a changeset

Endpoint: [GET /api/model/customGroups/{customGroupsId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups/ms-getCustomGroupDetails).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/customGroups/085CBF314703A71E926EA187C2002969" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body:

You can view the custom group's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2007-08-20T14:00:08.000Z",
    "dateModified": "2021-06-17T09:32:09.733Z",
    "versionId": "ACAD884F6749F38A71B10CAF7E040B16",
    "primaryLocale": "en-US",
    "objectId": "085CBF314703A71E926EA187C2002969",
    "subType": "custom_group",
    "name": "Age Groups",
    "description": "Custom group defined with attribute qualification on Customer Age."
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "id": "C53C93AC7D4E485B85B926AB57509A6B",
      "name": "< 25",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) < 25)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateId": "C53C93AC7D4E485B85B926AB57509A6B",
          "predicateText": "({Customer Age} (ID) < 25)",
          "predicateTree": {
            "function": "less",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "25.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    },
    {
      "id": "0658E08519034E71892D07D7FAFB4717",
      "name": "25-35",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) Between 25 and 35)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateId": "0658E08519034E71892D07D7FAFB4717",
          "predicateText": "({Customer Age} (ID) Between 25 and 35)",
          "predicateTree": {
            "function": "between",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "25.0"
                }
              },
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "35.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    },
    {
      "id": "1AB9E1CE1127458D80C453F275F6DAA7",
      "name": "36-50",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) Between 36 and 50)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateId": "1AB9E1CE1127458D80C453F275F6DAA7",
          "predicateText": "({Customer Age} (ID) Between 36 and 50)",
          "predicateTree": {
            "function": "between",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "36.0"
                }
              },
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "50.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    },
    {
      "id": "2B2F2875BE784572814E4900A1741C5C",
      "name": "51-60",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) Between 51 and 60)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateId": "2B2F2875BE784572814E4900A1741C5C",
          "predicateText": "({Customer Age} (ID) Between 51 and 60)",
          "predicateTree": {
            "function": "between",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "51.0"
                }
              },
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "60.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    },
    {
      "id": "955BBAC569C741F2913143BE6D03EA4A",
      "name": "> 60",
      "displayOption": "element",
      "qualification": {
        "text": "({Customer Age} (ID) > 60)",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateId": "955BBAC569C741F2913143BE6D03EA4A",
          "predicateText": "({Customer Age} (ID) > 60)",
          "predicateTree": {
            "function": "greater",
            "parameters": [
              {
                "parameterType": "constant",
                "constant": {
                  "type": "double",
                  "value": "60.0"
                }
              }
            ],
            "attribute": {
              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",
              "subType": "attribute",
              "name": "Customer Age"
            },
            "form": {
              "objectId": "45C11FA478E745FEA08D781CEA190FE5",
              "subType": "attribute_form_system",
              "name": "ID"
            }
          }
        }
      }
    }
  ]
}
```

Response Code: 200 (The custom group's definition is returned successfully.)

## Delete a changeset

Endpoint: [DELETE /api/model/changesets/{changesetId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/0E9F01172ECF4BA2BB510F7B9FB4F6E8" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"
```

Sample Response Body: Empty

Sample Response Code: 204 (The changeset is deleted successfully.)
