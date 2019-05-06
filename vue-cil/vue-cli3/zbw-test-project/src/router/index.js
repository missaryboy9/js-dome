import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/two',
      name: 'HelloWorld',
      isclosspan: true,
      component: () => import('@/index.vue'),
      children: [
        {
          name: '登录测试',
          path: 'sss',
          component: () => import('@/components/login/index')
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
      path: '/map',
      name: 'map',
      isclosspan: false,
      component: () => import('@/page/map/index.vue')
    },
    {
      path: '/main',
      name: 'VUEX官网加法计数器',
      isclosspan: false,
      component: () => import('@/components/vuex/index')
    },
    {
      path: '/download',
      name: '两种download实现',
      isclosspan: true,
      component: () => import('@/index.vue'),
      children: [
        {
          name: '第一种实现',
          path: 'down',
          component: () => import('@/components/testdownload/index')
        },
        {
          name: '第二种实现',
          path: 'sdown',
          component: () => import('@/components/testdownload/second')
        }
      ]
    }
  ]
})
