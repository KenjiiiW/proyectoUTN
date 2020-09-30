<template>
    <v-navigation-drawer style="background-color:#DAE3E5" height="100%" clipped v-model="drawer" app>

       <v-list-item to="Persona">
           <v-list-item-title><strong>Personas</strong></v-list-item-title>
       </v-list-item>

       <v-list-item to="TesisPosgrado">
           <v-list-item-title><strong>Tesis de posgrado</strong></v-list-item-title>
       </v-list-item>

        <v-list-item to="TesisLicenciatura">
           <v-list-item-title><strong>Tesinas de licenciatura</strong></v-list-item-title>
        </v-list-item>
        <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item 
                v-bind="attrs"
                v-on="on" 
                class="proyectoFinal" 
                to="ProyectoFinal">
                    <v-list-item-title><strong>Proyectos finales de ingeniería</strong></v-list-item-title>
                </v-list-item>
            </template>
            <span>Proyectos finales de ingeniería</span>
        </v-tooltip>
        <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item 
                v-bind="attrs"
                v-on="on" 
                to="PracticaSupervisadaIngenieria">
                    <v-list-item-title><strong>Prácticas supervisadas de ingeniería</strong></v-list-item-title>
                </v-list-item>
            </template>
            <span>Prácticas supervisadas de ingeniería</span>
        </v-tooltip>
        <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item 
                v-bind="attrs"
                v-on="on" 
                to="PracticaProfesionalizanteSecundaria">
                    <v-list-item-title><strong>Prácticas profesionalizantes de escuelas secundarias</strong></v-list-item-title>
                </v-list-item>
            </template>
            <span>Prácticas profesionalizantes de escuelas secundarias</span>
        </v-tooltip>
       <v-list-item to="EnsayoCatedra">
           <v-list-item-title><strong>Ensayos de cátedras</strong></v-list-item-title>
       </v-list-item>
       <v-list-item>
           <v-list-item-title><strong>Informes</strong></v-list-item-title>
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
