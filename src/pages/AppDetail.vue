<script>
import axios from "axios";

export default {
  data() {
    return {
      imageUrl: "http://127.0.0.1:8000/storage/",
      project: {},
      baseUrl: "http://127.0.0.1:8000",
      apiUrls: {
        projects: "/api/projects",
      },
    };
  },
  methods: {
    getProject() {
      axios
        .get(
          this.baseUrl + this.apiUrls.projects + "/" + this.$route.params.slug
        )
        .then((response) => {
          this.project = response.data.data;
          console.log(this.project);
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.getProject();
  },
};
</script>

<template>
  <main>
    <div class="container py-5">
      <h1 class="mb-4">{{ project.title }}</h1>
      <p class="mb-3">{{ project.description }}</p>
      <div class="mb-3">{{ project.type.title }}</div>
      <img
        v-if="project.thumb"
        :src="imageUrl + project.thumb"
        :alt="project.slug"
      />
    </div>
  </main>
</template>

<style></style>
