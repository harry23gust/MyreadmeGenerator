// TODO: Include packages needed for this application

const inquirer = require ('inquirer');
const fs = require('fs'); 
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const  questions =  [
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
    message: "Table of Conents.",
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
    message: "What is your githib user name?",
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




const questions = () => {
  return inquirer.questions([
    {
      type: 'input',
      name: 'UserName',
      message: 'What is your UserName? (Required)',
      validate: UserNameInput => {
        if (UserNameInput) {
          return true;
        } else {
          console.log('Please enter your UserName!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'Email',
      message: 'Enter your Email (Required)',
      validate: EmailInput => {
        if (EmailInput) {
          return true;
        } else {
          console.log('Please enter your Email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      default: true
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};