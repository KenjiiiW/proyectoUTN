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
var axios = require('axios');
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
                text: 'Codigo Postal',
                value: 'direccionPostal',
                class: 'black--text'
                
            },
            {
                text: 'Tipo de investigador',
                value: 'investigador.tipoDeInvestigador',
                class: 'black--text'
            },
            {
                text: 'Categoria de investigador',
                value: 'investigador.categoriaDeInvestigador',
                class: 'black--text'
            },
            {
                text: 'Acciones',
                value: 'actions',
                align: 'center',
                class: 'black--text'
            }
        ],
        item : [],
        search:'',
        dialogModificar:false,
        dialogEliminar:false,
        dialogConsultar:false
    }
},
mounted: function() {
    axios.get("http://localhost:8080/gestiondepersonas/")
         .then(response => {this.item = response.data})
         .finally(response => console.log(response));        
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