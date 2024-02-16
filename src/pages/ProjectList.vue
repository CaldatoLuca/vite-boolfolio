<script>
//importo axios per usarlo
import axios from "axios";
import CardComponent from "../components/CardComponent.vue";

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      currentPage: 1,
      data: [],
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
        .get(this.baseUrl + this.apiUrls.projects, {
          params: { page: this.currentPage },
        })
        .then((response) => {
          this.data = response.data.data;
        })
        .catch((error) => {
          console.log("Errore" + error);
        });
    },
    nextPage() {
      this.currentPage++;
      this.getProjects();
    },
    prevPage() {
      this.currentPage--;
      this.getProjects();
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
      <!-- main title -->
      <h2 class="text-center mb-4">Project List</h2>

      <!-- griglia -->
      <div class="row g-3 mb-4">
        <!-- elemento griglia -->
        <div
          class="col col-md-4 d-flex justify-content-center"
          v-for="project in data.data"
        >
          <CardComponent :project="project"></CardComponent>
        </div>
      </div>

      <div class="d-flex gap-3 justify-content-around">
        <button
          class="btn btn-primary"
          @click="prevPage"
          :disabled="data.prev_page_url === null"
        >
          Previus
        </button>
        <button
          class="btn btn-primary"
          @click="nextPage"
          :disabled="data.next_page_url === null"
        >
          Next
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../scss/_partials/palette.scss";
</style>
