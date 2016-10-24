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
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push({
        name: 'articles'
      });
    }, 2000);
  }
}
</script>