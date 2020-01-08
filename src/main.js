import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'reset-css';



window.axios = require('axios');
window.axios.defaults.baseURL = process.env.VUE_APP_API_BASE;

//Set up axios interceptors to be used on every AJAX Call to handle global errors
window.axios.interceptors.response.use(function (response) {
  
        return response;  
        
  }, function (error) {
    

    if (error.response.headers['x-ratelimit-remaining'] == 0) {
      router.push('/limit-exceeded/'+error.response.headers['x-ratelimit-reset']);
    }
    
    switch(error.response.status) {
      case 404:
        router.push('/404');
      break;
    }
    
  });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
