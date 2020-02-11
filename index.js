const axios = require('axios');



axios.get('https://api.github.com/users/ariasadeghi530')
  .then(function (response) {
    // handle success
    // console.log(response.data.avatar_url, response.data.email);
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });


