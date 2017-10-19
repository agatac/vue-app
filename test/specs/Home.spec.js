import test from 'tape'
import { shallow } from 'vue-test-utils'
import Home from '../../src/components/Home.vue'

test('Home.vue renders', t => {
  t.plan(1)
  const wrapper = shallow(Home)
  t.equal(typeof wrapper, 'object')
})
