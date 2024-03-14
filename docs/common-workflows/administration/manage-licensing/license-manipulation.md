---
title: Workflow sample - License manipulation
sidebar_label: License manipulation
description: This workflow sample demonstrates how to activate and deactivate license and also retrieve relevant info about license.
---

<Available since="2021 Update 10" />

This workflow sample demonstrates how to retrieve and perform operations to a license.

:::tip

Obtain the authorization token needed to execute the request using [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

:::

## Retrieve a license's info

Endpoint: [GET /api/license/nodes/\{nodeName}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/License/getLicense)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample request body: Empty

Sample Curl:

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/license/iServer/nodes/env-000000laio1use1' \
--header 'X-MSTR-AuthToken: f28f3f0eh0a6f32a2qkhcecs66'
```

Sample Response Body:

```json
{
  "bypassAudit": true,
  "bypassCpuControls": true,
  "contractId": 1,
  "disableActivation": false,
  "enableDailyReport": true,
  "enableKeyLevelEvaluation": true,
  "installationVersion": "1.1.111.111",
  "internal": true,
  "issueDate": "2023-05-04T00:00:00Z",
  "licenseKeyGroup": 1,
  "machineInfo": {
    "hostId": "f8fb1b7884ad378",
    "kernelRelease": "",
    "machineName": "env-000000laio1use1",
    "systemLanguage": "en_US",
    "CPUSpeed": "",
    "CPUType": "",
    "OS": "Windows Server 2019 Datacenter",
    "numPhysicalCPUs": 4
  },
  "platform": "No Platform",
  "preRelease": false,
  "products": {
    "intelligenceModule": [
      {
        "count": 5,
        "duration": 0,
        "name": "Server - Intelligence",
        "period": 0,
        "type": "CPU"
      }
    ]
  },
  "registrationDisabled": false,
  "status": "Inactive",
  "AWS": true,
  "ActAwareProducts": "111",
  "DSI": 0,
  "CPUAffinity": {
    "iServerMaxCPUAllowed": 5,
    "iServerPhyCPUInUse": 2,
    "webAspMaxCPUAllowed": 0,
    "webAspPhyCPUInUse": 0,
    "mobileAspMaxCPUAllowed": 0,
    "mobileAspPhyCPUInUse": 0
  },
  "installationType": "Perpetual License",
  "enabledPOC": false,
  "key": "aaaaa********************66666",
  "vCPUs": false
}
```

Sample Response Code: 200

## Update a license's info

Endpoint: [PATCH /api/license/nodes/\{nodeName}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/License/updateLicense)

:::info

depending on the type of license (Named user or CPU based, the request body will differ.)

:::

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample request body:

```json
{
  "operationList": [
    {
      "op": "replace",
      "path": "/key",
      "value": "aaaaa444444444ccc5755555555566666"
    },
    {
      "op": "add",
      "path": "/iServerCpuAffinity",
      "value": 2
    }
  ]
}
```

Sample Curl:

```bash
curl --location --request PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/license/iServer/nodes/env-000000laio1use1' \
--header 'X-MSTR-AuthToken: f28f3f0eh0a6f32a2qkhcecs66' \
--header 'Content-Type: application/json' \
--data '{
"operationList":[
  {
    "op": "replace",
    "path": "/key",
    "value":"aaaaa444444444ccc5755555555566666"
  },
    {
    "op": "add",
    "path": "/iServerCpuAffinity",
    "value":2
  }
]
}'
```

Sample Response Body:

```json

```

Sample Response Code: 204

## Retrieve a license's activation info

Endpoint: [GET /api/license/nodes/\{nodeName}/activation](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/License/getLicenseActivation)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample request body: Empty

Sample Curl:

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/license/iServer/nodes/env-000000laio1use1' \
-H 'X-MSTR-AuthToken: f28f3f0eh0a6f32a2qkhcecs66'

```

Sample Response Body:

```json
{
  "bypassAudit": false,
  "bypassCpuControls": false,
  "contractId": 1,
  "disableActivation": false,
  "enableDailyReport": false,
  "enableKeyLevelEvaluation": true,
  "installationVersion": "1.1.111.111",
  "internal": true,
  "issueDate": "2023-05-04T00:00:00Z",
  "licenseKeyGroup": 1,
  "machineInfo": {
    "hostId": "f8fb1b7884ad378",
    "kernelRelease": "",
    "machineName": "env-000000laio1use1",
    "systemLanguage": "en_US",
    "CPUSpeed": "",
    "CPUType": "",
    "OS": "Windows Server 2019 Datacenter",
    "numPhysicalCPUs": 4
  },
  "platform": "No Platform",
  "preRelease": false,
  "products": {
    "intelligenceModule": [
      {
        "count": 2,
        "duration": 0,
        "name": "Server - Intelligence",
        "period": 0,
        "type": "CPU"
      }
    ]
  },
  "registrationDisabled": false,
  "status": "Inactive",
  "AWS": true,
  "ActAwareProducts": "111",
  "DSI": 0,
  "CPUAffinity": {
    "iServerMaxCPUAllowed": 2,
    "iServerPhyCPUInUse": 2,
    "webAspMaxCPUAllowed": 0,
    "webAspPhyCPUInUse": 0,
    "mobileAspMaxCPUAllowed": 0,
    "mobileAspPhyCPUInUse": 0
  },
  "installationType": "Term License",
  "enabledPOC": true,
  "key": "aaaaa***********************66666",
  "vCPUs": false
}
```

Sample Response Code: 200

## Update license's activation info

Endpoint: [PATCH /api/license/nodes/\{nodeName}/activation](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/License/updateLicense)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample request body

```json
{
  "operationList": [
    {
      "op": "add",
      "path": "/userProvidedInfo",
      "value": {
        "installationName": "env-000000laiouse1",
        "installationLocation": "USA",
        "installationUse": "production",
        "contact": {
          "customer": {
            "company": "MicroStrategy",
            "department": "TEC",
            "firstName": "John",
            "lastName": "Doe",
            "jobTitle": "Software Engineer",
            "phone": "7038488600",
            "email": "johndoe@microstrategy.com",
            "address": "1850 Towers Crescent Plaza",
            "city": "Tysons",
            "state": "VA",
            "postal": "22182",
            "country": "United States",
            "usePersonalInfo": true
          },
          "installer": {
            "company": "NotMicroStrategy",
            "department": "NotTEC",
            "firstName": "John",
            "lastName": "Doe",
            "jobTitle": "Not Software Engineer",
            "phone": "9998889999",
            "email": "johndoe@microstrategy.com",
            "address": "1851 Towers Crescent Plaza",
            "city": "Nofdft Tysons",
            "state": "Not VA",
            "postal": "99999",
            "country": "United States",
            "usePersonalInfo": true
          }
        }
      }
    }
  ]
}
```

Sample Curl:

```bash
curl --location --request PATCH 'https://demo.microstrategy.com/MicroStrategyLibrary/api/license/iServer/nodes/env-000000laio1use1/activation' \
--header 'X-MSTR-AuthToken: f28f3f0eh0a6f32a2qkhcecs66' \
--header 'Content-Type: application/json' \
--data-raw '{
 "operationList": [{
  "op": "add",
  "path": "/userProvidedInfo",
  "value": {
   "installationName": "env-000000laiouse1",
   "installationLocation": "USA",
   "installationUse": "production",
   "contact": {
    "customer": {
     "company": "MicroStrategy",
     "department": "TEC",
     "firstName": "John",
     "lastName": "Doe",
     "jobTitle": "Software Engineer",
     "phone": "7038488600",
     "email": "johndoe@microstrategy.com",
     "address": "1850 Towers Crescent Plaza",
     "city": "Tysons",
     "state": "VA",
     "postal": "22182",
     "country": "United States",
     "usePersonalInfo": true
    },
    "installer": {
     "company": "NotMicroStrategy",
     "department": "NotTEC",
     "firstName": "John",
     "lastName": "Doe",
     "jobTitle": "Not Software Engineer",
     "phone": "9998889999",
     "email": "johndoe@microstrategy.com",
     "address": "1851 Towers Crescent Plaza",
     "city": "Nofdft Tysons",
     "state": "Not VA",
     "postal": "99999",
     "country": "United States",
     "usePersonalInfo": true
    }
   }
  }
 }]
}'
```

Sample Response Body:

```json

```

Sample Response Code: 204

## Retrieve xml file for license activation

Endpoint: [GET /api/license/nodes/\{nodeName}/activation/xmlFile](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Monitors/License/getLicenseActivationXmlFile)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample request body: Empty

Sample Curl:

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/license/iServer/nodes/env-000000laio1use1/activation/xmlFile' \
--header 'X-MSTR-AuthToken: f28f3f0eh0a6f32a2qkhcecs66'
```

Sample Response Body:

```xml

        <?xml-stylesheet type=\"text/xsl\" encoding=\"UTF-8\" href=\"Z:\\BIN\\x64\\ActivateFormat.xsl\"?>
<registration version="7\">\n
<xml_time>2023-05-04 11:47:59.372</xml_time>\n
<cd_key>aaaaa444444444ccc5755555555566666</cd_key>\n
<contract_id>1</contract_id>\n
<license_key_group>1</license_key_group>\n
<cd_key_issue_date>5/4/2023</cd_key_issue_date>\n
<signature>8857602244</signature>\n
<hardware_info>\n
<host_id>f8fb1b7884ad378</host_id>\n
<cpu>\n
    <type>Intel(R) Xeon(R) Platinum 8280 CPU @ 2.70GHz</type>\n
    <bit_size>64</bit_size>\n
    <clock_speed>2568</clock_speed>\n
</cpu>\n
<physical_cpu_count>4</physical_cpu_count>\n
<physical_memory>16383</physical_memory>\n
</hardware_info>\n
<os_info>\n
<os>\n
    <type>Windows 6.2.9200</type>\n
    <bit_size>64</bit_size>\n
    <locale>en_US</locale>\n
    <default_locale>English (United States) (LANGID=0xЉ)</default_locale>\n
    <default_code_page>ibm-5348_P100-1997</default_code_page>\n
</os>\n
<virtual_memory>134217727</virtual_memory>\n
<fourGT_mode>Disabled</fourGT_mode>\n
<page_file_size_Mb>512</page_file_size_Mb>\n
<hyperthreading>Disabled</hyperthreading>\n
</os_info>\n
<microstrategy_info>\n
<last_change>2020-01-01 01:01:01</last_change>\n
<last_change_type>First Install</last_change_type>\n
<install_guid>{A719FC2E-919B-4590-BADB-F46CF4AAF452}</install_guid>\n
<default_locale>9</default_locale>\n
<products>\n
    <product>\n
        <name>MicroStrategy Intelligence Server Universal</name>\n
        <version>Unknown</version>\n
        <prompted_cpus>2</prompted_cpus>\n
    </product>\n
    <product>\n
        <name>MicroStrategy OLAP Services Universal</name>\n
        <version>1.1.111.111</version>\n
    </product>\n
    <product>\n
        <name>MicroStrategy Transaction Services Universal</name>\n
        <version>1.1.111.111</version>\n
    </product>\n
    <product>\n
        <name>MicroStrategy Report Services Universal</name>\n
        <version>1.1.111.111</version>\n
    </product>\n
    <product>\n
        <name>MicroStrategy Distribution Services</name>\n
        <version>1.1.111.111</version>\n
    </product>\n
</products>\n
<metadata_db_info>\n
    <database>\n
        <db_version>-1</db_version>\n
        <db_encoding>UCS2</db_encoding>\n
        <odbc_driver_name>%WINDIR%\\system32\\odbcjt32.dll</odbc_driver_name>\n
        <odbc_driver_version>01.11</odbc_driver_version>\n
    </database>\n
</metadata_db_info>\n
<warehouse_db_info>\n    </warehouse_db_info>\n
<statistics_db_info>\n    </statistics_db_info>\n
<iserver_instances>\n
    <instance>\n
        <nodes_in_cluster>1</nodes_in_cluster>\n
        <asymmetric_clustering>false</asymmetric_clustering>\n
    </instance>\n
</iserver_instances>\n
</microstrategy_info>\n
<system_info>\n
<name>env-000000laiouse1</name>\n
<location>USA</location>\n
<use>Production</use>\n
</system_info>\n
<user_info>\n
<first_name>John</first_name>\n
<last_name>Doe</last_name>\n
<email>johndoe@microstrategy.com</email>\n
<phone>1111222233</phone>\n
<company>MicrosdfStrategy</company>\n
<department>TEC</department>\n
<title>Software Engineer</title>\n
<street_address>1850 Towers Crescent Plaza</street_address>\n
<city>Tysons</city>\n
<state>VA</state>\n
<zip_code>22182</zip_code>\n
<country>United States</country>\n
<authorize_use />\n
</user_info>\n
<installer_info>\n
<first_name>John</first_name>\n
<last_name>Doe</last_name>\n
<email>johndoe@microstrategy.com</email>\n
<phone>9998889999</phone>\n
<company>NotMicroStrategy</company>\n
<department>NotTEC</department>\n
<title>Not Software Engineer</title>\n
<street_address>1851 Towers Crescent Plaza</street_address>\n
<city>Not Tysons</city>\n
<state>Not VA</state>\n
<zip_code>99999</zip_code>\n
<country>United States</country>\n
<authorize_use />\n
</installer_info>\n
        </registration>
```

Sample Response Code: 200

## Retrieve license's history

Endpoint: [GET /api/license/nodes/\{nodeName}/history](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/License/getLicenseHistory)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample request body: Empty

Sample Curl:

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/license/iServer/nodes/env-000000laio1use1/history' \
--header 'X-MSTR-AuthToken: f28f3f0eh0a6f32a2qkhcecs66'
```

Sample Response Body:

```json
{
  "activities": [
    {
      "activity": "License Update",
      "build": "",
      "code": "",
      "contractId": "1",
      "date": "2023-04-21",
      "issueDate": "2023-04-21T00:00:00Z",
      "key": "aaaaa444444444ccc5755555555566666",
      "keyGroup": "",
      "productsInstall": [],
      "productsRepair": [],
      "productsUninstall": [],
      "productsUpdate": [],
      "release": "",
      "source": "Workstation",
      "state": "Inactive",
      "time": "11:00:59 AM"
    },
    {
      "activity": "License Update",
      "build": "",
      "code": "",
      "contractId": "1",
      "date": "2023-04-24",
      "issueDate": "2023-04-24T00:00:00Z",
      "key": "aaaaa444444444ccc5755555555566666",
      "keyGroup": "",
      "productsInstall": [],
      "productsRepair": [],
      "productsUninstall": [],
      "productsUpdate": [],
      "release": "",
      "source": "Workstation",
      "state": "Inactive",
      "time": "08:27:43 AM"
    }
  ]
}
```

Sample Response Code: 200

## Retrieve license's entitlements

Endpoint: [GET /api/license/nodes/\{nodeName}/entitlements](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/License/getLicenseEntitlements)

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
```

Sample request body: Empty

Sample Curl:

```bash
curl --location 'https://demo.microstrategy.com/MicroStrategyLibrary/api/license/iServer/nodes/env-000000laio1use1/entitlements' \
--header 'X-MSTR-AuthToken: f28f3f0eh0a6f32a2qkhcecs66' \
--header 'licenseKey: aaaaa444444444ccc5755555555566666'
```

Sample Response Body:

```json
{
  "bypassAudit": false,
  "bypassCpuControls": false,
  "contractId": 1,
  "edition": "Enterprise",
  "enableDailyReport": false,
  "enableKeyLevelEvaluation": true,
  "internal": true,
  "licenseKeyGroup": 1,
  "platform": "No Platform",
  "preRelease": false,
  "products": {
    "intelligenceModule": [
      {
        "count": 2,
        "duration": 0,
        "name": "Server - Intelligence",
        "period": 0,
        "type": "CPU"
      }
    ]
  },
  "registrationDisabled": false,
  "AWS": true,
  "DSI": 0,
  "enabledPOC": true,
  "POCExpireDate": "2023-06-04T00:00:00Z",
  "installationType": "Term License",
  "key": "aaaaa*********************66666",
  "vCPUs": false
}
```

Sample Response Code: 200
