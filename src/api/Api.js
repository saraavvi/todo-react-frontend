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

  updateList: async (token, id, title, body) => {
    try {
      return axios.patch(
        `/api/lists/${id}`,
        {
          title: title,
          body: body,
        },
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

  deleteList: async (token, id) => {
    try {
      return axios
        .delete(`/api/lists/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    } catch (err) {
      return console.log(err.response.data.message);
    }
  },

  login: async (data) => {
    try {
      return axios
        .post('http://localhost:3000/api/users/login', {
          email: data.email,
          password: data.password,
        });
    } catch (err) {
      return console.log(err.response.data.message);
    }
  },
};
