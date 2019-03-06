<template>
  <section>
    <p class="textcontent">
      <i
        @click="showtree"
        class="iconfont"
        v-if="show"
      >&#xe7bd;</i>
      <i
        @click="showtree"
        class="iconfont"
        v-else
      >&#xe651;</i>
      <span
        style="cursor:pointer"
        @click="clicknode(folder.id)"
      >{{ folder.name }}</span>
      <tree-folder-contents
        @clicknode='clicknode'
        v-if="show"
        :children="folder.children"
      ></tree-folder-contents>
    </p>
  </section>
</template>
<script>
// 官方文档：「在我们的例子中，将 tree-folder 组件做为切入起点。我们知道制造矛盾的是 tree-folder-contents 子组件，所以我们在 tree-folder 组件的生命周期钩子函数 beforeCreate 中去注册 tree-folder-contents 组件」
export default {
  props: ["folder"],
  data: function() {
    return {
      show: true
    };
  },
  methods: {
    clicknode(id) {
      //   console.log(id);
      this.$emit("clicknode", id);
    },
    showtree() {
      this.show = !this.show;
    }
  },
  beforeCreate: function() {
    // 官方文档给出的是require
    // this.$options.components.TreeFolderContents = require('./tree-folder-contents.vue')
    // 在基于vue-cli@2.8.1按照上面的写法还是会报错
    // Failed to mount component: template or render function not defined.
    // 所以我们应该改为基于es6的写法异步加载一个组件如下
    this.$options.components.TreeFolderContents = () =>
      import("./treerender.vue");
  }
};
</script>
<style scoped>
.textcontent {
  margin: 0px;
}
ul {
  margin: 0px;
  border-left-color: #ccc;
  border-left-style: dashed;
  border-left-width: 1px;
}
li {
  list-style: none;
}
.iconfont {
  font-family: iconfont;
  font-size: 18px;
  font-style: normal;
}
i {
  position: relative;
}
i::before {
  content: " ";
  position: absolute;
  left: -18px;
  top: 10px;
  width: 15px;
  background-color: #e9e9e9;
  border: 1px dashed lightgray;
}
</style>