import Vue from 'vue';
import VueRouter from 'vue-router';

import Static from '../components/static.vue';
import Hello from '../components/hello.vue';
import Chatroom from '../components/Chatroom.vue';
// import BootstrapVue from 'bootstrap'

// Vue.use(BootstrapVue)

Vue.use(VueRouter);
export default new VueRouter({
  routes: [{
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/static',
      name: 'Static',
      component: Static
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: Chatroom
    }
  ],
})
