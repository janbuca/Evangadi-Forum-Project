import axios from 'axios';
const axiosBase = axios.create({ baseURL: 'https://localhost:5500/api' });
// const axiosAuth = axios.create({ auth: { username: 'user', password: 'pass' }});

export default axiosBase 