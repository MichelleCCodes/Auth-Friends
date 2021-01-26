import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    // creates an instance of axio with the config object build into it 
    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            Authorization: token
        }
    });
}
