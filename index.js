// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util")

const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the title of your project?"
        },
        {
            type: 'input',
            name: 'description',
            message: "Please provide a description of your project."
        },
        {
            type: 'input',
            name: 'installation',
            message: "Please provide the required installation steps for your project."
        },
        {
            type: 'input',
            name: 'usage',
            message: "Please provide instructions and examples for the use of your project."
        },
        {
            type: 'list',
            name: 'license',
            choices: [ "MIT License", "GNU GPLv3", "Apache License 2.0", "ISC License", "None"],
            message: "Please choose the license associated with your project."
        },
        {
            type: 'input',
            name: 'contrib',
            message: "Please provide contribution guidelines you have for your project."
        },
        {
            type: 'input',
            name: 'test',
            message: "Please provide a test and an example of how to run them on your project."
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter your GitHub username."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email address."
        }
    ])

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileName, data, err => {
          if (err) {
            reject(err);
            return;
          }
    
          resolve({
            ok: true,
            message: 'File created!'
          });

        });
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

questions();


// promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });