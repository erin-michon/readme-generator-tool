const { makeBadge, ValidationError } = require('badge-maker')
let licenseText = '';
let licenseType;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}

"MIT License", "GNU GPLv3", "Apache License 2.0", "ISC License", "None"

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {

  console.log(data.license)
 
  if (data.license = 'MIT License') {
    
    licenseType = "[MIT License](https://choosealicense.com/licenses/mit/)";
   
  } else if (data.license = 'GNU GPLv3' ) {

    licenseType = "[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)";

  } else if (data.license = 'Apache License 2.0') {

    licenseType = "[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)";

  } else if (data.license = 'ISC License') {

    licenseType = "[ISC License](https://choosealicense.com/licenses/isc/)";

  } else if (data.license = 'None') {  
    
    licenseType = '';
  };
  
  return licenseType;

}
      

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {

  if (data.license = 'None') {  
    
    licenseText = '';

  } else {

    licenseText = "This application is coverd by the following license:";
  }

}

  
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  renderLicenseLink(data);
  renderLicenseSection(data);

  return `# ${data.title}
  
  ## Description:
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${licenseText} ${data.license}

  ## Contributing:
  ${data.contrib}

  ## Tests:
  ${data.test}

  ## Questions:
  Please do not hesitate to reach out to me directly with additional questions via my email address or Github Profile below:
  
  * Email: [${data.email}](mailto:${data.email}) 
  * Github Profile: [${data.github}](https://github.com/${data.github})
  
`;
}

module.exports = generateMarkdown;
