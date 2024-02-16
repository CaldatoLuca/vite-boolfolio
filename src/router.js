//importo il necessario per creare e gestire lo rotte
import { createRouter, createWebHistory } from "vue-router";

//importo i componenti
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import ProjectList from "./pages/ProjectList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/project",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/projects",
      name: "list",
      component: ProjectList,
    },
  ],
});

export { router };
