// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'No License') {
      return ''; 
  }

  const licenseBadges = {
      'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'Apache 2.0': '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
      'BSD 3-Clause': '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)',
      'Mozilla Public License 2.0': '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  };

  return licenseBadges[license] || ''; 
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'No License') {
      return ''; 
  }

  const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
      'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
      'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
      'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0'
  };
  return licenseLinks[license] || ''; 
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== 'No License') {
    let licencia: string = `This project is licenses under the ${license} License.`;
    return licencia;
  } else{
    let licencia: string = '';
    return licencia;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data: any) {
  let returning: string;
  if (data.table) {
    data.tableOfContent = `
  - [![Installation](https://img.shields.io/badge/Installation-blue)](#installation)  
  - [![Usage](https://img.shields.io/badge/Usage-green)](#usage)  
  - [![Credits](https://img.shields.io/badge/Credits-orange)](#credits)  
  - [![License](https://img.shields.io/badge/License-red)](#license)  
  - [![Questions](https://img.shields.io/badge/Entitled-Questions-violet)](#questions)  
    `;
    returning =  `# ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Description
    
  ${data.motivation ? data.motivation + '\n\n' : ''}
  ${data.why ? data.why + '\n\n' : ''} 
  ${data.problemSolve ? data.problemSolve + '\n\n' : ''}
  ${data.learn ? data.learn + '\n\n' : ''}
    
  ## Table of Contents

  ${data.tableOfContent}

  ## Installation 
    
      ${data.installation || "No Installation instructions provided."} 

  ## Usage

  ${data.usage}  

  ## Credits

  ${data.credits}

  ## License

  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license)}  

  ${renderLicenseLink(data.license)}

  ## Questions
  
  ![Github](https://img.shields.io/badge/Github-yellow)
  ${data.questions} (https://github.com/${data.questions})

  ![Email](https://img.shields.io/badge/Email-pink) 
  ${data.email}: Title: Question for ReadmeFile, body: Add your questions in the email in order. 
  `;
  } else{
    returning =  `# ${data.title} 
    ${renderLicenseBadge(data.license)}
  
    ## Description
      
    ${data.motivation ? data.motivation + '\n\n' : ''}
    ${data.why ? data.why + '\n\n' : ''} 
    ${data.problemSolve ? data.problemSolve + '\n\n' : ''}
    ${data.learn ? data.learn + '\n\n' : ''}
      
    ## Installation 
      
        ${data.installation || "No Installation instructions provided."} 
  
    ## Usage
  
    ${data.usage}  
  
    ## Credits
  
    ${data.credits}
  
    ## License
  
    ${renderLicenseBadge(data.license)}
  
    ${renderLicenseSection(data.license)}  
  
    ${renderLicenseLink(data.license)}
  
    ## Questions
  
    ![Github](https://img.shields.io/badge/Github-yellow)
    ${data.questions}
  
    ![Email](https://img.shields.io/badge/Email-pink) 
    ${data.email}: Title: Question for ReadmeFile, body: Add your questions in the email in order. 
  `;
  }

  return returning 
}

export default generateMarkdown;