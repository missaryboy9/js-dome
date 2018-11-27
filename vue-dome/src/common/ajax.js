import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

let Axios = axios.create({
	baseURL: '/test',
	timeout: 1000,
	headers: {'Access-Control-Allow-Origin': '*'},
	withCredentials: true,
})

let ajax_  = {
	post(url, params) {
		return new Promise((resolve, reject) => {
			Axios.post(url, params)
			.then(res => {
				resolve(res)
			})
			.catch(rej => {
				reject(rej)
			})
		})
	},
  get(url, params) {
	  return new Promise((resolve, reject) => {
		  Axios.get(url, qs.stringify(params))
		  	.then(res => {
				resolve(res)
			})
		  	.catch(rej => {
				reject(rej)
			})
	  })
	  
	 }
}

export default {
	install:function(Vue) {
		Object.defineProperty(Vue.prototype, '$http' , {
			value: ajax_
		})
	}
}