---
title: MicroStrategy REST API Explorer
description: Instructions for using MicroStrategy REST API Explorer, our official REST API documentation.
---

## Overview

[MicroStrategy API Explorer](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs) serves as the REST API reference guide, providing a comprehensive list of the available MicroStrategy REST APIs grouped into REST API families. Common MicroStrategy platform capabilities are exposed in a RESTful web service.

It is hosted on [demo.microstrategy.com](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs). You can also use the API Explorer shipped in your MicroStrategyLibrary server. Once the MicroStrategyLibrary server is started, you access the MicroStrategy REST API Explorer at `{YOUR_LIBRARY_SERVER_URL}/api-docs/`, e.g., `https://env-263053.customer.cloud.microstrategy.com/MicroStrategyLibrary/api-docs`.

When you access the server, you are able to see the available APIs. You can drill down into these to see HTTP headers and input and output information for each request, and enter values to try out the APIs.

![SwaggerUI REST API Explorer](../images/swaggerUI_REST_API_Explorer.png)

## Commonly asked questions

### How to use SAML or OIDC authentication in API Explorer?

To use SAML or OIDC authentication in API Explorer, you can open another browser window to finish authentication, then come back to API Explorer. Open a page that requires authentication in another browser window, such as `{YOUR_LIBRARY_SERVER_URL}/app/`. After you are authenticated, open API Explorer page and use `/api/auth/token` call to get the auth token. You don't need to provide iSession value, because the browser will handle it automatically. After you have the auth token, you can use the auth token in other API calls.
