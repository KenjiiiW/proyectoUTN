<template>
    <v-container>
        <v-card elevation="12">
            <v-card-title class="justify-center blue lighten-5">
                REGISTRO DE ENSAYO DE CÁTEDRA
            </v-card-title>
            <v-card-text>
                <v-form v-model="validoFormulario" ref="formularioRegistro">
                    <v-row>
                        <v-col>
                            <v-btn block>SELECCIONAR PERSONA A CARGO DEL ENSAYO</v-btn>
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col>
                            <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="nuevoEnsayoCatedra.fechaInicio"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    v-model="nuevoEnsayoCatedra.fechaInicio"
                                    label="Fecha de inicio*"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :rules="reglaCampoVacio"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="nuevoEnsayoCatedra.fechaInicio" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="deep-orange darken-4" @click="menu = false">Cancelar</v-btn>
                                <v-btn text color="success" @click="$refs.menu.save(nuevoEnsayoCatedra.fechaInicio)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col>
                            <v-menu
                            ref="menu2"
                            v-model="menu2"
                            :close-on-content-click="false"
                            :return-value.sync="nuevoEnsayoCatedra.fechaFinalizacion"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    v-model="nuevoEnsayoCatedra.fechaFinalizacion"
                                    label="Fecha de finalización"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="nuevoEnsayoCatedra.fechaFinalizacion" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="deep-orange darken-4" @click="menu2 = false">Cancelar</v-btn>
                                <v-btn text color="success" @click="$refs.menu2.save(nuevoEnsayoCatedra.fechaFinalizacion)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Nombre de la cátedra*"
                            v-model="nuevoEnsayoCatedra.catedra"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Nombre de la carrera*"
                            v-model="nuevoEnsayoCatedra.carrera"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Título del ensayo*"
                            v-model="nuevoEnsayoCatedra.titulo"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Tutor*"
                            hint="Escriba nombre y apellido del tutor"
                            v-model="nuevoEnsayoCatedra.tutorUct"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Docente de la cátedra*"
                            hint="Escriba nombre y apellido del docente de la cátedra"
                            v-model="nuevoEnsayoCatedra.docente"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Vinculación del ensayo*"
                            hint="Escriba la vinculación del con PID o la iniciativa de investigación en la UCT"
                            v-model="nuevoEnsayoCatedra.vinculacion"
                            :rules="reglaCampoVacio"></v-text-field>
                            
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-select
                            label="Fuente de financiamiento"
                            v-model="nuevoEnsayoCatedra.fuenteFinanciamiento"
                            :items="fuentesFinanciamiento"></v-select>
                        </v-col>
                        <v-col>

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
export default {
data () {
    return {
        nuevoEnsayoCatedra: {
            fechaInicio:'',
            fechaFinalizacion:'',
            catedra:'',
            carrera:'',
            titulo:'',
            tutorUct:'',
            docente:'',
            vinculacion:'',
            fuenteFinanciamiento:'',
            nombre: '',
            apellido:''
        },
        personaExistente: {},
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
        ],
        menu:false,
        menu2:false
    }
},
methods: {
    limpiar(){
        this.$refs.formularioRegistro.reset()
        this.validoFormulario = false
    },
    async validar(){
        this.$refs.formularioRegistro.validate()
        await axios.get('http://localhost:8080/gestiondepersonas/nombre/'+ this.nuevaTesisPosgrado.nombre)
        .then(response => {this.personaExistente = response.data})
        .finally(response => console.log(response));  
        var requestBody = {
            fechaInicio : this.nuevaTesisPosgrado.fechaInicio,
            fechaFinal : this.nuevaTesisPosgrado.fechaFinalizacion,
            carrera : this.nuevaTesisPosgrado.carrera,
            universidad : this.nuevaTesisPosgrado.universidad,
            titulo : this.nuevaTesisPosgrado.titulo,
            director : this.nuevaTesisPosgrado.director,
            tipoDePractica: {
                tipoDePractica: "ensayo_catedra"
            },
            vinculacionConProyecto: {
                name: "giuct"
            },
            fuenteDeFinanciamiento: {
                fuente : this.nuevaTesisPosgrado.fuenteFinanciamiento == 'Otro' ? "utn" : this.nuevaTesisPosgrado.fuenteFinanciamiento
            },
            persona: this.personaExistente
        };
        axios.post("http://localhost:8080/gestiondeformacionacademica/", requestBody)
            .then(response => console.log(response));        
            this.$refs.formularioRegistro.reset()
    }
}
    
}
</script>