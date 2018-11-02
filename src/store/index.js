import Vue from 'vue'
import Vuex from 'vuex'
import mapwinners from './mapwinners'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mapwinners
  }
})
