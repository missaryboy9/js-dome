<template>
  <div>
    <div>测试时刻时间</div>
    {{nowTime.data}}
    <flip-countdown deadline="2020-12-25 00:00:00"></flip-countdown>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'
export default {
  components: {
    FlipCountdown
  },
  data() {
    return {
      nowTime: {
        data: ''
      },
      b: '',
      dataTime: new Date()
    };
  },
  methods: {
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month = new Date(timeStamp).getMonth() + 1 < 10 ? "0" + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1;
      let date = new Date(timeStamp).getDate() < 10 ? "0" + new Date(timeStamp).getDate() : new Date(timeStamp).getDate();
      let hh = new Date(timeStamp).getHours() < 10 ? "0" + new Date(timeStamp).getHours() : new Date(timeStamp).getHours();
      let mm = new Date(timeStamp).getMinutes() < 10 ? "0" + new Date(timeStamp).getMinutes() : new Date(timeStamp).getMinutes();
      let ss = new Date(timeStamp).getSeconds() < 10 ? "0" + new Date(timeStamp).getSeconds() : new Date(timeStamp).getSeconds();
      // return year + "年" + month + "月" + date +"日"+" "+hh+":"+mm ;
      let nowTime = year + "年" + month + "月" + date + "日" + " " + hh + ":" + mm + ":" + ss;
      this.$set(this.nowTime, 'data', nowTime)
      // console.log(this.nowTime);
    },
    // 定时器函数
    nowTimes() {
      this.timeFormate(new Date());
      // setInterval(this.nowTimes,30*1000);
      setInterval(() => {
        this.nowTimes()
      }, 1000 * 60)
    }
  },
  created() {
    this.nowTimes()
    // console.log(this.dataTime)
  },
  watch: {
    nowTime: function (e) {
      this.b = e
    }
  },
  computed: {
    nowTime: function () {
      return this.dataTime
    }
  },
}
</script>

<style>
</style>
