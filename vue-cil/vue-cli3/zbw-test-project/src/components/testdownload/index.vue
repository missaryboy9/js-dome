<template>
  <div id='pointa'>
    <a-button
      type="primary"
      icon="download"
      @click="dowlond"
    >Download</a-button>
  </div>
</template>
<script>
import bbb from './mixin.js'
export default {
  mixins: [bbb],
  data () {
    return {
      data: 1
    }
  },
  methods: {
    dowlond () {
      this.dowlonds()
    }
  },
}
</script>
<style lang="css">
</style>
