'Disable ESLint'
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/home'
import Invm from '@/components/invm/invm'
import User from '@/components/user/user'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/',
     redirect: { name: 'Home' }
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/invm',
    name: 'Invm',
    component: Invm
  }, {
    path: '/user',
    name: 'User',
    component: User
  }]
})
