import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import a from '../components/one.vue'
import b from '../components/two.vue'

const router = new VueRouter({
    routes: [
        { path: '/one', component: a },
        { path: '/two', component: b },
        { path: '/three', component: () => import('../components/three.vue') },
        { path: '/four', component: () => import('../components/four.vue') },
        { path: '/five', component: () => import('../components/five.vue') },
        { path: '/six', component: () => import('../components/treenodes/index.vue') },
        { path: '/seven', component: () => import('../components/seven.vue') },
        { path: '/eit', component: () => import('../components/eit.vue') },
        { path: '/nie', component: () => import('../components/nie.vue') },
        { path: '/ten', component: () => import('../components/ten.vue') },
        { path: '/elelven', component: () => import('../components/elelven.vue') },
        { path: '/copypicture', component: () => import('../components/copypicture.vue') }
    ]
})

export default router