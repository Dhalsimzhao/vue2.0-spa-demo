const routes = [
  {
    path: '/',
    name: 'home',
    component(resolve) {
      require.ensure(['./views/index.vue'], () => {
          resolve(require('./views/index.vue'));
      });
    }
  },
  {
    path: '/datas',
    name: 'datas',
    component(resolve) {
      require.ensure(['./views/index.vue'], () => {
          resolve(require('./views/index.vue'));
      });
    }
  },
  {
    path: '/charts',
    name: 'charts',
    component(resolve) {
      require.ensure(['./views/message.vue'], () => {
        resolve(require('./views/message.vue'));
      });
    }
  },
]

export default routes