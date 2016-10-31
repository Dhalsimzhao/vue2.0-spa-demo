<style>
.replies-header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3
}
.reply {
  padding: 10px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
}
.reply-header {
  font-size: 12px;
}
.reply-header > span {
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
}
.reply-header .avatar {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.reply-header .name {
  margin-left: 10px;
  color: #666;
  font-weight: bold;
}
.reply-header .index {
  color: #08c;
}
.reply-header .create_time {
  color: #08c;
}
.reply-content {
  color: #333;
  font-size: 14px;
  padding-top: 5px;
  margin-bottom: 1em;
}
.reply-content a {
  color: #08c;
}
</style>

<template>
  <div class="replies">
    <div class="replies-header">
      {{ count }} 条回复
    </div>
    <div class="replies-list">
      <ul>
        <li v-for="(reply, index) in replies" class="reply">
          <div class="reply-header">
            <img class="avatar" :src="reply.author.avatar_url">
            <span class="name">{{ reply.author.loginname }}</span>
            <span class="index">{{ index + 1 }}楼 · </span>
            <span class="create_time">{{ reply.create_at | formatTime }}</span>
          </div>
          <div v-html="reply.content" class="reply-content"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // import { dateUtil } from '../utils/util'

  import util from '../utils/util'
  const dateUtil = util.dateUtil

  export default {
    props: {
      count: Number,
      replies: Array
    },

    filters: {
      formatTime(time) {
        return dateUtil.timeAgo(time);
      }
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