const path = require('path');
const readline = require('readline');


const rl = readline.createInterface({ input: process.stdin,
output: process.stdout
});


function compareFilePaths(filePath1, filePath2) {

    // Resolve the absolute paths
const absolutePath1 = path.resolve(filePath1); const absolutePath2 = path.resolve(filePath2);

// Check if the paths refer to the same file
const isSameFile = absolutePath1 === absolutePath2;


// Display the result
if (isSameFile) {
console.log('The file paths refer to the same file.');
} else {
console.log('The file paths refer to different files.');
}
}


function extractFileExtension(filePath) {
// Get the file extension
const extension = path.extname(filePath);


// Display the file extension
console.log('File Extension:', extension);
}


rl.question('Enter the first file path: ', (filePath1) => {
rl.question('Enter the second file path: ', (filePath2) => {
// Compare the file paths
compareFilePaths(filePath1, filePath2);


// Extract and display the file extension extractFileExtension(filePath1);
extractFileExtension(filePath2);


rl.close();
});
});
