<template>
  <div class="main">
    <div class="top">
      <span class="top-left" @click="history.go(-1)">
        <img class="top-left-img" src="./personal-bico3.png">
      </span>
      <span class="top-right">
        注册
      </span>
    </div>
    <div class="login-img">
      <img src="./2ac7b0a4f0ab1e4a63819e0668d1cb39.png" alt="">
    </div>
    <div class="mid-img">
      <img src="./logo.png" class="mid-img-img" >
    </div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
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
  .main
    position relative
    height 100%
    width 100%
    .top
      position relative
      width 100%
      height 50px
      z-index 100
      .top-left
        display block
        width 12px
        height 17px
        padding-top 10px
        padding-left 10px
        .top-left-img
          height 100%
          width  100%
      .top-right
        color #ffff
        position absolute
        top 8px
        right 15px
        font-size 17px
    .login-img
      width 100%
      height 180px
      position absolute
      top 0
      left 0
      img
        height 100%
        width 100%
    .mid-img
      position absolute
      top 67px
      left 150px
      height 42px
      width 70px
      .mid-img-img
          width 100%
          height 100%
</style>
