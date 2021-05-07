<template>
  <div>
    <h1 class="title">homepage</h1>
    <h2>TOKEN: {{ token }}</h2>
    <el-input v-model="token"></el-input>
    <el-button type="primary" @click="modifyToken">modify token</el-button>
    <el-button type="primary" @click="asyncModifyToken(token)"
      >async modify token</el-button
    >

    <el-button type="primary" @click="exit">退出</el-button>
    <p>login count: {{ this.$store.state.storeA.count }} - {{ count }}</p>
    <p>storeB count: {{ this.$store.state.storeB.countB }} - {{ count }}</p>

    <el-button type="primary" @click="addCount">add count</el-button>
    <el-button type="primary" @click="addList">add list</el-button>

    <ul>
      <li v-for="(item, index) in filterList" :key="index">
        {{ item }}
      </li>
    </ul>
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
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      token: "",
    };
  },
  methods: {
    ...mapActions({
      asyncModifyToken: "storeA/asyncSetToken",
    }),
    exit() {
      localStorage.setItem("TOKEN", "");
      this.$router.replace({
        path: "/login",
      });
    },
    addCount() {
      this.$store.commit("increment");
    },
    modifyToken() {
      // this.$store.commit("setToken", this.token);
      this.$store.dispatch("storeA/asyncSetToken", this.token);
    },
    addList() {
      this.$store.commit("addList", 3);
    },
  },
  computed: {
    ...mapGetters(["filterList"]),
    ...mapState([
      // 映射 this.count 为 store.state.count
      "count",
    ]),
  },
  created() {
    this.token = localStorage.getItem("TOKEN");
    this.$store.commit("setToken", this.token);
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
