<template>
  <main class="app-main">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style scoped>
.app-main {
  min-height: calc(100vh - 50px);
  padding: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>