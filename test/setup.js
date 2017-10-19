const hooks = require('require-extension-hooks')
const Vue = require('vue')
const Vuetify = require('vuetify').default

// Setup browser environment
require('browser-env')()

Vue.use(Vuetify)

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push()
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).plugin('babel').push()

window.Vue = Vue

// https://medium.freecodecamp.org/how-to-write-blazing-fast-vue-unit-tests-with-tape-and-vue-test-utils-be069ccd4acf
// https://github.com/vuetifyjs/vuetify/issues/243
