import Vue from 'vue';
import Vuex from 'vuex';
import { TOGGLE_CHECK, CLEAR_DONE, ADD_ALL, DELETE_TODO } from "./mutation-types";
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    all:[
      {
        id:1,
        name: '10 minutes meditation',
        done: false
      },
      {
        id:2,
        name: 'Jog around the park 3x',
        done: true
      },
    ],
  },

  getters: {
    doneAll: state => {
      return state.all.filter(todo => todo.done)
    },

    undoneAll: state => {
      return state.all.filter(todo => todo.done === false)
    }
  },

  mutations:{

    [ADD_ALL](state, payload){
      state.all = [...state.all, payload];
    },

    [DELETE_TODO](state, payload){
      let newValue = state.all.filter(todo => todo.id != payload.id);
      Vue.set(state, 'all', newValue);
    },

    [TOGGLE_CHECK](state, payload){
      let index = state.all.findIndex(e => e.id == payload.id);
      Vue.set(state.all, index, {...state.all[index], done: payload.done});
    },

    [CLEAR_DONE](state){
      let undone = state.all.filter(todo => todo.done === false);
      Vue.set(state, 'all', undone);
    }
  }
});