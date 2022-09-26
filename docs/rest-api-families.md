---
sidebar_label: REST API Families
title: MicroStrategy REST API Families
description: The MicroStrategy REST API Explorer lets you drill down into the individual APis. You can see HTTP headers and input and output information for each request, and enter values to try out the APIs.
---

The [MicroStrategy REST API Explorer](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/) lets you drill down into the individual APis. You can see HTTP headers and input and output information for each request, and enter values to try out the APIs.

## [Authentication API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication)

The Authentication API family allows developers to authenticate users against the Intelligence Server or third-party servers.

- [Login API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Authentication/postLogin)

Developers can use the Login API for authentication—to create and terminate sessions. Users are authenticated against the Intelligence Server that is configured as the default in the REST server configuration. Each successful authentication attempt returns an authorization token which can be used to authorize subsequent requests. The authorization token must be used in conjunction with an HTTP session in order to authorize the caller.

- [Sessions API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Authentication/sessionSessionIdGet)

Developers can use the Sessions API to obtain information about the active session such as user privileges, information about the currently authenticated user, and whether the session is still alive.

- [Identity Token API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Authentication/getIdentityTokenInfo)

Developers can use the Identity Token API to authenticate using third-party applications. Once a user has been authenticated with the Login API, an identity token can be requested and passed to another application. The third-party application can then make a request to authenticate on behalf of the user, generating a new authorization token and an HTTP session.

## [Attribute API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes)

The Attribute API family allows developers to obtain an attribute's definition, create a attribute object, and update the definition of an existing attribute.

## [Browsing API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Browsing)

The Browsing API family allows developers to leverage traditional metadata folder browsing through the Folders endpoints. It also exposes the ability to perform a search with a wide variety of search criteria.

## [Changesets API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset)

The Changesets API family allows developers to create, commit, and delete changesets. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually the changes in the changeset should be either committed as one transaction, or abandoned altogether. A changeset is used in requests to read, create, and/or update objects through the modeling APIs such as filters, facts, attributes, and so on.

## [Consolidations API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Consolidations)

The Consolidations API family allows developers to obtain a consolidation’s definition, create a consolidation object, and update the definition of an existing consolidation.

## [Cubes API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes)

The Cubes API family allows developers to create a report instance based on a cube and incrementally fetch slices of the report instance. The Cubes API lets developers leverage the performance advantage of in-memory cubes. The cube can be either an Intelligent Cube or a DDA(Direct Data Access)/MDX-based Live Connect cube. Together with the Reports API, this API is often referred to as the JSON Data API.

## [Custom Groups API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups)

The Custom Groups API family allows developers to obtain a custom group's definition, create a custom group object, and update the definition of an existing custom group.

## [Datasets API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasets)

The Datasets API family allows developers to push external data directly to the MicroStrategy Intelligence Server. This data can be used to create a dataset or to modify an existing dataset in a Data Import cube. Once the data has been pushed to the Intelligence Server, developers can use the Cubes API or the Reports API to manipulate that data. This API is often referred to as the Push Data API.

## [Datasource Management API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management)

The Datasource Management API family allows administrators to create, update, and delete database connections in the MicroStrategy metadata. This functionality can be used to automate the update of data source credentials.

## [Derived Elements API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Derived%20Elements)

The Derived Elements API family allows developers to obtain a derived element's definition, create a derived element object, and update the definition of an existing derived element.

## [Dossiers and Documents API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents)

The Dossiers and Documents API family exposes functionality that allows the execution and exporting of dossiers and documents to a variety of export formats.

## [Emails API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Emails)

The Emails API family allows administrators and developers to send emails using MicroStrategy Distribution Services email transmitters.

## [Facts API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Facts)

The Facts API family allows developers to obtain a fact's definition, create a fact object, and update the definition of an existing fact.

## [Filters API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters)

The Filters API family allows developers to obtain a filter's definition, create a filter object, and update the definition of an existing filter.

## [Library API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Library)

The Library API family exposes the publishing workflow, allowing requests to publish or un-publish to a set of users/usergroups and obtain the library for the authenticated user.

## [Object Management API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Object%20Management)

The Object Management API family exposes the ability to programmatically manage objects in the MicroStrategy metadata. Endpoints can be used to certify or de-certify a report or dossier, delete objects, and update object info for any object type.

## [Packages API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages)

The Packages API family allows you to create and import migration packages.

## [Prompts API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts)

The Prompts API family allows developers to obtain a prompt's definition, create a prompt object, and update the definition of an existing project.

## [Projects API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects)

The Projects API family allows an authenticated user to obtain the list of projects which they have access to. It also exposes functionality for an administrator to administer the quota settings for users and projects.

## [Reports API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports)

The Reports API family allows developers to retrieve the data from a specific report. The Reports API currently supports reports with attributes on rows and metrics on columns. Together with the Cubes API, this API is often referred to as the JSON Data API.

## [Runtimes API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Runtimes)

The Runtimes API family allows developers to obtain a runtime's definition, create a runtime object, update the definition of an existing runtime, and delete a runtime object. The runtime objects currently work with the containerized Intelligence Server.

## [Schema API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema)

The Schema API family allows developers to obtain the schema lock status, lock the schema, unlock the schema, and reload or update the schema synchronously or asynchronously.

## [Security Filters API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters)

The Security Filters API family allows the retrieval, creation, and update of security filter objects through the Modeling service.

## [Security Roles API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Roles)

The Security Roles API family allows administrators and developers to obtain a list of roles, its members and current privileges, and to manage security role membership.

## [System Administration API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration)

The System Administration API family allows administrators and developers to programmatically configure the settings related to the MicroStrategy Library web application. For example, this functionality can be used to configure default values related to the authentication process, set up trust relationships to the Intelligence Server, and more.

## [System Hierarchy API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Hierarchy)

The System Hierarchy API family allows developers to obtain and update an attribute's relationships.

## [Tables API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables)

The Tables API family allows developers to obtain a table's definition, create a table object, and update the definition of an existing table.

## [User Hierarchies API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies)

The User Hierarchies API family allows developers to obtain a user hierarchy’s definition, create a user hierarchy object, and update the definition of an existing user hierarchy.

## [User Management API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management)

The User Management API family allows developers to create, update, and delete users and usergroups; perform usergroup membership management; and manage membership within Security Roles. This functionality can be used to automate user creation and management in conjunction with the onboarding process.
