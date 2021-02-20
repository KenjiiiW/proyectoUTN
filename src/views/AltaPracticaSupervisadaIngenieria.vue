<template>
    <v-container>
        <v-card elevation="12">
            <v-card-title class="justify-center blue lighten-5">
                REGISTRO DE PRACTICAS SUPERVISADAS DE INGENIERÍA
            </v-card-title>
            <v-card-text>
                <v-form v-model="validoFormulario" ref="formularioRegistro">
                    <v-row>
                        <v-col>
                            <v-btn block>SELECCIONAR PERSONA A CARGO DE LA PRÁCTICA</v-btn>
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col>
                            <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="nuevaPracticaSupervisada.fechaInicio"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    v-model="nuevaPracticaSupervisada.fechaInicio"
                                    label="Fecha de inicio*"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :rules="reglaCampoVacio"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="nuevaPracticaSupervisada.fechaInicio" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="deep-orange darken-4" @click="menu = false">Cancelar</v-btn>
                                <v-btn text color="success" @click="$refs.menu.save(nuevaPracticaSupervisada.fechaInicio)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col>
                            <v-menu
                            ref="menu2"
                            v-model="menu2"
                            :close-on-content-click="false"
                            :return-value.sync="nuevaPracticaSupervisada.fechaFinalizacion"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    v-model="nuevaPracticaSupervisada.fechaFinalizacion"
                                    label="Fecha de finalización"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="nuevaPracticaSupervisada.fechaFinalizacion" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="deep-orange darken-4" @click="menu2 = false">Cancelar</v-btn>
                                <v-btn text color="success" @click="$refs.menu2.save(nuevaPracticaSupervisada.fechaFinalizacion)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Nombre de la carrera*"
                            v-model="nuevaPracticaSupervisada.carrera"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Universidad*"
                            v-model="nuevaPracticaSupervisada.universidad"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Título de la práctica*"
                            v-model="nuevaPracticaSupervisada.titulo"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Director*"
                            hint="Escriba nombre y apellido del director"
                            v-model="nuevaPracticaSupervisada.director"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Tutor UCT"
                            hint="Escriba nombre y apellido del tutor"
                            v-model="nuevaPracticaSupervisada.tutorUct"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-select
                            label="Fuente de financiamiento"
                            v-model="nuevaPracticaSupervisada.fuenteFinanciamiento"
                            :items="fuentesFinanciamiento"></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Vinculación de la práctica*"
                            hint="Escriba la vinculación de la práctica con PID o la iniciativa de investigación en la UCT"
                            v-model="nuevaPracticaSupervisada.vinculacion"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>

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
export default {
data () {
    return {
        nuevaPracticaSupervisada: {
            fechaInicio:'',
            fechaFinalizacion:'',
            carrera:'',
            universidad:'',
            titulo:'',
            director:'',
            tutorUct:'',
            vinculacion:'',
            fuenteFinanciamiento:'',
            nombre: '',
            apellido:''
        },
        personaExistente: {},
        validoFormulario:false,
        menu:false,
        menu2:false,
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
methods: {
    limpiar(){
        this.$refs.formularioRegistro.reset()
        this.validoFormulario = false
    },
    async validar(){
        this.$refs.formularioRegistro.validate()
        // await axios.get('http://localhost:8080/gestiondepersonas/nombre/'+ this.nuevaTesisPosgrado.nombre)
        // .then(response => {this.personaExistente = response.data})
        // .finally(response => console.log(response));  
        var requestBody = {
            fechaInicio : this.nuevaPracticaSupervisada.fechaInicio,
            fechaFinal : this.nuevaPracticaSupervisada.fechaFinalizacion,
            carrera : this.nuevaPracticaSupervisada.carrera,
            universidad : this.nuevaPracticaSupervisada.universidad,
            titulo : this.nuevaPracticaSupervisada.titulo,
            director : this.nuevaPracticaSupervisada.director,
            tipoDePractica: {
                tipoDePractica: "practica_supervisada"
            },
            vinculacionConProyecto: {
                name: "giuct"
            },
            fuenteDeFinanciamiento: {
                fuente : this.nuevaPracticaSupervisada.fuenteFinanciamiento == 'Otro' ? "utn" : this.nuevaPracticaSupervisada.fuenteFinanciamiento
            }
            // },
            // persona: this.personaExistente
        };
        axios.post("http://localhost:8080/gestiondeformacionacademica/", requestBody)
            .then(response => console.log(response));        
            this.$refs.formularioRegistro.reset()
    }
}
    
}
</script>