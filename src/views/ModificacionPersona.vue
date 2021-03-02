<template>
  <v-container>
    <v-card elevation="12">
      <v-card-title class="blue lighten-5 justify-center"
        ><strong>MODIFICACION DE PERSONA</strong></v-card-title
      >
      <v-card-text>
        <v-form v-model="validoFormulario" ref="formularioRegistro">
          <v-row
            ><v-card-title
              ><strong>DATOS PERSONALES</strong></v-card-title
            ></v-row
          >

          <v-row>
            <v-col>
              <v-text-field
                label="Nombres*"
                hint="Escriba el nombre completo sin el apellido"
                v-model="personaAModificar.nombre"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Apellido*"
                hint="Escriba el apellido"
                v-model="personaAModificar.apellido"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="DNI*"
                hint="Escriba el DNI sin espacios ni guiones*"
                v-model="personaAModificar.dni"
                :rules="reglaCampoVacio && reglaCantidadNegativa"
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                label="CUIL*"
                hint="Escriba el cuil sin espacios ni guiones"
                v-model="personaAModificar.cuil"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Dirección postal*"
                hint="Escriba la dirección"
                v-model="personaAModificar.direccionPostal"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
            <v-col> </v-col>
          </v-row>

          <v-row> </v-row>
          <v-row
            ><v-card-title
              ><strong>DATOS DE CONTACTO</strong></v-card-title
            ></v-row
          >

          <v-row>
            <v-col>
              <v-text-field
                label="Celular *"
                hint="Escriba su telefono celular"
                v-model="personaAModificar.telefono"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Email personal*"
                hint="Escriba el mail personal"
                v-model="personaAModificar.emailPersonal"
                :rules="reglaEmail"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Email institucional"
                hint="Escriba el mail institucional (no obligatorio)"
                v-model="personaAModificar.emailInstitucional"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row
            ><v-card-title
              ><strong>DATOS ACADEMICOS</strong></v-card-title
            ></v-row
          >
          <v-row>
            <v-col>
              <v-select
                label="Tipo de investigador*"
                :items="tiposInvestigador"
                :rules="reglaCampoVacio"
                v-model="personaAModificar.investigador.tipoDeInvestigador"
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-show="
                  personaAModificar.investigador.tipoDeInvestigador != null
                "
                v-if="
                  personaAModificar.investigador.tipoDeInvestigador == 'UTN'
                "
                label="Categoría de investigador"
                :items="categoriasUTN"
                v-model="personaAModificar.investigador.categoriaDeInvestigador"
              >
              </v-select>
              <v-select
                v-show="
                  personaAModificar.investigador.tipoDeInvestigador != null
                "
                v-if="
                  personaAModificar.investigador.tipoDeInvestigador ==
                  'Nacional'
                "
                label="Categoría de investigador"
                :items="categoriasNacional"
                v-model="personaAModificar.investigador.categoriaDeInvestigador"
              >
              </v-select>
              <v-select
                v-show="
                  personaAModificar.investigador.tipoDeInvestigador != null
                "
                v-if="
                  personaAModificar.investigador.tipoDeInvestigador == 'CONICET'
                "
                label="Categoría de investigador"
                :items="categoriasCONICET"
                v-model="personaAModificar.investigador.categoriaDeInvestigador"
              >
              </v-select>
              <v-select
                v-show="
                  personaAModificar.investigador.tipoDeInvestigador != null
                "
                v-if="
                  personaAModificar.investigador.tipoDeInvestigador == 'CIC'
                "
                label="Categoría de investigador"
                :items="categoriasCIC"
                v-model="personaAModificar.investigador.categoriaDeInvestigador"
              >
              </v-select>
            </v-col>
            <v-col>
              <v-text-field
                v-show="
                  personaAModificar.investigador.tipoDeInvestigador != null
                "
                label="Número de resolución de la categoría"
                hint="Ingrese el número de resolución"
                v-model="personaAModificar.investigador.numeroDeResolucion"
                type="number"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="
                  personaAModificar.investigador.fechaDeObtencionDeCategoria
                "
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-show="
                      personaAModificar.investigador.tipoDeInvestigador != null
                    "
                    v-model="
                      personaAModificar.investigador.fechaDeObtencionDeCategoria
                    "
                    label="Fecha de obtención de la categoría"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="
                    personaAModificar.investigador.fechaDeObtencionDeCategoria
                  "
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
                    @click="
                      $refs.menu.save(
                        personaAModificar.investigador
                          .fechaDeObtencionDeCategoria
                      )
                    "
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                label="Situación académica"
                hint="Indique si es alumno, graduado o docente (si es alumno/graduado ayudante, seleccione docente)"
                :items="opcionTipoPersona"
                v-model="personaAModificar.situacionAcademica"
                :rules="reglaCampoVacio"
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-if="personaAModificar.situacionAcademica == 'Alumno'"
                label="Ingrese cantidad de horas semanales dedicadas a investigación*"
                :items="horasAlumno"
                v-model="personaAModificar.investigador.cantidadDeHoras"
                :rules="reglaCampoVacio"
                v-show="personaAModificar.situacionAcademica != null"
              >
              </v-select>
              <v-select
                v-if="personaAModificar.situacionAcademica == 'Graduado'"
                label="Ingrese cantidad de horas semanales dedicadas a investigación*"
                :items="horasGraduado"
                v-model="personaAModificar.investigador.cantidadDeHoras"
                :rules="reglaCampoVacio"
                v-show="personaAModificar.situacionAcademica != null"
              >
              </v-select>
              <v-select
                v-if="personaAModificar.situacionAcademica == 'Docente'"
                label="Ingrese cantidad de horas semanales dedicadas a investigación*"
                :items="horasDocente"
                v-model="personaAModificar.investigador.cantidadDeHoras"
                :rules="reglaCampoVacio"
                v-show="personaAModificar.situacionAcademica != null"
              ></v-select>
            </v-col>
            <v-col>
              <v-btn
                v-show="personaAModificar.situacionAcademica == 'Docente'"
                block
                @click="mostrarDialogMateria"
                >Cargar materia en la que participa</v-btn
              >
            </v-col>
            <v-col>
              <v-btn
                v-show="personaAModificar.situacionAcademica == 'Docente'"
                block
                @click="mostrarListaMaterias"
                >Mostrar materias agregadas</v-btn
              >
            </v-col>
          </v-row>
          <v-row
            ><v-card-title>
              <strong>PASAPORTE</strong
              ><v-checkbox
                v-model="tienePasaporte"
              ></v-checkbox></v-card-title
          ></v-row>
          <v-row v-show="tienePasaporte">
            <v-col>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Número de pasaporte"
                    v-model="personaAModificar.pasaporte.numero"
                    type="number"
                    :rules="reglaCampoVacio"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-menu
                    ref="menu2"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :return-value.sync="
                      personaAModificar.pasaporte.fechaDeVencimiento
                    "
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="personaAModificar.pasaporte.fechaDeVencimiento"
                        label="Fecha de vencimiento"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="personaAModificar.pasaporte.fechaDeVencimiento"
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
                        @click="
                          $refs.menu2.save(
                            personaAModificar.pasaporte.fechaDeVencimiento
                          )
                        "
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-col>
            <v-col> </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!validoFormulario"
          text
          color="success"
          @click="agregarPersona(nuevaPersona)"
          >Confirmar registro</v-btn
        >
        <v-btn @click="limpiar()" text color="deep-orange darken-4"
          >Limpiar campos</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-dialog max-width="50%" v-model="dialogMateria">
      <v-card>
        <v-card-title class="justify-center blue lighten-4"
          >AGREGAR MATERIA</v-card-title
        >
        <v-card-text>
          <v-form v-model="validoMateria" ref="formularioMateria">
            <v-row>
              <v-col>
                <v-text-field
                  label="Materia"
                  hint="Ingrese nombre de la materia"
                  :rules="reglaCampoVacio"
                  v-model="nuevaMateriaAux.nombre"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-select
                  label="Cargo docente"
                  hint="Seleccione el cargo que ocupa"
                  :items="cargosDocentes"
                  :rules="reglaCampoVacio"
                  v-model="nuevaMateriaAux.cargo"
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  label="Dedicación"
                  hint="Seleccione la dedicación"
                  :items="categoriasDedicaciones"
                  :rules="reglaCampoVacio"
                  v-model="nuevaMateriaAux.dedicacion"
                ></v-select>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!validoMateria"
            text
            color="success"
            @click="cargarMateria"
            >Confirmar materia</v-btn
          >
          <v-btn @click="cerrarDialogMateria" text color="deep-orange darken-4"
            >Cancelar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogListaMaterias">
      <v-card>
        <v-card-title>MATERIAS AGREGADAS</v-card-title>
        <v-card-text> </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog max-width="50%" v-model="dialogPasaporte">
      <v-card>
        <v-card-title class="justify-center blue lighten-4"
          >CARGAR DATOS DE PASAPORTE</v-card-title
        >
        <v-card-text>
          <v-form v-model="validoPasaporte" ref="formularioPasaporte"> </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!validoPasaporte"
            text
            color="success"
            @click="cargarPasaporte()"
            >Confirmar datos</v-btn
          >
          <v-btn
            @click="cerrarDialogPasaporte"
            text
            color="deep-orange darken-4"
            >Cancelar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
