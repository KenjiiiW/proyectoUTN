<template>
    <v-footer app dark color="#04080F" absolute>
        <v-row>
            <v-spacer></v-spacer>
            {{ new Date().getFullYear() }} / <v-spacer><strong> Trabajo de campo - Cátedra Diseño de sistemas</strong></v-spacer>
            <strong>UTN - Facultad Regional La Plata</strong>
            <img class="imagenFooter" src="@/assets/footer1.svg">
        </v-row>
    </v-footer>
</template>

<style scoped>
    .imagenFooter{
        width: 23px;
        margin-left: 10px;
    }

</style>