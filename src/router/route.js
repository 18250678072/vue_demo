// import Category from "../components/category.vue";
// import Home from "../components/home.vue";
// import App from "../App.vue";
import VueRouter from "vue-router";
// import HomePage from "../components/homepage.vue";
// import Foo from "../components/foo.vue";
// import Test from "../components/Test.vue";
// import Login from "../components/login.vue";

const routes = [
  {
    path: "/",
    component: ()=>import( /* webpackChunkName: "App" */  "../App.vue"),
    redirect: "homepage",
    chunkFilename: '[name].bundle.js',
    children: [
      {
        path: "homepage",
        component: ()=>import( /* webpackChunkName: "Home" */  "../components/home.vue"),
        children: [
          {
            path: "/",
            component: ()=>import( /* webpackChunkName: "Homepage" */  "../components/homepage.vue"),
            children: [
              {
                path: "foo",
                components: {
                  default: ()=>import("../components/foo.vue"),
                  aaa: ()=>import("../components/Test.vue"),
                },
              },
            ],
          },
          { path: "category", component: ()=>import("../components/category.vue") },
        ],
      },
      {
        path: "login",
        component: ()=>import("../components/login.vue"),
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
