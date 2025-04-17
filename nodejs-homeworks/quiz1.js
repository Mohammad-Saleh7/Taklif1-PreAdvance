/*
Write a Node.js script that utilizes the fs module to perform the following tasks:

1- Include the 'fs' module.
2- Your solution should use the fs.writeFile() function 
3- Write data to a file named 'example.txt'.
4- The content to be written to the file should be: "This is the data to write to the file."
5- Ensure that any errors encountered during the file writing process are appropriately handled and logged.
6- Display a message to the console indicating that the data has been successfully written to the file.


*/
// answer
 const fs = require("fs")
 const dataToWrite ="This is the data to write to the file"
 const fileName = 'example.txt'
 fs.writeFile(fileName,dataToWrite,(err)=> {
    if (err) {
        console.error(err);
        return
    }
    console.log(`Data successfully written to ${fileName}`); 
 })
