import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import BaseView from "@/views/BaseView.vue";
import GameDetailsPage from "@/pages/GameDetailsPage.vue";
import SettingsPage from "@/pages/SettingsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: BaseView,
      children: [
        {
          path: "/",
          component: HomePage,
        },
        {
          path: "/game-details",
          component: GameDetailsPage,
        },
        {
          path: "/user-settings",
          component: SettingsPage,
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
