// TODO: Include packages needed for this application

const inquirer = require ('inquirer');
const fs = require('fs') 
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const  questions =  [{
 
    {
    type: "input",
    message: "what's your project title? (Required)",
    name:"title"
    
}, {

    type: "input",
    message: "Please Provide detailed description and purpose of your application",
    name: "description"
    
}, {

    type: "input",
    message: "Table oif Conents.",
    name: "Table of Contents"
  
}, {
    type: "input",
    message: "How does do use go about installing your app?",
    name:"Installation "
}, {
    type: "input",
    message: "what command do you use to test this App",
    name: "command"
}, {
  type: "input",
    message: "What is your email address?",
    name: "Email",
}, {
  type: "input",
    message: "What license was used for this README?",
    name: "License",
}, {
  type: "input",
    message: "Please add contributors",
    name: "Contributor",
}

  
}];

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
    writeToFile("distREADME.md", generatorMarkdown(data));
  })
}

// Function call to initialize app
init();
