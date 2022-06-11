// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return '';
  }
  return '* [License](#license)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description

  ${data.projectDescription}

  ## Table of Contents
  
  * [Installation](#installation)
  ${renderLicenseLink(data.projectLicense)}

  ## Installation 
  ${data.installationInstructions}

  ## Usage
  ${data.usageInstructions}
  
  ## License
  ${data.projectLicense}

  ## Contributing
  ${data.contributionInstructions}
  
  ## Tests
  ${data.testInstructions}
  
  ## Questions
  ${data.gitHubUser}
  ${data.eMail}

`;
}

module.exports = generateMarkdown;
