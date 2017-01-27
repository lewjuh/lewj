import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ga from 'vue-ga'

import App from './App'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Hire from './components/Hire'
import NotFound from './components/NotFound'

import Project from './components/Project'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/project/:slug', name: 'Project', component: Project },
    { path: '/hire', name: 'Hire Me', component: Hire },
    { path: '*', name: '404', component: NotFound }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

ga(router, 'UA-69369529-1')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
