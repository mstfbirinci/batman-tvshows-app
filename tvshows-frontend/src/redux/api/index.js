import axios from 'axios';

const config = {
    baseURL: process.env.BASE_URL || 'http://localhost:8080',
    timeout: 5000
}

export default axios.create(config);