import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './registerServiceWorker'

//  LEAFLET
// import L from 'leaflet'
// delete L.Icon.Default.prototype._getIconUrl

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: './assets/images/marker-icon-2x.png',
//   iconUrl: './assets/images/marker-icon.png',
//   shadowUrl: './assets/images/marker-shadow.png'
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
