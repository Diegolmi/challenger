import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)


export default new Vuex.Store({
  
  state: {
    reservas: [
      {
        id:1,
        name: "Natalia Acevedo",
        date: moment().format("YYYY-MM-DD"),
        start: "10:00",
        end: "11:00",
        state: "orange"
      },
      {
        id:2,
        name: "Ignacio",
        date: moment().format("YYYY-MM-DD"),
        start: "13:00",
        end: "15:00",
        state: "orange"
      }
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
  
})
