import axios from 'axios'

const client  = axios.create({ baseURL: 'https://blog-server-universe.herokuapp.com' })

client.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token) {

        config.headers.authrization = token
    }
    return config
})

export default client