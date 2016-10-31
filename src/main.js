// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueRouter from 'vue-router'
// import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import routes from './routes'
import main from './views/main'

import store from './store/index.js'

Vue.use(VueRouter)
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  saveScrollPosition: true
})

router.beforeEach((to, from, next) => {
  console.log(store)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.userInfo.userId) {
      next()
    } else {
      next({
        name: 'login',
        query: { redirect: to.fullPath}
      })
    }
  } else {
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(main)
})
