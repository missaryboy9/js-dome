<template>
  <div>
    {{bevalue}}
    <el-input
      :value="value"
      v-model="bevalue"
      placeholder="请输入内容"
      type=password
    ></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '111',
      bevalue: ''
    };
  },
  created() {

  },

}
</script>

<style>
</style>
