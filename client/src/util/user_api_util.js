import axios from 'axios';
import enviroment from '../config/env';
axios.defaults.baseURL = enviroment.baseURL;

export const fetchAllUsers = () => (
  axios.get(`/api/users/`)
);

export const fetchSingleUser = id => (
  axios.get(`/api/users/${id}`)
);

export const fetchUsers = () => (
  axios.get('/api/users')
);

// export const fetchUserQuery = (userData) => {
//   axios.get('/api/users', {
//     params: { userData }
//   })
// };