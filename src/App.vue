<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HallOfFame msg="Hall of fame"/>
  </div>
</template>

<script>
import HallOfFame from './components/HallOfFame.vue'

export default {
  name: 'App',
  components: {
    HallOfFame
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
