import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const moduleA = {
  namespaced: true,
  state: {
    count: 0,
    token: "",
    list: [1, 2, 3],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setToken(state, token) {
      state.token = token;
    },
    addList(state, item) {
      state.list.push(item);
    },
  },
  getters: {
    filterList(state) {
      return state.list.filter((item) => item >= 2);
    },
  },
  actions: {
    asyncSetToken({ commit, rootState }, token) {
      setTimeout(() => {
        console.log("moduleA late");
        console.log(rootState.countB);
        rootState.countB++;
        commit("setToken", token);
      }, 1000);
    },
  },
};
const moduleB = {
  state: () => ({
    countB: 0,
    tokenB: "",
    listB: [1, 2, 3],
  }),
  mutations: {
    increment(state) {
      state.countB++;
    },
    setToken(state, token) {
      state.tokenB = token;
    },
    addList(state, item) {
      state.listB.push(item);
    },
  },
  getters: {
    filterList(state) {
      return state.listB.filter((item) => item >= 2);
    },
  },
  actions: {
    asyncSetToken({ commit }, token) {
      setTimeout(() => {
        console.log("moduleB late");
        commit("setToken", token);
      }, 1000);
    },
  },
};

const store = new Vuex.Store({
  state: {
    count: 122,
  },
  modules: {
    storeA: moduleA,
    storeB: moduleB,
  },
});

export default store;
