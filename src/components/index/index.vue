<template>
  <div class="main">
      <headerr class="index-header"></headerr>
      <headerTabs class="index-headerTabs"></headerTabs>
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
    height 100%
    width 100%
    .index-footer
      width 100%
      position fixed
      z-index 999
      bottom 0



</style>
