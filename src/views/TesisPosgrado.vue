<template>
    <v-container>
        <v-card>
            <v-card-title
            style="background-color: #eeeeee"
            class="justify-center titulo"
            >
                <strong>TESIS DE POSGRADO</strong>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-btn
                dark
                color="light-blue accent-3"
                elevation="12"
                fab
                to="AltaPersona"
                ><v-icon>add</v-icon></v-btn>
            </v-card-title>
            <v-card-text>
            <v-row>
                <v-col class="col-3">
                    <v-autocomplete
                        v-model="filtroSeleccionado"
                        :items="filtros"
                        :search-input.sync="search"
                        chips
                        clearable
                        hide-details
                        hide-selected
                        label="Seleccione un filtro"
                        solo
                    >
              <template v-slot:no-data>
                <v-list-item>
                  <v-list-item-title> Seleccione un filtro </v-list-item-title>
                </v-list-item>
              </template>
              <template v-slot:selection="{ attr, on, item, selected }">
                <v-chip
                  v-bind="attr"
                  :input-value="selected"
                  color="blue-grey"
                  class="white--text"
                  v-on="on"
                >
                  <span v-text="item"></span>
                </v-chip>
              </template>
              <template v-slot:item="{ item }">
                <v-list-item-content>
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-filter</v-icon>
                </v-list-item-action>
              </template>
            </v-autocomplete>
          </v-col>


          <v-col>
      <v-card
      color="blue dark-4"
      dark
    >
    <v-card-title>
    CONSULTA UNA TESIS
        <v-btn v-if="model" text fab elevation="0" @click="modificar(item)">
        <v-icon>create</v-icon>
        </v-btn>
        <v-btn v-if="model" text fab elevation="0" @click="eliminar(item)">
        <v-icon>delete_outline</v-icon>
        </v-btn>
    </v-card-title>
    <v-card-text>
        <v-autocomplete
          v-model="model"
          :items="item"
          :loading="isLoading"
          :search-input.sync="search"
          color="white"
          hide-no-data
          hide-selected
          item-text="nombre"
          item-value="apellido"
          placeholder="Ingrese su busqueda"
          prepend-icon="mdi-account-search"
          return-object
        ></v-autocomplete>
      </v-card-text>
      <v-divider></v-divider>
      <v-expand-transition>
        <v-list
          v-if="model"
          class="blue dark-1"
        >
          <v-list-item
            v-for="(field, i) in fields"
            :key="i"
          >
            <v-list-item-content>
              <v-list-item-title v-text="field.value"></v-list-item-title>
              <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-expand-transition>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!model"
          color="grey darken-3"
          @click="model = null"
        >
          Clear
          <v-icon right>
            mdi-close-circle
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

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
    }
},
mounted: function() {
    axios.get('http://localhost:8080/gestiondeformacionacademica/tesispostgrado')
    .then(response => {this.item = response.data})
    .finally(response => console.log(response));   
},
updated: function() {
        axios.get("http://localhost:8080/gestiondeformacionacademica/tesispostgrado")
         .then(response => {this.item = response.data})
         .finally(response => console.log(response));    
},
methods: {
    consultar(){
        this.dialogConsultar = true
    },
    eliminar(item){
        this.dialogEliminar = true  
        this.elementoActual = item;
    },
    modifcar(){
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
</style>