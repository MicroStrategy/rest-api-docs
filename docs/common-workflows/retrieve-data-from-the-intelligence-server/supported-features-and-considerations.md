---
title: Supported features and considerations
description: The JSON Data API supports the following features - Reports and published cubes as data sources, Attributes on rows and Metrics on columns.
---

The JSON Data API supports the following features:

- Reports and published cubes as data sources
- Attributes on rows
- Metrics on columns

## Considerations

If you request that all report data be returned (that is, you set `limit` to `"\-1"` in the request), you need to compare the values for `current` and `total` in the results. If the value of current is less than the value of `total`, you need to send a subsequent request with the value of `offset` equal to the value of `current` to get the next set of data.

## Non-supported features

The JSON Data API does not currently support:

- Incremental refresh reports
- Reports with the following definitions: dimensions, subtotals, prompts, consolidations, custom groups, compound attributes, and hierarchies
- Reports that include a running sum metric and a break-by unit and at least one break-by unit that is not in the view template
- Page by information in the JSON output
- Direct Data Access cubes as data sources
