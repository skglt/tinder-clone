import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinderb-ackend.herokuapp.com/",
})

export default instance;