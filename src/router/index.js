import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件
import Home from '@/views/Home'
import Article from '@/views/Article'
import List from '@/views/ArticleList'
import Developing from '@/views/Developing.vue'
import MsgBoard from '@/views/MsgBoard'

// 备份原本的push、replace方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写push、replace方法 以解决重复点击报错
// 通过重写两个方法，为其添加resolve和reject函数解决
VueRouter.prototype.push = function(location, resolve, reject){
    if(resolve && reject){
        originPush.call(this, location, resolve, reject)
    }else{
        originPush.call(this,location, () =>{}, () =>{})
    }
}
VueRouter.prototype.replace = function(location, resolve, reject){
    if(resolve && reject){
        originReplace.call(this, location, resolve, reject)
    }else{
        originReplace.call(this,location, () =>{}, () =>{})
    }
}

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
    path:'/list',
    component:List
  },
  {
    path:'/developing',
    name:'developing',
    component:Developing
  },
  {
    path:'/msgboard',
    component:MsgBoard
  },
  {
    path:'*',
    redirect:'/developing'
  }
]

const router = new VueRouter({
  routes
})

export default router
