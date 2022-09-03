import { reqNewComment, reqMsgboard } from '@/api'

const actions = {
  async newComment({commit}, data){
    const result = await reqNewComment(data)
  },
  async getMsgboard({commit}){
    const result = await reqMsgboard()
    commit('GETMSGBOARD', result)
  }
}

const mutations = {
  GETMSGBOARD(state, result){
    state.MsgBoard = result.data.findResult
  }
}
const state = {
  MsgBoard:[]
}
const getters = {}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
}