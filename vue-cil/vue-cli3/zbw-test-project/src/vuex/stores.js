import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

const state = {
  basename: 'basevuecli',
  baserouter: [],
  const: 0
}
const mutations = {
  setbasename (value) {
    state.basename = value
  },
  setbaserouter (value) {
    state.basename = value
  },
  addconst () {
    state.const++
  },
  lessconst () {
    state.const--
  }
}

export default new Vuex.Store({
  state,
  mutations
})
