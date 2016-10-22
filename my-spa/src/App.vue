<template>
  <div id="123">
    <h1>Vue Router & Vue Resource Tiny Demo</h1>
    <!-- <h1>{{ msg }}</h1> -->
    <ul>
      <li><router-link to="/datas">数据列表</router-link></li>
      <li><router-link to="/data/:id">单数据页</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import DatasComp from './components/DatasComp'
import DataComp from './components/DataComp'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/datas',
      components: DatasComp
    },
    {
      path: '/data/:id',
      components: DataComp
    }
  ]
});

// module.exports = {
//   router: router,
//   data() {
//     return {
//       msg: ''
//     }
//   }
// }

var App = new Vue({
  data() {
    return {
      msg: ''
    }
  }
});

module.exports = App;

</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
