
export default {
  showmarklist (list, AMap) {
    let marklist = []
    list.forEach(element => {
      //   添加icon
      let icon = new AMap.Icon({
        size: new AMap.Size(40, 50), // 图标尺寸
        // image: '//camo.githubusercontent.com/0a05cf484b6d3994264a847208a42f280b31c945/687474703a2f2f7777772e773363706c75732e636f6d2f73697465732f64656661756c742f66696c65732f626c6f67732f323031352f313530372f776569626f2e706e67', // Icon的图像
        imageOffset: new AMap.Pixel(0, -60), // 图像相对展示区域的偏移量，适于雪碧图等
        imageSize: new AMap.Size(40, 50) // 根据所设置的大小拉伸或压缩图片
      })
      // 打点
      let marker = new AMap.Marker({
        position: new AMap.LngLat(element.list[0], element.list[1]),
        offset: new AMap.Pixel(-10, -10),
        // icon: icon, // 添加 Icon 实例
        title: '北京',
        zoom: 13
      })
      marklist.push(marker)
    })

    return marklist
  }
}
