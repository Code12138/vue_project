<template>
  <div ref="seller">
    <div class="juanzhu-swipe"  >
      <div class="juanzhu-li">
      <a>
        <div class="juanzhu-li-img">
          <img src="./2343a54d10a810b947b0c1a0d86c7f10.jpg">
        </div>
        <div class="juanzhu-li-price">
          <span class="fuhao">￥</span>
          <span>80.0</span>
        </div>
        <p class="juanzhu-li-price-pre">
          省￥15.10
        </p>
      </a>
    </div>
      <div class="juanzhu-li">
        <a>
          <div class="juanzhu-li-img">
            <img src="./2343a54d10a810b947b0c1a0d86c7f10.jpg">
          </div>
          <div class="juanzhu-li-price">
            <span class="fuhao">￥</span>
            <span>80.0</span>
          </div>
          <p class="juanzhu-li-price-pre">
            省￥15.10
          </p>
        </a>
      </div>
      <div class="juanzhu-li">
        <a>
          <div class="juanzhu-li-img">
            <img src="./2343a54d10a810b947b0c1a0d86c7f10.jpg">
          </div>
          <div class="juanzhu-li-price">
            <span class="fuhao">￥</span>
            <span>80.0</span>
          </div>
          <p class="juanzhu-li-price-pre">
            省￥15.10
          </p>
        </a>
      </div>
      <div class="juanzhu-li">
        <a>
          <div class="juanzhu-li-img">
            <img src="./2343a54d10a810b947b0c1a0d86c7f10.jpg">
          </div>
          <div class="juanzhu-li-price">
            <span class="fuhao">￥</span>
            <span>80.0</span>
          </div>
          <p class="juanzhu-li-price-pre">
            省￥15.10
          </p>
        </a>
      </div>
      <div class="juanzhu-li">
        <a>
          <div class="juanzhu-li-img">
            <img src="./2343a54d10a810b947b0c1a0d86c7f10.jpg">
          </div>
          <div class="juanzhu-li-price">
            <span class="fuhao">￥</span>
            <span>80.0</span>
          </div>
          <p class="juanzhu-li-price-pre">
            省￥15.10
          </p>
        </a>
      </div>
      <div class="juanzhu-li">
        <a>
          <div class="juanzhu-li-img">
            <img src="./2343a54d10a810b947b0c1a0d86c7f10.jpg">
          </div>
          <div class="juanzhu-li-price">
            <span class="fuhao">￥</span>
            <span>80.0</span>
          </div>
          <p class="juanzhu-li-price-pre">
            省￥15.10
          </p>
        </a>
      </div>
      <div class="juanzhu-li">
      <a>
        <div class="juanzhu-li-img">
          <img src="./2343a54d10a810b947b0c1a0d86c7f10.jpg">
        </div>
        <div class="juanzhu-li-price">
          <span class="fuhao">￥</span>
          <span>80.0</span>
        </div>
        <p class="juanzhu-li-price-pre">
          省￥15.10
        </p>
      </a>
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
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .juanzhu-swipe
    height 131px
    float: left;
    white-space: nowrap;
    overflow hidden
    .juanzhu-li
      display inline-block
      .juanzhu-li-img
        height 85px
        width 85px
        img
          width 100%
          height 100%
      .juanzhu-li-price
        width 85px
        height 22px
        color red
        text-align center
        font-size 10px
        margin-top 5px

      .juanzhu-li-price-pre
        width 85px
        height 19px
        font-size 12px
        color #999
        text-align center
</style>
