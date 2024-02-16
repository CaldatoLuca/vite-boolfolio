<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { RouterView } from "vue-router";

export default {
  components: {
    AppHeader,
    AppFooter,
    RouterView,
  },
};
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>
