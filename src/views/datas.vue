<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="data in datas" class="data-box">
        <router-link :to="{name: 'data', params: {id: data.id}}">
          <h3 class="data-name">
            {{ data.name }}
          </h3>
          <div class="data-desc">
            {{ data.desc }}
          </div>
        </router-link>
      </li>

      <!--
      <li v-for="data in datas" class="data-box">
        <h3 class="data-name">
          {{ data.name }}
        </h3>
        <div class="data-desc">
          {{ data.desc }}
        </div>
      </li>
      -->

    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      title: 'datas',
      datas: []
    }
  },
  methods: {
    getTitle: function() {
      debugger;
      return 'datas title';
    },
    genDatas() {
      var datas = [], num = 4;
      while(num--) {
        datas.unshift(this.genData(num));
      }
      return datas;
    },
    genData(i) {
      return {
        id: 'd'+i,
        name: 'data'+i,
        desc: 'test data '+i
      }
    }
  },
  mounted() {
    this.datas = this.genDatas();
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
li {
  list-style: none;
  margin: 5px 0;
  border: 1px solid #eee;
}
h3 {
  margin: 0;
}
.data-name {
  color: #333;
}
.data-desc {
  color: #aaa;
}
</style>