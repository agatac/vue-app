export default {
  name: 'App',
  data() {
     return {
       appTitle: 'Vue app',
       sidebar: false,
       menuItems: [
          { title: 'Home', path: '/', icon: 'home' },
          { title: 'GitHub API', path: '/github', icon: 'code' },
        ]
     }
   },
}
