---
title: Retrieve filters applied to dashboard chapters
description: You can use the following REST API to get information about the filter applied in each chapter in a specific dashboard, including the key and name of the filter, a text summary of the filter expression, and information for the filter source.
---

You can use the following REST API to get information about the filter applied in each chapter in a specific dashboard, including the key and name of the filter, a text summary of the filter expression, and information for the filter source.

- `GET /api/dossiers/{dossierId}/definition`

The filter information is included in the dashboard hierarchy information that is returned by this endpoint.

![dossierDefinitionWithFilter](../../../images/dossierDefinitionWithFilter.png)
