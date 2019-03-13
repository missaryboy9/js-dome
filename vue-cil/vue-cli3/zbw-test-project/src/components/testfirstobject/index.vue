<template>
  <div>
    <a-button
      type="primary"
      icon="search"
      @click="click"
    >Search</a-button>
    <a-button
      type="primary"
      icon="search"
      @click="refclick"
    >refadd</a-button>
    <a-button
      type="primary"
      icon="search"
      @click="showclick"
    >show</a-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datas: 111
    }
  },
  methods: {
    refclick () {
      this.$setjson('ss', [111, 222])
    },
    click () {
      let path = ''
      // this.$http.get()
      this.$setjson('haha', [222, 333])
    },
    showclick () {
      this.$showjson()
    }
  }
}
</script>
<style lang="css">
</style>
