<template>
<div>
  <h1>about page</h1>
  data from vuex：{{ $store.state.test }}
  </div>
</template>

<script>
export default {
  data(){
    return {
      value:11
    }
  },
  methods:{
    handleChange(e){
      this.value= e.target.value
      this.$store.commit('testFn',e.target.value)
    }
  }
};
</script>

<style>
</style>