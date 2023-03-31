const path = require("path");

module.exports = {
  rootDir: ".",
  moduleDirectories: ["node_modules", path.join(__dirname, "./src/shared")],
};
