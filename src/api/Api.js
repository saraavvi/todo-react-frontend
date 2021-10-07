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

  createList: async (title) => {
    const token = localStorage.getItem('jwt');
    return axios.post(
      '/api/lists',
      { title: title },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
      return axios.delete(`/api/lists/${id}`, {
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
      return axios.post('/api/users/login', {
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      return console.log(err.response.data.message);
    }
  },

  signup: async (data) => {
    try {
      return axios.post('/api/users/signup', {
        name: data.name,
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
      });
    } catch (err) {
      return console.log(err.response.data.message);
    }
  },

  getMe: async () => {
    const token = localStorage.getItem('jwt');
    try {
      return axios.get('/api/users/getMe', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      return console.log(err.response.data.message);
    }
  },
};
