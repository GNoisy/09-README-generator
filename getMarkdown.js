function getMarkdown(data) {
    return `
    # ${answers.title}
    ## Table of contents
    * [Description](#description)
    * [Installation](#installation)
    ## Description
    ${answers.description}
    ## Installation
    ${answers.installation}
    ## Usage
    ${answers.usage}
    ## Credits
    ${answers.credits}
    ## License
    ![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)
    ## Tests
    ${answers.tests}
    ## Questions
    ![Github profile picture](${answers.avatar_url})
    ${answers.html_url}

    ![GitHub badge](https://img.shields.io/badge/github/followers/${answers.name}?label=Follow)
  `;
  }
  module.exports = getMarkdown;