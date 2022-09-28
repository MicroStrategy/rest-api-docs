---
title: Supported constant data types for view filters
description: The supported constant data types for view filters.
---

When a constant is used in a view filter qualification, you need to explicitly specify the data type. The table below lists the constant data types that are supported for view filters.

## Supported data types for numeric values

| Type       | Support qualification Attribute | Support qualification Form | Description                                                                                                                     |
| ---------- | ------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Real       | Y                               | Y                          | [IEEE 754 32-bit single-precision floating point number](https://en.wikipedia.org/wiki/Single-precision_floating-point_format). |
| BigDecimal | Y                               | Y                          | Arbitrary-precision singed big decimal number. Range: Unlimited digits before and after decimal point                           |
| Int64      | Y                               |                            | 64-bit signed integer. Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.                                          |

## Supported data types for date and time

:::info

Date and time are written as session-locale-specific string.

:::

| Type      | Support qualification Attribute | Support qualification Form | Description                             |
| --------- | ------------------------------- | -------------------------- | --------------------------------------- |
| Date      | Y                               | Y                          | Date. Range: 1899/12/30~65535/12/31     |
| Time      |                                 | Y                          | Time of day, precision in milliseconds. |
| TimeStamp |                                 | Y                          | Date + Time (an absolute point of time) |

## Supported data types for text

| Type | Support qualification Attribute | Support qualification Form | Description |
| ---- | ------------------------------- | -------------------------- | ----------- |
| Char |                                 | Y                          | String      |
