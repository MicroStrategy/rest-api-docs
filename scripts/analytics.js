// API Analysis Scripts
// Features:
//  -a: list all APIs
//  -u: list all undocumented APIs
//  -uf: list all undocumented fields

const https = require("https");
const fs = require("fs");
const process = require("process");

// This is the url to download api spec. We will try to use a local copy if exists.
const specUrl = "https://demo.microstrategy.com/MicroStrategyLibrary/api/openapi.json";
// Local cache file location.
const specFilepath = "./openapi.json";
// Swagger documentation base url
const baseUrl = "https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html";

// RegEx pattern to find links in markdown.
const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * This function will download open api spec, store a local copy, and return the promise of file content in string.
 * @returns a Promise of string, which is the file content.
 */
const downloadSpec = async () =>
  new Promise((resolve) => {
    https
      .get(specUrl, (res) => {
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
 *
 * @returns a Promise of string, which is the file content.
 */
const loadSpec = async () => {
  try {
    if (fs.existsSync(specFilepath)) {
      return fs.readFileSync(specFilepath);
    }
    return downloadSpec(specUrl);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

/**
 * Generate a dictionary of all links.
 * @param {Object} linkDict A dictionary to store the link information.
 * @param {Object} json A json object for the OpenAPI spec.
 */
const generateLinkDict = (json) => {
  const linkDict = {};
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

      // It seems only the first tag is used.
      const [tag] = tags;
      let operationId = "";
      if (request.operationId) {
        operationId = request.operationId;
      } else {
        // If operationId is not defined. This is what Swagger UI uses to generate HTML.
        operationId = method + innerUrl.replace(/[{}/]/g, "_");
      }

      // It is ok to not encode space. But we always encode.
      linkDict[`${baseUrl}#/${encodeURIComponent(tag)}/${operationId}`] =
        `${method.toUpperCase()} ${innerUrl}`;
    });
  });
  return linkDict;
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
 * Check each markdown file, if the link is documented, delete it from linkDict.
 * @param {*} linkDict The dictionary to keep all the links.
 * @param {*} filePath The file path of the markdown file.
 */
const deleteDocumentedAPIFromLinkDict = (linkDict, filePath) => {
  // Load markdown, find all links, and check if the link is in linkDict
  const matches = fs.readFileSync(filePath).toString().matchAll(linkPattern);
  Array.from(matches).forEach((match) => {
    const link = match[2];
    if (link in linkDict) {
      // need to delete the link from passed in parameter `linkDict`
      // eslint-disable-next-line no-param-reassign
      delete linkDict[link];
    }
  });
};

/**
 * Find all APIs in OpenAPI spec.
 */
const findAllAPIs = async () => {
  const spec = await loadSpec();

  const linkDict = generateLinkDict(JSON.parse(spec));

  console.log(`There are total ${Object.keys(linkDict).length} APIs:`);
  Object.keys(linkDict).forEach((k) => {
    console.log(linkDict[k]);
  });
};

/**
 * Find all undocumented APIs in OpenAPI spec.
 */
const findUndocumentedAPIs = async () => {
  const spec = await loadSpec();

  const linkDict = generateLinkDict(JSON.parse(spec));

  const markDownFiles = generateMarkdownFileList("./docs");

  markDownFiles.forEach((file) => {
    deleteDocumentedAPIFromLinkDict(linkDict, file);
  });

  console.log(`There are ${Object.keys(linkDict).length} undocumented APIs:`);

  Object.keys(linkDict).forEach((k) => {
    console.log(linkDict[k]);
  });
};

/**
 * Find the missing description fields in the json object and all descendants.
 * @param {Array} missingDescList The list to store the information of missing fields.
 * @param {*} jsonObject The jsonObject to start
 * @param {*} path The document path in openapi.json to the jsonObject.
 * @returns No return value.
 */
const findMissingDesc = (jsonObject, path) => {
  const missingDescList = [];
  // if jsonObject is null or undefined, skip.
  if (!jsonObject) return [];

  // jsonObject is an object.
  if (Array.isArray(jsonObject)) {
    // check every child objects
    jsonObject.forEach((item) => {
      if (typeof item === "object") {
        missingDescList.push(...findMissingDesc(item, `${path}[]`));
      }
    });
  } else {
    // jsonObject is a dictionary
    const keys = Object.keys(jsonObject);

    if (keys.includes("name")) {
      // if name is defined, we should have description field too.
      const nameItem = jsonObject.name;
      if (typeof nameItem === "string" && !keys.includes("description")) {
        missingDescList.push(`${path}->name:${nameItem}`);
      }
    } else if (keys.includes("properties")) {
      // if has properties field, each property should have a description fields.
      const props = jsonObject.properties;
      const propsNames = Object.keys(props);
      propsNames.forEach((propName) => {
        if (!Object.keys(props[propName]).includes("description")) {
          missingDescList.push(`${path}->properties->${propName}`);
        }
      });
    }

    keys.forEach((k) => {
      const item = jsonObject[k];
      if (typeof item === "object") {
        missingDescList.push(...findMissingDesc(item, `${path}->${k}`));
      }
    });
  }

  return missingDescList;
};

/**
 *  Find missing documentations for fields in our OpenAPI spec.
 */
const findUndocumentedFields = async () => {
  const spec = await loadSpec();
  const json = JSON.parse(spec);
  const missingDesc = [];
  // find missing descriptions in requests
  missingDesc.push(...findMissingDesc(json.paths, "paths"));
  // find missing descriptions in schemas
  missingDesc.push(...findMissingDesc(json.components, "components"));

  console.log(`There are ${missingDesc.length} undocumented fields:`);
  missingDesc.forEach((item) => console.log(item));
};

/**
 * Show Usage of this script.
 */
const showUsage = () => {
  console.log(`Usage:
    -a: list all APIs in the openapi.json.
    -u: list undocumented APIs.
    -uf: list undocumented fields.`);
};

const main = () => {
  let task = "";
  if (process.argv.length > 2) {
    [, , task] = process.argv;
  }

  switch (task) {
    case "-a":
      findAllAPIs();
      break;
    case "-u":
      findUndocumentedAPIs();
      break;
    case "-uf":
      findUndocumentedFields();
      break;
    default:
      showUsage();
  }
};

main();
