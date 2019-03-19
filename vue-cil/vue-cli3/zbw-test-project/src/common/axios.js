import axios from 'axios'
import qs from 'qs'
import * as crypto from './cropty'
// import { version } from 'punycode';
console.log(qs)
// const dataAxios = {
//   baseUrl: '/api'
// }

const _axios = axios.create({})
// Add a request interceptor
_axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request errorko
  return Promise.reject(error)
})

// Add a response interceptor
_axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
const postjson = (url, patams, leave) => { return new Promise((resolve, reject) => { _axios(config(url, patams, leave)).then(res => { resolve(res) }).catch(rej => { reject(rej) }) }) }
const post = (path, patams) => {
  return new Promise((resolve, reject) => {
    _axios.post(path, patams)
      .then(res => {
        resolve(res)
      })
      .catch(rej => {
        reject(rej)
      })
  })
}
// const get = (path, patams) => {
//   return new Promise((resolve, reject) => {
//     _axios.get(path, patams)
//       .then(res => {
//         resolve(res)
//         return res
//       })
//       .catch(rej => {
//         reject(rej)
//       })
//   })
// }
const get = () => {
  console.log('get')
}

const postdata = {
  post,
  get,
  postjson
}
console.log(postdata)
// 创建一个混入对象
// let mixin = {
//   methods: {
//     get () {
//       console.log('get111')
//     }
//   }
// }

// ...................................................................................
class Jsondata {
  constructor () {
    this.data = {}
  }
  setjson (name, data) {
    // Object.defineProperty(this.data, name, data)
    this.data[name] = data
  }
  getjson (name) {
    if (this.data[name]) {
      console.log(this.data[name])
    }
  }
}

let Jsonfromdata = new Jsondata()
// ...................................................................................
class creatnewV { }
creatnewV.install = (Vue, option) => {
  Vue.mixin({
    methods: {
      $getjson () {
        // console.log('getjson')
        Jsonfromdata.getjson(name)
      },
      $setjson (name, data) {
        console.log(data)
        Jsonfromdata.setjson(name, data)
      },
      $showjson () {
        console.log(Jsonfromdata.data)
      }
    }
  })
  // Vue.extend({
  //   mixins: [mixin]
  // })
  // Vue.mixin({
  //   methods: {
  //     post,
  //     get,
  //     postjson
  //   }
  // })
  // Object.create(Vue, postdata)
  // Vue.prototype.$http = postdata
  // Object.assign(Vue, postdata)
}

// 其他配置方法
const config = (url, patams, leave) => {
  let _config = {
    url,
    patams,
    header: {
      leave
    }
  }
  if (leave === 1) {
    _config.data = 111
  }
  return _config
}

export default creatnewV
