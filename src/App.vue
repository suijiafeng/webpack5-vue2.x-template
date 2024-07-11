<template>
  <div id="app">
    <div v-if="isLoggedIn" class="app-layout">
      <Sidebar class="sidebar" />
      <div class="main-content">
        <Navbar />
        <el-main>
          <router-view />
        </el-main>
      </div>
    </div>
    <router-view v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
  },
  computed: {
    ...mapGetters('user', ['isLoggedIn'])
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

.app-layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  flex-shrink: 0;
  background-color: #304156;
  color: white;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}

.main-content {
  flex-grow: 1;
  margin-left: 250px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

main {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>