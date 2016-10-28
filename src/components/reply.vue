<style>
  
</style>

<template>
  <div class="replies">
    <div class="replies-header">
      {{ count }} 条回复
    </div>
    <div class="replies-list">
      <ul>
        <li v-for="reply in replies">
          <div v-html="reply.content"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      count: Number,
      replies: []
    },

    data() {
      return {

      }
    },

    mounted() {
      console.log(this.reply_count)
    }
  }
</script>