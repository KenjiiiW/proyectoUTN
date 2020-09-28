<template>
<v-app-bar clipped-left app dark dense color="#04080F">
    <v-app-bar-nav-icon @click="enviarClick"></v-app-bar-nav-icon> <!-- cuando se clickea sobre este icono, se emite un evento para comunicarse con el componente padre y luego el componente hermano -->
    <v-spacer></v-spacer>
    <v-toolbar-title>GESTIÓN INTEGRAL DE UNIDADES CIENTÍFICAS TECNOLÓGICAS</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
    </v-toolbar-items>

</v-app-bar>
    
</template>
<script>
export default {
    data(){
        return {
        }
    },
    methods:{
        enviarClick(){
            this.$emit("click-enviado") //aca emito el evento que luego sera utilizado en el componente padre
        }
    }
    
}
</script>