import Vue from 'vue'
import App from './App.vue'
import VueFormulate from '@braid/vue-formulate'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/global.css'
import './assets/formulate.css'

Vue.use(VueFormulate)

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
}).$mount('#app')
