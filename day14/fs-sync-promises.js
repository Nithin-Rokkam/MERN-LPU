const fsPromises = require("node:fs/promises");
console.log("Reading files synchronously using promises...");
const main = async () => {
  try {
    // Synchronous read
    const response1 = await fsPromises.readFile("./tem.txt", "utf8");
    console.log(response1);
  } catch (err) {
    console.error("Error reading file:", err);
  }

  console.log("Reading files asynchronously using promises...");
  try {
    const response2 = await fsPromises.readFile("./temp2.txt", "utf8");
    console.log(response2);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};
main();
