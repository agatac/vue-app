import bus from '../bus'

export default {
  name: 'GitHubInput',
  methods: {
    onSubmit(e) {
      this.username && bus.$emit('new-username', this.username)
    }
  },
  data() {
    return {
      username: '',
    }
  }
}
