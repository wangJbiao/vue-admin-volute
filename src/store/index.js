import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './module/app'
import permission from './module/permission'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    permission
  },
  getters
})
