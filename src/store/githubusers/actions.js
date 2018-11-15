
import { http } from '../../axios'

const actions = {
  enterIdGithub ({ commit }, id) {
    commit('SET_GiTHUB_ID', id)
  },
  fetchGithub ({ commit, state }) {
    return http.get(`users/${state.idGithubUser}`).then((resp) => {
      if (resp.status === 200) {
        commit('SET_GITHUB_DATA', resp)
        return resp
      }
    })
  }
}

export default actions
