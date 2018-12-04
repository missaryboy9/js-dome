<template>
  <div>
    hello vue
    <router-link to="/one">111</router-link>
    <router-link to="/two">定位toolit</router-link>
    <router-link to="/three">流程图</router-link>
    <router-link to="/four">日历</router-link>
    <router-link to="/five">事件修饰符</router-link>
    <router-link to="/six">组件循环调用</router-link>
    <router-view></router-view>
  </div>
</template>
<style>
@font-face {
  font-family: iconfont;
  src: url("//at.alicdn.com/t/font_705462_hpxbr85d2vq.ttf");
}
</style>