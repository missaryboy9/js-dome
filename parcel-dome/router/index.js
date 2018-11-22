import Vue from 'vue'
import Vuerouter from 'vue-router'

Vue.use(Vuerouter)

// import home from '../components/home.vue'
// import shop from '../components/shop.vue'

const router = new Vuerouter({
    routes: [
        {
            path: '/home', component: () => import('../components/home.vue')
        },
        {
            path: '/shop', component: () => import('../components/shop.vue')
        }
    ]
})

export default router