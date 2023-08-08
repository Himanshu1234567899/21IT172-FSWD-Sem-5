const os = require("os");

const environmentVariables = process.env;

console.log("Environment Variables");
console.log("---------------------");
for(const key in environmentVariables){
    console.log(`${key}: ${environmentVariables[key]}`);
}