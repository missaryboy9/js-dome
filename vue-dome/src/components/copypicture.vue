<template>
  <div id="center">
    <div
      id="capture"
      class="capture"
    >
      <p>{{text}}</p>
      <p>{{text}}</p>
      <p>{{text}}</p>
      <p>{{text}}</p>
      <p>{{text}}</p>
    </div>
    <img
      crossOrigin=''
      class="styleimage"
      :src="imagesrc"
    ></img>
    <button @click="dosomthing"></button>
  </div>
</template>
<script>
import html2canvas from 'html2canvas'
export default {
  data () {
    return {
      imagesrc: '',
      text: ''
    }
  },
  methods: {
    dosomthing () {
      html2canvas(document.querySelector("#capture")).then(canvas => {
        this.imagesrc = canvas.toDataURL('image/png')
      });
    }
  },
  created () {
    setTimeout(() => {
      this.text = '这是一张准备截图的dom'
    }, 1000);
  },
}
</script>
<style lang="css">
.styleimage {
  height: 200px;
  width: 200px;
}
.capture {
  height: 200px;
  width: 200px;
}
</style>