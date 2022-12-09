---
title: Workflow sample - Retrieve object's translations
sidebar_label: Retrieve object's translations
description: This topic covers workflow for retrieving object's translations.
---

This topic covers workflow for retrieving object's translations.

Endpoint: [GET /api/objects/{type}/{id}/translations](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Object%20Management/getObjectsTranslation).

The response can change based on the request parameters provided by the caller. Use the following parameters:

| Location | Name             | Description             |
| -------- | ---------------- | ----------------------- |
| header   | X-MSTR-AuthToken | The authorization token |
| header   | X-MSTR-ProjectID | The ID of the project   |
| path     | objectId         | Id of an object         |
| path     | type             | type of an object       |

Prepare necessary info in order to perform GET operation

1. Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).
1. Obtain the project ID from [GET /api/projects](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1).
1. Identify the object type from [EnumDSSXMLObjectTypes](https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html).

In this demo following parameter values will be used:

- Project: MicroStrategy Tutorial
- Project ID: `B7CA92F04B9FAE8D941C3E9B7E0CD754`
- Object ID: `BEC722A6406320A3E67DBFBAB2F033CB`
- Object type: `report_definition`

Request URL:

```url
https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/report_definition/BEC722A6406320A3E67DBFBAB2F033CB/translations
```

## Retrieve object's translations

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/report_definition/BEC722A6406320A3E67DBFBAB2F033CB/translations" -H "X-MSTR-AuthToken: db3nqj4o29vg5i747cdd2t4j38" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"
```

Sample Response Body:

```json
{
  "defaultLanguage": "en",
  "localesAndTranslations": {
    "1:0:": {
      "translationTargetName": "Object Name ",
      "translationValues": {
        "1028": {
          "translation": "產品大類銷售報表"
        },
        "1031": {
          "translation": "Kategorieumsatzbericht"
        },
        "1033": {
          "translation": "Category Sales Report"
        },
        "1036": {
          "translation": "Rapport sur les ventes par catégorie"
        },
        "1040": {
          "translation": "Report Vendite di categoria"
        },
        "1041": {
          "translation": "カテゴリ売上レポート"
        },
        "1042": {
          "translation": "범주 매출 리포트"
        },
        "1046": {
          "translation": "Relatório de Vendas da Categoria"
        },
        "1053": {
          "translation": "Kategoriförsäljningsrapport"
        },
        "2052": {
          "translation": "各大类商品销售报表"
        },
        "3082": {
          "translation": "Categoría Informe de ventas"
        }
      }
    },
    "1:2:": {
      "translationTargetName": "Object Description ",
      "translationValues": {
        "1028": {
          "translation": "該報表顯示了某特定產品類別和中類每月的營收和利潤資訊。該利息的產品類別通過分頁選擇。"
        },
        "1031": {
          "translation": "Dieser Bericht zeigt Informationen zu Einnahmen und Gewinn nach Monat für eine bestimmte Kategorie und Subkategorie. Die Kategorie, für die Sie sich interessieren, wird mit Page-By ausgewählt."
        },
        "1033": {
          "translation": "This report displays revenue and profit information by month for a particular category and subcategory.  The category of interest is selected via page-by."
        },
        "1036": {
          "translation": "Ce rapport affiche les informations sur le chiffre d'affaires et le profit par mois pour une certaine catégorie et sous-catégorie  La catégorie qui intéresse l'utilisateur est sélectionnée via le saut de page."
        },
        "1040": {
          "translation": "Questo report mostra informazioni di entrate e profitti per mese per categorie e sottocategorie particolari. La categoria di interesse viene selezionata tramite raggruppamento a pagine."
        },
        "1041": {
          "translation": "このレポートは特定のカテゴリとサブカテゴリごとに月別で売上高と利益情報を示します。カテゴリはページバイで選択できます。"
        },
        "1042": {
          "translation": "이 리포트는 특정 범주 및 하위 범주별로 월별 수익 및 이익 정보를 표시합니다. 원하는 범주는 페이지-바이를 통해 선택됩니다."
        },
        "1046": {
          "translation": "Este relatório exibe informações sobre a receita e o lucro mensal de categorias e subcategorias específicas.  A categoria de interesse é selecionada página a página."
        },
        "1053": {
          "translation": "Denna rapport visar information om intäkt och vinst per månad för en viss kategori och underkategori.  Kategorin av intresse väljs genom sökning."
        },
        "2052": {
          "translation": "该报表显示了某特定商品大类和子类每月的收益和利润信息。该利息的商品大类通过分页选择。"
        },
        "3082": {
          "translation": "Este informe muestra información sobre ingresos y beneficios por mes para una categoría y una subcategoría determinadas.  La categoría se selecciona mediante paginación."
        }
      }
    }
  }
}
```

Response Code: 200 (Object's translations returned successfully)
