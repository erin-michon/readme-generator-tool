const { makeBadge, ValidationError } = require('badge-maker')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}

"MIT License", "GNU GPLv3", "Apache License 2.0", "ISC License", "None"

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {

 
  if (data.license = 'MIT License') {
    
    data.license = "[MIT License](https://choosealicense.com/licenses/mit/)";
   
  } else if (data.license = 'GNU GPLv3' ) {

    data.license = "[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)";

  } else if (data.license = 'Apache License 2.0') {

    data.license = "[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)";

  } else if (data.license = 'ISC License') {

    data.license = "[ISC License](https://choosealicense.com/licenses/isc/)";

  } else if (data.license = 'None') {  
    
    data.license = '';
  };
  
}
      

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
;
}

  
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  renderLicenseLink(data);

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
  ${data.license}

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
