// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueRouter from 'vue-router'
// import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import routes from './routes'
import main from './views/main'

Vue.use(VueRouter)
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  saveScrollPosition: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(main)
})
