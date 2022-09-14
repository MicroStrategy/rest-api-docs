---
title: Filter Report and Cube Instances Using requestedObjects
description: How to filter report and cube instances using requestedObjects.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2650c93b-4797-4fa7-86cc-f38d0c43971e?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

When you create a MicroStrategy report or cube instance using the following REST API endpoints, you can use a parameter called `requestedObjects` in the body parameter of the request to specify the data that should be returned:

- `POST /api/cubes/{cubeId}/instances`
- `POST /api/reports/{reportId}/instances`

In the `requestedObjects` parameter, you specify the name and ID of each attribute and metric to include in the report or cube instance. If you use both a viewFilter and a `requestedObjects` parameter in the request, the view filter will be applied first. The `requestedObjects` definition will then be applied to the filtered results (a subset of the cube data), rather than to the cube data itself.

The following topics are designed to help you understand and use `requestedObjects`.

- [General guidelines](./general-guidelines.md)
- [Code sample](./code-sample.md)
