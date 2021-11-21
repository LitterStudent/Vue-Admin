<template>
  <div class="app-main">
     <router-view :key="key" />
     
  </div>
</template>

<script>
export default {
  name:'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>