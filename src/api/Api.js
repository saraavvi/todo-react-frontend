import axios from "axios";

export const Api = {
  getAllLists: () => {
    console.log("request!");
    return axios.get("/api/lists");
  },
  createList: (title) => {
    return axios.post("/api/lists", {
      title: title,
    });
  },
};
