const routes = [
  {
    path: '/',
    name: 'articles',
    component(resolve) {
      require.ensure(['./views/articles.vue'], () => {
        resolve(require('./views/articles.vue'));
      });
    },
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component(resolve) {
      require.ensure(['./views/login.vue'], () => {
        resolve(require('./views/login.vue'));
      });
    },
    meta: { requiresAuth: false }
  },,
  {
    path: '/datas',
    name: 'datas',
    component(resolve) {
      require.ensure(['./views/datas.vue'], () => {
        resolve(require('./views/datas.vue'));
      });
    },
    meta: { requiresAuth: true }
  },
  {
    path: '/charts',
    name: 'charts',
    component(resolve) {
      require.ensure(['./views/charts.vue'], () => {
        resolve(require('./views/charts.vue'));
      });
    },
    meta: { requiresAuth: true }
  },
  {
    path: '/data/:id',
    name: 'data',
    component(resolve) {
      require.ensure(['./views/data.vue'], () => {
        resolve(require('./views/data.vue'));
      });
    },
    meta: { requiresAuth: true }
  },
  {
    path: '/articles',
    name: 'articles',
    component(resolve) {
      require.ensure(['./views/articles.vue'], () => {
        resolve(require('./views/articles.vue'));
      });
    },
    meta: { requiresAuth: true }
  },
  {
    path: '/article/:id',
    name: 'article',
    component(resolve) {
      require.ensure(['./views/article.vue'], () => {
        resolve(require('./views/article.vue'));
      });
    },
    meta: { requiresAuth: true }
  },
]

export default routes