<template>
    <v-container>
        <v-card>
            <v-card-title style="background-color:#EEEEEE" class="justify-center titulo">
                <strong>PERSONAS</strong>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Búsqueda"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn dark color="light-blue accent-3" elevation="12" fab to="AltaPersona"><v-icon>add</v-icon></v-btn>
            </v-card-title>
            <v-data-table
            :headers="headers"
            :items="item"
            :search="search">
                <template v-slot:item.actions="{ item }">
                    <v-btn text fab elevation="0" @click="consultarPersona(item)">
                        <v-icon >visibility</v-icon>
                    </v-btn>

                    <v-btn text fab elevation="0" @click="modificarPersona(item)">
                        <v-icon>create</v-icon>
                    </v-btn>

                    <v-btn text fab elevation="0" @click="eliminarPersona(item)">
                        <v-icon>delete_outline</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card>
        <v-dialog max-width="25%" v-model="dialogEliminar">
            <v-card>
                <v-card-title class="justify-center">
                    ¿Seguro desea eliminar esta persona?
                </v-card-title>
                <v-card-actions>
                    <v-spacer>

                    </v-spacer>
                    <v-btn text color="success">Confirmar</v-btn>
                    <v-btn text color="deep-orange darken-4" @click="cerrarDialogEliminar()">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog max-width="25%" v-model="dialogConsultar">
            <v-card>
                <v-card-title class="justify-center">
                    DATOS DE PERSONA
                </v-card-title>
                <v-card-actions>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
data(){
    return {
        headers:[
            {
                text: 'Nombre',
                value: 'nombre',
                class: 'black--text'
                
            },
            {
                text: 'Apellido',
                value: 'apellido',
                class: 'black--text'
                
            },
            {
                text: 'DNI',
                value: 'dni',
                class: 'black--text'
                
            },
            {
                text: 'Email personal',
                value: 'emailPersonal',
                class: 'black--text'
                
            },
            {
                text: 'Situación académica',
                value: 'situacionAcademica',
                class: 'black--text'
            },
            {
                text: 'Acciones',
                value: 'actions',
                align: 'center',
                class: 'black--text'
            }
        ],
        item: [
            {
                nombre: 'Kenji',
                apellido: 'Wake',
                emailPersonal: 'kenjiiiw@gmail.com',
                dni: '534534545',
                situacionAcademica: 'Alumno'
            },
            {
                nombre: 'Pablo',
                apellido: 'Strelchenia',
                emailPersonal: 'pablostrel@gmail.com',
                dni: '123436534',
                situacionAcademica: 'Alumno'
            },
            {
                nombre: 'Samuel',
                apellido: 'Vera',
                emailPersonal: 'samuelvera98@gmail.com',
                dni: '43545656453',
                situacionAcademica: 'Alumno'
            }
        ],
        search:'',
        dialogModificar:false,
        dialogEliminar:false,
        dialogConsultar:false
    }
},
methods: {
    consultarPersona(){
        this.dialogConsultar = true
    },
    eliminarPersona(){
        this.dialogEliminar = true
    },
    modifcarPersona(){
        this.dialogConsultar = true
    },
    cerrarDialogEliminar(){
        this.dialogEliminar = false
    }
}
}
</script>
<style scoped>
.titulo{
    color:#242424;
    margin-bottom: 0%;
}
</style>