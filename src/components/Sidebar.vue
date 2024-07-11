<template>
  <div class="sidebar">
    <div class="logo">Admin Panel</div>
    <ul class="nav-menu">
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    routes() {
      return this.$router.options.routes.filter(route => !route.hidden)
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  height: 100vh;
  padding: 20px;
}

.nav-menu {
  list-style-type: none;
  padding: 0;
}

.nav-menu li {
  margin-bottom: 10px;
}

.nav-menu a {
  color: white;
  text-decoration: none;
}
</style>