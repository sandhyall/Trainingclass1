const path = require("path");
const currentPath = path.join(__dirname);
console.log("currentpath",currentPath);
 

const fs = require("fs");
console.log(`Reading file from ${currentPath}`);
const data = fs.readFileSync(path.join(currentPath, "./var.js"), "utf-8");
console.log(data);

 fs.writeFileSync(path.join(currentPath, "./op.txt"), "update from code");

//os modules
const os = require("os");
console.log(os.platform());
console.log(os.freemem());
console.log(os.userInfo());
console.log(os.homedir());

