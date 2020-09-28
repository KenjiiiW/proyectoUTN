<template>
    <v-container>
        <v-card>
            <v-card-title style="background-color:#EEEEEE" class="justify-center titulo ">
                PERSONAS
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
            :headers="headers"
            :items="item">
                <template v-slot:item.actions="{ item }">
                    <v-icon
                    @click="consultarPersona(item)">visibility</v-icon>
                    <v-icon
                    @click="modificarPersona(item)">create</v-icon>
                    <v-icon
                    @click="eliminarPersona(item)">delete_outline</v-icon>
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script>
export default {
data(){
    return {
        headers:[
            { 
                text: '#',
                align: 'start',
                class: 'black--text'
                
            },
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
        ]
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