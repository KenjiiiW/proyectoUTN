<template>
  <v-container>
    <v-card>
      <v-card-title style="background-color: #eeeeee" class="justify-center">
        <strong>ENSAYOS DE CATEDRA</strong>
        <v-spacer></v-spacer>

        <v-spacer></v-spacer>
        <v-btn
          dark
          color="light-blue accent-3"
          elevation="12"
          fab
          to="AltaEnsayoCatedra"
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
                CONSULTA UN ENSAYO
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
                <v-card  style="margin-top: 40px" class="mx-auto" max-width="434" tile>
                    <v-img
                      height="100%"
                      src="https://www.rassegna.com.ar/wp-content/uploads/2017/01/rassegna-asientos-universidades-utn-la-plata-3.jpg"
                    >
                      <v-row align="end" class="fill-height">
                        <v-col align-self="start" class="pa-0" cols="12">
                        </v-col>
                        <v-col class="py-0">
                          <v-list-item color="rgba(0, 0, 0, .4)" dark>
                            <v-list-item-content>
                              <v-list-item-title class="title">
                                {{ fields[8].value}}
                              </v-list-item-title>
                              <v-list-item-subtitle>{{
                                fields[7].value
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
                    <v-col>
                      <v-card-title>
                        <v-row>
                          <v-col>
                            <v-row>
                              <v-card color="blue dark-4" dark>
                                <v-card-title>
                                  TESISTA: {{ model.persona.nombre }} ---
                                  {{ model.persona.apellido }}
                                </v-card-title>
                                <v-card-title>
                                  DNI: {{ model.persona.dni }}
                                </v-card-title>
                              </v-card>
                            </v-row>
                          </v-col>
                        </v-row>
                      </v-card-title>
                      <v-card color="blue dark-4" dark>
                        <v-card-title style="background-color: #17c0c5">
                          <!-- {{ model.fechaInicio }} {{ model.fechaFinal }}:  -->
                          UNIDAD EDUCATIVA : {{ model.universidad }}
                        </v-card-title>
                        <v-card-title style="background-color: #17c0c5">
                          DIRECTOR:{{ model.director }}
                        </v-card-title>

                        <v-card-title style="background-color: #17c0c5">
                          FUENTE:
                          {{ model.fuenteDeFinanciamiento.fuente }}
                        </v-card-title>

                        <v-card-title style="background-color: #17c0c5">
                          VINCULACION:{{ model.vinculacionConProyecto.name }}
                        </v-card-title>
                      </v-card>
                    </v-col>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-col>
                      <v-card color="blue dark-4" dark>
                        <v-card-title style="background-color: #a0a0a0">
                          CARRERA:
                          {{ model.carrera }}
                        </v-card-title>
                      </v-card>
                    </v-col>
                  </v-col>
                </v-row>

                <v-row>
                 
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
          ¿Seguro desea eliminar este ensayo?
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
      item: [],
      modificar: "ModificacionEnsayoCatedra",
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
    eliminar() {
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
        .delete("http://localhost:8080/gestiondeformacionacademica/id/" + id)
        .then((response) => console.log(response))
        .then(alert("el ensayo fue eliminado de manera exitosa"));
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
    watch: {
      search: function(){
        if (this.isLoading) return;

        this.isLoading = true;

        axios
          .get(
            "http://localhost:8080/gestiondeformacionacademica/filter/tesispostgrado?" +
              this.filtroSeleccionado.replace(/\s/g, "") +
              "=" +
              this.search
          )
          .then((response) => {
            this.item = response.data;
            this.count = response.data;
            this.entries = response.data;
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => (this.isLoading = false));
      },
    },
};
</script>
<style scoped>
.titulo {
  color: #ffffff;
  margin-bottom: 0%;
}
</style>