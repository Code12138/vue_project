<template>
<div class="register">

    <div class="re-main" v-show="isShow">
      <div class="icoPhone" style="
      height: 40px;padding-left: 20px;display: flex;padding-top: 10px" >
        <div class="phone-ico">
          <img src="./ico1.png" alt="">
        </div>
        <div class="inputPhone" >
          <input class="inputPhone-text" placeholder="请输入手机号" type="text"/>
          <div style="border-bottom: solid 3px gray;padding-left:20px"></div>
        </div>
      </div>
      <div>
        <div style="text-align: center;padding-right: 20px" >
          <mt-button type="primary"   @click="showIs"   style="width: 80%;">下一步</mt-button>
        </div>
      </div>
    </div>


  <div class="mainBottom"  v-show="bottomShow">
  <form action="">
      <ul class="phone">
        <li>
          <span>
          <img src="./ico1.png" alt="">
         </span>
          <span>
          <input type="number" placeholder="请输入手机号">
        </span>
        </li>
        <li>
          <span >
          <img src="./ico5.png" alt="">
         </span>
          <span style="display: flex">
          <input type="text" placeholder="请输入图片上的验证码"><img src="./seccode.jpg" alt="">
        </span>
        </li>
        <li>
          <span>
          <img src="./ico2.png" alt="">
         </span>
          <span>
          <input type="text" placeholder="请输入短信验证码">
            <mt-button type=""></mt-button>
        </span>
        </li>
        <li>
          <span>
          <img src="./ico3.png" alt="">
         </span>
          <span>
          <input type="text" placeholder="请输入用户昵称">
        </span>
        </li>
        <li>
          <span>
          <img src="./ico4.png" alt="">
         </span>
          <span>
          <input type="text" placeholder="请输入密码">
        </span>
        </li>
        <li>
          <span>
          <img src="./ico4.png" alt="">
         </span>
          <span>
          <input type="text" placeholder="请确认密码">
        </span>
        </li>
      </ul>
    <div>
      <div style="text-align: center;padding-right: 20px; padding-top:20px;" >
        <mt-button type="primary"  style="width: 80%;">注册</mt-button>
      </div>
    </div>
  </form>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        phone:'',
        isShow:true,
        bottomShow:false

      }
    },
    methods: {
      demotest(){
       console.log('fsdfsa')
      },
      showIs(){
        this.isShow = !this.isShow
        this.bottomShow = !this.bottomShow
      }
    },
    computed: {

    },
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .register
  .re-main
    z-index 10000
    height 100%
    background-color: #fff
    .icoPhone
      .phone-ico
        padding-right 20px
      .inputPhone
        .inputPhone-text
          height 30px
          outline:medium
          display: block;
          width: 100%;
          font-size: 13px;
          border: none;
          color: #b8b8b8;



  .mainBottom
    li
      display flex
      margin-top 20px
      margin-left 20px
      span
        margin-right 20px
        input
          margin-right 20px
          height 30px
          outline:medium
          display: block;
          width: 100%;
          font-size: 13px;
          border: none;
          color: #b8b8b8;


</style>
