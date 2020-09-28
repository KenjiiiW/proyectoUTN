<template>
    <v-container>
        <v-card>
            <v-card-title style="background-color:#EEEEEE" class="justify-center titulo">
                <strong>PRÁCTICAS SUPERVISADAS DE INGENIERÍA</strong>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Búsqueda"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn dark color="light-blue accent-3" elevation="12" fab to="AltaPracticaSupervisadaIngenieria"><v-icon>add</v-icon></v-btn>
            </v-card-title>
            <v-data-table
            :headers="headers"
            :items="item"
            :search="search">
                <template v-slot:item.actions="{ item }">
                    <v-btn text fab elevation="0" @click="consultar(item)">
                        <v-icon >visibility</v-icon>
                    </v-btn>

                    <v-btn text fab elevation="0" @click="modificar(item)">
                        <v-icon>create</v-icon>
                    </v-btn>

                    <v-btn text fab elevation="0" @click="eliminar(item)">
                        <v-icon>delete_outline</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card>
        <v-dialog max-width="25%" v-model="dialogEliminar">
            <v-card>
                <v-card-title class="justify-center">
                    ¿Seguro desea eliminar esta práctica?
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
                    DATOS DE PRÁCTICA
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
                text:'Título de la práctica',
                value: 'tituloPractica',
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
                text: 'Fuente de financiamiento',
                value: 'fuenteFinanciamiento',
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
                tituloPractica: 'La importancia de la transformación digital en las empresas',
                nombre: 'Kenji',
                apellido: 'Wake',
                fuenteFinanciamiento: 'CONICET',
                dni: '534534545',
            },
            {
                tituloPractica: 'La importancia de la transformación digital en las empresas',
                nombre: 'Pablo',
                apellido: 'Strelchenia',
                fuenteFinanciamiento: 'Agencia',
                dni: '123436534',
            },
            {
                tituloPractica: 'La importancia de la transformación digital en las empresas',
                nombre: 'Samuel',
                apellido: 'Vera',
                fuenteFinanciamiento: 'CIC',
                dni: '43545656453',
            }
        ],
        search:'',
        dialogModificar:false,
        dialogEliminar:false,
        dialogConsultar:false
    }
},
methods: {
    consultar(){
        this.dialogConsultar = true
    },
    eliminar(){
        this.dialogEliminar = true
    },
    modifcar(){
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