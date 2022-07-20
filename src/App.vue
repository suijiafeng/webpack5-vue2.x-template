<template>
  <div class="full-width center-content">
    <h1>hello,world</h1>
    <div class="wrapper">
    <el-input
      placeholder="请输入内容"
      v-model="value"
      @input="handleInput"
      clearable
    />
    </div>
    <hr />
    <ul>
      <li v-for="(item, index) in routesList" :key="index">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import { routes } from "@/router/index";
export default {
  data() {
    return {
      value: "",
    };
  },
  computed: {
    routesList() {
      return routes.slice(1, -1);
    },
  },
  methods: {
    handleInput(value) {
      this.value = value;
      this.$store.commit("testFn", value);
    },
  },
};
</script>
<style lang="scss">
.wrapper {
  width: 200px;
}
.center-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>