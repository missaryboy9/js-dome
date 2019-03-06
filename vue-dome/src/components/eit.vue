<template>
  <section>
    <input
      type="checkbox"
      class="ckecktype checkinout"
      checked
    >
  </section>
</template>
<style >
/* input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px red;
} */

/**
-webkit-appearance   //去除默认样式
.ckecktype:checked   // input为 radio/checkbox等具备选中状态组件的伪类选择器 
*/
.ckecktype {
  width: 52px;
  height: 33px;
  border: 1px solid #ccc;
  position: relative;
  -webkit-appearance: none;
  outline: none;
  border-radius: 20px;
}
.ckecktype:checked {
  background-color: #66c066;
}
.ckecktype::before {
  content: "";
  position: absolute;
  width: 29px;
  height: 29px;
  border-radius: 20px;
  top: 0;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #ccc;
}
.ckecktype:checked::before {
  left: 21px;
}
.checkinout {
  transition: background-color cubic-bezier(0.66, 0.66, 0.38, 0.38) 0.2s;
}
.checkinout::before {
  transition: left cubic-bezier(0.66, 0.66, 0.38, 0.38) 0.2s;
}
</style>