---
title: Using REST API with OAuth2
description:
  Learn how to implement OAuth2 authentication with Strategy REST API for secure and scalable
  client-server communication.
---

## Overview

Strategy's OAuth2 authentication provides a modern, secure, and standardized way for clients to
authenticate with the Library server. This implementation follows industry best practices and
simplifies the authentication process across different client applications.

## Why OAuth2?

### What is OAuth2?

OAuth2 (Open Authorization 2.0) is an industry-standard protocol for authorization. It enables
secure delegation of access to resources on behalf of a user without sharing their credentials.
OAuth2 is widely adopted for its flexibility, scalability, and ability to support various use cases,
such as single sign-on (SSO), third-party integrations, and API access.

At its core, OAuth2 operates through the exchange of tokens, which represent a user's authorization
to access specific resources. These tokens are issued by an authorization server and can be used by
client applications to interact with resource servers securely.

### Why Using OAuth2?

The traditional authentication methods required clients to implement multiple authentication modes
separately (standard mode, SAML, OIDC), each with its own API calls and cookie management. This
approach became increasingly complex as the number of clients grew, especially with integrations
like Tableau, PowerBI, and Google plugins.

One of the most significant limitations of the previous authentication system was its heavy reliance
on cookies. Every API request required maintaining and managing cookie headers, which introduced
several challenges:

- Session stickiness requirements
- Cross-Site Request Forgery (CSRF) vulnerabilities
- Complex cookie management across different domains
- Limited scalability in distributed systems

The new OAuth2-based authentication mechanism offers several key advantages:

1. **Unified Authentication Flow**: All clients and third-party integrations can use a single,
   standardized method to authenticate with the Library server, regardless of the authentication
   mode configured on the server.
1. **Improved Security**: Replaces cookie-based authentication with secure token-based
   authentication, eliminating CSRF risks and session stickiness requirements.
1. **Better Scalability**: Follows modern security best practices for distributed systems by using
   stateless token-based authentication instead of stateful cookie-based sessions.

## How to Use OAuth2

### Configure OAuth2

Please refer to [Configure OAuth 2.0 to log in to Library](https://www2.microstrategy.com/producthelp/Current/Workstation/en-us/Content/config_oauth2.htm)

### API Access

1. Firstly, we should implement the OAuth2 Authorization Workflow against the Authorization Endpoint
   (`oauth2/authorize`) and Token Endpoint (`oauth2/token`) to get a valid Access Token

1. Then the following Rest API calls will only require puting this Access Token in the Authorization
   Header (`X-MSTR-AuthToken`)

1. If the client doesn't want require User Login for a certain time, it can also persist a Refresh
   Token locally which can be used to refresh the Access Token later.

### Sample Projects

We provide a comprehensive
[OAuth2 Extension Sample](https://github.com/MicroStrategy/rest-api-samples) that demonstrates how
to implement OAuth2 authentication with Strategy REST API. This sample includes:

- Complete authentication flow implementation
- Token management examples
- Test API with Access Token
- Best practices for secure token storage
- Error handling and session management
