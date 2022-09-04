import { reqNewComment, reqMsgboard } from '@/api'

const actions = {
  async newComment({commit}, data){
    const result = await reqNewComment(data)
  },
  async getMsgboard({commit}, skip){
    const result = await reqMsgboard(skip)
    commit('GETMSGBOARD', result)
  }
}

const mutations = {
  GETMSGBOARD(state, result){
    state.MsgBoard = result.data.findResult
    state.total = result.data.total
  }
}
const state = {
  MsgBoard:[],
  total:1 
}
const getters = {}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
}