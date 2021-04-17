// TODO: Include packages needed for this application

const inquirer = require ('inquirer');
const fs = require('fs') 
const util = require('util');

const generareMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions  () {
return inquirer.questions ([  
    {
    type: "input",
    message: "what's your project title? (Required)",
    name:"title"
    validate: titleInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
}, {

    type: "input",
    message: "Please Provide detailed description and purpose of your application",
    name: "description"
    validate: descriptionInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project Description!');
          return false;
        }
      }
}, {

    type: "input",
    message: "Table oif Conents.",
    name: "Table of Contents"
  
}, {
    type: "input",
    message: "How does do use go about installing your app?",
    name:"Installation Instructions"
},

  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
 async function init() {
     try {
         const response = await promptUser ();
         const readMe = generareMarkdown(response);
          await writeToFileAsync("README.md", readMe)
          console.log("You did it!");
     } catch (err) {
         console.log(err);
     }
 }

// Function call to initialize app
init();
