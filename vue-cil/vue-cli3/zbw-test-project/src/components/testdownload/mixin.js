export default {
  methods: {
    dowlonds (e) {
      // 找父节点
      let body = document.querySelector('body')
      // 创建a标签
      let a = document.createElement('a')
      // 给父节点添加
      body.appendChild(a)
      // 设置属性
      a.setAttribute('download', '')
      a.setAttribute('href', e)
      a.style.display = 'none'
      // 触发点击事件
      a.click()
      // 移除元素避免内存溢出
      a.parentNode.removeChild(a)
    }
  }
}
