<template>
  <div>
    <div class="articles-box">
      <ul>
        <li v-for="article in articles" class="article-box">
          <router-link :to="{name: 'article', params: {id: article.id}}">
            <h3 v-text="article.title" class="article-title"></h3>
            <div class="content">
              <img class="avatar" :src="article.author.avatar_url" />
              <div class="info">
                  <p>
                    <span class="name">
                      {{article.author.loginname}}
                    </span>
                    <span class="status" v-if="article.reply_count > 0">
                      <b>{{article.reply_count}}</b>
                      /{{article.visit_count}}
                    </span>
                  </p>
                  <p>
                    <time>{{article.create_at | getLastTimeStr(true)}}</time>
                    <time>{{article.last_reply_at | getLastTimeStr(true)}}</time>
                  </p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import $ from 'jquery';

export default {
  filters: {
    getLastTimeStr() {

    }
  },

  data() {
    return {
      articles: [],
      searchParams: {
        page: 1,
        limit: 1,
        tab: 'all',
        mdrender: true
      }
    }
  },

  mounted() {
    this.getArticles();
  },

  methods: {
    getArticles() {
      // from: https://cnodejs.org/api
      let url = 'https://cnodejs.org/api/v1/topics';
      $.getJSON(url, this.searchParams, json => {
        this.articles = json.data;
      })
    }
  }
}
</script>

<style scoped>
.article-box {
  list-style: none;
}
.article-box a {
  text-decoration: none;
}
.article-box .article-title {
  margin: 0;
  font-size: 16px;
  color: #333;
}
.article-box .content {

}
.article-box .content .avatar {
  float: left;
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.article-box .content .info {
  color: #aaa;
  line-height: 30px;
}
</style>