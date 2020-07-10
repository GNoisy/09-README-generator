const fs = require("fs");
const inquirer = require("inquirer");


const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title: ',
    },
    {
      type: 'list',
      name: 'license',
      choices: ['MIT', 'GPL', 'Apache', 'BSD', 'None'],
      message: 'Select the project license: ',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project: ',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.: ',
    },
];