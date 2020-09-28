import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        personas: [],

    },
    mutations: {
        agregarPersona(state, unaPersona) {
            var nuevaPersona = {}
            nuevaPersona = unaPersona
            state.personas.push(nuevaPersona)
        }

    },
    actions: {

    }
})