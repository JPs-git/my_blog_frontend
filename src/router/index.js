import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件
import Home from '@/views/Home'
import Article from '@/views/Article'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path:'/article',
    component:Article
  },
  {
    path:'*',
    redirect:'/'
  }
]

const router = new VueRouter({
  routes
})

export default router
