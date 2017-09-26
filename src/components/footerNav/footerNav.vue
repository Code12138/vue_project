<template>
  <div>
    <router-view></router-view>
    <div class="al">
      <ul class="bottomLi">
        <router-link to="/index">
          <li class="bottomLi-1"> </li>
        </router-link>
        <li class="bottomLi-2"><a href="https://wap.epet.com/category.html?pet_type=dog"></a></li>
        <li class="bottomLi-3"><a href="https://wap.epet.com/cart/main.html"></a></li>
        <router-link to="/login">
         <li class="bottomLi-4"></li>
        </router-link>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .al
    border-top: 1px solid #e7e7e7;
    height: 55px;
    line-height: 45px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 103;
    .bottomLi
      width 100%
      float: left;
      white-space: nowrap;
      overflow hidden
      background #fff
      li
        float: left;
        width 25%
        height 55px
        background #fff
        text-align center
        a
          display block
          height 55px
      .bottomLi-1
        background url("./main_tab_1_sel.png") no-repeat center center
        background-size: auto 40px;
      .bottomLi-2
        background url("./main_tab_2.png") no-repeat center center
        background-size: auto 40px;
      .bottomLi-3
        background url("./main_tab_3.png") no-repeat center center
        background-size: auto 40px;
      .bottomLi-4
        background url("./main_tab_4.png") no-repeat center center
        background-size: auto 40px;
</style>
