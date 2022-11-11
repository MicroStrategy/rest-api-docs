---
title: Workflow sample - Retrieve a consolidation's definition
sidebar_label: Retrieve a consolidation's definition
description: You can use REST APIs to retrieve the definition for a consolidation through the Modeling service.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d0ad5e63-76a5-47c8-b185-1f5781a443f6?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can use REST APIs to retrieve the definition for a consolidation through the Modeling service. This topic includes the following workflows:

- [Retrieve a consolidation's definition](#retrieve-a-consolidations-definition)
- [Retrieve a consolidation's definition within a changeset](#retrieve-a-consolidations-definition-within-a-changeset)

## Retrieve a consolidation's definition

You want to get the definition of a consolidation object. The object ID of the consolidation is B9E7FD5911D3E936C000B3B2D86C964F in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Get the consolidation's definition using [GET /api/model/consolidations/{consolidationId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Consolidations/ms-getConsolidation).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Consolidations/ms-getConsolidation" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the consolidation's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2001-01-02T20:42:45.000Z",
    "dateModified": "2021-05-24T12:12:07.425Z",
    "versionId": "AE56DC0C4D219076865D2E8E9539278C",
    "primaryLocale": "en-US",
    "objectId": "B9E7FD5911D3E936C000B3B2D86C964F",
    "subType": "consolidation",
    "name": "Customer Geography",
    "description": "Consolidation based on Customer Regions"
  },
  "elements": [
    {
      "id": "B9E7FD7111D3E936C000B3B2D86C964F",
      "name": "Northeast",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "Northeast",
        "tree": {
          "type": "elements_object",
          "elements": [
            {
              "display": "Northeast",
              "elementId": "h1",
              "attribute": {
                "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer Region"
              }
            }
          ]
        }
      }
    },
    {
      "id": "B9E7FD7011D3E936C000B3B2D86C964F",
      "name": "South",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "(South + Southeast) + Mid-Atlantic",
        "tree": {
          "function": "plus",
          "children": [
            {
              "function": "plus",
              "children": [
                {
                  "type": "elements_object",
                  "elements": [
                    {
                      "display": "South",
                      "elementId": "h5",
                      "attribute": {
                        "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                        "subType": "attribute",
                        "name": "Customer Region"
                      }
                    }
                  ]
                },
                {
                  "type": "elements_object",
                  "elements": [
                    {
                      "display": "Southeast",
                      "elementId": "h3",
                      "attribute": {
                        "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                        "subType": "attribute",
                        "name": "Customer Region"
                      }
                    }
                  ]
                }
              ],
              "type": "operator"
            },
            {
              "type": "elements_object",
              "elements": [
                {
                  "display": "Mid-Atlantic",
                  "elementId": "h2",
                  "attribute": {
                    "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer Region"
                  }
                }
              ]
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "id": "B9E7FD6D11D3E936C000B3B2D86C964F",
      "name": "Central",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "Central",
        "tree": {
          "type": "elements_object",
          "elements": [
            {
              "display": "Central",
              "elementId": "h4",
              "attribute": {
                "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer Region"
              }
            }
          ]
        }
      }
    },
    {
      "id": "B9E7FD6C11D3E936C000B3B2D86C964F",
      "name": "West",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "Northwest + Southwest",
        "tree": {
          "function": "plus",
          "children": [
            {
              "type": "elements_object",
              "elements": [
                {
                  "display": "Northwest",
                  "elementId": "h6",
                  "attribute": {
                    "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer Region"
                  }
                }
              ]
            },
            {
              "type": "elements_object",
              "elements": [
                {
                  "display": "Southwest",
                  "elementId": "h7",
                  "attribute": {
                    "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer Region"
                  }
                }
              ]
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "id": "B9E7FD6A11D3E936C000B3B2D86C964F",
      "name": "US",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "((Northeast + South) + Central) + West",
        "tree": {
          "function": "plus",
          "children": [
            {
              "function": "plus",
              "children": [
                {
                  "function": "plus",
                  "children": [
                    {
                      "type": "object_reference",
                      "target": {
                        "objectId": "B9E7FD7111D3E936C000B3B2D86C964F",
                        "subType": "consolidation_element",
                        "name": "Northeast",
                        "isEmbedded": true
                      },
                      "isIndependent": 1
                    },
                    {
                      "type": "object_reference",
                      "target": {
                        "objectId": "B9E7FD7011D3E936C000B3B2D86C964F",
                        "subType": "consolidation_element",
                        "name": "South",
                        "isEmbedded": true
                      },
                      "isIndependent": 1
                    }
                  ],
                  "type": "operator"
                },
                {
                  "type": "object_reference",
                  "target": {
                    "objectId": "B9E7FD6D11D3E936C000B3B2D86C964F",
                    "subType": "consolidation_element",
                    "name": "Central",
                    "isEmbedded": true
                  },
                  "isIndependent": 1
                }
              ],
              "type": "operator"
            },
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6C11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "West",
                "isEmbedded": true
              },
              "isIndependent": 1
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "id": "B9E7FD6511D3E936C000B3B2D86C964F",
      "name": "Northeast / US",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "Northeast / US",
        "tree": {
          "function": "divide",
          "children": [
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD7111D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "Northeast",
                "isEmbedded": true
              },
              "isIndependent": 1
            },
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "US",
                "isEmbedded": true
              },
              "isIndependent": 1
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "id": "B9E7FD5F11D3E936C000B3B2D86C964F",
      "name": "South / US",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "South / US",
        "tree": {
          "function": "divide",
          "children": [
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD7011D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "South",
                "isEmbedded": true
              },
              "isIndependent": 1
            },
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "US",
                "isEmbedded": true
              },
              "isIndependent": 1
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "id": "B9E7FD6211D3E936C000B3B2D86C964F",
      "name": "Central / US",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "Central / US",
        "tree": {
          "function": "divide",
          "children": [
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6D11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "Central",
                "isEmbedded": true
              },
              "isIndependent": 1
            },
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "US",
                "isEmbedded": true
              },
              "isIndependent": 1
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "id": "B9E7FD5C11D3E936C000B3B2D86C964F",
      "name": "West / US",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "West / US",
        "tree": {
          "function": "divide",
          "children": [
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6C11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "West",
                "isEmbedded": true
              },
              "isIndependent": 1
            },
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "US",
                "isEmbedded": true
              },
              "isIndependent": 1
            }
          ],
          "type": "operator"
        }
      }
    }
  ],
  "subtotal": "disable"
}
```

Response Code: 200 (The consolidation's definition is returned successfully.)

## Retrieve a consolidation's definition within a changeset

You want the definition of the consolidation object "Customer Geography". The object ID of the consolidation is B9E7FD5911D3E936C000B3B2D86C964F in the MicroStrategy Tutorial project. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754.

:::info

Obtain the authorization token needed to execute the request using `POST /api/auth/login`.

Obtain the project ID from `GET /api/projects`.

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md). If you plan to use the response of `GET /api/model/consolidation/{consolidationId}` to create a new consolidation or update the consolidation's definition, it is recommended to associate all requests to one changeset.

:::

Get the consolidation's definition within a changeset using [GET /api/model/consolidations/{consolidationId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Consolidations/ms-getConsolidation).

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Consolidations/ms-getConsolidation" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body:

```json
{
  "information": {
    "dateCreated": "2001-01-02T20:42:45.000Z",
    "dateModified": "2021-05-24T12:12:07.425Z",
    "versionId": "AE56DC0C4D219076865D2E8E9539278C",
    "primaryLocale": "en-US",
    "objectId": "B9E7FD5911D3E936C000B3B2D86C964F",
    "subType": "consolidation",
    "name": "Customer Geography",
    "description": "Consolidation based on Customer Regions"
  },
  "elements": [
    {
      "id": "B9E7FD7111D3E936C000B3B2D86C964F",
      "name": "Northeast",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "Northeast",
        "tree": {
          "type": "elements_object",
          "elements": [
            {
              "display": "Northeast",
              "elementId": "h1",
              "attribute": {
                "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer Region"
              }
            }
          ]
        }
      }
    },
    {
      "id": "B9E7FD7011D3E936C000B3B2D86C964F",
      "name": "South",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "(South + Southeast) + Mid-Atlantic",
        "tree": {
          "function": "plus",
          "children": [
            {
              "function": "plus",
              "children": [
                {
                  "type": "elements_object",
                  "elements": [
                    {
                      "display": "South",
                      "elementId": "h5",
                      "attribute": {
                        "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                        "subType": "attribute",
                        "name": "Customer Region"
                      }
                    }
                  ]
                },
                {
                  "type": "elements_object",
                  "elements": [
                    {
                      "display": "Southeast",
                      "elementId": "h3",
                      "attribute": {
                        "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                        "subType": "attribute",
                        "name": "Customer Region"
                      }
                    }
                  ]
                }
              ],
              "type": "operator"
            },
            {
              "type": "elements_object",
              "elements": [
                {
                  "display": "Mid-Atlantic",
                  "elementId": "h2",
                  "attribute": {
                    "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer Region"
                  }
                }
              ]
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "id": "B9E7FD6D11D3E936C000B3B2D86C964F",
      "name": "Central",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "Central",
        "tree": {
          "type": "elements_object",
          "elements": [
            {
              "display": "Central",
              "elementId": "h4",
              "attribute": {
                "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer Region"
              }
            }
          ]
        }
      }
    },
    {
      "id": "B9E7FD6C11D3E936C000B3B2D86C964F",
      "name": "West",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "Northwest + Southwest",
        "tree": {
          "function": "plus",
          "children": [
            {
              "type": "elements_object",
              "elements": [
                {
                  "display": "Northwest",
                  "elementId": "h6",
                  "attribute": {
                    "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer Region"
                  }
                }
              ]
            },
            {
              "type": "elements_object",
              "elements": [
                {
                  "display": "Southwest",
                  "elementId": "h7",
                  "attribute": {
                    "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",
                    "subType": "attribute",
                    "name": "Customer Region"
                  }
                }
              ]
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "id": "B9E7FD6A11D3E936C000B3B2D86C964F",
      "name": "US",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "((Northeast + South) + Central) + West",
        "tree": {
          "function": "plus",
          "children": [
            {
              "function": "plus",
              "children": [
                {
                  "function": "plus",
                  "children": [
                    {
                      "type": "object_reference",
                      "target": {
                        "objectId": "B9E7FD7111D3E936C000B3B2D86C964F",
                        "subType": "consolidation_element",
                        "name": "Northeast",
                        "isEmbedded": true
                      },
                      "isIndependent": 1
                    },
                    {
                      "type": "object_reference",
                      "target": {
                        "objectId": "B9E7FD7011D3E936C000B3B2D86C964F",
                        "subType": "consolidation_element",
                        "name": "South",
                        "isEmbedded": true
                      },
                      "isIndependent": 1
                    }
                  ],
                  "type": "operator"
                },
                {
                  "type": "object_reference",
                  "target": {
                    "objectId": "B9E7FD6D11D3E936C000B3B2D86C964F",
                    "subType": "consolidation_element",
                    "name": "Central",
                    "isEmbedded": true
                  },
                  "isIndependent": 1
                }
              ],
              "type": "operator"
            },
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6C11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "West",
                "isEmbedded": true
              },
              "isIndependent": 1
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "id": "B9E7FD6511D3E936C000B3B2D86C964F",
      "name": "Northeast / US",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "Northeast / US",
        "tree": {
          "function": "divide",
          "children": [
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD7111D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "Northeast",
                "isEmbedded": true
              },
              "isIndependent": 1
            },
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "US",
                "isEmbedded": true
              },
              "isIndependent": 1
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "id": "B9E7FD5F11D3E936C000B3B2D86C964F",
      "name": "South / US",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "South / US",
        "tree": {
          "function": "divide",
          "children": [
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD7011D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "South",
                "isEmbedded": true
              },
              "isIndependent": 1
            },
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "US",
                "isEmbedded": true
              },
              "isIndependent": 1
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "id": "B9E7FD6211D3E936C000B3B2D86C964F",
      "name": "Central / US",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "Central / US",
        "tree": {
          "function": "divide",
          "children": [
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6D11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "Central",
                "isEmbedded": true
              },
              "isIndependent": 1
            },
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "US",
                "isEmbedded": true
              },
              "isIndependent": 1
            }
          ],
          "type": "operator"
        }
      }
    },
    {
      "id": "B9E7FD5C11D3E936C000B3B2D86C964F",
      "name": "West / US",
      "type": "calculation",
      "format": {
        "header": [],
        "values": []
      },
      "expression": {
        "text": "West / US",
        "tree": {
          "function": "divide",
          "children": [
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6C11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "West",
                "isEmbedded": true
              },
              "isIndependent": 1
            },
            {
              "type": "object_reference",
              "target": {
                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",
                "subType": "consolidation_element",
                "name": "US",
                "isEmbedded": true
              },
              "isIndependent": 1
            }
          ],
          "type": "operator"
        }
      }
    }
  ],
  "subtotal": "disable"
}
```

Response Code: 200
