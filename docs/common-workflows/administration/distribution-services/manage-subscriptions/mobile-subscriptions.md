---
title: Manage mobile subscriptions
description: This workflow sample demonstrates how to create and update a mobile subscription.
---

<Available since="2021 Update 9" />

This workflow sample demonstrates how to create and update a mobile subscription.

1. [Create a new mobile subscription](#create-a-new-mobile-subscription)
1. [Update an existing mobile subscription](#update-an-existing-mobile-subscription)

:::tip

This workflow follows the general steps described in [Create and get a subscription](create-and-get-a-subscription.md). You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-da43d1b1-a332-4452-829f-e07a041abc8f?ctx=documentation).

Learn more about Strategy REST API Playground [here](/docs/getting-started/playground.md).

:::

## Create a new mobile subscription

Endpoint: [POST /api/subscriptions](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/createSubscription)

This endpoint allows you to create a new subscription for a given project. Obtain the authorization token needed to execute the request using `POST /api/auth/login`. Obtain the project ID using `GET /api/projects`. Provide the information used to create a subscription in the body parameter of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 201 and a response body containing all the information on the newly created subscription.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'
  'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
  ```

- Request Body

  ```json
  {
    "name": "Example",
    "multipleContents": true,
    "editable": false,
    "allowDeliveryChanges": false,
    "allowPersonalizationChanges": false,
    "allowUnsubscribe": true,
    "allowUnsubscribeFromEmail": false,
    "owner": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "schedules": [
      {
        "id": "3450AE6F4E29E9A6E1075DA93B7062AA"
      }
    ],
    "contents": [
      {
        "id": "2649260543F8E86FBA0A36A7BE8BBC9F",
        "name": "DashboardForTelemetry1",
        "type": "dossier",
        "projectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
        "personalization": {
          "compressed": false,
          "contentModes": ["bookmark"],
          "bookmarkIds": ["5228FBC043BC7964DB682D816C7AECB6"],
          "manipulations": "<rw_manipulations><rw_manipulation><rw_manipulation_method>51</rw_manipulation_method><rw_node_key>K36</rw_node_key></rw_manipulation><rw_manipulation><rw_manipulation_method>72</rw_manipulation_method><rw_node_key>K53</rw_node_key></rw_manipulation><rw_manipulation><rw_manipulation_method>19</rw_manipulation_method><rw_node_key>K52</rw_node_key><report_manipulation><report_manipulation_method>58</report_manipulation_method><unit_id>4C051DB611D3E877C000B3B2D86C964F</unit_id><unit_type>4</unit_type><threshold enabled=\"1\" is_delivery=\"1\" ix=\"1\"><threshold_properties><name>threshold 0</name><scope>1</scope><text_semantics>2</text_semantics><rw_alt_text/></threshold_properties><grid_format><prs n=\"FormattingFont\"><pr pri=\"7\" v=\"0\"/></prs><prs n=\"FormattingPatterns\"><pr pri=\"4\" v=\"1\"/></prs></grid_format><mi rfd=\"1\"><in><oi ab=\"\" acg=\"0\" des=\"\" did=\"29240359C02142F68BF6587F610E64AB\" dirty=\"1\" ext_type=\"0\" hid=\"0\" id=\"1\" mf=\"1\" n=\"\" nct=\"\" new=\"1\" nmdt=\"\" sta=\"0\" stp=\"256\" tp=\"1\" vr=\"\"/><oi ab=\"\" acg=\"0\" bodyDirty=\"1\" des=\"\" did=\"4C051DB611D3E877C000B3B2D86C964F\" dirty=\"1\" ext_type=\"0\" hid=\"0\" id=\"2\" n=\"Profit\" nct=\"\" nmdt=\"\" sta=\"0\" stp=\"-1\" tp=\"4\" vr=\"\"/></in><exp dirty=\"1\"><nd ddt=\"-1\" disp_id=\"2\" dmt=\"1\" et=\"14\" is_indp_csi=\"0\" nt=\"4\"><nd ddt=\"-1\" disp_id=\"3\" dmt=\"7\" et=\"10\" is_indp_csi=\"0\" nt=\"4\"><nd ddt=\"-1\" disp_id=\"4\" dmt=\"1\" et=\"1\" is_indp_csi=\"0\" nt=\"5\"><mt rfd=\"2\"/></nd><nd ddt=\"5\" disp_id=\"5\" dmt=\"1\" et=\"1\" is_indp_csi=\"0\" nt=\"3\"><cst ddt=\"5\">0</cst></nd><op fnt=\"8\" node=\"0\"/></nd><op fnt=\"19\" node=\"0\"/></nd></exp></mi></threshold></report_manipulation></rw_manipulation></rw_manipulations>",
          "exportToPdfSettings": null,
          "exportToCsvSettings": null
        },
        "alertActions": [
          {
            "act": "setCurrentLayout",
            "unitKey": "K36",
            "panelUnitKey": "K53"
          },
          {
            "act": "updateTemplate",
            "keyContext": "K52",
            "actions": [
              {
                "act": "threshold",
                "nodeKey": "K52",
                "thresholds": [
                  {
                    "n": "threshold 0",
                    "scope": 1,
                    "rtp": 2,
                    "rtxt": "",
                    "expr": "<exp><nd et=\"14\" fn=\"19\" node=\"0\"><nds><nd fn=\"8\" et=\"10\"><m did=\"4C051DB611D3E877C000B3B2D86C964F\" n=\"Profit\"></m><cs><c v=\"9\" dtp=\"5\"></c></cs></nd></nds></nd></exp>",
                    "fmt": {
                      "FormattingFont": {
                        "Color": 0
                      },
                      "FormattingPatterns": {
                        "FillStyle": 1
                      }
                    }
                  }
                ],
                "thresholdType": -1,
                "basedOnId": "4C051DB611D3E877C000B3B2D86C964F",
                "did": "4C051DB611D3E877C000B3B2D86C964F",
                "objType": 4
              }
            ]
          }
        ]
      }
    ],
    "recipients": [
      {
        "id": "54F3D26011D2896560009A8E67019608",
        "type": "user"
      }
    ],
    "delivery": {
      "mode": "MOBILE",
      "expirationTimeZone": "Europe/London",
      "contactSecurity": false,
      "mobile": {
        "deviceId": "E206C75BABC441C5B13B60C5D956F605,DD197BFE29A047BC890742C611DC8D94",
        "doNotCreateUpdateCaches": true,
        "overwriteOlderVersion": true,
        "libraryUrl": "http://localhost:8080/MicroStrategyLibrary/",
        "reRunHl": true,
        "message": "Mobile alert",
        "subject": "Alert from Mobile"
      }
    },
    "alert": true
  }
  ```

- Curl

  ```bash
  curl -X POST -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' --header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -d '...' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions
  ```

Sample Response

- Response Body

  ```json
  {
    "name": "Example",
    "multipleContents": true,
    "editable": false,
    "allowDeliveryChanges": false,
    "allowPersonalizationChanges": false,
    "allowUnsubscribe": true,
    "allowUnsubscribeFromEmail": false,
    "owner": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "schedules": [
      {
        "id": "3450AE6F4E29E9A6E1075DA93B7062AA"
      }
    ],
    "contents": [
      {
        "id": "2649260543F8E86FBA0A36A7BE8BBC9F",
        "name": "DashboardForTelemetry1",
        "type": "dossier",
        "projectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
        "personalization": {
          "compressed": false,
          "contentModes": ["bookmark"],
          "bookmarkIds": ["5228FBC043BC7964DB682D816C7AECB6"],
          "manipulations": "<rw_manipulations><rw_manipulation><rw_manipulation_method>51</rw_manipulation_method><rw_node_key>K36</rw_node_key></rw_manipulation><rw_manipulation><rw_manipulation_method>72</rw_manipulation_method><rw_node_key>K53</rw_node_key></rw_manipulation><rw_manipulation><rw_manipulation_method>19</rw_manipulation_method><rw_node_key>K52</rw_node_key><report_manipulation><report_manipulation_method>58</report_manipulation_method><unit_id>4C051DB611D3E877C000B3B2D86C964F</unit_id><unit_type>4</unit_type><threshold enabled=\"1\" is_delivery=\"1\" ix=\"1\"><threshold_properties><name>threshold 0</name><scope>1</scope><text_semantics>2</text_semantics><rw_alt_text/></threshold_properties><grid_format><prs n=\"FormattingFont\"><pr pri=\"7\" v=\"0\"/></prs><prs n=\"FormattingPatterns\"><pr pri=\"4\" v=\"1\"/></prs></grid_format><mi rfd=\"1\"><in><oi ab=\"\" acg=\"0\" des=\"\" did=\"29240359C02142F68BF6587F610E64AB\" dirty=\"1\" ext_type=\"0\" hid=\"0\" id=\"1\" mf=\"1\" n=\"\" nct=\"\" new=\"1\" nmdt=\"\" sta=\"0\" stp=\"256\" tp=\"1\" vr=\"\"/><oi ab=\"\" acg=\"0\" bodyDirty=\"1\" des=\"\" did=\"4C051DB611D3E877C000B3B2D86C964F\" dirty=\"1\" ext_type=\"0\" hid=\"0\" id=\"2\" n=\"Profit\" nct=\"\" nmdt=\"\" sta=\"0\" stp=\"-1\" tp=\"4\" vr=\"\"/></in><exp dirty=\"1\"><nd ddt=\"-1\" disp_id=\"2\" dmt=\"1\" et=\"14\" is_indp_csi=\"0\" nt=\"4\"><nd ddt=\"-1\" disp_id=\"3\" dmt=\"7\" et=\"10\" is_indp_csi=\"0\" nt=\"4\"><nd ddt=\"-1\" disp_id=\"4\" dmt=\"1\" et=\"1\" is_indp_csi=\"0\" nt=\"5\"><mt rfd=\"2\"/></nd><nd ddt=\"5\" disp_id=\"5\" dmt=\"1\" et=\"1\" is_indp_csi=\"0\" nt=\"3\"><cst ddt=\"5\">0</cst></nd><op fnt=\"8\" node=\"0\"/></nd><op fnt=\"19\" node=\"0\"/></nd></exp></mi></threshold></report_manipulation></rw_manipulation></rw_manipulations>",
          "exportToPdfSettings": null,
          "exportToCsvSettings": null
        }
      }
    ],
    "recipients": [
      {
        "id": "54F3D26011D2896560009A8E67019608",
        "type": "user"
      }
    ],
    "delivery": {
      "mode": "MOBILE",
      "expirationTimeZone": "Europe/London",
      "contactSecurity": false,
      "mobile": {
        "deviceId": "E206C75BABC441C5B13B60C5D956F605,DD197BFE29A047BC890742C611DC8D94",
        "doNotCreateUpdateCaches": true,
        "overwriteOlderVersion": true,
        "libraryUrl": "http://localhost:8080/MicroStrategyLibrary/",
        "reRunHl": true,
        "message": "Mobile alert",
        "subject": "Alert from Mobile"
      }
    },
    "alert": true
  }
  ```

  - Response Code: 201 (Created)

## Update an existing mobile subscription

Endpoint: [PUT /api/subscriptions/\{id}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subscriptions/updateSubscription)

This endpoint allows you to update all of the information for a specific subscription. Obtain the authorization token needed to execute the request using `POST /api/auth/login`. Obtain the project ID using `GET /api/projects`. Provide the information used to update a subscription in the body parameter of the request and provide the subscription ID in the request path. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all the information on the updated subscription.

Sample Request

- Request Headers

  ```http
  'Accept: application/json'
  'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2'
  'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'
  ```

- Request Body

  ```json
  {
    "name": "Example",
    "multipleContents": true,
    "editable": false,
    "allowDeliveryChanges": false,
    "allowPersonalizationChanges": false,
    "allowUnsubscribe": true,
    "allowUnsubscribeFromEmail": false,
    "owner": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "schedules": [
      {
        "id": "3450AE6F4E29E9A6E1075DA93B7062AA"
      }
    ],
    "contents": [
      {
        "id": "2649260543F8E86FBA0A36A7BE8BBC9F",
        "name": "DashboardForTelemetry1",
        "type": "dossier",
        "projectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
        "personalization": {
          "compressed": false,
          "contentModes": ["bookmark"],
          "bookmarkIds": ["5228FBC043BC7964DB682D816C7AECB6"],
          "manipulations": "<rw_manipulations><rw_manipulation><rw_manipulation_method>51</rw_manipulation_method><rw_node_key>K36</rw_node_key></rw_manipulation><rw_manipulation><rw_manipulation_method>72</rw_manipulation_method><rw_node_key>K53</rw_node_key></rw_manipulation><rw_manipulation><rw_manipulation_method>19</rw_manipulation_method><rw_node_key>K52</rw_node_key><report_manipulation><report_manipulation_method>58</report_manipulation_method><unit_id>4C051DB611D3E877C000B3B2D86C964F</unit_id><unit_type>4</unit_type><threshold enabled=\"1\" is_delivery=\"1\" ix=\"1\"><threshold_properties><name>threshold 0</name><scope>1</scope><text_semantics>2</text_semantics><rw_alt_text/></threshold_properties><grid_format><prs n=\"FormattingFont\"><pr pri=\"7\" v=\"0\"/></prs><prs n=\"FormattingPatterns\"><pr pri=\"4\" v=\"1\"/></prs></grid_format><mi rfd=\"1\"><in><oi ab=\"\" acg=\"0\" des=\"\" did=\"29240359C02142F68BF6587F610E64AB\" dirty=\"1\" ext_type=\"0\" hid=\"0\" id=\"1\" mf=\"1\" n=\"\" nct=\"\" new=\"1\" nmdt=\"\" sta=\"0\" stp=\"256\" tp=\"1\" vr=\"\"/><oi ab=\"\" acg=\"0\" bodyDirty=\"1\" des=\"\" did=\"4C051DB611D3E877C000B3B2D86C964F\" dirty=\"1\" ext_type=\"0\" hid=\"0\" id=\"2\" n=\"Profit\" nct=\"\" nmdt=\"\" sta=\"0\" stp=\"-1\" tp=\"4\" vr=\"\"/></in><exp dirty=\"1\"><nd ddt=\"-1\" disp_id=\"2\" dmt=\"1\" et=\"14\" is_indp_csi=\"0\" nt=\"4\"><nd ddt=\"-1\" disp_id=\"3\" dmt=\"7\" et=\"10\" is_indp_csi=\"0\" nt=\"4\"><nd ddt=\"-1\" disp_id=\"4\" dmt=\"1\" et=\"1\" is_indp_csi=\"0\" nt=\"5\"><mt rfd=\"2\"/></nd><nd ddt=\"5\" disp_id=\"5\" dmt=\"1\" et=\"1\" is_indp_csi=\"0\" nt=\"3\"><cst ddt=\"5\">0</cst></nd><op fnt=\"8\" node=\"0\"/></nd><op fnt=\"19\" node=\"0\"/></nd></exp></mi></threshold></report_manipulation></rw_manipulation></rw_manipulations>",
          "exportToPdfSettings": null,
          "exportToCsvSettings": null
        },
        "alertActions": [
          {
            "act": "setCurrentLayout",
            "unitKey": "K36",
            "panelUnitKey": "K53"
          },
          {
            "act": "updateTemplate",
            "keyContext": "K52",
            "actions": [
              {
                "act": "threshold",
                "nodeKey": "K52",
                "thresholds": [
                  {
                    "n": "threshold 0",
                    "scope": 1,
                    "rtp": 2,
                    "rtxt": "",
                    "expr": "<exp><nd et=\"14\" fn=\"19\" node=\"0\"><nds><nd fn=\"8\" et=\"10\"><m did=\"4C051DB611D3E877C000B3B2D86C964F\" n=\"Profit\"></m><cs><c v=\"9\" dtp=\"5\"></c></cs></nd></nds></nd></exp>",
                    "fmt": {
                      "FormattingFont": {
                        "Color": 0
                      },
                      "FormattingPatterns": {
                        "FillStyle": 1
                      }
                    }
                  }
                ],
                "thresholdType": -1,
                "basedOnId": "4C051DB611D3E877C000B3B2D86C964F",
                "did": "4C051DB611D3E877C000B3B2D86C964F",
                "objType": 4
              }
            ]
          }
        ]
      }
    ],
    "recipients": [
      {
        "id": "54F3D26011D2896560009A8E67019608",
        "type": "user"
      }
    ],
    "delivery": {
      "mode": "MOBILE",
      "expirationTimeZone": "Europe/London",
      "contactSecurity": false,
      "mobile": {
        "deviceId": "E206C75BABC441C5B13B60C5D956F605",
        "doNotCreateUpdateCaches": true,
        "overwriteOlderVersion": true,
        "libraryUrl": "http://localhost:8080/MicroStrategyLibrary/",
        "reRunHl": true,
        "message": "Mobile alert",
        "subject": "Alert from Mobile"
      }
    },
    "alert": true,
    "sendNow": false
  }
  ```

- Curl

  ```bash
  curl -X PUT -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: lb15fie86urdnsldk71a02gls2' --header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -d '...' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/0BC64C0AFA4F86A55FB8BEA3332F90B7
  ```

Sample Response

- Response Body

  ```json
  {
    "name": "Example",
    "multipleContents": true,
    "editable": false,
    "allowDeliveryChanges": false,
    "allowPersonalizationChanges": false,
    "allowUnsubscribe": true,
    "allowUnsubscribeFromEmail": false,
    "owner": {
      "id": "54F3D26011D2896560009A8E67019608",
      "name": "Administrator"
    },
    "schedules": [
      {
        "id": "3450AE6F4E29E9A6E1075DA93B7062AA"
      }
    ],
    "contents": [
      {
        "id": "2649260543F8E86FBA0A36A7BE8BBC9F",
        "name": "DashboardForTelemetry1",
        "type": "dossier",
        "projectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",
        "personalization": {
          "compressed": false,
          "contentModes": ["bookmark"],
          "bookmarkIds": ["5228FBC043BC7964DB682D816C7AECB6"],
          "manipulations": "<rw_manipulations><rw_manipulation><rw_manipulation_method>51</rw_manipulation_method><rw_node_key>K36</rw_node_key></rw_manipulation><rw_manipulation><rw_manipulation_method>72</rw_manipulation_method><rw_node_key>K53</rw_node_key></rw_manipulation><rw_manipulation><rw_manipulation_method>19</rw_manipulation_method><rw_node_key>K52</rw_node_key><report_manipulation><report_manipulation_method>58</report_manipulation_method><unit_id>4C051DB611D3E877C000B3B2D86C964F</unit_id><unit_type>4</unit_type><threshold enabled=\"1\" is_delivery=\"1\" ix=\"1\"><threshold_properties><name>threshold 0</name><scope>1</scope><text_semantics>2</text_semantics><rw_alt_text/></threshold_properties><grid_format><prs n=\"FormattingFont\"><pr pri=\"7\" v=\"0\"/></prs><prs n=\"FormattingPatterns\"><pr pri=\"4\" v=\"1\"/></prs></grid_format><mi rfd=\"1\"><in><oi ab=\"\" acg=\"0\" des=\"\" did=\"29240359C02142F68BF6587F610E64AB\" dirty=\"1\" ext_type=\"0\" hid=\"0\" id=\"1\" mf=\"1\" n=\"\" nct=\"\" new=\"1\" nmdt=\"\" sta=\"0\" stp=\"256\" tp=\"1\" vr=\"\"/><oi ab=\"\" acg=\"0\" bodyDirty=\"1\" des=\"\" did=\"4C051DB611D3E877C000B3B2D86C964F\" dirty=\"1\" ext_type=\"0\" hid=\"0\" id=\"2\" n=\"Profit\" nct=\"\" nmdt=\"\" sta=\"0\" stp=\"-1\" tp=\"4\" vr=\"\"/></in><exp dirty=\"1\"><nd ddt=\"-1\" disp_id=\"2\" dmt=\"1\" et=\"14\" is_indp_csi=\"0\" nt=\"4\"><nd ddt=\"-1\" disp_id=\"3\" dmt=\"7\" et=\"10\" is_indp_csi=\"0\" nt=\"4\"><nd ddt=\"-1\" disp_id=\"4\" dmt=\"1\" et=\"1\" is_indp_csi=\"0\" nt=\"5\"><mt rfd=\"2\"/></nd><nd ddt=\"5\" disp_id=\"5\" dmt=\"1\" et=\"1\" is_indp_csi=\"0\" nt=\"3\"><cst ddt=\"5\">0</cst></nd><op fnt=\"8\" node=\"0\"/></nd><op fnt=\"19\" node=\"0\"/></nd></exp></mi></threshold></report_manipulation></rw_manipulation></rw_manipulations>",
          "exportToPdfSettings": null,
          "exportToCsvSettings": null
        }
      }
    ],
    "recipients": [
      {
        "id": "54F3D26011D2896560009A8E67019608",
        "type": "user"
      }
    ],
    "delivery": {
      "mode": "MOBILE",
      "expirationTimeZone": "Europe/London",
      "contactSecurity": false,
      "mobile": {
        "deviceId": "E206C75BABC441C5B13B60C5D956F605",
        "doNotCreateUpdateCaches": true,
        "overwriteOlderVersion": true,
        "libraryUrl": "http://localhost:8080/MicroStrategyLibrary/",
        "reRunHl": true,
        "message": "Mobile alert",
        "subject": "Alert from Mobile"
      }
    },
    "alert": true
  }
  ```

  - Response Code: 200 (OK)
