import App from "@/App.vue";
import Vue from "vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

(<any>window).mountComponent = () => {
  /*// this works fine
  let factory = () => import(`@/components/async/List.vue`);
  new Vue({
    store,
    render: h => h(factory),
    el: `#list`,
  });*/

  // this get caught in infinite loop
  new Vue({
    store,
    render: h => h(() => import(`@/components/async/List.vue`)),
    el: `#list`,
  });
};

