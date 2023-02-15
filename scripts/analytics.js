// API Analysis Scripts
// Features:
//  -a: list all APIs
//  -u: list all undocumented APIs

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

// This function will download open api spec, store a local copy, and return the promise of file content in string.
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

// Check if local cache file. If not, download one from the remote.
// If you want to use a local file, save a copy.
// If you want to re-download the spec file, delete the local copy.
// Returns a string
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

// Generate a dictionary of all links.
const generateLinkDict = (linkDict, json) => {
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
        // eslint is incorrectly about the Unnecessary escape character. Disable lint the next line.
        /* eslint-disable */
        operationId = method + innerUrl.replace(/[{}\/]/g, "_");
      }

      // It is ok to not encode space. But we always encode.
      linkDict[baseUrl + "#/" + encodeURIComponent(tag) + "/" + operationId] =
        method.toUpperCase() + " " + innerUrl;
    });
  });
};

// Generate the list of markdown files to check.
const generateMarkdownFileList = (markdownList, folderPath) => {
  for (const file of fs.readdirSync(folderPath)) {
    const fullPath = folderPath + "/" + file;
    if (fs.lstatSync(fullPath).isDirectory()) {
      generateMarkdownFileList(markdownList, fullPath);
    } else {
      if (file.endsWith(".md")) {
        markdownList.push(fullPath);
      }
    }
  }
};

const deleteDocumentedAPIFromLinkDict = (linkDict, filePath) => {
  // Load markdown, find all links, and check if the link is in linkDict
  const data = fs.readFileSync(filePath);

  let match;
  while ((match = linkPattern.exec(data))) {
    const link = match[2];
    if (linkDict.hasOwnProperty(link)) {
      delete linkDict[link];
    }
  }
};

// Find all APIs
const findAllAPIs = async () => {
  const spec = await loadSpec();

  let linkDict = {};
  generateLinkDict(linkDict, JSON.parse(spec));

  console.log("All API:");
  Object.keys(linkDict).forEach((k) => {
    console.log(linkDict[k]);
  });
};

// Find all undocumented APIs
const findUndocumentedAPIs = async () => {
  const spec = await loadSpec();

  let linkDict = {};
  generateLinkDict(linkDict, JSON.parse(spec));

  let markDownFiles = [];
  generateMarkdownFileList(markDownFiles, "./docs");

  markDownFiles.forEach((file) => {
    deleteDocumentedAPIFromLinkDict(linkDict, file);
  });

  console.log("Undocumented APIs:");

  Object.keys(linkDict).forEach((k) => {
    console.log(linkDict[k]);
  });
};

const showUsage = () => {
  console.log("Usage:\n\t-a: list all APIs in the openapi.json.\n\t-u: list undocumented APIs.");
};

const main = () => {
  let task = "";
  if (process.argv.length > 2) {
    task = process.argv[2];
  }

  switch (task) {
    case "-a":
      findAllAPIs();
      break;
    case "-u":
      findUndocumentedAPIs();
      break;
    default:
      showUsage();
  }
};

main();
