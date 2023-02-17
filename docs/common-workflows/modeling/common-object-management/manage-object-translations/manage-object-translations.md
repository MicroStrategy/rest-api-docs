---
title: Manage object's translations
description: You can use REST API requests to retrieve, remove, add and update object's translations.
---

<Available since="2021 Update 7" />

:::tip

You can try these workflows with [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d83e2ec3-5b5b-4fb3-8c30-4338db4c0f51?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

The following table lists required ACLs on different levels for GET and PATCH endpoints.

| Endpoint | Object      | Project | Locale |
| -------- | ----------- | ------- | ------ |
| GET      | READ        |         |        |
| PATCH    | READ, WRITE |         | USE    |

You can use REST API requests to retrieve, remove, add or update object's translations:

- [Retrieve object's translations](../manage-object-translations/retrieve-object-translations.md)
- [Remove or add object's translations](../manage-object-translations/remove-add-object-translations.md)
- [Update an object's translations](../manage-object-translations/update-object-translations.md)

The following are important fields in the API response body defined:

- `defaultLanguage`
  - Default language for an object.
- `localesAndTranslations`
  - Map containing target names' ids and corresponding translation objects as values.
- `translationValues`
  - Map containing locales' ids and corresponding translation values.
- `translation`
  - Translation value

Sample response:

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
        }
      }
    }
  }
}
```
