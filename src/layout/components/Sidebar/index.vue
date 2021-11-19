<template>
  <div>
    <el-menu
       mode="vertical"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
    this is side
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import SidebarItem from './SideBarItem'
// import variables from '@/styles/variables.scss'

export default {
  components:{ SidebarItem },
  computed: {
    sidebar(){
       const sidebar ={ opened:true, withoutAnimation:false}
       return sidebar;
    },
    routes(){
        return this.$router.options.routes
    }
  }

}
</script>

<style>

</style>