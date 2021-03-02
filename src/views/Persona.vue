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

          <v-col>
            <v-card color="blue dark-4" dark>
              <v-card-title>
                CONSULTA UNA PERSONA
                <v-btn
                  v-if="model"
                  text
                  fab
                  elevation="0"
                  :to="{name:modificar, params:model}"
                >
                  <v-icon>create</v-icon>
                </v-btn>

                <v-btn
                  v-if="model"
                  text
                  fab
                  elevation="0"
                  @click="eliminarPersona(model)"
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
                  item-text="nombre"
                  item-value="id"
                  placeholder="Ingrese su busqueda"
                  prepend-icon="mdi-account-search"
                  return-object
                ></v-autocomplete>
              </v-card-text>
              <v-divider></v-divider>
              <v-expand-transition>
                <v-list v-if="model" class="blue dark-1">

                  <v-card class="mx-auto" max-width="434" tile>
                    <v-img
                      height="100%"
                      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                    >
                      <v-row align="end" class="fill-height">
                        <v-col align-self="start" class="pa-0" cols="12">
                          <v-avatar
                            class="profile"
                            color="grey"
                            size="164"
                            tile
                          >
                            <v-img
                              src="https://feelinsonice-hrd.appspot.com/web/bitmoji_avatar?username=robert.idol"
                            ></v-img>
                          </v-avatar>
                        </v-col>
                        <v-col class="py-0">
                          <v-list-item color="rgba(0, 0, 0, .4)" dark>
                            <v-list-item-content>
                              <v-list-item-title class="title">
                                {{ fields[1].value + " " + fields[2].value }}
                              </v-list-item-title>
                              <v-list-item-subtitle>{{
                                fields[9].value
                              }}</v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </v-col>
                      </v-row>
                    </v-img>
                  </v-card>
                          <v-dialog max-width="25%" v-model="dialogEliminar">
            <v-card>
                <v-card-title class="justify-center">
                    ¿Seguro desea eliminar esta persona?
                </v-card-title>
                <v-card-actions>
                    <v-spacer>

                    </v-spacer>
                    <v-btn text color="success" @click="confirmarDialogEliminar()">Confirmar</v-btn>
                    <v-btn text color="deep-orange darken-4" @click="cerrarDialogEliminar()">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

                  <v-list-item v-for="(field, i) in fields" :key="i">
                    <v-list-item-content
                      v-show="
                        !field.value.id &&
                        field.key != 'materias' &&
                        field.key != 'id'
                      "
                    >
                      <v-list-item-title
                        v-text="field.value"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-text="field.key"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                    
                    <v-list-item-content>
                      <v-list-item-title v-show="field.key === 'investigador'">{{
                        "La persona es un investigador " +
                        field.value.tipoDeInvestigador +
                        " con la categoria de " +
                        field.value.categoriaDeInvestigador +
                        " con " +
                        field.value.cantidadDeHoras +
                        " horas de dedicación a la semana"
                      }}</v-list-item-title>
                      <v-list-item-subtitle
                        v-show="field.key === 'investigador'"
                        >{{
                          "Descripcion del perfil investigador"
                        }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-expand-transition>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!model"
                  color="grey darken-3"
                  @click="model = null"
                >
                  Clear
                  <v-icon right> mdi-close-circle </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-spacer></v-spacer>
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
      modificar: "ModificacionPersona",
      elementoActual: {},
      search: "",
      dialogModificar: false,
      dialogEliminar: false,
      filtros: ["Nombre o apellido", "DNI", "Email", "Tipo de investigador"],
      filtroSeleccionado: "Nombre o apellido",
      descriptionLimit: 100,
      entries: [],
      isLoading: false,
      model: null,
    };
  },
  methods: {
    eliminarPersona(item) {
      this.dialogEliminar = true;
      this.elementoActual = item;
    },
    cerrarDialogEliminar() {
      this.dialogEliminar = false;
    },
    async confirmarDialogEliminar() {
      this.dialogEliminar = false;
      this.model = null;
      await axios
        .delete(
          "http://localhost:8080/gestiondepersonas/id/" + this.elementoActual.id
        )
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
  watch: {
    search() {
      if (this.isLoading) return;

      this.isLoading = true;

      axios
        .get(
          "http://localhost:8080/gestiondepersonas/?" +
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
    }
  }
};
</script>
<style scoped>
.titulo {
  color: #242424;
  margin-bottom: 0%;
}
</style>