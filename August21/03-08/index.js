const fs = require("fs");

// create file
// appendFile will create file
fs.appendFile("newText.txt","This is text for newText.txt \n",(err)=>{
    if (err) throw err;
    console.log("File is created")
})

// read file
fs.readFile("./longText.txt","utf8",(err,data)=>{
    if (err) throw err;
    console.log(data);
});

// read file sync

// rename file

// delete file

// copy file

// open file
// fs flags