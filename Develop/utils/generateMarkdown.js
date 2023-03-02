//Provides badging for chosen license
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  if (license === 'MIT') {
    return `[![${license}: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)]`
  };
  if (license === 'GPLv2') {
    return `[![${license}: GPL v3](https://img.shields.io/badge/License-${license}-blue.svg)]`
  };
  if (license === 'Apache') {
    return `[![${license}: Apache](https://img.shields.io/badge/License-${license}-blue.svg)]`
  };
}

// Provides a link to the chosen license
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  };
  if (license === 'GPLv2') {
    return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
  };
  if (license === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`
  };
  if (license === 'Other') {
    return ''
  };
}



// Markdown generation based on chosen prompts
function generateMarkdown(data) {
  return `<h1>${data.title}</h1>

    ## Table of Contents
  - [Installation](#installation)
  - [Usage](#Usage)   
  - [License](#License)
  - [Github Username](#GitHub Username)
  - [Email Address](#Email)




  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

 
 
 
  ## Description
  ${data.description}

 
 
  ## Installation 
${data.installation}



## Usage
${data.usage}



##License
${data.license}



## Git Hub Username
${data.GitHubUsername}



## Email Address:
${data.email} 
`;
}

module.exports = generateMarkdown;
