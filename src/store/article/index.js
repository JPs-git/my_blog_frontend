import { reqTest, reqArticleList, reqArticleById } from "@/api"

const actions = {
  // 测试
  async articleTest({commit}){
    const result = await reqTest()
    console.log(result)
  },
  //获取文章列表
  async getArticleList({commit}){
    const result = await reqArticleList()
    commit('GETARTICLELIST', result)
  },
  // 获取指定id文章
  async getArticleById({commit}, id){
    const result = await reqArticleById(id)
    commit('GETARTICLEBYID', result)
  }
}

const mutations = {
  GETARTICLELIST(state, result){
    state.articleList = result.data.findResult
  },
  GETARTICLEBYID(state, result){
    state.article = result.data.findResult
  }
}

const state = {
  articleList:[],
  article:{}
}
const getters = {}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
}