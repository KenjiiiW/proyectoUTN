<template>
    <v-container>
        <v-card>
            <v-card-title style="background-color:#EEEEEE" class="justify-center titulo">
                <strong>TESIS DE LICENCIATURA</strong>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Búsqueda"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn dark color="light-blue accent-3" elevation="12" fab to="AltaTesisLicenciatura"><v-icon>add</v-icon></v-btn>
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
                    ¿Seguro desea eliminar esta tesis?
                </v-card-title>
                <v-card-actions>
                    <v-spacer>

                    </v-spacer>
                    <v-btn text color="success" fab to="TesisLicenciatura" @click="confirmarDialogEliminar()">Confirmar</v-btn>
                    <v-btn text color="deep-orange darken-4" @click="cerrarDialogEliminar()">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog max-width="25%" v-model="dialogConsultar">
            <v-card>
                <v-card-title class="justify-center">
                    DATOS DE TESIS
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
                text:'Título de la tesis',
                value: 'titulo',
                class: 'black--text'
            },
            {
                text: 'Fecha de inicio',
                value: 'fechaInicio',
                class: 'black--text'
                
            },
            {
                text: 'Fecha final',
                value: 'fechaFinal',
                class: 'black--text'
                
            },
            {
                text: 'Fuente de financiamiento',
                value: 'fuenteDeFinanciamiento.fuente',
                class: 'black--text'
            },
            {
                text: 'Acciones',
                value: 'actions',
                align: 'center',
                class: 'black--text'
            }
        ],
        item: [],
        search:'',
        dialogModificar:false,
        dialogEliminar:false,
        dialogConsultar:false,
        elementoActual : {}
    }
},
mounted: function() {
    axios.get("http://localhost:8080/gestiondeformacionacademica/tesislicenciatura")
         .then(response => {this.item = response.data})
         .finally(response => console.log(response));        
},
methods: {
    consultarPersona(){
        this.dialogConsultar = true
    },
    eliminar(item){
        this.dialogEliminar = true  
        this.elementoActual = item;
    },
    modifcarPersona(){
        this.dialogConsultar = true
    },
    cerrarDialogEliminar(){
        this.dialogEliminar = false
    },
    async confirmarDialogEliminar(){
        this.dialogEliminar = false
                await axios.delete("http://localhost:8080/gestiondeformacionacademica/id/"+this.elementoActual.id)
         .then(response => console.log(response));  
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