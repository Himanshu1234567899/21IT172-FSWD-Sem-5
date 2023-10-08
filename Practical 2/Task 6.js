const fs = require('fs');

const firstSize = fs.statSync('./first.txt').size;
const secondSize = fs.statSync('./second.txt').size;
console.log(firstSize,secondSize);

if(firstSize > secondSize){
    console.log("First file is Larger than second!....")
}else if(firstSize < secondSize){
    console.log("Second file is Larger than first!....")
}else{
    console.log("Both files have same size")
}

const firstFile = fs.readFileSync('first.txt',{encoding: 'utf8'}).split('\n');
const secondFile = fs.readFileSync('second.txt',{encoding: 'utf8'}).split('\n');

for(let i = 0; i <secondFile.length ; i++){
    if(firstFile[i] != secondFile[i]){
        console.log(`Difference at line number ${i+1}`);
    }
}
