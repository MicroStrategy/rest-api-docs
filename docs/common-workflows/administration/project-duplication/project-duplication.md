---
sidebar_label: Project Duplication
title: Project Duplication
description: The REST API provides endpoints to duplicate projects within same environment, enabling
  administrators to create copies of projects with customizable settings.
---

Project duplication enables administrators to duplicate projects within the same environment for the same MD type (PostgreSQL to PostgreSQL) directly using REST APIs, replacing the need for legacy tools like Object Manager, Developer.

## APIs

- [POST /api/projectDuplications](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Project%20Duplication/createProjectDuplication)
- [GET /api/projectDuplications/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Project%20Duplication/getProjectDuplication)
- [GET /api/projectDuplications](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Project%20Duplication/getProjectDuplications)
- [PUT /api/projectDuplications/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Project%20Duplication/updateProjectDuplication)

## Privileges and authorization

You need the following privileges to use the project duplication functionality:

- [DssXmlPrivilegesDuplicateProject](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesDuplicateProject) and [DssXmlPrivilegesBypassAccessChecks](https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesBypassAccessChecks) privilege on the duplicated project

To execute the API, you must get the authorization token by executing the `POST /api/auth/login`
request, and get a token as `X-MSTR-AuthToken` in the response header. Keep the token value. It is
required to execute the REST API. See [Authentication](/docs/getting-started/authentication.md) for
more information.

## General workflow

The general workflow for using the project duplication APIs involves:

1. [Initiate project duplication](#initiate-project-duplication)
1. [Check duplication status](#check-duplication-status)
1. [List all project duplications](#list-all-project-duplications)
1. [Cancel project duplication](#cancel-project-duplication)

### Initiate project duplication

Use `POST /api/projectDuplications` to start a project duplication operation. This initiates an
asynchronous process that creates a duplicate of the source project with the settings you specify.

#### Step 1: Create the duplication request

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

:::important The `source.environment.id` must be equal to `target.environment.id` as project duplication only works within the same environment.
:::

```json
{
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
      "locales": [1033, 2052]
    }
  }
}
```

Sample Curl:

```bash
curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/projectDuplications" \
  -H "Content-Type: application/json" \
  -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" \
  -H "Prefer: respond-async" \
  -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \
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
            "locales": [1033, 2052]
      }
    }
}'
```

Sample Response Code: 202 (Accepted)

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
  "status": "EXPORTING",
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
      }
    },
    "import": {
      "description": "this is a test description",
      "defaultLocale": 2052,
      "locales": [1033, 2052]
    }
  }
}
```

:::note The duplication process is executed asynchronously. The response includes a unique `id` that you can use to check the status of the operation using the `GET /api/projectDuplications/{id}` endpoint.
:::

### Check duplication status

Use `GET /api/projectDuplications/{id}` to check the status of a specific project duplication
operation. Since duplication is an asynchronous process, you should poll this endpoint to monitor
the progress.

#### Step 2: Monitor the duplication progress

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
  "status": "COMPLETED",
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
      }
    },
    "import": {
      "description": "this is a test description",
      "defaultLocale": 2052,
      "locales": [1033, 2052]
    }
  }
}
```

Sample Response Code: 200 (OK)

:::info Duplication Status Values

- `EXPORTING`: The duplication is currently in export progress
- `EXPORTED`: The duplication has been successfully exported
- `EXPORT_FAILED`: The duplication has failed (check the `message` field for details)
- `IMPORTING`: The duplication is currently in import progress
- `IMPORT_FAILED`: The duplication has failed (check the `message` field for details)
- `COMPLETED`: The duplication has been successfully completed
- `CANCELLED`: The duplication was cancelled by a user

You should poll the status endpoint at reasonable intervals (e.g., every 10-30 seconds) until the
status changes to `COMPLETED`, `IMPORT_FAILED`, `EXPORT_FAILED`, or `CANCELLED`.
:::

### List all project duplications

Use `GET /api/projectDuplications` to retrieve a list of all project duplication operations. This is
useful for monitoring and managing multiple duplication tasks.

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
      "status": "COMPLETED",
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
          }
        },
        "import": {
          "description": "this is a test description",
          "defaultLocale": 2052,
          "locales": [1033, 2052]
        }
      }
    }
  ]
}
```

Sample Response Code: 200 (OK)

:::tip You can use this endpoint to check all your past and current duplication operations. It provides a comprehensive view of all duplication tasks and their statuses.
:::

### Cancel project duplication

Use `PUT /api/projectDuplications/{id}` to cancel an ongoing project duplication operation. This is
useful if you made a mistake or need to stop a long-running duplication task.

#### Step 3: Cancel a duplication (if needed)

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

- You can only cancel duplications that are in `EXPORTING`, `EXPORTED`, or `IMPORTING` status
- Attempting to cancel a duplication that has already completed (`COMPLETED`), failed
  (`EXPORT_FAILED`, `IMPORT_FAILED`), or been cancelled (`CANCELLED`) will result in an error
- Once cancelled, a duplication cannot be resumed and must be initiated again if needed
  :::

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
        }
    }
}
```

### Import settings

The `settings.import` object controls how the project is imported to the target environment:

```json
"settings": {
    "import": {
        "description": "Development copy of production project",
        "defaultLocale": 2052,
        "locales": [1033, 2052]
    }
}
```

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
| `settings.export.projectObjectsPreference.schemaObjectsOnly`          | Boolean | Whether to include only schema objects                                     | No       |
| `settings.export.projectObjectsPreference.skipEmptyProfileFolders`    | Boolean | Whether to skip empty profile folders                                      | No       |
| `settings.export.subscriptionPreferences.includeUserSubscriptions`    | Boolean | Whether to include user subscriptions                                      | No       |
| `settings.export.subscriptionPreferences.includeContactSubscriptions` | Boolean | Whether to include contact subscriptions                                   | No       |

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

| HTTP Status | Error Code             | Description                                     | Resolution                                                                      |
| ----------- | ---------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------- |
| 400         | DIFFERENT_ENVIRONMENTS | Source and target environments are not the same | Ensure source.environment.id and target.environment.id are identical            |
| 400         | INVALID_REQUEST        | Request body is not valid                       | Check the request JSON format and required fields                               |
| 403         | FORBIDDEN              | User lacks sufficient privileges                | Ensure the user has administrator privileges on both source and target projects |
| 404         | PROJECT_NOT_FOUND      | Source project not found                        | Verify the source project ID is correct                                         |
| 409         | PROJECT_NAME_EXISTS    | Target project name already exists              | Choose a different name for the target project                                  |
| 500         | INTERNAL_SERVER_ERROR  | Internal server error occurred                  | Check server logs for details and retry the operation                           |

## Best practices

1. **Plan for downtime**: Project duplication operations can be resource-intensive. Schedule them
   during off-peak hours if possible.

1. **Use descriptive names**: Give your duplicated projects clear, descriptive names that indicate
   their purpose (e.g., "Sales_Dev", "Marketing_Test").

1. **Monitor progress**: Large projects may take considerable time to duplicate. Use the status
   field to monitor progress.

1. **Testing**: Test the duplication process with a small project before attempting to duplicate
   large, complex projects.
