// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            type: 'input',
            name: 'collab',
            message: "Please provide contribution guidelines you have for your project."
        },
        {
            type: 'input',
            name: 'test',
            message: "Please provide a test and an example of how to run them on your project."
        }

    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

questions();