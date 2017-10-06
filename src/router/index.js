import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from '../components/Home.vue'
import GitHubApp from '../components/GitHubApp/GitHubApp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '/github',
      name: 'GitHub',
      component: GitHubApp
    }
  ]
})
