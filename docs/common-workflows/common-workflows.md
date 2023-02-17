---
title: Common workflows
description: The first step in a typical MicroStrategy REST API workflow is authenticating the user and creating a session on the Intelligence Server. When authentication is successful, an authorization token and a session cookie are returned in the response header. The authorization token and the cookie must be provided in every subsequent request. If a browser is handling requests, it will also handle the cookies. However, if you are using your own client, you need to maintain the cookie and include it in further requests, together with the authorization token.
---

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/collection/16131298-9ba9a108-18ee-438e-8f4f-df058f265f1b?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

The first step in a typical MicroStrategy REST API workflow is authenticating the user and creating a session on the Intelligence Server. When authentication is successful, an authorization token and a session cookie are returned in the response header. The authorization token and the cookie must be provided in every subsequent request. If a browser is handling requests, it will also handle the cookies. However, if you are using your own client, you need to maintain the cookie and include it in further requests, together with the authorization token.

REST API request sequences with descriptions and code samples have been provided for the following common MicroStrategy REST API workflows.

Our workflows are arranged in 3 sections:

- [Analytics](analytics/analytics.md) - used for handling data and objects such as reports, datasets, documents, dossiers, and projects.
- [Modeling](modeling/modeling.md) - used for handling schema and application objects.
- [Administration](administration/administration.md) - used for handling administration related workflows.
