const querystring = require('querystring'); const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin,
output: process.stdout
});


rl.question('Enter a URL with a query string: ', (inputUrl) => {
// Extract query string from URL
const queryString = inputUrl.split('?')[1];


// Parse query string and extract key-value pairs
const queryParams = querystring.parse(queryString);


// Display the extracted key-value pairs console.log('Key-Value Pairs:');
for (const key in queryParams) {
console.log(`${key}: ${queryParams[key]}`);
}


rl.close();
});
