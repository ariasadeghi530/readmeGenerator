const axios = require('axios');

const api = {
  getUser(username) {
    axios.get(`https://api.github.com/users/${username}`)
  .then(function ({data}) {
    let userInfo = [data.avatar_url, data.email];
    return userInfo;
  })
  .catch(function (error) {
  
    console.log(error);
  });
  }
};

module.exports = api;
