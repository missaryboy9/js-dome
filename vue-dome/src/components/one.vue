<template>
  <div>
	<el-button @click="add">增加cookie</el-button>
	<el-button @click="del">删除cookie</el-button>
	<el-button @click="addresize">添加resize</el-button>
	<el-button @click="delresize">清除resize</el-button>
	<a href="https://vuejs.org/images/logo.png?id=11111111111&callback=">1111</a>
  </div>
</template>

<script>
export default {
data() {
	return {
		
	}
},
methods:{
	addresize(){
		window.addEventListener('resize', this.alert)
	},
	alert() {
		alert(1)
	},
	callback() {
		alert(1)
	},
	add() {
		document.cookie = "name=setcookie;path=/";
// 		var evt = document.createEvent("KeyboardEvent");
// 		evt.initKeyboardEvent("keydown", true, false, window, 'U+0009',0,false,false,true,false,false); 
// 		evt.currentTarget.dispatchEvent(evt);
//                 if(nowEle==inputs[inputs.length-1])nowEle=document;
//                 dicument.focus && nowEle.focus();
//                 dicument.dispatchEvent(e);
	},
	del() {
		// document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
// 		var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
// 				if(keys) {
// 					for(var i = keys.length; i--;)
// 						document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
// 				}
			var cookies = document.cookie.split(";");
				for (var i = 0; i < cookies.length; i++) {
					var cookie = cookies[i];
					var eqPos = cookie.indexOf("=");
					var  name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
					document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"+"; path=/" ;
				}
	},
	delresize() {
		window.removeEventListener('resize', this.alert)
	}
},
created() {
	window.addEventListener('resize', this.alert)
}
}
</script>
