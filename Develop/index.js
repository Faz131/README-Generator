
// File System and Inquirer modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = function userInput() {
    return inquirer.prompt([

        //Project title
        {
            type: 'input',
            name: 'title',
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
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
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
    fs.writeFile('README.md', data, null, (err) =>
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