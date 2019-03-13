import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/two',
      name: 'HelloWorld',
      component: HelloWorld,
      isclosspan: true,
      children: [
        {
          name: 'ssss',
          path: 'sss',
          component: () => import('@/components/testfirstobject/index')
        }
      ]
    },
    {
      path: '/one',
      name: 'firsthellow',
      isclosspan: false,
      component: () => import('@/components/testfirstobject/index')
    },
    {
      path: '/main',
      name: '主要成分',
      isclosspan: false,
      component: () => import('@/components/main/index')
    }
  ]
})
