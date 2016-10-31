<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  
  .articles {
    position: relative;
  }
  .articles-header {
    height: 40px;
    border-bottom: 1px solid #ddd;
  }
  .article-box {
    list-style: none;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  .article-box a {
    text-decoration: none;
    display: block;
    overflow: hidden;
  }
  .article-box .top-content {
    margin-bottom: 10px;
  }
  .article-box .top-content > span{
    display: inline-block;
    vertical-align: middle;
    height: 16px;
  }

  .topiclist-tab {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
    line-height: 14px;
  }
  .topiclist-tab.top {
    background: #E74C3C;
  }
  .topiclist-tab.good {
    background: #E67E22;
  }
  .topiclist-tab.share {
    background: #1ABC9C;
  }
  .topiclist-tab.ask {
    background: #3498DB;
  }
  .topiclist-tab.job {
    background: #9B59B6;
  }

  .article-box .article-title {
    font-weight: bold;
    margin: 0;
    font-size: 16px;
    color: #333;
    white-space: nowrap;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100% - 50px);
  }
  .article-box .main {
    float: left;
    width: calc(100% - 100px);
  }
  .article-box .content {
    
  }
  .article-box .content .avatar {
    float: left;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
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
  .last-reply {
    float: right;
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
    color: #778087;
    font-size: 11px;
    margin-top: 22px;
  }

  .pagination{
    overflow: hidden;
    padding: 10px;
    height: 60px;
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
  .page > a {
    display: block;
  }
  .page.active > a {
    color: #80bd01;
    cursor: default;
  }
</style>

<template>
  <div class="articles">
    <div class="articles-header">
      <tab :type="searchParams.tab"></tab>
    </div>
    <div class="articles-box">
      <ul>
        <li v-for="article in articles" class="article-box">
          <router-link :to="{name: 'article', params: {id: article.id}}">
            <div class="main">
              <div class="top-content">
                <span class="topiclist-tab" 
                :class="formatTab('class', article.tab, article.top, article.good)">
                {{ formatTab('text', article.tab, article.top, article.good) }}</span>
                <span v-text="article.title" class="article-title"></span>  
              </div>
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
                </div>
              </div>
            </div>
            <div class="last-reply">
              <time>{{ article.last_reply_at | formatTime }}</time>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <ul>
        <li v-for="page in pages"
          class="page"
          :class="{'active': searchParams.page === page}">
          <router-link :to="{name: 'articles', query: {page: page}}">
            {{ page }}
          </router-link>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <totop v-if="showToTop"></totop>
    </transition>
  </div>
</template>

<script type="text/javascript">
  import $ from 'jquery';
  import util from '../utils/util'
  import tab from '../components/tab'
  import totop from '../components/backtotop.vue'

  const dateUtil = util.dateUtil
  const fnUtil = util.fnUtil

  export default {
    filters: {
      formatTime(time) {
        return dateUtil.timeAgo(time);
        // return time.replace(/^([^T]*).*/, '$1');
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
        },
        showToTop: false
      }
    },

    computed() {
      return {
      }
    },

    mounted() {
      this.bindEvents();
      this.getArticles();
    },

    methods: {
      getArticles() {
        // from: https://cnodejs.org/api
        let url = 'https://cnodejs.org/api/v1/topics';
        console.log('getJson');
        $.getJSON(url, this.searchParams, json => {
          this.articles = json.data;
        })
      },

      formatTab(type, tab, isTop, isGood) {
        var tabName, className;
        if (isTop) {
          tabName = '置顶';
          className = 'top';
        } else if (isGood) {
          tabName = '精华';
          className = 'good';
        } else {
          switch(tab){
            case 'good': tabName = '精华'; className = tab; break;
            case 'share': tabName = '分享'; className = tab; break;
            case 'ask': tabName = '问答'; className = tab; break;
            case 'job': tabName = '招聘'; className = tab; break;
          }
        }
        return type === 'text' ? tabName : className;
      },

      bindEvents() {
        $(window).scroll(fnUtil.debounce(this.onScroll, 200));
      },

      unbindEvents() {
        $('body').off('scroll');
      },

      onScroll() {
        console.log('on scroll')
        if ($('body').scrollTop() > 100) {
          this.showToTop = true;
        } else {
          this.showToTop = false;
        }
      },

      beforeDestory() {
        this.unbindEvents();
      }
    },

    watch: {
      '$route' (to, from) {
        console.log(arguments)
        if (to.query && to.query.page) {
          this.searchParams.page = to.query.page;
        }
        if (to.query && to.query.tab) {
          this.searchParams.tab = to.query.tab;
        }

        this.getArticles();
      }
    },
    components: {
      tab,
      totop
    }
  }
</script>

