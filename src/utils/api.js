import axios from "axios"

const API_BASE_URL ="http://localhost:3000/api/v1"

export default axios.create({
    baseURL:API_BASE_URL,
    headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('token') }`
    }
})