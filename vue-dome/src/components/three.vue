<template>
  <section>
    <div
      class="tootlie"
      v-show="statuslist !== 5"
    >
      <ul class="ulstye">
        <li :class="['ullist', statuslist === 0?'clicknone':'']">
          <div class="">
            <div
              :class="[statuslist === 1?'clicknone':'']"
              style="font-size:30px"
            >&#xe64b;</div>
            <div class="line"></div>
          </div>
        </li>
        <li class="ullist">
          <div class="">
            <div
              :class="[statuslist === 2?'clicknone':'']"
              style="font-size:30px"
            >&#xe649;</div>
            <div class="line"></div>
          </div>
        </li>
        <li class="ullist">
          <div class="">
            <div
              :class="[statuslist === 3?'clicknone':'']"
              style="font-size:30px"
            >&#xe615;</div>
            <!-- <div class="line"></div> -->
          </div>
        </li>
      </ul>
      <ul class="contentstye">
        <li
          class="valueullist"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="fontstyle">
            {{item.value}}
          </div>
          <div class="fontstyle iconfont">
            &#xecec;{{item.time}}
          </div>
          <div
            class="fontstyle"
            style="color:#db2d43"
          >
            {{item.status}}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          value: "任务开始",
          time: "2018-11-01",
          status: "已上报"
        }
      ]
    };
  },
  computed: {
    statuslist: function() {
      let data = this.items.length;
      if (data > 3 || data <= 0) {
        console.error("数据输入超出范围");
        return 5;
      }
      return this.items.length;
    }
  }
};
</script>
<style >
.fontstyle {
  font-size: 13px;
}
.contentstye {
  width: 100px;
  list-style: none;
  padding: 20px;
}
.ulstye {
  width: 30px;
  list-style: none;
}
.valueullist {
  font-family: iconfont;
  height: 100px;
  display: flex;
  flex-direction: column;
}
.ullist {
  font-family: iconfont;
  height: 100px;
  display: flex;
  flex-direction: row;
}
.line {
  height: 55px;
  transform: translateX(13px);
  border-left-color: black;
  border-left-style: dashed;
  border-left-width: 2px;
}
.tootlie {
  min-width: 210px;
  display: flex;
  flex-direction: row;
}
.clicknone {
  animation: identifier 1s linear 0.5s infinite alternate;
  color: #ff7f00;
}
@keyframes identifier {
  0% {
    transform: rotate(10deg);
    transform-origin: 50% 50%;
  }
  100% {
    transform: rotate(-10deg);
    transform-origin: 50% 50%;
  }
}
</style>