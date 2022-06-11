// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return '';
  }
  return `https://img.shields.io/static/v1?label=license&message=${license.replace('','-')}&color=red`;
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return '';
  }
  return '* [License](#license)'

  //study group function
  //function renderLicenseLink(license) {
   // return `https://choosealicense.com/licenses/${license.toLowerCase().replace("","-")}/`;
  //}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = renderLicenseLink(license);

  if (license === "None") {
    return '';
  }
  return 
  `## License
  
  This project has the ${license} license, you can find the license here: ${licenseLink}`;
 }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let renderLicenseBadge = renderLicenseBadge(data.projectLicense);
  let licenseSection = renderLicenseSection(data.projectLicense);
    return `# ${data.projectTitle}
  ${licenseBadge}
  ## Description

  ${data.projectDescription}

  ## Table of Contents
  
  * [Installation](#installation)
  ${renderLicenseLink(data.projectLicense)}
  * [Usage] (#usage)
  * [License] (#license)
  * [Contributing] (#contributing)
  * [Test] (#test)
  * [Questions] (#questions)


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

  If you have any questions, feel free to contact me via email or GitHub.
  ${data.gitHubUser}
  ${data.eMail}

`;
}

module.exports = generateMarkdown;
