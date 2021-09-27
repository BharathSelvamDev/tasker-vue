import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from 'axios';

export default new Vuex.Store({
  state: {
    infos: [],
  },
  mutations: {
    Refresh() {
      axios.get("https://vue-api-boot.herokuapp.com/gettasks").then((response) => {
        console.log(response.data);
        this.state.infos = response.data;
      });
    },
  },
  actions: {},
  modules: {},
});
