const axios = require('axios');
const inquirer = require('inquirer');


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

inquirer.prompt([
  {
    type: 'input',
    name: 'user',
    message: 'Type your GitHub username'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
  }
])
.then(response => {
  console.log(response);
})

