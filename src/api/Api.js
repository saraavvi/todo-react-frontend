import axios from 'axios';

export const Api = {
  getAllLists: async (token) => {
    try {
      return axios.get('/api/lists', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      return console.log(err.response.data.message);
    }
  },
  createList: async (token, title) => {
    try {
      return axios.post(
        '/api/lists',
        { title: title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      return console.log(err.response.data.message);
    }
  },
  updateList: (token, id, title, body) => {
    return axios
      .patch(`/api/lists/${id}`, {
        title: title,
        body: body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => console.log(err.response.data.message));
  },
  deleteList: (token, id) => {
    return axios
      .delete(`/api/lists/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
