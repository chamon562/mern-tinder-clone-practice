import axios from "axios"

// create an instance 
const instance = axios.create({
    // add the parameters which will be http://localhost:8000
    // baseURL: "http://localhost:8000"
    baseURL: "https://cm-tinder-clone-backend.herokuapp.com"
});

export default instance;