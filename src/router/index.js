import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase";
import { storeToRefs } from "pinia";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shop",
      name: "Shop",
      component: () => import("../views/ShopView.vue"),
    },
    {
      path: "/product/:id",
      name: "Product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/category/:categoryname",
      name: "Category",
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/account/:id",
      name: "Account",
      component: () => import("../views/AccountView.vue"),
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: () => import("../views/CheckoutView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/wishlist",
      name: "Wishlist",
      component: () => import("../views/WishlistView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "Checkout" && !auth.currentUser) next({ name: "Login" });
  else next();
});

export default router;
