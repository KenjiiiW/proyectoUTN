<template>
    <v-container>
        <v-card elevation="12">
            <v-card-title class="blue lighten-4">REGISTRO DE PERSONA</v-card-title>
            <v-card-text>
                <v-form v-model="validoFormulario" ref="formularioRegistro">
                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Nombres*"
                            hint="Escriba el nombre completo sin el apellido"
                            v-model="nuevaPersona.nombre"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field 
                            label="Apellido*" 
                            hint="Escriba el apellido"
                            v-model="nuevaPersona.apellido"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                            label="DNI*"
                            hint="Escriba el DNI sin espacios ni guiones*"
                            v-model="nuevaPersona.dni"
                            :rules="reglaCampoVacio"
                            type="number"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="CUIL*"
                            hint="Escriba el cuil sin espacios ni guiones"
                            v-model="nuevaPersona.cuil"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Dirección postal*"
                            hint="Escriba la dirección"
                            v-model="nuevaPersona.direccionPostal"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Email institucional"
                            hint="Escriba el mail institucional (no obligatorio)"
                            v-model="nuevaPersona.emailInstitucional"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Email personal*"
                            hint="Escriba el mail personal"
                            v-model="nuevaPersona.emailPersonal"
                            :rules="reglaEmail"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Teléfono"
                            hint="Escriba un telefono particular (no obligatorio)"
                            v-model="nuevaPersona.telefono"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field
                            label="Celular *"
                            hint="Escriba su telefono celular"
                            v-model="nuevaPersona.celular"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-select
                            label="Tipo de investigador"
                            :items="tiposInvestigador"
                            :rules="reglaCampoVacio"></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-select
                            label="Posición"
                            hint="Indique si es alumno, graduado o docente (si es alumno/graduado ayudante, seleccione docente)"
                            :items="opcionTipoPersona"
                            v-model="nuevaPersona.posicion"
                            :rules="reglaCampoVacio"></v-select>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Numero de pasaporte"
                            hint="Escriba el numero del pasaporte"
                            v-model="nuevaPersona.pasaporte.numero"
                            v-if="nuevaPersona.pasaporte.tiene == 'Si'"
                            :rules="reglaCampoVacio"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-row>
                                <v-col>
                                <v-btn block v-if="nuevaPersona.posicion == 'Docente'" @click="mostrarDialogMateria">Cargar materia en la que participa</v-btn>
                            </v-col>
                            <v-col>
                                <v-btn block v-if="nuevaPersona.posicion == 'Docente'" @click="mostrarListaMaterias">Mostrar materias agregadas</v-btn>
                            </v-col>

                            </v-row>
                        </v-col>
                        <v-col>
                            <v-text-field
                            label="Fecha de vencimiento de pasaporte"
                            v-model="nuevaPersona.pasaporte.fechaVencimiento"
                            v-if="nuevaPersona.pasaporte.tiene == 'Si'"
                            :rules="reglaCampoVacio">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-select
                            label="Pasaporte"
                            hint="Indique si posee pasaporte"
                            :items="opcionPasaporte"
                            v-model="nuevaPersona.pasaporte.tiene"
                            :rules="reglaCampoVacio"></v-select>
                        </v-col>
                        <v-col>
                            <v-text-field></v-text-field>
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
        <v-dialog max-width="50%" v-model="dialogMateria">
            <v-card>
                <v-card-title class="justify-center blue lighten-4">AGREGAR MATERIA</v-card-title>
                <v-card-text>
                    <v-form v-model="validoMateria" ref="formularioMateria">
                        <v-row>
                            <v-col>
                                <v-text-field
                                label="Materia"
                                hint="Ingrese nombre de la materia"
                                :rules="reglaCampoVacio"
                                v-model="nuevaMateriaAux.nombre"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-select
                                label="Cargo docente"
                                hint="Seleccione el cargo que ocupa"
                                :items="cargosDocentes"
                                :rules="reglaCampoVacio"
                                v-model="nuevaMateriaAux.cargo"></v-select>
                            </v-col>
                            <v-col>
                                <v-select
                                label="Dedicación"
                                hint="Seleccione la dedicación"
                                :items="categoriasDedicaciones"
                                :rules="reglaCampoVacio"
                                v-model="nuevaMateriaAux.dedicacion"></v-select>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="!validoMateria" text color="success" @click="cargarMateria">Confirmar materia</v-btn>
                    <v-btn @click="cerrarDialogMateria" text color="deep-orange darken-4">Cancelar</v-btn>
                </v-card-actions>
            </v-card>

        </v-dialog>
        <v-dialog v-model="dialogListaMaterias">
            <v-card>
                <v-card-title>MATERIAS AGREGADAS</v-card-title>
                <v-card-text>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
