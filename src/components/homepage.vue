<template>
  <div>
    <h1 class="title">homepage</h1>
    <h2>TOKEN: {{ token }}</h2>
    <el-button type="primary" @click="exit">退出</el-button>
    <p>login count: {{ this.$store.state.count }}</p>
    <div>
      <router-link to="/homepage/foo">foo</router-link>
    </div>
    <div>
      <router-view></router-view>
      <router-view name="aaa"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
    };
  },
  methods: {
    exit() {
      localStorage.setItem("TOKEN", "");
      this.$router.replace({
        path: "/login",
      });
    },
  },
  created() {
    this.token = localStorage.getItem("TOKEN");
    console.log(this.$store.state.count);
  },
};
</script>

<style>
.router-link-active {
  color: red;
}
.title {
  color: black;
}
</style>
