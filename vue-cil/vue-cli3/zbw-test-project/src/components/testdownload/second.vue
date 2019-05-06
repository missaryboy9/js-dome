<template>
  <div id="parent">
    <a-button
      type="primary"
      icon="download"
      @click="dowlond"
    >Download</a-button>
  </div>
</template>
<script>
import aaa from './mixin'
import axios from 'axios'
export default {
  mixins: [aaa],
  data () {
    return {

    }
  },
  methods: {
    dowlond () {
      // 利用axios请求下载文件 主要用于鉴权下载
      axios({
        url: '',
        method: 'get',
        responseType: 'blob', // 返回格式必须定义为二进制文件
        Headers: {} // 方便鉴权
      })
        .then(res => {
          // 后端必须返回文件的二进制格式 使用new blob将文件转为二进制
          let blon = new Blob([res.data])
          // URL.createObjectURL为前端将文件转url的方法
          let url = URL.createObjectURL(blon)
          // 下载
          this.dowlonds(url)
        })
        .catch(rej => { })
    }
  }
}
</script>
<style lang="css">
</style>
