<template>
  <v-container>
    <v-card>
      <v-card-title
        style="background-color: #eeeeee"
        class="justify-center titulo"
      >
        <strong>PERSONAS</strong>
        <v-spacer></v-spacer>

        <v-spacer></v-spacer>
        <v-btn
          dark
          color="light-blue accent-3"
          elevation="12"
          fab
          to="AltaPersona"
          ><v-icon>add</v-icon></v-btn
        >
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col class="col-3">
            <v-autocomplete
              v-model="filtroSeleccionado"
              :items="filtros"
              :search-input.sync="search"
              chips
              clearable
              hide-details
              hide-selected
              label="Seleccione un filtro"
              solo
            >
              <template v-slot:no-data>
                <v-list-item>
                  <v-list-item-title> Seleccione un filtro </v-list-item-title>
                </v-list-item>
              </template>
              <template v-slot:selection="{ attr, on, item, selected }">
                <v-chip
                  v-bind="attr"
                  :input-value="selected"
                  color="blue-grey"
                  class="white--text"
                  v-on="on"
                >
                  <span v-text="item"></span>
                </v-chip>
              </template>
              <template v-slot:item="{ item }">
                <v-list-item-content>
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-filter</v-icon>
                </v-list-item-action>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-spacer></v-spacer>
  </v-container>
</template>

<script>
var axios = require("axios");
export default {
  data() {
    return {
      headers: [
        {
          text: "Nombre",
          value: "nombre",
          class: "black--text",
        },
        {
          text: "Apellido",
          value: "apellido",
          class: "black--text",
        },
        {
          text: "DNI",
          value: "dni",
          class: "black--text",
        },
        {
          text: "Codigo Postal",
          value: "direccionPostal",
          class: "black--text",
        },
        {
          text: "Tipo de investigador",
          value: "investigador.tipoDeInvestigador",
          class: "black--text",
        },
        {
          text: "Categoria de investigador",
          value: "investigador.categoriaDeInvestigador",
          class: "black--text",
        },
        {
          text: "Acciones",
          value: "actions",
          align: "center",
          class: "black--text",
        },
      ],
      item: [],
      elementoActual: {},
      search: "",
      dialogModificar: false,
      dialogEliminar: false,
      dialogConsultar: false,
      filtros: ["Nombre o apellido", "DNI", "Email", "Tipo de investigador"],
      filtroSeleccionado: "Nombre o apellido"
    };
  },
  

    mounted: function () {
      axios
        .get("http://localhost:8080/gestiondepersonas/")
        .then((response) => {
          this.item = response.data;
        })
        .finally((response) => console.log(response));
    },
    updated: function () {
      axios
        .get("http://localhost:8080/gestiondepersonas/")
        .then((response) => {
          this.item = response.data;
        })
        .finally((response) => console.log(response));
    },
  methods: {
    consultarPersona() {
      this.dialogConsultar = true;
    },
    eliminarPersona(item) {
      this.dialogEliminar = true;
      this.elementoActual = item;
    },
    modifcarPersona() {
      this.dialogConsultar = true;
    },
    cerrarDialogEliminar() {
      this.dialogEliminar = false;
    },
    async confirmarDialogEliminar() {
      this.dialogEliminar = false;
      await axios
        .delete(
          "http://localhost:8080/gestiondepersonas/id/" + this.elementoActual.id
        )
        .then((response) => console.log(response));
    },
  },
};
</script>
<style scoped>
.titulo {
  color: #242424;
  margin-bottom: 0%;
}
</style>