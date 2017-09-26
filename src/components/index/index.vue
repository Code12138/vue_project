<template>
  <div class="main">
       <headerr class="index-header"></headerr>
       <headerTabs class="index-headerTabs"></headerTabs>
       <footerNav class="index-footer"></footerNav>
  </div>
</template>
<script>
  import axios from 'axios'
  import headerr from '../headerr/headerr.vue'
  import headerTabs from '../headerTabs/headerTabs.vue'
  import footerNav from '../footerNav/footerNav.vue'
  export default {
    data() {
      return {}
    },
  mounted(){
      axios.get('/api3/menus').then(res=>{
        console.log(res)
      })
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
  .main
    height 100%
    width 100%
    .index-header
      position fixed
      z-index 100
    .index-headerTabs
      padding-top 135px
    .index-footer
      width 100%
      position fixed
      z-index 999
      bottom 0



</style>
