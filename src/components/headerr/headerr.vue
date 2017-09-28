<template>
  <div class="header">
    <div>
      <div class="xiazai">
        <img src="./211547bb51dd23758f74fb86e9d7aae5.png">
      </div>
      <div class="header-main">

        <div class="search">
          <router-link to="/city">
          <div>
          <span class="dags">狗狗站</span>
          <span class="dags">|</span>
          <span class="dags">重庆</span>
          </div>
          </router-link>
          <i class="san"></i>
          <p class="searchBox">
            <input placeholder="搜索商品和品牌" type="text"/>
            <span class="serach-ico"></span>
          </p>
          <a class="logoImg">
             <img class="logoinImg" src="./mydope.png">
          </a>
        </div>
      </div>
      <div ref="seller">
      <ul class="navList" >
        <li class="navListItem">
          <router-link to="/index">
            首页
          </router-link>
        </li>
        <li>
           <router-link to="/mianFood">
           主粮
           </router-link>
        </li>
        <li><a href="">医疗保健</a></li>
        <li><a href="">零食玩具</a></li>
        <li><a href="">日用外出</a></li>
        <li><a href="">美容香波</a></li>
      </ul>
       <!-- <router-view> </router-view>-->
      </div>
    </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },
    methods: {
      Nav_scroll() {
        this.scroll = new BScroll(this.$refs.seller, {
          click: true,
          scrollX: true,
          scrollY: false
        })
      }
    },
    computed: {},
    created() {
      this.$nextTick(() => {
        this.Nav_scroll();
      });
    },
    components: {
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    background: #FFFFFF
    .xiazai
      height 55px
      width auto
      img
        height 100%
        width 100%
    .header-main
      position relative
      padding 10px
      .search
        position relative
        display inline-block
        height 30px
        background: #fff;
        text-align: center;
        display: -webkit-box;
        -webkit-box-align: center;
        .dags
          height 19px
          width 42px
          font-size 14px
          color #7e8c8d
        .san
          display inline-block
          border-width: 4px;
          font-size: 0;
          line-height: 0;
          border-style:   dotted solid solid;
          border-color: #898989 transparent transparent;
        .searchBox
          position relative
          padding-left 6px
          .serach-ico
            background url("./search.png") no-repeat
            display block
            width: 11px;
            height: 11px;
            background-position: 0 0;
            background-size: 11px auto;
            position: absolute;
            right 5px
            top 7px
          input
            width: 220px;
            border: 0;
            height: 25px;
            background: #e9e9e9;
            border-radius: 4px;
            color: #bcbcbc;
            text-indent: 10px;
            outline: 0;
            font: 10px Arial;



        .logoImg
          display: block;
          height 25px
          width 35px
          text-decoration: none;
          .logoinImg
            width 25px

    .navList
      float left
      overflow hidden
      white-space nowrap
      li
        display inline-block
        padding 0 15px
        line-height: 36px;
        font-size: 14px;
        text-align: center;
        color: #666;
</style>
