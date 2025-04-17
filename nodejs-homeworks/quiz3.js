/*
1- Write code to import and log the contents of a JSON file named data.json.

2- Implement a function named login that accepts two parameters, username and password. Inside this function, search the imported JSON data for a user object where both the username and password match the provided arguments.

3- Modify the login function to return the matched user object if the credentials are correct. If no match is found, return a message indicating "email or password incorrect."

4- Write code to access the username and password from the command-line arguments passed when running the script.
hint: process.argv

5- Use the command-line arguments as inputs to the login function and log the result to the console.
*/
const fs = require('fs'); 
function login(username, password) { 
  try {
    const data = fs.readFile('data.json', 'utf8'); 
    const users = JSON.parse(data); 
    for (const user of users) { 
      if (user.username === username && user.password === password) { 
        return user; 
      }
    }
    return "Incorrect username or password.";
  } catch (error) { 
    console.error("Error processing JSON file:", error); 
    return "Error processing JSON file."; 
  }
}
const username = process.argv[2];
const password = process.argv[3];
if (username && password) { 
  const result = login(username, password); 
  console.log(result); 
} else {
  console.error("Please provide a username and password as command-line arguments."); 
}