data () {
    return {
        nuevaPersona:{
            nombre:'',
            apellido:'',
            dni:'',
            cuil:'',
            direccionPostal:'',
            emailInstitucional:'',
            emailPersonal:'',
            telefono:'',
            fechaNacimiento:'',
            pasaporte:{
                tiene:'',
                numero:''
            },
            posicion:'',
            materias:[]
            },
        itemsHoras: [
            '6',
            '12',
            '18',
            'Otro'
        ],
        opcionPasaporte: [
            'Si',
            'No'
        ],
        opcionTipoPersona: [
            'Alumno',
            'Graduado',
            'Docente'
        ],
        cargosDocentes: [
            'Profesor titular',
            'Profesor asociado',
            'Profesor adjunto',
            'Jefe de trabajos prácticos',
            'Ayudante 1 - Diplomado',
            'Ayudante 2 - Alumno'
        ],
        categoriasDedicaciones: [
            'Simple',
            'Semi-exclusiva',
            'Exclusiva'
        ],
        tiposInvestigador: [
            'UTN',
            'Nacional',
            'CONICET',
            'CIC'
        ],
        validoFormulario:false,
        validoMateria:false,
        reglaCampoVacio:[
            (texto)=>{
                if(texto && texto.length>0){
                    return true
                }
                return 'Este campo es obligatorio'
            }
        ],
        reglaEmail:[
            (email)=>{
                if(/.+@.+\..+/.test(email)){
                    return true;
                }
                return 'Debe ingresar un email valido'
            }
        ],
        reglaCantidadNegativa:[
            (cantidad)=>{
                if(cantidad >= 0){
                    return true
                }
                return 'No puede ingresar una cantidad negativa'
            }
        ],
        dialogMateria:false,
        dialogListaMaterias:false,
        nuevaMateriaAux:{
            nombre:'',
            cargo:'',
            dedicacion:''
        },
        headersMaterias:[
            'Nombre',
            'Cargo del docente en la materia',
            'Dedicación del docente en la materia'
        ]

    }
    },
methods: {
    mostrarPersona(){
        console.log(this.nuevaPersona)
    },
    limpiar(){
        this.$refs.formularioRegistro.reset()
        this.validoFormulario = false
    },
    validar(){
        this.$refs.formularioRegistro.validate()
    },
    mostrarDialogMateria(){
        this.dialogMateria = true
    },
    cerrarDialogMateria(){
        this.$refs.formularioMateria.reset()
        this.dialogMateria = false
    },
    mostrarListaMaterias(){
        this.dialogListaMaterias = true
        console.log(this.nuevaPersona)
    },
    cargarMateria(){
        const nuevaMateria = {}
        nuevaMateria.nombre = this.nuevaMateriaAux.nombre
        nuevaMateria.cargo = this.nuevaMateriaAux.cargo
        nuevaMateria.dedicacion = this.nuevaMateriaAux.dedicacion
        this.nuevaPersona.materias.push(nuevaMateria)
        this.dialogMateria = false
    }
}
}
</script>

<style scoped>
    .miForm {
        background-color: white;
    }
</style>