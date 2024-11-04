const axios = require('axios');
const apiClient = axios.create({
    baseURL: "https://echo-serv.tbxnet.com/v1/secret",
    headers: {
        Authorization: "Bearer aSuperSecretKey"
    }
})

module.exports = apiClient