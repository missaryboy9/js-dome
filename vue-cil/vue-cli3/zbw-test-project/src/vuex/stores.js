import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

const state = {
  basename: 'basevuecli',
  baserouter: []
}
const mutations = {
  setbasename (value) {
    state.basename = value
  },
  setbaserouter (value) {
    state.basename = value
  }
}

export default new Vuex.Store({
  state,
  mutations
})
