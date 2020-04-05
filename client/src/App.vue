<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'

  export default {
    name: 'App',
    components: {
      'Navigation': NavBar
    }
  }
</script>

<style>
  /*@import "assets/scss/style.scss";*/

</style>
