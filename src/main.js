import Vue from 'vue'
import App from './App'
import router from './router/router.js';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
