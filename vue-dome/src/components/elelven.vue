<template>
  <div>
    <el-button @click="openwebsocket">websocket连接测试</el-button>
    <el-button @click="closewebsocket">websocket关闭</el-button>
    <el-button @click="cleanintever">清除定时器</el-button>
    {{data}}
  </div>
</template>
<script>
var ws = new WebSocket("ws://192.168.0.46:8086/socketServer/1");
export default {
  data() {
    return {
      datas: '',
      intever: null
    }
  },
  methods: {
    closewebsocket() {
      ws.close();
      //   ws.onclose = function () {
      //     var code = event.code;
      //     var reason = event.reason;
      //     var wasClean = event.wasClean;
      //   }
    },
    openwebsocket() {
      var ws = new WebSocket("ws://192.168.0.46:8086/socketServer/1");
      //   let ws = new WebSocket("wss://echo.websocket.org");
      //   ws.onopen = function () {
      //     ws.send("Hello WebSockets!");
      //   }
      //   this.datas = ws.readyState
      //   this.intever = setInterval(() => {
      //     console.log('readyState', ws.readyState)
      //   }, 500);
      //   ws.onmessage = function (event) {
      //     console.log(event.data);
      //   };
    },
    cleanintever() {
      clearInterval(this.intever)
      this.intever = null
    }
  },
  created() {
    console.dir('readyState', ws)
    this.intever = setInterval(() => {
      console.log('readyState', ws.readyState)
    }, 500);
    ws.addEventListener("message", function (event) {
      var data = event.data;
      // 处理数据
    });
  },
}
</script>
<style lang="css">
</style>