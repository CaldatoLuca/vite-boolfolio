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
          console.log(this.projects);
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
  <main>Main</main>
</template>

<style scoped></style>
