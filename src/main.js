import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HelloRoute from "./components/HelloRoute";
import Users from "./components/Users";
import User from "./components/User";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/my-route",
      component: HelloRoute
    },
    {
      path: "/users",
      component: Users
    },
    {
      path: "/user",
      component: User,
      name: "user"
    }
  ]
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
