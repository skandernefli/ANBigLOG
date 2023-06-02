import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        videoPopup:false,
        videoUrl:''
    },
    mutations: {
        SET_VALUE_VIDEO:(state, payload)=> {
            console.log("this is payload", payload)
            state.videoPopup = payload;
            
        },
        SET_VALUE_VIDEO_URL:(state, payload)=> {
            console.log("this is url", payload)
            state.videoUrl = payload;
            
        }
    },
    actions: {
        toggleVideo({state,commit }) {
            commit('SET_VALUE_VIDEO',!state.videoPopup)
        },
        setUrl({commit},payload ) {
            commit('SET_VALUE_VIDEO_URL',payload)
        }
    }

})