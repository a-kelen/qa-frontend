import axios from '../axios'
const state = {
  ownRooms: [],
  activeRoom: {},
  subscribesRooms: [],
  searchRooms: []
}
// getters
const getters = {

}
// actions
const actions = {
  createRoom ({ commit }, room) {
    return new Promise((resolve, reject) => {
      axios.post('room', room)
        .then(resp => {
          commit('add_own_room', resp.data)
          resolve(resp)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  subscribe ({ commit }, roomId) {
    axios.post('room/switch', { roomId: roomId })
      .then(resp => {
        commit('subscribe_switch', resp.data)
      })
  },
  editRoom ({ commit }, room) {
    axios.put('room/' + room.id, room)
      .then(resp => {
        console.log(resp)
      })
  },
  deleteRoom ({ commit }, room) {
    axios.delete('room/' + room.id)
      .then(resp => {
        commit('delete_room', room.id)
      })
  },
  getOwnRooms ({ commit }) {
    axios.get('room')
      .then(resp => {
        console.log(resp)
        commit('set_list', resp.data)
      })
  },
  getSubscribesRooms ({ commit }) {
    axios.get('room/subscribes')
      .then(resp => {
        commit('set_subscribes_list', resp.data)
      })
  },
  getRoom ({ commit, state }, roomId) {
    if (state.activeRoom.id !== roomId) {
      axios.get(`room/${roomId}`)
        .then(resp => {
          commit('set_active_room', resp.data)
          commit('QuestionStore/set_active_questions', resp.data.questions, { root: true })
        })
    }
  },
  search ({ commit }, query) {
    axios.get(`room/search/${query}`)
      .then(resp => {
        console.log(resp)
        commit('set_search', resp.data)
      })
  }
}
// mutations
const mutations = {
  set_list (state, list) {
    state.ownRooms = list
  },
  set_search (state, list) {
    state.searchRooms = list
  },
  set_subscribes_list (state, list) {
    state.subscribesRooms = list
  },
  set_active_room (state, room) {
    state.activeRoom = room
  },
  add_own_room (state, room) {
    state.ownRooms.push(room)
  },
  delete_room (state, id) {
    state.ownRooms = state.ownRooms.filter(r => r.id !== id)
  },
  subscribe_switch (state, isSubscribed) {
    state.activeRoom.subscriberCount = isSubscribed === true ? state.activeRoom.subscriberCount + 1 : state.activeRoom.subscriberCount - 1
    state.activeRoom.isSubscribed = isSubscribed
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
