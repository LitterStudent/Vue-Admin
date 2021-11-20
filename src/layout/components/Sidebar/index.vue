<template>
  <div>
    <el-menu
      
      :collapse="isCollapse"
      :text-color="variables.menuText"
      :background-color="variables.menuBg"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
       mode="vertical"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SideBarItem'
import variables from '@/styles/variables.scss'

export default {
  components:{ SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
    ,
    routes(){
        return this.$router.options.routes
    },
    variables(){
      return variables
    },
    isCollapse(){
      return !this.sidebar.opened
    },
  }

}
</script>

<style>

</style>