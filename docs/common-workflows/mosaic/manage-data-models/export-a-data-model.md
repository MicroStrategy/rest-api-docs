---
title: Export a data model
description: This workflow demonstrates how to export a data model to a YAML file using REST API.
---

<Available since="Strategy ONE (April 2026)" />

This workflow sample demonstrates how to export a data model to a YAML file using the REST API.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Get the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md).

:::

You can export a data model to a YAML file for version control and backup purposes. The exported output includes the full model definition and a fingerprint (checksum) that you can use to verify integrity and detect changes.

Endpoint: [POST /api/model/dataModels/\{dataModelId}/export](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Data%20Model/exportDataModel)

Sample Request Without Changeset

- Request Headers

```http
'Accept: application/yaml'
'X-MSTR-AuthToken: 7h79kekgo882nfivb9s4qspdvf'
'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

- Curl

```bash
curl -L -X POST 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/export' \
-H 'Accept: application/yaml' \
-H 'X-MSTR-AuthToken: 7h79kekgo882nfivb9s4qspdvf' \
-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
```

Sample Request With Changeset

- Request Headers

```http
'Accept: application/yaml'
'X-MSTR-AuthToken: pgho7427r1e6p0tem7e677jivk'
'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B'
```

- Curl

```bash
curl -L -X POST 'http://demo.microstrategy.com/MicroStrategyLibrary/api/model/dataModels/3A82F20B2CC849B0970B289C86D8C83C/export' \
-H 'Accept: application/yaml' \
-H 'X-MSTR-MS-Changeset: 768A0AA9E94547218BA930DD4245186B' \
-H 'X-MSTR-AuthToken: 4u8sbmsmegdpr246a1iqr3jahq'
```

Sample Response

- Response Body:

```yaml
---
version: "1.0"
metadataLocale: "en-US"
dateNumberLocale: "en-US"
model:
  - information:
      primaryLocale: "en-US"
      objectId: "DBA262A6244347409B8A99FD76147008"
      subType: "report_emma_cube"
      name: "Year Duration Model"
      description: "Year Duration Analysis"
    acl:
      "0AB3BC27425A061AEFCEEF9868D5E69A":
        granted: 0
        denied: 255
        inheritable: false
      "294DEDC011D2F1D56000D98E67019608":
        granted: 5
        denied: 0
        inheritable: false
      "54F3D26011D2896560009A8E67019608":
        granted: 255
        denied: 0
        inheritable: false
      B132F2DE154C98C8CE48F6B8202ED712:
        granted: 255
        denied: 0
        inheritable: false
      C1E1419F11D603A2100086B3A5E8F8A4:
        granted: 255
        denied: 0
        inheritable: false
      C82C6B1011D2894CC0009D9F29718E4F:
        granted: 223
        denied: 0
        inheritable: false
      D5ABCBF54937420EC3377FA23857A4DC:
        granted: 223
        denied: 0
        inheritable: false
      E03E047047FCB31F305280A55012FC4A:
        granted: 223
        denied: 0
        inheritable: false
    translations:
      name:
        targetName: "Object Name"
        translationValues:
          1033:
            translation: "Year Duration Model"
      description:
        targetName: "Object Description"
        translationValues:
          1033:
            translation: "Year Duration Analysis"
    dataServeMode: "in_memory"
    enableWrangleRecommendations: true
    enableAutoHierarchyRelationships: true
    sampling:
      type: "first"
      rowCount: 1000
    partition:
      mode: "automatic"
      number: 4
    autoJoin: true
    tables:
      - information:
          primaryLocale: "en-US"
          objectId: "415CCF2002714E79815676863C433EF6"
          subType: "logical_table"
          name: "lu_year"
        acl:
          "294DEDC011D2F1D56000D98E67019608":
            granted: 255
            denied: 0
            inheritable: false
          B132F2DE154C98C8CE48F6B8202ED712:
            granted: 255
            denied: 0
            inheritable: false
          C82C6B1011D2894CC0009D9F29718E4F:
            granted: 255
            denied: 0
            inheritable: false
        translations:
          name:
            targetName: "Object Name"
            translationValues:
              1033:
                translation: "lu_year"
        physicalTable:
          information:
            primaryLocale: "en-US"
            objectId: "C4F126D7DAD247AE92E9AB7D4620D185"
            subType: "physical_table"
            name: "New DB Table"
          columns:
            - information:
                primaryLocale: "en-US"
                objectId: "2B0B615A5A4D471783075324FE0CD3CC"
                subType: "column"
                name: "year_id"
              dataType:
                type: "integer"
                precision: 2
                scale: 0
              columnName: "year_id"
            - information:
                primaryLocale: "en-US"
                objectId: "C4F0F1F239F9438B8ACD9472B1B1A9BA"
                subType: "column"
                name: "year_date"
              dataType:
                type: "time_stamp"
                precision: 26
                scale: 6
              columnName: "year_date"
            - information:
                primaryLocale: "en-US"
                objectId: "54C57F7BA76E456B93DBD39B59A44BFC"
                subType: "column"
                name: "year_duration"
              dataType:
                type: "integer"
                precision: 2
                scale: 0
              columnName: "year_duration"
            - information:
                primaryLocale: "en-US"
                objectId: "C0658515E120477EB3612A286B4BB84B"
                subType: "column"
                name: "prev_year_id"
              dataType:
                type: "integer"
                precision: 2
                scale: 0
              columnName: "prev_year_id"
          type: "pipeline"
          pipeline:
            id: "05050C4D1026488FB13C5932B0537338"
            rootTable:
              id: "38239940EF954DD596334A8445DDF12C"
              type: "root"
              children:
                - id: "5860924116EA4826AA78991AA4FA329A"
                  name: "lu_year"
                  type: "source"
                  columns:
                    - id: "4E197E08FC3B4C85AF358B95961DDA29"
                      name: "year_id"
                      dataType:
                        type: "integer"
                        precision: 2
                        scale: 0
                      sourceDataType:
                        type: "integer"
                        precision: 2
                        scale: 0
                      sparkDataType:
                        type: "integer"
                    - id: "08F5B4F08D6644A99CB64404C49BC70F"
                      name: "year_date"
                      dataType:
                        type: "time_stamp"
                        precision: 26
                        scale: 6
                      sourceDataType:
                        type: "time_stamp"
                        precision: 26
                        scale: 6
                      sparkDataType:
                        type: "timestamp"
                    - id: "802E008EB58C46A38CC642D2D5D9259B"
                      name: "year_duration"
                      dataType:
                        type: "integer"
                        precision: 2
                        scale: 0
                      sourceDataType:
                        type: "integer"
                        precision: 2
                        scale: 0
                      sparkDataType:
                        type: "integer"
                    - id: "9D80606D69754256B12641A31FB871FA"
                      name: "prev_year_id"
                      dataType:
                        type: "integer"
                        precision: 2
                        scale: 0
                      sourceDataType:
                        type: "integer"
                        precision: 2
                        scale: 0
                      sparkDataType:
                        type: "integer"
                  importSource:
                    type: "single_table"
                    dataSourceId: "E93B0C144F9EAF781E3993B5C439220D"
                    namespace: "public"
                    tableName: "lu_year"
                    sql: ""
        attributes:
          - information:
              objectId: "308917F05C3042139A96C59E707D1F4B"
              subType: "attribute"
              name: "Previous Year"
          - information:
              objectId: "E26012F6112640D39457D6AAFA31585F"
              subType: "attribute"
              name: "Year (2)"
        factMetrics:
          - information:
              objectId: "CA254BD66CC648D2BD217F1D59668D5C"
              subType: "fact_metric"
              name: "Year Duration"
        refreshPolicy: "replace"
    attributes:
      - information:
          primaryLocale: "en-US"
          objectId: "E26012F6112640D39457D6AAFA31585F"
          subType: "attribute"
          name: "Year (2)"
          description: "Unique year identifier"
        forms:
          - id: "45C11FA478E745FEA08D781CEA190FE5"
            name: "Year ID"
            description: "Unique year identifier"
            category: "ID"
            type: "system"
            displayFormat: "number"
            dataType:
              type: "integer"
              precision: 2
              scale: 0
            expressions:
              - expression:
                  text: "year_id"
                tables:
                  - objectId: "415CCF2002714E79815676863C433EF6"
                    subType: "logical_table"
                    name: "lu_year"
            alias: "year_id"
            lookupTable:
              objectId: "415CCF2002714E79815676863C433EF6"
              subType: "logical_table"
              name: "lu_year"
            semanticRole: "year"
          - id: "D89628C490B74A75ADCE04A5D6E6FF21"
            name: "Year Date"
            description: "Start date of the year"
            category: "Year None (17)"
            type: "custom"
            displayFormat: "date_time"
            dataType:
              type: "time_stamp"
              precision: 26
              scale: 6
            expressions:
              - expression:
                  text: "year_date"
                tables:
                  - objectId: "415CCF2002714E79815676863C433EF6"
                    subType: "logical_table"
                    name: "lu_year"
            alias: "year_date"
            lookupTable:
              objectId: "415CCF2002714E79815676863C433EF6"
              subType: "logical_table"
              name: "lu_year"
            semanticRole: "datetime"
        attributeLookupTable:
          objectId: "415CCF2002714E79815676863C433EF6"
          subType: "logical_table"
          name: "lu_year"
        keyForm:
          id: "45C11FA478E745FEA08D781CEA190FE5"
          name: "Year ID"
        displays:
          reportDisplays:
            - id: "D89628C490B74A75ADCE04A5D6E6FF21"
              name: "Year Date"
          browseDisplays:
            - id: "D89628C490B74A75ADCE04A5D6E6FF21"
              name: "Year Date"
        sorts: {}
        nonAggregatable: false
        acl:
          "294DEDC011D2F1D56000D98E67019608":
            granted: 255
            denied: 0
            inheritable: false
          B132F2DE154C98C8CE48F6B8202ED712:
            granted: 255
            denied: 0
            inheritable: false
          C82C6B1011D2894CC0009D9F29718E4F:
            granted: 255
            denied: 0
            inheritable: false
        translations:
          name:
            targetName: "Object Name"
            translationValues:
              1033:
                translation: "Year (2)"
          description:
            targetName: "Object Description"
            translationValues:
              1033:
                translation: "Unique year identifier"
          forms:
            "45C11FA478E745FEA08D781CEA190FE5":
              name:
                targetName: "Attribute Form Name"
                translationValues:
                  1033:
                    translation: "Year ID"
              description:
                targetName: "Attribute Form Description"
                translationValues:
                  1033:
                    translation: "Unique year identifier"
            D89628C490B74A75ADCE04A5D6E6FF21:
              name:
                targetName: "Attribute Form Name"
                translationValues:
                  1033:
                    translation: "Year Date"
              description:
                targetName: "Attribute Form Description"
                translationValues:
                  1033:
                    translation: "Start date of the year"
        autoDetectLookupTable: true
      - information:
          primaryLocale: "en-US"
          objectId: "308917F05C3042139A96C59E707D1F4B"
          subType: "attribute"
          name: "Previous Year"
          description: "Identifier of the previous year"
        forms:
          - id: "45C11FA478E745FEA08D781CEA190FE5"
            name: "Previous Year ID"
            description: "Identifier of the previous year"
            category: "ID"
            type: "system"
            displayFormat: "number"
            dataType:
              type: "integer"
              precision: 2
              scale: 0
            expressions:
              - expression:
                  text: "prev_year_id"
                tables:
                  - objectId: "415CCF2002714E79815676863C433EF6"
                    subType: "logical_table"
                    name: "lu_year"
            alias: "prev_year_id"
            lookupTable:
              objectId: "415CCF2002714E79815676863C433EF6"
              subType: "logical_table"
              name: "lu_year"
            semanticRole: "year"
        attributeLookupTable:
          objectId: "415CCF2002714E79815676863C433EF6"
          subType: "logical_table"
          name: "lu_year"
        keyForm:
          id: "45C11FA478E745FEA08D781CEA190FE5"
          name: "Previous Year ID"
        displays:
          reportDisplays:
            - id: "45C11FA478E745FEA08D781CEA190FE5"
              name: "Previous Year ID"
          browseDisplays:
            - id: "45C11FA478E745FEA08D781CEA190FE5"
              name: "Previous Year ID"
        sorts: {}
        nonAggregatable: false
        acl:
          "294DEDC011D2F1D56000D98E67019608":
            granted: 255
            denied: 0
            inheritable: false
          B132F2DE154C98C8CE48F6B8202ED712:
            granted: 255
            denied: 0
            inheritable: false
          C82C6B1011D2894CC0009D9F29718E4F:
            granted: 255
            denied: 0
            inheritable: false
        translations:
          name:
            targetName: "Object Name"
            translationValues:
              1033:
                translation: "Previous Year"
          description:
            targetName: "Object Description"
            translationValues:
              1033:
                translation: "Identifier of the previous year"
          forms:
            "45C11FA478E745FEA08D781CEA190FE5":
              name:
                targetName: "Attribute Form Name"
                translationValues:
                  1033:
                    translation: "Previous Year ID"
              description:
                targetName: "Attribute Form Description"
                translationValues:
                  1033:
                    translation: "Identifier of the previous year"
        autoDetectLookupTable: true
    factMetrics:
      - information:
          primaryLocale: "en-US"
          objectId: "CA254BD66CC648D2BD217F1D59668D5C"
          subType: "fact_metric"
          name: "Year Duration"
          description: "Number of days in the year"
        acl:
          "294DEDC011D2F1D56000D98E67019608":
            granted: 255
            denied: 0
            inheritable: false
          B132F2DE154C98C8CE48F6B8202ED712:
            granted: 255
            denied: 0
            inheritable: false
          C82C6B1011D2894CC0009D9F29718E4F:
            granted: 255
            denied: 0
            inheritable: false
        translations:
          name:
            targetName: "Object Name"
            translationValues:
              1033:
                translation: "Year Duration"
          description:
            targetName: "Object Description"
            translationValues:
              1033:
                translation: "Number of days in the year"
        fact:
          dataType:
            type: "integer"
            precision: 2
            scale: 0
          expressions:
            - expression:
                text: "year_duration"
              tables:
                - objectId: "415CCF2002714E79815676863C433EF6"
                  subType: "logical_table"
                  name: "lu_year"
        function: "sum"
        functionProperties:
          - name: "UseLookupForAttributes"
            value:
              type: "boolean"
              value: "false"
        dimty:
          dimtyUnits:
            - dimtyUnitType: "report_base_level"
              aggregation: "normal"
              filtering: "apply"
              groupBy: true
          excludeAttribute: false
          allowAddingUnit: true
        format:
          header: []
          values:
            - type: "number_category"
              value: "0"
            - type: "number_decimal_places"
              value: "0"
            - type: "number_currency_position"
              value: "0"
            - type: "number_negative_numbers"
              value: "1"
            - type: "number_currency_symbol"
              value: ""
            - type: "number_format"
              value: "#,##0"
            - type: "number_thousand_separator"
              value: "true"
        semanticRole: "fixed"
    metrics:
      - information:
          primaryLocale: "en-US"
          objectId: "E4508E90D54A4DBD8FB5AC788F6E78AD"
          subType: "metric"
          name: "New Metric"
        acl:
          "294DEDC011D2F1D56000D98E67019608":
            granted: 255
            denied: 0
            inheritable: false
          B132F2DE154C98C8CE48F6B8202ED712:
            granted: 255
            denied: 0
            inheritable: false
          C82C6B1011D2894CC0009D9F29718E4F:
            granted: 255
            denied: 0
            inheritable: false
        translations:
          name:
            targetName: "Object Name"
            translationValues:
              1033:
                translation: "New Metric"
        expression:
          text: "Sum<UseLookupForAttributes=False>([Year Duration]){~+}"
        formulaJoinType: "default"
        smartTotal: "decomposable_false"
        dataType:
          type: "reserved"
          precision: 0
          scale: 0
        format:
          header: []
          values: []
        pushDownBehavior: "default"
    hierarchy:
      relationships:
        - parent:
            objectId: "308917F05C3042139A96C59E707D1F4B"
            subType: "attribute"
            name: "Previous Year"
          child:
            objectId: "E26012F6112640D39457D6AAFA31585F"
            subType: "attribute"
            name: "Year (2)"
          relationshipTable:
            objectId: "415CCF2002714E79815676863C433EF6"
            subType: "logical_table"
            name: "lu_year"
          relationshipType: "one_to_many"
      isolatedAttributes: []
    securityFilters:
      - information:
          primaryLocale: "en-US"
          objectId: "3DA15BAACD714F5F893FD6A0277D1FF5"
          subType: "md_security_filter"
          name: "New Security Filter"
        acl:
          "294DEDC011D2F1D56000D98E67019608":
            granted: 255
            denied: 0
            inheritable: false
          B132F2DE154C98C8CE48F6B8202ED712:
            granted: 255
            denied: 0
            inheritable: false
          C82C6B1011D2894CC0009D9F29718E4F:
            granted: 255
            denied: 0
            inheritable: false
        translations:
          name:
            targetName: "Object Name"
            translationValues:
              1033:
                translation: "New Security Filter"
        qualification:
          tree:
            type: "predicate_form_qualification"
            predicateTree:
              function: "equals"
              parameters:
                - parameterType: "constant"
                  constant:
                    type: "int32"
                    value: "1"
              attribute:
                objectId: "308917F05C3042139A96C59E707D1F4B"
                subType: "attribute"
                name: "Previous Year"
              form:
                objectId: "45C11FA478E745FEA08D781CEA190FE5"
                subType: "attribute_form_system"
                name: "Previous Year ID"
              dataLocale: "en-US"
        users:
          - id: "E96A7BBD11D4BBCE10004694316DE8A4"
            name: "Allister Lewandowski"
            subType: "user"
            userName: "alewandowski"
    folders:
      - subType: "folder"
        name: "New Folder"
        primaryLocale: "en-US"
        translations:
          name:
            targetName: "Object Name"
            translationValues:
              1033:
                translation: "New Folder"
        acl:
          "294DEDC011D2F1D56000D98E67019608":
            granted: 255
            denied: 0
            inheritable: false
          B132F2DE154C98C8CE48F6B8202ED712:
            granted: 255
            denied: 0
            inheritable: false
          C82C6B1011D2894CC0009D9F29718E4F:
            granted: 255
            denied: 0
            inheritable: false
        contents:
          - objectId: "308917F05C3042139A96C59E707D1F4B"
            subType: "attribute"
            name: "Previous Year"
    links:
      - targets:
          - objectId: "E26012F6112640D39457D6AAFA31585F"
            name: "Year (2)"
            subType: "attribute"
          - objectId: "D37374672494429CA65D32BEE1056D1B"
            name: "Year"
            subType: "attribute"
            externalDataModelId: "1F905D802C504E01B1491310B216AAC1"
        sourceObjectId: "E26012F6112640D39457D6AAFA31585F"
        alias: "Year"
        linkedAttribute:
          information:
            primaryLocale: "en-US"
            objectId: "F527E96014364F30B638DC6A8D2D9C79"
            subType: "attribute"
            name: "Year"
            description: "Unique year identifier"
          forms:
            - id: "45C11FA478E745FEA08D781CEA190FE5"
              name: "Year ID"
              description: "Unique year identifier"
              category: "ID"
              type: "system"
              displayFormat: "number"
              dataType:
                type: "integer"
                precision: 2
                scale: 0
              alias: "year_id"
              semanticRole: "year"
            - id: "D89628C490B74A75ADCE04A5D6E6FF21"
              name: "Year Date"
              description: "Start date of the year"
              category: "Year None (17)"
              type: "custom"
              displayFormat: "date_time"
              dataType:
                type: "time_stamp"
                precision: 26
                scale: 6
              alias: "year_date"
              semanticRole: "datetime"
          keyForm:
            id: "45C11FA478E745FEA08D781CEA190FE5"
            name: "Year ID"
          displays:
            reportDisplays:
              - id: "D89628C490B74A75ADCE04A5D6E6FF21"
                name: "Year Date"
            browseDisplays:
              - id: "D89628C490B74A75ADCE04A5D6E6FF21"
                name: "Year Date"
          nonAggregatable: false
          acl:
            "294DEDC011D2F1D56000D98E67019608":
              granted: 255
              denied: 0
              inheritable: false
            B132F2DE154C98C8CE48F6B8202ED712:
              granted: 255
              denied: 0
              inheritable: false
            C82C6B1011D2894CC0009D9F29718E4F:
              granted: 255
              denied: 0
              inheritable: false
          translations:
            name:
              targetName: "Object Name"
              translationValues:
                1033:
                  translation: "Year"
            description:
              targetName: "Object Description"
              translationValues:
                1033:
                  translation: "Unique year identifier"
            forms:
              "45C11FA478E745FEA08D781CEA190FE5":
                name:
                  targetName: "Attribute Form Name"
                  translationValues:
                    1033:
                      translation: "Year ID"
                description:
                  targetName: "Attribute Form Description"
                  translationValues:
                    1033:
                      translation: "Unique year identifier"
              D89628C490B74A75ADCE04A5D6E6FF21:
                name:
                  targetName: "Attribute Form Name"
                  translationValues:
                    1033:
                      translation: "Year Date"
                description:
                  targetName: "Attribute Form Description"
                  translationValues:
                    1033:
                      translation: "Start date of the year"
    externalDataModels:
      - id: "1F905D802C504E01B1491310B216AAC1"
        baseDataModel:
          objectId: "3B9C76EEA564403A9BA5545532064BBD"
          subType: "report_emma_cube"
          name: "Yearly Category Sales Analysis"
        objects:
          - objectId: "D37374672494429CA65D32BEE1056D1B"
            subType: "attribute"
            name: "Year"
            hidden: false
            alias: "Year (1)"
            forms:
              - id: "45C11FA478E745FEA08D781CEA190FE5"
                name: "Year ID"
            translations:
              alias:
                translationValues:
                  1033:
                    translation: "Year (1)"
          - objectId: "4E40424CB027400D8F1A573796970D05"
            subType: "attribute"
            name: "Category"
            hidden: false
            forms:
              - id: "45C11FA478E745FEA08D781CEA190FE5"
                name: "Category ID"
          - objectId: "521A218951764848B663755273103534"
            subType: "fact_metric"
            name: "Total Dollar Sales"
            hidden: false
          - objectId: "00FD4E6815E849A19250C6CD232A8D9A"
            subType: "fact_metric"
            name: "Total Unit Sales"
            hidden: false
          - objectId: "AC113EBE39634A3FA2571E45DBB9E793"
            subType: "fact_metric"
            name: "Total Cost"
            hidden: false
          - objectId: "06EAE3AB70AC44379DF5001E50F937F7"
            subType: "fact_metric"
            name: "Gross Dollar Sales"
            hidden: false
fingerprint: "ff93d782f76414c000d7d71f6b43759b14354a54b6b98f709e4177304e8c7261"
```

- Response Code: 200 (Success: OK)
