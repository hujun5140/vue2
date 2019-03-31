// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 解决移动端点击300毫秒的延迟
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 解决默认样式的统一
import 'styles/reset.css'
// 解决1px边框的问题
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
