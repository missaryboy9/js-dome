import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mapdian from '@/components/mapdian'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/relative/path',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mapdian/path',
      name: 'mapdian',
      component: mapdian
    }
  ]
})
