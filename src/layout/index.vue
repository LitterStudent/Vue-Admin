<template>
  <div  class="app-wrapper">
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
  }
}
</script>

<style>

</style>