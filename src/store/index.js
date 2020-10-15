import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  
  state: {
    reservas: [
    ]
  },
  mutations: {
   AGREGAR_RESERVA:(state, reserva) => {
      state.reservas = state.reservas.concat(reserva)
    },
    ELIMINAR_RESERVA:(state,id) => {
      const indexReserva = state.reservas.findIndex(reserva => reserva.id === id)
      state.reservas.splice(indexReserva, 1)
      
    }

  },
  actions: {
    guardarReserva({commit}, reserva){
      commit('AGREGAR_RESERVA', reserva)
    },
    eliminarReserva({commit}, id){
      commit('ELIMINAR_RESERVA', id)
    }

  },
  
  modules: {
  }
})
