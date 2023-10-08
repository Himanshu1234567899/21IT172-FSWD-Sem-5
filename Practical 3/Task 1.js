const os = require('os');

// Display current user's information
const userInfo = os.userInfo();
console.log('Current User Information:');
console.log(`Username: ${userInfo.username}`);
console.log(`Home Directory: ${userInfo.homedir}`);
console.log(`Platform: ${os.platform()}`);
console.log();

// Function to display system memory information
function displayMemoryInfo() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const percentageFree = ((freeMemory / totalMemory) * 100).toFixed(2);

  console.log('System Memory Information:');
  console.log(`Total Memory: ${(totalMemory / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Free Memory: ${(freeMemory / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Percentage Free: ${percentageFree}%`);
}
displayMemoryInfo();
