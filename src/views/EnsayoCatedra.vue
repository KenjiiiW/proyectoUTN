<template>
<v-container>
    <v-row>
        <v-col>
            <v-card><v-card-title class="justify-center"><h3>ENSAYOS DE CÁTEDRA</h3></v-card-title></v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" to="AltaEnsayoCatedra">
                    <v-card-title class="justify-center">Dar de alta ensayo</v-card-title>
                </v-card>
            </v-hover>
        </v-col>      
    </v-row>
    <v-row>
        <v-col>
            <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" to="AltaPersona">
                    <v-card-title class="justify-center">Consultar ensayo</v-card-title>
                </v-card>
            </v-hover>
        </v-col>      
    </v-row>
    <v-row>
        <v-col>
            <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" to="AltaPersona">
                    <v-card-title class="justify-center">Eliminar ensayo</v-card-title>
                </v-card>
            </v-hover>
        </v-col>      
    </v-row>
    <v-row>
        <v-col>
            <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" to="AltaPersona">
                    <v-card-title class="justify-center">Modificar ensayo</v-card-title>
                </v-card>
            </v-hover>
        </v-col>      
    </v-row>
    
</v-container>

</template>

<style>
</style>