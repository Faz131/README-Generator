
// File System and Inquirer modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = function userInput() {
    return inquirer.prompt([

        //Project title
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
        },

        //Description
        {
            type: 'input',
            name: 'description',
            message: ' Please describe your project.',
        },
        //Installation
        {
            type: 'input',
            name: 'installation',
            message: 'What programs or modules were needed to be installed',

        },
        //usage     
        {
            type: 'input',
            name: 'usage',
            message: 'What is the intent of this app?',
        },

        //license goes here
        {
            type: 'checkbox',
            message: 'What license did you use?',
            name: 'license',
            choices: ['MIT', 'GPLv2', 'Apache', 'Other'],
            default: 'MIT',

        },

        //Github username
        {
            type: 'input',
            name: 'GitHubUsername',
            message: 'Please enter your GitHub username?',
        },

        //email address
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
        }
    ]);
};
//Creates a Markdown File

const createMD = data => {
    fs.appendFile('README.md', JSON.stringify(data, null, '\t'), err =>
        err ? console.log(err) : console.log('Success!')
    );
};
questions()
    .then(response => {
        return generateMarkdown(response);
    })
    // Displays data from prompts
    .then(data => {
        return createMD(data);
    })
    // Used to log out any errors that occur
    .catch(err => {
        console.log(err)
    })