<!-- markdownlint-disable-file MD041 -->

# Contributing to this repository

- [Getting started](#getting-started)
  - [Use the `Edit` button](#use-the-edit-button)
  - [Don't see your issue? Open one](#dont-see-your-issue-open-one)
  - [Ready to make a change? Fork the repo](#ready-to-make-a-change-fork-the-repo)
  - [Make your update](#make-your-update)
  - [Open a pull request](#open-a-pull-request)
  - [Submit your PR & get it reviewed](#submit-your-pr--get-it-reviewed)
  - [Your PR is merged](#your-pr-is-merged)
  - [Keep contributing as you use MicroStrategy Docs](#keep-contributing-as-you-use-microstrategy-docs)

## Getting started

Before you begin:

- Have you read the [code of conduct](CODE_OF_CONDUCT.md)?
- Check out the [existing issues](https://github.com/MicroStrategy/rest-api-docs/issues) & see if we [accept contributions](#memo-types-of-contributions) for your type of issue.

### Use the 'Edit' button

Navigating a new codebase can be challenging, so we're making that a little easier. As you're using this REST API Docs, you may come across an article that you want to make an update to. You can find and click the **Edit** button on the top right corner on that article, which will take you to the file in this repo where you'll make your changes.

Before you make your changes, check to see if an [issue exists](https://github.com/MicroStrategy/rest-api-docs/issues/) already for the change you want to make.

### Don't see your issue? Open one

If you spot something new, open an issue [here](https://github.com/MicroStrategy/rest-api-docs/issues). We'll use the issue to have a conversation about the problem you want to fix.

### Ready to make a change? Fork the repo

:warning: Please do not use the "Add file" or directly edit the file and create PR on GitHub. It is recommended to clone the forked repo to local and then modify. In this way, you can leverage the linters provided by us to fix some styling issues or typos.

Fork using the command line:

- [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

Fork using GitHub Desktop:

- [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
- Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

### Make your update

Make your changes to the file(s) you'd like to update. Here are some tips and tricks for [using the docs codebase](#working-in-the-microstrategyrest-api-docs-repository).

- Are you making changes to the application code? You'll need **Node.js v16** to run the site locally. See [contributing/development.md](contributing/development.md).
- Are you contributing to markdown? We use [Markdown](https://www.markdownguide.org/basic-syntax/).

### Open a pull request

When you're done making changes and you'd like to propose them for review, use the [pull request template](#pull-request-template) to open your PR (pull request).

### Submit your PR & get it reviewed

- Once you submit your PR, others from the Docs community will review it with you. The first thing you're going to want to do is a [self review](#self-review).
- After that, we may have questions, check back on your PR to keep up with the conversation.

### Your PR is merged

Congratulations! The whole MicroStrategy community thanks you. :sparkles:

Once your PR is merged, you will be proudly listed as a contributor in the [contributor chart](https://github.com/MicroStrategy/rest-api-docs/graphs/contributors) and at the bottom of the page you contributed to.

### Keep contributing as you use MicroStrategy Docs

Now that you're a part of the MicroStrategy Docs community, you can keep participating in many ways.

**Learn more about contributing:**

- [:memo: Types of contributions](#memo-types-of-contributions)
  - [:beetle: Issues](#beetle-issues)
  - [:hammer_and_wrench: Pull requests](#hammer_and_wrench-pull-requests)
  - [:question: Support](#question-support)
  - [:earth_asia: Translations](#earth_asia-translations)
- [Starting with an issue](#starting-with-an-issue)
- [Opening a pull request](#opening-a-pull-request)
- [Working in the MicroStrategy/rest-api-docs repository](#working-in-the-microstrategyrest-api-docs-repository)
- [Reviewing](#reviewing)
  - [Self review](#self-review)
  - [Test it locally](#test-it-locally)
  - [Pull request template](#pull-request-template)
  - [Suggested changes](#suggested-changes)
- [Windows](#windows)

## :memo: Types of contributions

You can contribute to the REST API Docs content and site in several ways. This repo is a place to discuss and collaborate on MicroStrategy REST API Docs! Our small, but mighty :muscle: docs team is maintaining this repo, to preserve our bandwidth, off topic conversations will be closed.

### :beetle: Issues

If you've found something in the content or the website that should be updated, search open issues to see if someone else has reported the same thing. If it's something new, open an issue [here](https://github.com/MicroStrategy/rest-api-docs/issues). We'll use the issue to have a conversation about the problem you want to fix.

### :hammer_and_wrench: Pull requests

A [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) is a way to suggest changes in our repository.

When we merge those changes, they should be deployed to the live site within 24 hours. :earth_africa: To learn more about opening a pull request in this repo, see [Opening a pull request](#opening-a-pull-request) below.

### :question: Support

We are a small team working hard to keep up with the documentation demands of a continuously changing product. Unfortunately, we just can't help with support questions in this repository. If you are experiencing a problem with MicroStrategy, unrelated to our documentation, please [contact MicroStrategy Support directly](https://www.microstrategy.com/support). Any issues, or pull requests opened here requesting support will be given information about how to contact MicroStrategy Support, then closed and locked.

### :earth_asia: Translations

This website is internationalized and available in multiple languages. The source content in this repository is written in English. We integrate with an external localization platform and work with professional translators to localize the English content.

**We do not currently accept contributions for translated content**, but we hope to in the future.

## Starting with an issue

You can browse existing issues to find something that needs help!

## Opening a pull request

You can use the GitHub user interface :pencil2: for some small changes, like fixing a typo or updating a readme. You can also fork the repo and then clone it locally, to view changes and run your tests on your machine.

## Working in the MicroStrategy/rest-api-docs repository

Here's some information that might be helpful while working on a Docs PR:

- [Development](contributing/development.md) - This short guide describes how to get this app running on your local machine.
- [Content style guide for GitHub Docs](contributing/content-style-guide.md) - This guide covers information about how we style our content and images. It also links to the resources we use for general style guidelines.

## Reviewing

We (usually the docs team, but sometimes MicroStrategy product managers, engineers, or supportocats too!) review every single PR. The purpose of reviews is to create the best content we can for people who use MicroStrategy.

:yellow_heart: Reviews are always respectful, acknowledging that everyone did the best possible job with the knowledge they had at the time.

:yellow_heart: Reviews discuss content, not the person who created it.

:yellow_heart: Reviews are constructive and start conversation around feedback.

### Self review

You should always review your own PR first.

For content changes, make sure that you:

- [ ] Confirm the changes pass linter checks by running `yarn lint`.
- [ ] Make sure your content is rendered as expected by running `yarn start`.
- [ ] Review the content for technical accuracy.
- [ ] Confirm your changes follow the [style guide](https://github.com/MicroStrategy/rest-api-docs/blob/main/contributing/content-style-guide.md).

### Test it locally

You should always test your changes locally if the changes are more than just fixing some wording.

Start the site locally, by running `yarn start` in the root folder of the project. The site will be started locally with URL `http://localhost:3000`. Visit the site to make sure it is displayed well.

### Pull request template

When you open a pull request, you must fill out the ["Ready for review" template](./.github/pull_request_template.md) before we can review your PR. This template helps reviewers understand your changes and the purpose of your pull request.

### Suggested changes

We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.

As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix based systems use `\n`. Therefore when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
1. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
1. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
