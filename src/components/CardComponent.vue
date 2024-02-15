<script>
export default {
  props: ["project"],
};
</script>

<template>
  <!-- card del project -->
  <div class="card">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        descrizione uguale cosi da avere tutte le card uguali che mi da
        fastidio, poi sistemo
      </p>
      <a
        v-if="project.github_url !== null"
        :href="project.github_url"
        target="_blank"
        class="btn btn-primary"
        >Repo link</a
      >
      <div v-else>No link to repo</div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
