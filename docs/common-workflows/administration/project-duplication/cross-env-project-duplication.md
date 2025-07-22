---
sidebar_label: Project Duplication (Cross Environment)
title: Project Duplication (Cross Environment)
description: The REST API provides endpoints to duplicate projects across two environments, enabling
  administrators to create copies of projects with customizable settings.
---

Project duplication enables administrators to duplicate projects across two environments for the same MD type (PostgreSQL to PostgreSQL) directly using REST APIs, replacing the need for legacy tools like Object Manager, Developer.

:::warning

These project duplication APIs do not work when [User Fencing](https://www2.microstrategy.com/producthelp/current/SystemAdmin/WebHelp/Lang_1033/content/Work_Fences.htm) is enabled. Please ensure that User Fencing is disabled in the Library.

:::

## APIs

- [POST /api/projectDuplications](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Project%20Duplications/createDuplication)
- [PUT /api/projectDuplications/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Project%20Duplications/createDuplicationOnTarget)
- [GET /api/projectDuplications/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Project%20Duplications/getProjectDuplication)
- [GET /api/projectDuplications](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Project%20Duplications/getProjectDuplications)
- [PUT /api/projectDuplications/\{id}/status](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Project%20Duplications/cancelDuplication)
- [GET /api/projectDuplications/\{id}/backup](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Project%20Duplications/getProjectDuplicationFiles)
- [POST /api/projectDuplications/restoration](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Project%20Duplications/triggerDuplicationByPackage)
- [DELETE /api/projectDuplications/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Project%20Duplications/deleteDuplication)

## Privileges and authorization

You need the following privileges to use the project duplication functionality:

- [DssXmlPrivilegesDuplicateProject](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesDuplicateProject) and [DssXmlPrivilegesBypassAccessChecks](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesBypassAccessChecks) privilege on the duplicated project

To execute the API, you must get the authorization token by executing the `POST /api/auth/login`
request, and get a token as `X-MSTR-AuthToken` in the response header. Keep the token value. It is
required to execute the REST API. See [Authentication](/docs/getting-started/authentication.md) for
more information.

## General workflow

The general workflow for using the project duplication APIs involves:

1. [Initiate project duplication on source environment](#initiate-project-duplication-on-source-environment)
1. [Initiate project duplication on target environment](#initiate-project-duplication-on-target-environment)
1. [Check duplication status](#check-duplication-status)
1. [List all project duplications](#list-all-project-duplications)
1. [Cancel project duplication](#cancel-project-duplication)
1. [Download project duplication package file](#download-project-duplication-package-file)
1. [Restore project duplication with package file](#restore-project-duplication-with-package-file)

### Initiate project duplication on source environment

Use `POST /api/projectDuplications` to start a project duplication operation on source environment. This initiates an asynchronous process
that creates a duplicate of the source project with the settings you specify. The duplicated project will be synced with the target environment.

For cross environment project duplication, `source.environment.id` and `target.environment.id` in the request body should be different.

#### Step 1: Create the duplication request on source environment

Sample Request Header:

```http
Content-Type: application/json
X-MSTR-AuthToken: <authToken>
Prefer: respond-async
X-MSTR-ProjectID: <projectID>
```

:::tip The `Prefer: respond-async` header instructs the server to process the duplication asynchronously without waiting for completion.
:::

Sample Request Body:

:::important For cross environment project duplication, `source.environment.id` and `target.environment.id` in the request body should be different.
:::

```json
{
  "source": {
    "environment": {
      "id": "http://example1.com/MicroStrategyLibrary",
      "name": "Source Environment"
    },
    "project": {
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "name": "Tutorial"
    }
  },
  "target": {
    "environment": {
      "id": "http://example2.com/MicroStrategyLibrary",
      "name": "Target Environment"
    },
    "project": {
      "name": "Target Project"
    }
  },
  "settings": {
    "import": {
      "description": "this is a test description",
      "defaultLocale": 2052,
      "locales": [1033, 2052],
      "configurationObjects": {
        "conflictRules": [
          {
            "type": 5,
            "rule": 1
          },
          {
            "type": 34,
            "rule": 6
          },
          {
            "type": 29,
            "rule": 2
          },
          {
            "type": 44,
            "rule": 2
          }
        ],
        "matchUsersByLogin": false
      }
    },
    "export": {
      "configurationObjects": {
        "rules": [
          {
            "type": 5,
            "rule": 1
          },
          {
            "type": 34,
            "rule": 2
          }
        ],
        "objects": ["95A868464F2F105205B2848BBCB81C50", "4E70890241DBB18E6CA1D8B850952A68"],
        "includeAllUserGroups": false
      }
    }
  }
}
```

Sample Curl:

```bash
curl -X POST "https://example1.com/MicroStrategyLibrary/api/projectDuplications" \
  -H "Content-Type: application/json" \
  -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" \
  -H "Prefer: respond-async" \
  -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \
  -d '{
    "source": {
        "environment": {
            "id": "http://example1.com/MicroStrategyLibrary",
            "name": "Source Environment"
        },
        "project": {
            "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
            "name": "Tutorial"
        }
    },
    "target": {
        "environment": {
            "id": "http://example2.com/MicroStrategyLibrary",
            "name": "Target Environment"
        },
        "project": {
            "name": "Target Project"
        }
    },
"settings": {
    "import": {
      "description": "this is a test description",
      "defaultLocale": 2052,
      "locales": [1033, 2052],
      "configurationObjects": {
        "conflictRules":[
            {
                "type": 5,
                "rule": 1
            },
            {
                "type": 34,
                "rule": 6
            },
            {
                "type": 29,
                "rule": 2
            },
            {
                "type": 44,
                "rule": 2
            }
        ],
        "matchUsersByLogin": false
      }
    },
    "export": {
      "configurationObjects": {
        "rules": [
          {
            "type": 5,
            "rule": 1
          },
          {
            "type": 34,
            "rule": 2
          }
        ],
        "objects": [
          "95A868464F2F105205B2848BBCB81C50",
          "4E70890241DBB18E6CA1D8B850952A68"
        ],
        "includeAllUserGroups": false
      }
    }
  }
}'
```

Sample Response Code: 201 (Created)

Sample Response Body:

```json
{
  "id": "F8F1280022A444C5A10B3445B552E33A",
  "source": {
    "environment": {
      "id": "http://example1.com/MicroStrategyLibrary",
      "name": "Source Environment"
    },
    "project": {
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "name": "Tutorial"
    },
    "creator": {
      "id": "86A002474C1A18F1F92F2B8150A43741",
      "name": "mstr1"
    }
  },
  "target": {
    "environment": {
      "id": "http://example2.com/MicroStrategyLibrary",
      "name": "Target Environment"
    },
    "project": {
      "id": "B0D8B3CC70854505A1576DBBE26C4B8B",
      "name": "Target Project"
    },
    "creator": {
      "id": "86A002474C1A18F1F92F2B8150A43741",
      "name": "mstr1"
    }
  },
  "createdDate": "2025-05-20T02:30:24.632+0000",
  "lastUpdatedDate": "2025-05-20T02:34:57.748+0000",
  "status": "exporting",
  "progress": 0,
  "message": "",
  "settings": {
    "export": {
      "projectObjectsPreference": {
        "schemaObjectsOnly": false,
        "skipEmptyProfileFolders": false
      },
      "subscriptionPreferences": {
        "includeUserSubscriptions": false,
        "includeContactSubscriptions": false
      },
      "configurationObjects": {
        "rules": [
          {
            "type": 34,
            "rule": 2
          },
          {
            "type": 5,
            "rule": 1
          }
        ],
        "objects": ["95A868464F2F105205B2848BBCB81C50", "4E70890241DBB18E6CA1D8B850952A68"],
        "includeAllUserGroups": false
      }
    },
    "import": {
      "description": "this is a test description",
      "defaultLocale": 2052,
      "locales": [1033, 2052],
      "configurationObjects": {
        "conflictRules": [
          {
            "type": 44,
            "rule": 2
          },
          {
            "type": 34,
            "rule": 6
          },
          {
            "type": 5,
            "rule": 1
          },
          {
            "type": 29,
            "rule": 2
          }
        ],
        "matchUsersByLogin": false
      }
    }
  }
}
```

:::note The duplication process is executed asynchronously. The response includes a unique `id` that you can use to check the status of the operation using the `GET /api/projectDuplications/{id}` endpoint.
:::

### Initiate project duplication on target environment

Before initiating project duplication on target environment, call `POST /api/projectDuplications` to start a project duplication operation on source environment and get the project duplication ID in the response body.

On target environment, use `PUT /projectDuplications/{id}` with the project duplication ID to initiate an asynchronous process that creates a duplicate of the project with the settings you specify. The duplicated project will be synced from the source environment.

#### Step 2: Create the duplication request on target environment

Sample Request Header:

```http
Content-Type: application/json
X-MSTR-AuthToken: <authToken>
Prefer: respond-async
X-MSTR-ProjectID: <projectID>
```

:::tip The `Prefer: respond-async` header instructs the server to process the duplication asynchronously without waiting for completion.
:::

Sample Request Body:

:::important For cross environment project duplication, `source.environment.id` and `target.environment.id` in the request body should be different. Use the same request body as in the `POST /projectDuplications` request.
:::

```json
{
  "source": {
    "environment": {
      "id": "http://example1.com/MicroStrategyLibrary",
      "name": "Source Environment"
    },
    "project": {
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "name": "Tutorial"
    }
  },
  "target": {
    "environment": {
      "id": "http://example2.com/MicroStrategyLibrary",
      "name": "Target Environment"
    },
    "project": {
      "name": "Target Project"
    }
  },
  "settings": {
    "export": {
      "projectObjectsPreference": {
        "schemaObjectsOnly": false,
        "skipEmptyProfileFolders": false
      },
      "subscriptionPreferences": {
        "includeUserSubscriptions": false,
        "includeContactSubscriptions": false
      },
      "configurationObjects": {
        "rules": [
          {
            "type": 34,
            "rule": 2
          },
          {
            "type": 5,
            "rule": 1
          }
        ],
        "objects": ["95A868464F2F105205B2848BBCB81C50", "4E70890241DBB18E6CA1D8B850952A68"],
        "includeAllUserGroups": false
      }
    },
    "import": {
      "description": "this is a test description",
      "defaultLocale": 2052,
      "locales": [1033, 2052],
      "configurationObjects": {
        "conflictRules": [
          {
            "type": 44,
            "rule": 2
          },
          {
            "type": 34,
            "rule": 6
          },
          {
            "type": 5,
            "rule": 1
          },
          {
            "type": 29,
            "rule": 2
          }
        ],
        "matchUsersByLogin": false
      }
    }
  }
}
```

Sample Curl:

```bash
curl -X PUT "https://example2.com/MicroStrategyLibrary/api/projectDuplications/C17A7B510F8A4B74B6B19F168106921E" \
  -H "Content-Type: application/json" \
  -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" \
  -H "Prefer: respond-async" \
  -d '{
    "source": {
        "environment": {
            "id": "http://example.com/MicroStrategyLibrary",
            "name": "Source Environment"
        },
        "project": {
            "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
            "name": "Tutorial"
        }
    },
    "target": {
        "environment": {
            "id": "http://example.com/MicroStrategyLibrary",
            "name": "Target Environment"
        },
        "project": {
            "name": "Target Project"
        }
    },
    "settings": {
      "import": {
            "description": "this is a test description",
            "defaultLocale": 2052,
            "locales": [
                1033,
                2052
            ],
            "configurationObjects": {
                "conflictRules": [
                    {
                        "type": 44,
                        "rule": 2
                    },
                    {
                        "type": 34,
                        "rule": 6
                    },
                    {
                        "type": 5,
                        "rule": 1
                    },
                    {
                        "type": 29,
                        "rule": 2
                    }
                ],
                "matchUsersByLogin": false
            }
        }
    }
}'
```

Sample Response Code: 201 (Created)

Sample Response Body:

```json
{
  "id": "F8F1280022A444C5A10B3445B552E33A",
  "source": {
    "environment": {
      "id": "http://example1.com/MicroStrategyLibrary",
      "name": "Source Environment"
    },
    "project": {
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "name": "Tutorial"
    },
    "creator": {
      "id": "86A002474C1A18F1F92F2B8150A43741",
      "name": "mstr1"
    }
  },
  "target": {
    "environment": {
      "id": "http://example2.com/MicroStrategyLibrary",
      "name": "Target Environment"
    },
    "project": {
      "id": "B0D8B3CC70854505A1576DBBE26C4B8B",
      "name": "Target Project"
    },
    "creator": {
      "id": "86A002474C1A18F1F92F2B8150A43741",
      "name": "mstr1"
    }
  },
  "createdDate": "2025-05-20T02:30:24.632+0000",
  "lastUpdatedDate": "2025-05-20T02:34:57.748+0000",
  "status": "exporting",
  "progress": 0,
  "message": "",
  "settings": {
    "export": {
      "projectObjectsPreference": {
        "schemaObjectsOnly": false,
        "skipEmptyProfileFolders": false
      },
      "subscriptionPreferences": {
        "includeUserSubscriptions": false,
        "includeContactSubscriptions": false
      },
      "configurationObjects": {
        "rules": [
          {
            "type": 34,
            "rule": 2
          },
          {
            "type": 5,
            "rule": 1
          }
        ],
        "objects": ["95A868464F2F105205B2848BBCB81C50", "4E70890241DBB18E6CA1D8B850952A68"],
        "includeAllUserGroups": false
      }
    },
    "import": {
      "description": "this is a test description",
      "defaultLocale": 2052,
      "locales": [1033, 2052],
      "configurationObjects": {
        "conflictRules": [
          {
            "type": 44,
            "rule": 2
          },
          {
            "type": 34,
            "rule": 6
          },
          {
            "type": 5,
            "rule": 1
          },
          {
            "type": 29,
            "rule": 2
          }
        ],
        "matchUsersByLogin": false
      }
    }
  }
}
```

:::note The duplication process is executed asynchronously. The response includes a unique `id` that you can use to check the status of the operation using the `GET /api/projectDuplications/{id}` endpoint.
:::

### Check duplication status

Use `GET /api/projectDuplications/{id}` to check the status of a specific project duplication operation on either source environment or target environment. Since duplication is an asynchronous process, you should poll this endpoint to monitor the progress.

#### Step 3: Monitor the duplication progress

Sample Request Header:

```http
X-MSTR-AuthToken: <authToken>
```

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/projectDuplications/F8F1280022A444C5A10B3445B552E33A" \
  -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa"
```

Sample Response Body:

```json
{
  "id": "F8F1280022A444C5A10B3445B552E33A",
  "source": {
    "environment": {
      "id": "http://example.com/MicroStrategyLibrary",
      "name": "Source Environment"
    },
    "project": {
      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
      "name": "Tutorial"
    },
    "creator": {
      "id": "86A002474C1A18F1F92F2B8150A43741",
      "name": "mstr1"
    }
  },
  "target": {
    "environment": {
      "id": "http://example.com/MicroStrategyLibrary",
      "name": "Target Environment"
    },
    "project": {
      "id": "B0D8B3CC70854505A1576DBBE26C4B8B",
      "name": "Target Project"
    },
    "creator": {
      "id": "86A002474C1A18F1F92F2B8150A43741",
      "name": "mstr1"
    }
  },
  "createdDate": "2025-05-20T02:30:24.632+0000",
  "lastUpdatedDate": "2025-05-20T02:34:57.748+0000",
  "status": "completed",
  "progress": 100,
  "message": "",
  "settings": {
    "export": {
      "projectObjectsPreference": {
        "schemaObjectsOnly": false,
        "skipEmptyProfileFolders": false
      },
      "subscriptionPreferences": {
        "includeUserSubscriptions": false,
        "includeContactSubscriptions": false
      },
      "configurationObjects": {
        "rules": [
          {
            "type": 34,
            "rule": 2
          },
          {
            "type": 5,
            "rule": 1
          }
        ],
        "objects": ["95A868464F2F105205B2848BBCB81C50", "4E70890241DBB18E6CA1D8B850952A68"],
        "includeAllUserGroups": false
      }
    },
    "import": {
      "description": "this is a test description",
      "defaultLocale": 2052,
      "locales": [1033, 2052],
      "configurationObjects": {
        "conflictRules": [
          {
            "type": 44,
            "rule": 2
          },
          {
            "type": 34,
            "rule": 6
          },
          {
            "type": 5,
            "rule": 1
          },
          {
            "type": 29,
            "rule": 2
          }
        ],
        "matchUsersByLogin": false
      }
    }
  }
}
```

Sample Response Code: 200 (OK)

:::info Duplication Status Values

The status of project duplication on source environment may be `exporting`, `export_syncing`, `exported`, `export_failed`, `cancelled`.

- exporting: Target environment is exporting the duplicated project.
- export_syncing: Source environment is syncing the project to target environment.
- exported: Project duplication finishes successfully on source environment.
- export_failed: Failure occurs during project duplication on source environment.
- cancelled: Project duplication is cancelled.

The status of project duplication on target environment may be `import_syncing`, `importing`, `completed`, `import_failed`, `cancelling`, `cancelled`.

- import_syncing: Target environment is syncing the project from source environment.
- importing: Target environment is importing the duplicated project.
- completed: Project duplication finishes successfully on target environment.
- import_failed: Failure occurs during project duplication on target environment.
- cancelling: Project duplication is being cancelled.
- cancelled: Project duplication is cancelled.

You should poll the status endpoint at reasonable intervals (e.g., every 10-30 seconds) until the
status changes to `exported`, `completed`, `import_failed`, `export_failed`, or `cancelled`.
:::

### List all project duplications

Use `GET /api/projectDuplications` to retrieve a list of all project duplication operations. This is useful for monitoring and managing multiple duplication tasks.

#### Retrieving the duplication history

Sample Request Header:

```http
X-MSTR-AuthToken: <authToken>
```

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/projectDuplications?offset=0&limit=1" \
  -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa"
```

Sample Response Body:

```json
{
  "projectDuplications": [
    {
      "id": "F8F1280022A444C5A10B3445B552E33A",
      "source": {
        "environment": {
          "id": "http://example.com/MicroStrategyLibrary",
          "name": "Source Environment"
        },
        "project": {
          "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",
          "name": "Tutorial"
        },
        "creator": {
          "id": "86A002474C1A18F1F92F2B8150A43741",
          "name": "mstr1"
        }
      },
      "target": {
        "environment": {
          "id": "http://example.com/MicroStrategyLibrary",
          "name": "Target Environment"
        },
        "project": {
          "id": "B0D8B3CC70854505A1576DBBE26C4B8B",
          "name": "Target Project"
        },
        "creator": {
          "id": "86A002474C1A18F1F92F2B8150A43741",
          "name": "mstr1"
        }
      },
      "createdDate": "2025-05-20T02:30:24.632+0000",
      "lastUpdatedDate": "2025-05-20T02:34:57.748+0000",
      "status": "completed",
      "progress": 100,
      "message": "",
      "settings": {
        "export": {
          "projectObjectsPreference": {
            "schemaObjectsOnly": false,
            "skipEmptyProfileFolders": false
          },
          "subscriptionPreferences": {
            "includeUserSubscriptions": false,
            "includeContactSubscriptions": false
          },
          "configurationObjects": {
            "rules": [
              {
                "type": 34,
                "rule": 2
              },
              {
                "type": 5,
                "rule": 1
              }
            ],
            "objects": [
              "95A868464F2F105205B2848BBCB81C50",
              "4E70890241DBB18E6CA1D8B850952A68"
            ],
            "includeAllUserGroups": false
          }
        },
        "import": {
          "description": "this is a test description",
          "defaultLocale": 2052,
          "locales": [
            1033,
            2052
          ],
          "configurationObjects": {
            "conflictRules": [
              {
                "type": 44,
                "rule": 2
              },
              {
                "type": 34,
                "rule": 6
              },
              {
                "type": 5,
                "rule": 1
              },
              {
                "type": 29,
                "rule": 2
              }
            ],
            "matchUsersByLogin": false
          }
        }
      }
    }
}
```

Sample Response Code: 200 (OK)

:::tip You can use this endpoint to check all your past and current duplication operations. It provides a comprehensive view of all duplication tasks and their statuses.
:::

### Cancel project duplication

Use `PUT /api/projectDuplications/{id}` to cancel an ongoing project duplication operation on either source environment or target environment.
This is useful if you made a mistake or need to stop a long-running duplication task.

For source environment, if the project duplication status has not been `exported`, cancelling the project duplication on source environment will also cancel any pending project duplication with the same ID on target environment.
However, cancelling the project duplication on target environment will not cancel the same project duplication on source environment.

#### Step 4: Cancel a duplication (if needed)

Sample Request Header:

```http
Content-Type: application/json
X-MSTR-AuthToken: <authToken>
```

Sample Request Body:

```json
{
  "status": "cancelled"
}
```

Sample Curl:

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/projectDuplications/F8F1280022A444C5A10B3445B552E33A" \
  -H "Content-Type: application/json" \
  -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" \
  -d '{
    "status": "cancelled"
}'
```

Sample Response Code: 204 (No Content)

:::note Important limitations:

- You can only cancel duplications that are in `exporting`, `exporting_syncing`, `import_syncing` or `importing` status
- Attempting to cancel a duplication that has already completed (`exported` on source environment, `completed` on target environment), failed
  (`export_failed`, `import_failed`), or been cancelled (`cancelled`) will result in an error
- Once cancelled, a duplication cannot be resumed and must be initiated again if needed
  :::

### Download project duplication package file

You may use `GET /api/projectDuplications/{id}/backup` to download the project duplication file. The package file can be used to restore the duplicated project on other environments with `POST /projectDuplications` API.

This API can only be called on source environment and the project duplication status must already be `exported`.

#### Step 5: Download project duplication package file (if needed)

Sample Request Header:

```http
X-MSTR-AuthToken: <authToken>
```

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/projectDuplications/F8F1280022A444C5A10B3445B552E33A/backup" \
  -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" \
  -o F8F1280022A444C5A10B3445B552E33A.projdup
```

Sample Response Body: File binary

Sample Response Code: 200 (OK)

### Restore project duplication with package file

Use `POST /api/projectDuplications/restoration` to restore a duplicated project with a project duplication package file on any environment.

With this API, upload a package file you download with `GET /projectDuplications/{id}/backup` API and a new project duplication will be triggered as in target environment.

#### Step 6: Restore project duplication with package file (if needed)

Sample Request Header:

```http
Content-Type: multipart/form-data
X-MSTR-AuthToken: <authToken>
```

Sample Request Body:

The request body must contain the form data with the following fields:

| Field Name | Type   | Required | Description                                                  |
| ---------- | ------ | -------- | ------------------------------------------------------------ |
| `file`     | File   | Yes      | The sample file to be uploaded.                              |
| `metadata` | String | Yes      | A JSON string that contains the metadata of the restoration. |

Sample Curl:

```bash
curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/projectDuplications/F8F1280022A444C5A10B3445B552E33A" \
  -H "Content-Type: application/json" \
  -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" \
  --form 'file=@"/your/path/to/package.projdup' \
  --form 'metadata="{
  \"target\": {
      \"environment\": {
        \"id\": \"https://demo.microstrategy.com/MicroStrategyLibrary\",
        \"name\": \"Target environment\"
      },
      \"project\": {
        \"name\": \"New project name\"
      }
  },
  \"settings\": {
      \"import\": {
        \"description\": \"string\",
        \"defaultLocale\": 2052,
        \"locales\": [
            1033, 2052
        ],
        \"configurationObjects\": {
            \"conflictRules\": [
            {
                \"type\": 0,
                \"rule\": 0
            }
            ],
            \"matchUsersByLogin\": true
        }
      }
  }
  }"'
```

Sample Response Code: 201 (Created)

## Project duplication settings

You can customize various aspects of the project duplication process using the settings in the
request. The following sections describe the available options.

### Export settings

The `settings.export` object controls how the source project is exported:

```json
"settings": {
    "export": {
        "projectObjectsPreference": {
            "schemaObjectsOnly": false,
            "skipEmptyProfileFolders": false
        },
        "subscriptionPreferences": {
            "includeUserSubscriptions": false,
            "includeContactSubscriptions": false
        },
        "configurationObjects": {
            "rules": [
                {
                    "type": 34,
                    "rule": 2
                },
                {
                    "type": 5,
                    "rule": 1
                }
            ],
            "objects": [
                "95A868464F2F105205B2848BBCB81C50",
                "4E70890241DBB18E6CA1D8B850952A68"
            ],
            "includeAllUserGroups": false
        }
    }
}
```

`settings.export.configurationObjects` is set for the export configuration objects (only used for cross environment project duplication).
`settings.export.configurationObjects.rules` is set for the rules to select which configuration objects to duplicate. Rules are used in combination with type, indicating which rule applies to a specific object type.

`settings.export.configurationObjects.rules.rule` There are four types of rules:

- 0 (none): Do not duplicate configuration objects of this type.

- 1 (project-related): Duplicate only the configuration objects of this type that are related to the source project.

- 2 (selected): Duplicate only the configuration objects of this type that are listed in the array `settings.export.configurationObjects.objects`.

- 3 (all): Duplicate all configuration objects of this type.

`settings.export.configurationObjects.rules.type` Currently, the object types for which rules can be applied are limited to two: 5 and 34.

- 5 represents the default, which applies to all configuration objects.

- 34 represents users.

Rules set on type 34 have a higher priority than those set on the type 5 default.

For example, if a user sets `settings.export.configurationObjects.rules.rule` to 3 (all) on `settings.export.configurationObjects.rules.type` to 34 and `settings.export.configurationObjects.rules.rule` to 1 (related) on `settings.export.configurationObjects.rules.type` to 5, the I-Server will duplicate all user objects and all other configuration objects related to the source project.

To prevent broken objects after duplication, the `settings.export.configurationObjects.rules.type` 5 (default) only supports `settings.export.configurationObjects.rules.rule` 1 (project-related) and 3 (all).

For example, if we set `settings.export.configurationObjects.rules.rule` to 0 (none) on `settings.export.configurationObjects.rules.type` to 34, and `settings.export.configurationObjects.includeAllUserGroups` to true, the I-Server will duplicate the complete user group structure but will not include any user objects.

### Import settings

The `settings.import` object controls how the project is imported to the target environment:

```json
"settings": {
    "import": {
        "description": "Development copy of production project",
        "defaultLocale": 2052,
        "locales": [1033, 2052],
        "configurationObjects": {
          "conflictRules": [
              {
                  "type": 44,
                  "rule": 2
              },
              {
                  "type": 34,
                  "rule": 6
              },
              {
                  "type": 5,
                  "rule": 1
              },
              {
                  "type": 29,
                  "rule": 2
              }
          ],
          "matchUsersByLogin": false
        }
    }
}
```

`settings.import.configurationObjects` is set for the import configuration objects (only used for cross environment project duplication).
`settings.import.configurationObjects.matchUsersByLogin` matchUsersByLogin: This field determines how to handle cases where there are two user objects with the same login but different IDs in the source MD and target MD.

If matchUsersByLogin is false: Both user objects are retained, and the login of the user object from the source MD is modified to avoid duplication.

If matchUsersByLogin is true: The ID of the user object from the source MD is changed to match the user object in the target MD. Then, further processing is performed based on the configured conflict rule.

`settings.import.configurationObjects.conflictRules` This field specifies which rule to apply when a conflict occurs during duplication for a specific type of configuration object. A conflict means there are configuration objects with the same ID and type in both the source MD (metadata) and the target MD.

`settings.import.configurationObjects.conflictRules.rule` Currently, we support three conflict rules:

- 1 (Use-existing): Ignore the object in the source MD and retain the object with the same ID in the target MD.

- 2 (Replace): Overwrite the object in the target MD with the object from the source MD.

- 6 (Merge): Applicable only to user and securityRole objects. If the merge rule is set for other types of objects, it will fall back to use-existing.

`settings.import.configurationObjects.conflictRules.type` Currently, we support all [object types](https://www2.microstrategy.com/producthelp/Current/ReferenceFiles/reference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html).

## Request fields reference

The following table describes the fields available in the project duplication request:

| Field                                                                 | Type    | Description                                                                | Required |
| --------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------- | -------- |
| `source.environment.id`                                               | String  | URL of the source environment (must be identical to target.environment.id) | Yes      |
| `source.environment.name`                                             | String  | Name of the source environment                                             | Yes      |
| `source.project.id`                                                   | String  | ID of the source project                                                   | Yes      |
| `source.project.name`                                                 | String  | Name of the source project                                                 | Yes      |
| `target.environment.id`                                               | String  | URL of the target environment (must be identical to source.environment.id) | Yes      |
| `target.environment.name`                                             | String  | Name of the target environment                                             | Yes      |
| `target.project.name`                                                 | String  | Name to assign to the duplicated project                                   | Yes      |
| `settings.import.description`                                         | String  | Description for the duplicated project                                     | No       |
| `settings.import.defaultLocale`                                       | Number  | Default locale ID for the duplicated project                               | No       |
| `settings.import.locales`                                             | Array   | List of locale IDs to include in the duplicated project                    | No       |
| `settings.import.configurationObjects`                                | Object  | Configuration objects for the duplicated project                           | No       |
| `settings.import.configurationObjects.matchUsersByLogin`              | Boolean | Whether to match users by login                                            | No       |
| `settings.import.configurationObjects.conflictRules`                  | Array   | Rules to resolve conflicts when importing configuration objects            | No       |
| `settings.import.configurationObjects.objects`                        | Array   | List of configuration objects to import                                    | No       |
| `settings.import.configurationObjects.includeAllUserGroups`           | Boolean | Whether to include all user groups                                         | No       |
| `settings.export.projectObjectsPreference.schemaObjectsOnly`          | Boolean | Whether to include only schema objects                                     | No       |
| `settings.export.projectObjectsPreference.skipEmptyProfileFolders`    | Boolean | Whether to skip empty profile folders                                      | No       |
| `settings.export.subscriptionPreferences.includeUserSubscriptions`    | Boolean | Whether to include user subscriptions                                      | No       |
| `settings.export.subscriptionPreferences.includeContactSubscriptions` | Boolean | Whether to include contact subscriptions                                   | No       |
| `settings.export.configurationObjects`                                | Object  | Configuration objects for the duplicated project                           | No       |
| `settings.export.configurationObjects.rules`                          | Array   | Rules to select which configuration objects to duplicate                   | No       |
| `settings.export.configurationObjects.objects`                        | Array   | List of configuration objects to duplicate                                 | No       |
| `settings.export.configurationObjects.includeAllUserGroups`           | Boolean | Whether to include all user groups                                         | No       |

## Response fields reference

The following table describes the fields available in the project duplication response:

| Field                | Type   | Description                                                |
| -------------------- | ------ | ---------------------------------------------------------- |
| `id`                 | String | Unique identifier for the duplication operation            |
| `source`             | Object | Information about the source project and environment       |
| `source.environment` | Object | Details about the source environment                       |
| `source.project`     | Object | Details about the source project                           |
| `source.creator`     | Object | Details about the user who created the source project      |
| `target`             | Object | Information about the target project and environment       |
| `target.environment` | Object | Details about the target environment                       |
| `target.project`     | Object | Details about the target project                           |
| `target.creator`     | Object | Details about the user who created the target project      |
| `createdDate`        | String | ISO datetime when the duplication was initiated            |
| `lastUpdatedDate`    | String | ISO datetime when the duplication was last updated         |
| `status`             | String | Current status of the duplication operation                |
| `progress`           | Number | Completion percentage of the duplication operation (0-100) |
| `message`            | String | Additional information or error message                    |
| `settings`           | Object | Configuration settings used for the duplication operation  |

## Common errors and troubleshooting

| HTTP Status | Error Code            | Description                        | Resolution                                                                      |
| ----------- | --------------------- | ---------------------------------- | ------------------------------------------------------------------------------- |
| 400         | INVALID_REQUEST       | Request body is not valid          | Check the request JSON format and required fields                               |
| 403         | FORBIDDEN             | User lacks sufficient privileges   | Ensure the user has administrator privileges on both source and target projects |
| 404         | PROJECT_NOT_FOUND     | Source project not found           | Verify the source project ID is correct                                         |
| 409         | PROJECT_NAME_EXISTS   | Target project name already exists | Choose a different name for the target project                                  |
| 500         | INTERNAL_SERVER_ERROR | Internal server error occurred     | Check server logs for details and retry the operation                           |

## Best practices

1. **Plan for downtime**: Project duplication operations can be resource-intensive. Schedule them
   during off-peak hours if possible.

1. **Use descriptive names**: Give your duplicated projects clear, descriptive names that indicate
   their purpose (e.g., "Sales_Dev", "Marketing_Test").

1. **Monitor progress**: Large projects may take considerable time to duplicate. Use the status
   field to monitor progress.

1. **Testing**: Test the duplication process with a small project before attempting to duplicate
   large, complex projects.
