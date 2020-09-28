<template>
    <v-container>
        <v-card>
            <v-card-title>
            <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
            ></v-text-field>
            </v-card-title>
            <v-data-table
            :headers="headers"
            :items="item">
                <template v-slot:item.actions="{ item }">
                    <v-icon color="red accent-4"
                    @click="eliminarPersona(item)">delete</v-icon>
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
                align: 'start'
            },
            {
                text: 'Nombre',
                value: 'nombre'
            },
            {
                text: 'Apellido',
                value: 'apellido'
            },
            {
                text: 'DNI',
                value: 'dni'
            },
            {
                text: 'Email personal',
                value: 'emailPersonal'
            },
            {
                text: 'Situación académica',
                value: 'situacionAcademica'
            },
            {
                text: 'Acciones',
                value: 'actions',
                align: 'center'
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