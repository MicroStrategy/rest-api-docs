<!-- markdownlint-disable-file MD041 -->

# Development Guidelines

## Requirements

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Getting Started

1. Fork the repo.
1. Clone the forked repo to your local machine.
1. Run `yarn` in the directory.
1. Run `yarn start` to view the documentation locally.

## Content Styling Guidelines

We want to keep our documentation consistent in styling. More details could be found [here](./content-style-guide.md).

## Adding new content

- All documentation markdown files are located within `./docs/`.
- Every documentation markdown file should have the front matter. You should have required `title` and optional `sidebar_label`. Please see the example below:

  ```text
  ---
  title: Workflow Sample - Authentication
  sidebar_label: Authentication
  description: a summary of the page to provide better text snippet in the search result. This is for SEO purpose.
  ---
  ```

  - `title` is the `h1` heading that shows on the HTML page.
  - `sidebar_label` is the title you want to show in the sidebar navigation.
  - `description` is the summary for this page. It provides better text snippet in the search result. This is only for SEO purpose.

  Note: Don't use backticks in front matter. The text won't be surrounded by code background effect.

### Pages ordering on the navigation sidebar and pagination buttons

This is all based on the ordering in `sidebars.js` file.

There are three main ways to add your new doc into the sidebar:

1. If you don't mind the `title` and `sidebar_label` are the same, you can directly add `id` of your doc in `sidebars.js`. The `id` is the file path from `/docs` folder. For example, `add-functionality/add-nav`.

1. If you only want to modify the `sidebar_label` value, you can use the code snippet below:

```json
{
  "type": "doc",
  "id": "whats-new",
  "label": "What's New"
}
```

1. If the doc is the index of the section, you can use the code snippet below:

```json
{
  "type": "category",
  "link": {
    "type": "doc",
    "id": "support-for-different-authentication-environments/support-for-different-authentication-environments"
  },
  "label": "Support for Different Authentication Environments",
  "items": ["support-for-different-authentication-environments/guest-authentication-mode-only", "support-for-different-authentication-environments/multiple-modes", "support-for-different-authentication-environments/authentication-saml", "support-for-different-authentication-environments/authentication-custom"]
}
```

1. If you want to update an existing doc, the versioned docs locate in `/versioned_doc`, the current docs locate in `/docs`.

1. If you want to delete an existing version, you need to perform three steps:
   1. Remove the version from `versions.json`.
   1. Delete the versioned docs directory. Example: `versioned_docs/version-1.0.0`.
   1. Delete the versioned sidebars file. Example: `versioned_sidebars/version-1.8.0-sidebars.json`

More information could be found in `sidebars.js` or in the ["Sidebar" section](https://docusaurus.io/docs/sidebar) of the Docusaurus official documentation.

## How to do versioning

Run `yarn run docusaurus docs:version VERSION_NAME` to tag a new version.

Detailed information can be found on [Docusaurus Docs](https://docusaurus.io/docs/versioning#tutorials).

## Testing your changes

You can run `yarn start` to test your local changes. Make sure everything looks okay before creating a Pull Request.

You can also run `yarn lint` before committing to make sure no errors exist.

## Committing your changes

When you try to commit your changes, `yarn lint:eslint`, `yarn lint:prettier`, and `yarn lint:markdownlint` will be run in sequence. If any error is detected, the commit will fail. You need to follow the error messages and suggestions of changes to fix all the errors before committing them.

## Creating Pull Request

When you finish making changes, and you'd like to propose them for review, fill up the [pull request template](../.github/pull_request_template.md) to open your PR (pull request). You can find more detail on creating a PR in the official GitHub documentation [here](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
