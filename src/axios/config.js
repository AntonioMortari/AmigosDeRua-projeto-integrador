import axios from 'axios'

const users = axios.create({
    baseURL:'http://localhost:5000',
})

const publicationsApi = axios.create({
    baseURL:'http://localhost:5001',
})

const feedbacks = axios.create({
    beseUrl:'http://localhost:5002',
})

export {users, publicationsApi,feedbacks}