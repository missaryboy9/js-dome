import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import a from '../components/one.vue'
import b from '../components/two.vue'

const router = new VueRouter({
    routes: [
        { path: '/one', component: a },
        { path: '/two', component: b },
        { path: '/three', component: () => import('../components/three.vue') }
    ]
})

export default router