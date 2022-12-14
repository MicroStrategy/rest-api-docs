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
          "translation": "????????????????????????"
        },
        "1031": {
          "translation": "Kategorieumsatzbericht"
        },
        "1033": {
          "translation": "Category Sales Report"
        },
        "1036": {
          "translation": "Rapport sur les ventes par cat??gorie"
        },
        "1040": {
          "translation": "Report Vendite di categoria"
        },
        "1041": {
          "translation": "??????????????????????????????"
        },
        "1042": {
          "translation": "?????? ?????? ?????????"
        },
        "1046": {
          "translation": "Relat??rio de Vendas da Categoria"
        },
        "1053": {
          "translation": "Kategorif??rs??ljningsrapport"
        },
        "2052": {
          "translation": "???????????????????????????"
        },
        "3082": {
          "translation": "Categor??a Informe de ventas"
        }
      }
    },
    "1:2:": {
      "translationTargetName": "Object Description ",
      "translationValues": {
        "1028": {
          "translation": "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
        },
        "1031": {
          "translation": "Dieser Bericht zeigt Informationen zu Einnahmen und Gewinn nach Monat f??r eine bestimmte Kategorie und Subkategorie. Die Kategorie, f??r die Sie sich interessieren, wird mit Page-By ausgew??hlt."
        },
        "1033": {
          "translation": "This report displays revenue and profit information by month for a particular category and subcategory.  The category of interest is selected via page-by."
        },
        "1036": {
          "translation": "Ce rapport affiche les informations sur le chiffre d'affaires et le profit par mois pour une certaine cat??gorie et sous-cat??gorie  La cat??gorie qui int??resse l'utilisateur est s??lectionn??e via le saut de page."
        },
        "1040": {
          "translation": "Questo report mostra informazioni di entrate e profitti per mese per categorie e sottocategorie particolari. La categoria di interesse viene selezionata tramite raggruppamento a pagine."
        },
        "1041": {
          "translation": "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
        },
        "1042": {
          "translation": "??? ???????????? ?????? ?????? ??? ?????? ???????????? ?????? ?????? ??? ?????? ????????? ???????????????. ????????? ????????? ?????????-????????? ?????? ???????????????."
        },
        "1046": {
          "translation": "Este relat??rio exibe informa????es sobre a receita e o lucro mensal de categorias e subcategorias espec??ficas.  A categoria de interesse ?? selecionada p??gina a p??gina."
        },
        "1053": {
          "translation": "Denna rapport visar information om int??kt och vinst per m??nad f??r en viss kategori och underkategori.  Kategorin av intresse v??ljs genom s??kning."
        },
        "2052": {
          "translation": "??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
        },
        "3082": {
          "translation": "Este informe muestra informaci??n sobre ingresos y beneficios por mes para una categor??a y una subcategor??a determinadas.  La categor??a se selecciona mediante paginaci??n."
        }
      }
    }
  }
}
```

Response Code: 200 (Object's translations returned successfully)
