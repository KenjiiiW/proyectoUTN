<template>
    <v-container>
        <v-card elevation="12">
            <v-card-title class="justify-center blue lighten-5">
                REGISTRO DE PRÁCTICA PROFESIONALIZANTE DE SECUNDARIA
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
                            :return-value.sync="nuevaPracticaProfesionalizanteSecundaria.fechaInicio"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    v-model="nuevaPracticaProfesionalizanteSecundaria.fechaInicio"
                                    label="Fecha de inicio*"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :rules="reglaCampoVacio"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="nuevaPracticaProfesionalizanteSecundaria.fechaInicio" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="deep-orange darken-4" @click="menu = false">Cancelar</v-btn>
                                <v-btn text color="success" @click="$refs.menu.save(nuevaPracticaProfesionalizanteSecundaria.fechaInicio)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col>
                            <v-menu
                            ref="menu2"
                            v-model="menu2"
                            :close-on-content-click="false"
                            :return-value.sync="nuevaPracticaProfesionalizanteSecundaria.fechaFinalizacion"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                    v-model="nuevaPracticaProfesionalizanteSecundaria.fechaFinalizacion"
                                    label="Fecha de finalización"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="nuevaPracticaProfesionalizanteSecundaria.fechaFinalizacion" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="deep-orange darken-4" @click="menu2 = false">Cancelar</v-btn>
                                <v-btn text color="success" @click="$refs.menu2.save(nuevaPracticaProfesionalizanteSecundaria.fechaFinalizacion)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Nombre de la carrera*"
                            v-model="nuevaPracticaProfesionalizanteSecundaria.carrera"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Escuela*"
                            v-model="nuevaPracticaProfesionalizanteSecundaria.escuela"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Título de la práctica*"
                            v-model="nuevaPracticaProfesionalizanteSecundaria.titulo"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Tutor*"
                            hint="Escriba nombre y apellido del tutor"
                            v-model="nuevaPracticaProfesionalizanteSecundaria.tutor"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Docente*"
                            hint="Escriba nombre y apellido del docente"
                            v-model="nuevaPracticaProfesionalizanteSecundaria.docente"
                            :rules="reglaCampoVacio"></v-text-field>
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
export default {
data () {
    return {
        nuevaPracticaProfesionalizanteSecundaria: {
            fechaInicio:'',
            fechaFinalizacion:'',
            carrera:'',
            escuela:'',
            titulo:'',
            tutor:'',
            docente:''
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