import axios from "axios"

// create an instance 
const instance = axios.create({
    // add the parameters which will be http://localhost:8000
    baseUrl: "http://localhost:8000"
});

export default instance