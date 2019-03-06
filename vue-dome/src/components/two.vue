<template>
  <div>
    <el-button @click="dialogVisible = true">1111</el-button>
    <el-dialog
      v-posdialog
      title="提示"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  directives: {
    posdialog: {
      // 指令的定义
      inserted: function (el) {
        const dragDom = el.querySelector(".el-dialog");
        dragDom.style.left = `40%`;
        dragDom.style.top = `-13%`;
        dragDom.style.width = `15%`;
        dragDom.style.minWidth = `230px`;
        dragDom.style.height = `60%`;
      }
    }
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {}
};
// module.exports = {
//   data() {
//     return {
//       dialogVisible: false
//     }
//   },
//   methods: {
//     onclickitem: function(e) {
//       var params = {
//         index: this.index
//       }
//       this.$emit('tabItemOnClick', params)
//     }
//   }
// }
</script>
<style>
</style>
