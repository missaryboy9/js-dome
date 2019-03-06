<template>
  <section>
    <el-cascader
      :options="cityOptions"
      :value="city"
      @change="changeProvince"
      change-on-select
    >
    </el-cascader>
  </section>
</template>
<script>
import cityOptions from "../common/element.js";
export default {
  data() {
    return {
      cityOptions: cityOptions
    };
  }
};
</script>
<style>
</style>