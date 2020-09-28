<template>
<v-container>
    <v-row>
        <v-col>
            <v-card><v-card-title class="justify-center"><h3>PRÁCTICAS PROFESIONALIZANTES DE SECUNDARIA</h3></v-card-title></v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" to="AltaPracticaProfesionalizanteSecundaria">
                    <v-card-title class="justify-center">Dar de alta práctica</v-card-title>
                </v-card>
            </v-hover>
        </v-col>      
    </v-row>
    <v-row>
        <v-col>
            <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" to="AltaPersona">
                    <v-card-title class="justify-center">Consultar práctica</v-card-title>
                </v-card>
            </v-hover>
        </v-col>      
    </v-row>
    <v-row>
        <v-col>
            <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" to="AltaPersona">
                    <v-card-title class="justify-center">Eliminar práctica</v-card-title>
                </v-card>
            </v-hover>
        </v-col>      
    </v-row>
    <v-row>
        <v-col>
            <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" to="AltaPersona">
                    <v-card-title class="justify-center">Modificar práctica</v-card-title>
                </v-card>
            </v-hover>
        </v-col>      
    </v-row>
    
</v-container>

</template>

<style>
</style>