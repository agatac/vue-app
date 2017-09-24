import bus from '../bus'

export default {
  name: 'GithubInput',
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
