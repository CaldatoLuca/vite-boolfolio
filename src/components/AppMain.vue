<script>
//importo axios per usarlo
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      baseUrl: "http://127.0.0.1:8000",
      apiUrls: {
        projects: "/api/projects",
      },
    };
  },
  methods: {
    //creo metodo che fa chiamata axios a tutti i progetti
    //response dopo url
    //catch per eventuali errori
    getProjects() {
      axios
        .get(this.baseUrl + this.apiUrls.projects)
        .then((response) => {
          this.projects = response.data.data;
        })
        .catch((error) => {
          console.log("Errore" + error);
        });
    },
  },
  //in created, appena si crea la pagina, richiamo il metodo getProjects
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <main>
    <div class="container p-4">
      <h2 class="text-center">Project List</h2>
      <ul>
        <li v-for="project in projects">
          {{ project.title }}
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../scss/_partials/palette.scss";

main {
  background-color: $black;
  color: $grey;
}
</style>
