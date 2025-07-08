const fs1 = require("fs");

// Synchronous read
const response1 = fs1.readFileSync("./temp.txt", "utf8");
console.log(response1);

const response2 = fs1.readFileSync("./temp2.txt", "utf8");
console.log(response2);

// Asynchronous read

console.log("Reading files asynchronously...");

const fs = require("fs");

fs.readFile("./temp.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  } else {
    console.log("temp.txt--->", data);
  }
});
console.log("Reading temp2.txt asynchronously...");
fs.readFile("./temp2.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  } else {
    console.log("temp2.txt--->", data);
  }
});
console.log("Asynchronous file reading completed.");
