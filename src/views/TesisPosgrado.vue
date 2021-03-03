<template>
  <v-container>
    <v-card>
      <v-card-title style="background-color: #eeeeee" class="justify-center">
        <strong>TESIS</strong>
        <v-spacer></v-spacer>

        <v-spacer></v-spacer>
        <v-btn
          dark
          color="light-blue accent-3"
          elevation="12"
          fab
          to="AltaTesisPosgrado"
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

          <v-col>
            <v-card color="blue dark-4" dark>
              <v-card-title>
                CONSULTA UNA TESIS
                <v-btn
                  v-if="model"
                  text
                  fab
                  elevation="0"
                  :to="{ name: modificar, params: model }"
                >
                  <v-icon>create</v-icon>
                </v-btn>

                <v-btn
                  v-if="model"
                  text
                  fab
                  elevation="0"
                  @click="eliminar(model)"
                >
                  <v-icon>delete_outline</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text>
                <v-autocomplete
                  v-model="model"
                  :items="item"
                  :loading="isLoading"
                  :search-input.sync="search"
                  color="white"
                  hide-no-data
                  hide-selected
                  item-text="titulo"
                  placeholder="Ingrese su busqueda"
                  prepend-icon="mdi-account-search"
                  return-object
                ></v-autocomplete>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!model"
                  color="grey darken-3"
                  @click="model = null"
                >
                  Limpiar
                  <v-icon right> mdi-close-circle </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-row>
      <v-col>
        <v-expand-transition>
          <v-card v-if="model" color="#ffffff">
            <v-card-title
              style="background-color: #37474f"
              class="justify-center titulo"
              >DATOS DE LA TESIS</v-card-title
            >
            <v-row>
              <v-col>
                <v-card
                  style="margin-top: 40px"
                  class="mx-auto"
                  max-width="434"
                  tile
                >
                  <v-img
                    height="100%"
                    src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                  >
                    <v-row align="end" class="fill-height">
                      <v-col align-self="start" class="pa-0" cols="12">
                        <v-avatar class="profile" color="grey" size="164" tile>
                          <v-img
                            src="https://feelinsonice-hrd.appspot.com/web/bitmoji_avatar?username=robert.idol"
                          ></v-img>
                        </v-avatar>
                      </v-col>
                      <v-col class="py-0">
                        <v-list-item color="rgba(0, 0, 0, .4)" dark>
                          <v-list-item-content>
                            <v-list-item-title class="title">
                              {{ fields[7].value }}
                            </v-list-item-title>
                            <v-list-item-subtitle>{{
                              fields[6].value
                            }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-col>
                    </v-row>
                  </v-img>
                </v-card>
              </v-col>
              <v-col>
                <v-row>
                  <v-col>
                    <v-card-title style="background-color: #17c0c5">
                      <!-- {{ model.fechaInicio }} {{ model.fechaFinal }}:  -->
                      UNIDAD EDUCATIVA : {{ model.universidad }}
                    </v-card-title>
                    <v-card-title style="background-color: #17c0c5">
                      DIRECTOR:{{ model.director }}
                    </v-card-title>

                    <v-card-title style="background-color: #17c0c5">
                      FUENTE:
                      {{ model.fuenteDeFinanciamiento }}
                    </v-card-title>

                    <v-card-title style="background-color: #17c0c5">
                      VINCULACION:{{ model.vinculacionConProyecto }}
                    </v-card-title>
                  </v-col>
                  <v-col>
                    <v-card-title style="background-color: #178bc5">
                      TUTOR:
                      {{ model.tutor }}
                    </v-card-title>
                    <v-card-title style="background-color: #178bc5">
                      DOCENTE:
                      {{ model.docente }}
                    </v-card-title>
                    <v-card-title style="background-color: #178bc5">
                      CARRERA:
                      {{ model.carrera }}
                    </v-card-title>
                  </v-col>
                  <v-divider inset vertical></v-divider>
                </v-row>

                <v-row>
                  <v-col>
                    <v-card-title>DNI {{ model.persona.dni }}</v-card-title>
                  </v-col>
                  <v-col>
                    <v-card-title>CUIL: {{ model.persona.cuil }} </v-card-title>
                  </v-col>
                  <v-col> </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card-title
                      >CONTACTO: {{ model.persona.telefono }} ---
                      {{ model.persona.emailPersonal }} ---
                      {{ model.persona.emailInstitucional }}</v-card-title
                    >
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-expand-transition>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>
    <v-dialog max-width="25%" v-model="dialogEliminar">
      <v-card>
        <v-card-title class="justify-center">
          ¿Seguro desea eliminar esta tesis?
        </v-card-title>
        <v-card-actions>
          <v-spacer> </v-spacer>
          <v-btn text color="success" @click="confirmarDialogEliminar()"
            >Confirmar</v-btn
          >
          <v-btn
            text
            color="deep-orange darken-4"
            @click="cerrarDialogEliminar()"
            >Cancelar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
var axios = require("axios");
var vuetify = require("vuetify");
export default {
  data() {
    return {
      vuetify: vuetify,
      item: [
        {
          fechaInicio: "1613443603",
          fechaFinal: "1613443603",
          catedra: "sistemas de representacion",
          universidad: "utn",
          escuela: "null",
          director: "skinner",
          carrera: "Ingenieria en sistemas",
          titulo:
            "Diseño de una arquitectura que soluciona problemas de la facultad",
          tutor: "Ruiz",
          docente: "Luis Santos",
          tipoDePractica: "tesis_postgrado",
          vinculacionConProyecto: "giuct",
          fuenteDeFinanciamiento: "utn",
          persona: {
            id: 58,
            nombre: "Saunders",
            apellido: "Howe",
            dni: "35232961",
            direccionPostal: "1205",
            telefono: "+54 (889) 410-3637",
            cuil: "20-11994035-2",
            emailPersonal: "Saunders.Howe@gmail.com",
            emailInstitucional: "Saunders.Howe@utn.frlp.edu.ar",
            situacionAcademica: "Docente",
            pasaporte: {
              id: 60,
              numero: "11994035",
              fechaDeVencimiento: "21/10/2022",
            },
            investigador: {
              id: 59,
              categoriaDeInvestigador: "A",
              tipoDeInvestigador: "UTN",
              cantidadDeHoras: "12",
              fechaDeObtencionDeCategoria: "11/02/2015",
              numeroDeResolucion: "35386106",
            },
          },
        },
      ],
      modificar: "ModificacionTesisPosgrado",
      search: "",
      dialogModificar: false,
      dialogEliminar: false,
      filtros: [
        "titulo",
        "Universidad",
        "Proyecto",
        "Fuente de financiamiento",
      ],
      filtroSeleccionado: "titulo",
      descriptionLimit: 100,
      entries: [],
      isLoading: false,
      model: null,
    };
  },
  methods: {
    eliminarPersona() {
      this.dialogEliminar = true;
    },
    cerrarDialogEliminar() {
      this.dialogEliminar = false;
    },
    async confirmarDialogEliminar() {
      this.dialogEliminar = false;
      var id = this.model.id;
      this.model = null;
      await axios
        .delete("http://localhost:8080/gestiondepersonas/id/" + id)
        .then((response) => console.log(response));
    },
  },
  computed: {
    fields() {
      if (!this.model) return [];

      return Object.keys(this.model).map((key) => {
        return {
          key,
          value: this.model[key] || "n/a",
        };
      });
    },
  },
  //   watch: {
  //     search() {
  //       if (this.isLoading) return;

  //       this.isLoading = true;

  //       axios
  //         .get(
  //           "http://localhost:8080/gestiondepersonas/?" +
  //             this.filtroSeleccionado.replace(/\s/g, "") +
  //             "=" +
  //             this.search
  //         )
  //         .then((response) => {
  //           this.item = response.data;
  //           this.count = response.data;
  //           this.entries = response.data;
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         })
  //         .finally(() => (this.isLoading = false));
  //     },
  //   },
};
</script>
<style scoped>
.titulo {
  color: #ffffff;
  margin-bottom: 0%;
}
</style>