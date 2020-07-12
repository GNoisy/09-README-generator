function getMarkdown(data) {
    return `
  # ${data.title}
  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## License
  [![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)]
  `;
}
module.exports = getMarkdown;