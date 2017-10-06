import Vue from 'vue';
import Vuetify from 'vuetify'
import router from './router'

import AppComponent from './components/App/App.vue'

Vue.use(Vuetify)

const vm = new Vue({
  el: '#app',
  router,
  components: {
    app: AppComponent
  },
  render: h => h('app'),
})
