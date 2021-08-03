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
const data = fs.readFileSync("./longText.txt");
console.log(data.toString());
console.log("reading sync is done");

// rename file
// fs.rename("./hello.txt","./helloRenamed.txt",(err)=>{
//     if (err) throw err;
//     console.log("File was renamed");
// })

// delete file
// const filePathName = "./filetobedeleted.txt";
// fs.unlink(filePathName, (err)=>{
//     if (err) throw err;
//     console.log("File got deleted");
// })

// copy file
fs.copyFile("./original.txt","./originalcopy.txt",(err)=>{
    if (err) throw err;
    console.log("File was copied");
});

// open file
// fs flags

// 