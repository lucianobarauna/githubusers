import Vue from 'vue'
import L from 'leaflet'
import 'leaflet.icon.glyph'

import App from './App.vue'
import router from './router'
import store from './store/'
import './registerServiceWorker'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: './assets/images/marker-icon-2x.png',
  iconUrl: './assets/images/marker-icon.png',
  shadowUrl: './assets/images/marker-shadow.png'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
