<template>
  <a-layout
    class="main"
    id="components-layout-demo-custom-trigger"
  >
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo center">
        <H3>ZBW</H3>
      </div>
      <a-menu
        theme="dark"
        mode="inline"
        :defaultSelectedKeys="['1']"
      >
        <template v-for="item in menuslist">
          <a-menu-item
            v-if="!item.isclosspan"
            :key="item.key"
            @click="router(item.path)"
          >
            <a-icon type="pie-chart" />
            <span>{{item.name}}</span>
          </a-menu-item>
          <a-sub-menu v-else>
            <span slot="title">
              <a-icon type="setting" />
              <span>{{item.name}}</span>
            </span>
            <a-menu-item
              v-for="items in item.children"
              @click="router(item.path+'/'+items.path)"
            >{{items.name}}</a-menu-item>
          </a-sub-menu>
          <!-- <sub-menu
            v-else
            :menu-info="item"
            :key="item.key"
          /> -->
        </template>
        <!-- <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="appstore" /><span>Navigation Two</span></span>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
          <a-sub-menu
            key="sub3"
            title="Submenu"
          >
            <a-menu-item key="11">Option 11</a-menu-item>
            <a-menu-item key="12">Option 12</a-menu-item>
          </a-sub-menu>
        </a-sub-menu> -->
        <!-- <div
          v-for="(item,i) in navigatioerBar"
          :key="i"
        >
          <a-menu-item v-if="item.showsubclass">
            <a-icon type="user" />
            <span>{{item.name}}</span>
            <div>
              <a-menu-item
                v-for="(items,i) in item.children"
                :key="i"
              >
                <a-icon type="user" />
                <span>{{items.name}}</span>
              </a-menu-item>
            </div>
          </a-menu-item>
          <a-sub-menu
            key="sub1"
            v-else
          >
            <span slot="title">
              <a-icon type="mail" /><span>Navigation One</span></span>
            <a-menu-item key="5">Option 5</a-menu-item>
            <a-menu-item key="6">Option 6</a-menu-item>
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
          </a-sub-menu>
        </div> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data () {
    return {
      collapsed: false,
      navigatioerBar: [
        {
          name: 'nav 1',
          path: 'one',
          showsubclass: true,
          icon: ''
        },
        {
          name: 'nav 2',
          path: 'two',
          showsubclass: false,
          children: []
        }
      ],
      menuslist: []
    }
  },
  methods: {
    router (e) {
      this.$router.push(e)
    }
  },
  created () {
    console.log(this.$router.options.routes)
    this.menuslist = this.$router.options.routes
  },
}
</script>
<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.router {
  color: #fff;
}
.main {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
