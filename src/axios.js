import axios from 'axios'

const instance = axios.create({
    baseURL:'https://tinder-backend-sourabh.herokuapp.com/',
})

export default instance;