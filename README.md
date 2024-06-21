<!-- markdownlint-disable-file MD041 -->

# REST API Docs

Documentation for REST API

## Summary

### Ownership

<!-- Begin: Owner
    If a repo belongs to several teams write down the team that owns the largest proportion.
    This information can be found here:
    https://microstrategy.atlassian.net/wiki/spaces/DevOps/pages/1070727930/CI+pipelines+Point+of+Contacts

    There should also be a Contact (a member of the team) and a DevOps POC (a member of the DevOps team)

    Example:
        Team: TEC-CT-Web-Library-CTC
        Team: TEC-SR-Gateways-Framework
        Contact: Fred Bloggs (fbloggs)
        DevOps POC: Joe Bloggs (jbloggs)
-->

Team: ENG-AC-Embedded-Integrations-HQ

Contact: Darren Holmblad (dholmblad)

DevOps POC: Kewei Hu (khu)

<!-- End: Owner -->

## Usage

### Requirements

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running
  `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions
  on a single machine installed.
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

### Step one

```bash
git clone https://github.com/MicroStrategy/rest-api-docs.git
```

### Step two

Install the site and run an initial build command:

```bash
cd rest-api-docs
yarn
yarn start
```

This command will start a local server and you'll be able to work on your site with hot reloads and
some nice Browsersync features. 💥

---

## Contributing

### Start contributing right now

We accept a lot of [different contributions](CONTRIBUTING.md/#types-of-contributions-memo),
including some that don't require you to write a single line of code.

#### Click **Edit** from docs

As you're using Embedding SDK Docs, you may find something in an article that you'd like to add to,
update, or change. Click on **Edit** button, which could be found on the top right corner of the
article, to navigate directly to that article in the codebase, so that you can begin making your
contribution.

#### Open an issue

If you've found a problem, you can open an issue
[here](https://github.com/MicroStrategy/rest-api-docs/issues).

#### Solve an issue

If you have a solution to one of the open issues, you will need to fork the repository and submit a
pull request. For more details about this process, please check out
[Getting started with contributing](CONTRIBUTING.md).

#### And that's it

That's how you can get started easily as a member of the MicroStrategy Embedding SDK Documentation
community. :sparkles:

If you want to know more, or you're making a more complex contribution, check out
[Getting started with contributing](CONTRIBUTING.md).
