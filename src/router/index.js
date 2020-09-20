import Vue from 'vue'
import VueRouter from 'vue-router'
import OtraPagina from '@/views/OtraPagina.vue'
import Personas from '@/views/Personas.vue'
import AltaPersona from '@/views/AltaPersona.vue'
import TesisPosgrado from '@/views/TesisPosgrado.vue'
import AltaTesisPosgrado from '@/views/AltaTesisPosgrado.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'OtraPagina',
        component: OtraPagina
    },
    {
        path: '/Personas',
        component: Personas
    },
    {
        path: '/AltaPersona',
        component: AltaPersona
    },
    {
        path: '/TesisPosgrado',
        component: TesisPosgrado
    },
    {
        path: '/AltaTesisPosgrado',
        component: AltaTesisPosgrado
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router