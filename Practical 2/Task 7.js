const fs = require('fs');

function backupFile(file) {

const fileName = "file.txt";
const backupPath = `/Users/dell/OneDrive/Desktop/FSWD/TASK7/backup/${fileName}`;

fs.readFile('/Users/dell/OneDrive/Desktop/FSWD/TASK7/main.txt', (err,data) => {
    if (err) {
      console.error(`Failed to backup file: ${file}`);
    } else {
      fs.writeFile(backupPath, data, (err) => {
        if(err){
          console.error(`Failed to backup file: ${file}`);
        }
        console.log(`File backed up successfully: ${backupPath}`);
      })
      
    }
  });
}

function restoreFile(file) {
const fileName = "file.txt"
const backupPath = `/Users/dell/OneDrive/Desktop/FSWD/TASK7/restore/${fileName}`;

fs.readFile('/Users/dell/OneDrive/Desktop/FSWD/TASK7/main.txt', (err,data) => {
    if (err) {
      console.error(`Failed to restore file: ${file}`);
    } else {
      fs.writeFile(backupPath, data, (err) => {
        if(err){
          console.error(`Failed to backup file: ${file}`);
        }
        console.log(`File Restored successfully: ${backupPath}`);
      })
      
    }
  });
}

const fileToBackup = '/Users/dell/OneDrive/Desktop/FSWD/TASK7/backup/file.txt'
const fileToRestore = '/Users/dell/OneDrive/Desktop/FSWD/TASK7/restore/file.txt';

backupFile(fileToBackup);

restoreFile(fileToRestore);
