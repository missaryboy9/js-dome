// import router from 'vue-router'
// import state from '../../vuex/stores'

// let longinpath = '/login'

class baseninit { }
baseninit.install = function (Vue, {
  router,
  state,
  longinpath = '/login'
}) {
  // 动态添加路由

  // 路由拦截器 判断是否登录 再state中定义了state.baserouter是用来存放路由信息的但是这个信息不一定合格addroutes的规则 所以我们要处理一下
  let baserouter = state.baserouter
  let routerformate = baserouter.forEach(e => {
    if (e.isclosspan) {
      e.children.forEach(l => {
        l.component = () => import(l.src)
      })
    } else {
      e.component = () => import(e.src)
    }
  })
  router.addRoutes(routerformate)
  // 判断当前是否登录
  function islogin () {
    let islogin = sessionStorage.getItem('islogin')
    return islogin
  }
  // 导航守卫
  /**
   * 1必须登录才能跳转或者去登录界面才能跳转
   */
  router.beforeEach((to, from, next) => {
    if (islogin || to.path === longinpath) {
      next()
    } else {
      next(false)
    }
  })
  // 后置钩子
  router.afterEach((to, from) => {
    // dosomthing
  })
}

export default baseninit
