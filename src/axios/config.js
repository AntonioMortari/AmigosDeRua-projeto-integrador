import axios from 'axios'

const users = axios.create({
    baseURL:'http://localhost:5000',
})

const publications = axios.create({
    baseURL:'http://localhost:5001',
})

export {users, publications}