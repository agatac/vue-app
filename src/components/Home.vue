<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h3>Welcome to a Vue App</h3>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-3>
      <blockquote>
        It's a basics application to learn Vue, VueRouter and Vuetify
      </blockquote>
    </v-flex>
    <v-flex class="text-xs-center" mt-5>
      <v-btn color="primary" v-on:click="openGitRepo">
        Source Code
      </v-btn>
      <v-btn v-on:click="emailMe">
        <v-icon left>email</v-icon>
        Contact
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      openGitRepo: function() {
        window.open("https://github.com/agatac/vue-app")
      },
      emailMe: function() {
        window.location.href="mailto:ciechanowska.agata4@gmail.com"
      },
    },
  }
</script>
