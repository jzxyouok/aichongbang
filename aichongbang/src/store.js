import Vue from 'vue'
import Vuex from 'vuex'
import test from './store/test'
import service from './store/service'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test,
    service,
  }
})
