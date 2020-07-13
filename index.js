const fs = require("fs");
const inquirer = require("inquirer");
const getMarkdown = require("./getMarkdown");


const questions = [
    {
        type: "input",
        name: "email",
        message: "Enter your Github email",
    },
    {
        type: "input",
        name: "image",
        message: "Enter your Github profile pic URL",
    },
    {
      type: "input",
      name: "title",
      message: "Enter the project title",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project and motive behind building it",
    },
    {
      type: "input",
      name: "installation",
      message: "What steps are required to install your project",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide steps to install your project",
    },
    {
      type: "input",
      name: "credits",
      message: "Submit names, links or any required attribution, if any, here",
    },
    {
      type: "list",
      name: "license",
      choices: ["MIT", "GPL", "Apache", "BSD", "None"],
      message: "Select the project license",
    },
];
function writeFile(fileName, data) {
    fs.writeFileSync(fileName, data);
  }
  function init() {
    inquirer.prompt(questions).then(answers => {
      writeFile('./goodREADME.md', getMarkdown(answers));
    })
  }
  init();
