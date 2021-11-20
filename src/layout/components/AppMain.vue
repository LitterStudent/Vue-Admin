<template>
  <div>
    this is main
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

<style>

</style>