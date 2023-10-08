const url = require('url');
const readline = require('readline');


const rl = readline.createInterface({ input: process.stdin,
output: process.stdout
});


rl.question('Enter a URL: ', (inputUrl) => {
// Parse the URL
const parsedUrl = new URL(inputUrl);

// Display protocol, host, path, and query parameters console.log('Protocol:', parsedUrl.protocol);
console.log('Host:', parsedUrl.host);
console.log('Path:', parsedUrl.pathname);
console.log('Query Parameters:', parsedUrl.searchParams.toString());


rl.close();
});


function resolveUrl(baseUrl, relativePath) {
// Parse the base URL
const parsedBaseUrl = new URL(baseUrl);


// Resolve the absolute URL
const resolvedUrl = new URL(relativePath, parsedBaseUrl);


// Display the absolute URL
console.log('Resolved URL:', resolvedUrl.href);
}


// Example usage
const baseUrl = 'https://charusat.ac.in/';
const relativePath = '/files/studentCorner'; resolveUrl(baseUrl, relativePath);
