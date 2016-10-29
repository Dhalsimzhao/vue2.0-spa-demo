<template>
  <div class="article">
    <div class="article-header"></div>
    <div class="article-content" v-html="article.content"></div>
    <reply :count="article.reply_count"
           :replies="article.replies"></reply>
  </div>
</template>

<script type="text/javascript">
import $ from 'jquery'
import reply from '../components/reply'
export default {
  filters: {
  },

  data() {
    return {
      articleId: '',
      article: {}
    }
  },

  mounted() {
    console.log('article vue mounted');
    this.getArticle()
  },

  methods: {
    getArticle() {
      // console.log('get article', this.$route)
      this.articleId = this.$route.params.id;
      let url = 'https://cnodejs.org/api/v1/topic/' + this.articleId;
      $.getJSON(url, this.searchParams, json => {
        this.article = json.data;
      })
    }
  },

  watch: {
    '$route' (to, from) {
      console.log(arguments);
    }
  },

  components: {
    reply
  }
}
</script>