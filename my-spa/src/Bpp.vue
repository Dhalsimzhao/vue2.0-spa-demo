<template>
<div>
  <div> here is app body </div>
  <hello></hello>
</div>
</template>

<script>
import Hello from './components/Hello'
module.exports = {
  data() {
    return {
      msg: 'hello work'
    }
  },
  // components: {
  //   hello: Hello
  // },
  // components: [Hello]
}
</script>

<style scoped>
h1 {
  coloe: red;
}
a {
  text-decoration: none;
}
</style>  