---
title: Auto Agent APIs
description: This page contains a summary of REST APIs for the "agent" endpoint. You can use REST API requests to interact with Auto Agents.
---

<Available since="Strategy (March 2025)" />

Strategy (March 2025) introduces an enhanced set of APIs designed to leverage the agent capabilities.

The Auto Agent APIs provide a seamless way to interact with agents, allowing you to ask questions, retrieve answers, and get historical chat messages from agents. Additionally, the APIs offer the ability to get suggested questions, enhancing the user experience by providing relevant queries and answers efficiently.

Strategy (June 2025) adds support for retrieving images within answers, allowing for richer, more visual responses from the Auto Agent system. This feature includes customizable resolution settings to optimize image quality based on your specific needs.

If you do not specify an Agent in your API requests, the system will automatically route your questions to the most appropriate Agent based on the context of your query. This intelligent routing ensures that users receive the most relevant responses without needing to manually select an Agent.

### Key Features

- **Ask a question to the agent**: Submit a question to the agent. This API has been enhanced from the existing question API.
- **Get answer by the question ID**: Retrieve the answer to a question using its ID. This API has been enhanced from the existing question API.
- **Get chat history from the agent**: Obtain all historical chat messages from the agent.
- **Get suggested questions from the agent**: Get recommended questions based on the context from the agent.
- **Image support in answers**: Request and retrieve images as part of answers from agents, with customizable resolution settings. (Available from Strategy (June 2025))
- **Get attributes and metrics from the agent**: Fetch the column information (attributes and metrics) from the agent, which can be used for auto-complete functionality in user inputs. (Available from Strategy (July 2025))

For further details on how to use these APIs, please refer to the following sections of this manual:

- [Ask a question to the agent](./post-question.md)
- [Get answer by the question ID](./get-question-by-id.md)
- [Get chat history from the agent](./get-questions-by-bot.md)
- [Get suggested questions from the agent](./post-suggestion.md)
- [Get image from an answer](./get-image-of-answer.md)
- [Get attributes and metrics from the agent](./get-columns.md)
