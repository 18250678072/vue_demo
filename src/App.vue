<template>
  <div id="app">
    <h1>App</h1>
    <el-button @click="showToast">toast info</el-button>
    <el-button @click="showDialog">dialog info</el-button>

    <Test></Test>
  </div>
</template>

<script>
import Test from "./components/Test";
export default {
  name: "App",
  components: {
    Test,
  },
  data() {
    return {};
  },
  methods: {
    showToast() {
      this.$toast({
        type: "success",
        size: "default",
        message: "成功提示",
        duration: 3000,
      });
    },
    showDialog() {
      this.$dialog({
        title: "标题",
        content: "内容",
        onOk: () => {
          console.log("Okkkk");
        },
        onCancel: () => {
          console.log("cancel");
        },
      });
    },
  },
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
  margin-top: 60px;
}
</style>
