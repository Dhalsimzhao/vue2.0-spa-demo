<template>
<div class="datas">
  <div v-for="data in datas">{{ data }}</div>
</div>
</template>

<script>
module.exports = {
  data() {
    return {
      datas: []
    }
  },
  created() {
    console.log(arguments)
  },
  mounted() {
    console.log('mounted');
    console.log(arguments);
    console.log(this);
    // var self = this;
    var datas = [
      'data1',
      'data2',
      'data3',
      'data4'
    ];
    this.datas = datas;

    // setTimeout(function(){
    //   self.datas = datas;
    // }, 100);
  }
}
</script>