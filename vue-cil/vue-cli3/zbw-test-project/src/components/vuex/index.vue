<template>
  <div>
    1222
    {{consta}}
    <a-button
      type="primary"
      @click="add"
    >+</a-button>
    <a-button
      type="primary"
      @click="less"
    >-</a-button>
  </div>
</template>
<script>
import state from '../../vuex/stores.js'
export default {
  data () {
    return {

    }
  },
  methods: {
    add () {
      state.commit('addconst')
    },
    less () {
      state.commit('lessconst')
    }
  },
  computed: {
    consta () {
      return state.state.const
    }
  },
  created () {
    console.log(this)
  }
}
</script>
<style lang="css">
</style>
