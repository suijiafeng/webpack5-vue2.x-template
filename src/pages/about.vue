<template>
  <div>
    <h1>about</h1>
    <input type="text" :value="value" @change="handleChange">
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