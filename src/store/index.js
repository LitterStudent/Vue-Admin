import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  modules: {
    app
  }
})

export default store