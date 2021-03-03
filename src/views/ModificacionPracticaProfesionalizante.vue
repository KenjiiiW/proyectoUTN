<template>
  <v-container>
    <v-card elevation="12">
      <v-card-title class="justify-center blue lighten-5">
        MODIFICACION DE PRACTICA PROFESIONALIZANTE
      </v-card-title>
      <v-card-text>
        <v-form v-model="validoFormulario" ref="formularioRegistro">
          <v-autocomplete
            v-model="model"
            :items="this.personas"
            :search-input.sync="search"
            color="white"
            hide-no-data
            hide-selected
            :item-text="
              (item) =>
                item.nombre + ' - ' + item.apellido + ' | DNI: ' + item.dni
            "
            placeholder="Seleccione persona a cargo"
            prepend-icon="mdi-account-search"
            return-object
          ></v-autocomplete>
          <v-row>
            <v-col>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="PracticaProfesionalizanteAModificar.fechaInicio"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="PracticaProfesionalizanteAModificar.fechaInicio"
                    label="Fecha de inicio*"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="reglaCampoVacio"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="PracticaProfesionalizanteAModificar.fechaInicio"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="deep-orange darken-4" @click="menu = false"
                    >Cancelar</v-btn
                  >
                  <v-btn
                    text
                    color="success"
                    @click="$refs.menu.save(PracticaProfesionalizanteAModificar.fechaInicio)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                :return-value.sync="PracticaProfesionalizanteAModificar.fechaFinal"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="PracticaProfesionalizanteAModificar.fechaFinal"
                    label="Fecha de finalización"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="PracticaProfesionalizanteAModificar.fechaFinal"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="deep-orange darken-4"
                    @click="menu2 = false"
                    >Cancelar</v-btn
                  >
                  <v-btn
                    text
                    color="success"
                    @click="$refs.menu2.save(PracticaProfesionalizanteAModificar.fechaFinal)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                label="Nombre de la carrera*"
                v-model="PracticaProfesionalizanteAModificar.carrera"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Universidad*"
                v-model="PracticaProfesionalizanteAModificar.universidad"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                label="Título de la practica*"
                v-model="PracticaProfesionalizanteAModificar.titulo"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Director*"
                hint="Escriba nombre y apellido del director"
                v-model="PracticaProfesionalizanteAModificar.director"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                label="Vinculación de la practica*"
                hint="Escriba la vinculación de la practica con PID o la iniciativa de investigación en la UCT"
                v-model="PracticaProfesionalizanteAModificar.vinculacionConProyecto.name"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select
                label="Fuente de financiamiento"
                v-model="PracticaProfesionalizanteAModificar.fuenteDeFinanciamiento.fuente"
                :items="fuentesFinanciamiento"
              ></v-select>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!validoFormulario"
          text
          color="success"
          @click="modificarTesis()"
          >Confirmar modificacion</v-btn
        >
        <v-btn @click="limpiar()" text color="deep-orange darken-4"
          >Limpiar campos</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
var axios = require("axios");
var vuetify = require("vuetify");
export default {
  data() {
    return {
      vuetify: vuetify,
      personas: null,
      PracticaProfesionalizanteAModificar: null,
      menu: false,
      menu2: false,
      validoFormulario: false,
      model: null,
      reglaCampoVacio: [
        (texto) => {
          if (texto) {
            return true;
          }
          return "Este campo es obligatorio";
        },
      ],
      fuentesFinanciamiento: [
        "sin financiamiento",
        "conicet",
        "cic",
        "agencia",
        "utn",
        "foncyt",
        "Otro",
      ],
    };
  },
  methods: {
    limpiar() {
      this.$refs.formularioRegistro.reset();
      this.validoFormulario = false;
    },
    async modificarTesis() {
      this.$refs.formularioRegistro.validate();
      var requestBody = {
        fechaInicio: this.PracticaProfesionalizanteAModificar.fechaInicio,
        fechaFinal: this.PracticaProfesionalizanteAModificar.fechaFinal,
        carrera: this.PracticaProfesionalizanteAModificar.carrera,
        universidad: this.PracticaProfesionalizanteAModificar.universidad,
        titulo: this.PracticaProfesionalizanteAModificar.titulo,
        director: this.PracticaProfesionalizanteAModificar.director,
        tipoDePractica: {
          tipoDePractica: "proyecto_final_ingenieria",
        },
        vinculacionConProyecto: {
          name: "giuct",
        },
        fuenteDeFinanciamiento: {
          fuente: this.PracticaProfesionalizanteAModificar.fuenteDeFinanciamiento.fuente,
        },
        persona: this.model,
      };
      axios
        .put(
          "http://localhost:8080/gestiondeformacionacademica/id/" +
            this.PracticaProfesionalizanteAModificar.id,
          requestBody
        )
        .then((response) => console.log(response))
        .then(alert("Se ha modificado la practica exitosamente"));
      this.$refs.formularioRegistro.reset();
      this.$router.push('/ProyectoFinal');
    },
  },
  mounted: function () {
    axios
      .get("http://localhost:8080/gestiondepersonas/")
      .then((response) => {
        this.personas = response.data;
      })
      .finally((response) => console.log(response));
  },
  created() {
    this.PracticaProfesionalizanteAModificar = this.$route.params;
    this.model = this.PracticaProfesionalizanteAModificar.persona;
  },
};
</script>