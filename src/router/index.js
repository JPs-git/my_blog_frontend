import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Home
  }
]

const router = new VueRouter({
  routes
})

export default router
