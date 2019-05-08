import Vue from 'vue'
import Vuex from 'vuex'
import test from './store/test'
import shop from './store/shop'
import platform from './store/platform'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test,
    shop,
    platform
  }
})
