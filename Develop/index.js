// TODO: Include packages needed for this application

const inquirer = require ('inquirer');
const fs = require('fs'); 
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const  questions =  [
  {
 
    type: "input",
    message: "what's your project title?",
    name:"title"
    
}, {

    type: "input",
    message: "Please Provide detailed description of your project",
    name: "description"
    
}, {

    type: "input",
    message: "Table of Conents.",
    name: "Table of Contents"
  
}, {
    type: "input",
    message: "How does a  user go about installing your app?",
    name:"Installation "
}, {
    type: "input",
    message: "what command do you use to test this App",
    name: "command"
}, {
  type: "input",
    message: "What is your github username?",
    name: "UserName",
}, {

  type: "input",
  message: "What is your Email address?",
  name: "Email"
},
{
  type: "input",
    message: "What license was used for this README?",
    name: "License",
}, {
  type: "input",
    message: "Please add contributors",
    name: "Contributor",
}, {
  type: "input",
  message:"What is the App used for?",
  name:"Usage"
}



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile("./dist/"+fileName, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log ("Successfully wrote: " + fileName);
  })
}





// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("distREADME.md", generateMarkdown(data));
  })
}

// Function call to initialize app
init();
