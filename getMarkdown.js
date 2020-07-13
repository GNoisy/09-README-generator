function getMarkdown(data) {
    return `
  # ${data.title}
  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## License
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Email
  ${data.email}
  <p>
  <img src="${data.image}"> 
  </p>
  `;
}
module.exports = getMarkdown;