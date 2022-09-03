import Vue from 'vue'
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)
// 引入子模块
import article from './article'
import comment from './comment'
// 对外暴露Store实例
export default new Vuex.Store({
  // 模块化
  modules: { article , comment},
})