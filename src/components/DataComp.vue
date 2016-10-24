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
  mounted: function() {
    var self = this;
    var datas = [
      'data1',
      'data2',
      'data3',
      'data4'
    ];

    setTimeout(function(){
      self.datas = datas;
    }, 100);
  }
}
</script>