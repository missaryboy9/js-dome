<template>
  <ul class="ulstyle">
    <li v-for="child in children">
      <tree-folder
        v-if="child.children"
        :folder="child"
      ></tree-folder>
      <span
        v-else
        @click="clickone(child.id)"
        class="option"
      >{{ child.name }}</span>
    </li>
  </ul>
</template>
<script>
import TreeFolder from "./treefond.vue";
export default {
  props: ["children"],
  components: {
    TreeFolder
  },
  data() {
    return {};
  },
  methods: {
    clickone(id) {
      this.$emit("clicknode", id);
      //   console.log(id);
    }
  }
};
</script>
<style>
.option {
  cursor: pointer;
}
.ulstyle {
  padding-left: 20px;
  list-style: none;
}
</style>