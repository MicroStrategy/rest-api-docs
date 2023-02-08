---
title: Data lineage analysis via REST APIs
description: The metadata is used in object management use cases, such as editing a metric to use a different fact object. In such a use case, the user needs to understand how an object is used and where it comes from. To do so, the user can use a data lineage or data traceability function. Here, we can use search API to perform data lineage analysis on the metadata.
---

<Available since="2021" />

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-e42edf07-9e68-4cc2-9eb9-a16ad920bb49?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

The metadata is used in object management use cases, such as editing a metric to use a different fact object. In such a use case, the user needs to understand how an object is used and where it comes from. To do so, the user can use a data lineage or data traceability function. Here, we can use search API to perform data lineage analysis on the metadata.

There are two functions that MicroStrategy data lineage supports:

- Given an object, for example a report, attribute, dossier, or database, list the direct and indirect components of that object
- Given an object, list the objects which directly and indirectly depend on that object

The workflow sample below demonstrates how to perform data lineage analysis.

:::tip

The metadata search API has one restriction that search cannot be triggered in parallel in one session. This means when the following two sets of APIs are used, the user should execute them in synchronized mode.

:::

## List components

You need to use the metadata search API to get the indirect and direct components of a specific object.

1. Create a metadata search by using `POST /api/metadataSearch/results`. This will search the metadata and store an instance of search results.

   - `X-MSTR-AuthToken`: This is required in the header.
   - `X-MSTR-ProjectID`: This is optional, but recommended to used.
   - `domain`: This is optional and the recommended value is 2 with X-MSTR-ProjectID to specify the search domains.
   - `type`: This is option, but recommended to specify the types of search result. Possible values are defined in [EnumDSSXMLObjectTypes](https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html).
   - `usedByObject`: This is required and used to specify the object id and type to search with.
   - `usedByRecursive`: This is optional and controls the Intelligence Server to find objects that use the given objects indirectly. The default value is false, and in most cases, should be false.

   Curl:

   ```bash
   curl -X POST "https://demo.microstrategy/MicroStrategyLibrary/api/metadataSearches/results?domain=2&amp;usedByObject=B7CA92F04B9FAE8D941C3E9B70CD754%3B32&amp;usedByRecursive=false" -H "accept: application/json" -H "X-MSTR-AuthToken: 14bu7siu403m9qr9987ejofill" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
   ```

   Request URL:

   ```url
   https://demo.microstrategy/MicroStrategyLibrary/api/metadataSearches/results?domain=2&usedByObject=B7CA92F04B9FAE8D941C3E9B7E0CD754%3B32&usedByRecursive=false
   ```

1. Use `GET /api/metadataSearches/results` to get the search results. Get the search results previously stored in an instance in the Intelligence Server memory and display them in a list.

### List dependents

You need to use the metadata search API to get the indirect and direct dependents of a specific object.

1. Create a metadata search by using `POST /api/metadataSearch/results`. This will search the metadata and store an instance of search results.

   - `X-MSTR-AuthToken`: This is required in the header.
   - `X-MSTR-ProjectID`: This is optional, but recommended to used.
   - `domain`: This is optional and the recommended value is 2 with X-MSTR-ProjectID to specify the search domains.
   - `type`: This is option, but recommended to specify the types of search result. Possible values are defined in [EnumDSSXMLObjectTypes](https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html).
   - `usesObject`: This is required and used to specify the object id and type to search with.
   - `usesRecursive`: This is optional and controls the Intelligence Server to find objects that use the given objects indirectly. The default value is false, and in most cases, should be false.

   Curl:

   ```bash
   curl -X POST "https://demo.microstrategy/MicroStrategyLibrary/api/metadataSearches/results?domain=2&amp;usesObject=B7CA92F04B9FAE8D941C3E9B70CD754%3B32&amp;usesRecursive=false" -H "accept: application/json" -H "X-MSTR-AuthToken: 14bu7siu403m9qr9987ejofill" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
   ```

   Request URL:

   ```url
   https://demo.microstrategy/MicroStrategyLibrary/api/metadataSearches/results?domain=2 usesObject=B7CA92F04B9FAE8D941C3E9B7E0CD754%3B32&usesRecursive=false
   ```

1. Get the search results by using `GET /api/metadataSearches/results`. Get the search results previously stored in an instance in the Intelligence Server memory and display them in a list.
