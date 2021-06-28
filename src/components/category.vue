<template>
  <div>
    <!-- 临时变量 -->
    <div>
      <h1>Category</h1>
      <h2>临时变量：</h2>
      <p>方法1:</p>
      <div v-for="item in list" :key="item">
        {{ void (message = reverse(item)) }}
        <p>{{ message }}</p>
        <!-- <p>{{ message + 1 }}</p> -->
      </div>
      <p>方法2：</p>
      <div v-for="item in list1" :key="item">
        <fn-com :defaultProps="reverse(item)">
          <template #default="{ defaultProps }">
            <p>{{ defaultProps }}</p>
          </template>
        </fn-com>
      </div>
    </div>
    <!-- provider inject -->
    <div>
      <inject-itema></inject-itema>
      <inject-itemb></inject-itemb>
    </div>
    <el-button type="primary" @click="changeColor('green')"
      >cate change</el-button
    >
  </div>
</template>

<script>
import { FnCom } from "./FnCom";
import Vue from "vue";
const themeObs = Vue.observable({ color: "blue" });
export default {
  components: {
    FnCom,
    InjectItema,
    InjectItemb,
  },
  data() {
    return {
      list: ["a", "b", "c"],
      list1: ["e", "d", "f"],
      theme: themeObs,
    };
  },
  computed: {
    message1() {
      return this.list[this.list.length - 1];
    },
  },
  methods: {
    reverse(item) {
      console.log("methods");
      return (item + "change").split("").reverse().join("");
    },
  },
  created() {},
};
</script>

<style></style>
