<template>
  <div>
    <div class="logintopWrapper">
      <div class="loginTop">
        <router-link to="/">
          <img src="./personal-bico3.png" alt="">
        </router-link>
        <router-link to="/register">
          <span>注册</span>
        </router-link>
      </div>
      <div class="logo">
        <img src="./logo.png" alt="">
      </div>
      <div class="tab">
        <ul>
          <li :class='{active: isLogin}' @click="toggleLogin(true)">
            <a href="javascript:;">普通登录</a>
            <i></i>
          </li>
          <li :class='{active: !isLogin}' @click="toggleLogin(false)">
            <a href="javascript:;">手机动态密码登录</a>
            <i></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="formWrapper">
      <div class="formContent">
        <form class="loginForm" action="" method="post" v-show="isLogin">
          <div class="login-username">
            <i class="i-username"></i><input type="text" placeholder="手机号/邮箱/用户名" v-model="user.username">
          </div>
          <div class="login-password">
            <i class="i-password"></i><input type="password" placeholder="输入密码"  v-model="user.password">
          </div>
        </form>
        <form class="newLoginForm" action="" method="post" v-show="!isLogin">
          <div class="newLogin-username">
            <i class="i-phone"></i><input type="text" placeholder="已注册的手机号">
          </div>
          <div class="newLogin-pic">
            <i class="i-lock"></i><input type="text" placeholder="请输入图片内容">
          </div>
          <div class="newLogin-password">
            <i class="i-lock"></i><input type="text" placeholder="动态密码">
          </div>
        </form>
      </div>
      <div class="forgetPsw">
        <a href="javascript:;">忘记密码？</a>
      </div>
    </div>
    <div class="loginBtn" v-show="isLogin"  @click="login">
      <a href="javascript:;" class="loginA">登录</a>
    </div>
    <div class="newLoginBtn" v-show="!isLogin">
      <a href="javascript:;" class="newLoginA">登录</a>
    </div>
    <div class="blank"></div>
    <div class="otherLogin">
      <p>合作网站登录</p>
      <ul class="otherLogin-list">
        <li class="otherLogin-list-item"><a href="javascript:;"><img src="./login_ico4.png" alt=""></a></li>
        <li class="otherLogin-list-item"><a href="javascript:;"><img src="./login_ico2.png" alt=""></a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  import { MessageBox,Toast } from 'mint-ui';
  export default {
    data () {
      return {
        falg:false,
        isLogin: true,
        user:{
          username:'',
          password:''
        },
      }
    },
    methods: {
      toggleLogin (isLogin) {
        this.isLogin = isLogin
      },

      login(){
//        const nameArr =[]
        const username = this.user.username.trim()
        const password = this.user.password.trim()
        const url = '/api2/users'
        console.log(username, password, url)
        axios.get(url)
          .then((req, res) =>{
          console.log(req, res)
            const result = req.data.data
            console.log('123', result)

            let index = result.findIndex(item => {
              return item.username === username && item.password === password
            })
            if(index == -1){
              MessageBox.alert('用户名或密码错误，请重新输入')
              this.user.username=''
              this.user.password=''
            } else {
              MessageBox.alert('登录成功').then(action =>{
               this.$router.push({path:'index'})

              })
            }

            /*result.find(item=>{
              if(item.username === username && item.password === password){
//                MessageBox.alert('登录成功').then(action => {
//                  router.push({ path: '/index' })
//                });
                Toast("成功")
              }else{
                MessageBox.alert('登录失败').then(action => {
                });
              }
            })*/
          })


      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus"  >
  .logintopWrapper
    position relative
    height 178px
    width 100%
    background url(./2ac7b0a4f0ab1e4a63819e0668d1cb39.png) no-repeat
    background-size 100% 100%
    .loginTop
      width 100%
      height 50px
      padding 0 12px
      box-sizing border-box
      line-height 50px
      img
        height 50%
        margin-top 14px
      span
        color #fff
        float right
    .logo
      height 48px
      text-align center
      img
        height 100%
        padding 12px 0 24px 0
    .tab
      position absolute
      bottom 0
      left 0
      height 44px
      width  100%
      background rgba(255, 255, 255, .3)
      li
        width 50%
        height 44px
        float left
        line-height 44px
        text-align center
        position relative
        a
          display inline-block
          color #fff
          width 100%
          height 44px
        &.active
          i
            display block
            position absolute
            width 0
            height 0
            margin-left -10px
            left 50%
            bottom 0
            border-bottom 10px solid #fff
            border-left 10px solid transparent
            border-top 10px solid transparent
            border-right 10px solid transparent
  .formWrapper
    overflow hidden
    .formContent
      width 100%
      padding 0 6px
      margin 0 15px 12px
      box-sizing border-box
      .loginForm, .newLoginForm
        height 102px
        .login-username, .login-password, .newLogin-username, .newLogin-pic, .newLogin-password
          border-1px(#e2e2e2 )
          width 100%
          height 21px
          padding 14px 0
          input
            outline none
          input::-webkit-input-placeholder
                  color: #ccc;opacity:1
          .i-username, .i-password, .i-phone, .i-lock
            display inline-block
            width 17px
            height 21px
            margin-right 5px
            vertical-align middle
          .i-username
            background url(./ico3.png) no-repeat
            background-size 17px
          .i-password
            background url(./ico4.png) no-repeat
            background-size 17px
          .i-phone
            height 17px
            background url(./ico1.png) no-repeat
            background-size 12px 17px
          .i-lock
            background url(./ico4.png) no-repeat
            background-size 17px
      .newLoginForm
        height 152px
    .forgetPsw
      float right
      margin-right 20px
      font-size 14px
      clear-fix()
  .loginBtn, .newLoginBtn
    width 100%
    height 45px
    padding 6px 4% 0 4%
    box-sizing border-box
    .loginA, .newLoginA
      text-align center
      line-height 39px
      width 100%
      height 100%
      display block
      background #2ec975
      box-sizing border-box
      border-radius 5px
      letter-spacing 10px
      color: #fff
  .blank
    width 100%
    height 120px
  .otherLogin
    p
      text-align center
      color #d7d7d7
    .otherLogin-list
      overflow hidden
      padding 0 4%
      margin-top 10px
      box-sizing border-box
      .otherLogin-list-item
        float left
        width 33.333%
        height 58px
        img
          height 100%

</style>
