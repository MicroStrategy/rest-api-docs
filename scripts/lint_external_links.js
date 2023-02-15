// This script checks the links used in markdown.
// Currently, it supports links to API Explorer page (Swagger) and Postman.com.
// Limitations:
// 1. This script depends on the way Swagger UI builds links in html page. If Swagger UI implementation changed, we will need to fix this script.
// 2. This script depends on the way postman.com builds links.
// We might check other external links in the future.

const https = require("https");
const fs = require("fs");
const net = require("net");
const { exit } = require("process");

// This is the url to download api spec. We will try to use a local copy if exists.
const openAPIUrl = "https://demo.microstrategy.com/MicroStrategyLibrary/api/openapi.json";
// Local cache file location.
const openAPIFilepath = "./openapi.json";
// Swagger documentation base url
const swaggerBaseUrlNoIndex = "https://demo.microstrategy.com/MicroStrategyLibrary/api-docs";
const swaggerBaseUrl = `${swaggerBaseUrlNoIndex}/index.html`;

// This postman.json contains the folder information used by the postman.com for our workspace.
// It is fetched from network trace of the website. There is no REST API or link to fetch it yet.
// We will need to save a new copy if folder or request id changes.
const postmanFilepath = "./postman.json";

// Postman base url
const postmanBaseUrl = "https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/";

// Regex pattern to find links in markdown.
const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * This function will download OpenAPI spec, store a local copy, and return the promise of file content in string.
 * @returns the promise of file content in string
 */
const downloadOpenAPIJson = async () =>
  new Promise((resolve) => {
    https
      .get(openAPIUrl, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          fs.writeFileSync("openapi.json", data);
          resolve(data);
        });
      })
      .on("error", (err) => {
        console.error(err);
      });
  });

/**
 * Check if local cache file. If not, download one from the remote.
 * If you want to use a local file, save a copy.
 * If you want to re-download the spec file, delete the local copy.
 * @returns string
 */
const loadOpenAPIJson = () => {
  if (fs.existsSync(openAPIFilepath)) {
    return fs.readFileSync(openAPIFilepath);
  }
  return downloadOpenAPIJson(openAPIUrl);
};

/**
 * Collect a set of all possible swagger links.
 * @param {Set<string>} linkSet
 * @param {JSON} json
 * @returns
 */
const collectSwaggerLinks = (linkSet, json) => {
  // Add swagger base url
  linkSet.add(swaggerBaseUrlNoIndex);
  linkSet.add(`${swaggerBaseUrlNoIndex}/`);
  linkSet.add(swaggerBaseUrl);

  const { paths } = json;
  Object.keys(paths).forEach((url) => {
    const path = paths[url];
    const innerUrl = url;
    Object.keys(path).forEach((method) => {
      const request = path[method];
      const { tags } = request;
      if (!tags.length) {
        throw Error("No tags");
      }
      const [tag] = tags;
      let operationId = "";
      if (request.operationId) {
        operationId = request.operationId;
      } else {
        // If operationId is not defined. This is what Swagger UI uses to generate HTML.
        operationId = method + innerUrl.replace(/[{}/]/g, "_");
      }

      // It is ok to not encode space. The link can point to an operation, or just a category.
      linkSet.add(`${swaggerBaseUrl}#/${tag}/${operationId}`);
      linkSet.add(`${swaggerBaseUrl}#/${encodeURIComponent(tag)}/${operationId}`);
      linkSet.add(`${swaggerBaseUrl}#/${tag}`);
      linkSet.add(`${swaggerBaseUrl}#/${encodeURIComponent(tag)}`);
    });
  });
};

/**
 * Load the postman json file locally.
 * @returns string
 */
const loadPostmanJson = () => {
  if (fs.existsSync(postmanFilepath)) {
    return fs.readFileSync(postmanFilepath);
  }
  throw Error("postman json file is not found!");
};

/**
 * Collect a set of all possible links in the postman folder json.
 * @param {Set<string>} linkSet
 * @param {JSON} folderJson
 */
const collectPostmanLinksForFolder = (linkSet, folderJson) => {
  // add folder link
  linkSet.add(`${postmanBaseUrl}folder/${folderJson.id}`);

  if (folderJson.folders) {
    folderJson.folders.forEach((json) => {
      collectPostmanLinksForFolder(linkSet, json);
    });
  }

  if (folderJson.requests) {
    folderJson.requests.forEach((requestJson) => {
      // add request link
      linkSet.add(`${postmanBaseUrl}request/${requestJson.id}`);
    });
  }
};

/**
 * Collect a set of all possible links in the postman json.
 * @param {Set<string>} linkSet
 * @param {JSON} json
 */
const collectPostmanLinks = (linkSet, json) => {
  linkSet.add(postmanBaseUrl);

  const collections = json.data;

  collections.forEach((collection) => {
    // add collection link
    linkSet.add(`${postmanBaseUrl}collection/${collection.id}`);

    if (collection.folders) {
      collection.folders.forEach((folderJson) => {
        collectPostmanLinksForFolder(linkSet, folderJson);
      });
    }
    // We don't put request directly in collection. Skip requests here.
  });
};

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
 * @param {Set<string>} linkSet
 * @param {string} filePath
 * @returns
 */
const lintMarkdown = (linkSet, filePath) => {
  let hasWrongLink = false;
  // Load markdown, find all links, and check if the link is in linkSet
  const matches = fs.readFileSync(filePath).toString().matchAll(linkPattern);
  Array.from(matches).forEach((match) => {
    const link = match[2];
    if (link.startsWith("http://") || link.startsWith("https://")) {
      try {
        const url = new URL(link);
        if (net.isIP(url.hostname) > 0) {
          // Disable links to IP address
          console.log(`Should not link to IP address: "${link}" in file "${filePath}".`);
          hasWrongLink = true;
        } else if (link.startsWith(swaggerBaseUrlNoIndex) || link.startsWith(postmanBaseUrl)) {
          // Ignore query parameters.
          if (!linkSet.has(link.split("?")[0])) {
            // If the link is not in the link set, it is incorrect.
            console.log(`The link "${link}" is incorrect in file "${filePath}".`);
            hasWrongLink = true;
          }
        } else if (link.includes("/api-docs/") && !link.startsWith(swaggerBaseUrlNoIndex)) {
          // If use api-docs url, must starts with swaggerBaseUrlNoIndex.
          // This is to disallow http, other domains, and other server url path.
          console.log(`The link "${link}" is incorrect in file "${filePath}".`);
          hasWrongLink = true;
        }
      } catch (e) {
        // Catch invalid url.
        console.log(`Invalid url: "${link}" in file "${filePath}".`);
        hasWrongLink = true;
      }
    }
  });

  return !hasWrongLink;
};

// Main function.
const main = async () => {
  let failed = false;
  console.log("Checking external links...\n");

  const linkSet = new Set();

  // collect links for openapi.json
  const openAPIjson = loadOpenAPIJson();
  collectSwaggerLinks(linkSet, JSON.parse(openAPIjson));

  // collect links for postman.com
  const postmanJson = loadPostmanJson();
  collectPostmanLinks(linkSet, JSON.parse(postmanJson));

  const markdownFiles = generateMarkdownFileList("./docs");

  markdownFiles.forEach((file) => {
    if (!lintMarkdown(linkSet, file)) {
      failed = true;
    }
  });

  console.log("\nFinished checking external links.");
  exit(failed ? 1 : 0);
};

main();
