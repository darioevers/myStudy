const fs = require("fs");

// create file
// appendFile will create file
fs.appendFile("newText.txt","This is text for newText.txt",(err)=>{
    if (err) throw err;
    console.log("File is created")
})

// read file

// read file sync

// rename file

// delete file

// copy file

// open file
// fs flags