// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/public/animate.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  beforeCreate:function () {
    // 不能写75 因为谷歌默认字体大小为12，如果是75 做除法时会导致最终值小于12从而使用默认12的字体
    document.documentElement.style.fontSize = document.documentElement.clientWidth*2 / 7.5 + 'px';
  }
})
