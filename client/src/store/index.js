import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        videoPopup:false
    },
    mutations: {
        SET_VALUE_VIDEO:(state, payload)=> {
            console.log(payload)
            state.videoPopup = payload
            
        }
    },
    actions: {
        toggleVideo({state,commit }) {
            commit('SET_VALUE_VIDEO',!state.videoPopup)
        }
    }

})