
import axios from 'axios'

const actions = {
  fetchReimbursementList ({ commit }) {
    axios
      .get('https://jarbas.serenata.ai/api/chamber_of_deputies/reimbursement/?state=RJ')
      .then((resp) => {
        commit('SET_REIMBURSEMENT_LIST', resp.data.results)
      }).catch(err => console.error(err))
  }

}

export default actions
