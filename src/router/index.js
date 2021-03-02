import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

import Persona from '@/views/Persona.vue'
import AltaPersona from '@/views/AltaPersona.vue'
import BajaPersona from '@/views/BajaPersona.vue'
// import ModificacionPersona from '@/views/ModificacionPersona.vue'

import TesisPosgrado from '@/views/TesisPosgrado.vue'
import AltaTesisPosgrado from '@/views/AltaTesisPosgrado.vue'
import ModificacionTesisPosgrado from '@/views/ModificacionTesisPosgrado'

import TesisLicenciatura from '@/views/TesisLicenciatura.vue'
import AltaTesisLicenciatura from '@/views/AltaTesisLicenciatura.vue'

import ProyectoFinal from '@/views/ProyectoFinal.vue'
import AltaProyectoFinal from '@/views/AltaProyectoFinal.vue'

import PracticaSupervisadaIngenieria from '@/views/PracticaSupervisadaIngenieria.vue'
import AltaPracticaSupervisadaIngenieria from '@/views/AltaPracticaSupervisadaIngenieria.vue'

import PracticaProfesionalizanteSecundaria from '@/views/PracticaProfesionalizanteSecundaria.vue'
import AltaPracticaProfesionalizanteSecundaria from '@/views/AltaPracticaProfesionalizanteSecundaria.vue'

import EnsayoCatedra from '@/views/EnsayoCatedra.vue'
import AltaEnsayoCatedra from '@/views/AltaEnsayoCatedra.vue'

import Informe from '@/views/Informe.vue'
import Detalles from '@/views/Detalles.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: '',
        component: Home
    },

    {
        path: '/Persona',
        component: Persona
    },
    {
        path: '/AltaPersona',
        component: AltaPersona
    },
    {
        path: '/BajaPersona',
        component: BajaPersona
    },
    // {
    //     path: '/ModificacionPersona',
    //     component: ModificacionPersona,
    //     name: "ModificacionPersona"
    // },

    {
        path: '/TesisPosgrado',
        component: TesisPosgrado
    },
    {
        path: '/AltaTesisPosgrado',
        component: AltaTesisPosgrado
    },
    {
        path: '/ModificacionTesisPosgrado',
        component: ModificacionTesisPosgrado
    },
    {
        path: '/TesisLicenciatura',
        component: TesisLicenciatura
    },
    {
        path: '/AltaTesisLicenciatura',
        component: AltaTesisLicenciatura
    },

    {
        path: '/ProyectoFinal',
        component: ProyectoFinal
    },
    {
        path: '/AltaProyectoFinal',
        component: AltaProyectoFinal
    },

    {
        path: '/PracticaSupervisadaIngenieria',
        component: PracticaSupervisadaIngenieria
    },
    {
        path: '/AltaPracticaSupervisadaIngenieria',
        component: AltaPracticaSupervisadaIngenieria
    },

    {
        path: '/PracticaProfesionalizanteSecundaria',
        component: PracticaProfesionalizanteSecundaria
    },
    {
        path: '/AltaPracticaProfesionalizanteSecundaria',
        component: AltaPracticaProfesionalizanteSecundaria
    },

    {
        path: '/EnsayoCatedra',
        component: EnsayoCatedra
    },
    {
        path: '/AltaEnsayoCatedra',
        component: AltaEnsayoCatedra
    },
    {
        path: '/Informe',
        component: Informe
    },
    {
        path: '/Detalles',
        component: Detalles
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router