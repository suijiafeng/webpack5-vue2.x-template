<template>
  <nav class="sidebar">
    <div class="logo">
      <h1>Admin Panel</h1>
    </div>
    <el-menu
      :default-active="routes[0].path"
      class="sidebar-menu"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      router
    >
      <el-menu-item :index="nav.path" v-for="(nav,index) in routes" :key="index">
        <i :class="nav.meta?.icon||'el-icon-menu'"></i>
        <span slot="title">{{nav.meta?.title||nav.name}}</span>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    routes() {
      return this.$router.options.routes.filter(route => route.name&&!route.meta?.hideInNav)
    }
  }
}
</script>

<style scoped>
.sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2b2f3a;
}

.logo h1 {
  color: white;
  font-size: 20px;
  margin: 0;
}

.sidebar-menu {
  border-right: none;
}

.sidebar-menu:not(.el-menu--collapse) {
  width: 250px;
}
</style>
Last edited just now