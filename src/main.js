import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 清除默认样式
import '@/assets/style/css/reset.css'
// 引入图标字体
import '@/assets/style/font/fa/css/all.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    // 安装全局事件总线
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
