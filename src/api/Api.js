import axios from 'axios';

export const Api = {
  getAllLists: (token) => {
    return axios
      .get('/api/lists', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => console.log(err.response.data.message));
  },
  createList: (title) => {
    return axios
      .post('/api/lists', {
        title: title,
      })
      .catch((err) => console.log(err.response.data.message));
  },
  updateList: (id, title, body) => {
    return axios
      .patch(`/api/lists/${id}`, {
        title: title,
        body: body,
      })
      .catch((err) => console.log(err.response.data.message));
  },
  deleteList: (id) => {
    return axios
      .delete(`/api/lists/${id}`)
      .catch((err) => console.log(err.response.data.message));
  },
  login: (data) => {
    return axios
      .post('http://localhost:3000/api/users/login', {
        email: data.email,
        password: data.password,
      })
      .catch((err) => console.log(err.response.data.message));
  },
};
