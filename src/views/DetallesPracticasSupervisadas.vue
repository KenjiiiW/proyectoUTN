<template>
    <v-container>
        <v-card>
            <v-card-title style="background-color:#EEEEEE" class="justify-center titulo">
                <strong>DETALLES</strong>
                <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          label="Introduzca un año para filtrar"
          class="mx-4"
          :search-input.sync="search"
        ></v-text-field>
                <v-spacer></v-spacer>
            <v-btn
              dark
              color="primary"
              href="http://localhost:8080/reportes/practicasSupervisadas/csv"
              >Export to CSV
            </v-btn>            </v-card-title>
            <v-data-table
            :headers="headers"
            :items="item"
            :search="search">
            
            </v-data-table>
        </v-card>
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
                text: 'Nombre',
                value: "persona.nombre",
                class: 'black--text'
            },
            {
                text: 'Apellido',
                value: "persona.apellido",
                class: 'black--text'
            }
        ],
        item: [],
        search:'',
        elementoActual : {},
        requestSubmitted: false,
        serverError : false
    }
},
mounted: function() {
    axios.get("http://localhost:8080/gestiondeformacionacademica/practicasupervisada")
         .then(response => {this.item = response.data})
         .finally(response => console.log(response));        
},
methods: {
    consultarPersona(){
        this.dialogConsultar = true
    },

},
  watch: {
    search() {
      axios
        .get(
          "http://localhost:8080/gestiondeformacionacademica/filter/practicasupervisada/?año" +
            "=" +
            this.search.trim()
        )
        .then((response) => {
          this.item = response.data;
          this.count = response.data;
          this.entries = response.data;
        })
        .then(this.requestSubmitted = true)
        .catch(this.serverError = true)       
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
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