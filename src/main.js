import Vue from 'vue';
// import VueRouter from 'vue-router';

import AppComponent from './components/App/index.vue'

const vm = new Vue({
  el: '#app',
  components: {
    app: AppComponent
  },
  render: h => h('app'),
})
