---
title: Next-Gen AI
description: This page contains a summary of REST APIs for the "auto bots" endpoint. You can use REST API requests to interact with Auto Bots.
---

<Available since="Strategy ONE (March 2025)" />

With the release of Strategy ONE (March 2025), we have introduced an enhanced set of APIs designed to leverage the capabilities of Next-Gen AI. These APIs are built on top of the existing question APIs and are compatible with both the Next-Gen AI and the legacy Auto Bots.

The Next-Gen AI APIs provide a seamless way to interact with Next-Gen AI, allowing you to ask questions, retrieve answers, and get historical chat messages from specific bots. Additionally, the APIs offer the ability to get suggested questions, enhancing the user experience by providing relevant queries and answers efficiently.

Starting from Strategy ONE (June 2025), we've added support for retrieving images within answers, allowing for richer, more visual responses from the Next-Gen AI system. This feature includes customizable resolution settings to optimize image quality based on your specific needs.

### Key Features

- **Ask a question to a specific bot**: Submit a question to the specific Auto Bot. This API has been enhanced from the existing question API.
- **Get answer by the question ID**: Retrieve the answer to a specific question using its ID. This API has been enhanced from the existing question API.
- **Get chat history from a specific bot**: Obtain all historical chat messages from a specific bot.
- **Get suggested questions from a specific bot**: Get recommended questions based on the context from a specific bot.
- **Image support in answers**: Request and retrieve images as part of answers from Next-Gen AI, with customizable resolution settings. (Available from Strategy ONE (June 2025))

For further details on how to use these APIs, please refer to the following sections of this manual:

- [Ask a question to a specific bot](./post-question.md)
- [Get answer by the question ID](./get-question-by-id.md)
- [Get chat history from a specific bot](./get-questions-by-bot.md)
- [Get suggested questions from a specific bot](./post-suggestion.md)
- [Get image from an answer](./get-image-of-answer.md)
