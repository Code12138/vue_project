import Vue from 'vue'
import VueRouter from 'vue-router'
import header from '../components/headerr/headerr.vue'
import headerTabs from '../components/headerTabs/headerTabs.vue'
import footerNav from '../components/footerNav/footerNav.vue'
import index from '../components/index/index.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/index',
      component: index,
      children:[
        {  path: '/',
          component: header,
        },
        {  path: '/',
          component: headerTabs,
        },
        {
          path: '/',
          component: footerNav,
        }
      ]
    },
    {
      path: '/',
      redirect: '/index'
    }

]

})
