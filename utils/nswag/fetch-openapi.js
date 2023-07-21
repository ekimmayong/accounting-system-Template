const axios = require('axios');
const fs = require('fs');

const baseURL = 'http://localhost:5068/swagger/v1/swagger.json';

async function fetchApi(){
    const response = await axios.get(baseURL, {responseType: 'json'});
    const swaggerJson = response.data;

    fs.writeFileSync(`./openapi/openapi-Accounting.json`, JSON.stringify(swaggerJson, null, 2))
}

fetchApi();
