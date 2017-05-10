// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from 'router';
import VueResource from 'vue-resource';
// import Vuex from 'vuex';
import App from './App';

import 'common/stylus/index.styl';

Vue.use(VueResource);
// Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});