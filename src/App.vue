<template>
  <div id="app">
    <template v-if="!$route.meta.fullScreen">
      <sidebar></sidebar>
      <div class="main-container">
        <navbar></navbar>
        <app-main></app-main>
      </div>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar,
    AppMain
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  display: flex;
}

.main-container {
  flex: 1;
  padding: 20px;
}
</style>