<template>
    <v-navigation-drawer style="background-color:#DAE3E5" height="100%" clipped v-model="drawer" app>
       <v-list-item class="personas" to="Persona">
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title><strong>Personas</strong></v-list-item-title>
       </v-list-item>
       <v-list-item class="tesisPosgrado" to="TesisPosgrado">
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title><strong>Tesis de posgrado</strong></v-list-item-title>
       </v-list-item>
       <v-list-item class="tesisLicenciatura" to="TesisLicenciatura">
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title><strong>Tesinas de licenciatura</strong></v-list-item-title>
       </v-list-item>
       <v-list-item class="proyectoFinal" to="ProyectoFinal">
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title><strong>Proyectos finales de ingeniería</strong></v-list-item-title>
       </v-list-item>
       <v-list-item class="practicaSupervisada" to="PracticaSupervisadaIngenieria">
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title><strong>Prácticas supervisadas de ingeniería</strong></v-list-item-title>
       </v-list-item>
       <v-list-item class="practicaProfesionalizanteSecundaria" to="PracticaProfesionalizanteSecundaria">
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title><strong>Prácticas profesionalizantes de escuelas secundarias</strong></v-list-item-title>
       </v-list-item>
       <v-list-item class="ensayoCatedra" to="EnsayoCatedra">
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title><strong>Ensayos de cátedras</strong></v-list-item-title>
       </v-list-item>
    </v-navigation-drawer>
</template>

<script>
export default {
    data () {
        return {
            drawer:false
        }
    },
    methods: {
        ocultarDrawer(){
            this.drawer= !this.drawer
        },
    }
}
</script>
