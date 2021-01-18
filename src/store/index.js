import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './modules/UserStore'
import RoomStore from './modules/RoomStore'
import QuestionStore from './modules/QuestionStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    UserStore,
    RoomStore,
    QuestionStore
  }
})
