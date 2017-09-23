import Vue from 'vue'
import router from './router'
import app from './app.vue'
import { Button,Swipe, SwipeItem, Tabbar, TabItem,TabContainer, TabContainerItem, Navbar, TabItem } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

new Vue({
  el: '#app',
  render: h=>h(app),
  router
})
