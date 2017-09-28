import Vue from 'vue'
import router from './router'
import app from './app.vue'
import VueScroller from 'vue-scroller'
import Distpicker from 'v-distpicker'
import VueLazyload from 'vue-lazyload'

import {Field ,Navbar,Button,Swipe, SwipeItem, Tabbar, TabItem,TabContainer, TabContainerItem} from 'mint-ui'


Vue.component('v-distpicker', Distpicker)
Vue.component(Field.name, Field);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);


Vue.use(VueLazyload,{
  loading:'../static/default-epet.png'
})


Vue.use(VueScroller)

new Vue({
  el: '#app',
  render: h=>h(app),
  router
})
