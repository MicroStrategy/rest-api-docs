---
title: Benefits of Creating a Dataset Incrementally with Multiple Requests
description: The benefits of creating a dataset incrementally with multiple requests.
---

The incremental approach to making external data available to MicroStrategy, using multiple requests, has a variety of benefits:

- You can create multiple tables in a dataset, rather than being limited to a single table.
- The actions for uploading data and publishing the dataset have been separated, and data can be uploaded in separate chunks. This provides scalability and better performance and is very important when you are working with very large datasets.
- You can publish the cube at any time, allowing you to choose the optimum time for publication.
- You can cancel publication of a dataset at any time before it finishes.
- The workflow is more RESTful.
