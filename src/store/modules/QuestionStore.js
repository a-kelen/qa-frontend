import axios from '../axios'
const state = {
  activeQuestions: [],
  myQuestions: [],
  activeAnswers: [],
  lastestAnswers: []
}
// getters
const getters = {
  myQuestionsCount: s => s.myQuestions.length
}

// actions
const actions = {
  createQuestion ({ commit }, question) {
    axios.post('question', question)
      .then(resp => {
        commit('add_question', resp.data)
      })
  },
  createAnswer ({ commit }, answer) {
    axios.post('answer', answer)
      .then(resp => {
        commit('add_answer', resp.data)
        commit('set_is_completed', { questionId: answer.questionId, answer: resp.data })
      })
  },
  support ({ commit }, questionId) {
    axios.post('question/support', { questionId: questionId })
      .then(resp => {
        commit('switch_support', { questionId: questionId, isSupported: resp.data })
      })
  },
  ignore ({ commit }, questionId) {
    axios.post('question/ignore', { questionId: questionId })
      .then(resp => {
        commit('ignore_answer', questionId)
      })
  },
  getMyQuestions ({ commit }) {
    axios.get('question/own')
      .then(resp => {
        commit('set_my_questions', resp.data)
      })
  },
  getLastestAnswers ({ commit }) {
    axios.get('answer/lastest')
      .then(resp => {
        commit('set_lastest_answers', resp.data)
      })
  }
}
// mutations
const mutations = {
  set_active_questions (state, list) {
    state.activeQuestions = list
    list.forEach(a => {
      if (a.answer != null) {
        state.activeAnswers.push(a.answer)
      }
    })
  },
  set_my_questions (state, list) {
    state.myQuestions = list
  },
  set_lastest_answers (state, list) {
    state.lastestAnswers = list
  },
  switch_support (state, payload) {
    state.activeQuestions.forEach(q => {
      if (q.id === payload.questionId) {
        q.support = payload.isSupported === true ? +q.support + 1 : +q.support - 1
      }
    })
  },
  ignore_answer (state, questionId) {
    state.activeQuestions.forEach(q => {
      if (q.id === questionId) {
        q.isCompleted = 2
      }
    })
  },
  add_question (state, question) {
    state.activeQuestions.push(question)
    state.myQuestions.push(question)
  },
  add_answer (state, answer) {
    state.activeAnswers.push(answer)
  },
  set_is_completed (state, payload) {
    state.activeQuestions.forEach(q => {
      if (q.id === payload.questionId) {
        q.answer = payload.answer
      }
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
