import axios from "./index";

export default {

    get (data = {}) {
      return axios.get('/groups', { params: data })
    },
    save (item) {
      return item.post('/api/roles/store')
    },
    delete (id) {
      return axios.delete(`/groups/${id}/delete`)
    },
    getGroups () {
      return axios.get('/groups/all')
    },
  }