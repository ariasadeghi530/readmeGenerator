const axios = require('axios');

const api = {
   getUser(username) {
    return axios.get(`https://api.github.com/users/${username}`)
      
      .catch(function (error) {

        console.log(error);
      });
  }
};

module.exports = api;
