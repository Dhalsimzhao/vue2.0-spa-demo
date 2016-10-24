<template>
  <div>
    <div class="filter-box">
      <div></div>
    </div>
    <div class="articles-box">
      <ul>
        <li v-for="article in articles" class="article-box">
          <router-link :to="{name: 'article', params: {id: article.id}}">
            <h3 v-text="article.title" class="article-title"></h3>
            <div class="content">
              <img class="avatar" :src="article.author.avatar_url" />
              <div class="info">
                  <div>
                    <span class="name">
                      {{article.author.loginname}}
                    </span>
                    <span class="status" v-if="article.reply_count > 0">
                      <span class="count_of_replies" title="回复数">{{article.reply_count}}</span>
                      <span class="count_seperator">/</span>
                      <span class="count_of_visits" title="点击数">{{article.visit_count}}</span>
                    </span>
                  </div>
                  <div>
                    <time>{{article.create_at | getLastTimeStr(true)}}</time>
                    <time>{{article.last_reply_at | getLastTimeStr(true)}}</time>
                  </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <ul>
        <li v-for="page in pages"
          class="page">
          <router-link :to="{name: 'articles', query: {page: page}}">
            {{ page }}
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
      pages: [1,2,3,4,5,6,7,8,9,10],
      searchParams: {
        page: 1,
        limit: 20,
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
  },

  watch: {
    '$route' (to, from) {
      
    }
  },
  // watch: {
  //     // 切换页面
  //     '$route' (to, from) {
  //         // 如果是当前页面切换分类的情况
  //         if (to.query && to.query.tab) {
  //             this.searchKey.tab = to.query.tab;
  //         }
  //         this.searchKey.limit = 20;
  //         this.getTopics();
  //         // 隐藏导航栏
  //         this.$refs.head.show = false;
  //     }
  // },
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
.article-box {
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid #ddd;
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
.status {
    color: #b4b4b4;
    font-size: 14px;
}
.status > .count_of_replies{
  color: #9e78c0;
  font-size: 14px;
}
.pagination{
  overflow: hidden;
  padding: 10px;
}
.page{
  float: left;
  height: 30px;
  width: 32px;
  border: 1px solid #ddd;
  color: #999;
  text-align: center;
  line-height: 30px;
  margin-left: -1px;
}
.page.active {
  color: #80bd01;
}
</style>