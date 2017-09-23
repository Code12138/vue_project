<template>

    <div class="footer" style="display: block;">
      <div class="ft">
        <span class="bt" title="触屏版">触屏版</span>
        <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
        <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
        <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
      </div>
      <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px">© wap.epet.com 版权：重庆易宠科技有限公司</div>
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
  .footer
    border-top: 5px solid #f3f4f5;
    margin: 1em 0 0;
    padding-bottom: 36px;
    background: #fff;
    clear: both;
    font-size 14px
    .ft
      padding: 15px 0 10px;
      text-align: center;
      span
        padding-right 10px
      .bt
        color red
</style>
