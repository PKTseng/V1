import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

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
    // console.log('要驗證');
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then(response => {
      // console.log(response.data);
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