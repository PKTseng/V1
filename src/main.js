import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// 上面載入npm 

// 下面自定義
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

// 全域使用
Vue.component('Loading', Loading)

Vue.config.productionTip = false

axios.defaults.withCredentials = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then(response => {
      if (response.data.success) {
        next()
      }else{
        next({
          path: '/login'
        })
      }
    });
  } else {
    next()
  }
})