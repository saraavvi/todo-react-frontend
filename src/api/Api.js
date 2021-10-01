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
  deleteList: (id) => {
    return axios.delete(`/api/lists/${id}`);
  },
};
