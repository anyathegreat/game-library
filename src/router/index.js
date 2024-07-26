import { createRouter, createWebHistory } from "vue-router";

import BaseView from "@/views/BaseView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import HomePage from "@/pages/HomePage.vue";
import GameDetailsPage from "@/pages/GameDetailsPage.vue";
import CatsGalleryPage from "@/pages/CatsGalleryPage.vue";
import DogsGalleryPage from "@/pages/DogsGalleryPage.vue";
import SettingsPage from "@/pages/SettingsPage.vue";
import GamesSearchPage from "@/pages/GamesSearchPage.vue";

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
          path: "/game-details/:id",
          component: GameDetailsPage,
        },
        {
          path: "/games-catalog",
          component: GamesSearchPage,
        },
        {
          path: "/cats-gallery",
          component: CatsGalleryPage,
        },
        {
          path: "/dogs-gallery",
          component: DogsGalleryPage,
        },
        {
          path: "/user-settings",
          component: SettingsPage,
        },
      ],
    },
    { path: "/:pathMatch(.*)*", component: PageNotFoundView },
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
