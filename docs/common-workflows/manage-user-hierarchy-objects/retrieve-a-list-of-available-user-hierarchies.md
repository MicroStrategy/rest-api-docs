---
title: Workflow sample - Retrieve a list of available user hierarchies
sidebar_label: Retrieve a list of available user hierarchies
description: This workflow sample demonstrates how to retrieve the list of available user hierarchies in one project within a changeset.
---

This workflow sample demonstrates how to retrieve the list of available user hierarchies in one project within a changeset.

You want to get all available user hierarchies in the MicroStrategy Tutorial project. The project ID is `B7CA92F04B9FAE8D941C3E9B7E0CD754`.

:::tip

An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.

:::

:::info

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets see [Changesets](/docs/common-workflows/changesets.md).

:::

1. Get the list of available user hierarchies within the changeset using [GET /api/model/hierarchies](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies/ms-getHierarchies).

   ```json
   Sample Request Header:

   "accept": "application/json"
   "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"
   "X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"
   ```

   Sample Request Body: Empty

   Sample Curl:

   ```bash
   curl -X GET "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/hierarchies" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"
   ```

   Sample Response Body: You can view the user hierarchy's definition in the body of the response. This includes the object ID, subtype, and name of each available user hierarchy in the specified project. See [User hierarchy import parameters](./user-hierarchy-import-parameters.md) for more information about the import parameters that define the user hierarchy.

   ```json
   {
     "offset": 0,
     "limit": -1,
     "total": 6,
     "hierarchies": [
       {
         "objectId": "B793B55011D3E4E51000E887EC6DE8A4",
         "subType": "dimension_user",
         "name": "Geography"
       },
       {
         "objectId": "B793B55611D3E4E51000E887EC6DE8A4",
         "subType": "dimension_user",
         "name": "Customers"
       },
       {
         "objectId": "B793B55C11D3E4E51000E887EC6DE8A4",
         "subType": "dimension_user",
         "name": "Time"
       },
       {
         "objectId": "B793B56811D3E4E51000E887EC6DE8A4",
         "subType": "dimension_user",
         "name": "Products"
       },
       {
         "objectId": "AF76BA4D11D424EEC000D8906B98494F",
         "subType": "dimension_user_hierarchy",
         "name": "Product Hierarchy"
       },
       {
         "objectId": "13053CBE402A948E22DD9CB05648FBC8",
         "subType": "dimension_user_hierarchy",
         "name": "User-Defined Time Hierarchy"
       }
     ]
   }
   ```

   Response Code: 200 (Upon success, the API returns a list of user hierarchies with specific field information.)
