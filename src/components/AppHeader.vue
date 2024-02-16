<script>
export default {
  data() {
    return {
      pages: [
        {
          name: "home",
          linkName: "Home",
        },
        {
          name: "list",
          linkName: "Projects",
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <div
      class="container d-flex justify-content-between align-items-center py-3"
    >
      <h1 class="title">Boolfolio</h1>
      <div class="pages">
        <ul class="list-unstyled d-flex gap-3 mb-0 align-items-center">
          <li v-for="page in pages">
            <RouterLink :to="{ name: page.name }">
              {{ page.linkName }}</RouterLink
            >
          </li>
        </ul>
      </div>
      <h2 class="subtitle">Projects List API</h2>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "../scss/_partials/palette.scss";

header {
  background-color: $torquise;

  .title {
    color: $black;
  }

  a {
    color: $red;
    text-decoration: none;
  }
}
</style>
