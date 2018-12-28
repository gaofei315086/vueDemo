// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/public/animate.css'
import * as Sentry from '@sentry/browser'

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
    // 初始化sentry
    Sentry.init({
      dsn: 'https://c53297131ebb4d1891bba6774c926091@sentry.io/1358299',
      integrations: [new Sentry.Integrations.Vue({ Vue })],
      beforeSend(event) {
        // Check if it is an exception, if so, show the report dialog
        if (event.exception) {
          // 默认弹窗展示
          // Sentry.showReportDialog();
        }
        return event;
      }
    })
    // sentry上下文配置
    Sentry.configureScope((scope) => {
      // 设置用户信息
      scope.setUser({
        "username": "gaofei",
        "id":'940224'
      });
      // 设置tag节点  服务器主机名，平台版本，或者用户使用语言
      scope.setTag("version", "1.0.0");
      // 设置警告级别
      scope.setLevel('error');
      // 设置拓展字段
      scope.setExtra("character_name", "Mighty Fighter");
    });

    // 初始化cocos2d


    // try{
    //   throw new DOMException('我是一个异常')
    // }catch(err){
    //   console.info(err)
    //   Sentry.captureException(err);
    // }
  }
})
