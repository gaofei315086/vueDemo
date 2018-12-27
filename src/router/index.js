import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo001 from '@/components/Demo001'
import svgDemo from '@/components/svgDemo'
import cocosTest from '@/components/cocosTest'
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
    },
    {
      path:'/svgDemo',
      name:'svgDemo',
      component:svgDemo
    },
    {
      path:'/cocosTest',
      name:'cocosTest',
      component:cocosTest
    }]
})
