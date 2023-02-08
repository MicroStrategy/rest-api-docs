---
title: Asynchronous execution of reports and cubes
description: Asynchronous instance creation prevents the client from holding a thread or HTTP request open when report, cube, and dossier execution takes longer than usual.
---

Starting in 2020 Update 2, the v2 Data APIs support asynchronous instance creation. This prevents the client from holding a thread or HTTP request open when report, cube, and dossier execution takes longer than usual.

The parameter definitions are the same as previously designed. However, a new `prefer` header parameter has been added. This functionality follows the standards set forth in [RFC 7240](https://tools.ietf.org/html/rfc7240), that requests are processed in asynchronous mode if the value of the `prefer` header parameter contains `"respond-async"`. Other features of `prefer`, such as `wait`, are not currently supported.

If `prefer:respond-async` is provided in an API request, such as `/v2/reports/{id}/instances`, the report instance is created based on input and then executed. The API call may return the results if they are available immediately or return an HTTP response of `202` (Accepted) along with a reference to the instance that can be used for polling.
