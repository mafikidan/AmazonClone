import axios from "axios";

const instance = axios.create({
    baseURL: "https://amazon-server-ddhw.onrender.com"
    //'http://localhost:7010/'
})

export default instance;