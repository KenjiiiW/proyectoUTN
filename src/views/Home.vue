<template>
    <v-container>
            <v-row>
                <v-col md="4" lg="4" xl="4" sm="12" sx="12">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card
                            class="mx-auto"
                            max-width="344">  
                                <v-img src="@/assets/personas.jpg"></v-img>
                                <v-card-text>
                                    <h2 class="title primary--text">
                                        PERSONAS
                                    </h2>
                                    Gestión de personas
                                </v-card-text>
                                <v-fade-transition>
                                    <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="blue lighten-3"
                                    >
                                        <v-btn to="Persona">Gestionar personas</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
                <v-col md="4" lg="4" xl="4" sm="12" sx="12">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card
                            class="mx-auto"
                            max-width="344">  
                                <v-img src="@/assets/tesisPosgrado.jpg"></v-img>
                                <v-card-text>
                                    <h2 class="title primary--text">
                                        TESIS DE POSGRADO
                                    </h2>
                                    Gestión de tesis de posgrado
                                </v-card-text>
                                <v-fade-transition>
                                    <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="blue lighten-3"
                                    >
                                        <v-btn to="TesisPosgrado">Gestionar tesis</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
                <v-col md="4" lg="4" xl="4" sm="12" sx="12">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card
                            class="mx-auto"
                            max-width="344">  
                                <v-img src="@/assets/tesisLicenciatura.jpg"></v-img>
                                <v-card-text>
                                    <h2 class="title primary--text">
                                        TESIS DE LICENCIATURA
                                    </h2>
                                    Gestión de tesis de licenciatura
                                </v-card-text>
                                <v-fade-transition>
                                    <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="blue lighten-3"
                                    >
                                        <v-btn to="TesisLicenciatura">Gestionar tesis</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="4" lg="4" xl="4" sm="12" sx="12">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card
                            class="mx-auto"
                            max-width="344">  
                                <v-img src="@/assets/practicasSupervisadas.jpg"></v-img>
                                <v-card-text>
                                    <h2 class="title primary--text">
                                        PRÁCTICA SUPERVISADA
                                    </h2>
                                    Gestión de prácticas supervisadas de ingeniería
                                </v-card-text>
                                <v-fade-transition>
                                    <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="blue lighten-3"
                                    >
                                        <v-btn to="PracticaSupervisadaIngenieria">Gestionar prácticas</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
                <v-col md="4" lg="4" xl="4" sm="12" sx="12">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card
                            class="mx-auto"
                            max-width="344">  
                                <v-img src="@/assets/practicasProfesionalizantes.jpg"></v-img>
                                <v-card-text>
                                    <h2 class="title primary--text">
                                        PRÁCTICA PROFESIONALIZANTE
                                    </h2>
                                    Gestión de prácticas profesionalizantes
                                </v-card-text>
                                <v-fade-transition>
                                    <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="blue lighten-3"
                                    >
                                        <v-btn to="PracticaProfesionalizanteSecundaria">Gestionar prácticas</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
                <v-col md="4" lg="4" xl="4" sm="12" sx="12">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card
                            class="mx-auto"
                            max-width="344">  
                                <v-img src="@/assets/proyectoFinal.jpg"></v-img>
                                <v-card-text>
                                    <h2 class="title primary--text">
                                        PROYECTO FINAL
                                    </h2>
                                    Gestión de proyectos finales de ingeniería
                                </v-card-text>
                                <v-fade-transition>
                                    <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="blue lighten-3"
                                    >
                                        <v-btn to="ProyectoFinal">Gestionar proyectos</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="4" lg="4" xl="4" sm="12" sx="12">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card
                            class="mx-auto"
                            max-width="344">  
                                <v-img src="@/assets/informe.jpg"></v-img>
                                <v-card-text>
                                    <h2 class="title primary--text">
                                        INFORMES
                                    </h2>
                                    Visualización de informes
                                </v-card-text>
                                <v-fade-transition>
                                    <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="blue lighten-3"
                                    >
                                        <v-btn>Visualizar informes</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
                <v-col md="4" lg="4" xl="4" sm="12" sx="12">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card
                            class="mx-auto"
                            max-width="344">  
                                <v-img src="@/assets/ensayosCatedra.jpg"></v-img>
                                <v-card-text>
                                    <h2 class="title primary--text">
                                        ENSAYO DE CÁTEDRA
                                    </h2>
                                    Gestión de ensayos de cátedra
                                </v-card-text>
                                <v-fade-transition>
                                    <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="blue lighten-3"
                                    >
                                        <v-btn to="EnsayoCatedra">Gestionar ensayo</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
                <v-col md="4" lg="4" xl="4" sm="12" sx="12">
                </v-col>
            </v-row>
    </v-container>
</template>
<script>
export default {
    data () {
        return {
            overlay: false
        }
    }
}
</script>

<style scoped>
</style>