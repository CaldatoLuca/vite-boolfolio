<script>
export default {};
</script>

<template>
  <footer>
    <div class="container text-center py-3">
      <h4>
        Primo collegamento tra Backend e Frontend, facciamo una chiamata API
        generata dal progetto
        <a href="https://github.com/CaldatoLuca/laravel-api" target="_blank"
          >Laravel Api</a
        >
      </h4>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "../scss/_partials/palette.scss";

footer {
  background-color: $red;
  color: $black;
  a {
    color: $grey;
  }
}
</style>
