<template>
    <v-container>
        <v-card elevation="12">
            <v-card-title class="justify-center blue lighten-5">
                REGISTRO DE TESIS DE LICENCIATURA
            </v-card-title>
            <v-card-text>
                <v-form v-model="validoFormulario" ref="formularioRegistro">
                    <v-row>
                        <v-col>
                            <v-btn block>SELECCIONAR PERSONA A CARGO DE LA TESIS</v-btn>
                        </v-col>
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
                <v-btn :disabled="!validoFormulario" text color="success" @click="validar">Confirmar registro</v-btn>
                <v-btn @click="limpiar()" text color="deep-orange darken-4">Limpiar campos</v-btn>
            </v-card-actions>
        </v-card>

    </v-container>
    
</template>

<script>
export default {
data () {
    return {
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
            'Sin financiamiento',
            'CONICET',
            'CIC',
            'Agencia',
            'UTN',
            'FONCYT',
            'Otro'
        ]
    }
},
methods: {
    limpiar(){
        this.$refs.formularioRegistro.reset()
        this.validoFormulario = false
    },
    validar(){
        this.$refs.formularioRegistro.validate()
        this.$refs.formularioRegistro.reset()
    }
}
    
}
</script>