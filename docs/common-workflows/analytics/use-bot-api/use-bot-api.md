---
title: Bot APIs
description: This page contains a summary of REST APIs for the "bots" endpoint. You can use REST API requests to consume the chat bots.
---

<Available since="Strategy ONE (March 2024)" />

:::caution

The following Bot APIs are planned for future retirement. Therefore, Strategy recommends that you use the [Question with Bot Routing APIs](../question-with-bot-routing-api/question-api.md) instead:

- [Create a bot instance.](./create-a-bot-instance.md)
- [Ask for suggested questions](./ask-bot-instance-suggested-question.md)
- [Ask a bot question](./ask-bot-instance-question.md)
- [Get a bot question](./get-a-bot-question.md)
- [Delete a bot instance](./delete-a-bot-instance.md)

Reason:

- **Easy to use**: The [Question with Bot Routing APIs](../question-with-bot-routing-api/question-api.md) automatically manage bot instances, eliminating the need for users to manually create and manage bot instances through separate API calls.
- **More powerful**: The [Question with Bot Routing APIs](../question-with-bot-routing-api/question-api.md) provide intelligent bot routing by automatically selecting the most appropriate bot to handle a question. If you need to ask a specific bot, you can specify the bot ID as a query parameter. For more details, see [Ask a Question to Bots in the Application](../question-with-bot-routing-api/ask-question-to-bots-in-the-application.md).
- **Ongoing support and updates**: The [Question with Bot Routing APIs](../question-with-bot-routing-api/question-api.md) will continue to receive updates and support for future bot-related features. In contrast, the Bot APIs will not receive updates or new features and may eventually lead to exceptions as maintenance ends.

:::

For users interested in creating a custom chatbot experience utilizing the capabilities of Strategy AI, a suite of bot-related APIs is available. These APIs are designed to facilitate seamless integration of Strategy AI into nearly any application. By leveraging these tools, users can enhance their applications with advanced AI features quickly and efficiently. For further details on how to use these APIs, please refer to the following sections of this manual.

- [Get a bot's configuration](./get-bot-configuration.md)
- [Get a bot question list.](./get-bot-question-list.md)
- [Create a bot instance.](./create-a-bot-instance.md)
- [Ask for suggested questions](./ask-bot-instance-suggested-question.md)
- [Ask a bot question](./ask-bot-instance-question.md)
- [Get a bot question](./get-a-bot-question.md)
- [Delete a bot instance](./delete-a-bot-instance.md)
