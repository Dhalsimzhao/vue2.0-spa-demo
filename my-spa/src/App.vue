<template>
  <div id="app">
    <div class="top-view">
      <top></top>
    </div>
    <div class="left-view">
      <left></left>
    </div>
    <div class="center-view">
      <center></center>
    </div>
    <div class="right-view">
      <right></right>
    </div>
    <div class="bottom-view">
      <bottom></bottom>
    </div>
  </div>
</template>

<script>

import Top from './components/applayouts/AppTop.vue'
import Left from './components/applayouts/AppLeft.vue'
import Center from './components/applayouts/AppCenter.vue'
import Right from './components/applayouts/AppRight.vue'
import Bottom from './components/applayouts/AppBottom.vue'

export default {
  components: {
    Top, Left, Right, Center, Bottom
  }
}

</script>

<style scoped lang="less">
@color: #eee;
html, body {
  margin: 0;
  padding: 0;
}
.abs {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.top-view {
  position: absolute;
  border-bottom: 1px solid @color;
  height: 40px;
  top: 0;
  left: 0;
  right: 0;
}
.left-view {
  position: absolute;
  border-right: 1px solid @color;
  top: 40px;
  bottom: 40px;
  width: 160px;
  left: 0;
}
.right-view {
  position: absolute;
  border-left: 1px solid @color;
  right: 0;
  top: 40px;
  bottom: 40px;
  width: 160px;
}
.center-view {
  position: absolute;
  top: 40px;
  bottom: 40px;
  left: 160px;
  right: 160px;
}
.bottom-view {
  position: absolute;
  border-top: 1px solid @color;
  bottom: 0;
  height: 40px;
  left: 0;
  right: 0;
}
</style>
