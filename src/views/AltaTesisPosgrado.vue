<template>
    <v-container>
        <v-card elevation="12">
            <v-card-title class="justify-center blue lighten-5">
                REGISTRO DE TESIS DE POSGRADO
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
                </v-list>
              </v-expand-transition>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Nombre de la persona*"
                            v-model="nuevaTesisPosgrado.nombre"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                                                        <v-text-field
                            label="Apellido de la persona*"
                            v-model="nuevaTesisPosgrado.apellido"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col>
                            <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="nuevaTesisPosgrado.fechaInicio"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    v-model="nuevaTesisPosgrado.fechaInicio"
                                    label="Fecha de inicio*"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :rules="reglaCampoVacio"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="nuevaTesisPosgrado.fechaInicio" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="deep-orange darken-4" @click="menu = false">Cancelar</v-btn>
                                <v-btn text color="success" @click="$refs.menu.save(nuevaTesisPosgrado.fechaInicio)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col>
                            <v-menu
                            ref="menu2"
                            v-model="menu2"
                            :close-on-content-click="false"
                            :return-value.sync="nuevaTesisPosgrado.fechaFinalizacion"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    v-model="nuevaTesisPosgrado.fechaFinalizacion"
                                    label="Fecha de finalización"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="nuevaTesisPosgrado.fechaFinalizacion" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="deep-orange darken-4" @click="menu2 = false">Cancelar</v-btn>
                                <v-btn text color="success" @click="$refs.menu2.save(nuevaTesisPosgrado.fechaFinalizacion)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Nombre de la carrera*"
                            v-model="nuevaTesisPosgrado.carrera"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Universidad*"
                            v-model="nuevaTesisPosgrado.universidad"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Título de la tesis*"
                            v-model="nuevaTesisPosgrado.titulo"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Director*"
                            hint="Escriba nombre y apellido del director"
                            v-model="nuevaTesisPosgrado.director"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Vinculación de la tesis*"
                            hint="Escriba la vinculación de la tesis con PID o la iniciativa de investigación en la UCT"
                            v-model="nuevaTesisPosgrado.vinculacion"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-select
                            label="Fuente de financiamiento"
                            v-model="nuevaTesisPosgrado.fuenteFinanciamiento"
                            :items="fuentesFinanciamiento"></v-select>
                        </v-col>
                    </v-row>

                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="!validoFormulario" text color="success" @click="validar">Confirmar registro</v-btn>
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
        nuevaTesisPosgrado: {
            fechaInicio:'',
            fechaFinalizacion:'',
            carrera:'',
            universidad:'',
            titulo:'',
            director:'',
            vinculacion:'',
            fuenteFinanciamiento:'',
            nombre: '',
            apellido:''
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
        arrei : ['nombre', 'apellido'],
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
    concatenateNombreYApellido: item => item.name + ' ' + item.apellido,
    async validar(){
        this.$refs.formularioRegistro.validate()
        await axios.get('http://localhost:8080/gestiondepersonas/?Nombreoapellido='+ this.nuevaTesisPosgrado.nombre + " " + this.nuevaTesisPosgrado.apellido)
        .then(response => {this.personaExistente = response.data[0]})
        .finally(response => console.log(response));  
        alert(this.personaExistente)
        var requestBody = {
            fechaInicio : this.nuevaTesisPosgrado.fechaInicio,
            fechaFinal : this.nuevaTesisPosgrado.fechaFinalizacion,
            carrera : this.nuevaTesisPosgrado.carrera,
            universidad : this.nuevaTesisPosgrado.universidad,
            titulo : this.nuevaTesisPosgrado.titulo,
            director : this.nuevaTesisPosgrado.director,
            tipoDePractica: {
                tipoDePractica: "tesis_postgrado"
            },
            vinculacionConProyecto: {
                name: "giuct"
            },
            fuenteDeFinanciamiento: {
                fuente : this.nuevaTesisPosgrado.fuenteFinanciamiento == 'Otro' ? "utn" : this.nuevaTesisPosgrado.fuenteFinanciamiento
            },
            persona: this.personaExistente
        };
        await axios.post("http://localhost:8080/gestiondeformacionacademica/", requestBody)
            .then(response => console.log(response));        
            this.$refs.formularioRegistro.reset()
        window.location.href= "TesisPosgrado"
    }
}
}
</script>