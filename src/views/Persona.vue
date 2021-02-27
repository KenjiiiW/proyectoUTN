<template>
    <v-container>
        <v-card>
            <v-card-title style="background-color:#EEEEEE" class="justify-center titulo">
                <strong>PERSONAS</strong>
                <v-spacer></v-spacer>
                
                <v-spacer></v-spacer>
                <v-btn dark color="light-blue accent-3" elevation="12" fab to="AltaPersona"><v-icon>add</v-icon></v-btn>
            </v-card-title>
            
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-select
                        :items='filtro'
                        label="Seleccione un filtro para la busqueda"
                        v-model="filtroSeleccionado"></v-select>
                    </v-col>
                    <v-col>
                        <v-text-field
                        v-show="filtroSeleccionado != null"
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Búsqueda"
                        single-line
                        hide-details
                        outlined
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>

                    </v-col>
                    <v-col>
                        <v-btn
                        v-show="filtroSeleccionado != null" 
                        color="primary" x-large fab><v-icon>search</v-icon></v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-spacer></v-spacer>
        
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
        elementoActual: {},
        search:'',
        dialogModificar:false,
        dialogEliminar:false,
        dialogConsultar:false,
        filtro: [
            'Nombre o apellido',
            'DNI',
            'Email',
            'Tipo de investigador'
        ],
        filtroSeleccionado: null,
    }
},
mounted: function() {
    axios.get("http://localhost:8080/gestiondepersonas/")
         .then(response => {this.item = response.data})
         .finally(response => console.log(response));        
},
updated: function() {
        axios.get("http://localhost:8080/gestiondepersonas/")
         .then(response => {this.item = response.data})
         .finally(response => console.log(response));    
},
methods: {
    consultarPersona(){
        this.dialogConsultar = true
    },
    eliminarPersona(item){
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
        await axios.delete("http://localhost:8080/gestiondepersonas/id/"+this.elementoActual.id)
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