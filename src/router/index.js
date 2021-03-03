import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

import Persona from '@/views/Persona.vue'
import AltaPersona from '@/views/AltaPersona.vue'
import BajaPersona from '@/views/BajaPersona.vue'
import ModificacionPersona from '@/views/ModificacionPersona.vue'

import TesisPosgrado from '@/views/TesisPosgrado.vue'
import AltaTesisPosgrado from '@/views/AltaTesisPosgrado.vue'
import ModificacionTesisPosgrado from '@/views/ModificacionTesisPosgrado'

import TesisLicenciatura from '@/views/TesisLicenciatura.vue'
import AltaTesisLicenciatura from '@/views/AltaTesisLicenciatura.vue'
import ModificacionTesisLicenciatura from '@/views/ModificacionTesisLicenciatura.vue'

import ProyectoFinal from '@/views/ProyectoFinal.vue'
import AltaProyectoFinal from '@/views/AltaProyectoFinal.vue'
import ModificacionProyectoFinal from '@/views/ModificacionProyectoFinal.vue'


import PracticaSupervisadaIngenieria from '@/views/PracticaSupervisadaIngenieria.vue'
import AltaPracticaSupervisadaIngenieria from '@/views/AltaPracticaSupervisadaIngenieria.vue'
import ModificacionPracticaSupervisada from '@/views/ModificacionPracticaSupervisada.vue'

import PracticaProfesionalizanteSecundaria from '@/views/PracticaProfesionalizanteSecundaria.vue'
import AltaPracticaProfesionalizanteSecundaria from '@/views/AltaPracticaProfesionalizanteSecundaria.vue'
import ModificacionPracticaProfesionalizante from '@/views/ModificacionPracticaProfesionalizante.vue'

import EnsayoCatedra from '@/views/EnsayoCatedra.vue'
import AltaEnsayoCatedra from '@/views/AltaEnsayoCatedra.vue'
import ModificacionEnsayoCatedra from '@/views/ModificacionEnsayoCatedra.vue'

import Informe from '@/views/Informe.vue'
import DetallesEnsayoDeCatedra from '@/views/DetallesEnsayoDeCatedra.vue'
import DetallesPracticasProfesionalizantes from '@/views/DetallesPracticasProfesionalizantes.vue'
import DetallesPracticasSupervisadas from '@/views/DetallesPracticasSupervisadas.vue'
import DetallesProyectoFinal from '@/views/DetallesProyectoFinal.vue'
import DetallesTesisDeLicenciatura from '@/views/DetallesTesisDeLicenciatura.vue'
import DetallesTesisPostgrado from '@/views/DetallesTesisPostgrado.vue'
import DetallesTesis from '@/views/DetallesTesis.vue'
import DetallesPracticas from '@/views/DetallesPracticas.vue'

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
    {
        path: '/ModificacionPersona',
        component: ModificacionPersona,
        name: "ModificacionPersona"
    },

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
        component: ModificacionTesisPosgrado,
        name: "ModificacionTesisPosgrado"
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
        path: '/DetallesEnsayoDeCatedra',
        component: DetallesEnsayoDeCatedra
    },
    {
        path: '/DetallesPracticasProfesionalizantes',
        component: DetallesPracticasProfesionalizantes
    },
    {
        path: '/DetallesPracticasSupervisadas',
        component: DetallesPracticasSupervisadas
    },
    {
        path: '/DetallesProyectoFinal',
        component: DetallesProyectoFinal
    },
    {
        path: '/DetallesTesisDeLicenciatura',
        component: DetallesTesisDeLicenciatura
    },
    {
        path: '/DetallesTesisPostgrado',
        component: DetallesTesisPostgrado
    },
    {
        path: '/DetallesTesis',
        component: DetallesTesis
    },
    {
        path: '/DetallesPracticas',
        component: DetallesPracticas

    },
        {
        path: '/ModificacionTesisLicenciatura',
        component: ModificacionTesisLicenciatura,
        name: "ModificacionTesisLicenciatura"
    },
    {
        path: '/ModificacionProyectoFinal',
        component: ModificacionProyectoFinal,
        name: "ModificacionProyectoFinal"
    },
    {
        path: '/ModificacionPracticaSupervisada',
        component: ModificacionPracticaSupervisada,
        name: "ModificacionPracticaSupervisada"
    },
    {
        path: '/ModificacionPracticaProfesionalizante',
        component: ModificacionPracticaProfesionalizante,
        name: "ModificacionPracticaProfesionalizante"
    },
    {
        path: '/ModificacionEnsayoCatedra',
        component: ModificacionEnsayoCatedra,
        name: "ModificacionEnsayoCatedra"
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router