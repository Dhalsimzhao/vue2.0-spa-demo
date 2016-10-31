<template>
  <div>
    <!-- <h3>main vue</h3>
    <div>
      <router-link to="/datas">数据列表&rarr;</router-link>
      <router-link to="/charts">图表列表&rarr;</router-link>
    </div> -->

    <!--
    <router-link tag="li" to="/datas">
      <a href="" title="">
        数据列表&rarr;
      </a>
    </router-link>
    <router-link tag="li" to="/charts">
      <a href="" title="">
        图表列表&rarr;
      </a>
    </router-link>
    -->

    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
// import store from '../store/index.js'

export default {
  mounted() {
    // setTimeout(() => {
    //   this.$router.push({
    //     name: 'articles'
    //   });
    // }, 2000);
  }
}
</script>

<style>
html, body, ul, p {
  margin: 0;
  padding: 0;
  font-size: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif !important;
}

* {
  box-sizing: border-box;
}
li {
  list-style: none;
}
a{
  text-decoration: none;
  color: inherit;
}
</style>