var axios = require("axios");
export default {
  data() {
    return {
      categoriasUTN: ["A", "B", "C", "D", "E", "F", "G"],
      categoriasNacional: ["I", "II", "III", "IV", "V"],
      categoriasCONICET: [
        "Superior",
        "Principal",
        "Independiente",
        "Adjunto",
        "Asistente",
      ],
      categoriasCIC: [
        "Superior",
        "Principal",
        "Independiente",
        "Adjunto",
        "Asistente",
      ],
      opcionTipoPersona: ["Alumno", "Graduado", "Docente"],
      cargosDocentes: [
        "Profesor titular",
        "Profesor asociado",
        "Profesor adjunto",
        "Jefe de trabajos prácticos",
        "Ayudante 1 - Diplomado",
        "Ayudante 2 - Alumno",
      ],
      categoriasDedicaciones: ["Simple", "Semi-exclusiva", "Exclusiva"],
      tiposInvestigador: ["UTN", "Nacional", "CONICET", "CIC"],
      horasAlumno: ["6", "12", "18", "Otro"],
      horasGraduado: ["12", "20", "Otro"],
      horasDocente: ["10", "15", "20", "40", "Otro"],
      personaExistente: {},
      personaAModificar: null,
      validoFormulario: false,
      validoMateria: false,
      validoPasaporte: false,
      menu: false,
      menu2: false,
      tienePasaporte: true,
      reglaCampoVacio: [
        (texto) => {
          if (texto) {
            return true;
          }
          return "Este campo es obligatorio";
        },
      ],
      reglaEmail: [
        (email) => {
          if (/.+@.+\..+/.test(email)) {
            return true;
          }
          return "Debe ingresar un email valido";
        },
      ],
      reglaCantidadNegativa: [
        (cantidad) => {
          if (cantidad >= 0) {
            return true;
          }
          return "No puede ingresar una cantidad negativa";
        },
      ],
      dialogPasaporte: false,
      nuevaMateriaAux: {
        nombre: "",
        cargo: "",
        dedicacion: "",
      },
      headersMaterias: [
        "Nombre",
        "Cargo del docente en la materia",
        "Dedicación del docente en la materia",
      ],
    };
  },
  methods: {
    mostrarPersona() {
      console.log(this.personas);
    },
    limpiar() {
      this.$refs.formularioRegistro.reset();
      this.validoFormulario = false;
    },
    async agregarPersona() {
      this.$refs.formularioRegistro.validate();
      var requestBody = {
        nombre: this.nuevaPersona.nombre,
        apellido: this.nuevaPersona.apellido,
        dni: this.nuevaPersona.dni,
        cuil: this.nuevaPersona.cuil,
        direccionPostal: this.nuevaPersona.direccionPostal,
        emailInstitucional: this.nuevaPersona.emailInstitucional,
        emailPersonal: this.nuevaPersona.emailPersonal,
        telefono: this.nuevaPersona.celular,
        situacionAcademica: this.nuevaPersona.situacionAcademica,
        pasaporte: !this.nuevaPersona.pasaporte.tiene
          ? null
          : {
              numero: this.nuevaPersona.pasaporte.numero,
              fechaDeVencimiento: this.nuevaPersona.pasaporte.numero,
            },
        investigador: {
          categoriaDeInvestigador: this.nuevaPersona.categoriaInvestigador,
          tipoDeInvestigador: this.nuevaPersona.tipoInvestigador,
          cantidadDeHoras: this.nuevaPersona.horaSemanal,
          fechaDeObtencionDeCategoria: this.nuevaPersona
            .fechaObtencionCategoria,
          numeroDeResolucion: this.nuevaPersona.numeroResolucion,
        },
        materias: this.nuevaPersona.materias,
      };
      axios
        .post("http://localhost:8080/gestiondepersonas", requestBody)
        .then((response) => console.log(response));
      this.$refs.formularioRegistro.reset();
    },
    mostrarDialogMateria() {
      this.dialogMateria = true;
    },
    cerrarDialogMateria() {
      this.$refs.formularioMateria.reset();
      this.dialogMateria = false;
    },
    mostrarListaMaterias() {
      this.dialogListaMaterias = true;
      console.log(this.nuevaPersona);
    },
    cargarMateria() {
      const nuevaMateria = {};
      nuevaMateria.nombre = this.nuevaMateriaAux.nombre;
      nuevaMateria.cargo = { cargo: this.nuevaMateriaAux.cargo };
      nuevaMateria.dedicacion = this.nuevaMateriaAux.dedicacion;
      this.nuevaPersona.materias.push(nuevaMateria);
      this.dialogMateria = false;
      this.nuevaMateriaAux.nombre = "";
      this.nuevaMateriaAux.cargo = "";
      this.nuevaMateriaAux.dedicacion = "";
    },
    mostrarDialogPasaporte() {
      this.dialogPasaporte = true;
    },
    cerrarDialogPasaporte() {
      this.$refs.formularioPasaporte.reset();
      this.dialogPasaporte = false;
    },
    cargarPasaporte() {
      this.$refs.formularioPasaporte.validate();
      this.dialogPasaporte = false;
    },
  },
  created() {
    this.personaAModificar = this.$route.params;
    this.tienePasaporte = !!this.personaAModificar.pasaporte;
  },
};
</script>