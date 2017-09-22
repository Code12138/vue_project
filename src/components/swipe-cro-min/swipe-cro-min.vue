<template>
  <div ref="seller">
    <div class="shopItem-swipe"  >
      <div class="shopItem-li">
      <a>
        <div class="shopItem-li-img">
          <img src="./epet_brand_logo.png">
        </div>
        <div class="juanzhu-text">已捐助¥186675.85</div>

      </a>
    </div>
      <div class="shopItem-li">
        <a>
          <div class="shopItem-li-img">
            <img src="./epet_brand_logo.png">
          </div>
          <div class="juanzhu-text">已捐助¥186675.85</div>

        </a>
      </div>
      <div class="shopItem-li">
        <a>
          <div class="shopItem-li-img">
            <img src="./epet_brand_logo.png">
          </div>
          <div class="juanzhu-text">已捐助¥186675.85</div>

        </a>
      </div>
      <div class="shopItem-li">
        <a>
          <div class="shopItem-li-img">
            <img src="./epet_brand_logo.png">
          </div>
          <div class="juanzhu-text">已捐助¥186675.85</div>

        </a>
      </div>
      <div class="shopItem-li">
        <a>
          <div class="shopItem-li-img">
            <img src="./epet_brand_logo.png">
          </div>
          <div class="juanzhu-text">已捐助¥186675.85</div>

        </a>
      </div>
      <div class="shopItem-li">
        <a>
          <div class="shopItem-li-img">
            <img src="./epet_brand_logo.png">
          </div>
          <div class="juanzhu-text">已捐助¥186675.85</div>

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
  .shopItem-swipe
    margin-left: 70px;
    padding: 5px 0 0 5px;
    border-left: 1px solid #e7e7e7;
    height 76px
    float: left;
    white-space: nowrap;
    overflow hidden
    .shopItem-li
      display inline-block
      .shopItem-li-img
        height 40px
        width 99px
        img
          width 100%
          height 100%

      .juanzhu-text
        border-top: 1px solid #e7e7e7;
        margin-top: 5px;
        padding: 3px 0;
        font-size: 12px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
</style>
