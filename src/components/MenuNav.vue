<template>
    <v-navigation-drawer color="blue lighten-5" clipped v-model="drawer" app>
       <v-list-item to="Personas">
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title>Personas</v-list-item-title>
       </v-list-item>
       <v-list-item to="TesisPosgrado">
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title>Tesis de posgrado</v-list-item-title>
       </v-list-item>
       <v-list-item>
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title>Tesinas de licenciatura</v-list-item-title>
       </v-list-item>
       <v-list-item>
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title>Proyectos finales de ingeniería</v-list-item-title>
       </v-list-item>
       <v-list-item>
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title>Trabajo integrador de pregrado</v-list-item-title>
       </v-list-item>
       <v-list-item>
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title>Prácticas profesionalizantes de escuelas secundarias</v-list-item-title>
       </v-list-item>
       <v-list-item>
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title>Prácticas supervisadas de ingeniería</v-list-item-title>
       </v-list-item>
       <v-list-item>
           <v-list-item-icon><v-icon>persons</v-icon></v-list-item-icon>
           <v-list-item-title>Prácticas de cátedras</v-list-item-title>
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