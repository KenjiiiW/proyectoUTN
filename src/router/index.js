import Vue from 'vue'
import VueRouter from 'vue-router'
import OtraPagina from '@/views/OtraPagina.vue'
import Personas from '@/views/Personas.vue'
import AltaPersona from '@/views/AltaPersona.vue'
import TesisPosgrado from '@/views/TesisPosgrado.vue'

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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router