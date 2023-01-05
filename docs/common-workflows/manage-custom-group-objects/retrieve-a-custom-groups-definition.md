---
title: Workflow sample - Retrieve a custom group's definition
sidebar_label: Retrieve a custom group's definition
description: This topic covers three workflows for retrieving a custom group’s definition.
---

<Available since="2021 Update 2" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-1cd8c3f9-4d8f-496f-b183-3f615c8812e2?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This topic covers three workflows for retrieving a custom group’s definition.

## Retrieve a custom group’s definition with filter elements

This workflow sample demonstrates how to retrieve the definition of a custom group with filter elements through the Modeling service.

You want to get the definition of the `"Age Group"` custom group object. The object ID of the custom group is `085CBF314703A71E926EA187C2002969` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the custom group's definition using [GET /api/model/customGroups/{customGroupId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups/ms-getCustomGroupDetails).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "8g9lfiranuc09js0imambijoi0"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/customGroups/085CBF314703A71E926EA187C2002969" -H "accept: application/json" -H "X-MSTR-AuthToken: 8g9lfiranuc09js0imambijoi0" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
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

Response Code: 200 (The custom group's definition was returned successfully.)

## Retrieve a custom group’s definition with a banding element

This workflow sample demonstrates how to retrieve the definition of a custom group with a banding element through the Modeling service.

You want to get the definition of the `"Customers Value Banding"` custom group object. The object ID of the custom group is `F519146F4B0A6EC81ED3CFA30F1C90B4` in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

Retrieve the custom group’s definition using [GET /api/model/customGroups/{customGroupId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups/ms-getCustomGroupDetails).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "8g9lfiranuc09js0imambijoi0"
"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/customGroups/F519146F4B0A6EC81ED3CFA30F1C90B4" -H "accept: application/json" -H "X-MSTR-AuthToken: 8g9lfiranuc09js0imambijoi0" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the custom group's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2007-08-20T14:16:02.000Z",
    "dateModified": "2021-06-17T09:32:15.483Z",
    "versionId": "ECBC4706C24C44548A4181B0BF331752",
    "primaryLocale": "en-US",
    "objectId": "F519146F4B0A6EC81ED3CFA30F1C90B4",
    "subType": "custom_group",
    "name": "Customers Value Banding",
    "description": "Custom group defined with metric banding on Running Revenue Contribution to all Customers Abs."
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "id": "41613AE628574CD28199822413EB86A7",
      "name": "All Customers",
      "displayOption": "element",
      "qualification": {
        "text": "Set of  Customer where Banding({Running Revenue Contribution to All Customers Abs.},0,1,0.2)",
        "tree": {
          "type": "predicate_banding_size",
          "predicateId": "41613AE628574CD28199822413EB86A7",
          "predicateText": "Set of  Customer where Banding({Running Revenue Contribution to All Customers Abs.},0,1,0.2)",
          "predicateTree": {
            "level": [
              {
                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",
                "subType": "attribute",
                "name": "Customer"
              }
            ],
            "metric": {
              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",
              "subType": "metric",
              "name": "Running Revenue Contribution to All Customers Abs."
            },
            "bandMetricFunction": "value",
            "bandNames": [
              "Top Quintile",
              "Second Quintile",
              "Third Quintile",
              "Fourth Quintile",
              "Bottom Quintile"
            ],
            "start": {
              "type": "double",
              "value": "0.0"
            },
            "stop": {
              "type": "double",
              "value": "1.0"
            },
            "size": {
              "type": "double",
              "value": "0.2"
            }
          }
        }
      }
    }
  ]
}
```

Response Code: 200 (The custom group's definition was returned successfully.)

## Retrieve a customer group definition with filter elements' expressions in tree and tokens formats

In this workflow sample, you want to get the definition of a custom group with its filter elements’ custom expressions return in tree and tokens formats. The object ID of the custom group is F315B42A4C64DC733261BFB5347F75FF.

If custom expressions are used in a custom group filter element, this parameter specifies the format in which they are returned in the response.

:::tip

Expressions are presented in the following formats:

- `"text"`: A human-readable, but non-parsable text, describing the expression. This is the default format that is always returned in the response.
- `"tree"`: A tree data structure fully defining the expression. This format can be used if you want to examine and modify the expression programmatically.
- `"tokens"`: A list of parsed tokens. This format can be used if you want to examine and modify the expression using the parser component. Be aware that generating tokens requires additional time.

  Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let’s say a custom group filter element's expression is "Revenue > Cost". When the custom group filter element's expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), (">", GreaterThan_ID), ("Cost", Cost_ID).

If omitted, the expression is returned in `"text"` format.

If `tree`, the expression is returned in `"text"` and `"tree"` formats.

If `tokens`, the expression is returned in `"text"` and `"tokens"` formats.

:::

This workflow sample is similar to [Retrieve a custom group's definition](#retrieve-a-custom-groups-definition-with-filter-elements), except with `showExpressionAs=tree` and `showExpressionAs=tokens`.

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/customGroups/F315B42A4C64DC733261BFB5347F75FF?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: 8g9lfiranuc09js0imambijoi0" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

You can view the custom group’s definition in the body of the response. Notice that, for each element, `['qualification']['tree']['PredicateTree']['expression']` contains the fields “tree“ and “tokens“, representing the custom expression in tree and tokens format respectively.

```json
{
  "information": {
    "dateCreated": "2021-06-17T09:47:18.470Z",
    "dateModified": "2021-06-17T09:53:26.223Z",
    "versionId": "C3BB1CE720450776BE73F6BD5EE190A1",
    "primaryLocale": "en-US",
    "objectId": "F315B42A4C64DC733261BFB5347F75FF",
    "subType": "custom_group",
    "name": "Last 10 Years",
    "description": ""
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "id": "E8FCCCF73799451BBD90A4A9AF0F81B5",
      "name": "Last 5 Year",
      "displayOption": "element",
      "qualification": {
        "text": "(Year (ID) > Year(CurrentDate - 5))",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateId": "E8FCCCF73799451BBD90A4A9AF0F81B5",
          "predicateText": "(Year (ID) > Year(CurrentDate - 5))",
          "predicateTree": {
            "function": "greater",
            "parameters": [
              {
                "parameterType": "expression",
                "expression": {
                  "text": "Year(CurrentDate - 5)",
                  "tree": {
                    "function": "year",
                    "children": [
                      {
                        "function": "minus",
                        "children": [
                          {
                            "function": "current_date",
                            "type": "operator"
                          },
                          {
                            "type": "constant",
                            "variant": {
                              "type": "int32",
                              "value": "5"
                            }
                          }
                        ],
                        "type": "operator"
                      }
                    ],
                    "type": "operator"
                  },
                  "tokens": [
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "Year",
                      "type": "function",
                      "target": {
                        "dateCreated": "2001-11-09T15:47:55.000Z",
                        "dateModified": "2021-03-09T15:22:01.113Z",
                        "versionId": "3219936911EB80EB24E70080EF25AB1A",
                        "primaryLocale": "en-US",
                        "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",
                        "subType": "function",
                        "name": "Year",
                        "description": "Returns the year of the input date."
                      }
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "(",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "(",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "CurrentDate",
                      "type": "function",
                      "target": {
                        "dateCreated": "2001-11-09T15:47:54.000Z",
                        "dateModified": "2021-03-09T15:22:00.813Z",
                        "versionId": "31EBC57811EB80EB00000080EF25AB1A",
                        "primaryLocale": "en-US",
                        "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",
                        "subType": "function",
                        "name": "CurrentDate",
                        "description": "Returns the current date based on the database timer. This function takes no input parameters."
                      }
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "(",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": ")",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "-",
                      "type": "character",
                      "target": {
                        "dateCreated": "2001-01-02T20:47:41.000Z",
                        "dateModified": "2021-03-09T15:22:04.454Z",
                        "versionId": "3417594811EB80EB25D80080EF25AB1A",
                        "primaryLocale": "en-US",
                        "objectId": "8107C311DD9911D3B98100C04F2233EA",
                        "subType": "function",
                        "name": "-",
                        "description": "Returns the difference between two values."
                      }
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "5",
                      "type": "integer"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": ")",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": ")",
                      "type": "character"
                    }
                  ]
                }
              }
            ],
            "attribute": {
              "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
              "subType": "attribute",
              "name": "Year"
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
      "id": "C581353C13914DD99D2735B03420EB8D",
      "name": "Last 10-5 Years",
      "displayOption": "element",
      "qualification": {
        "text": "(Year (ID) Between (Year(CurrentDate) - 10) and (Year(CurrentDate) - 5))",
        "tree": {
          "type": "predicate_form_qualification",
          "predicateId": "C581353C13914DD99D2735B03420EB8D",
          "predicateText": "(Year (ID) Between (Year(CurrentDate) - 10) and (Year(CurrentDate) - 5))",
          "predicateTree": {
            "function": "between",
            "parameters": [
              {
                "parameterType": "expression",
                "expression": {
                  "text": "(Year(CurrentDate) - 10)",
                  "tree": {
                    "function": "minus",
                    "children": [
                      {
                        "function": "year",
                        "children": [
                          {
                            "function": "current_date",
                            "type": "operator"
                          }
                        ],
                        "type": "operator"
                      },
                      {
                        "type": "constant",
                        "variant": {
                          "type": "int32",
                          "value": "10"
                        }
                      }
                    ],
                    "type": "operator"
                  },
                  "tokens": [
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "(",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "Year",
                      "type": "function",
                      "target": {
                        "dateCreated": "2001-11-09T15:47:55.000Z",
                        "dateModified": "2021-03-09T15:22:01.113Z",
                        "versionId": "3219936911EB80EB24E70080EF25AB1A",
                        "primaryLocale": "en-US",
                        "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",
                        "subType": "function",
                        "name": "Year",
                        "description": "Returns the year of the input date."
                      }
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "(",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "CurrentDate",
                      "type": "function",
                      "target": {
                        "dateCreated": "2001-11-09T15:47:54.000Z",
                        "dateModified": "2021-03-09T15:22:00.813Z",
                        "versionId": "31EBC57811EB80EB00000080EF25AB1A",
                        "primaryLocale": "en-US",
                        "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",
                        "subType": "function",
                        "name": "CurrentDate",
                        "description": "Returns the current date based on the database timer. This function takes no input parameters."
                      }
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "(",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": ")",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": ")",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "-",
                      "type": "character",
                      "target": {
                        "dateCreated": "2001-01-02T20:47:41.000Z",
                        "dateModified": "2021-03-09T15:22:04.454Z",
                        "versionId": "3417594811EB80EB25D80080EF25AB1A",
                        "primaryLocale": "en-US",
                        "objectId": "8107C311DD9911D3B98100C04F2233EA",
                        "subType": "function",
                        "name": "-",
                        "description": "Returns the difference between two values."
                      }
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "10",
                      "type": "integer"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": ")",
                      "type": "character"
                    }
                  ]
                }
              },
              {
                "parameterType": "expression",
                "expression": {
                  "text": "(Year(CurrentDate) - 5)",
                  "tree": {
                    "function": "minus",
                    "children": [
                      {
                        "function": "year",
                        "children": [
                          {
                            "function": "current_date",
                            "type": "operator"
                          }
                        ],
                        "type": "operator"
                      },
                      {
                        "type": "constant",
                        "variant": {
                          "type": "int32",
                          "value": "5"
                        }
                      }
                    ],
                    "type": "operator"
                  },
                  "tokens": [
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "(",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "Year",
                      "type": "function",
                      "target": {
                        "dateCreated": "2001-11-09T15:47:55.000Z",
                        "dateModified": "2021-03-09T15:22:01.113Z",
                        "versionId": "3219936911EB80EB24E70080EF25AB1A",
                        "primaryLocale": "en-US",
                        "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",
                        "subType": "function",
                        "name": "Year",
                        "description": "Returns the year of the input date."
                      }
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "(",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "CurrentDate",
                      "type": "function",
                      "target": {
                        "dateCreated": "2001-11-09T15:47:54.000Z",
                        "dateModified": "2021-03-09T15:22:00.813Z",
                        "versionId": "31EBC57811EB80EB00000080EF25AB1A",
                        "primaryLocale": "en-US",
                        "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",
                        "subType": "function",
                        "name": "CurrentDate",
                        "description": "Returns the current date based on the database timer. This function takes no input parameters."
                      }
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "(",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": ")",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": ")",
                      "type": "character"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "-",
                      "type": "character",
                      "target": {
                        "dateCreated": "2001-01-02T20:47:41.000Z",
                        "dateModified": "2021-03-09T15:22:04.454Z",
                        "versionId": "3417594811EB80EB25D80080EF25AB1A",
                        "primaryLocale": "en-US",
                        "objectId": "8107C311DD9911D3B98100C04F2233EA",
                        "subType": "function",
                        "name": "-",
                        "description": "Returns the difference between two values."
                      }
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "5",
                      "type": "integer"
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": ")",
                      "type": "character"
                    }
                  ]
                }
              }
            ],
            "attribute": {
              "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
              "subType": "attribute",
              "name": "Year"
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

Sample Response Code: 200 (Custom group’s definition is returned successfully.)
```
