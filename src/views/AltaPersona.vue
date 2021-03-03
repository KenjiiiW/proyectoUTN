<template>
  <v-container>
    <v-card elevation="12">
      <v-card-title class="blue lighten-5 justify-center"
        ><strong>ALTA DE PERSONA</strong></v-card-title
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
                v-model="nuevaPersona.nombre"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Apellido*"
                hint="Escriba el apellido"
                v-model="nuevaPersona.apellido"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="DNI*"
                hint="Escriba el DNI sin espacios ni guiones*"
                v-model="nuevaPersona.dni"
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
                v-model="nuevaPersona.cuil"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Dirección postal*"
                hint="Escriba la dirección"
                v-model="nuevaPersona.direccionPostal"
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
                v-model="nuevaPersona.telefono"
                :rules="reglaCampoVacio"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Email personal*"
                hint="Escriba el mail personal"
                v-model="nuevaPersona.emailPersonal"
                :rules="reglaEmail"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Email institucional"
                hint="Escriba el mail institucional (no obligatorio)"
                v-model="nuevaPersona.emailInstitucional"
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
                v-model="nuevaPersona.investigador.tipoDeInvestigador"
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-show="
                  nuevaPersona.investigador.tipoDeInvestigador != null
                "
                v-if="
                  nuevaPersona.investigador.tipoDeInvestigador == 'UTN'
                "
                label="Categoría de investigador"
                :items="categoriasUTN"
                v-model="nuevaPersona.investigador.categoriaDeInvestigador"
              >
              </v-select>
              <v-select
                v-show="
                  nuevaPersona.investigador.tipoDeInvestigador != null
                "
                v-if="
                  nuevaPersona.investigador.tipoDeInvestigador ==
                  'Nacional'
                "
                label="Categoría de investigador"
                :items="categoriasNacional"
                v-model="nuevaPersona.investigador.categoriaDeInvestigador"
              >
              </v-select>
              <v-select
                v-show="
                  nuevaPersona.investigador.tipoDeInvestigador != null
                "
                v-if="
                  nuevaPersona.investigador.tipoDeInvestigador == 'CONICET'
                "
                label="Categoría de investigador"
                :items="categoriasCONICET"
                v-model="nuevaPersona.investigador.categoriaDeInvestigador"
              >
              </v-select>
              <v-select
                v-show="
                  nuevaPersona.investigador.tipoDeInvestigador != null
                "
                v-if="
                  nuevaPersona.investigador.tipoDeInvestigador == 'CIC'
                "
                label="Categoría de investigador"
                :items="categoriasCIC"
                v-model="nuevaPersona.investigador.categoriaDeInvestigador"
              >
              </v-select>
            </v-col>
            <v-col>
              <v-text-field
                v-show="
                  nuevaPersona.investigador.tipoDeInvestigador != null
                "
                label="Número de resolución de la categoría"
                hint="Ingrese el número de resolución"
                v-model="nuevaPersona.investigador.numeroDeResolucion"
                type="number"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="
                  nuevaPersona.investigador.fechaDeObtencionDeCategoria
                "
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-show="
                      nuevaPersona.investigador.tipoDeInvestigador != null
                    "
                    v-model="
                      nuevaPersona.investigador.fechaDeObtencionDeCategoria
                    "
                    label="Fecha de obtención de la categoría"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="
                    nuevaPersona.investigador.fechaDeObtencionDeCategoria
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
                        nuevaPersona.investigador
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
                v-model="nuevaPersona.situacionAcademica"
                :rules="reglaCampoVacio"
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-if="nuevaPersona.situacionAcademica == 'Alumno'"
                label="Ingrese cantidad de horas semanales dedicadas a investigación*"
                :items="horasAlumno"
                v-model="nuevaPersona.investigador.cantidadDeHoras"
                :rules="reglaCampoVacio"
                v-show="nuevaPersona.situacionAcademica != null"
              >
              </v-select>
              <v-select
                v-if="nuevaPersona.situacionAcademica == 'Graduado'"
                label="Ingrese cantidad de horas semanales dedicadas a investigación*"
                :items="horasGraduado"
                v-model="nuevaPersona.investigador.cantidadDeHoras"
                :rules="reglaCampoVacio"
                v-show="nuevaPersona.situacionAcademica != null"
              >
              </v-select>
              <v-select
                v-if="nuevaPersona.situacionAcademica == 'Docente'"
                label="Ingrese cantidad de horas semanales dedicadas a investigación*"
                :items="horasDocente"
                v-model="nuevaPersona.investigador.cantidadDeHoras"
                :rules="reglaCampoVacio"
                v-show="nuevaPersona.situacionAcademica != null"
              ></v-select>
            </v-col>
            <v-col> </v-col>
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
                    v-model="nuevaPersona.pasaporte.numero"
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
                      nuevaPersona.pasaporte.fechaDeVencimiento
                    "
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="nuevaPersona.pasaporte.fechaDeVencimiento"
                        label="Fecha de vencimiento"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="nuevaPersona.pasaporte.fechaDeVencimiento"
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
                            nuevaPersona.pasaporte.fechaDeVencimiento
                          )
                        "
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-col>
            <v-col> </v-col><v-col> </v-col>
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
              nuevaPersona:{
            nombre:'',
            apellido:'',
            dni:'',
            cuil:'',
            direccionPostal:'',
            emailInstitucional:'',
            emailPersonal:'',
            celular: '',
            pasaporte:{
                numero:'',
                fechaDeVencimiento:''
            },
            situacionAcademica:null,
            investigador: {
            tipoDeInvestigador:null,
            categoriaDeInvestigador:'',
            fechaDeObtencionDeCategoria:'',
            numeroDeResolucion:'',
            cantidadDeHoras:''

            }

            },
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
    };
  },
  methods: {
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
        pasaporte: !this.tienePasaporte
          ? null
          : {
              numero: this.nuevaPersona.pasaporte.numero,
              fechaDeVencimiento: this.nuevaPersona.pasaporte.fechaDeVencimiento,
            },
        investigador: {
          categoriaDeInvestigador: this.nuevaPersona.investigador.categoriaDeInvestigador,
          tipoDeInvestigador: this.nuevaPersona.investigador.tipoInvestigtipoDeInvestigadorador,
          cantidadDeHoras: this.nuevaPersona.investigador.cantidadDeHoras,
          fechaDeObtencionDeCategoria: this.nuevaPersona.investigador.fechaDeObtencionDeCategoria,
          numeroDeResolucion: this.nuevaPersona.investigador.numeroDeResolucion,
        }
      };
      await axios
        .post("http://localhost:8080/gestiondepersonas", requestBody)
        .then((response) => console.log(response))
        .then(response => alert("Persona agregada exitosamente"));
      this.$refs.formularioRegistro.reset();
      this.$router.push('/Persona')
    }
  }
};
</script>