import Vue from 'vue'
import VueRouter from 'vue-router'
import header from '../components/headerr/headerr.vue'
import city from '../components/city/city.vue'
import login from '../components/login/login.vue'
import index from '../components/index/index.vue'
import mianFood from '../components/mainfood/mainfood.vue'
import register from '../components/register/register.vue'
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
      path:'/register',
      component:register
    },
    {
      path:'/city',
      component:city
    },
    {
      path: '/',
      redirect: '/index'
    }

]

})
