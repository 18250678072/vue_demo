import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    token: "",
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setToken() {},
  },
});

export default store;
