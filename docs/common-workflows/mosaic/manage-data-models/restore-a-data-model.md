---
title: Restore a data model
description: This workflow demonstrates how to restore a data model from a YAML file using REST API.
---

<Available since="Strategy ONE (April 2026)" />

This workflow sample demonstrates how to restore a data model from a previously exported YAML file using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

To save the restored model to metadata, commit the changeset after the restore call succeeds.

:::

You can restore a Mosaic data model from an exported YAML file. The restore call updates the existing model definition in the current changeset.

**Important:** Creating new models or directly editing objects from a YAML file is not supported. The YAML file can only restore an existing model.

**File size limit:** The default maximum YAML file size is 10 MB. To upload a larger file, increase `modelservice.yaml.max-size-mb` in `modelservice.conf` and restart the Modeling Service.

Endpoint: [POST /api/model/dataModels/\{dataModelId}/restore](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/restoreDataModel)

Sample Request

- Request Headers

```http
'Content-Type: multipart/form-data'
'Accept: application/json'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Request Body

```text
Form field: dataModelFile (binary)
```

- Curl

```bash
curl -L -X POST 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/restore' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B' \
-H 'X-MSTR-AuthToken: 4u8sbmsmegdpr246a1iqr3jahq' \
-F 'dataModelFile=@"/path/to/exported-data-model.yaml"'
```

Sample Response

- Response Body: Empty

- Response Code: 204 (Success: No Content)
