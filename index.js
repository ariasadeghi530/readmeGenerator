const userInfo = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
let user;
let desciption;
let title;
let install;


const questions = [
"What is your GitHub username?",
"What is the title of your project?",
'Please enter a project description',
"Please enter an installation guide"
];

function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, generateMarkdown(data), e => e ? console.log(e) : console.log('success'));
}

function init() {
  inquirer.prompt([
    {
      type: "input",
      name: 'user',
      message: questions[0]
    },
    {
      type: "input",
      name: 'title',
      message: questions[1]
    },
    {
      type: "input",
      name: 'description',
      message: questions[2]
    },
    {
      type: "input",
      name: 'install',
      message: questions[3]
    }
  ])
  .then( response => {
    let info = {
      user: response.user,
      title: response.title;
      description: response.description;
      install: response.install
    };
    writeToFile("README", info);
  })
}

init();





// 
// axios.get('https://api.github.com/users/ariasadeghi530')
//   .then(function (response) {
//     // handle success
//     // console.log(response.data.avatar_url, response.data.email);
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });

// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'user',
//     message: 'Type your GitHub username'
//   },
//   {
//     type: 'input',
//     name: 'title',
//     message: 'What is your project title?'
//   }
// ])
//   .then(response => {
//     console.log(response);
//   })