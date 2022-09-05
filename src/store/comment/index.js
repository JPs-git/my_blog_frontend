import { reqNewComment, reqMsgboard, reqArticleComments } from '@/api'

const actions = {
  // 新评论
  async newComment({commit}, data){
    const result = await reqNewComment(data)
  },
  // 获取留言板评论
  async getMsgboard({commit}, skip){
    const result = await reqMsgboard(skip)
    commit('GETMSGBOARD', result)
  },
  // 获取指定文章评论
  async getArticleComments({commit}, {id, skip}){
    const result = await reqArticleComments(id, skip)
    commit('GETARTICLECOMMENTS', result)
  }
}

const mutations = {
  GETMSGBOARD(state, result){
    state.findResult = result.data.findResult
    state.total = result.data.total
  },
  GETARTICLECOMMENTS(state, result){
    state.findResult = result.data.findResult
    state.total = result.data.total
  }
}
const state = {
  findResult:[],
  total:0
}
const getters = {}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
}