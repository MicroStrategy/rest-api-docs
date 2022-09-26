---
title: General Guidelines for Using View Filters
description: The general guidelines for using view filters.
---

When you use a view filter to refine the data returned in a report or cube instance, please note the following:

- For each filter qualification, you specify the operands (the values to be compared) and the operator (the kind of comparison to make). The operands can be metrics, attribute forms, or constant values. The operators can be one of many [supported operators](./supported-operators.md), such as "greater than", "equal to", or "top 20%". An example of an attribute qualification might be **Category equal to Music**. An example of a metric qualification might be **Profit greater than $200,000** or **Revenue less than Profit**.

  - **Metric qualification**

    Metrics typically have numeric values, though some special metrics can be of Date type. Other data types are not supported."Real" is generally sufficient as a data type. However, if you know the metric is calculated with a special precision, such as "BigDecimal/Int64", you can specify it.

  - **Attribute form qualification**

    You can qualify on one or more attribute forms. If you want to qualify on multiple forms, use the AND operator to add another qualification on a different form. Instead of manually entering the data type for an attribute form, the recommended practice is to copy it from the JSON definition section of the report or cube results, as shown in bold in the code sample below:

    ```json
    {
      "id": "4ACD9EEE4154BB87CE3F9DA279A733FB",
      "name": "Report - Derived Metric",
      "result": {
        "definition": {
          "availableObjects": {
            "attributes": [
              {
                "name": "Year_number&date",
                "id": "573FF5AB482CA58FDFF1F95AF53690D42",
                "type": "Attribute",
                "forms": [
                  {
                    "id": "45C11FA478E745FEA08D781CEA190FE5",
                    "name": "ID",
                    "dataType": "Real"
                  }
                ]
              }
            ]
          }
        }
      }
    }
    ```

- View filters are applied on report objects, instead of on grid objects (that is, they are applied before aggregation). For example, if a report has (Year, Category, Revenue) in the report objects, but only (Year, Revenue) on the grid, a filter on Revenue is applied on the (Year, Category) level, instead of on the (Year) level. To achieve the desired result, you may want to put all report objects on the grid so the filtering level is the same as the display level.
- All Rank and Percent functions are descending. For example, Percent.Top means the largest 10%, and Rank.Equals 5 means the 5th largest.
- For the value of Percent operators, you can use either percentage ("20%") or the equivalent real number ("0.2").

- Operators, operand types, and data types are all case sensitive and should be written exactly as in the examples.
- The following are not currently supported:
  - Page by
  - Prompt
- Features that may not work well with view filters include:
  - Derived elements and other objects that cannot be qualified on in MicroStrategy Web
  - Other REST API unsupported features
- Attribute / element / form / metric IDs must be valid, which means:

  - ID is syntactically correct.
  - Attribute/element/form/metric exists in the report/cube.
  - Element/form ID matches the corresponding attribute ID.

  If the ID is invalid, you may get undesired behavior, including but not limited to:

  - An error message is returned.
  - The qualification is considered ALWAYS UNSATISFIED.
  - The qualification is IGNORED.

  For example, if the **Customer** attribute in a cube has no **LastName** form, but the view filter includes an expression such as Customer@LastName `BeginsWith` "B", no data is returned. No Customer meets this qualification because the Last Name does not exist, but you do not get an error message explaining why this happened.
