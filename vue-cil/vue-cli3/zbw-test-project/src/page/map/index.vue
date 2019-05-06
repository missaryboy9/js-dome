<template>
  <div class="main">
    <div class="leftstyle">
      <div class="selectmain">
        <el-select
          v-model="value"
          placeholder="请选择"
          @change=changeoption
        >
          <el-option
            v-for="item in datalist"
            :label="item.name"
            :value="item"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <ancymap
      ref="map"
      class="mapstyle"
      lat="30.877795"
      lng="121.544042"
      :datalist=value
    ></ancymap>
  </div>
</template>
<script>
import remoteLoad from '../../utils/remoteLoad.js'
import ancymap from '../../components/ancyMap/ancymap'
export default {
  beforeRouteEnter (to, from, next) {
    remoteLoad(`http://webapi.amap.com/maps?v=1.3&key=e2c3386de47cb1e61376a0e90aef0efa`)
      .then(res => {
        remoteLoad('http://webapi.amap.com/ui/1.0/main.js')
          .then(res => {
            next(vm => {
              vm.$refs.map.initMap()
            })          })
      })
      .catch(rej => {
        throw new error('实例化地图UI组件失败')
      })
      .catch(rej => {
        throw new error('实例化地图组件失败')
      })

  },
  components: {
    ancymap
  },
  data () {
    return {
      value: '',
      datalist: [{
        name: '金海社区',
        value: 'jh',
        center: ['123213', '213123'],
        massivePoint: [
          {
            array: [121.45, 31.29],
            title: '零四i',
            name: '零四i',
            id: '610303198911013322',
            meta: ''
          }, {
            array: [121.45, 31.19],
            title: '李斯',
            name: '李斯',
            id: '610303198911013322',
            meta: ''
          }, {
            array: [121.45, 31.110],
            title: '搜顶',
            name: '搜顶',
            id: '610303198911013322',
            meta: ''
          }
        ]
      },
      {
        name: '柘林镇',
        value: 'tl',
        center: ['123213', '213123'],
        massivePoint: [{
          array: [121.55, 30.88],
          title: '这是一段描述性文字主要是检测文字的长短',
          name: '张三',
          id: '610303198911013322',
          meta: ''
        }, {
          array: [121.45, 31.19],
          title: '222',
          name: '张三',
          id: '610303198911013322',
          meta: ''
        }, {
          array: [121.45, 31.110],
          title: '333',
          name: '张三',
          id: '610303198911013322',
          meta: ''
        }]
      },
      {
        name: '南桥镇',
        value: 'nq',
        center: ['123213', '213123'],
        massivePoint: [{
          array: [121.55, 30.88],
          title: '这是一段描述性文字主要是检测文字的长短',
          name: '张三',
          id: '610303198911013322',
          meta: ''
        }, {
          array: [121.45, 31.19],
          title: '222',
          name: '张三',
          id: '610303198911013322',
          meta: ''
        }, {
          array: [121.45, 31.110],
          title: '333',
          name: '张三',
          id: '610303198911013322',
          meta: ''
        }]
      }]
    }
  },
  methods: {
    changeoption () {
      // console.log(this.value)
    }
  },
  created () {
  },
}
</script>
<style lang="css" scoped>
.main {
  position: relative;
}
.leftstyle {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
}
.selectmain {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
