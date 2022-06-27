import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "event-show",
    props: true,
    component: () =>
      import("../views/EventShow.vue"),
  },
  {
    path: "/create",
    name: "event-create",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "create" */ "../views/EventCreate.vue"),
  },
  {
    path: "/user/:username",
    name: "user-page",
    props: true,
    component: () =>
      import("../views/UserPage.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
