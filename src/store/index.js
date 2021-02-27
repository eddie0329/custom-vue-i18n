import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const SET_LANGUAGE = "SET_LANGUAGE";

export default new Vuex.Store({
  state: {
    language: "kr",
  },
  mutations: {
    [SET_LANGUAGE](state, newLang) {
      state.language = newLang;
    },
  },
  actions: {},
  modules: {},
});
