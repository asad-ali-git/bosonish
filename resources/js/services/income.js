import axios from "./index";

export default {
  save(item) {
    return item.post("/api/incomes/store");
  },

  get(data = {}) {
    return axios.get("/incomes", { params: data });
  },

  getIncomesGroups() {
    return axios.get("/groups/incomes");
  },

  getUsers() {
    return axios.get("/settings/get/users");
  },

  delete(id) {
    return axios.delete(`/incomes/${id}/delete`);
  },
};
