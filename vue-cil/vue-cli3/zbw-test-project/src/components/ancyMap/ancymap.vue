<template>
  <div
    class="m-map"
    :style="{height:mapheight + 'px'}"
  >
    <div
      id="js-container"
      class="map"
    >正在加载数据 ...</div>
    <div>

    </div>
  </div>
</template>

<script>
import remoteLoad from '@/utils/remoteLoad.js'
import markls from './marklist.js'
// import { MapKey, MapCityName } from '@/config/config'
export default {
  // props: ['lat', 'lng'],
  props: {
    lat: {
      type: String
    },
    lng: {
      type: String
    },
    mapheight: {
      type: String,
      default: '550'
    },
    datalist: {
      type: [Object, String]
    }
  },
  data () {
    return {
      pointdata: [],
      searchKey: '',
      placeSearch: null,
      dragStatus: false,
      AMapUI: null,
      AMap: null,
      markdata: [{
        list: [121.55, 30.88],
        icon: ''
      }, {
        list: [121.40, 30.89],
        icon: ''
      }, {
        list: [121.55, 30.90],
        icon: ''
      }
      ]
    }
  },
  watch: {
    searchKey () {
      if (this.searchKey === '') {
        this.placeSearch.clear()
      }
    },
    datalist (e) {
      this.pointdata = e.massivePoint
      this.initMap()
    }
  },
  methods: {
    // async加载地图

    // 搜索
    handleSearch () {
      if (this.searchKey) {
        this.placeSearch.search(this.searchKey)
      }
    },
    // 实例化地图
    initMap () {
      // 加载PositionPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
      let AMapUI = this.AMapUI = window.AMapUI
      let AMap = this.AMap = window.AMap

      // AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
      let mapConfig = {
        zoom: 11,
        cityName: '上海'
      }
      if (this.lat && this.lng) {
        mapConfig.center = [this.lng, this.lat]
      }
      let map = new AMap.Map('js-container', mapConfig)
      // 在家行政区域插件
      // this.getdis(AMap, map)
      AMap.plugin('AMap.DistrictSearch', function () {
        // 创建行政区查询对象
        var district = new AMap.DistrictSearch({
          // 返回行政区边界坐标等具体信息
          extensions: 'all',
          // 设置查询行政区级别为 区
          level: 'biz_area',
          subdistrict: 1
        })

        district.search('奉贤区', function (status, result) {
          // 获取朝阳区的边界信息
          var bounds = result.districtList[0].boundaries
          // console.log('district', bounds)
          var polygons = []
          if (bounds) {
            for (var i = 0, l = bounds.length; i < l; i++) {
              // 生成行政区划polygon
              var polygon = new AMap.Polygon({
                map: map,
                strokeWeight: 1,
                path: bounds[i],
                fillOpacity: 0.7,
                fillColor: '#CCF3FF',
                strokeColor: '#CC66CC'
              })
              polygons.push(polygon)
            }
            // 地图自适应
            // map.setFitView()
          }
        })
      })
      // 加载点标记
      // 加载PointSimplifier，loadUI的路径参数为模块名中 'ui/' 之后的部分
      AMapUI.loadUI(['misc/PointSimplifier'], function (PointSimplifier) {
        if (!PointSimplifier.supportCanvas) {
          alert('当前环境不支持 Canvas！')
          return
        }

        // 启动页面
        initPage(PointSimplifier)
      })
      let that = this
      function initPage (PointSimplifier) {
        // 创建组件实例
        var pointSimplifierIns = new PointSimplifier({
          map: map, // 关联的map
          compareDataItem: function (a, b, aIndex, bIndex) {
            // 数据源中靠后的元素优先，index大的排到前面去
            return aIndex > bIndex ? -1 : 1
          },
          getPosition: function (dataItem) {
            // 返回数据项的经纬度，AMap.LngLat实例或者经纬度数组
            return dataItem.position
          },
          getHoverTitle: function (dataItem, idx) {
            // 返回数据项的Title信息，鼠标hover时显示
            return dataItem.title
          },
          renderOptions: {
            // 点的样式
            pointStyle: {
              width: 6,
              height: 6,
              fillStyle: 'blue' // 蓝色填充
            },
            hoverTitleStyle: {
              position: 'top',
              classNames: 'hoverclassname'
            }
          }

        })

        // 随机创建一批点，仅作示意
        let array = that.pointdata
        var data = createPoints(array)
        // 设置数据源，data需要是一个数组
        pointSimplifierIns.setData(data)
        // 监听事件
        pointSimplifierIns.on('pointClick ', function (e, record) {
          // console.log(e.type, record) pointMouseover pointMouseout

          that.$alert('<div class="poiontmain"><image class="image" src=http://pic.sc.chinaz.com/files/pic/pic9/201809/zzpic14004.jpg></image> <div>1111</div></div>', {
            dangerouslyUseHTMLString: true
          });

        })

        function createPoints (num) {
          var data = []
          for (var i = 0, len = num.length; i < len; i++) {
            data.push({
              position: num[i].array,
              title: num[i].title
            })
          }
          return data
        }
      }
      map.setFitView()
    }
  },
  // async created () {
  //   // 已载入高德地图API，则直接初始化地图
  //   if (window.AMap && window.AMapUI) {
  //     this.initMap()
  //     // 未载入高德地图API，则先载入API再初始化
  //   } else {
  //     await remoteLoad(`http://webapi.amap.com/maps?v=1.3&key=e2c3386de47cb1e61376a0e90aef0efa`)
  //     await remoteLoad('http://webapi.amap.com/ui/1.0/main.js')
  //     this.initMap()
  //   }
  // }
}
</script>

<style lang="css">
.m-map {
  min-width: 500px;
  min-height: 300px;
  position: relative;
}
.m-map .map {
  width: 100%;
  height: 100%;
}
.m-map .search {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 285px;
  z-index: 1;
}
.m-map .search input {
  width: 180px;
  border: 1px solid #ccc;
  line-height: 20px;
  padding: 5px;
  outline: none;
}
.m-map .search button {
  line-height: 26px;
  background: #fff;
  border: 1px solid #ccc;
  width: 50px;
  text-align: center;
}
.m-map .result {
  max-height: 300px;
  overflow: auto;
  margin-top: 10px;
}
.hoverclassname {
  /* width: 10px; */
}
.image {
  height: 65px;
  width: 65px;
}
.poiontmain {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
