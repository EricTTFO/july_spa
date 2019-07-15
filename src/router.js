import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      // render: h => h(App),
      children: [
        {
          path: "about",
          component: () => import("./components/About.vue")
        },
        {
          path: "booking",
          component: () => import("./components/Booking.vue")
        },
        {
          path: "courses",
          component: () => import("./components/Courses.vue"),
          children: [
            {
              path: "",
              component: () => import("./components/CourseList.vue")
            },
            {
              path: ":id",
              component: () => import("./components/CourseDetail.vue")
            }
          ]
        }
      ]
    }
  ]
});
