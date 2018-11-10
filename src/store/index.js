import Vue from 'vue'
import Vuex from 'vuex'
import githubusers from './githubusers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    githubusers
  }
})
