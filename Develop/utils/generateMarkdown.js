// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else { return `[![${license} license](https://img.shields.io/badge/License-${license}-yellow.svg)]` }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ## Table of Contents
  -[Installation](#installation)
  -[Usage](#Usage)   
  -[License](#License)
  -[Github Username](#GitHub Username)
  -[Email Address](#Email)




  ${renderLicenseBadge(data.licenses)}

 
 
 
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
