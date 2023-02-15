// Copy source code to another directory excluding generated files
// Using this to sync changes between public and internal repos

const fs = require("fs");
const { exit } = require("process");

let target = process.argv[2];

if (!target) {
  console.error("Need a destination");
  exit(1);
}
console.log(`copying to:${target}`);

if (!target.endsWith("/")) {
  target += "/";
}

fs.readdir(".", (e, files) => {
  if (e) {
    console.log(e);
    exit(1);
  } else {
    files.forEach((f) => {
      if (
        ![".git", "node_modules", "build", ".docusaurus", ".cache-loader", ".DS_Store"].includes(f)
      ) {
        fs.cp(f, target + f, { recursive: true }, (err) => {
          if (err) {
            console.log("Error Found:", err);
          } else {
            console.log(`${f} copied.`);
          }
        });
      }
    });
  }
});
