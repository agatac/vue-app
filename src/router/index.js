import Vue from 'vue'
import Router from 'vue-router'

import HelloComponent from '../components/Hello.vue'
import GitHubApp from '../components/GitHubApp/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloComponent
    },
    {
      path: '/github',
      name: 'GitHub',
      component: GitHubApp
    }
  ]
})
