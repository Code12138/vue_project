<template>
  <div class="tabBar" >
    <div class="item-tab">
      <mt-tabbar  v-model="selected" class="tabItemMuen">
        <mt-tab-item class="tab-img" id="top1">
          <img slot="icon" src="./3ddeae131c66d1e9d02be2f5450fb7a6.jpg">
        </mt-tab-item>
        <mt-tab-item class="tab-img" id="top2">
          <img slot="icon" src="./64fa517cacede8407ecbbbef778bf1c1.jpg">
        </mt-tab-item>
        <mt-tab-item class="tab-img" id="top3">
          <img slot="icon" src="./6d7cc714bf86ec21b340cd53eb531cf5.jpg">
        </mt-tab-item>
        <mt-tab-item class="tab-img" id="top4">
          <img slot="icon" src="./b163875bcefa76c455740f4a0940c88c.jpg">
        </mt-tab-item>
      </mt-tabbar>
      <mt-tab-container  v-model="selected" class="TabItemShow"  >
        <mt-tab-container-item id="top1" class="top1">
          <div class="tab-first">
           <img src="./d194e15abbcc57cb5d926a606b2adee8.jpg">
          </div>
          <div class="tab-first">
            <img src="./d194e15abbcc57cb5d926a606b2adee8.jpg">
          </div>
          <div class="tab-first">
            <img src="./d194e15abbcc57cb5d926a606b2adee8.jpg">
          </div>
          <div class="tab-first">
            <img src="./d194e15abbcc57cb5d926a606b2adee8.jpg">
          </div>
          <div class="tab-first">
            <img src="./d194e15abbcc57cb5d926a606b2adee8.jpg">
          </div>
          <div class="tab-first">
            <img src="./d194e15abbcc57cb5d926a606b2adee8.jpg">
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="top2" class="top1">
          <div class="tab-first">
            <img src="./93a11841adb75679d2495399dd069787.jpg">
          </div>
          <div class="tab-first">
            <img src="./93a11841adb75679d2495399dd069787.jpg">
          </div>
          <div class="tab-first">
            <img src="./93a11841adb75679d2495399dd069787.jpg">
          </div>
          <div class="tab-first">
            <img src="./93a11841adb75679d2495399dd069787.jpg">
          </div>
          <div class="tab-first">
            <img src="./93a11841adb75679d2495399dd069787.jpg">
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="top3" class="top1">
          <div class="tab-first">
            <img src="./d194e15abbcc57cb5d926a606b2adee8.jpg">
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="top4" class="top1">
          <div class="tab-first">
            <img src="./d194e15abbcc57cb5d926a606b2adee8.jpg">
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

  </div>
</template>
<script>

  export default {
    data() {
      return {
        selected:'top1'
      }
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .item-tab
    position relative
    width 100%
    height 69px
    .tabItemMuen
      position absolute
      top 0
      .tab-img
        width 25%
      .mint-tab-item
        padding 0 0
        .mint-tab-item-icon
          width 100%
          height 100%
        img
          width 100%
          height 100%
    .TabItemShow
      overflow hidden
      width 100%
      height 193px
      padding-top 80px
      z-index -10
      .top1
        z-index -10
        width 100%
        height 193px
        div
          width 32%
          height 50%
          display inline-block
          img
            width 100%
            height 100%

</style>
