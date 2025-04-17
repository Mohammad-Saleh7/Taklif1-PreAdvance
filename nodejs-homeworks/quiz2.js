/*
Question2
Create a Node.js script that reads the content of a file named 'example.txt' using the fs.readFile() function. Ensure that the file is read with the 'utf8' encoding.

- Implement error handling to log any errors encountered during the file reading process.
- If the file is successfully read, display its content to the console along with the message "File content:".
- Your solution should include the usage of the fs.readFile() function
*/

// answer
const fs = require("fs")
const fileName = "example.txt"
fs.readFile(fileName,"utf8",(err)=>{
    if (err) {
        console.error(err);
        return
    }
    console.log(`Data successfully written to ${fileName}`);
})