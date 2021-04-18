

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.UserName}/${data.Title})
# Description
${data.description}
# Table of Contents 
* [Installation](#Installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [command](#command)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}
# Usage
​This application is used for ${data.Usage}
# License
This project is license under the ${data.License} license.
# Contributing
​Contributors: ${data.Contributor}
# command
To run command, you need to run the following command: ${data.command}
# Questions
If you have any questions about the repo, open an issue or contact ${data.UserName} directly ${data.Email}.
`
}

module.exports = generateMarkdown;
