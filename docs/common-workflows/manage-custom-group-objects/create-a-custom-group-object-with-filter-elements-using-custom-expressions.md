---
title: Workflow sample - Create a custom group object with filter elements using custom expressions
sidebar_label: Create a custom group object with filter elements using custom expressions
description: This workflow sample demonstrates how to create a new custom group object with filter elements using custom expressions through the Modeling service.
---

<Available since="2021 Update 2" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-595a6492-e685-41a9-bdc2-5c0b9c571315?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

This workflow sample demonstrates how to create a new custom group object with filter elements using custom expressions through the Modeling service.

You want to create a new `"Last 10 year"` custom group object with 2 filter elements:

- last 5 year: "(Year(CurrentDate()) - 5)<= Year@ID"
- last 10-5 years: "((Year(CurrentDate()) - 10)<= Year@ID)AND((Year(CurrentDate()) - 5)>Year@ID)"

You want to save the object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is `98FE182C2A10427EACE0CD30B6768258`. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md).

:::

## Create a new custom group

Endpoint: [POST /api/model/customGroup](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups/ms-postCustomGroup) with each filter element in a custom expression.

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "bkf2bee310a9olr23h68dhgsvb"
"X-MSTR-MS-Changeset": "072C7C776DB0495E818531B2A748BC53"
```

Construct the Request Body:

Make a copy of the input template and construct the request body. Update <custom_group_name> and <destination_folder_id> for the new custom group object. Update <custom_group_element_name> and <custom_expression> for each element. Update options and displayOptions, respectively. The template looks like the following:

```json
{
  "information": {
    "subType": "custom_group",
    "name": "<custom_group_name>",
    "destinationFolderId": "<destination_folder_id>"
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "name": "<custom_group_element_name>",
      "displayOption": "element",
      "qualification": {
        "tokens": [
          {
            "value": "%",
            "type": "character"
          },
          {
            "value": "<custom_expression>"
          }
        ]
      }
    }
  ]
}
```

Sample Request Body:

```json
{
  "information": {
    "subType": "custom_group",
    "name": "Last 10 Years",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "name": "Last 5 Year",
      "displayOption": "element",
      "qualification": {
        "tokens": [
          {
            "value": "%",
            "type": "character"
          },
          {
            "value": "(Year(CurrentDate()) - 5)<= Year@ID"
          }
        ]
      }
    },
    {
      "name": "Last 10-5 Years",
      "displayOption": "element",
      "qualification": {
        "tokens": [
          {
            "value": "%",
            "type": "character"
          },
          {
            "value": "((Year(CurrentDate()) - 10)<= Year@ID)AND((Year(CurrentDate()) - 5)>Year@ID)"
          }
        ]
      }
    }
  ]
}
```

Sample Curl:

In this sample workflow, you want to return the newly created custom group filter elements' custom expression in all formats. Thus, you should set `showExpressionAs=tree` and `showExpressionAs=tokens`.

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/customGroups?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: bkf2bee310a9olr23h68dhgsvb" -H "X-MSTR-MS-Changeset: 072C7C776DB0495E818531B2A748BC53" -H "Content-Type: application/json" -d "{\"information\":{\"subType\":\"custom_group\",\"name\":\"Last 10 Years\",\"destinationFolderId\":\"98FE182C2A10427EACE0CD30B6768258\"},\"options\":{\"hierarchyDisplay\":true,\"subtotalsDisplay\":false,\"elementHeaderAboveChild\":true},\"elements\":[{\"name\":\"Last 5 Year\",\"displayOption\":\"element\",\"qualification\":{\"tokens\":[{\"value\":\"%\",\"type\":\"character\"},{\"value\":\"(Year(CurrentDate()) - 5)<= Year@ID\"}]}},{\"name\":\"Last 10-5 Years\",\"displayOption\":\"element\",\"qualification\":{\"tokens\":[{\"value\":\"%\",\"type\":\"character\"},{\"value\":\"((Year(CurrentDate()) - 10)<= Year@ID)AND((Year(CurrentDate()) - 5)>Year@ID)\"}]}}]}"
```

Sample Response Body:

You can view the new custom group's definition in the body of the response.

