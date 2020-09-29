const fs = require("fs");
const fileName = "users.json";

try {
  const fileContent = fs.readFileSync(fileName);
  const fileContentAsString = fileContent.toString();

  console.log(fileContentAsString);
} catch (e) {
  console.error(e);
}
