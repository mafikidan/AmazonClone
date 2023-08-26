import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://amazon-clone2-6xsg.onrender.com/'
    baseURL: 'http://localhost:7010/'
})

export default instance;