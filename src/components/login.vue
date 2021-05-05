<template>
  <div class="login-div">
    <h1>Login</h1>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <el-input v-model="input" placeholder="请输入内容"> </el-input>
          <el-button type="primary" @click="submit">登录</el-button>
          <p>login count: {{ this.$store.state.count }}</p>
        </div>
      </el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    submit() {
      localStorage.setItem("TOKEN", this.input);
      this.$store.commit("increment");
      this.$router.replace({
        path: "/homepage",
      });
    },
  },
};
</script>

<style scoped lang="less">
.login-div {
  margin-top: 100px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  //   background: #d3dce6;
}
.bg-purple-light {
  //   background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
