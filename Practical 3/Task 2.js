const chalk = require('chalk');
const upperCase = require('upper-case');

// Styling console output using chalk
console.log(chalk.bold('Styling Console Output with Chalk:'));
console.log(chalk.blue('This text is in blue color.'));
console.log(chalk.red.bold('This text is bold and in red color.'));
console.log(chalk.yellow.inverse('This text has a yellow background.'));

console.log(); // Empty line for separation

// Using upper-case module to convert text to uppercase
const text = 'Hello, World!';
console.log(`Original text: ${text}`);
console.log(`Uppercase text: ${upperCase.upperCase(text)}`);
