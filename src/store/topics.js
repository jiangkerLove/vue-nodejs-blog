import instance from "./instance";

const state = {
  ask: [],
  share: [],
  job: [],
  good: []
};

const getters = {
  getDataByType: state => type => {
    console.log("get" + type);
    switch (type) {
      case "ask":
        return state.ask;
      case "share":
        return state.share;
      case "job":
        return state.job;
      case "good":
        return state.good;
    }
  }
};

const mutations = {
  setDataByType: function(state, { arr, type }) {
    console.log(`setDataByType ${JSON.stringify(state)}`);
    switch (type) {
      case "ask":
        arr.forEach(item => {
          state.ask.push(item);
        });
        break;
      case "share":
        arr.forEach(item => {
          state.share.push(item);
        });
        break;
      case "job":
        arr.forEach(item => {
          state.job.push(item);
        });
        break;
      case "good":
        arr.forEach(item => {
          state.good.push(item);
        });
        break;
    }
  }
};

const actions = {
  getDataByUrl: function(context, { type, num }) {
    console.log(`getDataByUrl${type} ${num}`);
    instance
      .get(
        `https://cnodejs.org/api/v1/topics?limit=7&page=${num}&tab=${type}&mdrender=${false}`
      )
      .then(response => {
        let arr = response.data.data;
        arr.forEach(item => {
          let i = item.content.indexOf("![");
          if (i > 0) {
            item.content = item.content.substring(0, i);
          }
        });
        context.commit("setDataByType", { arr, type });
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
