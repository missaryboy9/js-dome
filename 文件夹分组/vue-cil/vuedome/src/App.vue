<template>
<el-container>
  <el-aside>
    <el-row class="tac">
  <el-col :span="20">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      unique-opened
      router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>百度地图</span>
        </template>
        <el-menu-item-group>
          <template slot="title">百度地图</template>
          <el-menu-item index="relative/path">地图展示</el-menu-item>
          <el-menu-item index="mapdian/path">地图打点</el-menu-item>
          <el-menu-item index="mapdian/path">地图打点</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>

  </el-aside>
  <el-main style="width:100% height:100%">
    <router-view style="width:100% height:100%"></router-view>
  </el-main>
</el-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
