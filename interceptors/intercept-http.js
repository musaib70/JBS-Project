const axios = require('axios');
const constants = require('../config/constants');

const axiosInstance = axios.create({
    baseURL: constants.baseUrl,
    headers: { 'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozOSwid21zX2lkIjo1Mywic3VwZXJfYWRtaW4iOjB9LCJ0ZW5hbnQiOnsiaWQiOiI1YzJmMjQ4ZTVjMjI4YTE2OTg3ZTZkMjciLCJuYW1lIjoibWV0ZW9yYXAiLCJkb21haW4iOiJsb2NhbGhvc3QiLCJlbWFpbCI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMS0wMi0wOVQxMDo0Nzo0OS4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMS0wMi0wOVQxMDo0Nzo0OS4wMDBaIn0sImlhdCI6MTY2MDg5OTI2OSwiZXhwIjoxNjYxNTA0MDY5fQ.XrzDDtDWiDZFKeTy_jHBTF7P4cWKIcqZfY-oFgPYyYo' }
});

module.exports = axiosInstance;