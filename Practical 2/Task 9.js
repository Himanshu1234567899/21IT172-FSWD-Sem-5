const fs = require('fs');

//create a file

const createFile = ()=> {
  fs.writeFile('Create.txt', '', (err) => {
    if (err) {
      console.error(`Error creating file: ${err}`);
    } else {
      console.log(`File 'Create.txt' created successfully.`);
    }
  });
}

createFile();

// Read a file

const readfile = ()=>{
    const data = fs.readFileSync('Create.txt',{encoding: 'utf8'})
    console.log(data)
}

readfile()

// Append a file

const data = "Nachiket is GOAT"
const appendFile = () => {
    fs.appendFile('Create.txt',data,()=>{
            console.log("Data Appended Successfully")
    })
}

appendFile()

// Delete a file

const deletefile = () =>{
    fs.unlink('Create.txt',(err)=>{
        if(err){
            console.error("Error deleting a file")
        }
        else{
            console.log("File deleted successfully")
        }
    });
}

deletefile();

//Rename file

const renamefile = () =>{
    fs.rename('Create.txt','new.txt',(err)=>{
        if(err) console.error("Error renaming")
        else console.log("File renamed successfully")
    })
}

renamefile()

//Listout

const listdir = (dir) =>{
    fs.readdir(dir,(err,file)=>{
        if(err) console.error(err)
        else{
            file.forEach((file) => {
                console.log(file);})
        }
    })
}
listdir("TASK9")
