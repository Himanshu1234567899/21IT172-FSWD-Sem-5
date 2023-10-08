const path = require('path'); const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({ input: process.stdin,
output: process.stdout
});


function extractDirectoryAndBaseName(filePath) {
// Get the directory name
const directoryName = path.dirname(filePath);


// Get the base name
const baseName = path.basename(filePath);


// Display the extracted values separately
console.log('Directory Name:', directoryName); console.log('Base Name:', baseName);
}


function checkFileExists(filePath) {
// Check if the file exists
fs.access(filePath, fs.constants.F_OK, (err) => {
if (err) {
console.error('Error: File does not exist');
} else {
console.log('Success: File exists');
}
});
}


rl.question('Enter a file path: ', (filePath) => {
// Extract and display the directory name and base name extractDirectoryAndBaseName(filePath);

// Check if the file exists checkFileExists(filePath);

rl.close();
});
