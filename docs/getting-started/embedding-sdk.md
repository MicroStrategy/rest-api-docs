---
title: Using REST API with Embedding SDK
description: You can use MicroStrategy REST API together with MicroStrategy Embedding SDK.
---

## What is the Embedding SDK?

The Embedding SDK allows you to quickly integrate a MicroStrategy dashboard into a web application in a responsive manner. It also provides resources to add functionality such as controlling navigation, retrieving and applying filters, setting properties, and managing events, and supports different authentication environments.

## Common use cases of REST API with Embedding SDK

There are countless ways to use REST API with Embedding SDK. You might want to use the REST API with Embedding SDK in the following use cases.

- Embedding SDK support auth token and identity token. You will need to use REST API to create an auth token or identity token.
- Your dashboard contains prompts. You can use REST API to create a dashboard instance, answer prompts, then use the Embedding SDK with the dashboard instance ID, so that the prompts will not show again.
- You want to build your own filter panel on your hosting page. You can use REST API to create a dashboard instance, get the filter definition, apply filter selections on your dashboard instance, then use Embedding SDK with the dashboard instance ID.

:::tip

Check out the [Embedding SDK Documentation](https://microstrategy.github.io/embedding-sdk-docs/) for how to use Embedding SDK.

Start building your application using the [Embedding SDK Playground](https://microstrategy.github.io/playground/). The [Playground User Manual](https://github.com/MicroStrategy/playground) provides the instructions for how to get started.

:::
