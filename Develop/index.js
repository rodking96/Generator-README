// Packages needed for this application
const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
       
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username? (Required)',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        
    },
    {
        type: 'input',
        name: 'what',
        message: 'What is your project and what problem will it solve? (Required)',
        
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project? (Required)',
       
    },
    {
        type: 'input',
        name: 'how',
        message: 'How will someone use this? (Required)',
        
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project. (Required)',
       
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use. (Required)',
        
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to allow other developers to contribute?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contributing. (Required)',
       
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test the app. (Required)',
        
    },
];

// function to write README file
function writeTofile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}


// Function call to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeTofile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
}

init();