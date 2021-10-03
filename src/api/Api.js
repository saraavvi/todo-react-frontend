import axios from "axios";

export const Api = {
  getAllLists: () => {
    return axios.get("/api/lists");
  },
  createList: (title) => {
    return axios.post("/api/lists", {
      title: title,
    });
  },
  updateList: (id, title, body) => {
    return axios.patch(`/api/lists/${id}`, {
      title: title,
      body: body,
    });
  },
  deleteList: (id) => {
    return axios.delete(`/api/lists/${id}`);
  },
};
