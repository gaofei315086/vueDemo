import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo001 from '@/components/Demo001'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Demo001',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Demo001',
      component: Demo001
    }
  ]
})
