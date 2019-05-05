import Vue from 'vue'
import Vuex from 'vuex'
import test from './store/test'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test,
  }
})
