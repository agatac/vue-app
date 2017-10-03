import Vue from 'vue';
import router from './router'

import AppComponent from './components/App/App.vue'

const vm = new Vue({
  el: '#app',
  router,
  components: {
    app: AppComponent
  },
  render: h => h('app'),
})