```json
{
  "information": {
    "versionId": "6ACA8172401F460AA5C0AAFD6DF8E89F",
    "primaryLocale": "en-US",
    "objectId": "2EA993D43FF94ED4A75119FD206FBB2D",
    "subType": "custom_group",
    "name": "Last 10 Years",
    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"
  },
  "options": {
    "hierarchyDisplay": true,
    "subtotalsDisplay": false,
    "elementHeaderAboveChild": true
  },
  "elements": [
    {
      "id": "B108CD5FB1984E7A9499119070E00AA2",
      "name": "Last 5 Year",
      "displayOption": "element",
      "qualification": {
        "text": "((Year(CurrentDate) - 5) <= Year (ID))",
        "tree": {
          "type": "predicate_custom",
          "predicateId": "B108CD5FB1984E7A9499119070E00AA2",
          "predicateText": "((Year(CurrentDate) - 5) <= Year (ID))",
          "predicateTree": {
            "expression": {
              "text": "((Year(CurrentDate) - 5) <= Year (ID))",
              "tree": {
                "function": "less_equal",
                "children": [
                  {
                    "function": "minus",
                    "children": [
                      {
                        "function": "year",
                        "children": [
                          {
                            "function": "current_date",
                            "levelType": "metric_level",
                            "type": "operator"
                          }
                        ],
                        "levelType": "metric_level",
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
                    "levelType": "metric_level",
                    "type": "operator"
                  },
                  {
                    "attribute": {
                      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
                      "subType": "attribute",
                      "name": "Year"
                    },
                    "form": {
                      "objectId": "45C11FA478E745FEA08D781CEA190FE5",
                      "subType": "attribute_form_system",
                      "name": "ID"
                    },
                    "type": "form_shortcut"
                  }
                ],
                "levelType": "metric_level",
                "type": "operator"
              },
              "tokens": [
                {
                  "level": "resolved",
                  "state": "initial",
                  "value": "%",
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
                },
                {
                  "level": "resolved",
                  "state": "initial",
                  "value": "<=",
                  "type": "function",
                  "target": {
                    "dateCreated": "2001-01-02T20:47:38.000Z",
                    "dateModified": "2021-03-09T15:22:04.735Z",
                    "versionId": "34421F3F11EB80EB21B50080EF25AB1A",
                    "primaryLocale": "en-US",
                    "objectId": "8107C31ADD9911D3B98100C04F2233EA",
                    "subType": "function",
                    "name": "<=",
                    "description": "Returns TRUE if the first value is lesser than or equal to the second value."
                  }
                },
                {
                  "level": "resolved",
                  "state": "initial",
                  "value": "Year@ID",
                  "type": "object_at_form",
                  "target": {
                    "dateCreated": "2001-01-02T20:48:10.000Z",
                    "dateModified": "2012-01-27T12:00:32.000Z",
                    "versionId": "24CEEC7044C6C7008EE0DF96565E9459",
                    "primaryLocale": "en-US",
                    "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
                    "subType": "attribute",
                    "name": "Year"
                  },
                  "attributeForm": {
                    "objectId": "45C11FA478E745FEA08D781CEA190FE5"
                  }
                },
                {
                  "level": "resolved",
                  "state": "initial",
                  "value": "",
                  "type": "end_of_text"
                }
              ]
            }
          }
        }
      }
    },
    {
      "id": "FAFDB89060A04BBBB754A1139E89F5A7",
      "name": "Last 10-5 Years",
      "displayOption": "element",
      "qualification": {
        "text": "(((Year(CurrentDate) - 10) <= Year (ID)) And ((Year(CurrentDate) - 5) > Year (ID)))",
        "tree": {
          "function": "and",
          "children": [
            {
              "type": "predicate_custom",
              "predicateId": "74D60C907623483D987EE6193E1FB73C",
              "predicateText": "((Year(CurrentDate) - 10) <= Year (ID))",
              "predicateTree": {
                "expression": {
                  "text": "((Year(CurrentDate) - 10) <= Year (ID))",
                  "tree": {
                    "function": "less_equal",
                    "children": [
                      {
                        "function": "minus",
                        "children": [
                          {
                            "function": "year",
                            "children": [
                              {
                                "function": "current_date",
                                "levelType": "metric_level",
                                "type": "operator"
                              }
                            ],
                            "levelType": "metric_level",
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
                        "levelType": "metric_level",
                        "type": "operator"
                      },
                      {
                        "attribute": {
                          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
                          "subType": "attribute",
                          "name": "Year"
                        },
                        "form": {
                          "objectId": "45C11FA478E745FEA08D781CEA190FE5",
                          "subType": "attribute_form_system",
                          "name": "ID"
                        },
                        "type": "form_shortcut"
                      }
                    ],
                    "levelType": "metric_level",
                    "type": "operator"
                  },
                  "tokens": [
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "%",
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
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "<=",
                      "type": "function",
                      "target": {
                        "dateCreated": "2001-01-02T20:47:38.000Z",
                        "dateModified": "2021-03-09T15:22:04.735Z",
                        "versionId": "34421F3F11EB80EB21B50080EF25AB1A",
                        "primaryLocale": "en-US",
                        "objectId": "8107C31ADD9911D3B98100C04F2233EA",
                        "subType": "function",
                        "name": "<=",
                        "description": "Returns TRUE if the first value is lesser than or equal to the second value."
                      }
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "Year@ID",
                      "type": "object_at_form",
                      "target": {
                        "dateCreated": "2001-01-02T20:48:10.000Z",
                        "dateModified": "2012-01-27T12:00:32.000Z",
                        "versionId": "24CEEC7044C6C7008EE0DF96565E9459",
                        "primaryLocale": "en-US",
                        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
                        "subType": "attribute",
                        "name": "Year"
                      },
                      "attributeForm": {
                        "objectId": "45C11FA478E745FEA08D781CEA190FE5"
                      }
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "",
                      "type": "end_of_text"
                    }
                  ]
                }
              }
            },
            {
              "type": "predicate_custom",
              "predicateId": "5006DEDD07144D40B7A77FC63DAE508D",
              "predicateText": "((Year(CurrentDate) - 5) > Year (ID))",
              "predicateTree": {
                "expression": {
                  "text": "((Year(CurrentDate) - 5) > Year (ID))",
                  "tree": {
                    "function": "greater",
                    "children": [
                      {
                        "function": "minus",
                        "children": [
                          {
                            "function": "year",
                            "children": [
                              {
                                "function": "current_date",
                                "levelType": "metric_level",
                                "type": "operator"
                              }
                            ],
                            "levelType": "metric_level",
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
                        "levelType": "metric_level",
                        "type": "operator"
                      },
                      {
                        "attribute": {
                          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
                          "subType": "attribute",
                          "name": "Year"
                        },
                        "form": {
                          "objectId": "45C11FA478E745FEA08D781CEA190FE5",
                          "subType": "attribute_form_system",
                          "name": "ID"
                        },
                        "type": "form_shortcut"
                      }
                    ],
                    "levelType": "metric_level",
                    "type": "operator"
                  },
                  "tokens": [
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "%",
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
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": ">",
                      "type": "character",
                      "target": {
                        "dateCreated": "2001-01-02T20:47:41.000Z",
                        "dateModified": "2021-03-09T15:22:04.644Z",
                        "versionId": "34345F9911EB80EB21B50080EF25AB1A",
                        "primaryLocale": "en-US",
                        "objectId": "8107C317DD9911D3B98100C04F2233EA",
                        "subType": "function",
                        "name": ">",
                        "description": "Returns TRUE if the first value is greater than the second value."
                      }
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "Year@ID",
                      "type": "object_at_form",
                      "target": {
                        "dateCreated": "2001-01-02T20:48:10.000Z",
                        "dateModified": "2012-01-27T12:00:32.000Z",
                        "versionId": "24CEEC7044C6C7008EE0DF96565E9459",
                        "primaryLocale": "en-US",
                        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",
                        "subType": "attribute",
                        "name": "Year"
                      },
                      "attributeForm": {
                        "objectId": "45C11FA478E745FEA08D781CEA190FE5"
                      }
                    },
                    {
                      "level": "resolved",
                      "state": "initial",
                      "value": "",
                      "type": "end_of_text"
                    }
                  ]
                }
              }
            }
          ],
          "type": "operator"
        }
      }
    }
  ]
}
```

Response Code: 201 (A new filter is created successfully in the changeset.)
