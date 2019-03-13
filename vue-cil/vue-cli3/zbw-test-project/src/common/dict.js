class Dictdata {
  constructor () {
    this.data = {}
  }

  setjson (name, data) {
    this.data[name] = data
  }
  getjson (name) {
    return this.data[name]
  }
}

let dictdata = new Dictdata()

let dicts = {}
dicts.install = (Vue, option) => {
  Vue.mixin({
    methods: {
      $getjson (name) {
        return dictdata.getjson(name)
      },
      $setjson (name, data) {
        if (!typeof data === 'Object') {
          throw new Error('data is not Object')
        } else {
          this.data[name] = data
        }
      }
    }
  })
}

export default dicts
