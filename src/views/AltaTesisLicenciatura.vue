<template>
    <v-container>
        <v-card elevation="12">
            <v-card-title class="justify-center blue lighten-5">
                REGISTRO DE TESIS DE LICENCIATURA
            </v-card-title>
            <v-card-text>
                <v-form v-model="validoFormulario" ref="formularioRegistro">
                    <v-row>
<v-card-text>
                <v-autocomplete
                  v-model="model"
                  :items="this.personas"
                  :search-input.sync="search"
                  color="white"
                  hide-no-data
                  hide-selected
                  :item-text="item => item.nombre +' - '+ item.apellido + ' | DNI: '+item.dni"
                  placeholder="Seleccione persona a cargo"
                  prepend-icon="mdi-account-search"
                  return-object
                ></v-autocomplete>
              </v-card-text>
              <v-divider></v-divider>
                    </v-row>
                    
                    <v-row>
                        <v-col>
                            <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="nuevaTesisLicenciatura.fechaInicio"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    v-model="nuevaTesisLicenciatura.fechaInicio"
                                    label="Fecha de inicio*"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :rules="reglaCampoVacio"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="nuevaTesisLicenciatura.fechaInicio" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="deep-orange darken-4" @click="menu = false">Cancelar</v-btn>
                                <v-btn text color="success" @click="$refs.menu.save(nuevaTesisLicenciatura.fechaInicio)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col>
                            <v-menu
                            ref="menu2"
                            v-model="menu2"
                            :close-on-content-click="false"
                            :return-value.sync="nuevaTesisLicenciatura.fechaFinalizacion"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    v-model="nuevaTesisLicenciatura.fechaFinalizacion"
                                    label="Fecha de finalización"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="nuevaTesisLicenciatura.fechaFinalizacion" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="deep-orange darken-4" @click="menu2 = false">Cancelar</v-btn>
                                <v-btn text color="success" @click="$refs.menu2.save(nuevaTesisLicenciatura.fechaFinalizacion)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Nombre de la carrera*"
                            v-model="nuevaTesisLicenciatura.carrera"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Universidad*"
                            v-model="nuevaTesisLicenciatura.universidad"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Título de la tesis*"
                            v-model="nuevaTesisLicenciatura.titulo"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Director*"
                            hint="Escriba nombre y apellido del director"
                            v-model="nuevaTesisLicenciatura.director"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Vinculación de la tesis*"
                            hint="Escriba la vinculación de la tesis con PID o la iniciativa de investigación en la UCT"
                            v-model="nuevaTesisLicenciatura.vinculacion"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-select
                            label="Fuente de financiamiento"
                            v-model="nuevaTesisLicenciatura.fuenteFinanciamiento"
                            :items="fuentesFinanciamiento"></v-select>
                        </v-col>
                    </v-row>

                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="!validoFormulario" text color="success" @click="validar()">Confirmar registro</v-btn>
                <v-btn @click="limpiar()" text color="deep-orange darken-4">Limpiar campos</v-btn>
            </v-card-actions>
        </v-card>

    </v-container>
    
</template>

<script>
var axios = require('axios');
var vuetify = require('vuetify');
export default {
data () {
    return {
        vuetify: vuetify,
        personas: null,
        model:null,
        nuevaTesisLicenciatura: {
            fechaInicio:'',
            fechaFinalizacion:'',
            carrera:'',
            universidad:'',
            titulo:'',
            director:'',
            vinculacion:'',
            fuenteFinanciamiento:''
        },
        personaExistente: {},
        menu:false,
        menu2:false,
        validoFormulario:false,
        reglaCampoVacio:[
            (texto)=>{
                if(texto){
                    return true
                }
                return 'Este campo es obligatorio'
            }
        ],
        fuentesFinanciamiento: [
            'sin financiamiento',
            'conicet',
            'cic',
            'agencia',
            'utn',
            'foncyt',
            'Otro'
        ]
    }
},
mounted: function() {
    axios.get("http://localhost:8080/gestiondepersonas/")
         .then(response => {this.personas = response.data})
         .finally(response => console.log(response));        
},
methods: {
    limpiar(){
        this.$refs.formularioRegistro.reset()
        this.validoFormulario = false
    },
    async validar(){
        this.$refs.formularioRegistro.validate()
        var requestBody = {
            fechaInicio : this.nuevaTesisLicenciatura.fechaInicio,
            fechaFinal : this.nuevaTesisLicenciatura.fechaFinalizacion,
            carrera : this.nuevaTesisLicenciatura.carrera,
            universidad : this.nuevaTesisLicenciatura.universidad,
            titulo : this.nuevaTesisLicenciatura.titulo,
            director : this.nuevaTesisLicenciatura.director,
            tipoDePractica: {
                tipoDePractica: "tesis_postgrado"
            },
            vinculacionConProyecto: {
                name: "giuct"
            },
            fuenteDeFinanciamiento: {
                fuente : this.nuevaTesisLicenciatura.fuenteFinanciamiento == 'Otro' ? "utn" : this.nuevaTesisLicenciatura.fuenteFinanciamiento
            },
            persona: this.model
        };
        await axios.post("http://localhost:8080/gestiondeformacionacademica/", requestBody)
            .then(response => console.log(response))
            .then(alert("la tesis fue agregada de manera exitosa"));        
            this.$refs.formularioRegistro.reset()
        window.location.href= "TesisPosgrado"
    }
}
}
</script>