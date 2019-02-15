import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Configuration from "./views/Configuration";
import Meeting from "./views/Meeting";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/configuration',
      name: 'Configuration',
      component: Configuration
    }, {
      path: '/meeting',
      name: 'Meeting',
      component: Meeting
    }
  ]
})
