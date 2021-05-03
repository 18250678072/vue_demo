<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "./components/home";
export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {
    console.log("created");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
