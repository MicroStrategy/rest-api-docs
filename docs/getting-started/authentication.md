---
sidebar_label: Authentication
title: Authentication
description: The REST API provides authentication endpoints to initiate a session with the Intelligence Server. It supports multiple authentication modes such as Standard, LDAP, SAML, and so on.
---

The REST API provides authentication endpoints to initiate a session with the Intelligence Server. It supports multiple authentication modes such as Standard, LDAP, SAML, and so on.

The diagram below shows the workflow when the MicroStrategy REST API is used to authenticate a user.

![REST_Login_Workflow](../images/REST_Login_Workflow.png)

1. An API client invokes a REST API login endpoint (/api/auth/login) providing the information required for authentication. This information includes the credentials needed to log in and the authentication mode to use, as well as other optional information. You specify the authentication mode using the `loginMode` parameter in the body of the request.

1. The REST Server authenticates the user by validating the user's credentials with the Intelligence Server and returns an authorization token `X-MSTR-AuthToken`) in the response header. The application container (for example,Tomcat) also returns a session cookie (for example, `JSESSIONID`) on the first request to the server.

1. The client needs to persist the authorization token and all cookies (session, load balancer and so on), and provide them in each subsequent request. In the case of a web application, the browser handles the cookies.

:::tip

The MicroStrategy REST server maintains an HTTP session for every client connecting to it.

:::

To use the REST API for session management, you should be familiar with the following terms:

- **Authorization token**

Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client. Using an authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions.

- **Session cookie**

The MicroStrategy REST framework currently relies on an HTTP session. The Java EE server (for example, Tomcat) sends a session cookie in the response header for the client to maintain. If a browser is handling requests, it will also handle the cookies. However, if you are using your own client, you need to maintain the cookie and include it in further requests, together with the authorization token.

- **Session timeout**

There are two timeout settings that need to be considered.

- HTTP session timeout

  The HTTP session timeout is managed by the application container. It can be configured in `/WEB-INF/web.xml.`

  Sample code is shown below for configuring the HTTP session timeout in the web.xml file when Tomcat is used as the application container.

  ```html
  <web-app>
    ...
    <session-config>
      <session-timeout>30</session-timeout>
    </session-config>
    ...
  </web-app>
  ```

The value of the timeout is set in minutes.

- Intelligence Server session timeout

  The Intelligence Server session timeout can be configured in the Intelligence Server settings.

  :::tip

  The value of the HTTP session timeout must be greater than the value of the Intelligence Server session timeout.

  :::
