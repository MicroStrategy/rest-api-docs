// This script check the pattern we used for Endpoints.
// This is a correct example:
// Endpoint: [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin)
// We detect the following common errors.
// 1. Endpoint should be one word.
// 2. Should use "Endpoint: " prefix.
// 3. Should not use backticks in []
// 4. The verb should be all capitalized.
// 5. The path starts with /api/
// 6. Should always have link for Endpoints.
// The reachability of the link is not checked in this script.

const fs = require("fs");
const { exit } = require("process");

// Swagger documentation base url
const swaggerBaseUrlNoIndex = "https://demo.microstrategy.com/MicroStrategyLibrary/api-docs";

const HTTPVerbs = ["GET", "POST", "PUT", "PATCH", "DELETE"];
/**
 * Generate the list of markdown files to check.
 * @param {string} folderPath
 * @returns Array of markdown files' filepaths.
 */
const generateMarkdownFileList = (folderPath) => {
  const markdownFiles = [];
  fs.readdirSync(folderPath).forEach((file) => {
    const fullPath = `${folderPath}/${file}`;
    if (fs.lstatSync(fullPath).isDirectory()) {
      markdownFiles.push(...generateMarkdownFileList(fullPath));
    } else if (file.endsWith(".md")) {
      markdownFiles.push(fullPath);
    }
  });
  return markdownFiles;
};

/**
 * Check all the swagger docs link.
 * @param {string} filePath
 * @returns
 */
const lintMarkdown = (filePath) => {
  // Load markdown, find all links, and check if the link is in linkSet
  const content = fs.readFileSync(filePath).toString();

  const wrongPatterns = [
    {
      pattern: /[Ee]nd [Pp]oint/g,
      message: "Endpoint should be one word.",
    },
    {
      // If starts a line, it should be capitalized.
      pattern: /^(\s)*endpoint:/gm,
      message: "Endpoint should capitalized.",
    },
    {
      pattern: /^(\s)*Endpoint:[^ ]/gm,
      message: "Should have a space after endpoint.",
    },
    {
      pattern: /^(\s)*(POST|GET|PUT|PATCH|DELETE)\s+\/((?!api\/)[^\s\n`\]]*)/gm,
      message: "REST API should always start with /api/.",
    },
  ];

  const CorrectStart = /^Endpoint: (.*)/gm;
  // const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/;
  const linkPattern = /\[(`)?(\w+)\s(`)?([^`\n\b]*)(`)?\](\([^\n]*\))?/gm;

  let hasWrongEndpoint = false;

  wrongPatterns.forEach((p) => {
    // p.pattern.lastIndex = 0;
    const matches = Array.from(content.matchAll(p.pattern));
    matches.forEach((match) => {
      console.log(`${p.message} ${match[0]}`);
      hasWrongEndpoint = true;
    });
  });

  CorrectStart.lastIndex = 0;
  const matches = Array.from(content.matchAll(CorrectStart));
  const errors = [];
  matches.forEach((match) => {
    const matchedEndpoint = match[0];
    const markdownLink = match[1];

    linkPattern.lastIndex = 0;
    const matchGroups = linkPattern.exec(markdownLink);
    if (matchGroups) {
      // Check if the link is correct.
      const backtick1 = matchGroups[1];
      const verb = matchGroups[2];
      const backtick2 = matchGroups[3];
      const path = matchGroups[4];
      // link including brackets `()`
      const link = matchGroups[6];

      if (!HTTPVerbs.includes(verb)) {
        errors.push(`Wrong verb for HTTP Request: "${verb}".`);
        hasWrongEndpoint = true;
      }

      if (backtick1 || backtick2) {
        errors.push(`Link title should not use backticks: ${markdownLink}`);
        hasWrongEndpoint = true;
      }

      if (!path.startsWith("/api/")) {
        errors.push(`Path should always start with /api/: ${path}`);
        hasWrongEndpoint = true;
      }

      if (!link) {
        errors.push(`Missing link: ${matchedEndpoint}.`);
        hasWrongEndpoint = true;
      } else {
        // remove '(' and ')'
        const url = link.substring(1, link.length - 1);
        if (url.length === 0) {
          errors.push(`Link for Endpoint "${markdownLink}" should not be empty.`);
          hasWrongEndpoint = true;
        } else if (!url.startsWith(swaggerBaseUrlNoIndex)) {
          errors.push(`Link (${url}) should start with "${swaggerBaseUrlNoIndex}".`);
          hasWrongEndpoint = true;
        }
      }
    } else {
      // Missing link
      errors.push(`Missing link for endpoint: ${markdownLink}.`);
      hasWrongEndpoint = true;
    }
  });

  if (hasWrongEndpoint) {
    console.log(`\nThere are errors in file "${filePath}":`);
    errors.forEach((error) => console.log(error));
  }
  return !hasWrongEndpoint;
};

// Main function.
const main = async () => {
  let failed = false;

  const markdownFiles = generateMarkdownFileList("./docs");

  markdownFiles.forEach((file) => {
    if (!lintMarkdown(file)) {
      failed = true;
    }
  });

  exit(failed ? 1 : 0);
};

main();
