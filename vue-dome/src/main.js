import Vue from 'vue'
import app from './app.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "tree-vue-component";

Vue.use(ElementUI);

new Vue({
	el: '#app',
	router,
	render: h => h(app)
}
)