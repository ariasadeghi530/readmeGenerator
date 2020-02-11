const axios = require('axios');

axios.get('https://api.github.com/users/ariasadeghi530')
  .then(function (response) {
    // handle success
    console.log(response.avatar_url, );
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
// fetch('https://api.github.com/users/ariasadeghi530')
//   .then(r => r.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(e => console.error(e));