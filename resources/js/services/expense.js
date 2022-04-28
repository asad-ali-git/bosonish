import axios from './index';


export default{
    save (item) {
        return item.post('/api/expenses/store')
      },
      get(data = {}){
        return axios.get('/expenses', { params: data });
      },
      getExpenses(){
        return axios.get('/expenses/fetch');
      },
      getUsers(){
        return axios.get('/expenses/fetchUsers');
      },
      delete (id) {
        return axios.delete(`/expenses/${id}/delete`)
      },
      getall () {
        return axios.get('/settings/groups/all')
      },

      sendEmails() {
        return axios.get('/sendEmail')
      }
}