<template>
  <section>
    <div class="cander">
      <div class="cander_top">
        <div>left</div>
        <div>top</div>
        <div>right</div>
      </div>
      <div class="cander_main">
        <div class="cander_main_top">
          <div
            class="cander_main_top_inner"
            v-for="(item, index) in date"
            :key="index"
          >
            {{item}}
          </div>
        </div>
        <div class="cander_main_cander">
          <div
            v-for="(item, index) in datas"
            :key="index"
            class="cander_main_cander_inner"
          >
            <div v-if="item.day">{{item.day}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      date: ["日", "一", "二", "三", "四", "五", "六"]
    };
  },
  /**
   * 整体思路
   * 第一天是周几？
   * 这个月有多少天？
   */
  computed: {
    datas() {
      let list = [];
      let date = new Date();
      let year = date.getFullYear();
      let mounth = date.getMonth() + 1;
      let dayone = new Date(`${year}-${mounth}-${1}`).getDay();
      let allday = new Date(
        new Date(new Date().setMonth(mounth)).setDate(0)
      ).getDate();
      for (let i = 0; i < dayone; i++) {
        list.push({
          day: 0
        });
      }
      for (let i = 1; i <= allday; i++) {
        list.push({
          day: i
        });
      }
      return list;
    }
  }
};
</script>
<style>
.cander {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  border: 1px solid #ccc;
}
.cander_top {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cander_main {
  flex: 5;
  display: flex;
  flex-direction: column;
}
.cander_main_top {
  flex: 1;
  display: flex;
  flex-direction: row;
  text-align: center;
  flex-wrap: nowrap;
  border-bottom-color: #ccc;
  border-top-color: #ccc;
  border-bottom-style: solid;
  border-top-style: solid;
  border-bottom-width: 1px;
  border-top-width: 1px;
}
.cander_main_cander {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  text-align: center;
  flex: 6;
  flex-wrap: wrap;
}
.cander_main_top_inner {
  width: 15%;
}
.cander_main_cander_inner {
  width: 14.2%;
  height: 15%;
}
</style>