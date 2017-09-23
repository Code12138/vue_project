import Vue from 'vue'
import VueRouter from 'vue-router'
import header from '../components/headerr/headerr.vue'
import headerTabs from '../components/headerTabs/headerTabs.vue'
import login from '../components/login/login.vue'
import index from '../components/index/index.vue'
import mianFood from '../components/mainfood/mainfood.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/index',
      component: index,
    },
    {
      path: '/mianFood',
      component: mianFood,
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/',
      redirect: '/index'
    }

]

})
