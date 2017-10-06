import bus from '../bus'

export default {
  name: 'GitHubInput',
  methods: {
    onSubmit(e) {
      this.$refs.form.validate() && bus.$emit('new-username', this.username)
    },
    clear() {
      this.$refs.form.reset()
      bus.$emit('new-username', null)
    },
  },
  data() {
    return {
      valid: true,
      username: '',
      usernameRules: [
        (v) => !!(v.trim()) || 'Username is required'
      ]
    }
  },
}
