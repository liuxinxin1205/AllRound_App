<template>
  <div id="app">
    <comp></comp>
    <router-view/>
  </div>
</template>

<script>
import Comp from '@/components/comp/Comp'
export default {
  name: 'App',
  components:{
    Comp
  }
}
</script>

<style>
#app {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
