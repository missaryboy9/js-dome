<template>
  <section>
    <el-button @click.once="onece">点击事件只被触发一次</el-button>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onece() {
      alert(111);
    }
  }
};
</script>
<style>
</style>