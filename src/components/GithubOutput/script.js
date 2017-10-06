import Vue from 'vue'
import bus from '../bus'
import GitHubUserData from '../GitHubUserData/GitHubUserData.vue'

export default {
  name: 'GitHubOutput',
  components: {
    'github-user-data': GitHubUserData,
  },
  created() {
    bus.$on('new-username', this.onUsernameChange)
  },
  destroyed() {
    bus.$off('new-username', this.onUsernameChange)
  },
  methods: {
    onUsernameChange(name) {
      this.currentUsername = name
      this.currentUsername && this.fetchGitHubData(name)
    },
    fetchGitHubData(name) {
      // if we have data already, don't request again
      if (this.githubData.hasOwnProperty(name)) return

      const url = `https://api.github.com/users/${name}`
      fetch(url)
        .then(r => r.json())
        .then(data => {
          Vue.set(this.githubData, name, data)
        })
    }
  },
  data() {
    return {
      currentUsername: null,
      githubData: {}
    }
  }
}
