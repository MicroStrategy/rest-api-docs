---
title: Supported operators for view filters
description: The supported operators for view filters.
---

The table below lists the operators/functions that can be used to define view filters when you are creating reports and cube instances with REST APIs (sometimes referred to as JSON Data API).

[Code samples](code-sample.md) are provided to illustrate how to use some of these operators. For operators without code samples, you can use the samples that are provided as a model for how to write your own code.

## Attributes

The following are the supported operators for attributes.

|                            | Operator      | Function Alias | Description              |
| -------------------------- | ------------- | -------------- | ------------------------ |
| Attribute element          | In            |                | In list                  |
|                            | NotIn         |                | Not in list              |
| Attribute form [ID / DESC] | Equals        | =              | Exactly                  |
|                            | NotEqual      | !=             | Different from           |
|                            | Greater       | >              | Greater than             |
|                            | Less          | \<             | Less than                |
|                            | GreaterEqual  | >=             | Greater than or equal to |
|                            | LessEqual     | \<=            | Less than or equal to    |
|                            | Between       |                | Between                  |
|                            | NotBetween    |                | Not between              |
|                            | IsNull        | null           | Is null                  |
|                            | IsNotNull     | notnull        | Is not null              |
| Attribute form [DESC]      | Like          |                |                          |
|                            | NotLike       |                |                          |
|                            | Contains      |                |                          |
|                            | NotContains   |                |                          |
|                            | BeginsWith    |                |                          |
|                            | NotBeginsWith |                |                          |
|                            | EndsWith      |                |                          |
|                            | NotEndsWith   |                |                          |

## Metrics

The following are the supported operators for metrics.

|                                | Operator              | Function Alias |
| ------------------------------ | --------------------- | -------------- |
| Basic function                 | Equals                | =              |
|                                | NotEqual              | !=             |
|                                | Greater               | >              |
|                                | Less                  | \<             |
|                                | GreaterEqual          | >=             |
|                                | LessEqual             | \<=            |
|                                | Between               |                |
|                                | NotBetween            |                |
|                                | IsNull                | null           |
|                                | IsNotNull             | notnull        |
| **Rank** [descending order]    | Rank.Equals           |                |
|                                | Rank.DifferentFrom    |                |
|                                | Rank.Between          |                |
|                                | Rank.NotBetween       |                |
|                                | Rank.Top              |                |
|                                | Rank.Bottom           |                |
|                                | Rank.ExcludeTop       |                |
|                                | Rank.ExcludeBottom    |                |
| **Percent** [descending order] | Percent.Equals        |                |
|                                | Percent.DifferentFrom |                |
|                                | Percent.Between       |                |
|                                | Percent.NotBetween    |                |
|                                | Percent.Top           |                |
|                                | Percent.Bottom        |                |
|                                | Percent.ExcludeTop    |                |
|                                | Percent.ExcludeBottom |                |
