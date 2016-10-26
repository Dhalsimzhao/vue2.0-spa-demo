<template>
<div class="header">
  <router-link :to="{name: 'articles', query: {tab: 'all'}}" class="tab">全部</router-link>
  <router-link :to="{name: 'articles', query: {tab: 'good'}}" class="tab">精华</router-link>
  <router-link :to="{name: 'articles', query: {tab: 'share'}}" class="tab">分享</router-link>
  <router-link :to="{name: 'articles', query: {tab: 'ask'}}" class="tab">问答</router-link>
  <router-link :to="{name: 'articles', query: {tab: 'job'}}" class="tab">招聘</router-link>
</div>
</template>

<script>
  import $ from 'jquery';

  export default {
    replace: true,
    props: {
      type: String,
      // pageType: String,
      // fixHead: Boolean,
      // messageCount: Number,
      // needAdd: {
      //   type: Boolean,
      //   default: true
      // }
    },
    data() {
      return {
        nickname: '',
        profileimgurl: '',
        show: false
      };
    },
    methods: {
      openMenu() {
        $('html, body, #page').addClass('scroll-hide');
        this.show = !this.show;
      },
      showMenus() {
        this.show = !this.show;
        $('html, body, #page').removeClass('scroll-hide');
      }
    }
  };
</script>

<style scoped>
.tab {
  margin: 0 10px;
  color: #80bd01;
}
.tab.current-tab {
  background-color: #80bd01;
  color: #fff;
  padding: 3px 4px;
  border-radius: 3px;
}
</style>