const routes = [
  {
    path: '/',
    name: 'articles',
    component(resolve) {
      require.ensure(['./views/articles.vue'], () => {
        resolve(require('./views/articles.vue'));
      });
    }
  },
  {
    path: '/datas',
    name: 'datas',
    component(resolve) {
      require.ensure(['./views/datas.vue'], () => {
        resolve(require('./views/datas.vue'));
      });
    }
  },
  {
    path: '/charts',
    name: 'charts',
    component(resolve) {
      require.ensure(['./views/charts.vue'], () => {
        resolve(require('./views/charts.vue'));
      });
    }
  },
  {
    path: '/data/:id',
    name: 'data',
    component(resolve) {
      require.ensure(['./views/data.vue'], () => {
        resolve(require('./views/data.vue'));
      });
    }
  },
  {
    path: '/articles',
    name: 'articles',
    component(resolve) {
      require.ensure(['./views/articles.vue'], () => {
        resolve(require('./views/articles.vue'));
      });
    }
  },
  {
    path: '/article/:id',
    name: 'article',
    component(resolve) {
      require.ensure(['./views/article.vue'], () => {
        resolve(require('./views/article.vue'));
      });
    }
  },
]

export default routes