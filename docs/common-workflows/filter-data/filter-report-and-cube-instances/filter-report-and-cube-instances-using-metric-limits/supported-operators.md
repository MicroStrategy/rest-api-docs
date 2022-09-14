---
title: Supported Operators for Metric Limits
description: The supported operators for metric limits.
---

The table below lists the operators/functions that can be used to define metric limits when you are creating reports and cube instances with REST APIs (sometimes referred to as JSON Data API).

| MicroStrategy Web Functions | REST API Operators | Function | Operands Count |
| --------------------------- | ------------------ | -------- | -------------- |
| Equals                      | Equals             | =        | 2              |
| Does not equal              | NotEqual           | !=       | 2              |
| Greater than                | Greater            | >        | 2              |
| Less than                   | Less               | <        | 2              |
| Greater than or equal to    | GreaterEqual       | >=       | 2              |
| Less than or equal to       | LessEqual          | <=       | 2              |
| Between                     | Between            |          | 3              |
| Not between                 | NotBetween         |          | 3              |
| Is null                     | IsNull             | null     | 1              |
| Is not null                 | IsNotNull          | notnull  | 1              |
| Highest                     | Rant.Top           |          | 2              |
| Lowest                      | Rank.Bottom        |          | 2              |
| Highest (%)                 | Percent.Top        |          | 2              |
| Lowest (%)                  | Percent.Bottom     |          | 2              |
