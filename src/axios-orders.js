import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-app-834d9-default-rtdb.firebaseio.com/'
});

export default instance;