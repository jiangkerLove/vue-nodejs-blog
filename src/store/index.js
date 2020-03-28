import Vue from "vue";
import Vuex from "vuex";
import topics from "./topics";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "fasdfsa"
  },
  modules: { topics }
});
