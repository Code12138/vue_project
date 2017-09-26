<template>
  <div>
  <div class="warp">
    <div class="top">
      <span class="top-left" >
        <img class="top-left-img" src="./personal-bico3.png">
      </span>
      <span class="top-right">
        注册
      </span>
    </div>
    <div class="login-img">
      <!--<img src="./2ac7b0a4f0ab1e4a63819e0668d1cb39.png" alt="">-->
    </div>
    <div class="mid-img">
      <img src="login.png" class="mid-img-img" >
    </div>
  <!--  <div class="login-tab">
      <mt-navbar v-model="selected">
      <mt-tab-item id="1" >普通登录</mt-tab-item>
      <mt-tab-item id="2">手机动态密码登录</mt-tab-item>
    </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-field label="用户名" placeholder="手机号/邮箱/用户名" v-model="username"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
          <mt-button type="primary" style="width: 100%">登录</mt-button>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
          <mt-field label="图片验证" placeholder="请输入图片中的验证码" type="url" v-model="website" @blur="showData" ></mt-field>
          <mt-field label="动态密码" placeholder="请输入动态密码" type="number" v-model="number"></mt-field>
          <mt-button type="primary" style="width: 100%">登录</mt-button>

        </mt-tab-container-item>
      </mt-tab-container>
    </div>-->
  </div>
  </div>
</template>
<script>
  import gVerify from '../js/gVerify'
  export default {
    data() {
      return {
        selected:'1',
        username:'',
        password:'',
        phone:'',
        website:'',
        number:''
      }
    },

    created:{
     /* showImg(){
        const verifyCode = new GVerify("v_container");

        document.getElementById("my_button").onclick = function(){
          const res = verifyCode.validate(document.getElementById("code_input").value);
          if(res){
            alert("验证正确");
          }else{
            alert("验证码错误");
          }
        }
      }*/
    },
    methods: {
      /*showData () {
        console.log('fdsfs')
      }*/
    },

    computed: {},
    components: {},

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .warp
    height 100%
    width 100%
    position relative
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
      background url("./2ac7b0a4f0ab1e4a63819e0668d1cb39.png")
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
  .login-tab
    width 100%
    position absolute
    top 125px
    .mint-navbar
      background-color rgba(255,255,255,0.3)
    .mint-tab-item-label
      font-size 20px
      color aliceblue
    .mint-cell-value
      font-size 12px


</style>
