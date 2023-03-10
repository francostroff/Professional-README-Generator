// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # Title
  ${answers.title}
  
  ## Table of Contents
  - [Project Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributors](#Contributors)
  - [Contact](#Contact)
  - [GitHub](#GitHub)
  - [License](#License)
  - [Questions](#Questions) 
  
  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributors}

  ## Email Contact
  ${answers.mail}

  ## GitHub 
  ${answers.github}

  ## License
  ${answers.license}

  ## Questions
  ${answers.questions}
  `;
  
}

module.exports = generateMarkdown;

