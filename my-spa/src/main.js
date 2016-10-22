// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App'
import Bpp from './Bpp'
import VueResource from 'vue-resource'



Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Bpp)
  // render: h => h(App)
  // render: function (createElement) {
  //   return createElement(
  //     'h1', 'hello world'
  //   )
  // }
})
