const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [ 
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the project usage?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'mail',
        message: 'For questions(email contact)'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Insert your GitHub(github)'
    },
  
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want too add to your project?',
        choices: ['MIT','ISC', 'GNUPLv3'],
        filter(val){
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'For any additional questions contact at:'
    },
];

function runQuery(){
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = generateMarkdown(answers)
        fs.writeFile('README.md', mark, (err) => {
            if (err) throw err;
            console.log(`Data written to ${"README.md"}`);})
            console.log(answers)
       return answers
    })
    .catch((error) => {
        console.log(error)
        
    })
}

runQuery();

function writeToFile(response, data) {
 
   }
// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {

}
// function call to initialize program
init();


