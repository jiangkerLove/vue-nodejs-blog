import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, List } from "ant-design-vue";

Vue.use(Button);
Vue.use(List);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
