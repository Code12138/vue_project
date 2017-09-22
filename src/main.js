import Vue from 'vue'
import router from './router'
import app from './app.vue'
import { Button,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
new Vue({
  el: '#app',
  render: h=>h(app),
  router
})
