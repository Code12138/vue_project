<template>
  <div class="main">
    <div class="warp">
      <headerr class="index-header"></headerr>
      <headerTabs class="index-headerTabs"></headerTabs>
    </div>
    <footerNav class="index-footer"></footerNav>
  </div>
</template>
<script>
  import headerr from '../headerr/headerr.vue'
  import headerTabs from '../headerTabs/headerTabs.vue'
  import footerNav from '../footerNav/footerNav.vue'
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {
      headerr,
      headerTabs,
      footerNav
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 /* .index-header
    position fixed
    z-index 100
   .index-headerTabs
    position relative
    top 150px*/
  .main
    position relative
    width 100%
    height 100%
    .warp
      mini-height 100%




</style>
