<style type="text/css">
  .totop {
    position: fixed;
    right: 10px;
    bottom: 80px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #000;
    text-align: center;
    line-height: 50px;
    background: #fff;
    cursor: pointer;
  }
</style>

<template>
  <div class="totop" @click="toTop">Top</div>
</template>

<script type="text/javascript">
  import $ from 'jquery'
  export default {
    methods: {
      toTop() {
        // debugger;
        $('body').animate({scrollTop: 0}, 'fast');
      }
    }
  }
</script>