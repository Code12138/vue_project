<template>
  <div class="shop-main">
    <div class="top">
      <router-link to="/index">  <span class="top-left" ></span></router-link>
      <span class="top-text">狗狗零食玩具</span>
      <span class="top-right" @click="showMenu"></span>
    </div>
    <footerNav class="showFooter" v-show="menushow"></footerNav>
    <mt-swipe class="shop-swipe" :show-indicators="true" :auto="4000" >
      <mt-swipe-item>
        <img src="./3d82338df309756421fcc4679f371050.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item>
        <img src="./37409b7f248f9b1c1b61fd77ce846e6a.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item>
        <img src="./af8823bf3e23687c7412513ca7974bf9.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
    <tabBar class="tabBar"></tabBar>
    <xline></xline>
    <div class="hotAd">
      <div class="hotAD-img">
        <div class="hotAd-img-left">
          <img src="./5df340d068e4bc97759d801edcd5ac19.jpg" alt="">
        </div>
        <div class="hotAd-img-right">
          <img src="./6ebc7bc52a02cc2fb2d725dd9ebe58aa.jpg" alt="">
          <img src="./e8fa7e93ded2be02792cbade66353832.jpg" alt="">
        </div>
      </div>
    </div>
    <xline></xline>
    <div class="fashion-viedo">
      <div class="fashion-viedo-ico">
        <img class="fashion-viedo-ico-img" src="./edb7f86b24e8c29f123e5a4c094ddf81.jpg">
      </div>
      <div class="fashion-viedo-img">
        <img src="./af8823bf3e23687c7412513ca7974bf9.jpg" alt="">
      </div>
    </div>
    <div style="overflow: hidden">
      <foodSwipe></foodSwipe>
    </div>
    <div class="fashion-viedo">
      <div class="fashion-viedo-ico">
        <img class="fashion-viedo-ico-img" src="./edb7f86b24e8c29f123e5a4c094ddf81.jpg">
      </div>
      <div class="fashion-viedo-img">
        <img src="./af8823bf3e23687c7412513ca7974bf9.jpg" alt="">
      </div>
    </div>
    <eqetBottom></eqetBottom>
  </div>
</template>
<script>
  import eqetBottom from '../eqet-bottom/epetBottom.vue'
  import foodSwipe from '../swipe-cro/swipe-cro.vue'
  import xline from '../xline/xline.vue'
  import tabBar from '../tabBar/tabBar.vue'
  import footerNav from '../footerNav/footerNav.vue'
  export default {
    data() {
      return {
        menushow:false,

      }
    },
    methods: {
      showMenu(){
        this.menushow = !this.menushow
      }
    },
    computed: {},
    components: {
      footerNav,
      tabBar,
      xline,
      foodSwipe,
      eqetBottom
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .shop-main
    position relative
    width 100%
    height 100%
    .top
      position relative
      height 50px
      display flex
      .top-left
        display: block;
        width: 22px;
        height: 20px;
        position: absolute;
        margin-top: 17px;
        background url("./personal-bico1.png") no-repeat center center
        background-size: 9px 17px
      .top-text
        width: 90%;
        font-size: 18px;
        line-height: 50px;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: block;
        margin: 0 auto;
      .top-right
        width: 22px;
        height: 20px;
        background: url('./imgtk-new.png') no-repeat center center
        background-size: 20px 20px;
        position: absolute;
        top: 17px;
        right: 1em;
    .showFooter
      width 100%
      height 70px
      position absolute
      top 50px
    .shop-swipe
      width 100%
      height 160px
      img
        height 100%
        width 100%

    .tabBar
      height 270px
    .hotAd
      margin-top 10px
      height 210px
      width 100%
      .hotAd-img
          height 100%
          width 100%
      .hotAD-img
        display flex
        width 100%
        height 189px
        .hotAd-img-left
          width 160px
          height 189px
          img
            width 100%
            height 100%
        .hotAd-img-right
          width 215px
          height 95px
          img
            width 100%
            height 100%

    .fashion-viedo
      position relative
      width 100%
      height 260px
      .fashion-viedo-ico
        text-align center
        padding-left 25%
        width 188px
        height 16px
        margin-bottom 10px
        .fashion-viedo-ico-img
          width 100%
          height 100%
      .fashion-viedo-img
        margin-bottom 5px
        height 210px
        width 100%
        img
          width 100%
          height 100%


</style>
