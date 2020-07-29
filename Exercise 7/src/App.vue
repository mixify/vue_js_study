<template>
  <div class="container">
    <app-header></app-header>
    <app-server></app-server>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Server from './components/Server.vue'

export default {
  components: {
    'app-header' : Header,
    'app-server' : Server,
  }

}

</script>

<style>

</style>
