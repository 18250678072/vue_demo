import Category from "../components/category.vue";
import Home from "../components/home.vue";
import App from "../App.vue";
import VueRouter from "vue-router";
import HomePage from "../components/homepage.vue";
import Foo from "../components/foo.vue";
import Test from "../components/Test.vue";
import Login from "../components/login.vue";

const routes = [
  {
    path: "/",
    component: App,
    redirect: "homepage",
    children: [
      {
        path: "homepage",
        component: Home,
        children: [
          {
            path: "/",
            component: HomePage,
            children: [
              {
                path: "foo",
                components: {
                  default: Foo,
                  aaa: Test,
                },
              },
            ],
          },
          { path: "category", component: Category },
        ],
      },
      {
        path: "login",
        component: Login,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(from);
  const auth = localStorage.getItem("TOKEN");
  if (to.path !== "/login" && !auth) {
    next({
      path: "/login",
    });
  } else {
    next();
  }
});

export default router;
