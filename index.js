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
        message: 'Write a description for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the project usage?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(github)'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your name?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Want to add a license to your project?',
        choices: ['MIT','ISC', 'GNUPLv3'],
        filter(val){
            return val.toLowerCase();
        }
    },
];


function runQuery(){
    return inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        return answers
    })
    .catch((error) => {
        console.log(error)
    })
}

runQuery();


// function writeToFile(response, data) {
//     fs.writeFile(response, data, (err) => {
//       if (err) throw err;
//       console.log(`Data written to ${response}`);
//     });
//   }
// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {

}

// function call to initialize program
init();





// //////////////////////////////////////////////////////////////////
// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'username',
//             message: 'What is your name?'
//         },
//         {    
//             type: 'input',
//             message: 'What languages do you know?',
//             name: 'languages',
            
//             choices: ['Italian', 'English', 'Spanish', 'Urdu']
//         },
//         {
//             message: 'What is your preferred method of communication?',
//             name: 'preferredLanguage',
//             type: 'input',
//         }
//         ,
//         {
//             message: 'What is the project title?'
//         }
    

//     ])
//     .then((response) => {
//         const name = response.username
//         const languages = response.languages
//         const preferred = response.preferredLanguage
        
//         fs.appendFile('response', `${name}\n${languages}\n${preferred}`, (err) =>
//             err ? console.error(err) :  console.log('File Saved!')
//         )
//     })


