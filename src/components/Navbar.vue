<template>
  <nav class="navbar">
    <div class="breadcrumb">
      {{ currentRoute }}
    </div>
    <div class="user-info">
      Welcome, {{ username }}
      <button @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    currentRoute() {
      return this.$route.name
    },
    username() {
      return this.$store.state.user.username
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f8f9fa;
}
</style>