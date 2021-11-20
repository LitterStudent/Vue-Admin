<template>
  <div :class="classObj" class="app-wrapper">
      <sidebar class="sidebar-container"/>
      <div class="main-container">
          <div >
            <navbar/>
          </div>
          <app-main />
      </div>
      this is Layout
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
export default {
  components:{
    Sidebar,
    Navbar,
    AppMain
  },
  computed:{
    sidebar(){
     return this.$store.state.app.sidebar
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  @import "~@/styles/variables.scss";
  @import "~@/styles/mixin.scss";

  .app-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    @include clearfix;
  }
</style>